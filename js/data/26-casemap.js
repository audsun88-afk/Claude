/* The case map: the chain of claims that must all be true for Christianity to be true.
 * Each link lists the arguments offered for it and the main defeaters. status: one of
 * "unestablished", "contested", "against" (net evidence against). generous: an illustrative
 * probability far more generous than the evidence supports, used to show how a chain multiplies. */
DEF_SET("casemap", {
  intro: "Christianity isn't one claim but a chain of them, and each link depends on the ones before. An argument that supports one link leaves the others untouched: the kalam argument, if it worked, wouldn't show that Jesus rose. Because every link must hold, the probability of the whole is the product of the links, and even generous estimates multiply down quickly.",
  links: [
    {
      id: "beyond", short: "Beyond nature", claim: "Something exists beyond the natural world.",
      rival: "Naturalism: physical reality is all there is, and it has no external cause.",
      status: "unestablished",
      summary: "Each argument for a reality beyond nature fails at a specific step, and the naturalist can say about the first physical state whatever the theist says about God.",
      support: ["kalam", "contingency", "fine-tuning", "ontological", "classical-proofs", "abstract-objects", "cumulative-case"],
      defeaters: ["something-from-nothing", "uncaused-god", "big-bang", "burden-of-proof"],
      generous: 0.7
    },
    {
      id: "mind", short: "A personal mind", claim: "It is a personal mind that acts with purpose.",
      rival: "An impersonal first cause, a necessary physical state, or a law-governed multiverse.",
      status: "unestablished",
      summary: "Even granting a first cause or necessary being, nothing shows it is a person. Every mind we know of depends on a physical brain, which makes a disembodied mind the least supported option.",
      support: ["consciousness", "argument-from-reason", "intentionality", "design-intuition", "fifth-way"],
      defeaters: ["disembodied-mind", "soul", "csr", "classical-proofs"],
      generous: 0.7
    },
    {
      id: "omni", short: "All-powerful and good", claim: "It is all-powerful, all-knowing, and perfectly good.",
      rival: "An indifferent, limited, or malevolent creator, or no creator at all.",
      status: "against",
      summary: "The amount and distribution of suffering, the hiddenness of God, and the incoherence of the classical attributes count against this link more strongly than any argument counts in its favor.",
      support: ["moral-argument", "ontological", "free-will-defense", "soul-making", "skeptical-theism", "greater-good"],
      defeaters: ["problem-of-evil", "animal-suffering", "hiddenness", "evil-god", "omnipotence", "omniscience-grim", "divine-simplicity"],
      generous: 0.6
    },
    {
      id: "revealed", short: "Revealed in the Bible", claim: "This God revealed himself to Israel, and the Bible is his word.",
      rival: "The Bible is a human anthology, reflecting the beliefs of its time.",
      status: "against",
      summary: "The Bible contains contradictions, failed prophecies, and historical claims that archaeology contradicts, and its God developed from a Canaanite pantheon. Its moral commands include genocide and slavery.",
      support: ["inerrancy", "messianic-prophecy", "prophecy-odds", "archaeology", "bible-survival", "mosaic-authorship", "manuscripts"],
      defeaters: ["contradictions", "exodus", "yahweh-origins", "daniel", "tyre", "genocide", "slavery"],
      generous: 0.6
    },
    {
      id: "risen", short: "Incarnate and risen", claim: "Jesus was God incarnate and rose bodily from the dead.",
      rival: "A Jewish apocalyptic prophet whose followers had visions after his execution.",
      status: "unestablished",
      summary: "The historical core, crucifixion followed by experiences interpreted as appearances, is explained by well-documented natural processes. The prior probability of a resurrection is extremely low, and the evidence comes from late, devotional sources.",
      support: ["minimal-facts", "empty-tomb", "best-explanation", "trilemma", "jesus-claimed-god", "wright-mutations"],
      defeaters: ["appearances", "legendary-growth", "alternative-theories", "bayes-resurrection", "failed-return", "dying-messiah"],
      generous: 0.5
    },
    {
      id: "doctrine", short: "Coherent doctrine", claim: "Christian doctrine is coherent and just.",
      rival: "The doctrines are later theological constructions with unresolved problems.",
      status: "contested",
      summary: "The Trinity, the Incarnation, the atonement, original sin, and eternal punishment face objections their defenders haven't resolved and Christians themselves dispute.",
      support: ["trinity", "incarnation", "atonement", "hell-alternatives"],
      defeaters: ["hell", "original-sin", "unevangelized", "atonement", "trinity"],
      generous: 0.7
    },
    {
      id: "which", short: "This version", claim: "And this version of Christianity is the right one.",
      rival: "Catholic, Orthodox, Protestant, and other Christian traditions disagree on what Christianity teaches.",
      status: "contested",
      summary: "Christians disagree about salvation, the sacraments, scripture, Mary, and authority, and each tradition's evidence for itself has parallels in the others and in other religions.",
      support: ["why-christianity", "church-survival", "marian-dogmas", "spirit-witness"],
      defeaters: ["outsider-test", "demographics", "mormonism", "islam"],
      generous: 0.5
    }
  ]
});
