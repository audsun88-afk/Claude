/* Exercises the Live AI path with a simulated artifact runtime (window.claude.use("sample")).
 * Run: NODE_PATH=$(npm root -g) node tests/ai.e2e.js */
"use strict";
const path = require("path");
const { chromium } = require("playwright");
const root = path.join(__dirname, "..");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.addInitScript(() => {
    window.__calls = [];
    const sample = (input, opts) => {
      window.__calls.push({ input, opts: { modelTier: opts.modelTier, cache: opts.cache, hasSignal: !!opts.signal } });
      return new Promise((resolve) => {
        const full = "**Steelman:** you argue the disciples' deaths prove the resurrection.\n\n- Martyrdom shows sincerity, not truth.\n- Most martyrdom traditions are late.\n\nWhat would distinguish a sincere vision from a real appearance?";
        setTimeout(() => opts.onText({ text: full.slice(0, 40), delta: full.slice(0, 40) }), 20);
        setTimeout(() => { opts.onText({ text: full, delta: full.slice(40) }); resolve({ text: full, truncated: false, modelTierApplied: "default" }); }, 60);
      });
    };
    window.claude = { use: (name) => Promise.resolve(name === "sample" ? sample : null) };
  });
  await page.goto("file://" + path.join(root, "dist/defeaters.html") + "#debate");
  await page.waitForSelector("#arena-side [data-mode='ai']:not([disabled])");
  await page.click("#arena-side [data-mode='ai']");
  await page.fill("#debate-input", "The disciples died for their belief. Nobody dies for a lie.");
  await page.click("#debate-send");
  await page.waitForFunction(() => /What would distinguish/.test(document.querySelector(".turn.site:last-child .body").textContent));
  const html = await page.$eval(".turn.site:last-child .body", (el) => el.innerHTML);
  const call = await page.evaluate(() => window.__calls[0]);
  const first = call.input[0], last = call.input[call.input.length - 1];
  const checks = {
    rendersBold: /<strong>Steelman:<\/strong>/.test(html),
    rendersList: /<ul><li>/.test(html),
    consultedLinks: /Library entries consulted/.test(html),
    startsWithRules: first.role === "user" && /Respondent on "Defeaters"/.test(first.content),
    endsWithUser: last.role === "user" && /<library_notes>/.test(last.content) && /Apostles Died/.test(last.content),
    cacheOff: call.opts.cache === false, tier: call.opts.modelTier === "default", signal: call.opts.hasSignal
  };
  console.log(checks);
  await browser.close();
  const ok = Object.values(checks).every(Boolean) && !errors.length;
  if (errors.length) console.log("errors", errors);
  console.log(ok ? "ai path OK" : "ai path FAILED");
  if (!ok) process.exitCode = 1;
})();
