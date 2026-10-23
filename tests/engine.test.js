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
  // Entries added in the expansion: natural theology, mind, value, scripture, Christ, wonders, science.
  ["Aquinas's fourth way: there are degrees of goodness, so there must be a maximum, God.", "fourth-way"],
  ["Things in nature act for an end, like an arrow directed by an archer.", "fifth-way"],
  ["Where does our idea of an infinite perfect being come from? Only God could have put it there.", "idea-of-god"],
  ["Our thoughts are about things. Matter can't be about anything, so the mind isn't physical.", "intentionality"],
  ["Numbers and propositions exist eternally, so they must be thoughts in the mind of God.", "abstract-objects"],
  ["What grounds necessary truths and possibility? Only a necessary mind.", "modality-grounding"],
  ["Plantinga says our cognitive faculties only work properly if they were designed.", "proper-function"],
  ["You can't justify induction without God; the uniformity of nature needs a guarantor.", "induction"],
  ["Gödel's theorem proves the mind is not a computer, as Lucas and Penrose showed.", "lucas-penrose"],
  ["Without a soul there is no free will and no responsibility.", "free-will-soul"],
  ["Why are there colors and tastes at all? Evolution doesn't need them.", "colors-flavors"],
  ["Kant said morality requires that virtue be rewarded with happiness, so God must exist.", "kant-moral"],
  ["My conscience is the voice of God inside me.", "conscience"],
  ["Human rights come from being made in the image of God.", "human-dignity"],
  ["The music of Bach proves there is a God.", "beauty"],
  ["If love is just chemistry, you don't really love your family.", "love-play"],
  ["You can't even call something evil without God's standard of good.", "evil-presupposes-god"],
  ["Everything happens for a reason; God brings good out of suffering.", "greater-good"],
  ["Heaven will make up for all the suffering on earth.", "compensation"],
  ["Romans 1 says everyone knows God exists, so atheists are without excuse.", "without-excuse"],
  ["Hell isn't eternal torment, the wicked are just annihilated.", "hell-alternatives"],
  ["God can't know all truths if there's no set of all truths? Nonsense.", "omniscience-grim"],
  ["Moses wrote the first five books of the Bible.", "mosaic-authorship"],
  ["Genesis days are long ages, so Genesis fits science.", "genesis-reinterpretations"],
  ["Luke was a historian of the first rank, Ramsay proved it.", "luke-historian"],
  ["The gospels were written before 70 AD because Acts doesn't mention Paul's death.", "early-gospels"],
  ["Oral cultures memorized tradition carefully, so the gospels preserve Jesus' words.", "oral-tradition"],
  ["The gospels are Greco-Roman biographies, not myths.", "gospel-genre"],
  ["John's gospel is reliable; archaeologists found the pool of Bethesda.", "john-reliable"],
  ["There is a first-century fragment of Mark, 7Q5.", "early-manuscripts"],
  ["Paul's letters from the 50s confirm the gospel story.", "paul-confirms"],
  ["The gospels include embarrassing details, so they must be honest.", "embarrassing-details"],
  ["The Bible survived every attempt to destroy it; Voltaire said it would vanish.", "bible-survival"],
  ["Ron Wyatt found Noah's ark and the Ark of the Covenant.", "wyatt-finds"],
  ["The real Mount Sinai is Jabal al-Lawz in Saudi Arabia.", "sinai-saudi"],
  ["Scientists proved a meteor destroyed Sodom.", "sodom-airburst"],
  ["The James ossuary says brother of Jesus.", "james-ossuary"],
  ["The Ebla tablets mention Sodom and Gomorrah.", "ebla"],
  ["The Ipuwer papyrus describes the ten plagues.", "ipuwer"],
  ["Isaiah named Cyrus 150 years before he was born.", "cyrus"],
  ["Babylon was never inhabited again, just as Isaiah predicted.", "babylon-nineveh"],
  ["The Messiah had to come before the temple was destroyed in 70 AD.", "messiah-before-70"],
  ["Psalm 16 predicted the resurrection.", "resurrection-foretold"],
  ["Zechariah predicted thirty pieces of silver and the donkey.", "zechariah"],
  ["Jesus predicted the destruction of the temple.", "temple-prediction"],
  ["There are hidden codes in the Torah that predicted Rabin's assassination.", "bible-codes"],
  ["Wars, earthquakes and famines show we're in the last days.", "signs-of-times"],
  ["Jesus forgave sins, which only God can do.", "implicit-christology"],
  ["Jesus never sinned.", "sinless-jesus"],
  ["Jesus predicted his own death and resurrection three times.", "passion-predictions"],
  ["No one has influenced history like Jesus.", "jesus-influence"],
  ["N. T. Wright showed early Christian belief mutated from Jewish belief.", "wright-mutations"],
  ["The resurrection is the best explanation of the facts.", "best-explanation"],
  ["Nobody venerated Jesus' tomb because it was empty.", "tomb-veneration"],
  ["Jewish believers changed the Sabbath to Sunday.", "sunday-worship"],
  ["The disciples went from cowards to bold preachers.", "disciples-transformed"],
  ["The rise of the church leaves a hole the size of the resurrection.", "moule-hole"],
  ["Jesus really died on the cross; the swoon theory is impossible.", "jesus-died"],
  ["Mary was immaculately conceived and assumed into heaven.", "marian-dogmas"],
  ["The church has survived 2000 years, it must be divine.", "church-survival"],
  ["Religious people give more to charity.", "religious-generosity"],
  ["Christians like Wilberforce ended slavery.", "christian-reforms"],
  ["God was gradually leading Israel to a higher morality, progressive revelation.", "progressive-revelation"],
  ["C.S. Lewis and Antony Flew were atheists who converted.", "famous-converts"],
  ["Darwin recanted on his deathbed.", "deathbed-conversions"],
  ["The saints like Mother Teresa prove Christianity.", "saints-holiness"],
  ["Muslims are seeing Jesus in dreams.", "dreams-visions"],
  ["The Eucharistic miracle of Lanciano turned into heart tissue.", "eucharistic-miracles"],
  ["The bodies of saints like Bernadette are incorrupt.", "incorruptibles"],
  ["Padre Pio had the stigmata.", "stigmata"],
  ["The statue of Mary was weeping blood.", "weeping-statues"],
  ["The image of Our Lady of Guadalupe is miraculous.", "guadalupe"],
  ["Mary appeared at Zeitoun and Medjugorje.", "marian-apparitions"],
  ["ENCODE showed there's no junk DNA.", "junk-dna"],
  ["Soft tissue in dinosaur bones proves they're young.", "dino-soft-tissue"],
  ["The earth's magnetic field is decaying, so the earth is young.", "young-earth-evidences"],
  ["Earth is a privileged planet designed for discovery.", "privileged-planet"],
  ["Evolution is just how God created.", "theistic-evolution"],
  ["NASA found Joshua's missing day.", "missing-day"],
  ["A sailor named James Bartley was swallowed by a whale and survived.", "jonah-bartley"],
  ["Moses' health laws anticipated modern medicine, like circumcision on the eighth day.", "health-laws"],
  ["Quantum physics shows consciousness creates reality.", "quantum-mind"],
  ["Pagan myths of dying gods were pointing to the true myth.", "myth-became-fact"],
  ["The survival of the Jews proves God exists.", "jewish-survival"],
  ["The Holy Spirit's witness tells me Christianity is true.", "spirit-witness"],
  ["Jordan Peterson says the Bible is true in a deeper sense.", "peterson-truth"],
  ["We believe testimony about history all the time, so believe the apostles.", "testimony"],
  ["The Bible says pi equals three.", "pi-three"],
  ["Nazareth didn't even exist in Jesus' time.", "nazareth-myth"],
  ["Paul invented Christianity.", "paul-invented"],
  ["Atheists are smarter than religious people.", "atheists-smarter"],
  ["Religion is just a crutch for people afraid of death.", "religion-crutch"],
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
if (fail > 8 || !flowOk) process.exitCode = 1;
