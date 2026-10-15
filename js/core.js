/* Defeaters — core registry.
 * Every data file calls DEF_ADD([...]) with argument entries.
 *
 * Entry shape:
 *   id       unique slug, used in URLs (#/a/<id>) and cross-links [[id]]
 *   cat      category id (see DEF.cats)
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
    cats: [
      { id: "god", name: "Arguments for God", blurb: "Natural theology: cosmological, design, moral, ontological, and mind-based arguments." },
      { id: "coherence", name: "Is the Concept Coherent?", blurb: "Omnipotence, omniscience, timelessness, simplicity, the Trinity, and the Incarnation." },
      { id: "evil", name: "Evil, Suffering & Hiddenness", blurb: "The evidential problem of evil, animal suffering, divine hiddenness, and hell." },
      { id: "bible", name: "The Bible as History", blurb: "Manuscripts, authorship, contradictions, archaeology, Genesis, and the Exodus." },
      { id: "prophecy", name: "Prophecy", blurb: "Messianic proof-texts, fulfilled-prophecy odds, failed predictions, and the end times." },
      { id: "jesus", name: "Who Was Jesus?", blurb: "Historicity, the trilemma, divinity claims, the virgin birth, and the miracles." },
      { id: "resurrection", name: "The Resurrection", blurb: "Minimal facts, the empty tomb, the appearances, martyrdom, and Bayesian analysis." },
      { id: "doctrine", name: "Doctrine Under Scrutiny", blurb: "Atonement, original sin, salvation, prayer, Satan, the soul, and the origins of Yahweh." },
      { id: "morality", name: "Biblical Morality", blurb: "Slavery, genocide, women, harsh laws, and the claim that Christianity built civilization." },
      { id: "experience", name: "Miracles & Experience", blurb: "Religious experience, modern miracles, NDEs, prayer studies, relics, and testimony." },
      { id: "science", name: "Science & Faith", blurb: "Evolution, the age of the earth, the history of science, and the cognitive science of religion." },
      { id: "religions", name: "Why This Religion?", blurb: "Christianity versus other faiths, the outsider test, and the universality of belief." },
      { id: "epistemology", name: "Faith & Knowledge", blurb: "Burden of proof, faith, properly basic belief, meaning, and unfalsifiability." },
      { id: "honesty", name: "Bad Skeptic Arguments", blurb: "Weak counter-arguments that skeptics should drop, and the stronger ones to use instead." }
    ],
    entries: [],
    essays: {}
  };

  window.DEF = DEF;
  window.DEF_ADD = function (list) {
    for (var i = 0; i < list.length; i++) DEF.entries.push(list[i]);
  };
  window.DEF_ESSAY = function (id, essay) {
    DEF.essays[id] = essay;
  };
})();
