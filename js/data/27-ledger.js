/* The Bayesian ledger. Values are log10 likelihood ratios (Bayes factors) for "Christianity is
 * true" against "Christianity is false": +1 means the evidence is ten times more probable if
 * Christianity is true, -1 ten times less. Three presets show how the conclusion depends on the
 * inputs. The numbers are illustrative judgments, explained item by item. */
DEF_SET("ledger", {
  presets: [
    { id: "critical", name: "Critical scholarship", blurb: "Evidence weighed as the critical literature summarized in this library weighs it." },
    { id: "generous", name: "Generous to Christianity", blurb: "The values a moderate apologist might accept: modest support from each argument, modest weight to the problems." },
    { id: "maximal", name: "Maximal published numbers", blurb: "The largest figures published by apologists: Stoner's 10^17 for prophecy and the McGrews' 10^44 for the resurrection, with the problems set to zero." }
  ],
  priors: [
    { id: "theism", label: "Prior probability that a personal God exists", values: { critical: 0.1, generous: 0.5, maximal: 0.5 }, rel: ["burden-of-proof", "uncaused-god"],
      note: "Before considering specific evidence. A personal, all-powerful mind with no physical basis is an unusual kind of thing, which critics think lowers its prior; apologists often start at 50%." },
    { id: "christian", label: "Prior probability that, if a God exists, Christianity is the true revelation", values: { critical: 0.1, generous: 0.3, maximal: 0.5 }, rel: ["why-christianity", "outsider-test"],
      note: "There are many religions and many forms of Christianity, and theism doesn't by itself favor any one of them." }
  ],
  items: [
    { id: "cosmos", label: "The universe exists, began, and permits life", values: { critical: 0, generous: 0.5, maximal: 1 }, rel: ["kalam", "contingency", "fine-tuning"],
      note: "Theism doesn't predict a finely tuned universe (an omnipotent God doesn't need one), and we could only observe a life-permitting universe. And whatever this item supports is generic theism, not Christianity." },
    { id: "mind", label: "Consciousness, reason, and moral knowledge", values: { critical: 0, generous: 0.3, maximal: 1 }, rel: ["consciousness", "argument-from-reason", "moral-argument"],
      note: "Unsolved problems in philosophy of mind and ethics are gaps, not evidence; the dependence of minds on brains points the other way (see the brain item)." },
    { id: "experience", label: "Religious experience", values: { critical: 0, generous: 0.3, maximal: 0.5 }, rel: ["religious-experience", "spirit-witness"],
      note: "People in every tradition experience their own tradition's divine figures, so such experiences can't favor Christianity over its rivals." },
    { id: "prophecy", label: "Fulfilled prophecy", max: 20, values: { critical: 0, generous: 0.5, maximal: 17 }, rel: ["messianic-prophecy", "prophecy-odds"],
      note: "The maximal figure is Peter Stoner's 1 in 10^17 for eight prophecies. It treats reported fulfillments as observed ones, counts non-predictions, assumes independence, and ignores failed prophecies." },
    { id: "resurrection", label: "The resurrection reports", max: 50, values: { critical: 1, generous: 3, maximal: 44 }, rel: ["minimal-facts", "appearances", "bayes-resurrection"],
      note: "Timothy and Lydia McGrew (2009) estimated a combined factor of about 10^44 by treating each witness as nearly independent and each report as accurate. The critical value grants that such reports are ten times likelier if Jesus rose, since visions, grief, and legend produce similar reports without a resurrection." },
    { id: "spread", label: "Christianity's spread and changed lives", values: { critical: 0, generous: 0.2, maximal: 1 }, rel: ["christianity-growth", "transformation"],
      note: "Other religions spread as fast and change lives as deeply." },
    { id: "evil", label: "The amount and distribution of suffering", values: { critical: -2, generous: -1, maximal: 0 }, rel: ["problem-of-evil", "animal-suffering"],
      note: "Hundreds of millions of years of animal suffering and the deaths of countless children are far more expected if no all-good, all-powerful being governs the world." },
    { id: "hiddenness", label: "Divine hiddenness and nonresistant nonbelief", values: { critical: -1, generous: -0.5, maximal: 0 }, rel: ["hiddenness", "without-excuse"],
      note: "A God who wants a relationship with everyone wouldn't leave sincere seekers without evidence." },
    { id: "diversity", label: "Belief tracks birthplace", values: { critical: -1, generous: -0.3, maximal: 0 }, rel: ["demographics", "outsider-test"],
      note: "Religious belief follows geography and upbringing, as cultural transmission predicts." },
    { id: "bible", label: "Errors, contradictions, and failed predictions in scripture", values: { critical: -1.5, generous: -0.5, maximal: 0 }, rel: ["contradictions", "failed-return", "exodus"],
      note: "A divinely inspired book would be expected to avoid the contradictions, historical errors, and unfulfilled predictions found in the Bible." },
    { id: "brain", label: "The mind's dependence on the brain", values: { critical: -1, generous: -0.3, maximal: 0 }, rel: ["disembodied-mind", "soul"],
      note: "Every change in the mind tracks a change in the brain, which is what naturalism predicts and what a soul-based view must explain away." }
  ],
  range: [-3, 3]
});
