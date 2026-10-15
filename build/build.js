/* Bundles the site into single files. Run: node build/build.js
 *   dist/defeaters.html             full standalone page (CSS and JS inlined)
 *   dist/defeaters-artifact.html    the same page without the document skeleton,
 *                                   for publishing as a Claude artifact
 * The multi-file site (index.html + css/ + js/) also works as-is, e.g. on GitHub Pages. */
"use strict";
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");
const html = read("index.html");

function between(src, a, b) {
  const i = src.indexOf(a), j = src.indexOf(b);
  if (i === -1 || j === -1) throw new Error("marker missing: " + a);
  return src.slice(i + a.length, j);
}

function inlineAssets(fragment) {
  return fragment
    .replace(/<link rel="stylesheet" href="(css\/[^"]+)">/g, (_, href) => "<style>\n" + read(href) + "\n</style>")
    .replace(/<script src="(js\/[^"]+)"><\/script>/g, (_, src) =>
      "<script>\n" + read(src).replace(/<\/script/gi, "<\\/script") + "\n</script>");
}

const head = inlineAssets(between(html, "<!-- ARTIFACT-HEAD-START -->", "<!-- ARTIFACT-HEAD-END -->")).trim();
const body = inlineAssets(between(html, "<!-- ARTIFACT-BODY-START -->", "<!-- ARTIFACT-BODY-END -->")).trim();

fs.mkdirSync(path.join(root, "dist"), { recursive: true });

// Artifact: no doctype/html/head/body tags; <title> and <style> come first.
const artifact = head + "\n" + body + "\n";
fs.writeFileSync(path.join(root, "dist/defeaters-artifact.html"), artifact);

const standalone = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n' +
  head + "\n</head>\n<body>\n" + body + "\n</body>\n</html>\n";
fs.writeFileSync(path.join(root, "dist/defeaters.html"), standalone);

const kb = (s) => (Buffer.byteLength(s) / 1024).toFixed(0) + " KB";
console.log("dist/defeaters.html", kb(standalone));
console.log("dist/defeaters-artifact.html", kb(artifact));
if (artifact.slice(0, 8192).indexOf("<title>") === -1) { console.error("title not in first 8KB"); process.exitCode = 1; }
