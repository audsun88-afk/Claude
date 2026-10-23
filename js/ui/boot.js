/* Boot: footer counts, menu positioning, and the first render. */
(function () {
  "use strict";
  var A = window.APP, DEF = A.DEF;
  var foot = A.$("#foot-count");
  if (foot) foot.textContent = DEF.entries.length + " arguments · " + DEF.cats.length + " categories · " + A.SOURCES.length.toLocaleString("en-US") + " sources";
  // Keep dropdown menus inside the viewport.
  A.$$(".nav details").forEach(function (d) {
    d.addEventListener("toggle", function () {
      var pop = A.$(".menu-pop", d);
      if (!d.open || !pop) return;
      pop.style.left = ""; pop.style.right = "";
      var r = pop.getBoundingClientRect(), vw = document.documentElement.clientWidth;
      if (r.right > vw - 8) pop.style.left = Math.round(vw - 8 - r.right + pop.offsetLeft) + "px";
      if (r.left < 8) pop.style.left = Math.round(8 - r.left + pop.offsetLeft) + "px";
    });
  });
  A.go(location.hash.replace(/^#/, ""), { push: false, focusMain: false });
  window.DEFEATERS = { go: A.go, submit: A.debate.submit, debate: A.debate.state, ready: A.debate.ready };
})();
