/* The offline debate engine and search.
 * - Ranks library entries against free text with weighted BM25 plus a bigram bonus.
 * - Tracks the current topic so follow-up comebacks get the matching prepared reply.
 * - Flags common reasoning patterns (appeal to consequences, God of the gaps, etc.).
 * Runs entirely in the browser; no network. */
(function () {
  "use strict";
  var plain = function (s) { return window.TXT.plain(s); };

  var STOP = new Set(("a an the and or but if then else of to in on at by for with from as is are was were be been being it its this that these those " +
    "i me my mine we us our you your yours he him his she her they them their there here what which who whom whose why how when where " +
    "do does did doing done have has had having not no nor so too very can could would should will shall may might must just also " +
    "than about into over under again further once all any both each few more most other some such only own same out up down off " +
    "am im ive id youre dont doesnt didnt isnt arent wasnt cant wont thats theres theyre lets let get got really actually even " +
    "thing things something anything everything one ones because since while until though although yet still ever every much many like " +
    "think believe say says said know").split(" "));
  // Words that matter in this domain even though they are common.
  ["god", "jesus", "christ", "bible", "evil", "hell", "faith", "proof", "soul", "sin"].forEach(function (w) { STOP.delete(w); });

  function stem(w) {
    if (w.length <= 3) return w;
    var rules = [
      [/ational$/, "ate"], [/ization$/, "ize"], [/fulness$/, "ful"], [/iveness$/, "ive"],
      [/ments?$/, ""], [/ness$/, ""], [/ings?$/, ""], [/ies$/, "y"], [/ied$/, "y"],
      [/(ss|us|is)$/, "$1"], [/(sh|ch|x|z)es$/, "$1"], [/([^s])s$/, "$1"], [/ed$/, ""], [/ly$/, ""]
    ];
    for (var i = 0; i < rules.length; i++) {
      var r = rules[i];
      if (r[0].test(w)) {
        var out = w.replace(r[0], r[1]);
        if (out.length >= 3) return out;
        return w;
      }
    }
    return w;
  }

  function tokens(s) {
    var words = plain(s).toLowerCase().replace(/[’']/g, "").split(/[^a-z0-9^]+/);
    var out = [];
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      if (!w || w.length < 2 || STOP.has(w)) continue;
      out.push(stem(w));
    }
    return out;
  }

  function bigrams(toks) {
    var out = [];
    for (var i = 0; i + 1 < toks.length; i++) out.push(toks[i] + " " + toks[i + 1]);
    return out;
  }

  // ---------- index ----------
  var IDX = null;

  function addField(tf, text, w) {
    var t = tokens(text);
    for (var i = 0; i < t.length; i++) tf[t[i]] = (tf[t[i]] || 0) + w;
    return t;
  }

  function build() {
    var entries = window.DEF.entries;
    var debateDocs = [], searchDocs = [], df = {}, sdf = {};
    var totalLen = 0, totalSLen = 0;
    entries.forEach(function (e) {
      var tf = {}, stf = {};
      var bg = new Set();
      [addField(tf, e.title, 3), addField(tf, e.keys, 3)].forEach(function (t) { bigrams(t).forEach(function (b) { bg.add(b); }); });
      addField(tf, e.claim, 1.2);
      addField(tf, e.who || "", 0.5);
      (e.form || []).forEach(function (f) { addField(tf, f, 1); });
      (e.replies || []).forEach(function (r) {
        addField(tf, r.q, 0.8);
        var kt = addField(tf, r.k || "", 0.8);
        bigrams(kt).forEach(function (b) { bg.add(b); });
      });
      // search index: everything, weighted toward titles
      addField(stf, e.title, 4); addField(stf, e.keys, 2.5); addField(stf, e.claim, 1); addField(stf, e.short, 1);
      addField(stf, e.who || "", 0.8);
      (e.points || []).forEach(function (p) { addField(stf, p.h, 0.8); addField(stf, p.t, 0.35); });
      (e.sources || []).forEach(function (s) { addField(stf, s, 0.3); });

      var len = 0, slen = 0, k;
      for (k in tf) { len += tf[k]; df[k] = (df[k] || 0) + 1; }
      for (k in stf) { slen += stf[k]; sdf[k] = (sdf[k] || 0) + 1; }
      totalLen += len; totalSLen += slen;
      debateDocs.push({ e: e, tf: tf, len: len, bg: bg });
      searchDocs.push({ e: e, tf: stf, len: slen });
    });
    var N = entries.length;
    IDX = {
      N: N, debate: debateDocs, search: searchDocs, df: df, sdf: sdf,
      avg: totalLen / N, savg: totalSLen / N
    };
  }

  function idf(term, dfMap) {
    var n = (dfMap || IDX.df)[term] || 0;
    return Math.log(1 + (IDX.N - n + 0.5) / (n + 0.5));
  }

  function bm25(doc, q, dfMap, avg) {
    var k1 = 1.2, b = 0.6, s = 0, seen = {};
    for (var i = 0; i < q.length; i++) {
      var t = q[i];
      if (seen[t]) continue;
      seen[t] = 1;
      var f = doc.tf[t];
      if (!f) continue;
      s += idf(t, dfMap) * (f * (k1 + 1)) / (f + k1 * (1 - b + b * doc.len / avg));
    }
    return s;
  }

  function rank(text, limit) {
    if (!IDX) build();
    var q = tokens(text), qb = bigrams(q);
    var totalIdf = 0, uq = Array.from(new Set(q));
    uq.forEach(function (t) { totalIdf += idf(t); });
    var res = IDX.debate.map(function (d) {
      var s = bm25(d, q, IDX.df, IDX.avg), hit = 0, terms = 0;
      for (var i = 0; i < qb.length; i++) if (d.bg.has(qb[i])) s += 2.2;
      uq.forEach(function (t) { if (d.tf[t]) { hit += idf(t); terms++; } });
      return { id: d.e.id, entry: d.e, score: s, coverage: totalIdf ? hit / totalIdf : 0, terms: terms };
    });
    res.sort(function (a, b) { return b.score - a.score; });
    return res.slice(0, limit || 6);
  }

  function search(text, limit) {
    if (!IDX) build();
    var q = tokens(text);
    if (!q.length) return [];
    var lowered = text.toLowerCase().trim();
    var res = IDX.search.map(function (d) {
      var s = bm25(d, q, IDX.sdf, IDX.savg);
      if (d.e.title.toLowerCase().indexOf(lowered) !== -1) s += 6;
      return { id: d.e.id, entry: d.e, score: s };
    }).filter(function (r) { return r.score > 0.5; });
    res.sort(function (a, b) { return b.score - a.score; });
    return res.slice(0, limit || 50);
  }

  // ---------- reasoning-pattern checks ----------
  var PATTERNS = [
    { re: /\b(what if (you'?re|you are|ur) wrong|you('ll| will) (burn|go to hell|end up in hell)|repent|hell awaits|better safe than sorry|nothing to lose)\b/i,
      label: "Appeal to consequences", text: "A threat or a payoff can't show a claim is true. Every religion with a hell can ask \"what if you're wrong?\"", link: "pascal" },
    { re: /\b(the bible says|scripture says|god'?s word (says|tells)|it is written|according to (the )?(bible|scripture)|the word of god)\b/i,
      label: "Circular appeal", text: "Quoting scripture to prove scripture assumes what's in question. The Quran and Book of Mormon claim authority the same way.", link: "inerrancy" },
    { re: /\b(science can'?t explain|can'?t be explained|no other explanation|how else (do|would|could) you explain|explain that|only god can|must have been god)\b/i,
      label: "God of the gaps", text: "An unexplained fact isn't evidence for one particular explanation. \"We don't know yet\" is always on the table.", link: "origin-of-life" },
    { re: /\b(billions of (people|christians|believers)|most people (believe|in history)|everyone believes|majority of (people|humans|the world)|millions of people)\b/i,
      label: "Appeal to popularity", text: "Numbers of believers measure how common a belief is, not whether it's true, and the billions disagree about which God.", link: "universal-belief" },
    { re: /\b(scientists? (believe|believed|are christians)|newton|einstein believed|great minds|smart people believe|nobel)\b/i,
      label: "Appeal to authority", text: "Brilliant people have believed contradictory religions. What matters is the argument, not the résumé.", link: "scientists-believe" },
    { re: /\b(i (felt|feel|experienced|have experienced|have seen|saw|know in my heart|just know)|changed my life|my (personal )?(experience|relationship with)|personal relationship)\b/i,
      label: "Personal experience", text: "Experience is real and matters, but believers of every faith report experiences that confirm contradictory beliefs.", link: "religious-experience" },
    { re: /\b(mysterious ways|it'?s a mystery|beyond (our|human) (understanding|comprehension)|can'?t comprehend|finite minds?|ways are higher)\b/i,
      label: "Appeal to mystery", text: "If God's ways are beyond judgment, they're also beyond being called good, and theism stops predicting anything.", link: "skeptical-theism" },
    { re: /\b(atheism is a religion|takes (more )?faith|you have faith too|atheists have faith|faith in science)\b/i,
      label: "Tu quoque", text: "Lack of belief isn't a faith, and trust in science is proportioned to a track record.", link: "atheism-faith" },
    { re: /\b(prove (that )?god (doesn'?t|does not|isn'?t) exist|can'?t prove (that )?god|you can'?t disprove)\b/i,
      label: "Shifting the burden", text: "The person making a claim carries the burden. You can't disprove Zeus either.", link: "burden-of-proof" },
    { re: /\b(you('re| are) (just )?(angry|bitter|rebellious|blind|lost)|you hate god|deep down you know|suppress(ing)? the truth|you want to sin|heart is hardened)\b/i,
      label: "Psychologizing", text: "Guessing at an opponent's motives doesn't address the argument. Romans 1 can't settle what's in a stranger's head.", link: "hiddenness" },
    { re: /\b(god (doesn'?t|does not) need a (cause|creator)|god is (uncaused|eternal and uncaused)|who (made|created) god)\b/i,
      label: "Special pleading?", text: "If something can exist uncaused, the question is why that must be a mind rather than physical reality.", link: "uncaused-god" }
  ];

  function patterns(text) {
    var out = [];
    PATTERNS.forEach(function (p) { if (p.re.test(text)) out.push({ label: p.label, text: p.text, link: p.link }); });
    return out.slice(0, 2);
  }

  // ---------- topic helpers ----------
  function overlapScore(qset, text, w) {
    var t = tokens(text), s = 0, seen = {};
    for (var i = 0; i < t.length; i++) {
      if (qset.has(t[i]) && !seen[t[i]]) { s += idf(t[i]) * (w || 1); seen[t[i]] = 1; }
    }
    return s;
  }

  function bestReply(entry, q, used) {
    var qset = new Set(q), qb = bigrams(q), best = null;
    (entry.replies || []).forEach(function (r, i) {
      if (used && used.has("r" + i)) return;
      var s = overlapScore(qset, r.q, 1) + overlapScore(qset, r.k || "", 1.3);
      var rb = new Set(bigrams(tokens(r.q + " " + (r.k || ""))));
      for (var j = 0; j < qb.length; j++) if (rb.has(qb[j])) s += 2;
      if (!best || s > best.score) best = { i: i, r: r, score: s };
    });
    return best;
  }

  function rankPoints(entry, q, used, n) {
    var qset = new Set(q);
    var pts = (entry.points || []).map(function (p, i) {
      return { i: i, p: p, s: overlapScore(qset, p.h, 2) + overlapScore(qset, p.t, 0.6) - i * 0.15 };
    }).filter(function (x) { return !used.has("p" + x.i); });
    pts.sort(function (a, b) { return b.s - a.s; });
    return pts.slice(0, n);
  }

  function nextChips(entry, used) {
    return (entry.replies || []).filter(function (_, i) { return !used.has("r" + i); }).slice(0, 3).map(function (r) { return r.q; });
  }

  var OPENERS = [
    "Everything that begins to exist has a cause, so the universe must have a cause: God.",
    "The universe is fine-tuned for life. That can't be an accident.",
    "Without God there can be no objective morality.",
    "The disciples died for their belief that Jesus rose. Nobody dies for a lie.",
    "Jesus fulfilled hundreds of prophecies written centuries before he was born.",
    "The tomb was empty and the disciples saw Jesus alive. Only the resurrection explains that.",
    "DNA is a code, and every code needs a coder.",
    "The New Testament is the best-attested document of the ancient world.",
    "Look at the complexity of nature. A painting needs a painter.",
    "What if you're wrong? You'll end up in hell.",
    "God allows suffering because he gave us free will.",
    "I've personally experienced God's presence in my life."
  ];

  // ---------- dialogue ----------
  function newState() { return { topic: null, used: new Set(), turns: 0, visited: [] }; }

  var T_NEW = 6.0;       // minimum score to open a new topic
  var T_WEAK = 3.0;      // below this, we have no idea what the user means
  var T_REPLY = 4.0;     // minimum overlap to use a prepared comeback reply

  function respond(state, text) {
    var t = String(text || "").trim();
    if (!t) return null;
    state.turns++;
    var q = tokens(t);
    var notes = patterns(t);
    var low = t.toLowerCase();

    if (/^(hi|hello|hey|yo|greetings|good (morning|afternoon|evening))\b/.test(low) && q.length < 4) {
      return { kind: "meta", lead: "Hello. Make your best case for God, Christianity, or religion, and I'll answer it with the strongest scholarly rebuttal I have. Pick an opening below or write your own.", next: OPENERS.slice(0, 4) };
    }
    if (/\b(how does this work|what can i (say|ask|argue)|what should i (say|argue)|help me|^help$)\b/.test(low)) {
      return { kind: "meta", lead: "Write an argument the way you'd make it in a debate: \"The universe needs a cause,\" \"The disciples wouldn't die for a lie,\" or \"The Bible is historically reliable.\" I'll find the matching entry, answer it, and offer the common comebacks so you can push back.", next: OPENERS.slice(4, 8) };
    }

    var cur = state.topic ? window.TXT.byId(state.topic) : null;

    if (cur && /^(ok|okay|fair|fair enough|good point|you'?re right|i agree|true|touch[eé]|hmm+|i see|interesting|maybe)\b/.test(low) && q.length < 6) {
      var others = (cur.rel || []).filter(function (id) { return state.visited.indexOf(id) === -1; }).slice(0, 3)
        .map(function (id) { var e = window.TXT.byId(id); return e ? e.title : null; }).filter(Boolean);
      return { kind: "meta", entry: cur.id, lead: "Thanks for engaging with it honestly. If you want to keep testing the case, these related arguments are often raised next. Or bring a new one.", next: others.length ? others : OPENERS.slice(0, 3) };
    }

    var wantsMore = /^(go on|continue|more|and\??|why\??|how so\??|explain|elaborate|tell me more|what else|keep going|next|say more)\b/.test(low) && q.length < 5;
    if (cur && wantsMore) {
      var more = rankPoints(cur, q, state.used, 2);
      if (more.length) {
        more.forEach(function (x) { state.used.add("p" + x.i); });
        return { kind: "continue", entry: cur.id, lead: "Continuing on " + cur.title.replace(/^'|'$/g, "") + ":", points: more.map(function (x) { return x.p; }), next: nextChips(cur, state.used), consulted: [{ id: cur.id, score: 0 }] };
      }
      return { kind: "continue", entry: cur.id, lead: "That's the full case I have on this one. The complete entry has the sources. What's your strongest reply, or do you want to move to another argument?", next: (cur.rel || []).slice(0, 3).map(function (id) { var e = window.TXT.byId(id); return e ? e.title : ""; }).filter(Boolean) };
    }

    var ranked = rank(t, 6);
    var best = ranked[0];
    var consulted = ranked.slice(0, 3).filter(function (r) { return r.score > 1 && r.score >= 0.4 * best.score; }).map(function (r) { return { id: r.id, score: r.score }; });

    // Follow-up on the current topic?
    if (cur) {
      var curScore = 0;
      ranked.forEach(function (r) { if (r.id === cur.id) curScore = r.score; });
      var br = bestReply(cur, q, state.used);
      var onTopic = best && (best.id === cur.id || curScore >= 0.55 * best.score);
      if (br && br.score >= T_REPLY && (onTopic || br.score >= 8 || !best || best.score < T_NEW + 2)) {
        state.used.add("r" + br.i);
        var extra = rankPoints(cur, q, state.used, 1);
        extra.forEach(function (x) { state.used.add("p" + x.i); });
        return { kind: "reply", entry: cur.id, reply: br.r, points: extra.map(function (x) { return x.p; }), notes: notes, next: nextChips(cur, state.used), consulted: consulted };
      }
      if (onTopic && best && best.score >= T_WEAK) {
        var pts = rankPoints(cur, q, state.used, 2);
        if (pts.length) {
          pts.forEach(function (x) { state.used.add("p" + x.i); });
          return { kind: "continue", entry: cur.id, lead: "Taking that point on its own terms:", points: pts.map(function (x) { return x.p; }), notes: notes, next: nextChips(cur, state.used), consulted: consulted };
        }
      }
    }

    // New topic.
    var confident = best && best.score >= T_NEW && (best.terms >= 2 || best.coverage >= 0.5);
    var pick = confident ? best.entry : null;
    if (!pick && notes.length && (!best || best.score < T_NEW)) {
      var linked = window.TXT.byId(notes[0].link);
      if (linked) pick = linked;
    }
    if (pick) {
      state.topic = pick.id;
      state.used = new Set();
      if (state.visited.indexOf(pick.id) === -1) state.visited.push(pick.id);
      var first = rankPoints(pick, q, state.used, 2);
      first.forEach(function (x) { state.used.add("p" + x.i); });
      // If the opening message already matches a prepared comeback, answer it directly.
      var direct = bestReply(pick, q, state.used);
      var directReply = null;
      if (direct && direct.score >= T_REPLY + 3) { directReply = direct.r; state.used.add("r" + direct.i); }
      return {
        kind: pick.skeptic ? "weak" : "new", entry: pick.id,
        lead: pick.short, reply: directReply, points: first.map(function (x) { return x.p; }),
        notes: notes, next: nextChips(pick, state.used), consulted: consulted
      };
    }

    if (best && best.score >= T_WEAK && (best.terms >= 2 || best.coverage >= 0.4)) {
      return {
        kind: "fallback", notes: notes,
        lead: "I'm not sure which argument you're making. Is it one of these? Choose one, or state the argument as a premise and a conclusion (\"X is true, so God exists\").",
        suggest: ranked.slice(0, 3).map(function (r) { return r.id; }), consulted: consulted
      };
    }
    return {
      kind: "fallback", notes: notes,
      lead: "I don't have a prepared answer for that yet. Try putting it as an argument: what's the evidence or premise, and what does it show? Or start with one of these common ones.",
      next: OPENERS.slice((state.turns * 3) % 9, (state.turns * 3) % 9 + 3)
    };
  }

  // Condensed library notes for grounding the live AI mode.
  function contextFor(text, state, maxEntries) {
    var ranked = rank(text, 4).filter(function (r) { return r.score >= T_WEAK; });
    var ids = ranked.map(function (r) { return r.id; });
    if (state && state.topic && ids.indexOf(state.topic) === -1) ids.unshift(state.topic);
    ids = ids.slice(0, maxEntries || 3);
    return ids.map(function (id) {
      var e = window.TXT.byId(id);
      var parts = ["## " + e.title + (e.skeptic ? " (a WEAK skeptic argument; concede it)" : ""),
        "Apologetic claim: " + plain(e.claim), "Short answer: " + plain(e.short)];
      (e.points || []).forEach(function (p) { parts.push("- " + plain(p.h) + ": " + plain(p.t)); });
      (e.replies || []).forEach(function (r) { parts.push("Comeback: " + plain(r.q) + " / Answer: " + plain(r.a)); });
      parts.push("Sources: " + (e.sources || []).join("; "));
      return parts.join("\n");
    }).join("\n\n");
  }

  window.ENGINE = {
    tokens: tokens, rank: rank, search: search, patterns: patterns,
    respond: respond, newState: newState, contextFor: contextFor, OPENERS: OPENERS,
    _thresholds: { T_NEW: T_NEW, T_WEAK: T_WEAK, T_REPLY: T_REPLY }
  };
})();
