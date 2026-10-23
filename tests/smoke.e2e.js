/* Browser smoke test. Run: NODE_PATH=$(npm root -g) node tests/smoke.e2e.js [screenshotDir]
 * Loads the built single-file page in Chromium at desktop and phone sizes, in light and
 * dark, visits every view, exercises each tool, runs a short debate, and fails on console
 * errors, horizontal overflow, or a tool that doesn't respond. */
"use strict";
const path = require("path");
const { chromium } = require("playwright");
const root = path.join(__dirname, "..");
const shotDir = process.argv[2];

const VIEWS = [
  "", "index", "library", "c.resurrection", "c.honesty", "a.kalam", "a.trilemma", "a.myth-jesus", "a.wyatt-finds",
  "case", "method", "about", "essay.concessions", "essay.chain", "essay.ledger", "essay.guide", "sources",
  "glossary", "glossary.bayes-theorem", "debate", "map", "ledger", "timeline", "timeline.christian", "atlas",
  "parallels", "parallels.genealogy", "compare", "classics", "classics.kreeft", "drill", "drill.kalam"
];

(async () => {
  const browser = await chromium.launch();
  const errors = [];
  const results = [];
  const check = (ok, msg) => { if (!ok) errors.push(msg); };
  for (const vp of [{ name: "desktop", width: 1280, height: 900 }, { name: "phone", width: 390, height: 844 }]) {
    for (const scheme of ["light", "dark"]) {
      const tag = `[${vp.name}/${scheme}]`;
      const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, colorScheme: scheme });
      const page = await ctx.newPage();
      page.on("console", (m) => { if (m.type() === "error" && !/fonts\.(googleapis|gstatic)/.test(m.text())) errors.push(`${tag} ${m.text()}`); });
      page.on("pageerror", (e) => errors.push(`${tag} pageerror ${e.message}`));
      await page.goto("file://" + path.join(root, "dist/defeaters.html"));
      await page.waitForSelector(".hero");
      const go = async (t) => { await page.evaluate((x) => window.DEFEATERS.go(x), t); await page.waitForTimeout(60); };

      for (const v of VIEWS) {
        await go(v);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        check(overflow <= 1, `${tag} horizontal overflow ${overflow}px on #${v}`);
        if (shotDir && scheme === "light" && ["", "a.kalam", "map", "ledger", "timeline"].includes(v)) {
          await page.screenshot({ path: path.join(shotDir, `${vp.name}-${(v || "home").replace(/\./g, "_")}.png`), fullPage: false });
        }
      }

      // Every entry renders, with its argument map when it has formal premises.
      if (vp.name === "desktop" && scheme === "light") {
        const bad = await page.evaluate(() => {
          const out = [];
          window.DEF.entries.forEach((e) => {
            window.DEFEATERS.go("a." + e.id);
            const h = document.querySelector(".entry h1");
            if (!h || !h.textContent.trim()) out.push(e.id + ": no title");
            if (e.form && !document.querySelector(".am")) out.push(e.id + ": no argument map");
            if (document.querySelectorAll(".point").length !== e.points.length) out.push(e.id + ": defeater count");
          });
          return out;
        });
        check(!bad.length, `${tag} entry pages: ${bad.slice(0, 5).join("; ")}`);
        results.push(`${tag} ${await page.evaluate(() => window.DEF.entries.length)} entry pages rendered`);
      }

      // Index filter.
      await go("");
      await page.fill("#ix-filter", "resurrection");
      await page.waitForTimeout(60);
      const ixCount = await page.textContent("#ix-count");
      check(/\d/.test(ixCount), `${tag} index filter shows no count`);

      // Glossary tooltip in an entry.
      await go("a.kalam");
      const gl = await page.$(".gloss-zone .gl");
      check(!!gl, `${tag} no glossary terms marked in the kalam entry`);
      if (gl) {
        await gl.focus();
        await page.waitForTimeout(60);
        check(await page.evaluate(() => !document.getElementById("gl-tip").hidden), `${tag} glossary tooltip did not open`);
      }

      // Case map: a slider changes the product.
      await go("map");
      const before = await page.textContent("#map-total");
      await page.evaluate(() => { const s = document.getElementById("lp-0"); s.value = "10"; s.dispatchEvent(new Event("input", { bubbles: true })); });
      check((await page.textContent("#map-total")) !== before, `${tag} case map total did not change`);
      await page.click("#map-reset");
      check((await page.textContent("#map-total")) === before, `${tag} case map reset failed`);

      // Ledger: presets move the posterior.
      await go("ledger");
      const crit = await page.textContent("#lg-post");
      await page.click(".tool-page.ledger .seg button:nth-child(2)");
      await page.waitForTimeout(60);
      const gen = await page.textContent("#lg-post");
      check(crit !== gen, `${tag} ledger presets gave the same result (${crit})`);
      results.push(`${tag} ledger: critical ${crit}, generous ${gen}`);
      await page.click(".tool-page.ledger .seg button:nth-child(1)");

      // Timeline: every event gets a label.
      for (const t of ["timeline", "timeline.christian"]) {
        await go(t);
        const n = await page.evaluate(() => [document.querySelectorAll(".tl-ev").length, document.querySelectorAll(".tl-label").length]);
        check(n[0] > 0 && n[0] === n[1], `${tag} ${t}: ${n[1]} labels for ${n[0]} events`);
      }

      // Atlas search highlights matches.
      await go("atlas");
      await page.fill("#atlas-find", "resurrection");
      await page.waitForTimeout(60);
      check(await page.evaluate(() => !!document.querySelector(".atlas-svg.emph .nd.on")), `${tag} atlas search highlighted nothing`);

      // Parallels: the menu switches passages.
      await go("parallels.tomb");
      if (await page.isVisible("#par-select")) await page.selectOption("#par-select", "judas");
      else await page.click('.par-list a[href="#parallels.judas"]');
      await page.waitForTimeout(60);
      check(/Judas/.test(await page.textContent(".par-main h2")), `${tag} parallels menu did not switch`);

      // Drill: a rebuttal is scored against the defeaters.
      await go("drill.kalam");
      await page.fill("#drill-text", "Quantum events may lack causes, the Borde-Guth-Vilenkin theorem applies only to classical spacetime, and causation inside the universe may not apply to the universe as a whole. Even granted, a cause is not a personal God.");
      await page.click("#drill-form button[type=submit]");
      await page.waitForTimeout(80);
      const cov = await page.$$eval("#drill-result .cov-covered", (els) => els.length);
      check(cov > 0, `${tag} drill scored nothing as covered`);

      // Debate flow through the UI.
      await go("debate");
      await page.fill("#debate-input", "The disciples died for their belief. Nobody dies for a lie.");
      await page.press("#debate-input", "Enter");
      await page.waitForSelector(".turn.site .pt");
      await page.click(".turn.site:last-child .chips .chip");
      await page.waitForTimeout(80);
      const turns = await page.$$eval(".turn", (els) => els.length);
      const lastText = await page.$eval(".turn.site:last-child .body", (el) => el.textContent.slice(0, 70));
      results.push(`${tag} debate: ${turns} turns; last reply: ${lastText}`);
      if (shotDir && scheme === "dark") await page.screenshot({ path: path.join(shotDir, `${vp.name}-debate-dark.png`) });

      // Search box.
      await page.fill("#site-search", "empty tomb");
      await page.waitForSelector("#search-results:not([hidden]) a");
      await ctx.close();
    }
  }
  await browser.close();
  results.forEach((r) => console.log(r));
  if (errors.length) { console.log("ERRORS:\n" + errors.join("\n")); process.exitCode = 1; }
  else console.log("smoke OK: every view and tool works, no console errors, no overflow");
})();
