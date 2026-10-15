/* Defeaters — app shell: routing, views, search, and the debate arena. */
(function () {
  "use strict";
  var DEF = window.DEF, TXT = window.TXT, ENGINE = window.ENGINE, AI = window.AI;
  var esc = TXT.esc, inline = TXT.inline;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var main = $("#main");

  var CAT = {};
  DEF.cats.forEach(function (c) { CAT[c.id] = c; });
  function entriesIn(cat) { return DEF.entries.filter(function (e) { return e.cat === cat; }); }
  function firstSentences(s, n) {
    var parts = TXT.plain(s).match(/[^.!?]+[.!?]+["”’)]*\s*/g) || [s];
    return parts.slice(0, n || 2).join("").trim();
  }
  var STORE = {
    get: function (k) { try { return localStorage.getItem("defeaters." + k); } catch (e) { return null; } },
    set: function (k, v) { try { if (v == null) localStorage.removeItem("defeaters." + k); else localStorage.setItem("defeaters." + k, v); } catch (e) { /* ignore */ } }
  };

  // ---------- sources index ----------
  var SOURCES = (function () {
    var map = new Map();
    DEF.entries.forEach(function (e) {
      (e.sources || []).forEach(function (s) {
        var key = s.trim();
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(e.id);
      });
    });
    var list = Array.from(map.entries()).map(function (kv) { return { text: kv[0], ids: kv[1] }; });
    list.sort(function (a, b) { return a.text.localeCompare(b.text); });
    return list;
  })();

  // ---------- routing ----------
  function parse(hash) {
    var h = String(hash || "").replace(/^#\/?/, "");
    if (!h) return { view: "home" };
    if (h === "library") return { view: "library", cat: null };
    if (h.indexOf("c.") === 0) return { view: "library", cat: h.slice(2) };
    if (h.indexOf("a.") === 0) return { view: "entry", id: h.slice(2) };
    if (h === "debate") return { view: "debate" };
    if (h === "sources") return { view: "sources" };
    if (h === "case" || h === "method" || h === "about") return { view: "essay", id: h === "case" ? "overview" : h };
    return { view: "home" };
  }
  var current = "";
  function go(token, opts) {
    opts = opts || {};
    current = token;
    if (opts.push !== false) {
      try {
        if (location.hash.replace(/^#/, "") !== token) history.pushState(null, "", token ? "#" + token : location.pathname + location.search);
      } catch (e) { /* history not available in this frame; in-memory routing still works */ }
    }
    render(parse(token));
    if (!opts.keepScroll) { try { window.scrollTo(0, 0); } catch (e) { /* ignore */ } }
  }
  window.addEventListener("popstate", function () { go(location.hash.replace(/^#/, ""), { push: false }); });
  window.addEventListener("hashchange", function () {
    var t = location.hash.replace(/^#/, "");
    if (t !== current) go(t, { push: false });
  });
  document.addEventListener("click", function (ev) {
    var a = ev.target.closest && ev.target.closest("a[href^='#']");
    if (!a || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button !== 0) return;
    ev.preventDefault();
    closeSearch();
    go(a.getAttribute("href").slice(1));
  });

  function setNav(view) {
    document.querySelectorAll(".nav a").forEach(function (a) {
      var v = a.getAttribute("data-view");
      if (v === view) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
  }

  function render(r) {
    var view = r.view;
    if (view === "entry" && !TXT.byId(r.id)) view = "home";
    setNav(view === "entry" ? "library" : (view === "essay" ? r.id : view));
    if (view === "home") return renderHome();
    if (view === "library") return renderLibrary(r.cat && CAT[r.cat] ? r.cat : null);
    if (view === "entry") return renderEntry(r.id);
    if (view === "debate") return renderDebate();
    if (view === "essay") return renderEssay(r.id);
    if (view === "sources") return renderSources();
  }
  function setTitle(t) { document.title = t ? t + " · Defeaters" : "Defeaters"; }

  // ---------- home ----------
  var SPECIMENS = ["martyrdom", "kalam", "fine-tuning", "empty-tomb", "moral-argument", "messianic-prophecy", "hiddenness", "manuscripts"];
  var specimenIdx = 0;
  function specimenHtml() {
    var e = TXT.byId(SPECIMENS[specimenIdx % SPECIMENS.length]);
    return '<div class="specimen" aria-live="polite">' +
      '<span class="label">Specimen disputation · <span class="latin">quaestio</span></span>' +
      '<div class="row" style="margin-top:10px"><span class="who obj">Objection</span><p class="txt">' + esc(firstSentences(e.claim, 2)) + '</p></div>' +
      '<div class="row"><span class="who rep">Reply</span><p class="txt">' + esc(firstSentences(e.short, 2)) + '</p></div>' +
      '<div class="foot"><a href="#a.' + e.id + '">Read the full entry: ' + esc(e.title) + '</a>' +
      '<button class="btn ghost" type="button" id="specimen-next">Another</button></div></div>';
  }
  function renderHome() {
    setTitle("");
    var nSources = SOURCES.length;
    var toc = DEF.cats.map(function (c) {
      return '<a href="#c.' + c.id + '"><span class="toc-name">' + esc(c.name) + '</span><span class="toc-count">' + entriesIn(c.id).length + '</span><span class="toc-blurb">' + esc(c.blurb) + '</span></a>';
    }).join("");
    main.innerHTML =
      '<div class="wrap">' +
        '<section class="hero">' +
          '<div>' +
            '<span class="label">The scholarly case against the truth claims of religion</span>' +
            '<h1 style="margin-top:14px">The arguments for Christianity, <em>answered</em> at full strength.</h1>' +
            '<p class="lede">' + DEF.entries.length + ' apologetic arguments, from the Kalam to the empty tomb. Each one is stated as strongly as its best defenders state it, then answered with current scholarship, primary texts, and sources. Then argue with it yourself.</p>' +
            '<div class="actions"><a class="btn" href="#debate">Start a debate</a><a class="btn ghost" href="#library">Browse the library</a></div>' +
            '<div class="stats"><div><b>' + DEF.entries.length + '</b>arguments</div><div><b>' + DEF.cats.length + '</b>categories</div><div><b>' + nSources + '</b>sources cited</div></div>' +
          '</div>' +
          '<div id="specimen">' + specimenHtml() + '</div>' +
        '</section>' +
        '<div class="section-head"><h2>The library</h2><a href="#library">All arguments</a></div>' +
        '<nav class="toc" aria-label="Categories">' + toc + '</nav>' +
        '<div class="section-head"><h2>Start here</h2></div>' +
        '<div class="two-col">' +
          '<div class="note-card"><h3>The case in brief</h3><p>' + esc(DEF.essays.overview.lede) + '</p><a class="btn ghost" href="#case">Read the summary</a></div>' +
          '<div class="note-card"><h3>Weak skeptic arguments</h3><p>Some popular objections to Christianity are wrong, like "Jesus never existed" or "Jesus was copied from Horus." This section says so, and gives the stronger argument to use instead.</p><a class="btn ghost" href="#c.honesty">See the list</a></div>' +
        '</div>' +
      '</div>';
    function nextSpecimen() {
      specimenIdx++;
      $("#specimen").innerHTML = specimenHtml();
      var b = $("#specimen-next"); if (b) b.addEventListener("click", nextSpecimen);
    }
    var btn = $("#specimen-next");
    if (btn) btn.addEventListener("click", nextSpecimen);
  }

  // ---------- library ----------
  function renderLibrary(cat) {
    var c = cat ? CAT[cat] : null;
    setTitle(c ? c.name : "Library");
    var side = '<a href="#library"' + (!cat ? ' aria-current="true"' : "") + '><span>All arguments</span><span class="n">' + DEF.entries.length + '</span></a>' +
      DEF.cats.map(function (k) {
        return '<a href="#c.' + k.id + '"' + (k.id === cat ? ' aria-current="true"' : "") + '><span>' + esc(k.name) + '</span><span class="n">' + entriesIn(k.id).length + '</span></a>';
      }).join("");
    main.innerHTML =
      '<div class="wrap lib">' +
        '<nav class="lib-side" aria-label="Categories">' + side + '</nav>' +
        '<div style="min-width:0">' +
          '<header class="lib-head"><span class="label">' + (c ? "Category" : "Library") + '</span>' +
          '<h1>' + esc(c ? c.name : "Every argument") + '</h1>' +
          '<p>' + esc(c ? c.blurb : "Every apologetic argument in the library, with its short answer. Filter by words, or pick a category.") + '</p></header>' +
          '<div class="lib-tools"><label class="visually-hidden" for="lib-filter">Filter arguments</label>' +
          '<input id="lib-filter" type="search" placeholder="Filter, e.g. resurrection, Kalam, Isaiah 53" autocomplete="off">' +
          '<button class="btn ghost" type="button" id="lib-random">Random</button></div>' +
          '<ul class="entry-list" id="entry-list"></ul>' +
        '</div>' +
      '</div>';
    var input = $("#lib-filter");
    function draw() {
      var q = input.value.trim();
      var list = q ? ENGINE.search(q, 200).map(function (r) { return r.entry; }) : DEF.entries;
      if (cat) list = list.filter(function (e) { return e.cat === cat; });
      $("#entry-list").innerHTML = list.length ? list.map(function (e) {
        return '<li><a href="#a.' + e.id + '"><div class="el-top"><span class="el-title">' + esc(e.title) + '</span>' +
          (e.skeptic ? '<span class="tag-weak">Weak skeptic argument</span>' : '<span class="el-cat">' + esc(CAT[e.cat].name) + '</span>') +
          '</div><p class="el-short">' + esc(TXT.plain(e.short)) + '</p></a></li>';
      }).join("") : '<li style="padding:18px 0;color:var(--ink-3)">No arguments match that filter. Try fewer or different words.</li>';
    }
    input.addEventListener("input", draw);
    $("#lib-random").addEventListener("click", function () {
      var pool = cat ? entriesIn(cat) : DEF.entries;
      go("a." + pool[Math.floor(Math.random() * pool.length)].id);
    });
    draw();
  }

  // ---------- entry ----------
  function renderEntry(id) {
    var e = TXT.byId(id), c = CAT[e.cat];
    setTitle(e.title);
    var siblings = entriesIn(e.cat), idx = siblings.indexOf(e);
    var prev = siblings[idx - 1], next = siblings[idx + 1];
    var isWeak = !!e.skeptic;
    var form = e.form ? '<ol class="form">' + e.form.map(function (f) { return "<li>" + inline(f) + "</li>"; }).join("") + "</ol>" : "";
    var points = (e.points || []).map(function (p, i) {
      return '<div class="point" id="pt-' + i + '"><h3><span class="sig" aria-hidden="true">§</span><span>' + inline(p.h) + '</span></h3><p>' + inline(p.t) + "</p></div>";
    }).join("");
    var replies = (e.replies || []).map(function (r) {
      return '<div class="qa"><p class="q">' + inline(r.q) + '</p><p class="a">' + inline(r.a) + "</p></div>";
    }).join("");
    var rel = (e.rel || []).map(function (rid) { var r = TXT.byId(rid); return r ? '<a href="#a.' + r.id + '">' + esc(r.title) + "</a>" : ""; }).join("");
    main.innerHTML =
      '<div class="wrap entry">' +
        '<article class="entry-main">' +
          '<div class="crumbs"><a href="#library">Library</a><span aria-hidden="true" style="color:var(--ink-3)">/</span><a href="#c.' + c.id + '">' + esc(c.name) + "</a></div>" +
          "<h1>" + esc(e.title) + "</h1>" +
          (e.who ? '<p class="who">' + inline(e.who) + "</p>" : "") +
          (isWeak ? '<div class="weak-banner"><b>Weak skeptic argument.</b> This entry flags an objection skeptics should stop using, and gives the stronger argument instead.</div>' : "") +
          '<section class="block claim" id="s-claim"><div class="label">' + (isWeak ? "The weak argument" : 'The argument <span class="latin">· videtur quod</span>') + '</div>' +
            '<div class="claim-text">' + inline(e.claim) + form + "</div></section>" +
          '<section class="block answer" id="s-answer"><div class="label">' + (isWeak ? "Why it fails" : 'The answer <span class="latin">· respondeo</span>') + '</div>' +
            '<p class="answer-text">' + inline(e.short) + "</p></section>" +
          '<section class="block defeaters" id="s-points"><div class="label">' + (isWeak ? "What to argue instead" : "Defeaters") + "</div>" + points + "</section>" +
          (replies ? '<section class="block replies" id="s-replies"><div class="label">If they reply <span class="latin">· ad obiecta</span></div>' + replies + "</section>" : "") +
          '<section class="apparatus" id="s-sources"><span class="label">Apparatus · sources</span><ol>' +
            (e.sources || []).map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol></section>" +
          '<nav class="pager" aria-label="More in this category">' +
            (prev ? '<a href="#a.' + prev.id + '"><span class="label">Previous</span>' + esc(prev.title) + "</a>" : "<span></span>") +
            (next ? '<a href="#a.' + next.id + '" style="text-align:right"><span class="label">Next</span>' + esc(next.title) + "</a>" : "<span></span>") +
          "</nav>" +
        "</article>" +
        '<aside class="margin">' +
          (isWeak ? "" : '<div><button class="btn" type="button" id="debate-this">Debate this</button></div>') +
          '<div class="toc-box"><span class="label">In this entry</span><nav>' +
            '<a href="#s-claim" data-scroll="s-claim">The argument</a><a href="#s-answer" data-scroll="s-answer">The answer</a>' +
            '<a href="#s-points" data-scroll="s-points">' + (isWeak ? "What to argue instead" : "Defeaters") + " (" + (e.points || []).length + ")</a>" +
            (replies ? '<a href="#s-replies" data-scroll="s-replies">If they reply (' + e.replies.length + ")</a>" : "") +
            '<a href="#s-sources" data-scroll="s-sources">Sources (' + (e.sources || []).length + ")</a></nav></div>" +
          (rel ? '<div class="rel-box"><span class="label">Related</span><div class="rel-list">' + rel + "</div></div>" : "") +
        "</aside>" +
      "</div>";
    main.querySelectorAll("[data-scroll]").forEach(function (a) {
      a.addEventListener("click", function (ev) {
        ev.preventDefault(); ev.stopPropagation();
        var t = document.getElementById(a.getAttribute("data-scroll"));
        if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
      }, true);
    });
    var dt = $("#debate-this");
    if (dt) dt.addEventListener("click", function () {
      DEBATE.draft = firstSentences(e.claim, 2);
      go("debate");
    });
  }

  // ---------- essays & sources ----------
  function renderEssay(id) {
    var es = DEF.essays[id];
    setTitle(es.title);
    main.innerHTML = '<div class="wrap"><article class="prose"><span class="label">' + (id === "overview" ? "Summary" : id === "method" ? "Method" : "About") + '</span>' +
      '<h1 style="margin-top:10px">' + esc(es.title) + '</h1><p class="lede">' + inline(es.lede) + "</p>" +
      es.sections.map(function (s) { return "<h2>" + esc(s.h) + "</h2><p>" + inline(s.t) + "</p>"; }).join("") +
      '<p style="margin-top:32px"><a class="btn" href="#debate">Test it in a debate</a></p></article></div>';
  }

  function renderSources() {
    setTitle("Sources");
    main.innerHTML = '<div class="wrap"><div class="prose" style="max-width:none"><span class="label">Bibliography</span>' +
      '<h1 style="margin-top:10px">Sources cited</h1><p class="lede">Every work cited in the library (' + SOURCES.length + ' in all), with the entries that cite it. Many of the scholars are believing Christians, because some of the strongest evidence comes from them.</p></div>' +
      '<div class="lib-tools"><label class="visually-hidden" for="src-filter">Filter sources</label><input id="src-filter" type="search" placeholder="Filter by author, title, or journal" autocomplete="off"></div>' +
      '<ul class="bib" id="bib"></ul></div>';
    var input = $("#src-filter");
    function draw() {
      var q = input.value.trim().toLowerCase();
      var list = q ? SOURCES.filter(function (s) { return s.text.toLowerCase().indexOf(q) !== -1; }) : SOURCES;
      $("#bib").innerHTML = list.map(function (s) {
        var first = TXT.byId(s.ids[0]);
        return "<li><span>" + esc(s.text) + '</span><span class="used"><a href="#a.' + first.id + '">' + esc(first.title.length > 34 ? first.title.slice(0, 32) + "…" : first.title) + "</a>" + (s.ids.length > 1 ? " +" + (s.ids.length - 1) : "") + "</span></li>";
      }).join("") || '<li><span>No sources match.</span></li>';
    }
    input.addEventListener("input", draw);
    draw();
  }

  // ---------- header search ----------
  var searchInput = $("#site-search"), searchBox = $("#search-results"), activeIdx = -1, lastResults = [];
  function closeSearch() { if (searchBox) { searchBox.hidden = true; activeIdx = -1; } }
  function drawSearch() {
    var q = searchInput.value.trim();
    if (!q) { closeSearch(); return; }
    lastResults = ENGINE.search(q, 8);
    searchBox.innerHTML = lastResults.length ? lastResults.map(function (r, i) {
      return '<a href="#a.' + r.id + '" class="' + (i === activeIdx ? "active" : "") + '"><span class="sr-cat">' + esc(CAT[r.entry.cat].name) + '</span><span class="sr-title">' + esc(r.entry.title) + "</span></a>";
    }).join("") : '<div class="empty">No matching arguments. Try a key word like "tomb" or "evil".</div>';
    searchBox.hidden = false;
  }
  if (searchInput) {
    searchInput.addEventListener("input", function () { activeIdx = -1; drawSearch(); });
    searchInput.addEventListener("keydown", function (ev) {
      if (ev.key === "ArrowDown") { activeIdx = Math.min(activeIdx + 1, lastResults.length - 1); drawSearch(); ev.preventDefault(); }
      else if (ev.key === "ArrowUp") { activeIdx = Math.max(activeIdx - 1, 0); drawSearch(); ev.preventDefault(); }
      else if (ev.key === "Enter") {
        var r = lastResults[activeIdx >= 0 ? activeIdx : 0];
        if (r) { searchInput.value = ""; closeSearch(); searchInput.blur(); go("a." + r.id); }
      } else if (ev.key === "Escape") { closeSearch(); searchInput.blur(); }
    });
    searchInput.addEventListener("blur", function () { setTimeout(closeSearch, 180); });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "/" && document.activeElement && !/input|textarea/i.test(document.activeElement.tagName)) { ev.preventDefault(); searchInput.focus(); }
    });
  }

  // ---------- debate ----------
  var DEBATE = {
    state: ENGINE.newState(),
    turns: [],         // {role: "user"|"site", html, text, consulted}
    history: [],       // {role: "user"|"assistant", content} for the AI
    mode: STORE.get("mode") === "ai" ? "ai" : "engine",
    depth: STORE.get("depth") === "thorough" ? "thorough" : "standard",
    busy: false, ctl: null,
    draft: STORE.get("draft") || "",
    lastConsulted: []
  };
  var aiStatus = { available: false, provider: null };
  var aiReady = AI.init().then(function (s) { aiStatus = s; if (current === "debate") drawSide(); return s; });

  function introTurn() {
    return {
      role: "site",
      html: '<p class="lead">State your case for God, Christianity, or religion. I\'ll answer with the strongest scholarly rebuttal in the library, then you can push back with any comeback.</p>' +
        '<div class="next"><span class="label">Opening arguments</span><div class="chips">' +
        ENGINE.OPENERS.slice(0, 5).map(chipSay).join("") + "</div></div>"
    };
  }
  function chipSay(text) { return '<button type="button" class="chip" data-say="' + esc(text) + '">' + esc(text) + "</button>"; }

  function engineHtml(r) {
    var h = [];
    if (r.kind === "weak") h.push('<p class="lead"><strong>Agreed: this is a weak skeptical argument, and this site says so.</strong> ' + inline(r.lead) + "</p>");
    else if (r.lead) h.push('<p class="lead">' + inline(r.lead) + "</p>");
    if (r.reply) h.push('<p class="pt"><strong>On “' + inline(r.reply.q) + '”</strong> ' + inline(r.reply.a) + "</p>");
    (r.points || []).forEach(function (p) { h.push('<p class="pt"><strong>' + inline(p.h) + ".</strong> " + inline(p.t) + "</p>"); });
    if (r.notes && r.notes.length) {
      h.push('<div class="notes">' + r.notes.map(function (n) {
        return '<div class="note-flag"><b>' + esc(n.label) + "</b>" + esc(n.text) + ' <a href="#a.' + n.link + '">More</a></div>';
      }).join("") + "</div>");
    }
    if (r.entry && r.kind !== "meta") {
      var e = TXT.byId(r.entry);
      h.push('<p class="from">From the entry <a href="#a.' + e.id + '">' + esc(e.title) + "</a>, which has the full argument and sources.</p>");
    }
    if (r.suggest && r.suggest.length) {
      h.push('<div class="next"><span class="label">Did you mean</span><div class="chips">' +
        r.suggest.map(function (id) { var e = TXT.byId(id); return chipSay(e.title); }).join("") + "</div></div>");
    }
    if (r.next && r.next.length) {
      h.push('<div class="next"><span class="label">' + (r.kind === "meta" || r.kind === "fallback" ? "Try" : "Push back") + '</span><div class="chips">' + r.next.map(chipSay).join("") + "</div></div>");
    }
    return h.join("");
  }
  function engineText(r) {
    var parts = [];
    if (r.lead) parts.push(TXT.plain(r.lead));
    if (r.reply) parts.push("On \"" + TXT.plain(r.reply.q) + "\": " + TXT.plain(r.reply.a));
    (r.points || []).forEach(function (p) { parts.push(TXT.plain(p.h) + ". " + TXT.plain(p.t)); });
    return parts.join("\n\n");
  }

  function drawTranscript() {
    var box = $("#transcript");
    if (!box) return;
    var turns = DEBATE.turns.length ? DEBATE.turns : [introTurn()];
    box.innerHTML = turns.map(function (t, i) {
      return '<div class="turn ' + t.role + '" data-i="' + i + '"><span class="who">' + (t.role === "user" ? "Objection" : "Reply") + '</span><div class="body">' + t.html + "</div></div>";
    }).join("");
    box.scrollTop = box.scrollHeight;
  }

  function drawSide() {
    var side = $("#arena-side");
    if (!side) return;
    var st = aiStatus, aiOn = DEBATE.mode === "ai";
    var aiBtnDisabled = !(st.provider === "sample" || (st.provider === "api"));
    var modeNote;
    if (st.provider === "sample") modeNote = "Live AI answers through your own Claude account and is grounded in the library entries that match each message. The first message asks your permission.";
    else if (st.provider === "api") modeNote = st.needsKey ? "Add an Anthropic API key to debate a live model grounded in the library. The key stays in this browser and is sent only to api.anthropic.com." : "Live AI uses Claude Opus 5.5 with your API key, grounded in the library entries that match each message.";
    else if (!AI.isArtifact()) modeNote = "Checking whether live AI is available…";
    else modeNote = "Live AI isn't available in this view. The library engine works fully offline.";
    var keyForm = st.provider === "api" ? (
      '<form class="key-form" id="key-form"><label class="visually-hidden" for="api-key">Anthropic API key</label>' +
      '<input id="api-key" type="password" autocomplete="off" placeholder="' + (AI.hasKey() ? "Key saved. Paste a new one to replace it" : "sk-ant-…") + '">' +
      '<label><input id="api-remember" type="checkbox"> Remember on this device</label>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn ghost" type="submit">Save key</button>' + (AI.hasKey() ? '<button class="btn ghost" type="button" id="key-clear">Forget key</button>' : "") + "</div></form>") : "";
    var consulted = DEBATE.lastConsulted.length ? DEBATE.lastConsulted.map(function (c) {
      var e = TXT.byId(c.id); return e ? '<a href="#a.' + e.id + '">' + esc(e.title) + "</a>" : "";
    }).join("") : '<p style="color:var(--ink-3)">The library entries used for each reply appear here.</p>';
    side.innerHTML =
      '<section><span class="label">Respondent</span><div class="mode" role="group" aria-label="Respondent">' +
        '<button type="button" data-mode="engine" aria-pressed="' + (!aiOn) + '">Library engine</button>' +
        '<button type="button" data-mode="ai" aria-pressed="' + aiOn + '"' + (aiBtnDisabled ? " disabled" : "") + '>Live AI</button></div>' +
        '<p class="mode-note">' + esc(DEBATE.mode === "engine" ? "The library engine answers instantly from " + DEF.entries.length + " prepared entries and works offline. " + (aiBtnDisabled ? "" : "Switch to Live AI for free-form replies.") : modeNote) + "</p>" +
        (aiOn ? keyForm : "") +
        (aiOn ? '<label class="depth"><input type="checkbox" id="depth-toggle"' + (DEBATE.depth === "thorough" ? " checked" : "") + "> Thorough mode (slower, deeper)</label>" : "") +
      "</section>" +
      '<section class="consulted"><span class="label">Entries consulted</span>' + consulted + "</section>" +
      '<section class="openers"><span class="label">Common arguments to try</span><div class="chips">' + ENGINE.OPENERS.slice(5).map(chipSay).join("") + "</div></section>";
    side.querySelectorAll("[data-mode]").forEach(function (b) {
      b.addEventListener("click", function () {
        DEBATE.mode = b.getAttribute("data-mode"); STORE.set("mode", DEBATE.mode); drawSide();
      });
    });
    var dtg = $("#depth-toggle");
    if (dtg) dtg.addEventListener("change", function () { DEBATE.depth = dtg.checked ? "thorough" : "standard"; STORE.set("depth", DEBATE.depth); });
    var kf = $("#key-form");
    if (kf) kf.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var v = $("#api-key").value.trim();
      if (!v) return;
      AI.setKey(v, $("#api-remember").checked);
      aiStatus = AI.status(); drawSide();
    });
    var kc = $("#key-clear");
    if (kc) kc.addEventListener("click", function () { AI.setKey("", false); aiStatus = AI.status(); drawSide(); });
  }

  function setBusy(b) {
    DEBATE.busy = b;
    var send = $("#debate-send"), stop = $("#debate-stop");
    if (send) send.disabled = b;
    if (stop) stop.hidden = !b;
  }

  function submit(text) {
    text = String(text || "").trim();
    if (!text || DEBATE.busy) return;
    var input = $("#debate-input");
    if (input) { input.value = ""; }
    DEBATE.draft = ""; STORE.set("draft", null);
    DEBATE.turns.push({ role: "user", html: "<p>" + esc(text) + "</p>", text: text });
    if (DEBATE.mode === "ai" && (aiStatus.provider === "sample" || (aiStatus.provider === "api" && AI.hasKey()))) return submitAI(text);
    if (DEBATE.mode === "ai" && aiStatus.provider === "api" && !AI.hasKey()) {
      DEBATE.turns.push({ role: "site", html: '<p class="lead">Add an Anthropic API key in the panel to use Live AI, or switch to the library engine. Here is the library\'s answer meanwhile:</p>' });
    }
    var r = ENGINE.respond(DEBATE.state, text);
    DEBATE.lastConsulted = r.consulted || (r.entry ? [{ id: r.entry }] : []);
    DEBATE.turns.push({ role: "site", html: engineHtml(r), text: engineText(r) });
    DEBATE.history.push({ role: "user", content: text }, { role: "assistant", content: engineText(r) || "(no reply)" });
    drawTranscript(); drawSide();
  }

  function submitAI(text) {
    var notes = ENGINE.contextFor(text, DEBATE.state, 3);
    var ranked = ENGINE.rank(text, 3).filter(function (r) { return r.score > 3; });
    DEBATE.lastConsulted = ranked.map(function (r) { return { id: r.id, score: r.score }; });
    // Keep the engine's topic in sync so switching modes mid-debate stays coherent.
    if (ranked[0] && ranked[0].score >= 6) DEBATE.state.topic = ranked[0].id;
    var turn = { role: "site", html: '<p class="thinking">Thinking</p>', text: "" };
    DEBATE.turns.push(turn);
    drawTranscript(); drawSide();
    var idx = DEBATE.turns.length - 1;
    var ctl = new AbortController(); DEBATE.ctl = ctl;
    setBusy(true);
    var priorHistory = DEBATE.history.slice();
    function paint(full) {
      turn.text = full;
      turn.html = TXT.markdown(full);
      var node = document.querySelector('#transcript .turn[data-i="' + idx + '"] .body');
      if (node) { node.innerHTML = turn.html; var box = $("#transcript"); box.scrollTop = box.scrollHeight; }
    }
    AI.ask({ history: priorHistory, text: text, notes: notes, depth: DEBATE.depth, signal: ctl.signal, onText: paint })
      .then(function (res) {
        if (res.cancelled) { turn.html = res.text ? TXT.markdown(res.text) + '<p class="from">Stopped.</p>' : '<p class="from">Stopped.</p>'; }
        else {
          paint(res.text);
          var links = DEBATE.lastConsulted.map(function (c) { var e = TXT.byId(c.id); return '<a href="#a.' + e.id + '">' + esc(e.title) + "</a>"; }).join(", ");
          turn.html += (res.truncated ? '<p class="from">The reply was cut short.</p>' : "") + (links ? '<p class="from">Library entries consulted: ' + links + ".</p>" : "");
        }
        DEBATE.history.push({ role: "user", content: text }, { role: "assistant", content: turn.text || "(stopped)" });
      }, function (err) {
        var partial = err && err.partial ? TXT.markdown(err.partial) : "";
        // Fall back to the library engine so the debate never dead-ends.
        var r = ENGINE.respond(DEBATE.state, text);
        turn.html = partial + '<div class="note-flag" style="margin-bottom:10px"><b>Live AI</b>' + esc(err.message || "Live AI failed.") + " The library engine answered instead.</div>" + engineHtml(r);
        turn.text = engineText(r);
        DEBATE.history.push({ role: "user", content: text }, { role: "assistant", content: turn.text || "(no reply)" });
        aiStatus = AI.status();
        if (!aiStatus.available && aiStatus.provider !== "api") { DEBATE.mode = "engine"; }
      })
      .then(function () { setBusy(false); DEBATE.ctl = null; drawTranscript(); drawSide(); });
  }

  function renderDebate() {
    setTitle("Debate");
    main.innerHTML =
      '<div class="wrap arena">' +
        '<div style="min-width:0">' +
          '<header class="arena-head"><span class="label">Debate arena · <span class="latin">disputatio</span></span>' +
          '<h1 style="margin-top:10px">Make your case.</h1>' +
          '<p>Argue for God, Christianity, or religion. The site answers from its library, with sources, and you can push back with any comeback. Nothing you type leaves your browser unless you switch on Live AI.</p></header>' +
          '<div class="transcript" id="transcript" aria-live="polite"></div>' +
          '<form class="composer" id="composer"><div style="min-width:0"><label class="visually-hidden" for="debate-input">Your argument</label>' +
            '<textarea id="debate-input" placeholder="State your argument, e.g. &quot;The disciples would not die for a lie.&quot;"></textarea>' +
            '<p class="composer-hint">Press Enter to send, Shift+Enter for a new line.</p></div>' +
            '<div class="btns"><button class="btn" type="submit" id="debate-send">Argue</button>' +
            '<button class="btn ghost" type="button" id="debate-stop" hidden>Stop</button>' +
            '<button class="btn ghost" type="button" id="debate-reset">New debate</button></div></form>' +
        "</div>" +
        '<aside class="arena-side" id="arena-side"></aside>' +
      "</div>";
    drawTranscript(); drawSide();
    var input = $("#debate-input");
    input.value = DEBATE.draft || "";
    input.addEventListener("input", function () { DEBATE.draft = input.value; STORE.set("draft", input.value || null); });
    input.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter" && !ev.shiftKey && !ev.isComposing) { ev.preventDefault(); submit(input.value); }
    });
    $("#composer").addEventListener("submit", function (ev) { ev.preventDefault(); submit(input.value); });
    $("#debate-stop").addEventListener("click", function () { if (DEBATE.ctl) DEBATE.ctl.abort(); });
    $("#debate-reset").addEventListener("click", function () {
      if (DEBATE.ctl) DEBATE.ctl.abort();
      DEBATE.state = ENGINE.newState(); DEBATE.turns = []; DEBATE.history = []; DEBATE.lastConsulted = [];
      drawTranscript(); drawSide(); input.focus();
    });
    setBusy(DEBATE.busy);
    if (DEBATE.draft) { try { input.focus(); input.setSelectionRange(input.value.length, input.value.length); } catch (e) { /* ignore */ } }
  }

  // Chips anywhere in the arena send their text.
  document.addEventListener("click", function (ev) {
    var chip = ev.target.closest && ev.target.closest("[data-say]");
    if (!chip) return;
    ev.preventDefault();
    if (current !== "debate") go("debate");
    submit(chip.getAttribute("data-say"));
  });

  // ---------- boot ----------
  var foot = $("#foot-count");
  if (foot) foot.textContent = DEF.entries.length + " arguments · " + SOURCES.length + " sources";
  go(location.hash.replace(/^#/, ""), { push: false });
  window.DEFEATERS = { go: go, submit: submit, debate: DEBATE, ready: aiReady };
})();
