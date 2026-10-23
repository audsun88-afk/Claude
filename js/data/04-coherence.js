/* Is the Concept Coherent? (9 entries) */
DEF_ADD([
{
  id: "omnipotence",
  cat: "coherence",
  title: "Omnipotence Is Coherent",
  who: "Aquinas, Summa Theologiae I q.25; Plantinga; Wierenga, The Nature of God (1989); Flint & Freddoso (1983)",
  claim: `God is all-powerful. The "paradox of the stone" (can God make a stone too heavy for him to lift?) is a pseudo-problem, because omnipotence means the ability to do anything *logically possible*, and "a stone an omnipotent being can't lift" is a contradiction, like a square circle. Refined definitions in terms of bringing about states of affairs remove the paradoxes.`,
  short: `The "logically possible" qualifier saves omnipotence from the stone paradox, but at a price. Every refined definition faces counterexamples, and the qualifications multiply until "omnipotent" means little more than "able to do whatever God can do." More seriously, omnipotence combined with perfect goodness rules out tolerating evil that could be prevented, so the coherence of omnipotence makes the problem of evil sharper.`,
  points: [
    { h: "The definitions keep breaking", t: `Philosophers have offered dozens of definitions of omnipotence in terms of states of affairs, abilities, or powers. Each faces counterexamples. "McEar" is a being who can only scratch his ear: if omnipotence is "being able to do everything consistent with one's nature," McEar counts as omnipotent (Plantinga's example). Refinements by Flint and Freddoso (1983), Wierenga (1989), and others become so technical that it is unclear whether they still capture the idea of unlimited power. The SEP entry on omnipotence (Hoffman & Rosenkrantz) surveys the unresolved difficulties.` },
    { h: "Omnipotence versus other attributes", t: `Can God sin, lie, break a promise, or forget? If not, there are things that ordinary humans can do that God cannot, so God's power is constrained by his nature. Theists answer that these are "weaknesses," not powers. But that answer makes the definition of omnipotence depend on God's other attributes, which makes it partly circular. Hebrews 6:18 says it is "impossible for God to lie."` },
    { h: "Power plus goodness sharpens the problem of evil", t: `The more power God has, the less excuse there is for suffering. An omnipotent being could achieve any good that requires some evil without that evil, unless the good *logically* requires it. Theodicies must therefore show that each instance of suffering is logically necessary for a greater good. That is a standard no theodicy meets (see [[problem-of-evil]]).` }
  ],
  replies: [
    { q: "Omnipotence just means being able to do anything logically possible. Problem solved.", a: `That solves the stone paradox, but then omnipotence can't explain why suffering exists: an omnipotent God could make free creatures who always freely choose well (Mackie's point), or achieve soul-making without childhood leukemia. If those are logically possible, God could do them. If you say they aren't, you need to show the contradiction.`, k: "omnipotence logically possible stone paradox square circle anything possible" }
  ],
  sources: [
    "Hoffman, J. & Rosenkrantz, G. 'Omnipotence.' Stanford Encyclopedia of Philosophy.",
    "Flint, T. & Freddoso, A. (1983). 'Maximal Power.' In Freddoso (ed.), The Existence and Nature of God. Notre Dame.",
    "Wierenga, E. (1989). The Nature of God. Cornell University Press.",
    "Mackie, J. L. (1955). 'Evil and Omnipotence.' Mind 64: 200–212.",
    "Mavrodes, G. (1963). 'Some Puzzles Concerning Omnipotence.' Philosophical Review 72: 221–223."
  ],
  keys: "omnipotence all powerful paradox of the stone heavy rock can god make logically possible power",
  rel: ["problem-of-evil", "free-will-defense", "perfect-freedom"]
},
{
  id: "omniscience-grim",
  cat: "coherence",
  title: "God Knows All Truths",
  who: "Classical theism; Psalm 147:5; responses to Patrick Grim by Alvin Plantinga and others",
  claim: `God is omniscient: he knows every truth, including every future event and every fact about every person's inner life. There's no logical problem with a being who knows all truths, since he is infinite and his knowledge is not limited the way ours is.`,
  short: `Patrick Grim has argued that omniscience, knowing *all* truths, is incoherent. By a Cantorian argument, there can be no set of all truths, because for any collection of truths there are more truths about its subsets than there are members. Omniscience also faces "indexical" problems: God can't know first-personal facts like "I am making a mess in this supermarket" (my facts, known as mine) unless he is me. Theists have replied, but no reply is generally accepted.`,
  points: [
    { h: "The Cantorian argument", t: `Suppose there were a set T of all truths. For every subset of T, there is a truth (for example, that a particular truth belongs or doesn't belong to that subset). By Cantor's theorem, there are more subsets of T than members of T, so there are more truths than T contains, contradicting the supposition. If there's no set of all truths, it's unclear what it means for God to know "all truths" (Grim, 1983, 1991).` },
    { h: "The exchange with Plantinga", t: `Plantinga and Grim debated this in *Philosophical Studies* (1993). Plantinga argued that omniscience can be defined without a set of all truths, by quantifying over propositions directly. Grim replied that the same Cantorian problems arise for such quantification. The exchange ended without agreement.` },
    { h: "Indexical knowledge", t: `John Perry ("The Problem of the Essential Indexical," 1979) showed that first-person knowledge ("I am the one making a mess") isn't captured by any third-person description. If God knows only third-person truths, there are truths only I can know. If God knows them as I do, he must in some sense be me.` }
  ],
  replies: [],
  sources: [
    "Grim, P. (1983). 'Some Neglected Problems of Omniscience.' American Philosophical Quarterly 20(3): 265–276.",
    "Grim, P. (1991). The Incomplete Universe: Totality, Knowledge, and Truth. MIT Press.",
    "Plantinga, A. & Grim, P. (1993). 'Truth, Omniscience, and Cantorian Arguments: An Exchange.' Philosophical Studies 71(3): 267–306.",
    "Perry, J. (1979). 'The Problem of the Essential Indexical.' Noûs 13(1): 3–21.",
    "Wierenga, E. 'Omniscience.' Stanford Encyclopedia of Philosophy."
  ],
  keys: "omniscience god knows all truths cantor set of all truths grim indexical knowledge first person knowledge coherent omniscient",
  rel: ["foreknowledge", "omnipotence", "timeless-god"]
},
{
  id: "foreknowledge",
  cat: "coherence",
  title: "Divine Foreknowledge Is Compatible with Free Will",
  who: "Boethius; Augustine; William of Ockham; Molinists (Luis de Molina; Craig; Flint); open theists dissent (Hasker, Pinnock)",
  claim: `God knows everything, including what we will freely choose tomorrow. Knowing that something will happen does not cause it to happen. God knows our choices because we will make them, not the other way around. Boethius: God sees all of time at once from eternity, as an observer sees a man walking. Molinists add that God knows "middle knowledge": what any free creature would do in any circumstance.`,
  short: `"Knowledge doesn't cause events" misses the problem. If God *infallibly* believed yesterday that you will do X tomorrow, then you cannot do otherwise without making God's past belief false, and nobody can change the past. That is Nelson Pike's 1965 argument, and it is still discussed as a live problem. Each solution comes at a cost: Boethian timelessness makes God unable to act in time; Ockhamism relies on contested "soft facts"; Molinism faces the "grounding objection"; open theism gives up full foreknowledge, which contradicts biblical prophecy.`,
  points: [
    { h: "The fatalist argument", t: `Pike's argument (*Philosophical Review*, 1965), in brief: (1) Yesterday God believed you would do X today. (2) God's beliefs are infallible. (3) The past is fixed: you can't now make it the case that God didn't believe that. (4) So you can't refrain from X. The argument does not claim that God's knowledge *causes* your action. It is about the necessity of the past and infallibility. This is why Linda Zagzebski's SEP entry treats it as a genuine dilemma.` },
    { h: "The proposed escapes each cost something", t: `**Boethian timelessness**: if God is outside time, he has no "past belief." But then God cannot respond to prayer, remember, or act in history in sequence, which is inconsistent with the biblical portrait (see [[timeless-god]]). **Ockhamism**: God's past belief is a "soft fact" that depends on the future. Critics argue soft facts don't help, because God's believing, unlike a mere prediction, is a real past state. **Molinism**: God knows what you *would* freely do in every circumstance. The "grounding objection" (Adams, 1977; Hasker) asks what makes these counterfactuals true before you exist, if not your character, which would make them determined. **Open theism**: God doesn't know the free future. But that abandons the classical doctrine and makes predictive prophecy impossible.` },
    { h: "Calvinism dissolves the problem by giving up freedom", t: `Reformed theology (Calvin, Edwards) accepts that God foreordains everything, including human choices, and holds that this is compatible with freedom understood as acting on one's desires (compatibilism). But then the free will defense against the problem of evil collapses: God could have determined everyone to freely choose good. And God's decree would include every sin and every damnation.` },
    { h: "The theological tension is scriptural", t: `The Bible contains both pictures: God regrets having made humans (Genesis 6:6), changes his mind (Exodus 32:14, Jonah 3:10), and tests Abraham "to know" what he would do (Genesis 22:12). Elsewhere God declares "the end from the beginning" (Isaiah 46:10) and predestines (Romans 8:29–30, Ephesians 1:4–5). Christian traditions have split over this for 1,600 years: Augustine versus Pelagius, Calvinist versus Arminian. That pattern is more consistent with a human literature containing different views than with a single coherent revelation.` }
  ],
  replies: [
    { q: "God knowing what I'll do doesn't make me do it. I could watch a replay of a game without causing it.", a: `The analogy changes the case. Watching a replay is knowing the *past*, which is already fixed, so no one thinks the players weren't free at the time. The problem is God knowing the future *infallibly in advance*. If God believed on Monday that you'll do X on Tuesday, and he can't be wrong, then on Tuesday the only way not to do X is to change Monday's divine belief, which is impossible. The problem is about necessity, not causation.`, k: "foreknowledge doesn't cause knowing isn't causing replay watch free will" }
  ],
  sources: [
    "Pike, N. (1965). 'Divine Omniscience and Voluntary Action.' Philosophical Review 74(1): 27–46.",
    "Zagzebski, L. 'Foreknowledge and Free Will.' Stanford Encyclopedia of Philosophy.",
    "Adams, R. M. (1977). 'Middle Knowledge and the Problem of Evil.' American Philosophical Quarterly 14: 109–117.",
    "Hasker, W. (1989). God, Time, and Knowledge. Cornell University Press.",
    "Fischer, J. M. (ed.) (1989). God, Foreknowledge, and Freedom. Stanford University Press.",
    "Boethius. The Consolation of Philosophy, Book V."
  ],
  keys: "foreknowledge free will omniscience god knows the future predestination molinism middle knowledge open theism calvinism determinism pike fatalism",
  rel: ["timeless-god", "free-will-defense", "heaven-free-will"]
},
{
  id: "timeless-god",
  cat: "coherence",
  title: "God Is Timeless and Unchanging, Yet Personal",
  who: "Augustine, Confessions XI; Boethius; Aquinas; Anselm; Paul Helm; Brian Leftow",
  claim: `God exists outside of time, in an eternal present, and is immutable: he cannot change, since change would imply imperfection. Yet God is a personal agent who knows, loves, creates, responds to prayer, became incarnate, and acts in history. There is no contradiction: God's single eternal act has effects at different times.`,
  short: `A person who cannot change cannot deliberate, respond, remember, decide, or love in any sense we understand, because each of these is a process. "A single timeless act with temporally spread effects" either makes God's responses to prayer and history fixed regardless of what we do, or reintroduces change in God. Many contemporary Christian philosophers (Wolterstorff, Craig, Swinburne, Mullins) have given up divine timelessness for exactly these reasons.`,
  points: [
    { h: "Personhood requires time", t: `Thinking is a sequence: considering, then concluding. Responding means acting *after* and *because of* something. Love involves attending to someone in a changing relationship. None of these makes sense for a being whose existence is a single unchanging "now." R. T. Mullins (*The End of the Timeless God*, OUP 2016) argues that timelessness is incompatible with God's knowledge of temporal facts, with the Incarnation, and with divine responsiveness.` },
    { h: "Knowing what time it is", t: `A timeless God cannot know tensed facts like "it is now 2026" or "the Exodus is over," since for him nothing is past or present. Kretzmann ("Omniscience and Immutability," 1966) argued that an omniscient being must know what time it is, and so must change as time passes. Then he cannot be both omniscient and immutable.` },
    { h: "Even Christian philosophers have abandoned it", t: `Nicholas Wolterstorff ("God Everlasting," 1975), Richard Swinburne, Alan Padgett, and William Lane Craig all reject strict timelessness in some form. Craig holds that God is timeless "without creation" and temporal since creation, which requires God to change from timeless to temporal, a change classical theism says is impossible. Timelessness is not an optional detail: it was adopted in classical theology to secure God's perfection, simplicity, and immutability, so giving it up unravels those doctrines too.` },
    { h: "Scripture describes a temporal God", t: `The Hebrew Bible's God walks in the garden (Genesis 3:8), comes down to see the tower (Genesis 11:5), regrets (1 Samuel 15:11), is persuaded by Moses (Exodus 32:9–14), and waits (Isaiah 30:18). The timeless, immutable God is a later synthesis of biblical language with Greek philosophy (Plato's Form of the Good; Aristotle's unmoved mover; Philo of Alexandria), not a discovery from scripture.` }
  ],
  replies: [
    { q: "God's single eternal act has effects at different times. The change is in the creation, not in God.", a: `Then nothing that happens in creation makes any difference to God: he is not affected by prayer, sin, or repentance, since his "response" was fixed timelessly in a single act, whatever happens. That is a coherent view (Aquinas held it: God's relation to creatures is "only of reason"), but it is not the responsive, loving, interacting God of Christian devotion, who answers prayer *because* it was prayed.`, k: "timeless act effects at different times change in creation not god cambridge change" }
  ],
  sources: [
    "Mullins, R. T. (2016). The End of the Timeless God. Oxford University Press.",
    "Kretzmann, N. (1966). 'Omniscience and Immutability.' Journal of Philosophy 63(14): 409–421.",
    "Wolterstorff, N. (1975). 'God Everlasting.' In Orlebeke & Smedes (eds.), God and the Good. Eerdmans.",
    "Helm, P. (1988). Eternal God. Oxford University Press.",
    "Craig, W. L. (2001). Time and Eternity. Crossway."
  ],
  keys: "timeless god outside time eternal immutable unchanging impassible personal change respond prayer god in time",
  rel: ["foreknowledge", "divine-simplicity", "incarnation"]
},
{
  id: "divine-simplicity",
  cat: "coherence",
  title: "Divine Simplicity",
  who: "Augustine; Anselm; Aquinas, Summa Theologiae I q.3; Fourth Lateran Council (1215); Vatican I (1870); Edward Feser; James Dolezal",
  claim: `God has no parts of any kind: no physical parts, no distinction between his essence and existence, no distinction between his attributes. God's goodness is God's power is God's knowledge is God himself. Simplicity is required for God to be the ultimate, uncaused explanation, since anything composite depends on its parts. It is the official teaching of the Catholic Church and of classic Reformed confessions.`,
  short: `If all of God's properties are identical to each other and to God, then God's knowledge is his power, and God himself is a property. Plantinga argued that a property cannot love, create, or know anything ("Does God Have a Nature?", 1980). If God's act of creating is identical to his necessary essence, creation is necessary too, and modal collapse follows. Classical theists' answers involve distinctions that seem to reintroduce the complexity simplicity denies.`,
  points: [
    { h: "God becomes a property", t: `If God *is* his goodness, and his goodness *is* his power, then goodness = power, and God = a property. Properties are abstract; they cannot know or will anything. Plantinga's argument (*Does God Have a Nature?*, Marquette, 1980) is the classic statement. Responses (Stump & Kretzmann; Brower's truthmaker account) reinterpret the identity claims in ways critics regard as abandoning what the doctrine originally said.` },
    { h: "Modal collapse", t: `God's will to create this world is identical with God's essence. God's essence is necessary. So God's will to create this world is necessary, and so is everything it brings about. Nothing could have been different. This contradicts the doctrine that creation was free and contingent (Mullins, 2013; Schmid & Mullins, 2022). Classical theists reply with "extrinsic" accounts on which God's act is the same in every world but its *effects* differ. Then there is no fact in God that explains why this world exists rather than another, which leaves the existence of this world unexplained after all.` },
    { h: "The 'aloneness' problem", t: `If God is simple and immutable, God is intrinsically the same whether or not he creates. Schmid and Mullins (*Religious Studies*, 2022) argue that this makes it impossible for God to exist without creation in one world and with it in another, because there would be no intrinsic difference in God to account for the difference. Simplicity and divine freedom cannot both be held.` },
    { h: "Simplicity versus the Trinity", t: `A God with no distinctions of any kind is also a God of three Persons, really distinct from one another. Theologians answer that the Persons are distinguished by "relations of origin" that are identical with the divine essence. But if Father = essence and Son = essence, then Father = Son by transitivity, which is the heresy of modalism. See [[trinity]].` }
  ],
  replies: [
    { q: "You're treating God as a being among beings. God is Being itself (ipsum esse subsistens), beyond such categories.", a: `If God is beyond all categories, then nothing positive can be said about him: not that he is good, personal, loving, or the creator, since those are categories too. Saying "God is beyond our concepts" when an objection lands, while using those concepts freely when making the case for God, is having it both ways. And Being itself creating some things and not others still raises the question of what in Being itself explains the choice.`, k: "god is being itself ipsum esse subsistens not a being among beings beyond categories analogy" }
  ],
  sources: [
    "Plantinga, A. (1980). Does God Have a Nature? Marquette University Press.",
    "Mullins, R. T. (2013). 'Simply Impossible: A Case Against Divine Simplicity.' Journal of Reformed Theology 7(2).",
    "Schmid, J. C. & Mullins, R. T. (2022). 'The Aloneness Argument Against Classical Theism.' Religious Studies 58(2).",
    "Tomaszewski, C. (2019). 'Collapsing the Modal Collapse Argument: On an Invalid Argument Against Divine Simplicity.' (A reply defending simplicity.)",
    "Stump, E. & Kretzmann, N. (1985). 'Absolute Simplicity.' Faith and Philosophy 2(4): 353–382.",
    "Brower, J. (2008). 'Making Sense of Divine Simplicity.' Faith and Philosophy 25(1): 3–30."
  ],
  keys: "divine simplicity simple god no parts essence existence identical attributes modal collapse classical theism aquinas being itself",
  rel: ["contingency", "trinity", "classical-proofs", "uncaused-god"]
},
{
  id: "perfect-freedom",
  cat: "coherence",
  title: "God Is Both Perfectly Good and Perfectly Free",
  who: "Classical theism; Thomas Morris; Thomas Flint; responses to William Rowe",
  claim: `God is perfectly free, under no external constraint, choosing to create out of love. He is also perfectly good, unable to do evil. These are compatible: true freedom is the freedom to do the good, and God's inability to sin is a perfection, not a limitation.`,
  short: `William Rowe (*Can God Be Free?*, 2004) argued that a perfectly good God would be obligated to create the best world, if there is one. If there is no best world, then for any world God creates, there's a better one he could have created, so a morally perfect being could not settle on any of them. If God has no real alternatives, he is not free in the libertarian sense that the free will defense needs. Either way the classical package becomes unstable.`,
  points: [
    { h: "Rowe's dilemma", t: `If there is a best possible world, perfect goodness requires God to create it, so God had no real choice. If there is no best world (for any world, a better one exists), then whatever God creates, he could have done better. A perfectly good being cannot be outdone even by its own other options. So, Rowe argues, either God is not free or no perfectly good being can exist. Responses (Adams' "grace" view; Kraay's "theistic multiverse") are debated, and none has become standard.` },
    { h: "The theist's own free will defense depends on alternatives", t: `The free will defense says creatures must be able to choose evil to be genuinely free and morally responsible. But God is supposed to be the paradigm of freedom and moral worth, yet unable to choose evil. If freedom without the possibility of evil is the highest freedom, God could have given it to us. See [[heaven-free-will]].` },
    { h: "Is our world the best God could do?", t: `If God chose freely among options, he chose *this* world, with its smallpox, Holocaust, and five mass extinctions, as either the best or at least as acceptable. Leibniz accepted that this is the best of all possible worlds, which Voltaire mocked in *Candide* after the 1755 Lisbon earthquake. Saying that God chose a world short of the best implies he settled for worse.` }
  ],
  replies: [
    { q: "True freedom is freedom to do good, not to choose evil.", a: `If that's true, then God could have made humans with that freedom, free and incapable of evil, as Christians say the redeemed will be in heaven. Then the free will defense for human evil fails, because the ability to choose evil was not necessary for genuine freedom after all.`, k: "true freedom freedom to do good not choose evil god can't sin perfection" }
  ],
  sources: [
    "Rowe, W. (2004). Can God Be Free? Oxford University Press.",
    "Adams, R. M. (1972). 'Must God Create the Best?' Philosophical Review 81(3): 317–332.",
    "Kraay, K. (2010). 'Theism, Possible Worlds, and the Multiverse.' Philosophical Studies 147: 355–368.",
    "Leibniz, G. W. (1710). Theodicy.",
    "Voltaire (1759). Candide."
  ],
  keys: "god perfectly free perfectly good best possible world rowe can god be free god can't sin freedom choose evil",
  rel: ["free-will-defense", "heaven-free-will", "omnipotence"]
},
{
  id: "disembodied-mind",
  cat: "coherence",
  title: "God Is a Mind Without a Body",
  who: "Classical theism generally; Richard Swinburne, The Coherence of Theism (1977, 2nd ed. 2016); J. P. Moreland",
  claim: `God is spirit (John 4:24), a personal being with knowledge, will, and love, but no body, brain, or physical location. There is nothing incoherent in the idea of a mind that does not depend on matter. Swinburne argues that we can imagine being disembodied, so it is possible.`,
  short: `Every mind we have evidence of is the activity of a nervous system, and its features (memory, attention, emotion, reasoning) are traceable to specific neural mechanisms. That gives inductive evidence that minds depend on brains, which counts against the existence of any disembodied mind, God included. The idea that we can "imagine being disembodied" shows only that we can imagine it, which is weak evidence that it's possible.`,
  points: [
    { h: "The argument from neural dependence", t: `Damage to specific brain regions removes specific mental capacities: Broca's area (speech production), the hippocampus (forming new memories), the fusiform face area (recognizing faces), the ventromedial prefrontal cortex (moral and social judgment, as in the case of Phineas Gage). General anesthesia removes consciousness; drugs alter it predictably. This is massive inductive evidence that mental functions are brain functions (Augustine, "The Dependence of Consciousness on the Brain," in *The Myth of an Afterlife*, 2015). A mind with no brain would be the one exception to everything we know about minds.` },
    { h: "Knowledge and action need mechanisms", t: `Our knowledge comes through causal contact (perception) and is stored in physical structures (synapses). How does a non-physical, non-spatial mind know where and when anything is, or act on matter at particular places? The interaction problem, which Princess Elisabeth of Bohemia pressed against Descartes in 1643, has never been solved. For God it is the same problem in its most extreme form.` },
    { h: "Conceivability is a weak guide", t: `Swinburne argues: I can conceive of myself existing without a body, so it is possible. But conceivability arguments are notoriously unreliable: people "conceived" of water not being H2O, or of a largest prime, before learning better. Conceiving of a disembodied mind may only show we don't fully understand what a mind is.` }
  ],
  replies: [
    { q: "God isn't like human minds. You can't generalize from brains to God.", a: `Then we lose the grounds for calling God a mind at all. The theist describes God with mental terms (knowing, willing, loving) whose meaning comes from human minds. If those terms apply, the evidence about what minds require applies. If they don't, "God is personal" has no content.`, k: "god not like human minds can't generalize brains spirit different" }
  ],
  sources: [
    "Martin, M. & Augustine, K. (eds.) (2015). The Myth of an Afterlife. Rowman & Littlefield, Part I.",
    "Swinburne, R. (2016). The Coherence of Theism, 2nd ed. Oxford University Press.",
    "Kandel, E. et al. (2021). Principles of Neural Science, 6th ed. McGraw-Hill.",
    "Damasio, A. (1994). Descartes' Error. Putnam.",
    "Shapiro, L. (ed.) (2007). The Correspondence between Princess Elisabeth of Bohemia and René Descartes. University of Chicago Press."
  ],
  keys: "disembodied mind god is spirit immaterial mind without brain mind depends on brain neural dependence interaction problem dualism",
  rel: ["consciousness", "soul", "nde"]
},
{
  id: "trinity",
  cat: "coherence",
  title: "The Trinity Is a Mystery, Not a Contradiction",
  who: "Council of Nicaea (325); Constantinople (381); the Athanasian Creed; Augustine, De Trinitate; Peter van Inwagen (relative identity); William Lane Craig & J. P. Moreland (social trinitarianism); Richard Swinburne",
  claim: `There is one God who exists eternally as three distinct Persons: Father, Son, and Holy Spirit. Each is fully God, yet there are not three gods but one. This is beyond human comprehension, but it is not a contradiction: God is one in *being* (ousia) and three in *person* (hypostasis). Analogies such as water as ice, liquid, and steam, or the mind, its self-knowledge, and its love (Augustine), point to how this can be.`,
  short: `Stated plainly, the doctrine is a logically inconsistent set: the Father is God, the Son is God, the Father is not the Son, and there is exactly one God. Every attempt to make it consistent drifts into a position the creeds condemn. "God" meaning a shared nature makes three gods (tritheism). Persons as modes of one God is modalism. Ranking the Son below the Father is subordinationism. Or the attempt uses logic of its own (relative identity) that critics regard as ad hoc. The doctrine was formulated over centuries of political conflict and is not stated in the New Testament.`,
  points: [
    { h: "The inconsistent tetrad", t: `(1) The Father is God. (2) The Son is God. (3) The Father is not the Son. (4) There is exactly one God. If "is God" in (1) and (2) means "is identical to God," then by transitivity Father = Son, contradicting (3). If it means "is divine" (has the divine nature), then there are three divine beings, contradicting (4) unless "one God" is redefined. Dale Tuggy's SEP entry on the Trinity lays out the logical options and their costs.` },
    { h: "Social trinitarianism leans toward tritheism", t: `Craig and Moreland model God as one "soul" with three centers of consciousness, or as a whole of which the three Persons are parts. Critics (Tuggy; Leftow, "Anti Social Trinitarianism," 1999) note that this makes the Persons less than fully God, since each is only a part of God. That contradicts the creeds. If each Person has its own mind and will, there are three agents, which is three gods in all but name.` },
    { h: "Latin and relative-identity models lean toward modalism", t: `Leftow's "Latin" model treats the Persons as one God living three "life streams," like a time traveler appearing three times in one scene. Critics say this is modalism, the view that Father, Son, and Spirit are three roles of one person, condemned since the 3rd century (Sabellius). Van Inwagen's relative identity approach says Father and Son are the "same God" but "different persons," with no absolute identity. That requires rejecting classical identity logic, which most philosophers regard as too high a price.` },
    { h: "Every popular analogy is a heresy", t: `Water as ice, liquid, and steam is modalism: one substance in three successive states. The sun, its light, and its heat is Arianism: creature-like emanations. The shamrock (three leaves, one plant) is partialism, since each leaf is only part of the plant. The egg (shell, white, yolk) is the same. When every analogy offered fails, the problem may be that there is nothing coherent to be analogous to.` },
    { h: "It isn't in the New Testament", t: `The word "Trinity" first appears with Theophilus of Antioch (c. 180) and Tertullian (c. 200). The one explicit trinitarian proof-text, the Johannine Comma (1 John 5:7–8, "the Father, the Word, and the Holy Ghost: and these three are one"), is a late Latin interpolation absent from all early Greek manuscripts. It entered Erasmus's third edition (1522) under pressure and so reached the King James Version. The New Testament typically distinguishes "God" (the Father) from Jesus the "Lord" (1 Corinthians 8:6; John 17:3; Mark 13:32). Pre-Nicene writers such as Justin Martyr called the Logos a "second God" subordinate to the Father, which later orthodoxy would reject. See [[jesus-claimed-god]].` },
    { h: "It was settled by councils and emperors", t: `Nicaea (325) was convened by Constantine and adopted *homoousios* (same substance), a term not found in scripture, previously associated with modalists, and contested for decades afterward. Arian and semi-Arian creeds held official favor under later emperors (Constantius II). The full doctrine of the Spirit's equal divinity came at Constantinople in 381, under Theodosius, who had made Nicene Christianity the state religion the year before. The *filioque* dispute over whether the Spirit proceeds from the Father "and the Son" split the Eastern and Western churches (1054) and remains unresolved. A doctrine revealed by God might be expected to be clearer.` }
  ],
  replies: [
    { q: "It's a mystery. Our finite minds can't comprehend an infinite God.", a: `Incomprehensibility is not the problem; contradiction is. A doctrine can be beyond full understanding without being inconsistent. But "one God, three distinct persons each of whom is that God" is not a statement we fail to understand. We understand it well enough to see that, read literally, it entails a contradiction. Appealing to mystery at exactly the point where the logic fails is a way of declining to defend the claim. And if contradictions are acceptable in theology, no argument against Christianity *or for it* can be evaluated.`, k: "mystery finite minds can't comprehend infinite god beyond understanding trinity mystery" },
    { q: "One what, three whos: one being, three persons. There's no contradiction.", a: `That formula works only if each "who" is not itself a "what" that is God. But the creeds say each Person *is* God. If the Father is a divine being and the Son is a divine being, and they are not the same, there are two divine beings. Saying "one being" then means the three share a nature, as three humans share humanity, which is tritheism. Or it means they are aspects of one being, which is modalism.`, k: "one what three whos one being three persons ousia hypostasis essence person" }
  ],
  sources: [
    "Tuggy, D. 'Trinity.' Stanford Encyclopedia of Philosophy.",
    "Tuggy, D. (2017). What Is the Trinity? Thinking about the Father, Son, and Holy Spirit. Independently published.",
    "Leftow, B. (1999). 'Anti Social Trinitarianism.' In Davis, Kendall & O'Collins (eds.), The Trinity. Oxford University Press.",
    "van Inwagen, P. (1988). 'And Yet They Are Not Three Gods But One God.' In Morris (ed.), Philosophy and the Christian Faith. Notre Dame.",
    "Moreland, J. P. & Craig, W. L. (2003). Philosophical Foundations for a Christian Worldview. InterVarsity, ch. 29.",
    "Hanson, R. P. C. (1988). The Search for the Christian Doctrine of God: The Arian Controversy 318–381. T&T Clark.",
    "Metzger, B. M. (1994). A Textual Commentary on the Greek New Testament, 2nd ed., on 1 John 5:7–8.",
    "Ayres, L. (2004). Nicaea and Its Legacy. Oxford University Press."
  ],
  keys: "trinity three in one father son holy spirit one god three persons homoousios nicaea mystery tritheism modalism athanasian creed shamrock water ice steam",
  rel: ["incarnation", "divine-simplicity", "jesus-claimed-god", "nicaea"]
},
{
  id: "incarnation",
  cat: "coherence",
  title: "Jesus Was Fully God and Fully Man",
  who: "Council of Chalcedon (451); Thomas Morris, The Logic of God Incarnate (1986); kenotic Christologists (Stephen Evans); Oliver Crisp",
  claim: `Jesus Christ is one person with two complete natures, divine and human, "without confusion, without change, without division, without separation" (Chalcedon, 451). He was omniscient as God and limited as man, impassible as God and suffering as man. Morris's "two minds" model and kenotic models, in which the Son voluntarily set aside some divine attributes, show this is coherent.`,
  short: `Being divine requires properties (omniscience, impassibility, immortality, necessity) whose negations are essential to being human (limited knowledge, the capacity to suffer, mortality, contingency). One person cannot have both a property and its negation. "Two natures" doesn't solve this, because properties belong to the *person*: it was one and the same subject who supposedly knew everything and did not know the day of the end (Mark 13:32). Each model either splits Christ into two persons (Nestorianism) or diminishes one of the natures.`,
  points: [
    { h: "Contradictory attributes in one subject", t: `God is omniscient; Jesus did not know the day or the hour (Mark 13:32) and "increased in wisdom" (Luke 2:52). God cannot be tempted (James 1:13); Jesus "was tempted in every way" (Hebrews 4:15). God cannot die; Jesus died. The "qua" strategy (Jesus *qua* God knows, *qua* man doesn't) attributes both to the same subject: "Jesus knows X" and "Jesus doesn't know X." Adding "qua" relocates the contradiction without explaining how one subject can bear both properties (Cross, 2009; Hick, *The Myth of God Incarnate*, 1977).` },
    { h: "Two minds means two persons", t: `Morris's two-minds model: the divine mind contains the human mind, but not vice versa, as a dreamer's waking mind contains the dream. Critics note that a person is commonly defined by a distinct center of consciousness. If the Son has two such centers, it is hard to see why there are not two persons, which is Nestorianism, condemned at Ephesus (431). If the divine mind is fully aware of everything the human mind knows, the human mind's ignorance and temptation look like a performance.` },
    { h: "Kenosis gives up divinity", t: `Kenotic models, after Philippians 2:7 ("he emptied himself"), say the Son temporarily gave up omniscience and omnipotence. But if these properties are *essential* to God, then something that lacks them is not God. If they are not essential, then "God" is not a being with necessary perfections, contrary to classical theism. Either way, the incarnate Jesus was not fully God in the classical sense.` },
    { h: "Was Jesus able to sin?", t: `If Jesus could not sin (non posse peccare), his temptation was not real, and Hebrews 4:15 is empty. If he could sin, then God could sin, contrary to divine perfection. Theologians have debated this ("impeccability") for centuries without resolution (see Crisp, *God Incarnate*, 2009).` },
    { h: "A doctrine forged in controversy", t: `Chalcedon's formula was a political compromise that split Christianity. The Oriental Orthodox churches (Coptic, Ethiopian, Armenian, Syriac), which hold that Christ has one united nature (miaphysitism), rejected it. The Church of the East was associated with Nestorius. These schisms persist after 1,500 years. Each side accused the other of heresy. That is what we would expect if the formula papered over an incoherence rather than resolved it.` }
  ],
  replies: [
    { q: "The two natures belong to one person, so there's no contradiction. Properties belong to natures.", a: `If properties belong only to natures and not to the person, then the *person* of the Son did not suffer, did not die, and was not ignorant, which contradicts the creeds' own claim that God the Son suffered and died "for us" (the *communicatio idiomatum*). If properties do belong to the person, then the one person both knew and didn't know the same thing. Chalcedon wants it both ways.`, k: "two natures one person hypostatic union properties belong to natures qua chalcedon" }
  ],
  sources: [
    "Definition of Chalcedon (451).",
    "Morris, T. (1986). The Logic of God Incarnate. Cornell University Press.",
    "Hick, J. (ed.) (1977). The Myth of God Incarnate. SCM Press.",
    "Hick, J. (1993). The Metaphor of God Incarnate. SCM Press.",
    "Crisp, O. (2009). God Incarnate: Explorations in Christology. T&T Clark.",
    "Cross, R. (2009). 'The Incarnation.' In Flint & Rea (eds.), Oxford Handbook of Philosophical Theology."
  ],
  keys: "incarnation fully god fully man two natures hypostatic union chalcedon kenosis emptied himself jesus omniscient didn't know the hour two minds could jesus sin",
  rel: ["trinity", "jesus-claimed-god", "timeless-god"]
}
]);
