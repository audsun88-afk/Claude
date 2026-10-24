/* Arguments for God (19 entries) */
DEF_ADD([
{
  id: "kalam",
  cat: "god",
  title: "The Kalam Cosmological Argument",
  who: "al-Ghazali (11th c.); Bonaventure; William Lane Craig, The Kalam Cosmological Argument (1979); Craig & Sinclair (2009)",
  claim: `Whatever begins to exist has a cause. The universe began to exist. So the universe has a cause. Craig then argues by "conceptual analysis" that this cause must be uncaused, timeless, spaceless, immaterial, enormously powerful, and personal, because only a free agent could produce a temporal effect from a timeless cause. The second premise is defended philosophically (an actual infinite cannot exist, and an infinite series cannot be completed by successive addition) and scientifically (Big Bang cosmology, the Borde–Guth–Vilenkin theorem, and the second law of thermodynamics).`,
  form: ["Whatever begins to exist has a cause.", "The universe began to exist.", "Therefore, the universe has a cause.", "(Added) That cause is a timeless, spaceless, immaterial, personal Creator."],
  short: `Each premise is disputed by the people best placed to judge it, and even if all three are granted, the conclusion is "the universe has a cause," not "the God of Christianity exists." The causal premise generalizes from changes *inside* time to the origin of time itself. The "beginning" premise outruns what physics actually shows. And the jump from "cause" to "personal agent" is the weakest link of all.`,
  points: [
    { h: "The causal premise is an extrapolation, not an observation", t: `Every cause we have ever observed is a rearrangement of pre-existing matter and energy, happening in time and governed by laws. The beginning of the universe would be a different kind of event entirely: the origin of time, space, and the laws themselves. Moving from "everything in the universe has a cause" to "the universe has a cause" commits the fallacy of composition (Hume; Russell in his 1948 radio debate with Copleston). Fundamental physics does not even use a robust notion of "cause." Its laws are time-symmetric differential equations (Russell, "On the Notion of Cause," 1913). On the standard reading of quantum mechanics, individual events such as a particular nucleus decaying have no sufficient cause. The premise's "intuitive certainty" is an intuition trained on medium-sized objects.` },
    { h: "A cause of time cannot come before time", t: `Causes ordinarily come before their effects. Nothing can come before the first moment of time. Craig's solution is a timeless being who causes the first moment "simultaneously" and becomes temporal at creation. That depends on a disputed metaphysics of time: the A-theory, or presentism, which Craig openly concedes the argument needs. On the B-theory, favored by many philosophers of physics because of relativity, "the universe began to exist" means only that four-dimensional spacetime has a temporal edge. That no more needs an external cause than a ruler needs a cause for having a first inch (Grünbaum, 1989; Smith, 1993).` },
    { h: "The science does not establish an absolute beginning", t: `Big Bang cosmology describes expansion from a hot, dense state. It breaks down near the Planck time, where a quantum theory of gravity is required. The "t = 0" singularity belongs to a classical model, and most physicists read it as a sign that the model has failed, not as a real event. The Borde–Guth–Vilenkin theorem (2003) shows that a classical spacetime whose expansion averages above zero along past paths cannot be extended forever into the past. It does not say what replaces that classical description. Alan Guth has said he suspects the universe had no beginning. In his 2014 debate with Craig, Sean Carroll listed models with no beginning in the relevant sense: Carroll–Chen, Aguirre–Gratton, and Hartle–Hawking. Vilenkin's own preferred proposal, a universe that tunnels into existence, is a lawful physical process, not a person.` },
    { h: "Actual infinities are strange, not impossible", t: `Hilbert's Hotel shows that infinite collections behave unlike finite ones. That is a theorem of Cantor's set theory, not a contradiction, and set theory handles actual infinities consistently every day. The "you can't cross an infinite" argument quietly assumes an infinitely distant starting point. An infinite past has no starting point, and every past event is only finitely far from now (Morriston 2002; Oppy 2006; Sobel 2004). Craig's own God also knows an actual infinity of truths, such as every truth of arithmetic, which sits awkwardly with the claim that actual infinities cannot exist.` },
    { h: "From 'cause' to 'person' is a non sequitur", t: `Even if the universe has a cause, that cause could be an impersonal initial state: a quantum vacuum, a law-governed field, or a necessary first configuration (Oppy). Craig argues that only a free agent can bring about a temporal effect from a timeless cause. But a timeless agent cannot *decide* anything, because deciding is a process that happens in time. And indeterministic physical causes produce effects with no prior sufficient condition all the time, without being persons (Morriston 2000). Nothing in the argument yields omniscience, moral perfection, uniqueness, a Trinity, or an interest in human worship.` },
    { h: "The naturalist has the simpler hypothesis", t: `Whatever the theist says about God (uncaused, necessary, the explanatory stopping point), the naturalist can say about the first physical state, or about physical reality as a whole. Theism then adds a second kind of thing: a mind with no physical basis, for which there is no independent evidence. When two hypotheses fit the data equally well, the one with fewer kinds of entity is preferred (Oppy, *Arguing about Gods*, 2006).` },
    { h: "The argument undercuts itself", t: `The intuition behind premise 1 is *ex nihilo nihil fit*: nothing comes from nothing. Christian doctrine holds that God created the universe from nothing, *creatio ex nihilo*, with no pre-existing material. A defender can say that God is the efficient cause, but the material cause is admitted to be nothing. That is exactly what the premise's intuition was supposed to rule out (Morriston, 2000).` }
  ],
  replies: [
    { q: "The Borde–Guth–Vilenkin theorem proves the universe had a beginning.", a: `The BGV theorem applies to classical spacetimes whose expansion averages above zero. It shows that inflation cannot be eternal into the past *as a classical model*. It does not establish an absolute beginning of all physical reality, because nobody expects classical spacetime to hold at the Planck scale. Guth, the "G" in BGV, has publicly said he suspects the universe is eternal. Carroll put it bluntly in 2014: the theorem tells us classical spacetime breaks down, not that reality began.`, k: "bgv borde guth vilenkin theorem inflation past incomplete geodesic" },
    { q: "The second law of thermodynamics means the universe can't be infinitely old.", a: `The second law is statistical. How it applies to the whole universe, including gravity and expanding space, is unresolved, because nobody has a settled account of gravitational entropy. Some eternal models, such as Carroll–Chen, use the second law to explain the arrow of time. The low-entropy early universe is a puzzle for everyone, theists included. A puzzle is not evidence for a person.`, k: "second law thermodynamics entropy heat death run down energy" },
    { q: "Something can't come from nothing. That's just common sense.", a: `Fine. The naturalist does not need to say the universe came from nothing. The live options are an eternal physical reality, a necessary first state, or a first state with no cause. "Common sense" developed in the middle of the universe and fails badly at the extremes, as quantum mechanics and relativity both show. Christian creation *ex nihilo* is itself the view that matter came from no prior matter. See [[something-from-nothing]].`, k: "nothing comes from nothing out of nothing ex nihilo common sense" },
    { q: "The cause must be either an abstract object or a mind, and abstract objects can't cause anything.", a: `That is a false dilemma. Other candidates include a necessary physical state, a quantum-gravitational regime, or initial conditions with no cause. And every mind we know of is a process running in time on a physical brain (see [[disembodied-mind]]). A timeless mind that "chooses" is a contradiction, because choosing is an event.`, k: "abstract objects mind immaterial timeless only minds personal cause numbers" },
    { q: "An actual infinite leads to absurdities like Hilbert's Hotel.", a: `Absurd is not the same as contradictory. Cantor's set theory is consistent, as far as anyone can tell, and treats actual infinities as routine. Hilbert's Hotel shows that infinities do not behave like finite sets. That is a mathematical result, not a paradox. And if actual infinities were impossible, God's knowledge of infinitely many truths would be impossible too.`, k: "hilbert hotel actual infinite absurd infinite regress impossible traverse" },
    { q: "The Grim Reaper paradox proves the past can't be infinite.", a: `The paradox goes back to José Benardete (1964) and was turned into a kalam argument by Robert Koons (2014) and Alexander Pruss (2018). It imagines infinitely many "reapers" set to act at times that get ever closer to a given moment, each acting only if no reaper before it has acted. There's no first reaper, yet one must have acted, which looks contradictory, and an infinite past would allow such an arrangement. But the argument shows only that a set of assumptions is inconsistent, including a "patchwork" principle that any such arrangement is possible. Philosophers have denied that principle, or argued that the series as a whole can produce the effect (Hawthorne, 2000; Oppy, 2006), rather than giving up an infinite past. Pruss's own conclusion is "causal finitism," a new and contested metaphysical principle. And a finite past would still leave every other step of the kalam unsupported (see the defeaters above).`, k: "grim reaper paradox koons pruss causal finitism benardete reapers patchwork infinite past impossible" }
  ],
  sources: [
    "Craig, W. L. (1979). The Kalam Cosmological Argument. Macmillan.",
    "Craig, W. L. & Sinclair, J. (2009). 'The Kalam Cosmological Argument.' In Blackwell Companion to Natural Theology.",
    "Morriston, W. (2000). 'Must the Beginning of the Universe Have a Personal Cause?' Faith and Philosophy 17(2): 149–169.",
    "Morriston, W. (2002). 'Craig on the Actual Infinite.' Religious Studies 38(2): 147–166.",
    "Grünbaum, A. (1989). 'The Pseudo-Problem of Creation in Physical Cosmology.' Philosophy of Science 56(3): 373–394.",
    "Borde, A., Guth, A. & Vilenkin, A. (2003). 'Inflationary Spacetimes Are Incomplete in Past Directions.' Physical Review Letters 90: 151301.",
    "Carroll, S. vs. Craig, W. L. (2014). 'God and Cosmology.' Greer-Heard Forum, New Orleans.",
    "Oppy, G. (2006). Arguing about Gods. Cambridge University Press, ch. 3.",
    "Sobel, J. H. (2004). Logic and Theism. Cambridge University Press, ch. 5.",
    "Russell, B. (1913). 'On the Notion of Cause.' Proceedings of the Aristotelian Society 13: 1–26.",
    "Benardete, J. A. (1964). Infinity: An Essay in Metaphysics. Clarendon Press.",
    "Koons, R. C. (2014). 'A New Kalam Argument: Revenge of the Grim Reaper.' Noûs 48(2): 256–267.",
    "Pruss, A. R. (2018). Infinity, Causation, and Paradox. Oxford University Press.",
    "Hawthorne, J. (2000). 'Before-Effect and Zeno Causality.' Noûs 34(4): 622–633.",
    "Oppy, G. (2006). Philosophical Perspectives on Infinity. Cambridge University Press."
  ],
  keys: "kalam cosmological argument first cause universe began beginning cause of universe who caused the universe uncaused cause craig ghazali everything that begins to exist",
  rel: ["contingency", "big-bang", "something-from-nothing", "uncaused-god", "classical-proofs"]
},
{
  id: "big-bang",
  cat: "god",
  title: "The Big Bang Proves Creation (and Genesis Predicted It)",
  who: "Popular apologetics; Robert Jastrow, God and the Astronomers (1978); Hugh Ross, Reasons to Believe",
  claim: `For centuries, atheists held that the universe was eternal. The Big Bang showed it had a beginning, just as Genesis 1:1 says: "In the beginning God created the heavens and the earth." Atheist scientists like Fred Hoyle resisted the Big Bang because of its theistic implications. The discovery of a cosmic beginning vindicates the Bible.`,
  short: `The Big Bang model describes the expansion of the universe from a hot, dense state. Whether that was an absolute beginning is open. Genesis 1 does not describe a Big Bang: it describes God shaping pre-existing waters and darkness, a solid dome holding up waters, and the Earth and plants before the Sun and stars. Georges Lemaître, a Catholic priest and the theory's originator, himself warned Pope Pius XII not to treat it as confirming creation.`,
  points: [
    { h: "Lemaître rejected the theological reading", t: `The Big Bang theory was proposed by Georges Lemaître, a Belgian priest and physicist. When Pius XII suggested in 1951 that the theory confirmed creation, Lemaître reportedly asked the Vatican to stop, insisting that his cosmology was neutral on metaphysics. He wrote that the theory "remains entirely outside any metaphysical or religious question."` },
    { h: "Genesis 1 describes a different cosmos", t: `Genesis 1:2 begins with darkness over "the deep" (tehom) and the spirit over "the waters," which are already there. God separates the waters with a *raqia* (1:6–8), a solid firmament or dome that holds back the waters above (compare Job 37:18, "the skies, hard as a cast metal mirror"). Plants appear on day 3, before the Sun on day 4, and the stars are mentioned almost in passing. This is the cosmology of the ancient Near East, close to the Babylonian Enuma Elish, in which Marduk splits the sea-monster Tiamat to form sky and earth. It is not modern cosmology.` },
    { h: "A beginning isn't established", t: `The classical Big Bang singularity is where general relativity breaks down. Physics does not yet know what happened before the Planck time, or whether "before" even applies. Several respectable models have no absolute beginning: eternal inflation, the Carroll–Chen model, conformal cyclic cosmology (Penrose), and quantum cosmologies. See [[kalam]].` },
    { h: "Even a beginning wouldn't select Genesis", t: `Many creation myths have beginnings: Babylonian, Egyptian, Hindu (the Nasadiya Sukta of the Rig Veda), Chinese (Pangu). A beginning is consistent with them all. If the universe turned out to be eternal, apologists would presumably not abandon Christianity; Aquinas held that reason alone cannot show the world had a beginning. A hypothesis compatible with both outcomes isn't confirmed by either.` }
  ],
  replies: [
    { q: "Atheists believed in an eternal universe until the Big Bang proved them wrong.", a: `Some scientists, including Hoyle, preferred a steady state. Others, religious and not, accepted the Big Bang when the evidence came in, the cosmic microwave background in 1965. That is how science works: following evidence regardless of anyone's preferences. Whether the Big Bang was an absolute beginning is still an open question in physics, not settled in favor of theism.`, k: "atheists eternal universe proven wrong steady state hoyle" }
  ],
  sources: [
    "Lemaître, G. (1958). 'The Primeval Atom Hypothesis and the Problem of the Clusters of Galaxies.' In La Structure et l'Évolution de l'Univers.",
    "Kragh, H. (1996). Cosmology and Controversy. Princeton University Press.",
    "Walton, J. (2009). The Lost World of Genesis One. InterVarsity.",
    "Smith, M. S. (2010). The Priestly Vision of Genesis 1. Fortress.",
    "Carroll, S. (2010). From Eternity to Here. Dutton."
  ],
  keys: "big bang proves creation genesis predicted beginning in the beginning lemaitre jastrow universe had a beginning bible science",
  rel: ["kalam", "genesis-creation", "science-in-bible"]
},
{
  id: "something-from-nothing",
  cat: "god",
  title: "Atheists Believe Everything Came from Nothing",
  who: "Popular apologetics (e.g., 'nothing created everything'); responses to Lawrence Krauss, A Universe from Nothing (2012)",
  claim: `Atheism says that nothing created everything, that the universe popped into being from nothing, uncaused. That is absurd. Even Krauss's "nothing" is really a quantum vacuum, which is something. Only an eternal Creator explains why there is something rather than nothing.`,
  short: `Atheism, as a position, says nothing about cosmic origins. It is just the absence of belief in gods. Most naturalist philosophers do *not* claim the universe came from absolute nothing. They hold that physical reality is eternal, or that its first state needs no cause, or that "why is there something rather than nothing?" may have no answer. The theist's own position is that God created matter from no pre-existing matter, so "something from nothing" is more accurately the Christian doctrine.`,
  points: [
    { h: "Nobody serious says 'nothing created everything'", t: `"Nothing created everything" is a straw man. Naturalist options include: an eternal universe or multiverse; a first physical state that exists necessarily or without cause; and the view that the question has no answer. Graham Oppy, the leading naturalist in philosophy of religion, defends a necessary initial physical state.` },
    { h: "Krauss's 'nothing' is a red herring on both sides", t: `Krauss's book used "nothing" loosely, to mean a state with no particles or no space, and the philosopher David Albert criticized it sharply in the *New York Times* (2012). Apologists then use Krauss's mistake to suggest that all naturalists are confused. But no part of the case against theism depends on Krauss's terminology.` },
    { h: "Theism has the same question", t: `"Why is there God rather than nothing?" If the answer is "God exists necessarily," the naturalist can give the same answer about the physical foundation. If "necessary existence" is meaningful at all, it is no more mysterious for a physical reality than for a mind. And positing an uncaused God, in order to avoid an uncaused universe, adds a second uncaused thing.` },
    { h: "Creatio ex nihilo is the 'something from nothing' view", t: `Christian doctrine (since Irenaeus and Theophilus of Antioch in the 2nd century; Genesis 1 itself begins with pre-existing waters) holds that God made the universe out of nothing. No mechanism is offered: God willed and matter appeared. This is the claim that physical stuff came into being with no physical precursor, which is what apologists find absurd when they attribute it to atheists.` }
  ],
  replies: [
    { q: "Where did the universe come from then?", a: `Honest answer: no one knows, and "I don't know" is better than an answer that has no evidence behind it. Physics has candidate models (eternal inflation, cyclic models, quantum cosmology). "God did it" is not an answer to "where did it come from?" so much as a renaming of the mystery, since you then have to ask where God came from, or accept that something can just exist without a cause, which is what the naturalist says about the universe.`, k: "where did universe come from origin of universe how did everything begin" }
  ],
  sources: [
    "Krauss, L. (2012). A Universe from Nothing. Free Press.",
    "Albert, D. (2012). 'On the Origin of Everything.' New York Times Book Review, March 23.",
    "Oppy, G. (2013). The Best Argument against God. Palgrave Macmillan.",
    "Holt, J. (2012). Why Does the World Exist? Liveright.",
    "May, G. (1994). Creatio ex Nihilo: The Doctrine of 'Creation out of Nothing' in Early Christian Thought. T&T Clark."
  ],
  keys: "something from nothing nothing created everything universe from nothing krauss popped into existence came from nothing where did universe come from atheists believe",
  rel: ["kalam", "contingency", "big-bang"]
},
{
  id: "uncaused-god",
  cat: "god",
  title: "God Doesn't Need a Cause (Who Made God?)",
  who: "Standard apologetic reply to 'Who made God?' (Craig, Feser, Lennox)",
  claim: `"Who made God?" is a confused question. God is by definition uncaused and eternal; only things that begin to exist need a cause. Asking who made God is like asking who the bachelor's wife is. Dawkins's "Ultimate Boeing 747" argument, that God would be even more complex than the universe, misunderstands classical theism, in which God is simple and necessary.`,
  short: `The reply is fair against a naive "everything has a cause" argument, but it shows that uncaused existence is possible, which the naturalist can claim for the universe or its foundation. The theist must then argue that a mind is a better candidate for uncaused existence than physical reality, and no good argument for that is available. Defining God as uncaused doesn't help: definitions can't settle what exists.`,
  points: [
    { h: "Special pleading, or a symmetric option", t: `If some things can exist without a cause, the question is which things. The theist says "only God." The naturalist says "the most fundamental physical reality." Without an independent reason to think that minds, rather than physical states, are the kind of thing that can be uncaused, the theist's exemption is special pleading.` },
    { h: "Definitions don't create existence", t: `"God is by definition uncaused" tells us what the word means. It does not tell us that anything answers to the definition. One could define a "Zog" as an uncaused cause of the universe that is impersonal and mindless, and the definition would work just as well.` },
    { h: "Simplicity is contested", t: `Classical theists answer Dawkins by saying God is metaphysically simple, without parts. But a being that knows every fact, holds every possible plan, and can bring about any possible world contains, in some sense, all that information. Divine simplicity also faces serious coherence objections (see [[divine-simplicity]]). An infinitely capable mind does not look like the kind of thing one should expect to exist without explanation.` }
  ],
  replies: [
    { q: "God is eternal, so he doesn't need a cause. The universe began, so it does.", a: `That depends on the universe having begun in the absolute sense, which is not established (see [[kalam]]). And if the first physical state, or physical reality as a whole, is eternal or necessary, the same exemption applies to it. The theist's claim adds a mind that has no evidence of its own, so it is the less economical version of the same move.`, k: "god eternal doesn't need cause universe began needs cause who made god" }
  ],
  sources: [
    "Dawkins, R. (2006). The God Delusion. Houghton Mifflin, ch. 4.",
    "Feser, E. (2017). Five Proofs of the Existence of God, ch. 7.",
    "Oppy, G. (2013). The Best Argument against God.",
    "Le Poidevin, R. (1996). Arguing for Atheism. Routledge, ch. 1."
  ],
  keys: "who made god who created god god doesn't need cause uncaused eternal special pleading dawkins 747 what caused god",
  rel: ["kalam", "contingency", "divine-simplicity"]
},
{
  id: "contingency",
  cat: "god",
  title: "The Argument from Contingency",
  who: "Leibniz, Monadology (1714); Samuel Clarke; Alexander Pruss, The Principle of Sufficient Reason (2006); Robert Koons; Joshua Rasmussen",
  claim: `Everything that exists has an explanation of its existence, either in the necessity of its own nature or in an external cause. The universe is contingent: it might not have existed. So it must have an external explanation, and the only adequate explanation of all contingent things is a necessary being, which is God. In Pruss's version, the "Big Conjunctive Contingent Fact," the conjunction of all contingent truths, must have an explanation, and that explanation must lie in a necessary being.`,
  form: ["Every existing thing has an explanation of its existence (Principle of Sufficient Reason).", "If the universe has an explanation, that explanation is a necessary being (God).", "The universe exists.", "Therefore God exists."],
  short: `The argument rests entirely on a strong Principle of Sufficient Reason (PSR), and the strong PSR has a famous problem: it implies that everything is necessary. This is the modal collapse shown by van Inwagen and Bennett. Weaken the PSR to avoid the collapse and the argument no longer reaches God. Even where it works, it gives at most "something necessary exists," which the naturalist can fill with a necessary physical foundation. That is a cheaper hypothesis than a mind without a body.`,
  points: [
    { h: "The strong PSR collapses all truths into necessary ones", t: `Take the Big Conjunctive Contingent Fact (BCCF), the conjunction of every contingent truth. If the PSR is true, the BCCF has an explanation, E. If E is necessary and entails the BCCF, then the BCCF is necessary, and nothing is contingent after all. If E is contingent, it is already part of the BCCF and cannot explain it without circularity. This is van Inwagen's argument (*An Essay on Free Will*, 1983), also made by Bennett. Defenders reply that explanations need not entail what they explain. But once explanation is non-entailing, "God freely chose it" leaves it unexplained why God chose *this* rather than something else. That is the very kind of brute fact the PSR was introduced to forbid.` },
    { h: "Divine simplicity makes the collapse worse", t: `Classical theists hold that God is simple: his willing to create is identical with his necessary essence. If so, God's act of creating is necessary, and so is everything it entails, which means the creation is necessary too. Ryan Mullins (2013) and Joseph Schmid and Mullins (2022, *Religious Studies*) develop this "modal collapse" objection in detail. The God who is meant to explain contingency ends up abolishing it.` },
    { h: "Brute facts are unavoidable for everyone", t: `Every worldview ends in something unexplained. The theist ends in God's existence, God's nature, and God's free choice, which on libertarian accounts has no sufficient reason. The naturalist ends in the fundamental physical reality and its laws. Explanatory regress stops somewhere for both. The question is which stopping point is more economical, and "a physical foundation" is more economical than "a physical foundation plus a disembodied mind that chose it."` },
    { h: "Necessity is available to naturalism", t: `If there must be a necessary foundation, the naturalist can say the initial physical state, or the fundamental stuff and its laws, exists necessarily (Oppy, 2013, *The Best Argument against God*). Theists find this implausible, but the intuition that "matter could have failed to exist" applies equally to "a mind like God's could have failed to exist." Conceivability is a weak guide to metaphysical possibility in both directions.` },
    { h: "The 'gap problem' remains", t: `Grant a necessary being. Nothing yet shows that it is a person, omniscient, good, unique, Trinitarian, or the God who spoke to Abraham. Every step from "necessary being" to "God" needs further argument, and those arguments, from perfection or from simplicity, inherit the problems discussed under [[divine-simplicity]] and [[ontological]].` },
    { h: "Composition again", t: `"The universe" may not be a single object that needs its own explanation over and above its parts. Hume's point (*Dialogues*, IX): if each part of the universe is explained by earlier parts, asking for an extra explanation of the whole is "very unreasonable." Pruss answers with the BCCF, which brings back the modal collapse problem above.` }
  ],
  replies: [
    { q: "Rejecting the PSR undermines science. Without it you can't expect explanations for anything.", a: `Science needs a *defeasible* expectation that ordinary things have explanations. It does not need a metaphysical principle that *everything* must, including the totality of all things. Quantum mechanics already gives us events with no sufficient reason on standard interpretations, and science carries on. The modest principle works fine. The strong principle collapses into necessitarianism.`, k: "psr principle of sufficient reason undermine science explanations rationality" },
    { q: "God's choice is explained by his reasons, even though it isn't necessitated.", a: `If God's reasons fully explain why he created this world, they necessitate it and modal collapse returns. If they don't, there is an unexplained remainder: why this choice and not another. That remainder is a brute contingent fact, which is exactly what the PSR forbids. The theist has to give up either the strong PSR or real contingency.`, k: "god's reasons free choice libertarian non-necessitating explanation" },
    { q: "The universe is obviously contingent. It could have been different.", a: `Some features of it could perhaps have been different. Whether physical reality as a whole could have failed to exist is just what is in dispute. "I can imagine it not existing" is also true of God. Every argument that the physical world is contingent works equally well against God's necessity.`, k: "universe contingent could not exist could have been different" }
  ],
  sources: [
    "Leibniz, G. W. (1714). Monadology §§32–38; 'On the Ultimate Origination of Things' (1697).",
    "Pruss, A. (2006). The Principle of Sufficient Reason: A Reassessment. Cambridge University Press.",
    "van Inwagen, P. (1983). An Essay on Free Will. Oxford University Press, pp. 202–204.",
    "Mullins, R. T. (2013). 'Simply Impossible: A Case Against Divine Simplicity.' Journal of Reformed Theology 7(2): 181–203.",
    "Schmid, J. C. & Mullins, R. T. (2022). 'The Aloneness Argument Against Classical Theism.' Religious Studies 58(2).",
    "Oppy, G. (2013). The Best Argument against God. Palgrave Macmillan.",
    "Hume, D. (1779). Dialogues Concerning Natural Religion, Part IX.",
    "Rowe, W. (1975). The Cosmological Argument. Princeton University Press."
  ],
  keys: "contingency argument leibniz principle of sufficient reason psr necessary being contingent things why does anything exist why is there something rather than nothing explanation of existence big conjunctive contingent fact",
  rel: ["kalam", "classical-proofs", "divine-simplicity", "something-from-nothing"]
},
{
  id: "classical-proofs",
  cat: "god",
  title: "Aquinas's Five Ways and the Classical Proofs",
  who: "Thomas Aquinas, Summa Theologiae I q.2 a.3; Aristotle, Physics VIII & Metaphysics XII; Edward Feser, Five Proofs of the Existence of God (2017)",
  claim: `Change is the actualization of potential, and no potential can actualize itself. Whatever is changed is changed by another. Even the *continued existence* of things right now depends on a chain of actualizers that cannot regress infinitely, because it is a chain where each member's power is borrowed. So there must be a purely actual Unmoved Mover, with no potential at all. Such a being must be one, simple, immutable, eternal, omnipotent, intelligent, and good: the God of classical theism. Feser adds Neoplatonic, Augustinian, Thomistic (essence–existence), and Rationalist versions.`,
  short: `The proofs need contested Aristotelian metaphysics (act and potency, hylomorphism) that modern physics does not support. They also face a strong objection that has been developed in detail only recently: existential inertia, the idea that things persist unless something destroys them and need no continuous sustainer. And the "second stage," moving from "pure act" to a personal, knowing, loving God, is where the strongest critics locate the failure.`,
  points: [
    { h: "Existential inertia", t: `The proofs assume that things need something to keep them in existence at every moment. The *existential inertia thesis* holds that concrete things persist unless acted on, much as Newton's first law says a moving body keeps moving. Joseph Schmid and Daniel Linford (*Existential Inertia and Classical Theistic Proofs*, Springer, 2023) give the first book-length defense. They argue the thesis is supported by theoretical simplicity, by conservation laws, and by relativity, and that each of Feser's five proofs assumes its denial without justification.` },
    { h: "Physics has abandoned the motion premise", t: `"Whatever is moved is moved by another" was Aristotle's physics, in which motion needs a continuous mover. Newton's first law replaced it: uniform motion needs no cause. Neo-Thomists reply that "motion" means any actualization of potential, not locomotion. But then the premise has to be defended as metaphysics, and nobody has demonstrated that all actualization needs an *external, simultaneous* actualizer. Quantum events, such as decay, actualize without any identifiable actualizer.` },
    { h: "Why can't the regress be infinite?", t: `The argument distinguishes "accidental" series (grandfather → father → son), which may be infinite, from "essential" or per se series (a hand moving a stick moving a stone), which supposedly may not. But an essentially ordered series need not be infinite to avoid needing God. It can end in fundamental physical entities with their own causal powers, such as fields or the quantum state, rather than in pure actuality.` },
    { h: "The second-stage gap", t: `Even granting a first actualizer, getting from "purely actual" to intelligent, good, omnipotent, and unique requires arguments that critics consider the proofs' weakest point. The step from "pure act" to "has intellect" goes through the Thomistic claim that forms must pre-exist in their cause "eminently," which is a disputed metaphysical principle. Schmid and Linford (ch. 6, "Mind the Gap") argue that these stage-two inferences fail across all five proofs.` },
    { h: "Pure actuality and divine simplicity", t: `A purely actual being has no unrealized potential, so it cannot change, respond, or be otherwise. Then its knowledge of and will toward creation cannot differ across possible worlds, and modal collapse follows (see [[divine-simplicity]]). A God who cannot do anything other than what he does, and is not affected by prayer, is also far from the responsive personal God of the Bible.` }
  ],
  replies: [
    { q: "You're confusing Aquinas's 'motion' with physical motion. Newton's first law is irrelevant.", a: `Then the premise has to be defended as pure metaphysics, the claim that *every* actualization needs a simultaneous external actualizer. That is precisely what existential inertia denies, and the classical theist has no non-question-begging argument against it. Modern physics is relevant because it shows that persistence and uniform change happen lawfully without continuous outside pushing.`, k: "motion aquinas not locomotion change actualization potency act newton inertia" },
    { q: "An essentially ordered series must have a first member, or there's no causality at all.", a: `Grant that the series has a first member. That member can be a fundamental physical entity with intrinsic causal powers. "First member" does not mean "pure act." The argument needs a further, unproven step from "a first member" to "a being with no potentiality at all."`, k: "essentially ordered series per se per accidens first member infinite regress hand stick stone" }
  ],
  sources: [
    "Aquinas, T. Summa Theologiae I, q.2, a.3; Summa Contra Gentiles I.13.",
    "Feser, E. (2017). Five Proofs of the Existence of God. Ignatius Press.",
    "Schmid, J. C. & Linford, D. (2023). Existential Inertia and Classical Theistic Proofs. Springer.",
    "Kenny, A. (1969). The Five Ways: St Thomas Aquinas' Proofs of God's Existence. Routledge.",
    "Oppy, G. (2006). Arguing about Gods, ch. 3.",
    "Mackie, J. L. (1982). The Miracle of Theism. Oxford University Press, ch. 5."
  ],
  keys: "aquinas five ways unmoved mover first mover pure act actuality potency feser thomistic aristotelian argument from motion essentially ordered series sustaining cause",
  rel: ["contingency", "kalam", "divine-simplicity"]
},
{
  id: "fourth-way",
  cat: "god",
  title: "The Fourth Way: Degrees of Perfection",
  who: "Thomas Aquinas, Summa Theologiae I q.2 a.3 (the Fourth Way); Anselm, Monologion 1–4; Peter Kreeft & Ronald Tacelli (argument 4 of their twenty)",
  claim: `We find things that are more and less good, true, and noble. "More" and "less" are said of things as they approach a maximum, as a thing is hotter the nearer it is to the hottest. So there is something that is truest, best, and noblest, and therefore most fully in being. Whatever is maximal in a genus causes everything in that genus, as fire, the hottest thing, causes all heat. So there is something that causes the being, goodness, and every perfection of all things, and this we call God.`,
  form: ["Things exhibit degrees of goodness, truth, and being.", "Degrees imply a maximum against which they are measured.", "The maximum in a genus causes everything in that genus.", "So a maximally perfect being causes all perfections: God."],
  short: `Comparatives don't require an existing superlative: things can be more or less heavy, smelly, or large without a heaviest, smelliest, or largest thing existing. The "hottest thing causes all heat" premise is Aristotelian physics, which is false. The argument works only inside a Neoplatonic metaphysics of "participation" in which goodness and being are degrees of the same thing, and that metaphysics is exactly what's in question.`,
  points: [
    { h: "Comparatives without a maximum", t: `We rank numbers as larger and smaller without there being a largest number. We rank smells as stronger and weaker without a maximally smelly object. A scale of comparison needs a standard or an ordering, not an actual instance at the top. Anthony Kenny (*The Five Ways*, 1969) shows that the inference from "more and less" to "a maximum exists" is invalid on its own terms.` },
    { h: "The physics is obsolete", t: `Aquinas's illustration, that fire is the hottest thing and the cause of all heat, comes from Aristotle (*Metaphysics* II.1). Fire isn't the hottest thing (stellar cores are millions of degrees hotter), and heat isn't caused by participation in a maximally hot thing. It's molecular motion. The premise that the maximum of a genus causes every member of the genus has no modern defender outside Thomism.` },
    { h: "It assumes a contested metaphysics", t: `The argument needs goodness, truth, and being to be "convertible": degrees of the same thing, so that the most good is the most real. That's a Neoplatonic doctrine. Without it, there's no single scale on which a cockroach is "less" than an angel in the relevant sense. Defenders like Feser rely on the full Thomistic framework, which the existential inertia and modal collapse objections challenge (see [[classical-proofs]], [[divine-simplicity]]).` },
    { h: "The gap remains", t: `Even granting a maximum of goodness, nothing shows it's a person, that it created anything, or that it's the God of the Bible. A Platonic Form of the Good would do just as well.` }
  ],
  replies: [
    { q: "You can only call something 'less good' by reference to a perfect standard of goodness.", a: `You can rank things on a scale without the top of the scale being instantiated, as we do with numbers and lengths. And if the standard is an ideal, it's a concept, not necessarily a being. A "perfect circle" is a standard for judging drawn circles, but no perfect circle need exist anywhere.`, k: "less good perfect standard measure goodness reference" }
  ],
  sources: [
    "Aquinas. Summa Theologiae I, q.2, a.3.",
    "Kenny, A. (1969). The Five Ways. Routledge, ch. 5.",
    "Feser, E. (2017). Five Proofs of the Existence of God. Ignatius Press.",
    "Kreeft, P. & Tacelli, R. (1994). Handbook of Christian Apologetics. InterVarsity, ch. 3.",
    "Davies, B. (1992). The Thought of Thomas Aquinas. Oxford University Press."
  ],
  keys: "fourth way degrees of perfection gradation more and less good true noble maximum perfection aquinas hottest standard of goodness",
  rel: ["classical-proofs", "moral-argument", "fifth-way"]
},
{
  id: "fifth-way",
  cat: "god",
  title: "The Fifth Way: Natural Things Act for Ends",
  who: "Thomas Aquinas, Summa Theologiae I q.2 a.3 (the Fifth Way); Edward Feser, Aquinas (2009); Alvin Plantinga's 'Kenny-style teleological argument' (argument G in 'Two Dozen (or so) Theistic Arguments')",
  claim: `Things without intelligence, such as natural bodies, act for an end: they act always or nearly always in the same way to obtain the best result. A match reliably produces fire and not ice, an acorn an oak and not a rose. Something that lacks awareness can't move toward an end unless it's directed by something with awareness and intelligence, as an arrow is directed by an archer. So there's an intelligence by which all natural things are directed to their ends.`,
  form: ["Unintelligent natural things act for ends (are directed toward specific outcomes).", "Whatever lacks intelligence can be directed toward an end only by an intelligence.", "So an intelligence directs all natural things toward their ends: God."],
  short: `Modern physics replaced Aristotle's final causes with laws and initial conditions, and biology explains apparent purposes by natural selection. The remaining kernel, that causes reliably "point" to their typical effects, is captured by the metaphysics of causal powers and dispositions, and philosophers who defend powers (Molnar, Mumford, Bird) argue that such directedness requires no mind. Premise 2 is the whole argument, and it's asserted, not shown.`,
  points: [
    { h: "Final causes left physics for good reasons", t: `Seventeenth-century science made progress by dropping "for the sake of" explanations from physics. Objects follow laws describable without goals. Galileo and Newton didn't need to ask what a falling stone is "for." The Fifth Way's intuition that regular behavior needs a purpose-giver belongs to the Aristotelian picture that this shift replaced.` },
    { h: "Directedness without minds", t: `The most sophisticated version (Feser) says even the simplest causes are "directed": a match is directed toward fire. Contemporary metaphysicians of powers agree that dispositions are directed toward their manifestations. George Molnar (*Powers*, 2003) calls this "physical intentionality," and argues that it's a basic feature of natural properties, needing no mind behind it. Accepting directedness doesn't commit anyone to a director.` },
    { h: "The archer analogy assumes the conclusion", t: `An arrow needs an archer because arrows are artifacts with no internal tendency to fly toward a target. Natural objects have their own causal powers. The analogy treats nature as an artifact, which is the conclusion of the argument, not a premise.` },
    { h: "Biological teleology has a known mechanism", t: `Where nature looks purposive, as with eyes that are "for" seeing, natural selection explains why: traits persist because of their effects on survival and reproduction (Wright, 1973; Millikan, 1984). Philosophers of biology use teleological language freely without invoking a designer.` }
  ],
  replies: [
    { q: "Even laws of nature need something to make things obey them.", a: `On one view, laws are just descriptions of regularities (Humeans). On another, they flow from the intrinsic powers of things (dispositionalists). Neither view needs an external enforcer. Saying a mind "makes things obey" adds a new mystery: how does a non-physical mind push particles?`, k: "laws need enforcer obey laws of nature someone makes" }
  ],
  sources: [
    "Aquinas. Summa Theologiae I, q.2, a.3.",
    "Feser, E. (2009). Aquinas: A Beginner's Guide. Oneworld.",
    "Molnar, G. (2003). Powers: A Study in Metaphysics. Oxford University Press.",
    "Mumford, S. & Anjum, R. L. (2011). Getting Causes from Powers. Oxford University Press.",
    "Wright, L. (1973). 'Functions.' Philosophical Review 82(2): 139–168.",
    "Plantinga, A. (2007). 'Two Dozen (or so) Theistic Arguments.' In Baker (ed.), Alvin Plantinga. Cambridge University Press."
  ],
  keys: "fifth way final causes teleology natural things act for an end directed archer arrow acorn oak intelligence directs nature purpose",
  rel: ["design-intuition", "classical-proofs", "math-and-logic", "proper-function"]
},
{
  id: "neoplatonic-proof",
  cat: "god",
  title: "The Neo-Platonic Proof: Composite Things Need a Simple One",
  who: "Plotinus, Enneads; Edward Feser, Five Proofs of the Existence of God (2017), ch. 2",
  claim: `Everything we experience is composed of parts: physical parts, or form and matter, or essence and existence. A composite thing depends on something to bring and hold its parts together. That dependence can't regress infinitely in a series of things that exist right now, so there must be something with no parts at all, the absolutely simple One, which causes the unity of everything else. Such a being is unique, immutable, eternal, and the source of all being: God.`,
  short: `The argument depends on two contested premises: that composite things need a continuous cause of their composition, and that such a series of causes must end in something absolutely simple. Existential inertia denies the first, and the second leads into the paradoxes of divine simplicity, including the modal collapse that makes everything necessary. And it's unclear why the "One" of Plotinus, which he held to be impersonal and beyond thought, should be the personal God of Christianity.`,
  points: [
    { h: "Composites don't obviously need sustaining", t: `A molecule's atoms are held together by electromagnetic forces among the parts themselves. Why must there also be something outside, right now, keeping the composite together? The existential inertia thesis says things persist unless destroyed (Schmid & Linford, 2023; see [[classical-proofs]]).` },
    { h: "Simplicity is the problem, not the answer", t: `An absolutely simple being, with no distinction between its essence, existence, knowledge, and will, faces the objections in [[divine-simplicity]]: it seems to be a property rather than a person, and its necessary act of creating makes creation necessary.` },
    { h: "Plotinus's One isn't the biblical God", t: `For Plotinus, the One is beyond being and thought; it doesn't know, choose, or love in any personal sense, and the world emanates from it necessarily. The argument, if it worked, would support Neoplatonism, not Christianity.` }
  ],
  replies: [],
  sources: [
    "Plotinus. Enneads V.4; VI.9.",
    "Feser, E. (2017). Five Proofs of the Existence of God, ch. 2.",
    "Schmid, J. C. & Linford, D. (2023). Existential Inertia and Classical Theistic Proofs. Springer.",
    "Gerson, L. (1994). Plotinus. Routledge."
  ],
  keys: "neoplatonic proof composite parts simple one plotinus feser composition requires cause absolutely simple being",
  rel: ["classical-proofs", "divine-simplicity", "contingency"]
},
{
  id: "interacting-whole",
  cat: "god",
  title: "The World as an Interacting Whole",
  who: "Peter Kreeft & Ronald Tacelli, Handbook of Christian Apologetics (1994), argument 8",
  claim: `The universe isn't a collection of separate things but a single, coordinated system. Its parts interact according to the same laws everywhere, forming an intelligible order in which everything is related to everything else. Such a unified, interacting order can't be explained by any of its parts, each of which is only one element in the system. It requires an intelligent cause outside the system that ordered the whole.`,
  short: `Global order emerges from local rules all the time: crystals, galaxies, weather systems, and ecosystems are coordinated wholes that arise from parts following simple laws. The deepest "unity" of the universe, the same laws everywhere, is either a brute fact or explained by physics (symmetry principles, a common origin in the early universe). Positing a mind to explain the unity of all things moves the unity into the mind, where it's just as unexplained.`,
  points: [
    { h: "Order from local rules", t: `Snowflakes, convection cells, flocking birds, and spiral galaxies show coordinated global patterns produced by parts following local rules, with no outside organizer. The study of complex systems and self-organization (Prigogine; Kauffman, *At Home in the Universe*, 1995) is built on this.` },
    { h: "Uniform laws have physical explanations", t: `That the same laws hold everywhere is connected to symmetries (Noether's theorem links conservation laws to symmetries of space and time) and to the universe's common origin in a hot, dense state. Where physics stops, the uniformity is a basic fact, which theists also need: God's single nature is the brute fact on their account.` },
    { h: "A designing mind doesn't help", t: `The theist explains the unity of the world by a single mind. But a mind that thinks the whole universe at once is at least as unified and complex as the universe itself, and its unity is left unexplained. This is the regress Hume raised in the *Dialogues* (Part IV).` }
  ],
  replies: [],
  sources: [
    "Kreeft, P. & Tacelli, R. (1994). Handbook of Christian Apologetics, ch. 3.",
    "Kauffman, S. (1995). At Home in the Universe. Oxford University Press.",
    "Hume, D. (1779). Dialogues Concerning Natural Religion, Part IV.",
    "Wilczek, F. (2015). A Beautiful Question: Finding Nature's Deep Design. Penguin."
  ],
  keys: "world as interacting whole unified system universe order everything related interconnected coordinated whole needs cause",
  rel: ["design-intuition", "math-and-logic", "fine-tuning"]
},
{
  id: "fine-tuning",
  cat: "god",
  title: "The Fine-Tuning Argument",
  who: "Robin Collins; Luke Barnes & Geraint Lewis, A Fortunate Universe (2016); Richard Swinburne; William Lane Craig",
  claim: `The constants and initial conditions of physics, such as the cosmological constant, the strength of gravity, the strong nuclear force, and the initial entropy, fall within extraordinarily narrow life-permitting ranges. Change them slightly and there would be no stars, no chemistry, no life. This is far more probable if a designer intended life than if the values arose by chance. Physical necessity can't explain it and chance is absurdly unlikely, so design is the best explanation.`,
  form: ["The fine-tuning of the universe is due to physical necessity, chance, or design.", "It is not due to physical necessity or chance.", "Therefore it is due to design."],
  short: `Fine-tuning is a real feature of current physics, but the inference to God fails at four points. There is no well-defined probability measure over the possible values of the constants: the normalization problem. Observation selection effects mean we could only ever observe a life-permitting universe. Theism makes no specific prediction about which constants God would choose, so it cannot "expect" ours. And the universe is not optimized for life at all: it is overwhelmingly lethal and spends nearly all its resources on things that are irrelevant to us. On a careful Bayesian analysis (Ikeda & Jefferys), observing a life-friendly universe cannot count against naturalism.`,
  points: [
    { h: "The normalization problem", t: `To say a constant is "improbably" fine-tuned, you need a probability distribution over its possible values. For many constants the possible range is infinite. A uniform distribution over an infinite range cannot be normalized: every finite interval gets probability zero, so "fine-tuned" and "coarse-tuned" ranges come out equally improbable. McGrew, McGrew and Vestrup (*Mind*, 2001) and Colyvan, Garfield and Priest (*Synthese*, 2005) press this objection. Without a principled measure, "1 in 10^120" is a number without a meaning.` },
    { h: "Observation selection effects", t: `We can only find ourselves in a universe compatible with observers. Whatever the explanation of the constants, P(we observe life-permitting constants | we exist) = 1. Elliott Sober (2003, 2004) frames this as the firing-squad problem: a correct likelihood comparison has to conditionalize on our existence, and once we do, the observation discriminates far less than the argument assumes.` },
    { h: "Theism doesn't predict fine-tuning", t: `An omnipotent God doesn't *need* finely tuned constants. He could sustain life in any universe, by miracle if necessary, or make physics robustly life-friendly. Fine-tuning is only evidence for God if God would be likely to create a universe where life *hangs by a thread under natural law*. That expectation is not derived from theism. It is read off the data afterward. Hans Halvorson, a Christian philosopher of physics at Princeton, presses a version of this: a God who wanted a good universe could just as well have set the chances to favor one, so the fine-tuning argument undermines itself ("A Theological Critique of the Fine-Tuning Argument," OUP, 2018).` },
    { h: "The Bayesian result: life is not evidence against naturalism", t: `Ikeda and Jefferys show that if naturalism allows life only in a life-friendly universe, then observing that the universe is life-friendly, given that life exists, cannot lower the probability of naturalism: P(N | F & L) ≥ P(N | L). What *would* have counted for the supernatural is life thriving in a universe where physics made it impossible. Fine-tuning is the observation naturalism *requires*.` },
    { h: "The universe is not designed for life", t: `More than 99.9999% of the observable universe is lethal to life: vacuum, radiation, stellar interiors. Life on Earth occupies a thin film on one planet, around one of roughly 10^22–10^24 stars, for a sliver of cosmic time, and will be destroyed when the Sun expands. If the universe were "tuned for life," it is tuned remarkably badly. What it is tuned for, if anything, is black holes and stellar furnaces. Lee Smolin's cosmological natural selection even builds a testable model around black hole production.` },
    { h: "Many constants are not finely tuned", t: `Physicists such as Fred Adams (*Physics Reports*, 2019, "The degree of fine-tuning in our universe — and others") show that working stars and nuclear chemistry exist across wide ranges of several parameters, often spanning orders of magnitude. Varying several constants at once, rather than one at a time with the rest held fixed, opens up large life-permitting regions (Stenger, *The Fallacy of Fine-Tuning*, 2011; Aguirre's "cold big bang" universes). Proponents such as Luke Barnes contest some of these results, so this is an active technical debate, not a settled fact in the theist's favor.` },
    { h: "Physical alternatives are live research", t: `A deeper theory might fix the constants, as when quantum mechanics explained the "fine-tuned" sizes of atoms. Eternal inflation with a string landscape could produce many regions with different constants, and selection effects would then explain ours. Neither is proven. But "we don't yet know" is not evidence for a designer. Every past "it can only be design" in physics, from planetary orbits (Newton thought God corrected them) to the Solar System's stability (later explained by Laplace), was eventually displaced by a natural explanation.` },
    { h: "Why life, and why us?", t: `Defining the target as "life" is itself a choice. The constants also permit black holes, neutron stars, and complex chemistry with no life at all. Choose a different target and you can "prove" the universe was designed for any feature it happens to have. This is the "sharpshooter" problem: drawing the bullseye after the arrow lands.` }
  ],
  replies: [
    { q: "The multiverse is just an atheist dodge. It's unfalsifiable and multiplies entities.", a: `The argument against fine-tuning does not need the multiverse. The normalization and selection-effect problems stand without it. Where multiverse models do appear, they are consequences of theories (inflation, the string landscape) proposed for other reasons, not inventions to avoid God. And "unfalsifiable" applies at least as strongly to an omnipotent designer whose preferences are inferred from the data they are supposed to explain. As for multiplying entities, theism adds a new *kind* of entity, a disembodied mind. A multiverse adds more of a kind we already know exists.`, k: "multiverse dodge unfalsifiable many universes atheist excuse string landscape" },
    { q: "If you were facing a firing squad and all fifty shooters missed, you'd suspect it was rigged, not shrug that you couldn't observe otherwise.", a: `That analogy (Leslie, Swinburne) works because we know firing squads exist, we know how often riflemen miss, and we know people rig executions. Every probability is grounded in experience. None of that holds for universe-generation: we have no frequencies, no measure, and no independent knowledge of universe-designers and their habits. Change the case to "you wake up having always existed in a room, and find the room is compatible with your existence." There is nothing surprising there to explain.`, k: "firing squad analogy leslie swinburne survive surprised rigged" },
    { q: "The cosmological constant is tuned to 1 part in 10^120. That can't be chance.", a: `The 10^120 figure is the mismatch between a naive quantum field theory estimate of vacuum energy and the observed value. That mismatch is widely recognized as a failure of our theory, called "the worst prediction in physics," not as a measured probability. It tells us we don't understand vacuum energy. To turn it into a probability you need a measure over possible values, and there is no principled one. And if God set it, why set it to a value that makes the universe accelerate into eventual cold death for all life?`, k: "cosmological constant 10^120 one part in dark energy vacuum energy precision" },
    { q: "Penrose calculated the odds of our low-entropy beginning at 1 in 10^10^123.", a: `Penrose's number is a statement of the *past hypothesis* puzzle, which Penrose himself uses to motivate a physical theory, conformal cyclic cosmology, not God. It depends on how phase space is measured, which is contested. And if God chose the initial state, theism must explain why he chose one with an extremely low entropy that guarantees heat death, rather than the many other ways of making a life-friendly universe.`, k: "penrose entropy 10^10^123 initial conditions low entropy" }
  ],
  sources: [
    "Collins, R. (2009). 'The Teleological Argument.' In Blackwell Companion to Natural Theology.",
    "Barnes, L. & Lewis, G. (2016). A Fortunate Universe: Life in a Finely Tuned Cosmos. Cambridge University Press.",
    "McGrew, T., McGrew, L. & Vestrup, E. (2001). 'Probabilities and the Fine-Tuning Argument: A Sceptical View.' Mind 110: 1027–1037.",
    "Colyvan, M., Garfield, J. & Priest, G. (2005). 'Problems with the Argument from Fine Tuning.' Synthese 145: 325–338.",
    "Sober, E. (2003). 'The Design Argument.' In Manson (ed.), God and Design. Routledge.",
    "Ikeda, M. & Jefferys, W. (2006). 'The Anthropic Principle Does Not Support Supernaturalism.' In Martin & Monnier (eds.), The Improbability of God. Prometheus.",
    "Halvorson, H. (2018). 'A Theological Critique of the Fine-Tuning Argument.' In Benton, Hawthorne & Rabinowitz (eds.), Knowledge, Belief, and God. Oxford University Press.",
    "Adams, F. C. (2019). 'The Degree of Fine-Tuning in our Universe — and Others.' Physics Reports 807: 1–111.",
    "Stenger, V. (2011). The Fallacy of Fine-Tuning. Prometheus.",
    "Landsman, K. (2016). 'The Fine-Tuning Argument: Exploring the Improbability of Our Existence.' In The Challenge of Chance. Springer."
  ],
  keys: "fine tuning fine-tuned constants physics cosmological constant gravity strong force life permitting goldilocks just right universe designed for life precise odds anthropic",
  rel: ["design-intuition", "cumulative-case", "big-bang"]
},
{
  id: "design-intuition",
  cat: "god",
  title: "Paley's Watch and the Intuition of Design",
  who: "William Paley, Natural Theology (1802); popular apologetics ('a painting needs a painter'; 'look at the trees')",
  claim: `If you found a watch on a heath, you would infer a watchmaker from its intricate arrangement of parts for a purpose. Living things and the universe are far more intricate than any watch. A painting needs a painter, a building needs a builder, and creation needs a Creator. Just look at the beauty and order of nature.`,
  short: `Paley's argument was a reasonable inference in 1802. Darwin gave a natural mechanism for the appearance of design: variation plus selection, accumulated over deep time. We recognize human artifacts as designed because we know what humans make and how, and because artifacts contrast with nature. The intuition that living things are designed is a well-studied cognitive bias ("promiscuous teleology"), not a reliable perception.`,
  points: [
    { h: "Darwin answered Paley", t: `Natural selection is a mechanism that produces adaptation without foresight. Darwin had studied Paley at Cambridge and admired him, and wrote that Paley's argument "fails, now that the law of natural selection has been discovered" (*Autobiography*). The appearance of design in organisms is real. Its cause is cumulative selection, which can be observed in the lab, in the field (Darwin's finches; Grant & Grant), and in computer simulations.` },
    { h: "We infer watchmakers from knowledge of watchmakers", t: `We know the watch was made because we know who makes watches, how, and why. We have seen watch factories. Hume's point: the design inference is an argument from analogy, and analogies are only as strong as our experience of the cause. We have no experience of universe-makers. And the watch stands out on the heath precisely *because* the heath (nature) is not like it.` },
    { h: "Design looks like history, not engineering", t: `Real biological "design" carries the marks of tinkering. The recurrent laryngeal nerve loops down around the aorta and back up, which makes it about 4.5 meters long in a giraffe, a relic of our fish ancestry. The vertebrate retina is wired backwards, creating a blind spot. The human birth canal passes through a pelvis built for walking, and the male urethra passes through the prostate. These are not choices an omniscient engineer would make. They are compromises a historical process would leave behind.` },
    { h: "We are built to see design", t: `Developmental psychologist Deborah Kelemen found that children (and adults under time pressure) attribute purpose to natural objects, saying that rocks are "pointy so animals can scratch on them." She calls this "promiscuous teleology." Agency detection is biased toward false positives because, in evolutionary terms, mistaking wind for a predator costs little while the reverse can be fatal (see [[csr]]). An intuition we know to be systematically over-sensitive is weak evidence.` },
    { h: "Whose design?", t: `Even if design were granted, nothing would follow about the number, goodness, or identity of designers. Hume asked why not a committee of gods, an infant deity's first botched attempt, or an aged deity's last (*Dialogues*, V). The parasitic wasps that eat caterpillars alive from the inside, which troubled Darwin, are also "designs." See [[animal-suffering]].` }
  ],
  replies: [
    { q: "A painting needs a painter and a building needs a builder. Creation needs a Creator.", a: `That assumes the conclusion by calling the universe "creation." Paintings and buildings are known to be made by humans. Snowflakes, crystals, and river deltas are intricate and patterned, but come from natural processes. The question is which category living things and the universe belong to, and the evidence (fossils, genetics, observed selection) puts life in the snowflake category, not the painting one.`, k: "painting needs painter building builder creation creator look around trees" },
    { q: "Just look at the trees, the stars, a newborn baby. How can you not see God?", a: `Beauty and complexity are real, and they are moving. But the same nature includes malaria, childhood cancer, and parasites that blind children (*Onchocerca volvulus*, river blindness). If the beautiful parts are evidence of a good designer, the horrific parts are evidence too. Natural processes explain both without anyone choosing them.`, k: "look at trees nature beauty stars baby how can you not see god creation obvious romans 1" }
  ],
  sources: [
    "Paley, W. (1802). Natural Theology.",
    "Hume, D. (1779). Dialogues Concerning Natural Religion, Parts II–VIII.",
    "Darwin, C. (1859). On the Origin of Species; (1887) Autobiography.",
    "Dawkins, R. (1986). The Blind Watchmaker. Norton.",
    "Kelemen, D. (2004). 'Are Children \"Intuitive Theists\"? Reasoning about Purpose and Design in Nature.' Psychological Science 15(5): 295–301.",
    "Grant, P. & Grant, R. (2014). 40 Years of Evolution: Darwin's Finches on Daphne Major Island. Princeton University Press.",
    "Coyne, J. (2009). Why Evolution Is True. Viking."
  ],
  keys: "paley watchmaker watch design designer painting painter building builder creation creator look at trees nature complexity order purpose",
  rel: ["fine-tuning", "irreducible-complexity", "evolution", "csr", "animal-suffering"]
},
{
  id: "irreducible-complexity",
  cat: "god",
  title: "Irreducible Complexity",
  who: "Michael Behe, Darwin's Black Box (1996); The Edge of Evolution (2007); Darwin Devolves (2019); the Discovery Institute",
  claim: `Some biological systems, such as the bacterial flagellum, the blood-clotting cascade, and the immune system, are irreducibly complex. They consist of several interacting parts, and removing any one stops the system working. Such systems could not be built gradually by natural selection, since precursors missing a part would have no function to select. They must have been designed.`,
  short: `Irreducible complexity was tested in court and in the lab and failed. The precursors to the systems Behe named have been identified: parts were co-opted from other functions (exaptation), and scaffolding was later removed. In *Kitzmiller v. Dover* (2005), Behe conceded under oath that his definition of science would include astrology. The judge concluded that intelligent design is not science. Biologists such as Kenneth Miller, a practicing Catholic, led the refutation.`,
  points: [
    { h: "Exaptation: parts get borrowed", t: `Evolution does not build a flagellum from scratch for the purpose of swimming. Its components evolved for other functions and were combined. A subset of flagellar proteins forms the Type III secretion system, a functioning molecular syringe that bacteria use to inject toxins. So a "part" of the flagellum works in its own right. Studies by Pallen and Matzke (2006, *Nature Reviews Microbiology*) and Liu and Ochman (2007) trace flagellar proteins to homologues used elsewhere in the cell.` },
    { h: "Scaffolding and gradual interdependence", t: `H. J. Muller described as early as 1918 how evolution produces "interlocking complexity": a part that is first merely helpful becomes essential once other parts adapt to it. Systems that are irreducible *now* can have reducible *histories*. An arch of stones is irreducible (remove any stone and it falls), yet it can be built with a scaffold of rubble that is later removed.` },
    { h: "The clotting cascade and the immune system", t: `Russell Doolittle's work traces the blood-clotting cascade through gene duplication and divergence. Puffer fish lack several factors humans need, and dolphins lack Factor XII, so the cascade is not irreducible across species. At the Dover trial, Behe claimed there were no evolutionary explanations of the immune system and was presented with 58 peer-reviewed publications and several textbooks on its evolution, which he said were "not good enough." The adaptive immune system's origin through the RAG transposon has since been well documented (Huang et al., *Cell*, 2016).` },
    { h: "Kitzmiller v. Dover", t: `In 2005, a Pennsylvania school board required intelligent design to be presented in biology classes. After a six-week trial, Judge John E. Jones III, a George W. Bush appointee and a churchgoer, ruled that ID "is not science" and "cannot uncouple itself from its creationist, and thus religious, antecedents." He found that its claims of irreducible complexity had been "refuted in peer-reviewed research papers." Evidence at trial showed that the ID textbook *Of Pandas and People* had been edited by replacing "creationists" with "design proponents," producing the transitional form "cdesign proponentsists."` },
    { h: "Even success wouldn't reach God", t: `A failure of evolutionary explanation for some system would be a gap. It would not identify a designer, still less an omnipotent, good one. ID proponents conspicuously decline to say who the designer is, what it did, when, or how. That is why ID produces no research program or predictions, and why Behe's own *Edge of Evolution* was criticized in *Science* and *Nature* reviews for errors in population genetics.` }
  ],
  replies: [
    { q: "Half a flagellum is useless, so it couldn't be selected for.", a: `The parts were not "half a flagellum." They were complete tools for other jobs. The Type III secretion system uses a subset of the flagellar proteins as an injection needle. Evolution works by borrowing working parts, not by building toward a goal.`, k: "half a flagellum useless half an eye intermediate stages no function" },
    { q: "The chance of a protein forming by chance is 1 in 10^77 (Douglas Axe).", a: `Axe's estimate concerns a specific fold of one enzyme arising from a random sequence in a single step. Evolution does not search sequence space at random; it modifies existing functional proteins. Studies of random sequence libraries (Keefe & Szostak, 2001, *Nature*) found ATP-binding function at a frequency of roughly 1 in 10^11, far more common than Axe's calculation implies. Proteins also tolerate a great deal of variation.`, k: "protein chance 10^77 axe random sequence improbable fold" }
  ],
  sources: [
    "Behe, M. (1996). Darwin's Black Box. Free Press.",
    "Kitzmiller v. Dover Area School District, 400 F. Supp. 2d 707 (M.D. Pa. 2005).",
    "Miller, K. R. (1999). Finding Darwin's God. HarperCollins; (2008) Only a Theory. Viking.",
    "Pallen, M. & Matzke, N. (2006). 'From The Origin of Species to the origin of bacterial flagella.' Nature Reviews Microbiology 4: 784–790.",
    "Doolittle, R. F. (2009). 'Step-by-step evolution of vertebrate blood coagulation.' Cold Spring Harbor Symposia on Quantitative Biology 74: 35–40.",
    "Huang, S. et al. (2016). 'Discovery of an Active RAG Transposon Illuminates the Origins of V(D)J Recombination.' Cell 166(1): 102–114.",
    "Keefe, A. & Szostak, J. (2001). 'Functional proteins from a random-sequence library.' Nature 410: 715–718.",
    "Forrest, B. & Gross, P. (2004). Creationism's Trojan Horse. Oxford University Press."
  ],
  keys: "irreducible complexity behe flagellum bacterial motor blood clotting immune system intelligent design id mousetrap discovery institute",
  rel: ["evolution", "dna-information", "design-intuition", "origin-of-life"]
},
{
  id: "dna-information",
  cat: "god",
  title: "DNA, Information, and Specified Complexity",
  who: "Stephen Meyer, Signature in the Cell (2009); William Dembski, The Design Inference (1998), No Free Lunch (2002)",
  claim: `DNA is a code, a digital information storage system. In all our experience, codes and information come only from minds. "Specified complexity," a pattern that is both improbable and conforms to an independent specification, is a reliable marker of design, and living systems are full of it. Natural processes cannot generate new information. So the information in DNA points to an intelligent cause.`,
  short: `"DNA is a code" is an analogy, not a discovery that DNA was written. Natural processes generate information all the time in every technical sense: Shannon information rises with mutation, and selection increases functional information in experiments we can watch. Dembski's "specified complexity" has never been successfully calculated for any real biological system. Mathematicians (Elsberry & Shallit, 2011; Wolpert, the author of the No Free Lunch theorems) have shown that his formal claims fail.`,
  points: [
    { h: "Information arises naturally, and we can watch it happen", t: `Gene duplication followed by divergence creates new genes with new functions. This is observed (e.g., the antifreeze glycoproteins in Antarctic fish, evolved from non-coding and pancreatic DNA; Chen et al., 1997). Richard Lenski's long-term *E. coli* experiment documented the evolution of aerobic citrate use after more than 30,000 generations, with the mutations involved identified (Blount et al., 2008, 2012). Nylon-digesting bacteria evolved enzymes for a substance that did not exist before 1935.` },
    { h: "Specified complexity has never been calculated", t: `To apply Dembski's criterion, you must calculate the probability of a structure arising by *all* relevant natural processes, including selection. Dembski calculates only the probability of the structure arising by pure chance in one step, which nobody proposes. Elsberry and Shallit (*Synthese*, 2011) showed the concept is ill-defined and inconsistently applied. David Wolpert, co-author of the No Free Lunch theorems, called Dembski's use of them "written in jello," because the theorems concern averages over all possible fitness landscapes, not the structured landscapes of real biology.` },
    { h: "'All codes come from minds' begs the question", t: `Every code we know was made by a mind *except the genetic code*, which is the case in dispute. Inferring from "all human codes have human authors" to "the genetic code has an author" assumes the conclusion. The genetic code's structure also bears the marks of history, not design: it is near-universal with known variant codes (mitochondria, some ciliates), its assignments reflect stereochemical and coevolutionary origins (Koonin & Novozhilov, 2009), and it is "frozen" in a way consistent with an accident of early history.` },
    { h: "The genome looks unedited", t: `If DNA were engineered text, we would not expect most of the human genome to be transposable elements and their decayed remnants (about 45%), broken copies of genes (pseudogenes such as GULO, the vitamin C gene we share in a broken state with other primates), and endogenous retroviruses at the same locations as in chimpanzees. The onion genome is about five times larger than ours. A "signature in the cell" is a strange name for so much evident copying error.` }
  ],
  replies: [
    { q: "Mutations only destroy information. They never create it.", a: `Duplication plus mutation creates new genes. Observed examples include antifreeze proteins, nylonase, citrate metabolism in Lenski's *E. coli*, and the many gene families that arose by duplication (globins, opsins, olfactory receptors). Under any formal measure, Shannon or Kolmogorov, a duplication followed by divergence increases information.`, k: "mutations destroy information never create new information loss degrade" },
    { q: "Bill Gates said DNA is like a software program, but far more advanced.", a: `An analogy from a software executive is not an argument. DNA is like code in some respects (discrete symbols, translation rules) and unlike it in others (massive redundancy, no modular design, legacy junk, error-prone copying). What matters is the evidence about where the sequences came from, and that evidence (phylogeny, shared errors, observed evolution) points to descent with modification.`, k: "bill gates dna software program code computer language" }
  ],
  sources: [
    "Meyer, S. (2009). Signature in the Cell. HarperOne.",
    "Dembski, W. (1998). The Design Inference. Cambridge University Press.",
    "Elsberry, W. & Shallit, J. (2011). 'Information Theory, Evolutionary Computation, and Dembski's Complex Specified Information.' Synthese 178(2): 237–270.",
    "Wolpert, D. (2003). 'William Dembski's Treatment of the No Free Lunch Theorems Is Written in Jello.' Review essay.",
    "Blount, Z., Borland, C. & Lenski, R. (2008). 'Historical contingency and the evolution of a key innovation in an experimental population of E. coli.' PNAS 105(23): 7899–7906.",
    "Chen, L., DeVries, A. & Cheng, C. (1997). 'Evolution of antifreeze glycoprotein gene from a trypsinogen gene in Antarctic notothenioid fish.' PNAS 94(8): 3811–3816.",
    "Koonin, E. & Novozhilov, A. (2009). 'Origin and evolution of the genetic code: the universal enigma.' IUBMB Life 61(2): 99–111."
  ],
  keys: "dna code information specified complexity meyer dembski signature in the cell genetic code language software information only from mind",
  rel: ["irreducible-complexity", "origin-of-life", "evolution"]
},
{
  id: "origin-of-life",
  cat: "god",
  title: "The Origin of Life Is Impossible Without God",
  who: "James Tour (Rice University); Stephen Meyer; Fred Hoyle's 'tornado in a junkyard' (1981)",
  claim: `Even the simplest cell is fantastically complex. The chance assembly of a functional cell from chemicals is like a tornado assembling a Boeing 747 from a junkyard (Hoyle). Origin-of-life research has failed for seventy years, and chemists like James Tour say researchers are "clueless." Life coming from non-life (abiogenesis) has never been observed. A designer is the only reasonable explanation.`,
  short: `Nobody proposes that a modern cell assembled by chance. Origin-of-life research studies stepwise chemical pathways, and has made real progress: prebiotic synthesis of nucleotides, self-replicating and evolving RNA, and self-assembling protocells. The field has open problems, and its researchers say so openly. But "we don't yet know how" is a gap. It is not evidence for a designer, still less for a specific God.`,
  points: [
    { h: "The 747 analogy attacks a position no one holds", t: `Hoyle's analogy assumes that life must appear all at once, fully formed. Every origin-of-life model is incremental: simple self-replicating molecules, then selection among replicators, then encapsulation, then metabolism, with each stage building on the last. Probability calculations for random one-step assembly are irrelevant to processes that involve selection and chemistry, which is not random.` },
    { h: "Real progress", t: `Powner, Gerland and Sutherland (*Nature*, 2009) achieved prebiotic synthesis of activated pyrimidine ribonucleotides under plausible early-Earth conditions, solving a problem long considered intractable. Patel et al. (2015) showed that precursors of nucleotides, amino acids, and lipids can arise from a common cyanosulfidic chemistry. In 2024, Papastavrou, Horning and Joyce (*PNAS*) reported an RNA polymerase ribozyme that replicated another functional RNA with enough fidelity for Darwinian evolution, and new, more easily replicated variants emerged during the experiment. Szostak's lab has shown that fatty-acid vesicles grow and divide spontaneously.` },
    { h: "Tour's criticism is about the state of the field, not about God", t: `James Tour is a synthetic chemist who emphasizes, with some justice, that the field has unsolved problems and that popular reports overstate results. But the conclusion that follows from "we don't yet know how life began" is "we don't yet know how life began," not "therefore God." Many researchers in the field publicly dispute his characterizations, and his critiques do not include an alternative research program.` },
    { h: "God-of-the-gaps has a bad track record", t: `The origin of species, the formation of the Solar System, the growth of embryos, the cause of disease, and the source of lightning were all once treated as places where only God could explain the facts. Each gap closed with a natural explanation. The probability that this particular gap is different, and different in a way that points to the Christian God, is low by simple induction on the history of science.` },
    { h: "Life's chemistry looks unplanned", t: `Life uses the most cosmically abundant elements (H, C, N, O), common prebiotic molecules, and chirality that probably arose from an early symmetry-breaking event. Its core metabolism (the reverse Krebs cycle and acetyl-CoA pathway) resembles geochemistry at hydrothermal vents (Martin & Russell; Lane). That pattern suggests life emerged from Earth's chemistry, not that it was imported from a mind.` }
  ],
  replies: [
    { q: "Life has never been created in a lab, so abiogenesis is just faith.", a: `Plate tectonics has never been reproduced in a lab either. Historical sciences infer past processes from present evidence and partial experiments. Each step of the proposed pathways is being tested experimentally, with documented successes. The alternative, "a mind did it in an unspecified way," has made no experimental predictions at all.`, k: "never created in lab abiogenesis faith never observed life from non-life pasteur" },
    { q: "Pasteur proved life only comes from life.", a: `Pasteur showed that microbes do not spontaneously arise *in modern broth within days*. That says nothing about chemistry on an early Earth with no oxygen, no competing life eating the precursors, and hundreds of millions of years available.`, k: "pasteur spontaneous generation life only from life law of biogenesis" }
  ],
  sources: [
    "Powner, M., Gerland, B. & Sutherland, J. (2009). 'Synthesis of activated pyrimidine ribonucleotides in prebiotically plausible conditions.' Nature 459: 239–242.",
    "Patel, B. et al. (2015). 'Common origins of RNA, protein and lipid precursors in a cyanosulfidic protometabolism.' Nature Chemistry 7: 301–307.",
    "Papastavrou, N., Horning, D. & Joyce, G. (2024). 'RNA-catalyzed evolution of catalytic RNA.' PNAS 121(11): e2321592121.",
    "Szostak, J. (2017). 'The Narrow Road to the Deep Past: In Search of the Chemistry of the Origin of Life.' Angewandte Chemie 56(37): 11037–11043.",
    "Lane, N. (2015). The Vital Question. Norton.",
    "Hoyle, F. (1981). 'Hoyle on Evolution.' Nature 294: 105."
  ],
  keys: "origin of life abiogenesis first cell tornado junkyard 747 hoyle james tour life from non-life chemistry rna world primordial soup",
  rel: ["dna-information", "irreducible-complexity", "evolution"]
},
{
  id: "ontological",
  cat: "god",
  title: "The Ontological Argument",
  who: "Anselm, Proslogion II–III (1078); Descartes, Meditation V; Alvin Plantinga, The Nature of Necessity (1974); Kurt Gödel's ontological proof",
  claim: `God is "that than which nothing greater can be conceived." A being that exists in reality is greater than one that exists only in the mind. So if God existed only in the mind, we could conceive of something greater, which is a contradiction. So God exists in reality. Plantinga's modal version: it is possible that a maximally great being exists, meaning a being with maximal excellence in every possible world. If that is possible, then it exists in some possible world. A being that exists necessarily in some world exists in all worlds, including the actual one.`,
  form: ["It is possible that a maximally great being exists.", "If it is possible, a maximally great being exists in some possible world.", "If it exists in some possible world, it exists in every possible world (by definition of maximal greatness).", "Therefore a maximally great being exists in the actual world."],
  short: `The modal version is valid, but its key premise, "a maximally great being is *possible*," is equivalent in S5 modal logic to "a maximally great being *exists*." Accepting it means accepting the conclusion in advance. A perfectly symmetric argument shows that *no* maximally great being exists, starting from the equally plausible premise "it is possible that no maximally great being exists." Plantinga himself conceded that his argument does not *prove* God's existence. It shows only that belief in God is not irrational for someone who already accepts the premise.`,
  points: [
    { h: "Existence is not a great-making property", t: `Kant's objection (*Critique of Pure Reason*, A598/B626): "existence" is not a real predicate that adds to the concept of a thing. A hundred real dollars contain no more dollars than a hundred imagined ones. Anselm's version needs existence to be a perfection that a concept can lack, and that treats a property of concepts (being instantiated) as if it were a property of things.` },
    { h: "The parodies: Gaunilo's island and its descendants", t: `Gaunilo (c. 1078) argued the same way for a "lost island" greater than any conceivable island. Anselm replied that the argument works only for necessary beings. But the modal form simply builds necessity into the definition, so you can define a "maximally great pizza" or, more seriously, a "necessarily existing evil god," and the pattern of inference goes through. When an argument form proves too much, it is defective.` },
    { h: "The reverse ontological argument", t: `In the modal logic S5, which the argument relies on: if it is *possible* that a necessary being does *not* exist, then it does not exist. "Possibly, no maximally great being exists" seems at least as intuitive as "possibly, one does." Imagining a world of just one electron and nothing else seems coherent. The argument therefore reduces to a stalemate of modal intuitions, and you only reach God if you already believe in God (Rowe, 1976; Oppy, 1995).` },
    { h: "Plantinga's own assessment", t: `Plantinga wrote that the argument does not "establish" God's existence. It shows that belief in God is rationally acceptable for anyone who accepts its central premise (*The Nature of Necessity*, 1974, p. 221). Even its most sophisticated defender does not claim what popular apologists claim for it.` },
    { h: "Gödel's proof collapses modality", t: `Gödel's formal ontological proof is valid in its system, but Jordan Howard Sobel (1987) showed that its axioms entail *modal collapse*: every truth becomes a necessary truth, so nothing could have been otherwise. Repaired versions (Anderson, Fitting) avoid that collapse by adopting axioms whose plausibility is just as contested. A computer-assisted check (Benzmüller & Woltzenlogel Paleo, 2014) confirmed the inconsistency of one variant and the modal collapse.` },
    { h: "Is maximal greatness even coherent?", t: `The possibility premise also requires that the great-making properties be *jointly* coherent: omnipotence with omniscience, perfect goodness with perfect freedom, timelessness with personhood. Each pairing has well-known problems (see [[omnipotence]], [[foreknowledge]], [[perfect-freedom]], [[timeless-god]]). If the bundle is incoherent, a maximally great being is not even possible, and the argument fails at its first step.` }
  ],
  replies: [
    { q: "The possibility premise is very modest. Surely God is at least possible.", a: `In S5, "possibly necessary" collapses into "necessary." So the "modest" premise is not modest at all: granting it means granting that God actually exists. Our everyday sense of "possible" means "for all I know." That is epistemic possibility, and it does not support the metaphysical possibility the argument needs. In the epistemic sense, a world with no God is equally "possible."`, k: "possibility premise modest possible god possibly exists s5 maximally great" },
    { q: "Parodies like the perfect island fail because islands can't have intrinsic maxima.", a: `Fine, then use parodies built from properties that do have intrinsic maxima, such as the "maximally evil" being or a "necessarily existing non-God" (a world-feature that rules God out). The underlying problem is that the argument form turns any definition that includes necessary existence into a proof, and the conflicting proofs cannot all succeed.`, k: "gaunilo island parody intrinsic maximum perfect island pizza" }
  ],
  sources: [
    "Anselm. Proslogion II–III; Gaunilo, 'On Behalf of the Fool.'",
    "Kant, I. (1781/1787). Critique of Pure Reason A592/B620–A602/B630.",
    "Plantinga, A. (1974). The Nature of Necessity. Oxford: Clarendon, ch. 10.",
    "Rowe, W. (1976). 'Modal Versions of the Ontological Argument.' In Pojman (ed.), Philosophy of Religion.",
    "Oppy, G. (1995). Ontological Arguments and Belief in God. Cambridge University Press.",
    "Sobel, J. H. (1987). 'Gödel's Ontological Proof.' In Thomson (ed.), On Being and Saying. MIT Press.",
    "Benzmüller, C. & Woltzenlogel Paleo, B. (2014). 'Automating Gödel's Ontological Proof of God's Existence with Higher-order Automated Theorem Provers.' ECAI 2014.",
    "Oppy, G. 'Ontological Arguments.' Stanford Encyclopedia of Philosophy."
  ],
  keys: "ontological argument anselm maximally great being greatest conceivable plantinga modal godel possible worlds necessary existence perfect being",
  rel: ["omnipotence", "divine-simplicity", "contingency"]
},
{
  id: "idea-of-god",
  cat: "god",
  title: "The Origin of the Idea of God (Descartes' Trademark Argument)",
  who: "René Descartes, Meditations on First Philosophy, Meditation III (1641); Peter Kreeft & Ronald Tacelli (argument 12)",
  claim: `I have the idea of an infinite, perfect being. The cause of an idea must have at least as much reality as the idea represents. A finite, imperfect mind like mine can't be the source of an idea of infinite perfection, since I couldn't get the idea of the infinite by adding up finite things. So the idea must have been placed in me by an infinite, perfect being, like a craftsman's trademark stamped on his work. So God exists.`,
  form: ["I have an idea of an infinite, perfect being.", "The cause of an idea must contain at least as much reality as the idea represents.", "Only an infinite, perfect being contains that much reality.", "So an infinite, perfect being caused my idea: God exists."],
  short: `We can form the idea of "infinite" and "perfect" by negating limits we're familiar with ("not finite," "without flaw"), as Descartes' own critics (Gassendi, Hobbes) objected in 1641. The causal principle about ideas is unsupported: we can imagine unicorns without unicorns causing the idea, and mathematicians reason about infinite sets without being infinite. The idea of God also varies widely across cultures and has a traceable history (see [[yahweh-origins]]).`,
  points: [
    { h: "Infinite by negation", t: `Gassendi's objection (*Fifth Objections*): we build the idea of the infinite by extending and negating the finite. We understand "without limit" because we understand limits. Descartes replied that the infinite is prior, but this reply is just a restatement of the claim. Cantor showed that rigorous ideas of infinity can be built by finite minds using finite rules.` },
    { h: "The causal principle is arbitrary", t: `The principle that an idea of X must be caused by something with as much "reality" as X is a scholastic doctrine about "objective" and "formal" reality, with no independent support. We have ideas of perfect circles, frictionless planes, and fictional heroes without anything that perfect causing them.` },
    { h: "The idea isn't universal or uniform", t: `If God stamped the idea on every mind, we'd expect it to be the same everywhere. Instead, religious concepts vary from ancestral spirits to many gods to impersonal absolutes, and the specific idea of an infinite, perfect, single God arose late, in Greek philosophy and the post-exilic Jewish tradition (see [[yahweh-origins]], [[csr]]).` }
  ],
  replies: [],
  sources: [
    "Descartes, R. (1641). Meditations on First Philosophy, Meditation III; Fifth Objections and Replies (Gassendi).",
    "Williams, B. (1978). Descartes: The Project of Pure Enquiry. Penguin.",
    "Kreeft, P. & Tacelli, R. (1994). Handbook of Christian Apologetics, ch. 3.",
    "Boyer, P. (2001). Religion Explained. Basic Books."
  ],
  keys: "idea of god origin descartes trademark argument infinite perfect being idea of infinity cause of idea meditation three",
  rel: ["ontological", "csr", "yahweh-origins"]
},
{
  id: "pascal",
  cat: "god",
  title: "Pascal's Wager: What If You're Wrong?",
  who: "Blaise Pascal, Pensées §233 (1670); popular apologetics ('what have you got to lose?')",
  claim: `If you believe in God and he exists, you gain infinite reward. If you believe and he doesn't exist, you lose little. If you don't believe and he exists, you lose infinitely. If you don't believe and he doesn't exist, you gain little. Since even a small probability multiplied by an infinite payoff exceeds any finite payoff, the rational choice is to believe. "What if you're wrong?"`,
  form: ["Either God exists or he doesn't, and you can't avoid wagering one way or the other.", "If you believe and God exists, you gain infinite happiness; if he doesn't, you lose little.", "If you don't believe and God exists, you lose infinitely; if he doesn't, you gain little.", "Any nonzero chance of an infinite reward outweighs every finite cost.", "Therefore it's rational to believe in God."],
  short: `The wager works only if there is a single God to bet on. There are thousands of incompatible candidate gods, and also possible gods who reward honest unbelief and punish self-serving belief. With infinite payoffs available to every hypothesis, decision theory breaks down. Belief also cannot be adopted at will, and a God who rewards belief held for gain would be an odd object of worship.`,
  points: [
    { h: "The many-gods objection", t: `You might be wrong about Allah, who in the Quran condemns worship of Jesus as God (shirk, Q 5:72), or about one of the many gods whose rules contradict Christianity's. The wager gives no reason to choose Christianity over any other religion with an infinite threat. And for every possible god who rewards Christian belief, we can conceive one who rewards the opposite: a God who values evidence-proportioned belief and rewards honest skeptics (Martin's "perverse master," the "atheist's wager").` },
    { h: "Infinity breaks the math", t: `Alan Hájek ("Waging War on Pascal's Wager," *Philosophical Review*, 2003) showed that with infinite utilities, *any* strategy that gives a nonzero chance of ending up a believer, such as flipping a coin and believing on heads, has the same infinite expected value as wholehearted belief. So the wager cannot favor belief over almost anything else. Bounded utility theory, which most decision theorists prefer, removes the infinite payoff entirely.` },
    { h: "Belief is not a choice", t: `You cannot believe something by deciding to, any more than you can decide to believe the sky is green. Pascal knew this and advised taking holy water and attending Mass until belief came, which amounts to deliberately manipulating oneself into belief despite the evidence. That is a strategy of self-deception, not a reason to think a claim is true.` },
    { h: "A God who rewards strategic belief?", t: `A good and omniscient God would know that a wagered belief is held for self-interest, not love of truth. If the God of the wager can be fooled, or cares more about the belief than the honesty behind it, he is not the God Christianity describes. And the wager's own costs are not small: a lifetime committed to a false framework, money given, choices about family, sexuality, and medicine shaped by it.` },
    { h: "It's an argument from consequences", t: `Even a perfectly sound wager would give no evidence that God *exists*. It would only say that believing pays. Truth and payoff are different questions. You could make the same argument for any claim backed by a large enough threat.` }
  ],
  replies: [
    { q: "What if you're wrong and you end up in hell?", a: `What if *you're* wrong, and the true God is Allah, who condemns worship of Jesus? Or a God who values honest reasoning and rewards people who followed the evidence? Every religion with a threat can ask "what if you're wrong," and the threats can't all be avoided. The only consistent rule is to believe what the evidence supports.`, k: "what if you're wrong hell end up in hell risk lose nothing to lose" },
    { q: "Christianity is the most likely religion, so the wager favors it.", a: `Then the wager is doing no work: the argument depends on first showing that Christianity is more probable than its rivals, which is what the rest of the debate is about. And if Christianity is very unlikely on the evidence, the wager tells you nothing beyond what the evidence already did.`, k: "christianity most likely religion wager favors christianity probable" }
  ],
  sources: [
    "Pascal, B. (1670). Pensées §233 (Brunschvicg numbering) / §418 (Lafuma).",
    "Hájek, A. (2003). 'Waging War on Pascal's Wager.' Philosophical Review 112(1): 27–56.",
    "Hájek, A. 'Pascal's Wager.' Stanford Encyclopedia of Philosophy.",
    "Martin, M. (1990). Atheism: A Philosophical Justification. Temple University Press, ch. 9.",
    "Mackie, J. L. (1982). The Miracle of Theism, ch. 11."
  ],
  keys: "pascal's wager what if you're wrong nothing to lose hell infinite reward bet gamble safe side better safe than sorry",
  rel: ["hell", "why-christianity", "consequences"]
},
{
  id: "cumulative-case",
  cat: "god",
  title: "The Cumulative Case and Inference to the Best Explanation",
  who: "Richard Swinburne, The Existence of God (2nd ed. 2004); Basil Mitchell; Tim & Lydia McGrew; William Lane Craig",
  claim: `No single argument has to prove God by itself. Taken together, the existence of the universe, its fine-tuning, its order, consciousness, moral awareness, religious experience, miracles, and the resurrection form a cumulative case. Theism explains all of them with a single simple hypothesis: one infinite, personal God. Swinburne argues by Bayesian reasoning that, on the total evidence, theism is more probable than not.`,
  short: `A cumulative case is only as strong as its parts, and adding weak pieces of evidence can lower the total. Swinburne's claim that God is "simple" (one being with infinite properties) is contested: an infinite mind with unlimited knowledge and power is not simpler than physics. And a fair Bayesian accounting must include the evidence that *counts against* theism: gratuitous suffering, divine hiddenness, the dependence of mind on brain, the scale and indifference of the cosmos, the evolutionary origin of religion, and the history of Christianity's texts. Weighed together, those make naturalism more probable.`,
  points: [
    { h: "Total evidence cuts both ways", t: `Inference to the best explanation requires that you consider *all* the evidence. That includes the vast amount of suffering that serves no visible purpose ([[problem-of-evil]]); the absence of God from most human history and lives ([[hiddenness]]); the complete dependence of minds on brains ([[disembodied-mind]]); the distribution of religion by geography ([[demographics]]); and the fact that the physical world shows no signs of being arranged around humans. Paul Draper argues that these together support a "Hypothesis of Indifference" over theism by a large factor (Draper, 1989; 2017).` },
    { h: "God is not a simple hypothesis", t: `Swinburne assigns theism a high prior because God is supposedly "simple": one substance with every property in infinite degree. But simplicity in a scientific sense concerns the number of entities, kinds, and adjustable parameters. A personal agent whose choices are not determined by anything is the opposite of a simple, predictive mechanism. Its behavior can be fitted to any data after the fact. Critics such as Oppy, Gwiazda, and Philipse (*God in the Age of Science?*, 2012) argue that Swinburne's priors are unjustified.` },
    { h: "Weak arguments don't add up to a strong one", t: `In Bayesian terms, a cumulative case adds up likelihood ratios. If each piece of evidence is equally well explained, or better explained, by naturalism (a likelihood ratio of 1 or less), then piling them together adds nothing or moves things the other way. "Ten leaky buckets don't hold water" is crude, but it captures the point: one needs to show that each piece *favors* theism, not just that it is compatible with it.` },
    { h: "Theism is too flexible to be the 'best' explanation", t: `A good explanation predicts specific outcomes and is at risk of being wrong. Theism, as usually stated, predicts no particular universe: God could have created anything for reasons we cannot know. Skeptical theism even says we should *not* expect to understand God's choices ([[skeptical-theism]]). An explanation that can fit any data at all earns no credit from the data it does fit.` },
    { h: "Even success would be generic theism", t: `A successful cumulative case would establish a generic creator. Getting from there to Christianity requires the historical case (resurrection, scripture), where the evidence is weakest. See [[minimal-facts]] and [[inerrancy]].` }
  ],
  replies: [
    { q: "God is the simplest explanation: one being explains everything.", a: `"One being" is cheap if that being has unlimited, unexplained capacities. By that standard "a single unexplained law of everything" is also one thing that explains everything, and it posits no mind. Simplicity in science means fewer adjustable parameters and sharper predictions. "An omnipotent person chose it" fits any possible observation, which is the opposite of explanatory power.`, k: "god simplest explanation one being explains everything occam parsimony swinburne" },
    { q: "Naturalism can't explain anything ultimate. Theism is the only complete worldview.", a: `No worldview explains its own foundations. Theism stops at God, unexplained. Naturalism stops at the fundamental physical reality, unexplained. "Complete" is a matter of where you stop, not of whether you stop, and stopping with fewer kinds of thing is better.`, k: "naturalism can't explain ultimate complete worldview best explanation everything" }
  ],
  sources: [
    "Swinburne, R. (2004). The Existence of God, 2nd ed. Oxford University Press.",
    "Draper, P. (1989). 'Pain and Pleasure: An Evidential Problem for Theists.' Noûs 23(3): 331–350.",
    "Draper, P. (2017). 'Atheism and Agnosticism.' Stanford Encyclopedia of Philosophy.",
    "Philipse, H. (2012). God in the Age of Science? A Critique of Religious Reason. Oxford University Press.",
    "Oppy, G. (2006). Arguing about Gods, ch. 8.",
    "Gwiazda, J. (2009). 'Richard Swinburne's Argument to the Simplicity of God via the Infinite.' Religious Studies 45(4): 487–493."
  ],
  keys: "cumulative case best explanation inference to best explanation swinburne bayesian all arguments together simplest explanation worldview",
  rel: ["problem-of-evil", "hiddenness", "fine-tuning", "minimal-facts"]
}
]);
