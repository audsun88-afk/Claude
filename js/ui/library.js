/* The library (lists by category) and the entry page, set as a critical edition:
 * the argument, the answer, the argument map, the defeaters, replies, and the apparatus. */
(function () {
  "use strict";
  var A = window.APP, DEF = A.DEF, TXT = A.TXT, esc = A.esc, inline = A.inline;

  var LV_FILTERS = [
    { id: "all", name: "All" }, { id: "scholarly", name: "Scholarly" }, { id: "popular", name: "Popular" },
    { id: "fringe", name: "Fringe" }, { id: "skeptic", name: "Skeptic errors" }
  ];

  function sideNav(cat) {
    return '<a href="#library"' + (!cat ? ' aria-current="true"' : "") + '><span>All arguments</span><span class="n">' + DEF.entries.length + "</span></a>" +
      DEF.parts.map(function (p) {
        return '<span class="side-part">' + p.id + " · " + esc(p.name) + "</span>" + A.catsIn(p.id).map(function (k) {
          return '<a href="#c.' + k.id + '"' + (k.id === cat ? ' aria-current="true"' : "") + '><span><span class="side-n">' + k.n + "</span>" + esc(k.name) + '</span><span class="n">' + A.entriesIn(k.id).length + "</span></a>";
        }).join("");
      }).join("");
  }

  A.view("library", function (cat) {
    var c = cat && A.CAT[cat] ? A.CAT[cat] : null;
    cat = c ? c.id : null;
    A.setTitle(c ? c.name : "Library");
    var lv = "all";
    A.page(
      '<nav class="lib-side" aria-label="Categories">' + sideNav(cat) + "</nav>" +
      '<div class="lib-body">' +
        '<header class="lib-head"><span class="label">' + (c ? "Part " + c.part + " · " + esc(A.PART[c.part].name) + " · § " + c.n : "Library") + "</span>" +
          "<h1>" + esc(c ? c.name : "Every argument") + "</h1>" +
          "<p>" + esc(c ? c.blurb : "Every apologetic argument in the library, with its short answer. Filter by words or level, or pick a category.") + "</p></header>" +
        '<div class="lib-tools"><label class="visually-hidden" for="lib-filter">Filter arguments</label>' +
          '<input id="lib-filter" type="search" placeholder="Filter, e.g. resurrection, Kalam, Isaiah 53" autocomplete="off">' +
          A.segmented("Level", LV_FILTERS, lv) +
          '<button class="btn ghost small" type="button" id="lib-random">Random</button></div>' +
        '<p class="lib-count" id="lib-count" aria-live="polite"></p>' +
        '<ul class="entry-list" id="entry-list"></ul>' +
      "</div>", "lib");
    var input = A.$("#lib-filter");
    function draw() {
      var q = input.value.trim();
      var list = q ? A.ENGINE.search(q, 300).map(function (r) { return r.entry; }) : DEF.entries;
      if (cat) list = list.filter(function (e) { return e.cat === cat; });
      if (lv !== "all") list = list.filter(function (e) { return A.level(e) === lv; });
      A.$("#lib-count").textContent = list.length + (list.length === 1 ? " argument" : " arguments");
      A.$("#entry-list").innerHTML = list.length ? list.map(function (e) {
        return '<li><a href="#a.' + e.id + '"><div class="el-top"><span class="el-sig">' + A.sig(e) + '</span><span class="el-title">' + esc(e.title) + "</span>" +
          A.levelPill(e, true) + (cat ? "" : '<span class="el-cat">' + esc(A.CAT[e.cat].short) + "</span>") +
          '</div><p class="el-short">' + esc(TXT.plain(e.short)) + "</p></a></li>";
      }).join("") : '<li class="empty">No arguments match. Try fewer or different words, or another level.</li>';
    }
    input.addEventListener("input", draw);
    A.$$(".lib-tools .seg button").forEach(function (b) {
      b.addEventListener("click", function () {
        lv = b.getAttribute("data-v");
        A.$$(".lib-tools .seg button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        draw();
      });
    });
    A.$("#lib-random").addEventListener("click", function () {
      var pool = cat ? A.entriesIn(cat) : DEF.entries;
      A.go("a." + pool[Math.floor(Math.random() * pool.length)].id);
    });
    draw();
  });

  // ---------- entry ----------
  function argumentMap(e) {
    var st = DEF.meta.structure[e.id];
    if (!e.form || !st) return "";
    var last = e.form.length - 1;
    var rows = e.form.map(function (line, i) {
      var tag = i === last ? "∴" : "P" + (i + 1);
      var hits = st[i] || [];
      var attacks = hits.length ? hits.map(function (k) {
        var p = e.points[k];
        return '<a class="atk" href="#pt-' + k + '" data-scroll="pt-' + k + '" title="' + esc(TXT.plain(p.h)) + '"><span class="atk-n">§' + (k + 1) + '</span><span class="atk-h">' + inline(p.h) + "</span></a>";
      }).join("") : '<span class="atk-none">' + (i === last ? "No defeater attacks the inference directly" : "Not disputed here") + "</span>";
      return '<li class="am-row' + (hits.length ? " hit" : "") + (i === last ? " concl" : "") + '"><span class="am-tag">' + tag + '</span><span class="am-line">' + inline(line) + '</span><span class="am-atk">' + attacks + "</span></li>";
    }).join("");
    var attacked = st.filter(function (h, i) { return i < last && h.length; }).length;
    return '<section class="block amap" id="s-map" aria-labelledby="am-h"><div class="label" id="am-h">Argument map <span class="latin">· where the defeaters strike</span></div>' +
      '<p class="am-sum">' + attacked + " of " + last + " premise" + (last === 1 ? "" : "s") + " disputed" + (st[last] && st[last].length ? ", and the inference itself" : "") + ". Select a defeater to jump to it.</p>" +
      '<ol class="am">' + rows + "</ol></section>";
  }
  function attackTags(e) {
    var st = DEF.meta.structure[e.id], tags = {};
    if (!e.form || !st) return tags;
    var last = e.form.length - 1;
    st.forEach(function (hits, i) { hits.forEach(function (k) { (tags[k] = tags[k] || []).push(i === last ? "the inference" : "P" + (i + 1)); }); });
    return tags;
  }
  function elsewhereHtml(e) {
    var items = A.ELSEWHERE[e.id] || [];
    if (!items.length) return "";
    var seen = {}, out = [];
    items.forEach(function (x) {
      var key, html;
      if (x.kind === "classic") { key = "c" + x.book.id + x.item.n + x.item.label; html = '<a href="#classics.' + x.book.id + '"><span class="ew-k">Classic</span>' + esc(x.book.author.split(" & ")[0].split(" ").pop()) + ", <i>" + esc(shortTitle(x.book.title)) + "</i>" + (x.item.n ? " " + esc(x.item.n) : "") + "</a>"; }
      else if (x.kind === "timeline") { key = "t" + x.preset.id + x.ev.label; html = '<a href="#timeline.' + x.preset.id + '"><span class="ew-k">Timeline</span>' + esc(x.ev.label) + "</a>"; }
      else if (x.kind === "parallel") { key = "p" + x.set.id; html = '<a href="#parallels.' + x.set.id + '"><span class="ew-k">Parallels</span>' + esc(x.set.title) + "</a>"; }
      else if (x.kind === "map") { key = "m" + x.link.id + x.role; html = '<a href="#map"><span class="ew-k">Case map</span>Link ' + (x.i + 1) + ", " + (x.role === "support" ? "offered in support" : "a defeater") + "</a>"; }
      else if (x.kind === "ledger") { key = "l" + x.item.id; html = '<a href="#ledger"><span class="ew-k">Ledger</span>' + esc(x.item.label) + "</a>"; }
      if (key && !seen[key]) { seen[key] = 1; out.push(html); }
    });
    return '<div class="ew-box"><span class="label">Elsewhere on the site</span><div class="ew-list">' + out.slice(0, 10).join("") + "</div></div>";
  }
  function shortTitle(t) {
    t = t.replace(/,\s*ch\.\s*\d+.*$/, "");
    return t.length <= 34 ? t : t.slice(0, 34).replace(/\s+\S*$/, "") + "…";
  }

  A.view("entry", function (id) {
    var e = TXT.byId(id), c = A.CAT[e.cat];
    A.setTitle(e.title);
    var siblings = A.entriesIn(e.cat), idx = siblings.indexOf(e);
    var prev = siblings[idx - 1], next = siblings[idx + 1];
    var isWeak = !!e.skeptic;
    var form = e.form ? '<ol class="form">' + e.form.map(function (f) { return "<li>" + inline(f) + "</li>"; }).join("") + "</ol>" : "";
    var tags = attackTags(e);
    var points = (e.points || []).map(function (p, i) {
      return '<div class="point" id="pt-' + i + '" tabindex="-1"><h3><span class="pn" aria-hidden="true">§' + (i + 1) + "</span><span>" + inline(p.h) + "</span>" +
        (tags[i] ? '<span class="pt-atk">attacks ' + tags[i].join(", ") + "</span>" : "") + "</h3><p>" + inline(p.t) + "</p></div>";
    }).join("");
    var replies = (e.replies || []).map(function (r) {
      return '<div class="qa"><p class="q">' + inline(r.q) + '</p><p class="a">' + inline(r.a) + "</p></div>";
    }).join("");
    var rel = (e.rel || []).map(function (rid) { var r = TXT.byId(rid); return r ? A.entryLink(r) : ""; }).join("");
    var amap = isWeak ? "" : argumentMap(e);
    A.page(
      '<article class="entry-main" id="entry-main">' +
        '<div class="crumbs"><a href="#library">Library</a><span aria-hidden="true">/</span><a href="#c.' + c.id + '">' + esc(c.name) + "</a></div>" +
        '<div class="entry-sig"><span class="sig-big">' + A.sig(e) + "</span>" + A.levelPill(e) + "</div>" +
        "<h1>" + esc(e.title) + "</h1>" +
        (e.who ? '<p class="who">' + inline(e.who) + "</p>" : "") +
        (isWeak ? '<div class="weak-banner"><b>Weak skeptic argument.</b> This entry flags an objection skeptics should stop using, and gives the stronger argument instead.</div>' : "") +
        '<section class="block claim" id="s-claim"><div class="label">' + (isWeak ? "The weak argument" : 'The argument <span class="latin">· videtur quod</span>') + "</div>" +
          '<div class="claim-text gloss-zone">' + inline(e.claim) + form + "</div></section>" +
        '<section class="block answer" id="s-answer"><div class="label">' + (isWeak ? "Why it fails" : 'The answer <span class="latin">· respondeo</span>') + "</div>" +
          '<p class="answer-text gloss-zone">' + inline(e.short) + "</p></section>" +
        amap +
        '<section class="block defeaters gloss-zone" id="s-points"><div class="label">' + (isWeak ? "What to argue instead" : "Defeaters") + "</div>" + points + "</section>" +
        (replies ? '<section class="block replies gloss-zone" id="s-replies"><div class="label">If they reply <span class="latin">· ad obiecta</span></div>' + replies + "</section>" : "") +
        '<section class="apparatus" id="s-sources"><span class="label">Apparatus · sources</span><ol>' +
          (e.sources || []).map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol></section>" +
        '<nav class="pager" aria-label="More in this category">' +
          (prev ? '<a href="#a.' + prev.id + '"><span class="label">Previous · ' + A.sig(prev) + "</span>" + esc(prev.title) + "</a>" : "<span></span>") +
          (next ? '<a href="#a.' + next.id + '" class="next"><span class="label">Next · ' + A.sig(next) + "</span>" + esc(next.title) + "</a>" : "<span></span>") +
        "</nav>" +
      "</article>" +
      '<aside class="margin" aria-label="Entry tools">' +
        '<div class="margin-actions">' + (isWeak ? "" : '<button class="btn" type="button" id="debate-this">Debate this</button>') +
          '<button class="btn ghost" type="button" id="cite-this">Cite ' + A.sig(e) + "</button></div>" +
        '<div class="toc-box"><span class="label">In this entry</span><nav>' +
          '<a href="#s-claim" data-scroll="s-claim">The argument</a><a href="#s-answer" data-scroll="s-answer">The answer</a>' +
          (amap ? '<a href="#s-map" data-scroll="s-map">Argument map</a>' : "") +
          '<a href="#s-points" data-scroll="s-points">' + (isWeak ? "What to argue instead" : "Defeaters") + " (" + (e.points || []).length + ")</a>" +
          (replies ? '<a href="#s-replies" data-scroll="s-replies">If they reply (' + e.replies.length + ")</a>" : "") +
          '<a href="#s-sources" data-scroll="s-sources">Sources (' + (e.sources || []).length + ")</a></nav></div>" +
        (rel ? '<div class="rel-box"><span class="label">Related</span><div class="rel-list">' + rel + "</div></div>" : "") +
        elsewhereHtml(e) +
      "</aside>", "entry");
    A.$$(".gloss-zone").forEach(A.glossify);
    var dt = A.$("#debate-this");
    if (dt) dt.addEventListener("click", function () {
      if (A.setDebateDraft) A.setDebateDraft(A.firstSentences(e.claim, 2));
      A.go("debate");
    });
    A.$("#cite-this").addEventListener("click", function () {
      var text = A.citation(e);
      A.copyText(text, function (ok) { A.say(ok ? "Citation copied" : "Copy this citation: " + text); });
    });
  });
})();
