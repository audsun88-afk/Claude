/* The Bayesian ledger: prior odds times the likelihood ratio of each kind of evidence,
 * shown as a waterfall of log-odds. Three presets show how the result depends on the inputs. */
(function () {
  "use strict";
  var A = window.APP, DEF = A.DEF, esc = A.esc, inline = A.inline;
  var L = DEF.ledger;

  function log10(x) { return Math.log(x) / Math.LN10; }
  function bigWords(n) {
    if (n < 1000) return String(Math.round(n));
    var units = [[1e12, "trillion"], [1e9, "billion"], [1e6, "million"], [1e3, "thousand"]];
    for (var i = 0; i < units.length; i++) if (n >= units[i][0]) {
      var v = n / units[i][0];
      return (v >= 100 ? Math.round(v) : v >= 10 ? Math.round(v) : Math.round(v * 10) / 10) + " " + units[i][1];
    }
    return String(Math.round(n));
  }
  function pow10(v) { // "10^17" as HTML
    var r = Math.round(v * 10) / 10;
    return "10<sup>" + (r % 1 === 0 ? r.toFixed(0) : r.toFixed(1)) + "</sup>";
  }
  function factorHtml(v) {
    if (Math.abs(v) < 0.05) return "×1";
    var sign = v > 0 ? "×" : "÷", a = Math.abs(v);
    if (a <= 3) { var f = Math.pow(10, a); return sign + (f < 10 ? f.toFixed(1).replace(/\.0$/, "") : Math.round(f).toLocaleString("en-US")); }
    if (a <= 12) return sign + bigWords(Math.pow(10, a));
    return sign + pow10(a);
  }
  function fmtNum(n) { return n < 10 ? n.toFixed(1).replace(/\.0$/, "") : bigWords(n); }
  function probHtml(lo) {
    var p = 1 / (1 + Math.pow(10, -lo));
    var odds = lo >= 0 ? (lo > 12 ? pow10(lo) : fmtNum(Math.pow(10, lo))) + " : 1" : "1 : " + (lo < -12 ? pow10(-lo) : fmtNum(Math.pow(10, -lo)));
    var big;
    if (lo <= -3) big = "1 in " + (lo < -12 ? pow10(-lo) : bigWords(Math.pow(10, -lo)));
    else if (lo >= 3) big = "&gt; 99.9%";
    else big = (p * 100).toFixed(p < 0.1 || p > 0.9 ? 1 : 0) + "%";
    return { big: big, small: "odds of " + odds };
  }
  function oddsTick(k) {
    if (k === 0) return "Even";
    var a = Math.abs(k), n = a <= 3 ? Math.pow(10, a).toLocaleString("en-US") : "10<sup>" + a + "</sup>";
    return k > 0 ? n + " : 1" : "1 : " + n;
  }

  function presetState(id) {
    return {
      preset: id,
      priors: L.priors.map(function (p) { return p.values[id]; }),
      items: L.items.map(function (it) { return it.values[id]; })
    };
  }
  function priorLogOdds(s) {
    var p = s.priors.reduce(function (a, b) { return a * b; }, 1);
    p = Math.min(Math.max(p, 1e-12), 1 - 1e-12);
    return log10(p / (1 - p));
  }
  function total(s) { return priorLogOdds(s) + s.items.reduce(function (a, b) { return a + b; }, 0); }
  function same(a, b) {
    return a.priors.every(function (v, i) { return Math.abs(v - b.priors[i]) < 1e-9; }) && a.items.every(function (v, i) { return Math.abs(v - b.items[i]) < 1e-9; });
  }

  A.view("ledger", function () {
    A.setTitle("Ledger");
    var S = presetState(A.STORE.get("ledgerpreset") || "critical");
    if (!L.presets.some(function (p) { return p.id === S.preset; })) S = presetState("critical");
    var resIdx = L.items.map(function (it) { return it.id; }).indexOf("resurrection");

    A.page(
      '<header class="tool-head"><span class="label">Ledger</span><h1>Weighing it all</h1>' +
        '<p class="lede">Bayes\' theorem in odds form: start with the prior odds, multiply by how much more probable each kind of evidence is if Christianity is true than if it is false, and read off the result. Choose a set of assumptions, or set your own. <a href="#essay.ledger">How the ledger works</a>.</p></header>' +
      '<div class="ledger-controls"><span class="label">Assumptions</span>' + A.segmented("Assumptions", L.presets, S.preset) + '<span class="custom-flag" id="lg-custom" hidden>Custom values</span></div>' +
      '<p class="preset-note" id="lg-note"></p>' +
      '<section class="ledger-top">' +
        '<div class="hero-fig"><span class="hero-label">Probability that Christianity is true, on these inputs</span><span class="hero-num" id="lg-post"></span><span class="hero-sub" id="lg-odds"></span>' +
          '<dl class="preset-compare" id="lg-compare"></dl></div>' +
        '<figure class="chart wf-fig"><figcaption><span class="chart-title">How the evidence moves the odds</span><span class="chart-sub">Each bar moves the running odds by its likelihood ratio, on a logarithmic scale. <span class="key"><i class="sw pos"></i>favors Christianity</span> <span class="key"><i class="sw neg"></i>counts against</span> <span class="key"><i class="sw mid"></i>prior and result</span></span></figcaption>' +
          '<div class="wf" id="wf"></div>' +
          '<button class="linkish" type="button" id="wf-tt" aria-expanded="false">Show as table</button>' +
          '<table class="data-table" id="wf-table" hidden><thead><tr><th scope="col">Step</th><th scope="col">Likelihood ratio</th><th scope="col">Running probability</th></tr></thead><tbody></tbody></table>' +
        "</figure>" +
      "</section>" +
      '<p class="breakeven" id="lg-break"></p>' +
      '<section class="assumptions" aria-labelledby="as-h"><h2 id="as-h" class="section-title">The assumptions</h2>' +
        '<div class="as-group"><span class="label">Prior probabilities</span>' + L.priors.map(function (p, i) {
          return '<div class="as-row"><div class="as-head"><label for="pr-' + i + '">' + esc(p.label) + '</label><output id="pro-' + i + '"></output></div>' +
            '<input type="range" id="pr-' + i + '" min="1" max="99" step="1">' +
            '<details><summary>Why this range</summary><p>' + inline(p.note) + '</p><p class="as-presets">' + presetLine(p.values, true) + '</p><div class="chips small">' + p.rel.map(function (id) { return A.chipLink(id); }).join("") + "</div></details></div>";
        }).join("") + "</div>" +
        '<div class="as-group"><span class="label">Evidence (likelihood ratios)</span>' + L.items.map(function (it, i) {
          var max = it.max || L.range[1];
          return '<div class="as-row"><div class="as-head"><label for="it-' + i + '">' + esc(it.label) + '</label><output id="ito-' + i + '"></output></div>' +
            '<input type="range" id="it-' + i + '" min="' + L.range[0] + '" max="' + max + '" step="0.1">' +
            '<details><summary>Why this range</summary><p>' + inline(it.note) + '</p><p class="as-presets">' + presetLine(it.values, false) + '</p><div class="chips small">' + it.rel.map(function (id) { return A.chipLink(id); }).join("") + "</div></details></div>";
        }).join("") + "</div>" +
      "</section>", "tool-page ledger");

    function presetLine(values, isProb) {
      return L.presets.map(function (p) {
        var v = values[p.id];
        return '<span><b>' + esc(p.name) + ":</b> " + (isProb ? Math.round(v * 100) + "%" : factorHtml(v)) + "</span>";
      }).join(" · ");
    }

    function syncInputs() {
      S.priors.forEach(function (v, i) { A.$("#pr-" + i).value = Math.round(v * 100); A.$("#pro-" + i).textContent = Math.round(v * 100) + "%"; });
      S.items.forEach(function (v, i) { A.$("#it-" + i).value = v; A.$("#ito-" + i).innerHTML = factorHtml(v); });
    }
    function setPresetButtons() {
      var match = null;
      L.presets.forEach(function (p) { if (same(S, presetState(p.id))) match = p.id; });
      S.preset = match;
      A.$$(".ledger-controls .seg button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-v") === match)); });
      A.$("#lg-custom").hidden = !!match;
      var p = L.presets.filter(function (x) { return x.id === match; })[0];
      A.$("#lg-note").textContent = p ? p.blurb : "Your own values. Choose a preset to reset.";
    }

    function draw() {
      var pl = priorLogOdds(S), steps = [{ label: "Prior odds", v: pl, kind: "mid", from: 0, to: pl }], run = pl;
      L.items.forEach(function (it, i) {
        var v = S.items[i];
        steps.push({ label: it.label, v: v, kind: v > 0.001 ? "pos" : v < -0.001 ? "neg" : "zero", from: run, to: run + v, i: i });
        run += v;
      });
      steps.push({ label: "Result", v: run, kind: "mid", from: 0, to: run, result: true });
      var lo = Math.min(0, Math.min.apply(null, steps.map(function (s) { return Math.min(s.from, s.to); })));
      var hi = Math.max(0, Math.max.apply(null, steps.map(function (s) { return Math.max(s.from, s.to); })));
      lo = Math.floor(lo - 0.5); hi = Math.ceil(hi + 0.5);
      var span = hi - lo, pos = function (x) { return ((x - lo) / span) * 100; };
      var stepTick = span <= 8 ? 1 : span <= 16 ? 2 : span <= 40 ? 5 : span <= 80 ? 10 : 20;
      var ticks = [];
      for (var k = Math.ceil(lo / stepTick) * stepTick; k <= hi; k += stepTick) ticks.push(k);
      if (ticks.indexOf(0) === -1) ticks.push(0);

      var post = probHtml(run);
      A.$("#lg-post").innerHTML = post.big;
      A.$("#lg-post").classList.toggle("long", post.big.replace(/<[^>]+>|&[a-z]+;/g, "x").length > 8);
      A.$("#lg-odds").innerHTML = post.small + ". Starting from a prior of " + probHtml(pl).big + ".";
      A.$("#lg-compare").innerHTML = L.presets.map(function (p) {
        var t = total(presetState(p.id));
        return "<div><dt>" + esc(p.name) + "</dt><dd>" + probHtml(t).big + "</dd></div>";
      }).join("");

      var wf = A.$("#wf");
      wf.setAttribute("role", "img");
      wf.setAttribute("aria-label", "Waterfall of log-odds: prior " + probHtml(pl).big.replace(/<[^>]+>/g, "") + ", result " + post.big.replace(/<[^>]+>/g, "") + ".");
      wf.innerHTML =
        '<div class="wf-axis" aria-hidden="true"><span class="wf-axis-label"></span><span class="wf-axis-track">' + ticks.map(function (t) {
          return '<span class="wf-tick' + (t === 0 ? " zero" : "") + '" style="left:' + pos(t).toFixed(2) + '%"><span>' + oddsTick(t) + "</span></span>";
        }).join("") + '</span><span class="wf-axis-val"></span></div>' +
        steps.map(function (s, j) {
          var a = pos(Math.min(s.from, s.to)), b = pos(Math.max(s.from, s.to));
          var w = Math.max(b - a, 0.35);
          var dir = s.to >= s.from ? "up" : "down";
          return '<div class="wf-row' + (s.result ? " result" : "") + (j === 0 ? " prior" : "") + '" tabindex="0" data-j="' + j + '">' +
            '<span class="wf-label">' + esc(s.label) + "</span>" +
            '<span class="wf-track"><span class="wf-zero" style="left:' + pos(0).toFixed(2) + '%"></span>' +
              (s.kind === "zero" ? '<span class="wf-dot" style="left:' + pos(s.from).toFixed(2) + '%"></span>' :
              '<span class="wf-bar ' + s.kind + " " + dir + '" style="left:' + a.toFixed(2) + "%;width:" + w.toFixed(2) + '%"></span>') +
            "</span>" +
            '<span class="wf-val">' + (j === 0 || s.result ? probHtml(s.to).big : factorHtml(s.v)) + "</span></div>";
        }).join("");
      A.$$("#wf .wf-row").forEach(function (row) {
        var s = steps[+row.getAttribute("data-j")];
        function show() {
          var html = j0(s);
          A.showTip(row, html);
        }
        row.addEventListener("mouseenter", show); row.addEventListener("focus", show);
        row.addEventListener("mouseleave", function () { A.hideTip(true); }); row.addEventListener("blur", function () { A.hideTip(true); });
      });
      function j0(s) {
        if (s.label === "Prior odds") return '<b class="tip-val">' + probHtml(s.to).big + "</b><span>prior probability</span>";
        if (s.result) return '<b class="tip-val">' + probHtml(s.to).big + "</b><span>after all the evidence</span><span class=\"tip-see\">" + probHtml(s.to).small + "</span>";
        return '<b class="tip-val">' + factorHtml(s.v) + "</b><span>" + esc(s.label) + '</span><span class="tip-see">Running probability: ' + probHtml(s.to).big + "</span>";
      }
      A.$("#wf-table tbody").innerHTML = steps.map(function (s, j) {
        return '<tr><th scope="row">' + esc(s.label) + "</th><td>" + (j === 0 || s.result ? "—" : factorHtml(s.v)) + "</td><td>" + probHtml(s.to).big + "</td></tr>";
      }).join("");

      // Break-even for the resurrection evidence.
      var others = run - S.items[resIdx];
      var need = -others;
      A.$("#lg-break").innerHTML = need > 0 ?
        "<b>Break-even.</b> With everything else as set, the resurrection evidence would need a likelihood ratio of " + factorHtml(need) + " to bring Christianity to even odds" + (S.items[resIdx] < need ? "; it is set at " + factorHtml(S.items[resIdx]) + "." : ", and it is set at " + factorHtml(S.items[resIdx]) + ".") :
        "<b>Break-even.</b> With everything else as set, Christianity is above even odds even if the resurrection evidence counted for nothing.";
      setPresetButtons();
    }

    A.$$(".ledger-controls .seg button").forEach(function (b) {
      b.addEventListener("click", function () {
        S = presetState(b.getAttribute("data-v"));
        A.STORE.set("ledgerpreset", S.preset);
        syncInputs(); draw();
      });
    });
    L.priors.forEach(function (p, i) {
      A.$("#pr-" + i).addEventListener("input", function () { S.priors[i] = +this.value / 100; A.$("#pro-" + i).textContent = this.value + "%"; draw(); });
    });
    L.items.forEach(function (it, i) {
      A.$("#it-" + i).addEventListener("input", function () { S.items[i] = +this.value; A.$("#ito-" + i).innerHTML = factorHtml(S.items[i]); draw(); });
    });
    A.$("#wf-tt").addEventListener("click", function () {
      var t = A.$("#wf-table"), on = t.hidden;
      t.hidden = !on; this.setAttribute("aria-expanded", String(on)); this.textContent = on ? "Hide table" : "Show as table";
    });
    syncInputs(); draw();
  });
})();
