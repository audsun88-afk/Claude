/* Home: the hero, the tools, and the Index Argumentorum (every entry, by part and category). */
(function () {
  "use strict";
  var A = window.APP, DEF = A.DEF, esc = A.esc;

  var SPECIMENS = ["martyrdom", "kalam", "fine-tuning", "empty-tomb", "moral-argument", "messianic-prophecy", "hiddenness", "abstract-objects", "luke-historian", "guadalupe"];
  var specimenIdx = 0;
  function specimenHtml() {
    var e = A.TXT.byId(SPECIMENS[specimenIdx % SPECIMENS.length]);
    return '<div class="specimen" aria-live="polite">' +
      '<div class="specimen-head"><span class="label">Specimen disputation · <span class="latin">quaestio</span></span><span class="sig">' + A.sig(e) + "</span></div>" +
      '<div class="row"><span class="who obj">Objection</span><p class="txt">' + esc(A.firstSentences(e.claim, 2)) + "</p></div>" +
      '<div class="row"><span class="who rep">Reply</span><p class="txt">' + esc(A.firstSentences(e.short, 2)) + "</p></div>" +
      '<div class="foot"><a href="#a.' + e.id + '">Read the full entry: ' + esc(e.title) + "</a>" +
      '<button class="btn ghost small" type="button" id="specimen-next">Another</button></div></div>';
  }

  // Tool glyphs: small line drawings, stroked in currentColor.
  var G = {
    map: '<rect x="3" y="3" width="8" height="5" rx="1"/><rect x="13" y="10" width="8" height="5" rx="1"/><rect x="3" y="17" width="8" height="5" rx="1"/><path d="M7 8v3h10M17 15v3H11"/>',
    ledger: '<path d="M3 20h18"/><path d="M5 20V12M9 20V8M13 20v-5M17 20V5"/>',
    timeline: '<path d="M2 12h20"/><circle cx="6" cy="12" r="2"/><circle cx="13" cy="12" r="2"/><path d="M17 9h4v6h-4z"/>',
    atlas: '<circle cx="5" cy="6" r="2"/><circle cx="18" cy="5" r="2"/><circle cx="12" cy="13" r="2.5"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="18" r="2"/><path d="M6.6 7.3l3.8 4M16.5 6.4l-3.2 4.8M10.3 14.5l-3.7 3.2M14.2 14.3l3.3 2.4"/>',
    parallels: '<rect x="3" y="4" width="7" height="16" rx="1"/><rect x="14" y="4" width="7" height="16" rx="1"/><path d="M5 8h3M5 11h3M16 8h3M16 11h3M5 14h3M16 15h3"/>',
    compare: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 9h18M9 4v16M15 4v16"/>',
    classics: '<path d="M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4z"/><path d="M20 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z"/>',
    drill: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.8"/>',
    glossary: '<path d="M5 4h11l3 3v13H5z"/><path d="M8 10h8M8 13h8M8 16h5"/>',
    debate: '<path d="M4 5h11v8H9l-3 3v-3H4z"/><path d="M15 9h5v8h-2v3l-3-3h-4v-2"/>'
  };
  function glyph(k) { return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + G[k] + "</svg>"; }
  var TOOLS = [
    { k: "map", href: "#map", name: "Case map", d: "The chain of claims Christianity needs, and where each link breaks." },
    { k: "ledger", href: "#ledger", name: "Ledger", d: "Weigh all the evidence with Bayes' theorem, under three sets of assumptions." },
    { k: "debate", href: "#debate", name: "Debate", d: "Argue for Christianity and get answered from the library." },
    { k: "timeline", href: "#timeline", name: "Timeline", d: "When things happened, and when the texts were written." },
    { k: "atlas", href: "#atlas", name: "Atlas", d: "Every argument and its connections, drawn as one map." },
    { k: "parallels", href: "#parallels", name: "Parallels", d: "Bible passages side by side, where they disagree." },
    { k: "compare", href: "#compare", name: "Compare", d: "The same kinds of evidence, claimed by five traditions." },
    { k: "classics", href: "#classics", name: "Classics", d: "Plantinga, Kreeft, Lewis, Strobel, and others, mapped to answers." },
    { k: "drill", href: "#drill", name: "Drill", d: "Write your own rebuttal, then compare it with the library." },
    { k: "glossary", href: "#glossary", name: "Glossary", d: DEF.glossary.length + " terms, from a priori to vaticinium ex eventu." }
  ];

  var FILTERS = [
    { id: "all", name: "All" }, { id: "scholarly", name: "Scholarly" }, { id: "popular", name: "Popular" },
    { id: "fringe", name: "Fringe" }, { id: "skeptic", name: "Skeptic errors" }
  ];

  function indexHtml() {
    return DEF.parts.map(function (p) {
      var cats = A.catsIn(p.id);
      return '<section class="ix-part" aria-labelledby="ix-p-' + p.id + '">' +
        '<header class="ix-part-head"><span class="ix-num">' + p.id + "</span><div><h3 id=\"ix-p-" + p.id + '">' + esc(p.name) + "</h3><p>" + esc(p.blurb) + "</p></div></header>" +
        '<div class="ix-cols">' + cats.map(function (c) {
          return '<section class="ix-cat"><h4><a href="#c.' + c.id + '"><span class="ix-cn">§ ' + c.n + "</span>" + esc(c.name) + "</a></h4><ol>" +
            A.entriesIn(c.id).map(function (e) {
              var lv = A.level(e);
              return '<li data-lv="' + lv + '" data-q="' + esc((e.title + " " + e.keys).toLowerCase()) + '"><a href="#a.' + e.id + '"><span class="ix-sig">' + e.siglum + '</span><span class="ix-t">' + esc(e.title) + "</span>" +
                (lv !== "popular" ? '<span class="ix-lv ix-lv-' + lv + '" title="' + esc(A.LEVELS[lv].note) + '">' + (lv === "scholarly" ? "S" : lv === "fringe" ? "F" : "×") + "</span>" : "") + "</a></li>";
            }).join("") + "</ol></section>";
        }).join("") + "</div></section>";
    }).join("");
  }

  A.view("home", function (arg) {
    A.setTitle("");
    var nSources = A.SOURCES.length;
    var lv = A.STORE.get("ixlevel") || "all";
    A.page(
      '<section class="hero">' +
        '<div class="hero-text">' +
          '<span class="label">The scholarly case against the truth claims of religion</span>' +
          '<h1>Every argument for Christianity, <em>answered</em> at full strength.</h1>' +
          '<p class="lede">' + DEF.entries.length + " arguments, from Aquinas's five ways to the empty tomb, from the Shroud of Turin to Plantinga's two dozen. Each is stated as its best defenders state it, then answered with current scholarship, primary texts, and sources. Then argue with it yourself.</p>" +
          '<div class="actions"><a class="btn" href="#case">Read the case</a><a class="btn ghost" href="#debate">Start a debate</a><a class="btn ghost" href="#index" data-scroll="index-argumentorum">The index</a></div>' +
          '<dl class="figures">' +
            "<div><dt>Arguments</dt><dd>" + DEF.entries.length + "</dd></div>" +
            "<div><dt>Categories</dt><dd>" + DEF.cats.length + "</dd></div>" +
            "<div><dt>Sources cited</dt><dd>" + nSources.toLocaleString("en-US") + "</dd></div>" +
            "<div><dt>Tools</dt><dd>" + TOOLS.length + "</dd></div>" +
          "</dl>" +
        "</div>" +
        '<div id="specimen">' + specimenHtml() + "</div>" +
      "</section>" +
      '<section class="tools" aria-labelledby="tools-h"><h2 id="tools-h" class="visually-hidden">Tools</h2>' +
        TOOLS.map(function (t) {
          return '<a class="tool-card" href="' + t.href + '">' + glyph(t.k) + '<span class="tool-name">' + esc(t.name) + '</span><span class="tool-d">' + esc(t.d) + "</span></a>";
        }).join("") +
      "</section>" +
      '<section class="ix" id="index-argumentorum" aria-labelledby="ix-h" tabindex="-1">' +
        '<header class="ix-head"><div><span class="label">Index argumentorum</span><h2 id="ix-h">Every argument in the library</h2>' +
          "<p>By part and category. The numbers are sigla for citing entries (§ 1.1 is the first argument in the first category). Marks: <span class=\"ix-lv ix-lv-scholarly\">S</span> scholarly, <span class=\"ix-lv ix-lv-fringe\">F</span> fringe, <span class=\"ix-lv ix-lv-skeptic\">×</span> a skeptic error; unmarked arguments are popular.</p></div>" +
          '<div class="ix-tools">' + A.segmented("Show arguments by level", FILTERS, lv) +
          '<label class="visually-hidden" for="ix-filter">Filter the index</label><input id="ix-filter" type="search" placeholder="Filter the index" autocomplete="off"><span class="ix-count" id="ix-count" aria-live="polite"></span></div>' +
        "</header>" +
        '<div class="ix-body" id="ix-body">' + indexHtml() + "</div>" +
      "</section>" +
      '<section class="start" aria-labelledby="start-h"><h2 id="start-h" class="section-title">Start here</h2><div class="three-col">' +
        '<div class="note-card"><span class="label">Paths</span><h3>Where to start</h3><p>' + esc(DEF.essays.guide.lede) + ' Ten minutes, a crisis of faith, a debate next week, or a philosophy seminar.</p><a class="btn ghost small" href="#essay.guide">Choose a path</a></div>' +
        '<div class="note-card"><span class="label">Concessions</span><h3>What apologists get right</h3><p>' + esc(DEF.essays.concessions.lede) + '</p><a class="btn ghost small" href="#essay.concessions">Read the concessions</a></div>' +
        '<div class="note-card"><span class="label">Honesty</span><h3>Weak skeptic arguments</h3><p>Some popular objections to Christianity are wrong, like "Jesus never existed" or "Jesus was copied from Horus." This section says so, and gives the stronger argument to use instead.</p><a class="btn ghost small" href="#c.honesty">See the list</a></div>' +
      "</div></section>", "home");

    function bindSpecimen() {
      var b = A.$("#specimen-next");
      if (b) b.addEventListener("click", function () { specimenIdx++; A.$("#specimen").innerHTML = specimenHtml(); bindSpecimen(); });
    }
    bindSpecimen();

    var input = A.$("#ix-filter");
    function apply() {
      var q = input.value.trim().toLowerCase(), shown = 0;
      A.$$("#ix-body li").forEach(function (li) {
        var ok = (lv === "all" || li.getAttribute("data-lv") === lv) && (!q || li.getAttribute("data-q").indexOf(q) !== -1);
        li.hidden = !ok; if (ok) shown++;
      });
      A.$$("#ix-body .ix-cat").forEach(function (s) { s.hidden = !A.$("li:not([hidden])", s); });
      A.$$("#ix-body .ix-part").forEach(function (s) { s.hidden = !A.$(".ix-cat:not([hidden])", s); });
      A.$("#ix-count").textContent = shown === DEF.entries.length ? "" : shown + " of " + DEF.entries.length;
    }
    A.$$(".ix-tools .seg button").forEach(function (b) {
      b.addEventListener("click", function () {
        lv = b.getAttribute("data-v"); A.STORE.set("ixlevel", lv === "all" ? null : lv);
        A.$$(".ix-tools .seg button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        apply();
      });
    });
    input.addEventListener("input", apply);
    apply();
    if (arg === "index") {
      var ix = A.$("#index-argumentorum");
      if (ix) setTimeout(function () { ix.scrollIntoView({ block: "start" }); try { ix.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }, 0);
    }
  });
})();
