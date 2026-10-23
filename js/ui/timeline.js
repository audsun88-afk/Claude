/* The timeline: three lanes per preset (events, history, texts), drawn in SVG,
 * with the gaps between events and the texts that report them marked below the axis. */
(function () {
  "use strict";
  var A = window.APP, DEF = A.DEF, esc = A.esc;
  var NS = "http://www.w3.org/2000/svg";

  function yearLabel(y) { return y < 0 ? -y + " BCE" : y === 0 ? "1 CE" : y + " CE"; }
  function span(ev) {
    var c = ev.approx ? "c. " : "", a = ev.y, b = ev.y2;
    if (b == null) return c + yearLabel(a);
    if (a < 0 && b < 0) return c + -a + "–" + -b + " BCE";
    if (a > 0 && b > 0) return c + a + "–" + b + " CE";
    return c + yearLabel(a) + "–" + yearLabel(b);
  }
  function el(name, attrs, text) {
    var n = document.createElementNS(NS, name);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    return n;
  }

  function chart(p, host) {
    var W = 1000, padL = 18, padR = 18, laneH = 92, top = 6;
    var x = function (y) { return padL + ((y - p.from) / (p.to - p.from)) * (W - padL - padR); };
    var lanesH = p.lanes.length * laneH, axisY = top + lanesH + 6;
    var gapY0 = axisY + 40, H = gapY0 + p.gaps.length * 26 + 8;
    var svg = el("svg", { viewBox: "0 0 " + W + " " + H, class: "tl-svg", role: "img", "aria-label": p.name + " timeline: " + p.blurb });
    // lanes
    p.lanes.forEach(function (name, li) {
      var y0 = top + li * laneH;
      svg.appendChild(el("rect", { x: 0, y: y0, width: W, height: laneH - 6, class: "tl-lane" + (li % 2 ? " alt" : "") }));
      svg.appendChild(el("text", { x: padL, y: y0 + 16, class: "tl-lane-label" }, name));
      var base = y0 + laneH - 24;
      svg.appendChild(el("line", { x1: padL, x2: W - padR, y1: base, y2: base, class: "tl-base" }));
      // label placement: greedy rows above the marker
      var evs = p.events.map(function (e, i) { return { e: e, i: i }; }).filter(function (o) { return o.e.lane === li; })
        .sort(function (a, b) { return a.e.y - b.e.y; });
      var rows = [[], [], []];
      evs.forEach(function (o) {
        var e = o.e, cx = x(e.y), w = e.label.length * 6.3 + 6;
        var anchorEnd = cx + w > W - padR;
        var x1 = anchorEnd ? cx - w : cx, x2 = anchorEnd ? cx : cx + w;
        var row = -1;
        for (var r = 0; r < rows.length; r++) {
          if (rows[r].every(function (s) { return x2 + 6 < s[0] || x1 - 6 > s[1]; })) { row = r; break; }
        }
        var g = el("g", { class: "tl-ev lane-" + li, tabindex: "0", "data-i": o.i, role: "button", "aria-label": e.label + ", " + span(e) });
        if (e.y2 != null) {
          var xa = x(e.y), xb = x(e.y2);
          g.appendChild(el("rect", { x: xa - 2, y: base - 12, width: Math.max(xb - xa + 4, 16), height: 24, class: "tl-hit" }));
          g.appendChild(el("rect", { x: xa, y: base - 4, width: Math.max(xb - xa, 4), height: 8, rx: 4, class: "tl-span" }));
        } else {
          g.appendChild(el("circle", { cx: cx, cy: base, r: 12, class: "tl-hit" }));
          g.appendChild(el("circle", { cx: cx, cy: base, r: 5, class: "tl-dot" }));
        }
        if (row >= 0) {
          rows[row].push([x1, x2]);
          var ly = base - 14 - row * 15;
          if (row > 0) g.appendChild(el("line", { x1: cx, x2: cx, y1: base - 7, y2: ly + 3, class: "tl-leader" }));
          g.appendChild(el("text", { x: anchorEnd ? cx : cx, y: ly, class: "tl-label", "text-anchor": anchorEnd ? "end" : "start" }, e.label));
        }
        svg.appendChild(g);
      });
    });
    // axis
    var spanY = p.to - p.from, step = spanY > 2000 ? 500 : spanY > 800 ? 200 : spanY > 300 ? 50 : 25;
    svg.appendChild(el("line", { x1: padL, x2: W - padR, y1: axisY, y2: axisY, class: "tl-axis" }));
    for (var t = Math.ceil(p.from / step) * step; t <= p.to; t += step) {
      var tx = x(t);
      svg.appendChild(el("line", { x1: tx, x2: tx, y1: axisY, y2: axisY + 5, class: "tl-axis" }));
      svg.appendChild(el("line", { x1: tx, x2: tx, y1: top, y2: axisY, class: "tl-grid" }));
      svg.appendChild(el("text", { x: tx, y: axisY + 18, class: "tl-tick", "text-anchor": "middle" }, yearLabel(t)));
    }
    // gaps
    p.gaps.forEach(function (gp, gi) {
      var gy = gapY0 + gi * 26, xa = x(gp.from), xb = x(gp.to);
      var g = el("g", { class: "tl-gap" });
      g.appendChild(el("path", { d: "M" + xa + "," + (gy - 6) + "V" + gy + "H" + xb + "V" + (gy - 6), class: "tl-bracket" }));
      var lw = gp.label.length * 6.3, mid = (xa + xb) / 2;
      var anchor = "middle", lx = mid;
      if (mid - lw / 2 < padL) { anchor = "start"; lx = xa; } else if (mid + lw / 2 > W - padR) { anchor = "end"; lx = xb; }
      if (xb - xa < lw + 10 && anchor === "middle") { anchor = xa > W / 2 ? "end" : "start"; lx = anchor === "end" ? xa - 8 : xb + 8; }
      g.appendChild(el("text", { x: lx, y: gy + (anchor === "middle" ? 15 : 4), class: "tl-gap-label", "text-anchor": anchor }, gp.label));
      svg.appendChild(g);
    });
    host.innerHTML = "";
    host.appendChild(svg);
    A.$$(".tl-ev", svg).forEach(function (g) {
      var e = p.events[+g.getAttribute("data-i")];
      function html() {
        return '<b class="tip-val">' + esc(e.label) + "</b><span>" + esc(span(e)) + " · " + esc(p.lanes[e.lane]) + "</span><span>" + esc(e.note) + "</span>" +
          (e.rel.length ? '<span class="tip-see">' + e.rel.map(function (id) { var x = A.TXT.byId(id); return x ? '<a href="#a.' + x.id + '">' + esc(x.title) + "</a>" : ""; }).join(" · ") + "</span>" : "");
      }
      g.addEventListener("mouseenter", function () { A.showTip(g, html()); });
      g.addEventListener("focus", function () { A.showTip(g, html()); });
      g.addEventListener("click", function (ev) { ev.stopPropagation(); A.showTip(g, html()); });
      g.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); A.showTip(g, html()); } });
      g.addEventListener("mouseleave", function () { A.hideTip(); });
    });
  }

  A.view("timeline", function (arg) {
    A.setTitle("Timeline");
    var presets = DEF.timeline.presets;
    var p = presets.filter(function (x) { return x.id === arg; })[0] || presets[0];
    A.page(
      '<header class="tool-head"><span class="label">Timeline</span><h1>When it happened, and when it was written</h1>' +
        '<p class="lede">The stories, the history archaeologists and historians can reconstruct, and the dates of the texts. The gaps between them are where tradition grows.</p></header>' +
      '<div class="tl-controls">' + A.segmented("Timeline", presets.map(function (x) { return { id: x.id, name: x.name }; }), p.id) + "</div>" +
      '<p class="preset-note">' + esc(p.blurb) + "</p>" +
      '<figure class="chart tl-fig"><figcaption><span class="chart-title">' + esc(p.name) + '</span><span class="chart-sub">Select a mark for details. Brackets below the axis mark the gaps.</span></figcaption>' +
        '<div class="tl-scroll" id="tl-host"></div>' +
        '<button class="linkish" type="button" id="tl-tt" aria-expanded="false">Show as table</button>' +
        '<div id="tl-table" hidden>' + p.lanes.map(function (name, li) {
          return '<h3 class="tt-h">' + esc(name) + '</h3><table class="data-table"><thead><tr><th scope="col">Date</th><th scope="col">Event</th><th scope="col">Note</th></tr></thead><tbody>' +
            p.events.filter(function (e) { return e.lane === li; }).sort(function (a, b) { return a.y - b.y; }).map(function (e) {
              return "<tr><td>" + esc(span(e)) + '</td><th scope="row">' + esc(e.label) + "</th><td>" + esc(e.note) + (e.rel.length ? " " + e.rel.map(function (id) { var x = A.TXT.byId(id); return x ? '<a href="#a.' + x.id + '">' + A.sig(x) + "</a>" : ""; }).join(" ") : "") + "</td></tr>";
            }).join("") + "</tbody></table>";
        }).join("") + "</div>" +
      "</figure>", "tool-page timeline");
    chart(p, A.$("#tl-host"));
    A.$$(".tl-controls .seg button").forEach(function (b) {
      b.addEventListener("click", function () { A.go("timeline." + b.getAttribute("data-v"), { keepScroll: true }); });
    });
    A.$("#tl-tt").addEventListener("click", function () {
      var t = A.$("#tl-table"), on = t.hidden;
      t.hidden = !on; this.setAttribute("aria-expanded", String(on)); this.textContent = on ? "Hide table" : "Show as table";
    });
  });
})();
