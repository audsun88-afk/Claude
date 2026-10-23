/* Defeaters — app shell: shared helpers, routing, navigation, search, theme,
 * glossary tooltips, and citation. Views register themselves with APP.view(). */
(function () {
  "use strict";
  var DEF = window.DEF, TXT = window.TXT, ENGINE = window.ENGINE;
  var esc = TXT.esc, inline = TXT.inline;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var main = $("#main");

  // ---------- data indexes ----------
  var CAT = {}, PART = {}, BY_CAT = {};
  DEF.parts.forEach(function (p) { PART[p.id] = p; });
  DEF.cats.forEach(function (c, i) { c.n = i + 1; CAT[c.id] = c; BY_CAT[c.id] = []; });
  DEF.entries.forEach(function (e) { BY_CAT[e.cat].push(e); });
  DEF.cats.forEach(function (c) { BY_CAT[c.id].forEach(function (e, j) { e.siglum = c.n + "." + (j + 1); }); });
  function entriesIn(cat) { return BY_CAT[cat] || []; }
  function catsIn(part) { return DEF.cats.filter(function (c) { return c.part === part; }); }

  var LEVELS = {
    scholarly: { name: "Scholarly", note: "Defended in peer-reviewed philosophy or biblical scholarship." },
    popular: { name: "Popular", note: "Common in popular apologetics, books, and sermons." },
    fringe: { name: "Fringe", note: "Rejected by most scholars and by many apologists." },
    skeptic: { name: "Skeptic error", note: "A weak skeptic argument that should be dropped." }
  };
  function level(e) { return e.skeptic ? "skeptic" : (DEF.meta.levels[e.id] || "popular"); }
  function levelPill(e, quiet) {
    var l = level(e);
    if (quiet && l === "popular") return "";
    return '<span class="lvl lvl-' + l + '" title="' + esc(LEVELS[l].note) + '">' + LEVELS[l].name + "</span>";
  }
  function sig(e) { return "§\u2009" + e.siglum; }
  function firstSentences(s, n) {
    var parts = TXT.plain(s).match(/[^.!?]+[.!?]+["”’)]*\s*/g) || [String(s)];
    return parts.slice(0, n || 2).join("").trim();
  }
  function entryLink(e, opts) {
    opts = opts || {};
    return '<a class="elink" href="#a.' + e.id + '">' + (opts.sig === false ? "" : '<span class="sig">' + sig(e) + "</span>") +
      '<span class="t">' + esc(e.title) + "</span></a>";
  }
  function chipLink(id, kind) {
    var e = TXT.byId(id);
    if (!e) return "";
    return '<a class="chip chip-' + (kind || "plain") + '" href="#a.' + e.id + '" title="' + esc(firstSentences(e.short, 1)) + '"><span class="sig">' + e.siglum + "</span> " + esc(e.title) + "</a>";
  }

  var STORE = {
    get: function (k) { try { return localStorage.getItem("defeaters." + k); } catch (e) { return null; } },
    set: function (k, v) { try { if (v == null) localStorage.removeItem("defeaters." + k); else localStorage.setItem("defeaters." + k, v); } catch (e) { /* storage unavailable */ } },
    json: function (k, fallback) { try { var v = STORE.get(k); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; } }
  };

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

  // Where else on the site each entry appears (classics, timeline, parallels, case map, ledger).
  var ELSEWHERE = (function () {
    var m = {};
    function add(id, item) { (m[id] = m[id] || []).push(item); }
    DEF.classics.forEach(function (b) {
      b.items.forEach(function (it) {
        it.ids.forEach(function (id) { add(id, { kind: "classic", book: b, item: it }); });
      });
    });
    DEF.timeline.presets.forEach(function (p) {
      p.events.forEach(function (ev) { ev.rel.forEach(function (id) { add(id, { kind: "timeline", preset: p, ev: ev }); }); });
    });
    DEF.parallels.forEach(function (p) { p.rel.forEach(function (id) { add(id, { kind: "parallel", set: p }); }); });
    DEF.casemap.links.forEach(function (l, i) {
      l.support.forEach(function (id) { add(id, { kind: "map", link: l, i: i, role: "support" }); });
      l.defeaters.forEach(function (id) { add(id, { kind: "map", link: l, i: i, role: "defeater" }); });
    });
    DEF.ledger.items.forEach(function (it) { it.rel.forEach(function (id) { add(id, { kind: "ledger", item: it }); }); });
    return m;
  })();

  // ---------- routing ----------
  var VIEWS = {};
  function view(name, fn) { VIEWS[name] = fn; }
  function parse(hash) {
    var h = String(hash || "").replace(/^#\/?/, "");
    if (!h) return { view: "home" };
    if (h === "index") return { view: "home", arg: "index" };
    if (h === "library") return { view: "library" };
    var m = /^([a-z]+)\.(.+)$/.exec(h);
    if (m) {
      if (m[1] === "c") return { view: "library", arg: m[2] };
      if (m[1] === "a") return { view: "entry", arg: m[2] };
      if (m[1] === "essay") return { view: "essay", arg: m[2] };
      if (VIEWS[m[1]]) return { view: m[1], arg: m[2] };
    }
    if (h === "case") return { view: "essay", arg: "overview" };
    if (h === "method" || h === "about") return { view: "essay", arg: h };
    if (VIEWS[h]) return { view: h };
    return { view: "home" };
  }
  var current = "", leaveHooks = [];
  function onLeave(fn) { leaveHooks.push(fn); }
  function go(token, opts) {
    opts = opts || {};
    leaveHooks.splice(0).forEach(function (fn) { try { fn(); } catch (e) { /* view cleanup */ } });
    current = token;
    if (opts.push !== false) {
      try {
        if (location.hash.replace(/^#/, "") !== token) history.pushState(null, "", token ? "#" + token : location.pathname + location.search);
      } catch (e) { /* history unavailable in this frame; in-memory routing still works */ }
    }
    var r = parse(token);
    if (r.view === "entry" && !TXT.byId(r.arg)) r = { view: "home" };
    if (r.view === "essay" && !DEF.essays[r.arg]) r = { view: "home" };
    setNav(r);
    hideTip();
    (VIEWS[r.view] || VIEWS.home)(r.arg);
    if (!opts.keepScroll) { try { window.scrollTo(0, 0); } catch (e) { /* ignore */ } }
    if (opts.focusMain !== false && opts.push !== false) { try { main.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
  }
  function currentToken() { return current; }
  window.addEventListener("popstate", function () { go(location.hash.replace(/^#/, ""), { push: false }); });
  window.addEventListener("hashchange", function () {
    var t = location.hash.replace(/^#/, "");
    if (t !== current) go(t, { push: false });
  });
  document.addEventListener("click", function (ev) {
    var sc = ev.target.closest && ev.target.closest("[data-scroll]");
    if (sc) {
      ev.preventDefault();
      var t = document.getElementById(sc.getAttribute("data-scroll"));
      if (t) { t.scrollIntoView({ behavior: "smooth", block: "start" }); if (t.tabIndex < 0) t.setAttribute("tabindex", "-1"); try { t.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
      return;
    }
    var a = ev.target.closest && ev.target.closest("a[href^='#']");
    if (!a || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button !== 0) return;
    ev.preventDefault();
    closeSearch();
    closeMenus();
    go(a.getAttribute("href").slice(1));
  });

  function setNav(r) {
    var key = r.view === "entry" || r.view === "library" ? "library" : r.view === "essay" ? "essay." + r.arg : r.view;
    if (r.view === "home" && r.arg === "index") key = "home";
    $$(".nav [data-view]").forEach(function (a) {
      if (a.getAttribute("data-view") === key) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    $$(".nav details").forEach(function (d) {
      var on = !!$("[aria-current='page']", d);
      var s = $("summary", d);
      if (on) s.setAttribute("data-current", "true"); else s.removeAttribute("data-current");
    });
  }
  function closeMenus(except) {
    $$(".nav details[open]").forEach(function (d) { if (d !== except) d.removeAttribute("open"); });
  }
  document.addEventListener("click", function (ev) {
    var d = ev.target.closest && ev.target.closest(".nav details");
    closeMenus(d);
  });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") { closeMenus(); hideTip(true); }
  });

  function setTitle(t) { document.title = t ? t + " · Defeaters" : "Defeaters"; }
  function page(html, cls) { main.innerHTML = '<div class="wrap ' + (cls || "") + '">' + html + "</div>"; return main.firstChild; }

  // ---------- theme ----------
  var root = document.documentElement;
  function effectiveTheme() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    try { return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; } catch (e) { return "light"; }
  }
  function applyTheme(t) {
    if (t === "light" || t === "dark") root.setAttribute("data-theme", t); else root.removeAttribute("data-theme");
    var b = $("#theme-toggle");
    if (b) {
      var next = effectiveTheme() === "dark" ? "light" : "dark";
      b.setAttribute("aria-label", "Switch to " + next + " theme");
      b.setAttribute("title", "Switch to " + next + " theme");
      b.setAttribute("data-mode", effectiveTheme());
    }
    document.dispatchEvent(new CustomEvent("themechange"));
  }
  applyTheme(STORE.get("theme"));
  var tb = $("#theme-toggle");
  if (tb) tb.addEventListener("click", function () {
    var next = effectiveTheme() === "dark" ? "light" : "dark";
    STORE.set("theme", next);
    applyTheme(next);
  });

  // ---------- header search ----------
  var searchInput = $("#site-search"), searchBox = $("#search-results"), activeIdx = -1, lastResults = [];
  function closeSearch() { if (searchBox) { searchBox.hidden = true; activeIdx = -1; } }
  function drawSearch() {
    var q = searchInput.value.trim();
    if (!q) { closeSearch(); return; }
    lastResults = ENGINE.search(q, 8);
    var terms = DEF.glossary.filter(function (g) { return g.t.toLowerCase().indexOf(q.toLowerCase()) === 0; }).slice(0, 2);
    searchBox.innerHTML = (lastResults.length ? lastResults.map(function (r, i) {
      return '<a href="#a.' + r.id + '" class="' + (i === activeIdx ? "active" : "") + '"><span class="sr-cat">' + sig(r.entry) + " · " + esc(CAT[r.entry.cat].short) + '</span><span class="sr-title">' + esc(r.entry.title) + "</span></a>";
    }).join("") : '<div class="empty">No matching arguments. Try a key word like "tomb" or "evil".</div>') +
      terms.map(function (g) { return '<a href="#glossary.' + slug(g.t) + '"><span class="sr-cat">Glossary</span><span class="sr-title">' + esc(g.t) + "</span></a>"; }).join("");
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
      if (ev.key === "/" && document.activeElement && !/input|textarea|select/i.test(document.activeElement.tagName)) { ev.preventDefault(); searchInput.focus(); }
    });
  }
  function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  // ---------- glossary tooltips ----------
  var GLOSS = DEF.glossary.map(function (g, i) {
    var forms = [g.t].concat(g.aka || []);
    return { i: i, g: g, forms: forms };
  });
  var glossRe = (function () {
    var forms = [];
    GLOSS.forEach(function (x) { x.forms.forEach(function (f) { if (f.length >= 3) forms.push({ f: f, i: x.i }); }); });
    forms.sort(function (a, b) { return b.f.length - a.f.length; });
    var map = {};
    forms.forEach(function (x) { map[x.f.toLowerCase()] = x.i; });
    var pat = forms.map(function (x) { return x.f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/'/g, "['’]"); }).join("|");
    return { re: new RegExp("(^|[^\\w])(" + pat + ")(?![\\w-])", "i"), map: map };
  })();
  function glossIndex(text) {
    var k = text.toLowerCase().replace(/’/g, "'");
    if (glossRe.map[k] != null) return glossRe.map[k];
    return null;
  }
  function glossify(rootEl) {
    if (!rootEl) return;
    var used = {};
    var walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || n.nodeValue.length < 4) return NodeFilter.FILTER_REJECT;
        var p = n.parentNode;
        while (p && p !== rootEl) {
          if (/^(A|BUTTON|CODE|H1|H2|LABEL|SUMMARY|TEXTAREA|INPUT)$/.test(p.nodeName) || (p.classList && (p.classList.contains("gl") || p.classList.contains("no-gloss")))) return NodeFilter.FILTER_REJECT;
          p = p.parentNode;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var text = node.nodeValue, frag = null, last = 0, m, re = new RegExp(glossRe.re.source, "ig");
      while ((m = re.exec(text))) {
        var word = m[2], gi = glossIndex(word);
        if (gi == null || used[gi]) continue;
        var g = DEF.glossary[gi];
        // Capitalized terms (names, technical titles) match only when capitalized in the text.
        if (/^[A-Z]/.test(g.t) && !/^[A-Z]/.test(word)) continue;
        used[gi] = true;
        frag = frag || document.createDocumentFragment();
        var start = m.index + m[1].length;
        frag.appendChild(document.createTextNode(text.slice(last, start)));
        var s = document.createElement("span");
        s.className = "gl"; s.tabIndex = 0; s.setAttribute("data-g", gi); s.setAttribute("aria-describedby", "gl-tip");
        s.textContent = word;
        frag.appendChild(s);
        last = start + word.length;
      }
      if (frag) { frag.appendChild(document.createTextNode(text.slice(last))); node.parentNode.replaceChild(frag, node); }
    });
  }
  var tip = document.createElement("div");
  tip.id = "gl-tip"; tip.className = "tip gl-tip"; tip.setAttribute("role", "tooltip"); tip.hidden = true;
  document.body.appendChild(tip);
  var tipTarget = null, tipTimer = null, tipPinned = false;
  function showTip(el, html) {
    clearTimeout(tipTimer);
    tip.innerHTML = html;
    tip.hidden = false;
    tipTarget = el;
    var r = el.getBoundingClientRect(), vw = document.documentElement.clientWidth;
    var w = Math.min(340, vw - 24);
    tip.style.width = w + "px";
    var left = Math.max(12, Math.min(r.left + window.scrollX, window.scrollX + vw - w - 12));
    tip.style.left = left + "px";
    var th = tip.offsetHeight;
    var below = r.bottom + window.scrollY + 8;
    var above = r.top + window.scrollY - th - 8;
    tip.style.top = (r.bottom + th + 16 > window.innerHeight && above > window.scrollY ? above : below) + "px";
  }
  function hideTip(force) {
    if (tipPinned && !force) return;
    tipPinned = false;
    tip.hidden = true; tipTarget = null;
  }
  function glossTipHtml(gi) {
    var g = DEF.glossary[gi];
    var see = (g.see || []).map(function (id) { var e = TXT.byId(id); return e ? '<a href="#a.' + e.id + '">' + esc(e.title) + "</a>" : ""; }).filter(Boolean);
    return '<b class="tip-term">' + esc(g.t) + "</b><span>" + esc(g.d) + "</span>" + (see.length ? '<span class="tip-see">See: ' + see.join(" · ") + "</span>" : "") +
      '<a class="tip-more" href="#glossary.' + slug(g.t) + '">Glossary</a>';
  }
  document.addEventListener("mouseover", function (ev) {
    var el = ev.target.closest && ev.target.closest(".gl");
    if (el) { tipPinned = false; showTip(el, glossTipHtml(+el.getAttribute("data-g"))); return; }
    if (ev.target.closest && ev.target.closest("#gl-tip")) { clearTimeout(tipTimer); return; }
    if (tipTarget && tipTarget.classList.contains("gl") && !tipPinned) { clearTimeout(tipTimer); tipTimer = setTimeout(function () { hideTip(); }, 220); }
  });
  document.addEventListener("focusin", function (ev) {
    var el = ev.target.closest && ev.target.closest(".gl");
    if (el) showTip(el, glossTipHtml(+el.getAttribute("data-g")));
    else if (!(ev.target.closest && ev.target.closest("#gl-tip"))) hideTip();
  });
  document.addEventListener("click", function (ev) {
    var el = ev.target.closest && ev.target.closest(".gl");
    if (el) { tipPinned = true; showTip(el, glossTipHtml(+el.getAttribute("data-g"))); return; }
    if (!(ev.target.closest && ev.target.closest("#gl-tip, [data-tip]"))) hideTip(true);
  });
  window.addEventListener("resize", function () { hideTip(true); });

  // ---------- toast and clipboard ----------
  var toast = document.createElement("div");
  toast.className = "toast"; toast.setAttribute("role", "status"); toast.setAttribute("aria-live", "polite");
  document.body.appendChild(toast);
  var toastTimer = null;
  function say(msg) {
    toast.textContent = msg; toast.classList.add("on");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { toast.classList.remove("on"); }, 2200);
  }
  function copyText(text, done) {
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      done(ok);
    }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { done(true); }, fallback);
      else fallback();
    } catch (e) { fallback(); }
  }
  function citation(e) {
    var url = "";
    try { url = location.href.split("#")[0] + "#a." + e.id; } catch (err) { url = "#a." + e.id; }
    return "Defeaters, " + sig(e) + ", “" + e.title + ".” " + url;
  }

  // ---------- small UI helpers ----------
  function fmtPct(p) {
    if (p >= 0.9995) return "> 99.9%";
    if (p < 0.0005) return "< 0.1%";
    return (p * 100).toFixed(p < 0.1 ? 1 : 0) + "%";
  }
  function segmented(name, options, value) {
    return '<div class="seg" role="group" aria-label="' + esc(name) + '">' + options.map(function (o) {
      return '<button type="button" data-v="' + esc(o.id) + '" aria-pressed="' + (o.id === value) + '">' + esc(o.name) + "</button>";
    }).join("") + "</div>";
  }

  window.APP = {
    DEF: DEF, TXT: TXT, ENGINE: ENGINE, esc: esc, inline: inline, $: $, $$: $$, main: main,
    CAT: CAT, PART: PART, entriesIn: entriesIn, catsIn: catsIn, LEVELS: LEVELS, level: level, levelPill: levelPill,
    sig: sig, firstSentences: firstSentences, entryLink: entryLink, chipLink: chipLink, STORE: STORE, SOURCES: SOURCES,
    ELSEWHERE: ELSEWHERE, view: view, go: go, current: currentToken, onLeave: onLeave, setTitle: setTitle, page: page,
    glossify: glossify, showTip: showTip, hideTip: hideTip, say: say, copyText: copyText, citation: citation,
    slug: slug, fmtPct: fmtPct, segmented: segmented, effectiveTheme: effectiveTheme
  };
})();
