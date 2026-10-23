/* Data integrity test. Run: node tests/data.test.js
 * Loads every data file the way the page does and checks that entries are complete, ids are
 * unique, every cross-reference and [[link]] resolves, argument maps match their premises,
 * and the reference tools (glossary, classics, timelines, parallels, comparison, case map,
 * ledger) point only at entries that exist. */
"use strict";
const fs = require("fs");
const path = require("path");

global.window = global;
const root = path.join(__dirname, "..");
require(path.join(root, "js/core.js"));
for (const f of fs.readdirSync(path.join(root, "js/data")).sort()) require(path.join(root, "js/data", f));
const DEF = window.DEF;

const problems = [];
const fail = (msg) => problems.push(msg);
const ids = new Set();
for (const e of DEF.entries) { if (ids.has(e.id)) fail(`duplicate entry id ${e.id}`); ids.add(e.id); }
const cats = new Set(DEF.cats.map((c) => c.id));
const parts = new Set(DEF.parts.map((p) => p.id));
const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const refs = (where, list) => (list || []).forEach((id) => { if (!ids.has(id)) fail(`${where}: unknown entry ${id}`); });

// ---- routes, as js/ui/shell.js parses them ----
const PLAIN = new Set(["", "index", "library", "case", "method", "about", "sources", "glossary", "debate", "map", "ledger",
  "timeline", "atlas", "parallels", "compare", "classics", "drill"]);
const WITH_ARG = {
  c: (a) => cats.has(a),
  a: (a) => ids.has(a),
  essay: (a) => !!DEF.essays[a],
  timeline: (a) => DEF.timeline.presets.some((p) => p.id === a),
  parallels: (a) => DEF.parallels.some((p) => p.id === a),
  classics: (a) => DEF.classics.some((b) => b.id === a),
  drill: (a) => ids.has(a),
  glossary: (a) => DEF.glossary.some((g) => slug(g.t) === a)
};
function routeOk(r) {
  if (PLAIN.has(r)) return true;
  const m = /^([a-z]+)\.(.+)$/.exec(r);
  return !!(m && WITH_ARG[m[1]] && WITH_ARG[m[1]](m[2]));
}

