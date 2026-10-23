/* The debate arena: argue for Christianity and get answered by the library engine
 * or by a live model grounded in the library. */
(function () {
  "use strict";
  var A = window.APP, DEF = A.DEF, TXT = A.TXT, ENGINE = A.ENGINE, AI = window.AI, esc = A.esc, inline = A.inline;
  var $ = A.$;

  var DEBATE = {
    state: ENGINE.newState(),
    turns: [],         // {role: "user"|"site", html, text}
    history: [],       // {role: "user"|"assistant", content} for the AI
    mode: A.STORE.get("mode") === "ai" ? "ai" : "engine",
    depth: A.STORE.get("depth") === "thorough" ? "thorough" : "standard",
    busy: false, ctl: null,
    draft: A.STORE.get("draft") || "",
    lastConsulted: []
  };
  A.setDebateDraft = function (t) { DEBATE.draft = t; };
  var aiStatus = { available: false, provider: null };
  var aiReady = AI.init().then(function (s) { aiStatus = s; if (A.current() === "debate") drawSide(); return s; });

  function chipSay(text) { return '<button type="button" class="chip" data-say="' + esc(text) + '">' + esc(text) + "</button>"; }
  function introTurn() {
    return {
      role: "site",
      html: '<p class="lead">State your case for God, Christianity, or religion. I\'ll answer with the strongest scholarly rebuttal in the library, then you can push back with any comeback.</p>' +
        '<div class="next"><span class="label">Opening arguments</span><div class="chips">' +
        ENGINE.OPENERS.slice(0, 5).map(chipSay).join("") + "</div></div>"
    };
  }

  function engineHtml(r) {
    var h = [];
    if (r.kind === "weak") h.push('<p class="lead"><strong>Agreed: this is a weak skeptical argument, and this site says so.</strong> ' + inline(r.lead) + "</p>");
    else if (r.lead) h.push('<p class="lead">' + inline(r.lead) + "</p>");
    if (r.reply) h.push('<p class="pt"><strong>On “' + inline(r.reply.q) + '”</strong> ' + inline(r.reply.a) + "</p>");
    (r.points || []).forEach(function (p) { h.push('<p class="pt"><strong>' + inline(p.h) + ".</strong> " + inline(p.t) + "</p>"); });
    if (r.notes && r.notes.length) {
      h.push('<div class="notes">' + r.notes.map(function (n) {
        return '<div class="note-flag"><b>' + esc(n.label) + "</b>" + esc(n.text) + ' <a href="#a.' + n.link + '">More</a></div>';
      }).join("") + "</div>");
    }
    if (r.entry && r.kind !== "meta") {
      var e = TXT.byId(r.entry);
      h.push('<p class="from">From ' + A.sig(e) + ', <a href="#a.' + e.id + '">' + esc(e.title) + "</a>, which has the full argument and sources.</p>");
    }
    if (r.suggest && r.suggest.length) {
      h.push('<div class="next"><span class="label">Did you mean</span><div class="chips">' +
        r.suggest.map(function (id) { var e = TXT.byId(id); return chipSay(e.title); }).join("") + "</div></div>");
    }
    if (r.next && r.next.length) {
      h.push('<div class="next"><span class="label">' + (r.kind === "meta" || r.kind === "fallback" ? "Try" : "Push back") + '</span><div class="chips">' + r.next.map(chipSay).join("") + "</div></div>");
    }
    return h.join("");
  }
  function engineText(r) {
    var parts = [];
    if (r.lead) parts.push(TXT.plain(r.lead));
    if (r.reply) parts.push("On \"" + TXT.plain(r.reply.q) + "\": " + TXT.plain(r.reply.a));
    (r.points || []).forEach(function (p) { parts.push(TXT.plain(p.h) + ". " + TXT.plain(p.t)); });
    return parts.join("\n\n");
  }

  function drawTranscript() {
    var box = $("#transcript");
    if (!box) return;
    var turns = DEBATE.turns.length ? DEBATE.turns : [introTurn()];
    box.innerHTML = turns.map(function (t, i) {
      return '<div class="turn ' + t.role + '" data-i="' + i + '"><span class="who">' + (t.role === "user" ? "Objection" : "Reply") + '</span><div class="body">' + t.html + "</div></div>";
    }).join("");
    box.scrollTop = box.scrollHeight;
  }

  function drawSide() {
    var side = $("#arena-side");
    if (!side) return;
    var st = aiStatus, aiOn = DEBATE.mode === "ai";
    var aiBtnDisabled = !(st.provider === "sample" || st.provider === "api");
    var modeNote;
    if (st.provider === "sample") modeNote = "Live AI answers through your own Claude account and is grounded in the library entries that match each message. The first message asks your permission.";
    else if (st.provider === "api") modeNote = st.needsKey ? "Add an Anthropic API key to debate a live model grounded in the library. The key stays in this browser and is sent only to api.anthropic.com." : "Live AI uses Claude Opus 5.5 with your API key, grounded in the library entries that match each message.";
    else if (!AI.isArtifact()) modeNote = "Checking whether live AI is available…";
    else modeNote = "Live AI isn't available in this view. The library engine works fully offline.";
    var keyForm = st.provider === "api" ? (
      '<form class="key-form" id="key-form"><label class="visually-hidden" for="api-key">Anthropic API key</label>' +
      '<input id="api-key" type="password" autocomplete="off" placeholder="' + (AI.hasKey() ? "Key saved. Paste a new one to replace it" : "sk-ant-…") + '">' +
      '<label><input id="api-remember" type="checkbox"> Remember on this device</label>' +
      '<div class="row-btns"><button class="btn ghost small" type="submit">Save key</button>' + (AI.hasKey() ? '<button class="btn ghost small" type="button" id="key-clear">Forget key</button>' : "") + "</div></form>") : "";
    var consulted = DEBATE.lastConsulted.length ? DEBATE.lastConsulted.map(function (c) {
      var e = TXT.byId(c.id); return e ? A.entryLink(e) : "";
    }).join("") : '<p class="muted">The library entries used for each reply appear here.</p>';
    side.innerHTML =
      '<section><span class="label">Respondent</span><div class="mode" role="group" aria-label="Respondent">' +
        '<button type="button" data-mode="engine" aria-pressed="' + (!aiOn) + '">Library engine</button>' +
        '<button type="button" data-mode="ai" aria-pressed="' + aiOn + '"' + (aiBtnDisabled ? " disabled" : "") + ">Live AI</button></div>" +
        '<p class="mode-note">' + esc(DEBATE.mode === "engine" ? "The library engine answers instantly from " + DEF.entries.length + " prepared entries and works offline. " + (aiBtnDisabled ? "" : "Switch to Live AI for free-form replies.") : modeNote) + "</p>" +
        (aiOn ? keyForm : "") +
        (aiOn ? '<label class="depth"><input type="checkbox" id="depth-toggle"' + (DEBATE.depth === "thorough" ? " checked" : "") + "> Thorough mode (slower, deeper)</label>" : "") +
      "</section>" +
      '<section class="consulted"><span class="label">Entries consulted</span>' + consulted + "</section>" +
      '<section class="openers"><span class="label">Common arguments to try</span><div class="chips">' + ENGINE.OPENERS.slice(5).map(chipSay).join("") + "</div></section>";
    A.$$("[data-mode]", side).forEach(function (b) {
      b.addEventListener("click", function () {
        DEBATE.mode = b.getAttribute("data-mode"); A.STORE.set("mode", DEBATE.mode); drawSide();
      });
    });
    var dtg = $("#depth-toggle");
    if (dtg) dtg.addEventListener("change", function () { DEBATE.depth = dtg.checked ? "thorough" : "standard"; A.STORE.set("depth", DEBATE.depth); });
    var kf = $("#key-form");
    if (kf) kf.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var v = $("#api-key").value.trim();
      if (!v) return;
      AI.setKey(v, $("#api-remember").checked);
      aiStatus = AI.status(); drawSide();
    });
    var kc = $("#key-clear");
    if (kc) kc.addEventListener("click", function () { AI.setKey("", false); aiStatus = AI.status(); drawSide(); });
  }

  function setBusy(b) {
    DEBATE.busy = b;
    var send = $("#debate-send"), stop = $("#debate-stop");
    if (send) send.disabled = b;
    if (stop) stop.hidden = !b;
  }

  function submit(text) {
    text = String(text || "").trim();
    if (!text || DEBATE.busy) return;
    var input = $("#debate-input");
    if (input) { input.value = ""; }
    DEBATE.draft = ""; A.STORE.set("draft", null);
    DEBATE.turns.push({ role: "user", html: "<p>" + esc(text) + "</p>", text: text });
    if (DEBATE.mode === "ai" && (aiStatus.provider === "sample" || (aiStatus.provider === "api" && AI.hasKey()))) return submitAI(text);
    if (DEBATE.mode === "ai" && aiStatus.provider === "api" && !AI.hasKey()) {
      DEBATE.turns.push({ role: "site", html: '<p class="lead">Add an Anthropic API key in the panel to use Live AI, or switch to the library engine. Here is the library\'s answer meanwhile:</p>' });
    }
    var r = ENGINE.respond(DEBATE.state, text);
    DEBATE.lastConsulted = r.consulted || (r.entry ? [{ id: r.entry }] : []);
    DEBATE.turns.push({ role: "site", html: engineHtml(r), text: engineText(r) });
    DEBATE.history.push({ role: "user", content: text }, { role: "assistant", content: engineText(r) || "(no reply)" });
    drawTranscript(); drawSide();
  }

  function submitAI(text) {
    var notes = ENGINE.contextFor(text, DEBATE.state, 3);
    var ranked = ENGINE.rank(text, 3).filter(function (r) { return r.score > 3; });
    DEBATE.lastConsulted = ranked.map(function (r) { return { id: r.id, score: r.score }; });
    // Keep the engine's topic in sync so switching modes mid-debate stays coherent.
    if (ranked[0] && ranked[0].score >= 6) DEBATE.state.topic = ranked[0].id;
    var turn = { role: "site", html: '<p class="thinking">Thinking</p>', text: "" };
    DEBATE.turns.push(turn);
    drawTranscript(); drawSide();
    var idx = DEBATE.turns.length - 1;
    var ctl = new AbortController(); DEBATE.ctl = ctl;
    setBusy(true);
    var priorHistory = DEBATE.history.slice();
    function paint(full) {
      turn.text = full;
      turn.html = TXT.markdown(full);
      var node = document.querySelector('#transcript .turn[data-i="' + idx + '"] .body');
      if (node) { node.innerHTML = turn.html; var box = $("#transcript"); box.scrollTop = box.scrollHeight; }
    }
    AI.ask({ history: priorHistory, text: text, notes: notes, depth: DEBATE.depth, signal: ctl.signal, onText: paint })
      .then(function (res) {
        if (res.cancelled) { turn.html = res.text ? TXT.markdown(res.text) + '<p class="from">Stopped.</p>' : '<p class="from">Stopped.</p>'; }
        else {
          paint(res.text);
          var links = DEBATE.lastConsulted.map(function (c) { var e = TXT.byId(c.id); return '<a href="#a.' + e.id + '">' + esc(e.title) + "</a>"; }).join(", ");
          turn.html += (res.truncated ? '<p class="from">The reply was cut short.</p>' : "") + (links ? '<p class="from">Library entries consulted: ' + links + ".</p>" : "");
        }
        DEBATE.history.push({ role: "user", content: text }, { role: "assistant", content: turn.text || "(stopped)" });
      }, function (err) {
        var partial = err && err.partial ? TXT.markdown(err.partial) : "";
        // Fall back to the library engine so the debate never dead-ends.
        var r = ENGINE.respond(DEBATE.state, text);
        turn.html = partial + '<div class="note-flag" style="margin-bottom:10px"><b>Live AI</b>' + esc(err.message || "Live AI failed.") + " The library engine answered instead.</div>" + engineHtml(r);
        turn.text = engineText(r);
        DEBATE.history.push({ role: "user", content: text }, { role: "assistant", content: turn.text || "(no reply)" });
        aiStatus = AI.status();
        if (!aiStatus.available && aiStatus.provider !== "api") { DEBATE.mode = "engine"; }
      })
      .then(function () { setBusy(false); DEBATE.ctl = null; drawTranscript(); drawSide(); });
  }

  A.view("debate", function () {
    A.setTitle("Debate");
    A.page(
      '<div class="arena-main">' +
        '<header class="arena-head"><span class="label">Debate arena · <span class="latin">disputatio</span></span>' +
        "<h1>Make your case.</h1>" +
        "<p>Argue for God, Christianity, or religion. The site answers from its library, with sources, and you can push back with any comeback. Nothing you type leaves your browser unless you switch on Live AI.</p></header>" +
        '<div class="transcript" id="transcript" aria-live="polite"></div>' +
        '<form class="composer" id="composer"><div class="composer-field"><label class="visually-hidden" for="debate-input">Your argument</label>' +
          '<textarea id="debate-input" placeholder="State your argument, e.g. &quot;The disciples would not die for a lie.&quot;"></textarea>' +
          '<p class="composer-hint">Press Enter to send, Shift+Enter for a new line.</p></div>' +
          '<div class="btns"><button class="btn" type="submit" id="debate-send">Argue</button>' +
          '<button class="btn ghost" type="button" id="debate-stop" hidden>Stop</button>' +
          '<button class="btn ghost" type="button" id="debate-reset">New debate</button></div></form>' +
      "</div>" +
      '<aside class="arena-side" id="arena-side"></aside>', "arena");
    drawTranscript(); drawSide();
    var input = $("#debate-input");
    input.value = DEBATE.draft || "";
    input.addEventListener("input", function () { DEBATE.draft = input.value; A.STORE.set("draft", input.value || null); });
    input.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter" && !ev.shiftKey && !ev.isComposing) { ev.preventDefault(); submit(input.value); }
    });
    $("#composer").addEventListener("submit", function (ev) { ev.preventDefault(); submit(input.value); });
    $("#debate-stop").addEventListener("click", function () { if (DEBATE.ctl) DEBATE.ctl.abort(); });
    $("#debate-reset").addEventListener("click", function () {
      if (DEBATE.ctl) DEBATE.ctl.abort();
      DEBATE.state = ENGINE.newState(); DEBATE.turns = []; DEBATE.history = []; DEBATE.lastConsulted = [];
      drawTranscript(); drawSide(); input.focus();
    });
    setBusy(DEBATE.busy);
    if (DEBATE.draft) { try { input.focus(); input.setSelectionRange(input.value.length, input.value.length); } catch (e) { /* ignore */ } }
  });

  // Chips anywhere send their text to the arena.
  document.addEventListener("click", function (ev) {
    var chip = ev.target.closest && ev.target.closest("[data-say]");
    if (!chip) return;
    ev.preventDefault();
    if (A.current() !== "debate") A.go("debate");
    submit(chip.getAttribute("data-say"));
  });

  A.debate = { submit: submit, state: DEBATE, ready: aiReady };
})();
