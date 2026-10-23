/* The case map: the chain of claims Christianity needs, each with the arguments offered for it,
 * its defeaters, and an adjustable probability. The product shows how a chain multiplies down. */
(function () {
  "use strict";
  var A = window.APP, DEF = A.DEF, esc = A.esc, inline = A.inline;
  var STATUS = {
    unestablished: { name: "Not established", note: "The arguments offered for this link fail at identifiable steps." },
    contested: { name: "Contested", note: "Christians themselves dispute this link, and serious objections remain unanswered." },
    against: { name: "Evidence against", note: "The evidence counts against this link more strongly than the arguments count for it." }
  };

  function defaults() { return DEF.casemap.links.map(function (l) { return Math.round(l.generous * 100); }); }

  A.view("map", function () {
    A.setTitle("Case map");
    var links = DEF.casemap.links;
    var vals = A.STORE.json("mapvals", null);
    if (!vals || vals.length !== links.length) vals = defaults();

    A.page(
      '<header class="tool-head"><span class="label">Case map</span><h1>The chain of dependence</h1>' +
        '<p class="lede">' + inline(DEF.casemap.intro) + "</p></header>" +
      '<section class="map-top">' +
        '<div class="hero-fig"><span class="hero-label">Probability that every link holds</span><span class="hero-num" id="map-total"></span>' +
          '<span class="hero-sub">The product of the probabilities set for each link below. The starting values are deliberately generous to Christianity; move them to your own estimates.</span>' +
          '<div class="row-btns"><button class="btn ghost small" type="button" id="map-reset">Reset to generous values</button><a class="btn ghost small" href="#essay.chain">Why the chain matters</a></div></div>' +
        '<figure class="chart" id="chain-fig"><figcaption><span class="chart-title">Probability remaining after each link</span><span class="chart-sub">Each bar is the chance that this link and every link above it hold.</span></figcaption>' +
          '<div class="hbars" id="chain-bars"></div>' +
          '<button class="linkish" type="button" id="chain-tt" aria-expanded="false">Show as table</button>' +
          '<table class="data-table" id="chain-table" hidden><thead><tr><th scope="col">Link</th><th scope="col">This link</th><th scope="col">Chain so far</th></tr></thead><tbody></tbody></table>' +
        "</figure>" +
      "</section>" +
      '<ol class="chain" id="chain">' + links.map(function (l, i) {
        var st = STATUS[l.status];
        return '<li class="link" id="link-' + (i + 1) + '">' +
          '<div class="link-rail" aria-hidden="true"><span class="link-n">' + (i + 1) + "</span></div>" +
          '<div class="link-card">' +
            '<div class="link-top"><h2>' + esc(l.claim) + '</h2><span class="status st-' + l.status + '" title="' + esc(st.note) + '">' + esc(st.name) + "</span></div>" +
            '<p class="rival"><span class="label">The rival view</span> ' + esc(l.rival) + "</p>" +
            '<p class="link-sum">' + inline(l.summary) + "</p>" +
            '<div class="link-cols"><div><span class="label">Offered in support</span><div class="chips small">' + l.support.map(function (id) { return A.chipLink(id, "pro"); }).join("") + "</div></div>" +
            '<div><span class="label">Main defeaters</span><div class="chips small">' + l.defeaters.map(function (id) { return A.chipLink(id, "con"); }).join("") + "</div></div></div>" +
            '<div class="link-slider"><label for="lp-' + i + '">Your probability for this link, if the links above hold</label>' +
              '<div class="slider-row"><input type="range" min="0" max="100" step="5" id="lp-' + i + '" value="' + vals[i] + '"><output for="lp-' + i + '" id="lo-' + i + '">' + vals[i] + "%</output></div></div>" +
          "</div></li>";
      }).join("") + "</ol>", "tool-page map");

    function draw() {
      var cum = 1, rows = [];
      links.forEach(function (l, i) {
        cum *= vals[i] / 100;
        rows.push({ l: l, i: i, p: vals[i] / 100, cum: cum });
      });
      A.$("#map-total").textContent = A.fmtPct(cum);
      A.$("#chain-bars").setAttribute("role", "img");
      A.$("#chain-bars").setAttribute("aria-label", "Probability remaining after each link, falling from " + A.fmtPct(rows[0].cum) + " after the first link to " + A.fmtPct(cum) + " after the last.");
      A.$("#chain-bars").innerHTML = rows.map(function (r) {
        var w = Math.max(0.4, r.cum * 100);
        return '<div class="hbar" tabindex="0" data-tip data-i="' + r.i + '"><span class="hb-label"><span class="hb-n">' + (r.i + 1) + "</span>" + esc(r.l.short) + "</span>" +
          '<span class="hb-track"><span class="hb-fill" style="width:' + w.toFixed(2) + '%"></span></span><span class="hb-val">' + A.fmtPct(r.cum) + "</span></div>";
      }).join("");
      A.$("#chain-table tbody").innerHTML = rows.map(function (r) {
        return "<tr><th scope=\"row\">" + (r.i + 1) + ". " + esc(r.l.short) + "</th><td>" + Math.round(r.p * 100) + "%</td><td>" + A.fmtPct(r.cum) + "</td></tr>";
      }).join("");
      A.$$("#chain-bars .hbar").forEach(function (el) {
        var r = rows[+el.getAttribute("data-i")];
        function show() { A.showTip(el, '<b class="tip-val">' + A.fmtPct(r.cum) + '</b><span>after link ' + (r.i + 1) + ", " + esc(r.l.short.toLowerCase()) + "</span><span class=\"tip-see\">This link: " + Math.round(r.p * 100) + "%</span>"); }
        el.addEventListener("mouseenter", show); el.addEventListener("focus", show);
        el.addEventListener("mouseleave", function () { A.hideTip(true); }); el.addEventListener("blur", function () { A.hideTip(true); });
        el.addEventListener("click", function () { var t = document.getElementById("link-" + (r.i + 1)); if (t) t.scrollIntoView({ behavior: "smooth", block: "center" }); });
      });
    }
    links.forEach(function (l, i) {
      var inp = A.$("#lp-" + i), out = A.$("#lo-" + i);
      inp.addEventListener("input", function () {
        vals[i] = +inp.value; out.textContent = vals[i] + "%";
        A.STORE.set("mapvals", JSON.stringify(vals));
        draw();
      });
    });
    A.$("#map-reset").addEventListener("click", function () {
      vals = defaults(); A.STORE.set("mapvals", null);
      links.forEach(function (l, i) { A.$("#lp-" + i).value = vals[i]; A.$("#lo-" + i).textContent = vals[i] + "%"; });
      draw();
    });
    A.$("#chain-tt").addEventListener("click", function () {
      var t = A.$("#chain-table"), on = t.hidden;
      t.hidden = !on; this.setAttribute("aria-expanded", String(on)); this.textContent = on ? "Hide table" : "Show as table";
    });
    draw();
  });
})();
