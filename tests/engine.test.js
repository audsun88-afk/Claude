/* Run: node tests/engine.test.js
 * Loads the data and engine in Node and checks that realistic apologetic
 * statements are routed to the right library entry. */
"use strict";
global.window = global;
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
require(path.join(root, "js/core.js"));
for (const f of fs.readdirSync(path.join(root, "js/data")).sort()) require(path.join(root, "js/data", f));
require(path.join(root, "js/text.js"));
require(path.join(root, "js/engine.js"));

const cases = [
  ["Everything that begins to exist has a cause, so the universe must have a cause.", "kalam"],
  ["The universe had a beginning according to the Big Bang, so something caused it.", ["kalam", "big-bang"]],
  ["Why is there something rather than nothing? Contingent things need a necessary being.", "contingency"],
  ["Aquinas showed there must be an unmoved mover.", "classical-proofs"],
  ["The constants of physics are fine-tuned for life. That can't be chance.", "fine-tuning"],
  ["God is the greatest conceivable being, so he must exist.", "ontological"],
  ["Without God there can be no objective morality.", "moral-argument"],
  ["How can matter produce consciousness? Only a mind can create minds.", "consciousness"],
  ["If evolution is true you can't trust your own reasoning, naturalism defeats itself.", "argument-from-reason"],
  ["The bacterial flagellum is irreducibly complex.", "irreducible-complexity"],
  ["DNA is a code, and every code needs a coder.", "dna-information"],
  ["Life can't come from non-life, abiogenesis is impossible.", "origin-of-life"],
  ["Look at the trees and the stars. A painting needs a painter.", "design-intuition"],
  ["How do you account for the laws of logic in your worldview?", ["transcendental", "math-and-logic"]],
  ["What if you're wrong? You'll go to hell. I'd rather bet on God.", "pascal"],
  ["Atheists believe nothing created everything.", "something-from-nothing"],
  ["Who made God? Nobody, God is eternal and doesn't need a cause.", "uncaused-god"],
  ["Can God make a rock so heavy he can't lift it? That's a silly paradox.", "omnipotence"],
  ["The Trinity is a mystery, not a contradiction.", "trinity"],
  ["God allows suffering because he gave us free will.", "free-will-defense"],
  ["Why do babies get cancer if God is good? He has reasons we can't see.", ["skeptical-theism", "problem-of-evil"]],
  ["Why doesn't God just show himself to everyone?", "hiddenness"],
  ["Hell is just, because sin against an infinite God deserves infinite punishment.", "hell"],
  ["The Bible is the inerrant word of God.", "inerrancy"],
  ["There are no real contradictions in the Bible.", "contradictions"],
  ["We have over 5800 Greek manuscripts of the New Testament, more than any ancient book.", "manuscripts"],
  ["Matthew, Mark, Luke, and John were eyewitnesses who wrote the gospels.", "gospel-authorship"],
  ["Archaeology keeps confirming the Bible.", "archaeology"],
  ["Noah's flood really happened, there are seashells on mountains.", "flood"],
  ["Adam and Eve were real people, the first humans.", "adam-eve"],
  ["The Exodus from Egypt really happened.", "exodus"],
  ["Jesus fulfilled over 300 messianic prophecies.", "messianic-prophecy"],
  ["Isaiah 53 describes the crucifixion perfectly.", "isaiah-53"],
  ["Isaiah prophesied the virgin birth.", ["isaiah-7-14", "virgin-birth"]],
  ["Psalm 22 says they pierced my hands and feet.", "psalm-22"],
  ["Jesus is coming back soon.", "failed-return"],
  ["Jesus was either a liar, a lunatic, or Lord.", "trilemma"],
  ["Jesus claimed to be God when he said before Abraham was, I am.", "jesus-claimed-god"],
  ["The tomb was empty.", "empty-tomb"],
  ["The disciples died for their belief. Nobody dies for a lie.", "martyrdom"],
  ["Jesus appeared to over 500 people at once.", "five-hundred"],
  ["Paul was a persecutor of Christians who converted after seeing the risen Jesus.", "paul-conversion"],
  ["Women discovered the empty tomb, which nobody would make up.", "women-witnesses"],
  ["Hallucinations can't explain the resurrection appearances.", ["appearances", "alternative-theories", "minimal-facts"]],
  ["Even skeptical scholars accept the minimal facts.", "minimal-facts"],
  ["Jesus died to pay for our sins.", "atonement"],
  ["Slavery in the Bible was just indentured servitude.", "slavery"],
  ["God was right to command the destruction of the Canaanites.", "genocide"],
  ["Stalin and Mao were atheists who killed millions.", "atheist-regimes"],
  ["Christianity gave us hospitals, universities, and human rights.", "christian-civilization"],
  ["I have personally felt God's presence.", "religious-experience"],
  ["Miracles still happen today, people are healed.", "modern-miracles"],
  ["Near death experiences prove there is an afterlife.", "nde"],
  ["The Shroud of Turin is Jesus' burial cloth.", "shroud"],
  ["Prayer has been scientifically proven to work.", ["prayer-studies", "prayer-promises"]],
  ["Evolution is just a theory with no transitional fossils.", "evolution"],
  ["The earth is only 6000 years old.", "young-earth"],
  ["Christianity is the only religion based on grace, not works.", "why-christianity"],
  ["You can't prove God doesn't exist.", "prove-negative"],
  ["Atheism takes more faith than Christianity.", "atheism-faith"],
  ["Without God, life has no meaning.", "meaning"],
  ["Many great scientists like Newton believed in God.", ["scientists-believe", "science-founders"]],
  ["Billions of people believe in God, they can't all be wrong.", "universal-belief"],
];

