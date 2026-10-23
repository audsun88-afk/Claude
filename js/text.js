/* Text helpers: escaping, the inline markup used in entries, and a small
 * Markdown renderer for live AI replies. Everything is escaped first, so
 * nothing from data or model output is ever injected as raw HTML. */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function byId(id) {
    var list = window.DEF.entries;
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  // *italic*, **bold**, [[id]] / [[id|label]] for entries, [[#route|label]] for other pages
  function inline(s) {
    var out = esc(s);
    out = out.replace(/\[\[(#?[a-z0-9.-]+)(?:\|([^\]]+))?\]\]/g, function (_, id, label) {
      if (id.charAt(0) === "#") return '<a class="xref" href="' + id + '">' + (label || id.slice(1)) + "</a>";
      var e = byId(id);
      var text = label || (e ? e.title : id);
      return '<a class="xref" href="#a.' + id + '">' + text + "</a>";
    });
    out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    out = out.replace(/(^|[^*\w])\*([^*\n]+)\*(?!\w)/g, "$1<em>$2</em>");
    return out;
  }

  // Minimal Markdown for model output: paragraphs, bullet and numbered
  // lists, **bold**, *italic*, `code`, and ### headings rendered as bold lines.
  function markdown(src) {
    var lines = String(src || "").replace(/\r/g, "").split("\n");
    var html = [], para = [], list = null;
    function flushPara() {
      if (para.length) { html.push("<p>" + inline(para.join(" ")) + "</p>"); para = []; }
    }
    function flushList() {
      if (list) { html.push("<" + list.tag + ">" + list.items.map(function (t) { return "<li>" + inline(t) + "</li>"; }).join("") + "</" + list.tag + ">"); list = null; }
    }
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var ul = /^\s*[-*•]\s+(.*)$/.exec(line);
      var ol = /^\s*\d+[.)]\s+(.*)$/.exec(line);
      var hd = /^\s*#{1,6}\s+(.*)$/.exec(line);
      if (!line.trim()) { flushPara(); flushList(); continue; }
      if (hd) { flushPara(); flushList(); html.push("<p><strong>" + inline(hd[1]) + "</strong></p>"); continue; }
      if (ul || ol) {
        flushPara();
        var tag = ul ? "ul" : "ol";
        if (!list || list.tag !== tag) { flushList(); list = { tag: tag, items: [] }; }
        list.items.push((ul || ol)[1]);
        continue;
      }
      if (list) { list.items[list.items.length - 1] += " " + line.trim(); continue; }
      para.push(line.trim());
    }
    flushPara(); flushList();
    return html.join("").replace(/`([^`]+)`/g, "<code>$1</code>");
  }

  // Plain text version of inline markup (for prompts and search indexing).
  function plain(s) {
    return String(s || "")
      .replace(/\[\[(#?[a-z0-9.-]+)(?:\|([^\]]+))?\]\]/g, function (_, id, label) {
        if (id.charAt(0) === "#") return label || id.slice(1);
        var e = byId(id); return label || (e ? e.title : id);
      })
      .replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1");
  }

  window.TXT = { esc: esc, inline: inline, markdown: markdown, plain: plain, byId: byId };
})();
