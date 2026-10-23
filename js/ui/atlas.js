/* The atlas: every entry as a node and every cross-reference as an edge, laid out by a
 * small force simulation (seeded, so the map is the same on every visit). Emphasis form:
 * everything is quiet until a part, a search, or a hover lifts a set of nodes. */
(function () {
  "use strict";
  var A = window.APP, DEF = A.DEF, esc = A.esc;
  var NS = "http://www.w3.org/2000/svg";
  var W = 1000, H = 720, CACHE = null;

  function rng(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

  function layout() {
    if (CACHE) return CACHE;
    var rand = rng(20251023);
    var nodes = DEF.entries.map(function (e, i) { return { e: e, i: i, x: 0, y: 0, vx: 0, vy: 0, deg: 0, nb: [] }; });
    var idx = {};
    nodes.forEach(function (n) { idx[n.e.id] = n; });
    var seen = {}, edges = [];
    DEF.entries.forEach(function (e) {
      (e.rel || []).forEach(function (r) {
        if (!idx[r] || r === e.id) return;
        var k = e.id < r ? e.id + "|" + r : r + "|" + e.id;
        if (seen[k]) return;
        seen[k] = 1;
        var a = idx[e.id], b = idx[r];
        edges.push([a, b]); a.deg++; b.deg++; a.nb.push(b); b.nb.push(a);
      });
    });
    var nc = DEF.cats.length, catPos = {};
    DEF.cats.forEach(function (c, ci) {
      var ang = (ci / nc) * Math.PI * 2 - Math.PI / 2;
      catPos[c.id] = { x: Math.cos(ang) * 320, y: Math.sin(ang) * 240 };
    });
    nodes.forEach(function (n) {
      var c = catPos[n.e.cat];
      n.x = c.x + (rand() - 0.5) * 80; n.y = c.y + (rand() - 0.5) * 80;
    });
    var N = nodes.length, ITER = 320;
    for (var it = 0; it < ITER; it++) {
      var alpha = 1 - it / ITER;
      for (var i = 0; i < N; i++) {
        var a = nodes[i];
        for (var j = i + 1; j < N; j++) {
          var b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy + 0.01;
          if (d2 > 90000) continue;
          var f = 520 / d2;
          a.vx += dx * f; a.vy += dy * f; b.vx -= dx * f; b.vy -= dy * f;
        }
      }
      edges.forEach(function (ed) {
        var a = ed[0], b = ed[1], dx = b.x - a.x, dy = b.y - a.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
        var f = (d - 38) * 0.018 / d;
        a.vx += dx * f; a.vy += dy * f; b.vx -= dx * f; b.vy -= dy * f;
      });
      nodes.forEach(function (n) {
        var c = catPos[n.e.cat];
        n.vx += (c.x - n.x) * 0.004 - n.x * 0.0015;
        n.vy += (c.y - n.y) * 0.004 - n.y * 0.0015;
        n.vx *= 0.62; n.vy *= 0.62;
        n.x += n.vx * (0.4 + alpha); n.y += n.vy * (0.4 + alpha);
      });
    }
    var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    nodes.forEach(function (n) { minX = Math.min(minX, n.x); maxX = Math.max(maxX, n.x); minY = Math.min(minY, n.y); maxY = Math.max(maxY, n.y); });
    var pad = 30, s = Math.min((W - 2 * pad) / (maxX - minX), (H - 2 * pad) / (maxY - minY));
    var ox = (W - (maxX - minX) * s) / 2, oy = (H - (maxY - minY) * s) / 2;
    nodes.forEach(function (n) { n.x = ox + (n.x - minX) * s; n.y = oy + (n.y - minY) * s; n.r = 2.6 + Math.sqrt(n.deg) * 1.15; });
    CACHE = { nodes: nodes, edges: edges };
    return CACHE;
  }
  function el(name, attrs) { var n = document.createElementNS(NS, name); for (var k in attrs) n.setAttribute(k, attrs[k]); return n; }

  A.view("atlas", function () {
    A.setTitle("Atlas");
    var G = layout();
    var ranked = G.nodes.slice().sort(function (a, b) { return b.deg - a.deg || a.e.title.localeCompare(b.e.title); });
    var parts = [{ id: "all", name: "No highlight" }].concat(DEF.parts.map(function (p) { return { id: p.id, name: p.id + " · " + p.name }; }));
    A.page(
      '<header class="tool-head"><span class="label">Atlas</span><h1>The map of the arguments</h1>' +
        "<p class=\"lede\">Each dot is an entry; each line is a cross-reference between entries. Arguments that lean on each other sit together. Larger dots have more connections. Highlight a part of the library, search for an argument, or hover a dot to see its neighbors.</p></header>" +
      '<div class="atlas-controls">' + A.segmented("Highlight a part", parts, "all") +
        '<label class="visually-hidden" for="atlas-find">Find an argument</label><input id="atlas-find" type="search" placeholder="Find an argument" autocomplete="off"><span class="lib-count" id="atlas-count" aria-live="polite"></span></div>' +
      '<div class="atlas-wrap">' +
        '<figure class="chart atlas-fig"><figcaption class="visually-hidden">Network of ' + G.nodes.length + " entries and " + G.edges.length + " cross-references.</figcaption>" +
          '<div id="atlas-host" class="atlas-host"></div></figure>' +
        '<aside class="atlas-side"><span class="label">Most connected</span><ol class="hub-list">' +
          ranked.slice(0, 14).map(function (n) { return '<li><a href="#a.' + n.e.id + '" data-node="' + n.i + '"><span class="sig">' + n.e.siglum + "</span>" + esc(n.e.title) + '<span class="deg">' + n.deg + "</span></a></li>"; }).join("") +
          '</ol><p class="muted small">' + G.nodes.length + " entries · " + G.edges.length + " connections</p></aside>" +
      "</div>" +
      '<button class="linkish" type="button" id="atlas-tt" aria-expanded="false">Show as a list</button>' +
      '<div id="atlas-table" hidden><table class="data-table"><thead><tr><th scope="col">Entry</th><th scope="col">Category</th><th scope="col">Connections</th></tr></thead><tbody>' +
        ranked.map(function (n) { return '<tr><th scope="row"><a href="#a.' + n.e.id + '">' + A.sig(n.e) + " " + esc(n.e.title) + "</a></th><td>" + esc(A.CAT[n.e.cat].short) + "</td><td>" + n.deg + "</td></tr>"; }).join("") +
      "</tbody></table></div>", "tool-page atlas");

    var svg = el("svg", { viewBox: "0 0 " + W + " " + H, class: "atlas-svg", role: "img", "aria-label": "Network map of " + G.nodes.length + " arguments and their cross-references. The list below gives the same information." });
    var gE = el("g", { class: "edges" }), gN = el("g", { class: "nodes" }), gL = el("g", { class: "labels" });
    var lines = G.edges.map(function (ed) {
      var l = el("line", { x1: ed[0].x.toFixed(1), y1: ed[0].y.toFixed(1), x2: ed[1].x.toFixed(1), y2: ed[1].y.toFixed(1) });
      gE.appendChild(l); return l;
    });
    var dots = G.nodes.map(function (n) {
      var g = el("g", { class: "nd", "data-i": n.i });
      g.appendChild(el("circle", { cx: n.x.toFixed(1), cy: n.y.toFixed(1), r: Math.max(n.r + 6, 10).toFixed(1), class: "hit" }));
      g.appendChild(el("circle", { cx: n.x.toFixed(1), cy: n.y.toFixed(1), r: n.r.toFixed(1), class: "dot" }));
      gN.appendChild(g); return g;
    });
    ranked.slice(0, 8).forEach(function (n) {
      var t = el("text", { x: (n.x + n.r + 4).toFixed(1), y: (n.y + 4).toFixed(1), class: "nl" });
      t.textContent = n.e.title.length > 26 ? n.e.title.slice(0, 24).replace(/\s+\S*$/, "") + "…" : n.e.title;
      gL.appendChild(t);
    });
    svg.appendChild(gE); svg.appendChild(gN); svg.appendChild(gL);
    A.$("#atlas-host").appendChild(svg);

    var part = "all", query = "";
    function apply(hover) {
      var on = {}, anyOn = false;
      if (hover != null) {
        var h = G.nodes[hover]; on[h.i] = 2; h.nb.forEach(function (m) { on[m.i] = on[m.i] || 1; }); anyOn = true;
      } else {
        G.nodes.forEach(function (n) {
          var ok = (part === "all" || A.CAT[n.e.cat].part === part) && (!query || n.e.title.toLowerCase().indexOf(query) !== -1);
          if ((part !== "all" || query) && ok) { on[n.i] = 1; anyOn = true; }
        });
      }
      svg.classList.toggle("emph", anyOn);
      dots.forEach(function (d, i) { d.setAttribute("class", "nd" + (on[i] === 2 ? " focus" : on[i] ? " on" : "")); });
      lines.forEach(function (l, k) {
        var ed = G.edges[k], a = on[ed[0].i], b = on[ed[1].i];
        l.setAttribute("class", a && b ? "on" : (a || b) && hover != null ? "near" : "");
      });
      var n = Object.keys(on).length;
      A.$("#atlas-count").textContent = hover == null && (part !== "all" || query) ? n + " highlighted" : "";
    }
    function tipHtml(n) {
      return '<b class="tip-val">' + esc(n.e.title) + "</b><span>" + A.sig(n.e) + " · " + esc(A.CAT[n.e.cat].name) + '</span><span class="tip-see">' + n.deg + " connection" + (n.deg === 1 ? "" : "s") + ' · <a href="#a.' + n.e.id + '">Open</a></span>';
    }
    dots.forEach(function (d, i) {
      var n = G.nodes[i];
      d.addEventListener("mouseenter", function () { apply(i); A.showTip(d, tipHtml(n)); });
      d.addEventListener("mouseleave", function () { apply(null); A.hideTip(); });
      d.addEventListener("click", function () { A.go("a." + n.e.id); });
    });
    A.$$(".hub-list a").forEach(function (a) {
      var i = +a.getAttribute("data-node");
      a.addEventListener("mouseenter", function () { apply(i); });
      a.addEventListener("focus", function () { apply(i); });
      a.addEventListener("mouseleave", function () { apply(null); });
      a.addEventListener("blur", function () { apply(null); });
    });
    A.$$(".atlas-controls .seg button").forEach(function (b) {
      b.addEventListener("click", function () {
        part = b.getAttribute("data-v");
        A.$$(".atlas-controls .seg button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        apply(null);
      });
    });
    A.$("#atlas-find").addEventListener("input", function () { query = this.value.trim().toLowerCase(); apply(null); });
    A.$("#atlas-tt").addEventListener("click", function () {
      var t = A.$("#atlas-table"), on = t.hidden;
      t.hidden = !on; this.setAttribute("aria-expanded", String(on)); this.textContent = on ? "Hide the list" : "Show as a list";
    });
    apply(null);
  });
})();
