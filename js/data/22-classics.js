/* The classics concordance: the arguments in well-known apologetics books, mapped to the
 * library entries that answer them. Where a chapter title is quoted it is the book's own;
 * otherwise the label describes the chapter's subject. */
DEF_SET("classics", [
  {
    id: "plantinga", author: "Alvin Plantinga", title: "Two Dozen (or So) Theistic Arguments", year: "1986 lecture notes; published 2007",
    note: "Plantinga offered these as sketches of 'good arguments' that might raise the probability of theism for some people, not as proofs. Each was later developed by a different scholar in Walls & Dougherty (eds.), Two Dozen (or So) Arguments for God (Oxford, 2018).",
    items: [
      { n: "A", label: "The Argument from Intentionality (or Aboutness)", ids: ["intentionality"] },
      { n: "B", label: "The Argument from Collections", ids: ["abstract-objects"] },
      { n: "C", label: "The Argument from (Natural) Numbers", ids: ["abstract-objects", "math-and-logic"] },
      { n: "D", label: "The Argument from Counterfactuals", ids: ["modality-grounding"] },
      { n: "E", label: "The Argument from Physical Constants", ids: ["fine-tuning"] },
      { n: "F", label: "The Naive Teleological Argument", ids: ["design-intuition"] },
      { n: "G", label: "Tony Kenny's Style of Teleological Argument", ids: ["design-intuition", "fifth-way"] },
      { n: "H", label: "The Ontological Argument", ids: ["ontological"] },
      { n: "I", label: "Another Argument Thrown in for Good Measure (why is there anything at all?)", ids: ["contingency", "something-from-nothing"] },
      { n: "J", label: "The Argument from Positive Epistemic Status", ids: ["proper-function"] },
      { n: "K", label: "The Argument from the Confluence of Proper Function and Reliability", ids: ["proper-function", "argument-from-reason"] },
      { n: "L", label: "The Argument from Simplicity", ids: ["induction"] },
      { n: "M", label: "The Argument from Induction", ids: ["induction"] },
      { n: "N", label: "The Putnamian Argument (the Argument from the Rejection of Global Skepticism)", ids: ["argument-from-reason", "meaning-reference"] },
      { n: "O", label: "The Argument from Reference", ids: ["meaning-reference"] },
      { n: "P", label: "The Kripke-Wittgenstein Argument from Plus and Quus", ids: ["meaning-reference"] },
      { n: "Q", label: "The General Argument from Intuition", ids: ["a-priori"] },
      { n: "R", label: "Moral Arguments", ids: ["moral-argument", "kant-moral"] },
      { n: "R*", label: "The Argument from Evil", ids: ["evil-presupposes-god"] },
      { n: "S", label: "The Argument from Colors and Flavors", ids: ["colors-flavors"] },
      { n: "T", label: "The Argument from Love", ids: ["love-play"] },
      { n: "U", label: "The Mozart Argument", ids: ["beauty"] },
      { n: "V", label: "The Argument from Play and Enjoyment", ids: ["love-play"] },
      { n: "W", label: "Arguments from Providence and from Miracles", ids: ["modern-miracles", "miracles-hume", "answered-prayer"] },
      { n: "X", label: "C. S. Lewis's Argument from Nostalgia", ids: ["desire"] },
      { n: "Y", label: "The Argument from the Meaning of Life", ids: ["meaning"] },
      { n: "Z", label: "The Argument from (A) to (Y)", ids: ["cumulative-case"] },
      { n: "+", label: "Aquinas's Fifth Way, which Plantinga adds as an argument from proper function", ids: ["fifth-way"] }
    ]
  },
  {
    id: "kreeft", author: "Peter Kreeft & Ronald K. Tacelli", title: "Handbook of Christian Apologetics, ch. 3: 'Twenty Arguments for the Existence of God'", year: "1994",
    note: "The most widely used list of arguments for God in popular Catholic and evangelical apologetics.",
    items: [
      { n: "1", label: "The Argument from Change", ids: ["classical-proofs"] },
      { n: "2", label: "The Argument from Efficient Causality", ids: ["classical-proofs"] },
      { n: "3", label: "The Argument from Time and Contingency", ids: ["classical-proofs", "contingency"] },
      { n: "4", label: "The Argument from Degrees of Perfection", ids: ["fourth-way"] },
      { n: "5", label: "The Design Argument", ids: ["design-intuition", "fifth-way", "fine-tuning"] },
      { n: "6", label: "The Kalam Argument", ids: ["kalam", "big-bang"] },
      { n: "7", label: "The Argument from Contingency", ids: ["contingency"] },
      { n: "8", label: "The Argument from the World as an Interacting Whole", ids: ["interacting-whole"] },
      { n: "9", label: "The Argument from Miracles", ids: ["modern-miracles", "miracles-hume"] },
      { n: "10", label: "The Argument from Consciousness", ids: ["consciousness"] },
      { n: "11", label: "The Argument from Truth", ids: ["abstract-objects", "intentionality"] },
      { n: "12", label: "The Argument from the Origin of the Idea of God", ids: ["idea-of-god"] },
      { n: "13", label: "The Ontological Argument", ids: ["ontological"] },
      { n: "14", label: "The Moral Argument", ids: ["moral-argument"] },
      { n: "15", label: "The Argument from Conscience", ids: ["conscience"] },
      { n: "16", label: "The Argument from Desire", ids: ["desire"] },
      { n: "17", label: "The Argument from Aesthetic Experience", ids: ["beauty"] },
      { n: "18", label: "The Argument from Religious Experience", ids: ["religious-experience"] },
      { n: "19", label: "The Common Consent Argument", ids: ["universal-belief"] },
      { n: "20", label: "Pascal's Wager", ids: ["pascal"] }
    ]
  },
  {
    id: "feser", author: "Edward Feser", title: "Five Proofs of the Existence of God", year: "2017",
    note: "A contemporary defense of the classical, Thomistic tradition, which claims demonstrative proofs rather than probabilistic arguments.",
    items: [
      { n: "1", label: "The Aristotelian proof (from change)", ids: ["classical-proofs"] },
      { n: "2", label: "The Neo-Platonic proof (from composition)", ids: ["neoplatonic-proof"] },
      { n: "3", label: "The Augustinian proof (from abstract objects)", ids: ["abstract-objects", "math-and-logic"] },
      { n: "4", label: "The Thomistic proof (from essence and existence)", ids: ["classical-proofs", "contingency"] },
      { n: "5", label: "The Rationalist proof (from sufficient reason)", ids: ["contingency"] },
      { n: "6", label: "The divine attributes", ids: ["divine-simplicity", "omnipotence", "timeless-god", "foreknowledge"] },
      { n: "7", label: "Objections rebutted", ids: ["uncaused-god", "something-from-nothing", "cumulative-case"] }
    ]
  },
  {
    id: "swinburne", author: "Richard Swinburne", title: "The Existence of God", year: "1979; 2nd ed. 2004",
    note: "The leading probabilistic case for theism, which weighs each argument with Bayes' theorem and concludes that theism is more probable than not.",
    items: [
      { n: "", label: "The cosmological argument", ids: ["contingency", "kalam"] },
      { n: "", label: "Teleological arguments (from temporal order and from fine-tuning)", ids: ["fine-tuning", "design-intuition"] },
      { n: "", label: "Arguments from consciousness and morality", ids: ["consciousness", "moral-argument"] },
      { n: "", label: "Arguments from providence", ids: ["natural-evil", "soul-making"] },
      { n: "", label: "The problem of evil", ids: ["problem-of-evil", "free-will-defense", "soul-making"] },
      { n: "", label: "The argument from history and miracles", ids: ["miracles-hume", "modern-miracles"] },
      { n: "", label: "The argument from religious experience", ids: ["religious-experience"] },
      { n: "", label: "The balance of probability", ids: ["cumulative-case", "bayes-resurrection"] }
    ]
  },
  {
    id: "lewis", author: "C. S. Lewis", title: "Mere Christianity", year: "1952",
    note: "Based on wartime BBC radio talks; still the most widely read work of Christian apologetics.",
    items: [
      { n: "I", label: "Book I: 'Right and Wrong as a Clue to the Meaning of the Universe'", ids: ["moral-argument", "conscience"] },
      { n: "II.1", label: "Book II, ch. 1: 'The Rival Conceptions of God' (the crooked line)", ids: ["evil-presupposes-god"] },
      { n: "II.2", label: "Book II, ch. 2: 'The Invasion' (dualism and the Devil)", ids: ["evil-god", "satan"] },
      { n: "II.3", label: "Book II, ch. 3: 'The Shocking Alternative' (free will; liar, lunatic, or Lord)", ids: ["free-will-defense", "trilemma"] },
      { n: "II.4", label: "Book II, ch. 4: 'The Perfect Penitent' (the atonement)", ids: ["atonement"] },
      { n: "III.10", label: "Book III, ch. 10: 'Hope' (the argument from desire)", ids: ["desire"] },
      { n: "IV", label: "Book IV: 'Beyond Personality' (the Trinity and time)", ids: ["trinity", "timeless-god"] }
    ]
  },
  {
    id: "strobel", author: "Lee Strobel", title: "The Case for Christ", year: "1998",
    note: "A journalist's interviews with fourteen evangelical scholars. No critical scholar was interviewed.",
    items: [
      { n: "1", label: "'The Eyewitness Evidence' (Craig Blomberg)", ids: ["gospel-authorship", "eyewitnesses"] },
      { n: "2", label: "'Testing the Eyewitness Evidence' (Craig Blomberg)", ids: ["contradictions", "early-gospels", "embarrassing-details"] },
      { n: "3", label: "'The Documentary Evidence' (Bruce Metzger)", ids: ["manuscripts", "textual-variants", "canon"] },
      { n: "4", label: "'The Corroborating Evidence' (Edwin Yamauchi)", ids: ["extrabiblical", "historical-jesus"] },
      { n: "5", label: "'The Scientific Evidence' (John McRay)", ids: ["archaeology", "luke-historian", "nativity"] },
      { n: "6", label: "'The Rebuttal Evidence' (Gregory Boyd)", ids: ["legendary-growth", "copycat", "jesus-miracles"] },
      { n: "7", label: "'The Identity Evidence' (Ben Witherington III)", ids: ["jesus-claimed-god", "implicit-christology"] },
      { n: "8", label: "'The Psychological Evidence' (Gary Collins)", ids: ["trilemma"] },
      { n: "9", label: "'The Profile Evidence' (D. A. Carson)", ids: ["incarnation", "sinless-jesus"] },
      { n: "10", label: "'The Fingerprint Evidence' (Louis Lapides)", ids: ["messianic-prophecy", "prophecy-odds", "isaiah-53"] },
      { n: "11", label: "'The Medical Evidence' (Alexander Metherell)", ids: ["jesus-died"] },
      { n: "12", label: "'The Evidence of the Missing Body' (William Lane Craig)", ids: ["empty-tomb", "women-witnesses", "tomb-veneration"] },
      { n: "13", label: "'The Evidence of Appearances' (Gary Habermas)", ids: ["appearances", "five-hundred", "creed-1cor15"] },
      { n: "14", label: "'The Circumstantial Evidence' (J. P. Moreland)", ids: ["disciples-transformed", "sunday-worship", "martyrdom", "christianity-growth"] }
    ]
  },
  {
    id: "keller", author: "Timothy Keller", title: "The Reason for God", year: "2008",
    note: "Part 1 answers seven common doubts; Part 2 gives the reasons for faith.",
    items: [
      { n: "1", label: "'There Can't Be Just One True Religion'", ids: ["why-christianity", "outsider-test"] },
      { n: "2", label: "'How Could a Good God Allow Suffering?'", ids: ["problem-of-evil", "greater-good", "compensation", "cross-suffering"] },
      { n: "3", label: "'Christianity Is a Straitjacket'", ids: ["consequences", "meaning"] },
      { n: "4", label: "'The Church Is Responsible for So Much Injustice'", ids: ["christian-civilization", "religion-wars", "christian-reforms"] },
      { n: "5", label: "'How Can a Loving God Send People to Hell?'", ids: ["hell", "hell-alternatives"] },
      { n: "6", label: "'Science Has Disproved Christianity'", ids: ["science-faith", "theistic-evolution", "science-disproved"] },
      { n: "7", label: "'You Can't Take the Bible Literally'", ids: ["gospel-genre", "early-gospels", "inerrancy"] },
      { n: "8", label: "'The Clues of God'", ids: ["fine-tuning", "kalam", "beauty", "cumulative-case"] },
      { n: "9", label: "'The Knowledge of God'", ids: ["moral-argument", "human-dignity"] },
      { n: "10", label: "'The Problem of Sin'", ids: ["original-sin", "human-condition"] },
      { n: "11", label: "'Religion and the Gospel'", ids: ["why-christianity"] },
      { n: "12", label: "'The (True) Story of the Cross'", ids: ["atonement", "cross-suffering"] },
      { n: "13", label: "'The Reality of the Resurrection'", ids: ["wright-mutations", "empty-tomb", "martyrdom"] },
      { n: "14", label: "'The Dance of God'", ids: ["trinity"] }
    ]
  },
  {
    id: "geisler", author: "Norman Geisler & Frank Turek", title: "I Don't Have Enough Faith to Be an Atheist", year: "2004",
    note: "A step-by-step case from truth, to God, to the reliability of the New Testament and the resurrection.",
    items: [
      { n: "3", label: "'In the Beginning There Was a Great SURGE' (the Big Bang and the second law)", ids: ["kalam", "big-bang"] },
      { n: "4", label: "The design of the universe", ids: ["fine-tuning", "privileged-planet"] },
      { n: "5", label: "The origin of the first life", ids: ["origin-of-life", "dna-information"] },
      { n: "6", label: "'New Life Forms: From the Goo to You via the Zoo?'", ids: ["evolution", "irreducible-complexity", "junk-dna"] },
      { n: "7", label: "The moral law", ids: ["moral-argument", "atheist-regimes"] },
      { n: "8", label: "Miracles", ids: ["miracles-hume"] },
      { n: "9", label: "Early testimony about Jesus", ids: ["early-gospels", "extrabiblical", "creed-1cor15"] },
      { n: "10", label: "Eyewitness testimony about Jesus", ids: ["eyewitnesses", "gospel-authorship", "luke-historian"] },
      { n: "11", label: "Ten reasons the New Testament writers told the truth", ids: ["embarrassing-details", "martyrdom", "women-witnesses"] },
      { n: "12", label: "The resurrection", ids: ["minimal-facts", "empty-tomb", "appearances"] },
      { n: "13", label: "Who Jesus is", ids: ["jesus-claimed-god", "trilemma"] },
      { n: "14", label: "What Jesus taught about the Bible", ids: ["inerrancy", "mosaic-authorship"] },
      { n: "App.", label: "Appendix on the problem of evil", ids: ["problem-of-evil", "free-will-defense"] }
    ]
  },
  {
    id: "craig", author: "William Lane Craig", title: "Reasonable Faith", year: "3rd ed. 2008",
    note: "The standard textbook of evidential apologetics, organized under Latin headings.",
    items: [
      { n: "1", label: "De Fide: 'How Do I Know Christianity Is True?'", ids: ["spirit-witness", "properly-basic", "faith"] },
      { n: "2", label: "De Homine: 'The Absurdity of Life without God'", ids: ["meaning", "consequences"] },
      { n: "3", label: "De Deo: 'The Existence of God (1)'", ids: ["contingency", "kalam", "big-bang"] },
      { n: "4", label: "De Deo: 'The Existence of God (2)'", ids: ["fine-tuning", "moral-argument", "ontological"] },
      { n: "", label: "De Creatione: 'The Problem of Historical Knowledge'", ids: ["best-explanation", "legendary-growth"] },
      { n: "", label: "De Creatione: 'The Problem of Miracles'", ids: ["miracles-hume"] },
      { n: "7", label: "De Christo: 'The Self-Understanding of Jesus'", ids: ["implicit-christology", "jesus-claimed-god"] },
      { n: "8", label: "De Christo: 'The Resurrection of Jesus'", ids: ["minimal-facts", "empty-tomb", "appearances", "best-explanation"] }
    ]
  },
  {
    id: "wallace", author: "J. Warner Wallace", title: "Cold-Case Christianity", year: "2013",
    note: "A homicide detective applies cold-case methods to the Gospels: ten investigative principles, then four tests of the Gospel writers as witnesses.",
    items: [
      { n: "", label: "Setting aside presuppositions against the supernatural", ids: ["miracles-hume"] },
      { n: "", label: "Inference to the most reasonable explanation", ids: ["best-explanation"] },
      { n: "", label: "Circumstantial and cumulative evidence", ids: ["cumulative-case", "disciples-transformed"] },
      { n: "", label: "Testing witnesses and their differing accounts", ids: ["eyewitnesses", "contradictions", "undesigned-coincidences"] },
      { n: "", label: "Conspiracy theories and the apostles", ids: ["martyrdom", "alternative-theories"] },
      { n: "", label: "The 'chain of custody' from the apostles to the church fathers", ids: ["gospel-authorship", "early-gospels"] },
      { n: "", label: "Were they present? (dating the Gospels)", ids: ["early-gospels", "paul-confirms"] },
      { n: "", label: "Were they corroborated? (archaeology and outside sources)", ids: ["archaeology", "extrabiblical", "luke-historian"] },
      { n: "", label: "Were they accurate? (manuscripts)", ids: ["manuscripts", "textual-variants"] },
      { n: "", label: "Were they biased? (motives and martyrdom)", ids: ["martyrdom", "embarrassing-details"] }
    ]
  },
  {
    id: "habermas", author: "Gary Habermas & Michael Licona", title: "The Case for the Resurrection of Jesus", year: "2004",
    note: "The popular presentation of the minimal facts approach and its answers to naturalistic theories.",
    items: [
      { n: "", label: "The minimal facts", ids: ["minimal-facts", "creed-1cor15", "paul-conversion", "james-conversion"] },
      { n: "", label: "Fraud and legend theories", ids: ["alternative-theories", "legendary-growth", "martyrdom"] },
      { n: "", label: "Swoon theories", ids: ["jesus-died"] },
      { n: "", label: "Hallucination and vision theories", ids: ["appearances", "five-hundred"] },
      { n: "", label: "The empty tomb", ids: ["empty-tomb", "women-witnesses"] }
    ]
  },
  {
    id: "wright", author: "N. T. Wright", title: "The Resurrection of the Son of God", year: "2003",
    note: "An 800-page argument that the early Christian belief in resurrection requires an empty tomb and real appearances.",
    items: [
      { n: "I", label: "Life after death in the ancient pagan and Jewish worlds", ids: ["afterlife-origins", "dying-messiah"] },
      { n: "II–III", label: "Resurrection in Paul and early Christianity", ids: ["creed-1cor15", "paul-confirms", "wright-mutations"] },
      { n: "IV", label: "The Easter stories in the Gospels", ids: ["empty-tomb", "appearances", "women-witnesses"] },
      { n: "V", label: "The historical conclusion: the 'mutations' and their cause", ids: ["wright-mutations", "best-explanation"] }
    ]
  }
]);
