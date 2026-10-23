/* The drill: read an argument, write a rebuttal, then compare it with the library's defeaters.
 * Coverage is an approximate keyword match, weighted by how distinctive each word is. */
(function () {
  "use strict";
  var A = window.APP, DEF = A.DEF, esc = A.esc, inline = A.inline, ENGINE = A.ENGINE;

  var IDF = null;
  function idf() {
    if (IDF) return IDF;
    var df = {}, n = 0;
    DEF.entries.forEach(function (e) {
      e.points.forEach(function (p) {
        n++;
        var seen = {};
        ENGINE.tokens(p.h + " " + p.t).forEach(function (t) { if (!seen[t]) { seen[t] = 1; df[t] = (df[t] || 0) + 1; } });
      });
    });
    IDF = {};
    for (var t in df) IDF[t] = Math.log((n + 1) / (df[t] + 0.5));
    IDF.__default = Math.log(n + 1);
    return IDF;
  }
  function coverage(user, point) {
    var W = idf(), u = {}, pt = {};
    ENGINE.tokens(user).forEach(function (t) { u[t] = 1; });
    ENGINE.tokens(point.h + " " + point.t).forEach(function (t) { pt[t] = W[t] != null ? W[t] : W.__default; });
    var top = Object.keys(pt).sort(function (a, b) { return pt[b] - pt[a]; }).slice(0, 14);
    var tot = 0, got = 0, hit = [];
    top.forEach(function (t) { tot += pt[t]; if (u[t]) { got += pt[t]; hit.push(t); } });
    return { score: tot ? got / tot : 0, hit: hit };
  }

  function pick(cat, lastId) {
    var pool = DEF.entries.filter(function (e) { return !e.skeptic && (cat === "all" || e.cat === cat) && e.id !== lastId; });
    return pool[Math.floor(Math.random() * pool.length)];
  }

  A.view("drill", function (arg) {
    A.setTitle("Drill");
    var stats = A.STORE.json("drill", { done: 0, streak: 0, best: 0 });
    var cat = A.STORE.get("drillcat") || "all";
    var e = (arg && A.TXT.byId(arg)) || pick(cat);
    A.page(
      '<header class="tool-head"><span class="label">Drill</span><h1>Answer it yourself</h1>' +
        "<p class=\"lede\">Read the argument, write the strongest rebuttal you can, then compare it with the library's defeaters. The match is approximate: it looks for the distinctive words of each defeater, so a good answer in different words may score low.</p></header>" +
      '<div class="drill-bar"><label for="drill-cat" class="label">Category</label><select id="drill-cat"><option value="all">Any category</option>' +
        DEF.cats.filter(function (c) { return c.id !== "honesty"; }).map(function (c) { return '<option value="' + c.id + '"' + (c.id === cat ? " selected" : "") + ">" + esc(c.name) + "</option>"; }).join("") +
        '</select><button class="btn ghost small" type="button" id="drill-next">Another argument</button>' +
        '<dl class="drill-stats"><div><dt>Drilled</dt><dd id="ds-done">' + stats.done + '</dd></div><div><dt>Streak</dt><dd id="ds-streak">' + stats.streak + '</dd></div><div><dt>Best</dt><dd id="ds-best">' + stats.best + "</dd></div></dl></div>" +
      '<section class="drill-card"><div class="drill-meta"><span class="sig">' + A.sig(e) + "</span>" + A.levelPill(e) + '<span class="el-cat">' + esc(A.CAT[e.cat].name) + "</span></div>" +
        "<h2>" + esc(e.title) + '</h2><div class="claim-text">' + inline(e.claim) + (e.form ? '<ol class="form">' + e.form.map(function (f) { return "<li>" + inline(f) + "</li>"; }).join("") + "</ol>" : "") + "</div></section>" +
      '<form class="drill-form" id="drill-form"><label for="drill-text" class="label">Your rebuttal</label>' +
        '<textarea id="drill-text" placeholder="Where does the argument fail? Name the premise, the evidence, or the inference."></textarea>' +
        '<div class="row-btns"><button class="btn" type="submit">Compare with the library</button><button class="btn ghost" type="button" id="drill-skip">Show the answer without scoring</button></div></form>' +
      '<section class="drill-result" id="drill-result" hidden aria-live="polite"></section>', "tool-page drill");

    function reveal(scored) {
      var text = A.$("#drill-text").value.trim();
      var res = e.points.map(function (p, i) { return { p: p, i: i, c: scored ? coverage(text, p) : null }; });
      var covered = res.filter(function (r) { return r.c && r.c.score >= 0.22; }).length;
      var partial = res.filter(function (r) { return r.c && r.c.score >= 0.1 && r.c.score < 0.22; }).length;
      if (scored) {
        stats.done++;
        var good = covered >= Math.max(1, Math.ceil(e.points.length / 3));
        stats.streak = good ? stats.streak + 1 : 0;
        stats.best = Math.max(stats.best, stats.streak);
        A.STORE.set("drill", JSON.stringify(stats));
        A.$("#ds-done").textContent = stats.done; A.$("#ds-streak").textContent = stats.streak; A.$("#ds-best").textContent = stats.best;
      }
      var box = A.$("#drill-result");
      box.hidden = false;
      box.innerHTML =
        (scored ? '<div class="drill-score"><span class="hero-num">' + covered + "<small> of " + e.points.length + '</small></span><span class="hero-sub">defeaters clearly covered' + (partial ? ", " + partial + " touched on" : "") + ". " +
          (covered >= Math.ceil(e.points.length / 2) ? "A strong answer." : covered ? "A start. Compare the ones you missed." : "Compare your answer with the defeaters below.") + "</span></div>" : "") +
        '<div class="block answer"><div class="label">The short answer</div><p class="answer-text">' + inline(e.short) + "</p></div>" +
        '<div class="block defeaters"><div class="label">The defeaters</div>' + res.map(function (r) {
          var st = !r.c ? "" : r.c.score >= 0.22 ? "covered" : r.c.score >= 0.1 ? "partial" : "missed";
          var badge = st ? '<span class="cov cov-' + st + '">' + (st === "covered" ? "Covered" : st === "partial" ? "Touched on" : "Missed") + "</span>" : "";
          return '<div class="point"><h3><span class="pn">§' + (r.i + 1) + "</span><span>" + inline(r.p.h) + "</span>" + badge + "</h3><p>" + inline(r.p.t) + "</p></div>";
        }).join("") + "</div>" +
        '<p class="row-btns"><a class="btn ghost small" href="#a.' + e.id + '">Open the full entry</a><button class="btn small" type="button" id="drill-again">Next argument</button></p>';
      A.$("#drill-again").addEventListener("click", next);
      box.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function next() { A.go("drill." + pick(cat, e.id).id); }
    A.$("#drill-form").addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!A.$("#drill-text").value.trim()) { A.say("Write a rebuttal first, or show the answer without scoring."); A.$("#drill-text").focus(); return; }
      reveal(true);
    });
    A.$("#drill-skip").addEventListener("click", function () { reveal(false); });
    A.$("#drill-next").addEventListener("click", next);
    A.$("#drill-cat").addEventListener("change", function () { cat = this.value; A.STORE.set("drillcat", cat === "all" ? null : cat); next(); });
  });
})();
