/* Browser smoke test. Run: NODE_PATH=$(npm root -g) node tests/smoke.e2e.js [screenshotDir]
 * Loads the built single-file page in Chromium, visits every view, runs a short
 * debate, and fails on console errors or horizontal overflow. */
"use strict";
const path = require("path");
const { chromium } = require("playwright");
const root = path.join(__dirname, "..");
const shotDir = process.argv[2];

(async () => {
  const browser = await chromium.launch();
  const errors = [];
  const results = [];
  for (const vp of [{ name: "desktop", width: 1280, height: 900 }, { name: "phone", width: 390, height: 844 }]) {
    for (const scheme of ["light", "dark"]) {
      const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, colorScheme: scheme });
      const page = await ctx.newPage();
      page.on("console", (m) => { if (m.type() === "error" && !/fonts\.(googleapis|gstatic)/.test(m.text())) errors.push(`[${vp.name}/${scheme}] ${m.text()}`); });
      page.on("pageerror", (e) => errors.push(`[${vp.name}/${scheme}] pageerror ${e.message}`));
      await page.goto("file://" + path.join(root, "dist/defeaters.html"));
      await page.waitForSelector(".hero");
      const views = ["", "library", "c.resurrection", "a.kalam", "a.myth-jesus", "case", "method", "sources", "debate"];
      for (const v of views) {
        await page.evaluate((t) => window.DEFEATERS.go(t), v);
        await page.waitForTimeout(60);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        if (overflow > 1) errors.push(`[${vp.name}/${scheme}] horizontal overflow ${overflow}px on #${v}`);
        if (shotDir && scheme === "light" && ["", "a.kalam", "debate"].includes(v)) {
          await page.screenshot({ path: path.join(shotDir, `${vp.name}-${v || "home"}.png`), fullPage: false });
        }
      }
      // Debate flow through the UI.
      await page.evaluate(() => window.DEFEATERS.go("debate"));
      await page.fill("#debate-input", "The disciples died for their belief. Nobody dies for a lie.");
      await page.press("#debate-input", "Enter");
      await page.waitForSelector(".turn.site .pt");
      await page.click(".turn.site:last-child .chips .chip");
      await page.waitForTimeout(80);
      const turns = await page.$$eval(".turn", (els) => els.length);
      const lastText = await page.$eval(".turn.site:last-child .body", (el) => el.textContent.slice(0, 80));
      results.push(`${vp.name}/${scheme}: ${turns} turns; last reply: ${lastText}`);
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
  else console.log("smoke OK: no console errors, no overflow");
})();
