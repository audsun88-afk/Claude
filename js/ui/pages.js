/* Essays, the bibliography, and the glossary. */
(function () {
  "use strict";
  var A = window.APP, DEF = A.DEF, esc = A.esc, inline = A.inline;

  var ESSAY_ORDER = ["overview", "concessions", "chain", "ledger", "guide", "method", "about"];
  var ESSAY_LABEL = { overview: "Summary", concessions: "Concessions", chain: "The chain", ledger: "The ledger", guide: "Reading paths", method: "Method", about: "About" };

  A.view("essay", function (id) {
    var es = DEF.essays[id];
    A.setTitle(es.title);
    var others = ESSAY_ORDER.filter(function (k) { return k !== id && DEF.essays[k]; });
    var toc = es.sections.length > 4 ? '<nav class="essay-toc" aria-label="Sections"><span class="label">Sections</span>' +
      es.sections.map(function (s, i) { return '<a href="#es-' + i + '" data-scroll="es-' + i + '">' + esc(s.h) + "</a>"; }).join("") + "</nav>" : "";
    A.page(
      '<article class="prose gloss-zone">' +
        '<span class="label">' + esc(ESSAY_LABEL[id] || "Essay") + "</span>" +
        "<h1>" + esc(es.title) + '</h1><p class="lede">' + inline(es.lede) + "</p>" +
        es.sections.map(function (s, i) { return '<h2 id="es-' + i + '" tabindex="-1">' + esc(s.h) + "</h2><p>" + inline(s.t) + "</p>"; }).join("") +
        '<p class="essay-cta"><a class="btn" href="#debate">Test it in a debate</a><a class="btn ghost" href="#map">See the case map</a></p>' +
      "</article>" +
      '<aside class="essay-side">' + toc +
        '<nav class="essay-more" aria-label="Other essays"><span class="label">More reading</span>' +
        others.map(function (k) { return '<a href="#essay.' + k + '"><span class="em-k">' + esc(ESSAY_LABEL[k]) + "</span>" + esc(DEF.essays[k].title) + "</a>"; }).join("") +
        "</nav></aside>", "essay");
    A.$$(".gloss-zone").forEach(A.glossify);
  });

  A.view("sources", function () {
    A.setTitle("Sources");
    A.page(
      '<div class="prose wide"><span class="label">Bibliography</span>' +
      '<h1>Sources cited</h1><p class="lede">Every work cited in the library (' + A.SOURCES.length.toLocaleString("en-US") + " in all), with the entries that cite it. Many of the scholars are believing Christians, because some of the strongest evidence comes from them.</p></div>" +
      '<div class="lib-tools"><label class="visually-hidden" for="src-filter">Filter sources</label><input id="src-filter" type="search" placeholder="Filter by author, title, or journal" autocomplete="off"><span class="lib-count" id="src-count" aria-live="polite"></span></div>' +
      '<ul class="bib" id="bib"></ul>', "sources");
    var input = A.$("#src-filter");
    function draw() {
      var q = input.value.trim().toLowerCase();
      var list = q ? A.SOURCES.filter(function (s) { return s.text.toLowerCase().indexOf(q) !== -1; }) : A.SOURCES;
      A.$("#src-count").textContent = list.length.toLocaleString("en-US") + " works";
      A.$("#bib").innerHTML = list.slice(0, 600).map(function (s) {
        var first = A.TXT.byId(s.ids[0]);
        return "<li><span>" + esc(s.text) + '</span><span class="used"><a href="#a.' + first.id + '">' + A.sig(first) + "</a>" + (s.ids.length > 1 ? " +" + (s.ids.length - 1) : "") + "</span></li>";
      }).join("") + (list.length > 600 ? '<li class="more"><span>Showing the first 600. Filter to narrow the list.</span></li>' : "") || '<li><span>No sources match.</span></li>';
    }
    input.addEventListener("input", draw);
    draw();
  });

  A.view("glossary", function (arg) {
    A.setTitle("Glossary");
    var terms = DEF.glossary.slice().sort(function (a, b) { return a.t.toLowerCase().localeCompare(b.t.toLowerCase()); });
    var letters = [];
    terms.forEach(function (g) { var l = g.t[0].toUpperCase(); if (letters.indexOf(l) === -1) letters.push(l); });
    A.page(
      '<header class="tool-head"><span class="label">Reference</span><h1>Glossary</h1><p class="lede">' + terms.length + " terms used in the library. Terms are also explained in place: in any entry or essay, a dotted underline marks a glossary term.</p></header>" +
      '<div class="lib-tools"><label class="visually-hidden" for="gl-filter">Filter terms</label><input id="gl-filter" type="search" placeholder="Filter terms and definitions" autocomplete="off">' +
      '<nav class="az" aria-label="Letters">' + letters.map(function (l) { return '<a href="#glossary" data-scroll="gl-' + l + '">' + l + "</a>"; }).join("") + "</nav></div>" +
      '<dl class="glossary" id="glossary-list">' + terms.map(function (g, i) {
        var l = g.t[0].toUpperCase(), first = i === 0 || terms[i - 1].t[0].toUpperCase() !== l;
        var see = (g.see || []).map(function (id) { return A.chipLink(id); }).join("");
        return '<div class="gl-item" id="glossary-' + A.slug(g.t) + '" data-q="' + esc((g.t + " " + (g.aka || []).join(" ") + " " + g.d).toLowerCase()) + '" tabindex="-1">' +
          (first ? '<span class="gl-letter" id="gl-' + l + '">' + l + "</span>" : "") +
          "<dt>" + esc(g.t) + (g.aka && g.aka.length ? '<span class="aka">also ' + g.aka.map(esc).join(", ") + "</span>" : "") + "</dt>" +
          "<dd><p>" + esc(g.d) + "</p>" + (see ? '<div class="chips small">' + see + "</div>" : "") + "</dd></div>";
      }).join("") + "</dl>", "glossary-page");
    var input = A.$("#gl-filter");
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      A.$$("#glossary-list .gl-item").forEach(function (it) { it.hidden = !!q && it.getAttribute("data-q").indexOf(q) === -1; });
    });
    if (arg) {
      var t = document.getElementById("glossary-" + arg);
      if (t) setTimeout(function () { t.scrollIntoView({ block: "center" }); t.classList.add("flash"); try { t.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }, 0);
    }
  });
})();