// ---- [[id]], [[id|label]] and [[#route|label]] anywhere in the data ----
const linkRe = /\[\[(#?[a-z0-9.-]+)(?:\|([^\]]+))?\]\]/g;
function scanLinks(where, value) {
  const text = JSON.stringify(value);
  let m;
  while ((m = linkRe.exec(text))) {
    const t = m[1];
    if (t[0] === "#" ? !routeOk(t.slice(1)) : !ids.has(t)) fail(`${where}: broken link [[${t}]]`);
  }
}

// ---- categories and entries ----
for (const c of DEF.cats) if (!parts.has(c.part)) fail(`category ${c.id}: unknown part ${c.part}`);
let words = 0;
const sources = new Set();
for (const e of DEF.entries) {
  if (!cats.has(e.cat)) fail(`${e.id}: unknown category ${e.cat}`);
  for (const k of ["id", "cat", "title", "who", "claim", "short", "points", "sources", "keys"]) if (!e[k] || (Array.isArray(e[k]) && !e[k].length)) fail(`${e.id}: missing ${k}`);
  (e.points || []).forEach((p, i) => { if (!p.h || !p.t) fail(`${e.id}: defeater ${i + 1} incomplete`); });
  (e.replies || []).forEach((r, i) => { if (!r.q || !r.a || !String(r.k || "").trim()) fail(`${e.id}: reply ${i + 1} incomplete`); });
  refs(e.id + " rel", e.rel);
  if ((e.rel || []).includes(e.id)) fail(`${e.id}: relates to itself`);
  scanLinks(e.id, [e.claim, e.short, e.form, e.points, e.replies]);
  (e.sources || []).forEach((s) => sources.add(s));
  words += [e.claim, e.short, ...(e.form || []), ...(e.points || []).map((p) => p.h + " " + p.t), ...(e.replies || []).map((r) => r.q + " " + r.a)]
    .join(" ").split(/\s+/).length;
}
for (const [id, es] of Object.entries(DEF.essays)) {
  if (!es.title || !es.sections || !es.sections.length) fail(`essay ${id}: incomplete`);
  scanLinks("essay " + id, es);
}

// ---- argument maps and levels ----
const M = DEF.meta;
for (const [id, st] of Object.entries(M.structure)) {
  const e = DEF.entries.find((x) => x.id === id);
  if (!e) { fail(`structure: unknown entry ${id}`); continue; }
  if (!e.form) { fail(`structure ${id}: entry has no formal premises`); continue; }
  if (st.length !== e.form.length) fail(`structure ${id}: ${st.length} lines for ${e.form.length} lines of argument`);
  st.flat().forEach((k) => { if (!Number.isInteger(k) || k < 0 || k >= e.points.length) fail(`structure ${id}: no defeater ${k}`); });
}
for (const e of DEF.entries) if (e.form && !M.structure[e.id]) fail(`${e.id}: formal premises but no argument map in 20-meta.js`);
for (const [id, lv] of Object.entries(M.levels)) {
  const e = DEF.entries.find((x) => x.id === id);
  if (!e) fail(`levels: unknown entry ${id}`);
  else if (e.cat === "honesty") fail(`levels: ${id} is a skeptic entry`);
  if (!["scholarly", "popular", "fringe"].includes(lv)) fail(`levels ${id}: unknown level ${lv}`);
}

// ---- reference tools ----
const terms = new Set();
for (const g of DEF.glossary) {
  if (terms.has(g.t.toLowerCase())) fail(`glossary: duplicate term ${g.t}`);
  terms.add(g.t.toLowerCase());
  if (!g.d) fail(`glossary ${g.t}: no definition`);
  refs("glossary " + g.t, g.see);
}
for (const b of DEF.classics) {
  if (!b.items.length) fail(`classics ${b.id}: no items`);
  b.items.forEach((it) => { if (!it.ids.length) fail(`classics ${b.id} ${it.n || it.label}: no entries`); refs(`classics ${b.id} ${it.n || it.label}`, it.ids); });
}
for (const p of DEF.timeline.presets) {
  p.events.forEach((ev) => {
    if (!(ev.lane >= 0 && ev.lane < p.lanes.length)) fail(`timeline ${p.id} ${ev.label}: bad lane`);
    if (ev.y < p.from || (ev.y2 != null ? ev.y2 : ev.y) > p.to) fail(`timeline ${p.id} ${ev.label}: outside ${p.from}..${p.to}`);
    if (ev.y2 != null && ev.y2 < ev.y) fail(`timeline ${p.id} ${ev.label}: span ends before it starts`);
    refs(`timeline ${p.id} ${ev.label}`, ev.rel);
  });
  p.gaps.forEach((g) => { if (!(g.from < g.to)) fail(`timeline ${p.id} gap ${g.label}: empty`); });
}
const parIds = new Set();
for (const s of DEF.parallels) {
  if (parIds.has(s.id)) fail(`parallels: duplicate id ${s.id}`);
  parIds.add(s.id);
  s.grid.forEach((row) => { if (row.length !== s.cols.length + 1) fail(`parallels ${s.id} "${row[0]}": ${row.length - 1} cells for ${s.cols.length} columns`); });
  s.cols.forEach((c) => { if (!c.verses.length) fail(`parallels ${s.id} ${c.label}: no verses`); });
  refs("parallels " + s.id, s.rel);
}
for (const r of DEF.compare.rows) {
  if (r.cells.length !== DEF.compare.traditions.length) fail(`compare ${r.kind}: ${r.cells.length} cells for ${DEF.compare.traditions.length} traditions`);
  refs("compare " + r.kind, r.rel);
}
for (const l of DEF.casemap.links) {
  if (!(l.generous > 0 && l.generous <= 1)) fail(`case map ${l.id}: starting value out of range`);
  refs(`case map ${l.id} support`, l.support);
  refs(`case map ${l.id} defeaters`, l.defeaters);
}
const L = DEF.ledger;
for (const it of L.priors.concat(L.items)) {
  for (const p of L.presets) if (typeof it.values[p.id] !== "number") fail(`ledger ${it.id}: no value for ${p.id}`);
  refs("ledger " + it.id, it.rel);
}
scanLinks("reference tools", [DEF.glossary, DEF.classics, DEF.timeline, DEF.parallels, DEF.compare, DEF.casemap, DEF.ledger]);

const formal = DEF.entries.filter((e) => e.form).length;
console.log(`${DEF.entries.length} entries in ${DEF.cats.length} categories; ${formal} with argument maps; ~${Math.round(words / 1000)}k words; ${sources.size} distinct source citations`);
console.log(`${DEF.glossary.length} glossary terms, ${DEF.classics.length} classics, ${DEF.parallels.length} parallel sets, ${DEF.timeline.presets.length} timelines, ${Object.keys(DEF.essays).length} essays`);
if (problems.length) { console.log(`FAILED: ${problems.length} problems`); problems.forEach((p) => console.log("  " + p)); process.exitCode = 1; }
else console.log("data OK");
