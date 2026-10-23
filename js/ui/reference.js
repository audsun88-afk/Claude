/* Reference tools: parallel passages, the comparison of religions, and the classics concordance. */
(function () {
  "use strict";
  var A = window.APP, DEF = A.DEF, esc = A.esc, inline = A.inline;

  // ---------- parallels ----------
  A.view("parallels", function (arg) {
    A.setTitle("Parallels");
    var sets = DEF.parallels;
    var p = sets.filter(function (s) { return s.id === arg; })[0] || sets[0];
    A.page(
      '<header class="tool-head"><span class="label">Parallels</span><h1>The same story, told differently</h1>' +
        '<p class="lede">Passages that describe the same events, side by side, with the points where they differ set out in a table. Text from the World English Bible, which is in the public domain.</p></header>' +
      '<div class="par-layout">' +
        '<nav class="par-nav" aria-label="Passages"><label class="visually-hidden" for="par-select">Choose a passage</label>' +
          '<select id="par-select">' + sets.map(function (s) { return '<option value="' + s.id + '"' + (s.id === p.id ? " selected" : "") + ">" + esc(s.title) + "</option>"; }).join("") + "</select>" +
          '<ol class="par-list">' + sets.map(function (s) { return '<li><a href="#parallels.' + s.id + '"' + (s.id === p.id ? ' aria-current="true"' : "") + ">" + esc(s.title) + "</a></li>"; }).join("") + "</ol></nav>" +
        '<article class="par-main">' +
          "<h2>" + esc(p.title) + '</h2><p class="par-q">' + esc(p.question) + "</p>" +
          '<div class="table-scroll"><table class="data-table par-grid"><thead><tr><th scope="col"><span class="visually-hidden">Question</span></th>' +
            p.cols.map(function (c) { return '<th scope="col">' + esc(c.label) + "</th>"; }).join("") + "</tr></thead><tbody>" +
            p.grid.map(function (row) { return '<tr><th scope="row">' + esc(row[0]) + "</th>" + row.slice(1).map(function (v) { return "<td>" + (v ? esc(v) : '<span class="muted">—</span>') + "</td>"; }).join("") + "</tr>"; }).join("") +
          "</tbody></table></div>" +
          '<div class="par-note gloss-zone"><span class="label">What it shows</span><p>' + inline(p.note) + "</p></div>" +
          '<div class="par-cols cols-' + p.cols.length + '">' + p.cols.map(function (c) {
            return '<section class="par-col"><header><h3>' + esc(c.label) + '</h3><span class="refs">' + esc(c.refs.join("; ")) + "</span></header>" +
              '<div class="verses">' + c.verses.map(function (v) { return '<p><sup class="vn">' + esc(v[0]) + "</sup>" + esc(v[1]) + "</p>"; }).join("") + "</div></section>";
          }).join("") + "</div>" +
          '<div class="par-rel"><span class="label">In the library</span><div class="chips small">' + p.rel.map(function (id) { return A.chipLink(id); }).join("") + "</div></div>" +
        "</article></div>", "tool-page parallels");
    A.$("#par-select").addEventListener("change", function () { A.go("parallels." + this.value); });
    A.$$(".gloss-zone").forEach(A.glossify);
  });

  // ---------- compare ----------
  A.view("compare", function () {
    A.setTitle("Compare");
    var C = DEF.compare;
    A.page(
      '<header class="tool-head"><span class="label">Compare</span><h1>The outsider test, as a table</h1>' +
        '<p class="lede">The kinds of evidence offered for Christianity, and the parallel claims made for other traditions. Read across each row and ask whether the same standard is being applied.</p></header>' +
      '<div class="table-scroll cmp-wide"><table class="data-table cmp"><thead><tr><th scope="col">Kind of evidence</th>' +
        C.traditions.map(function (t, i) { return '<th scope="col"' + (i === 0 ? ' class="home-col"' : "") + ">" + esc(t) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        C.rows.map(function (r) {
          return '<tr><th scope="row"><span class="cmp-kind">' + esc(r.kind) + '</span><span class="chips small">' + r.rel.slice(0, 3).map(function (id) { return A.chipLink(id); }).join("") + "</span></th>" +
            r.cells.map(function (c, i) { return "<td" + (i === 0 ? ' class="home-col"' : "") + ">" + esc(c) + "</td>"; }).join("") + "</tr>";
        }).join("") + "</tbody></table></div>" +
      '<div class="cmp-cards">' + C.rows.map(function (r) {
        return '<section class="cmp-card"><h2>' + esc(r.kind) + "</h2><dl>" + r.cells.map(function (c, i) { return '<div class="' + (i === 0 ? "home-col" : "") + '"><dt>' + esc(C.traditions[i]) + "</dt><dd>" + esc(c) + "</dd></div>"; }).join("") +
          '</dl><div class="chips small">' + r.rel.map(function (id) { return A.chipLink(id); }).join("") + "</div></section>";
      }).join("") + "</div>" +
      '<p class="cmp-note">' + inline(C.note) + "</p>", "tool-page compare");
  });

  // ---------- classics ----------
  A.view("classics", function (arg) {
    A.setTitle("Classics");
    var books = DEF.classics;
    var b = books.filter(function (x) { return x.id === arg; })[0] || null;
    var head = '<header class="tool-head"><span class="label">Classics concordance</span><h1>The classic cases, answered</h1>' +
      '<p class="lede">The arguments in well-known works of apologetics, from Plantinga\'s two dozen to Strobel\'s fourteen interviews, mapped to the library entries that answer them. Quoted titles are the book\'s own; other labels describe the chapter.</p></header>';
    var shelf = '<nav class="shelf" aria-label="Books">' + books.map(function (x) {
      var n = {}; x.items.forEach(function (it) { it.ids.forEach(function (id) { n[id] = 1; }); });
      return '<a class="book' + (b && b.id === x.id ? " on" : "") + '" href="#classics.' + x.id + '"' + (b && b.id === x.id ? ' aria-current="true"' : "") + '><span class="bk-author">' + esc(x.author) + '</span><span class="bk-title">' + esc(x.title) + '</span><span class="bk-meta">' + esc(x.year) + " · " + x.items.length + " items · " + Object.keys(n).length + " entries</span></a>";
    }).join("") + "</nav>";
    if (!b) { A.page(head + shelf, "tool-page classics"); return; }
    A.page(head + shelf +
      '<section class="concord" aria-labelledby="cc-h"><header><span class="label">' + esc(b.author) + " · " + esc(b.year) + '</span><h2 id="cc-h">' + esc(b.title) + "</h2><p>" + esc(b.note) + "</p></header>" +
        '<ol class="cc-list">' + b.items.map(function (it) {
          return '<li><div class="cc-item">' + (it.n ? '<span class="cc-n">' + esc(it.n) + "</span>" : '<span class="cc-n">·</span>') + '<span class="cc-label">' + esc(it.label) + "</span></div>" +
            '<div class="cc-ans">' + it.ids.map(function (id) {
              var e = A.TXT.byId(id);
              return '<a href="#a.' + e.id + '"><span class="sig">' + A.sig(e) + '</span><span class="t">' + esc(e.title) + '</span><span class="s">' + esc(A.firstSentences(e.short, 1)) + "</span></a>";
            }).join("") + "</div></li>";
        }).join("") + "</ol></section>", "tool-page classics");
    var cur = A.$(".shelf .book.on");
    if (cur) setTimeout(function () { var c = A.$("#cc-h"); if (c) c.scrollIntoView({ block: "start" }); }, 0);
  });
})();