let pass = 0, fail = 0, top3 = 0;
for (const [text, expect] of cases) {
  const exp = Array.isArray(expect) ? expect : [expect];
  const ranked = ENGINE.rank(text, 3);
  const state = ENGINE.newState();
  const res = ENGINE.respond(state, text);
  const got = res && res.entry;
  const ok = exp.includes(got);
  if (ok) pass++; else fail++;
  if (ranked.some(r => exp.includes(r.id))) top3++;
  if (!ok) console.log("MISS", JSON.stringify(text), "expected", exp.join("|"), "got", got, "kind", res && res.kind,
    "top:", ranked.map(r => r.id + ":" + r.score.toFixed(1)).join(", "));
}
console.log(`\nrouting: ${pass}/${cases.length} correct, top-3 recall ${top3}/${cases.length}`);

// Conversation flow: open a topic, then use a prepared comeback.
const s = ENGINE.newState();
const r1 = ENGINE.respond(s, "Everything that begins to exist has a cause, so the universe has a cause.");
const r2 = ENGINE.respond(s, "But the BGV theorem proves the universe had a beginning.");
const r3 = ENGINE.respond(s, "go on");
const r4 = ENGINE.respond(s, "Okay, but what about fine-tuning? The constants are set just right for life.");
const flowOk = r1.entry === "kalam" && r2.kind === "reply" && /Borde|BGV/i.test(r2.reply.q) && r3.kind === "continue" && r4.entry === "fine-tuning";
console.log("flow:", r1.kind, r1.entry, "|", r2.kind, r2.reply && r2.reply.q.slice(0, 40), "|", r3.kind, "|", r4.kind, r4.entry, flowOk ? "OK" : "FAIL");

// Pattern detection.
const p = ENGINE.patterns("What if you're wrong? The Bible says so, and billions of people believe it.");
console.log("patterns:", p.map(x => x.label).join(", "));

const nonsense = ENGINE.respond(ENGINE.newState(), "purple elephants dancing quietly");
console.log("nonsense:", nonsense.kind);
if (nonsense.kind !== "fallback") process.exitCode = 1;
if (fail > 6 || !flowOk) process.exitCode = 1;
