/* Defeaters — core registry.
 * Every data file calls DEF_ADD([...]) with argument entries, or DEF_SET(key, value)
 * for the reference tools (glossary, classics, timeline, parallels, compare, case map,
 * ledger, and per-entry metadata).
 *
 * Entry shape:
 *   id       unique slug, used in URLs (#a.<id>) and cross-links [[id]]
 *   cat      category id (see DEF.cats)
 *   skeptic  true for weak skeptic arguments (category "honesty")
 *   title    name of the apologetic argument
 *   who      who makes it (proponents, classic sources)
 *   claim    the argument stated as strongly as its defenders state it
 *   form     optional numbered premises
 *   short    the answer in one paragraph
 *   points   [{h, t}] the detailed defeaters
 *   replies  [{q, a, k}] common comebacks, the answer, and match keywords
 *   sources  bibliography strings
 *   keys     extra match keywords for search and the debate engine
 *   rel      related entry ids
 *
 * Inline markup in text: *italic*, **bold**, [[id]] or [[id|label]] cross-links.
 */
(function () {
  "use strict";
  var DEF = {
    parts: [
      { id: "I", name: "God", blurb: "Whether there is a God at all, and whether the idea holds together." },
      { id: "II", name: "Scripture", blurb: "The Bible as text, as history, and as prophecy." },
      { id: "III", name: "Christ", blurb: "Jesus, the resurrection, and the doctrines built on them." },
      { id: "IV", name: "History & Experience", blurb: "Christianity's moral record, changed lives, and modern wonders." },
      { id: "V", name: "Reason & Rivals", blurb: "Science, other religions, faith and knowledge, and the skeptic's own mistakes." }
    ],
    cats: [
      { id: "god", part: "I", short: "God", name: "Arguments for God", blurb: "Cosmological, Thomistic, design, ontological, and cumulative-case arguments for the existence of God." },
      { id: "mind", part: "I", short: "Mind", name: "Mind, Reason & Knowledge", blurb: "Arguments from consciousness, reason, intentionality, mathematics, abstract objects, induction, and free will." },
      { id: "value", part: "I", short: "Value", name: "Morality, Meaning & Beauty", blurb: "Moral arguments, conscience, human dignity, meaning, desire, beauty, and love." },
      { id: "coherence", part: "I", short: "Coherence", name: "Is the Concept Coherent?", blurb: "Omnipotence, omniscience, timelessness, simplicity, freedom, the Trinity, and the Incarnation." },
      { id: "evil", part: "I", short: "Evil", name: "Evil, Suffering & Hiddenness", blurb: "Free will, soul-making, greater goods, skeptical theism, compensation, hiddenness, and hell." },
      { id: "bible", part: "II", short: "Hebrew Bible", name: "The Bible: Authority & the Hebrew Scriptures", blurb: "Inerrancy, contradictions, the authorship of the Torah, Genesis, the Flood, the Exodus, and the conquest." },
      { id: "nt", part: "II", short: "New Testament", name: "The New Testament & Its Texts", blurb: "Manuscripts, dates, authorship, oral tradition, genre, and the reliability of the Gospels and Acts." },
      { id: "artifacts", part: "II", short: "Archaeology", name: "Archaeology & Artifacts", blurb: "What archaeology shows, the Dead Sea Scrolls, the Shroud, and famous finds that didn't hold up." },
      { id: "prophecy", part: "II", short: "Prophecy", name: "Prophecy", blurb: "Messianic proof-texts, prophecies about nations, prophecy odds, failed predictions, and the end times." },
      { id: "jesus", part: "III", short: "Jesus", name: "Who Was Jesus?", blurb: "Historicity, the trilemma, claims to divinity, sinlessness, the virgin birth, the miracles, and his influence." },
      { id: "resurrection", part: "III", short: "Resurrection", name: "The Resurrection", blurb: "Minimal facts, the empty tomb, the appearances, the disciples' transformation, and Bayesian analysis." },
      { id: "doctrine", part: "III", short: "Doctrine", name: "Doctrine Under Scrutiny", blurb: "Atonement, original sin, salvation, prayer, Satan, the soul, Marian dogmas, and the origins of Yahweh." },
      { id: "morality", part: "IV", short: "Morality & History", name: "Biblical Morality & Christian History", blurb: "Slavery, genocide, women, harsh laws, progressive revelation, and Christianity's record in history." },
      { id: "experience", part: "IV", short: "Experience", name: "Experience & Testimony", blurb: "Religious experience, conversions, dreams and visions, near-death experiences, and changed lives." },
      { id: "wonders", part: "IV", short: "Miracles", name: "Miracles, Relics & Apparitions", blurb: "Hume on miracles, modern healings, Lourdes, Fatima, Guadalupe, stigmata, and weeping statues." },
      { id: "science", part: "V", short: "Science", name: "Science & Faith", blurb: "Evolution, the age of the earth, creationist evidences, the history of science, and the cognitive science of religion." },
      { id: "religions", part: "V", short: "Religions", name: "Why This Religion?", blurb: "Christianity among the world's faiths, the outsider test, universal belief, and the 'true myth'." },
      { id: "epistemology", part: "V", short: "Knowledge", name: "Faith & Knowledge", blurb: "Burden of proof, faith, properly basic belief, the witness of the Spirit, testimony, and unfalsifiability." },
      { id: "honesty", part: "V", short: "Skeptic errors", name: "Bad Skeptic Arguments", blurb: "Weak counter-arguments that skeptics should drop, and the stronger ones to use instead." }
    ],
    entries: [],
    essays: {},
    glossary: [],
    classics: [],
    timeline: null,
    parallels: [],
    compare: null,
    casemap: null,
    ledger: null,
    meta: { levels: {}, structure: {} }
  };

  window.DEF = DEF;
  window.DEF_ADD = function (list) {
    for (var i = 0; i < list.length; i++) DEF.entries.push(list[i]);
  };
  window.DEF_ESSAY = function (id, essay) {
    DEF.essays[id] = essay;
  };
  window.DEF_SET = function (key, value) {
    DEF[key] = value;
  };
})();
