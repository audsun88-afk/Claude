/* Per-entry metadata.
 *   levels     how the argument stands among its own defenders:
 *              "scholarly"  defended in peer-reviewed philosophy or biblical scholarship
 *              "popular"    common in popular apologetics, books, and sermons (the default)
 *              "fringe"     rejected by most scholars and by many apologists
 *              Skeptic entries (category "honesty") are marked separately in the UI.
 *   structure  for arguments with formal premises: for each line of the argument, the indexes
 *              of the defeaters (the entry's points) that attack it. The last line is the
 *              conclusion; defeaters listed there attack the inference rather than a premise.
 */
DEF_SET("meta", {
  levels: (function () {
    var L = {};
    ("kalam big-bang contingency classical-proofs fourth-way fifth-way neoplatonic-proof fine-tuning ontological idea-of-god cumulative-case " +
     "consciousness argument-from-reason proper-function intentionality math-and-logic abstract-objects modality-grounding a-priori induction meaning-reference lucas-penrose free-will-soul colors-flavors " +
     "moral-argument kant-moral conscience human-dignity " +
     "omnipotence omniscience-grim foreknowledge timeless-god divine-simplicity perfect-freedom disembodied-mind trinity incarnation " +
     "problem-of-evil free-will-defense cross-suffering natural-evil animal-suffering skeptical-theism soul-making evil-god hiddenness demographics compensation hell-alternatives " +
     "genesis-reinterpretations patriarchs exodus conquest david-solomon " +
     "canon gospel-authorship synoptic-dependence eyewitnesses undesigned-coincidences textual-variants gospel-genre oral-tradition embarrassing-details luke-historian john-reliable early-gospels pseudepigrapha " +
     "dead-sea-scrolls isaiah-53 daniel-9 failed-return temple-prediction " +
     "historical-jesus implicit-christology jesus-miracles christianity-growth " +
     "minimal-facts best-explanation bayes-resurrection empty-tomb appearances creed-1cor15 legendary-growth alternative-theories dying-messiah wright-mutations james-conversion " +
     "atonement original-sin soul unevangelized heaven-free-will " +
     "genocide progressive-revelation " +
     "religious-experience miracles-hume modern-miracles " +
     "theistic-evolution science-faith science-founders csr " +
     "outsider-test properly-basic spirit-witness testimony").split(" ").forEach(function (id) { L[id] = "scholarly"; });
    ("wyatt-finds sinai-saudi ipuwer ebla bible-codes missing-day jonah-bartley young-earth-evidences dino-soft-tissue deathbed-conversions").split(" ").forEach(function (id) { L[id] = "fringe"; });
    return L;
  })(),
  structure: {
    "kalam": [[0, 6], [2, 3], [1], [4, 5]],
    "contingency": [[0, 1, 2], [3, 5], [], [4]],
    "fourth-way": [[2], [0], [1], [3]],
    "fifth-way": [[0], [1, 2, 3], []],
    "fine-tuning": [[7], [0, 1, 5, 6], [2, 3, 4]],
    "ontological": [[2, 5], [], [0, 1], [3, 4]],
    "idea-of-god": [[0, 2], [1], [], []],
    "argument-from-reason": [[0, 1, 3], [2], [], [4]],
    "moral-argument": [[0, 1, 2, 3, 4], [], [5]],
    "kant-moral": [[], [1], [2], [0]],
    "trilemma": [[0, 2], [1], [3], []],
    "pascal": [[0], [3], [], [1], [2, 4]],
    "minimal-facts": [[0, 1], [2, 3], [], [4, 5]],
    "desire": [[0], [1, 2], []],
    "consciousness": [[2], [0, 1], [4], [3]],
    "abstract-objects": [[1], [0, 3], [2], []],
    "transcendental": [[], [0, 1, 3], [2]],
    "prophecy-odds": [[1, 3], [0, 2], [4]],
    "free-will-defense": [[], [2, 3], [], [0, 1, 4]],
    "lucas-penrose": [[], [0, 1], [3], [2]],
    "induction": [[2], [1], [0]],
    "modality-grounding": [[3], [0, 1], [2], []],
    "intentionality": [[], [0], [2], [1]],
    "evil-presupposes-god": [[0], [1, 2], [], [3]],
    "religious-experience": [[3], [], [0, 1, 2], []]
  }
});
