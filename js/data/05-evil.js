/* Evil, Suffering & Hiddenness (14 entries) */
DEF_ADD([
{
  id: "problem-of-evil",
  cat: "evil",
  title: "Evil Doesn't Disprove God",
  who: "Alvin Plantinga, God, Freedom, and Evil (1974); Peter van Inwagen, The Problem of Evil (2006); Eleonore Stump, Wandering in Darkness (2010)",
  claim: `The logical problem of evil, the claim that God and evil are strictly contradictory, was refuted by Plantinga's free will defense. Most philosophers, including atheists, accept this. God may have morally sufficient reasons for allowing evil that we cannot see. Without God, there is no objective "evil" to complain about anyway. So the existence of suffering is no argument against God.`,
  short: `The *logical* problem may be answered, and honest skeptics should concede that. But the problem that matters today is *evidential*: the amount, kind, and distribution of suffering is far more probable if there is no all-good, all-powerful God than if there is. William Rowe's and Paul Draper's arguments remain central in the literature. The "without God there's no evil" reply misunderstands the argument, which is internal: it uses the theist's own concept of a good God and asks whether the world fits it.`,
  points: [
    { h: "Grant the logical problem, press the evidential one", t: `Plantinga showed it is not strictly *impossible* for God and some evil to coexist. The evidential argument (Rowe, 1979) is different. There appear to be instances of intense suffering that an omnipotent, omniscient being could have prevented without losing a greater good or permitting a worse evil. Rowe's example: a fawn trapped in a forest fire, burned, suffering for days before dying, unseen by anyone. Probably at least some such suffering is pointless. A perfectly good God would prevent pointless suffering. So probably no such God exists.` },
    { h: "Draper's Hypothesis of Indifference", t: `Paul Draper (*Noûs*, 1989) compares theism with the "Hypothesis of Indifference": the nature and condition of sentient beings is not the result of benevolent or malevolent actions by non-human persons. The observed facts about pain and pleasure (pain that is biologically useful, pain that is useless, and both distributed without regard to moral desert) are much more probable on the Hypothesis of Indifference than on theism. That favors indifference over theism, even before considering anything else.` },
    { h: "The scale is staggering", t: `Volk and Atkinson (2013) estimate that across hunter-gatherer and historical societies, about 27% of infants died in their first year and about 46% of children died before puberty. For most of human history, nearly half of all children died, often painfully, of infection, starvation, and parasites. Smallpox alone killed an estimated 300 million people in the 20th century. Any theodicy must account for this, not for a stubbed toe or a single tragedy.` },
    { h: "'Without God there's no evil' misreads the argument", t: `The problem of evil is a *reductio*: it takes the theist's premises (God is perfectly good and powerful; suffering is bad) and shows they don't fit the world. The skeptic doesn't need to believe in objective evil any more than someone who points out an inconsistency in a novel's plot needs to believe the novel is true. And secular moral realists have their own grounds for calling suffering bad (see [[moral-argument]]).` },
    { h: "The theodicies each cover a fraction of the evidence", t: `Free will covers moral evil, not earthquakes, cancers, and parasites ([[natural-evil]]). Soul-making doesn't cover infants and animals ([[soul-making]]). The Fall doesn't cover hundreds of millions of years of animal suffering before humans ([[animal-suffering]]). Skeptical theism undermines moral knowledge generally ([[skeptical-theism]]). The overall structure is a patchwork, with a fallback to "God's ways are mysterious" wherever the patches don't reach.` }
  ],
  replies: [
    { q: "God has morally sufficient reasons we can't see.", a: `Possibly, but the question is what's probable. If we have no idea what God's reasons could be, we also have no basis for expecting the world to look as it does under theism, and theism makes no predictions. If we do have some idea of what a good being would do, the world looks very different from what we'd expect. See [[skeptical-theism]] for why this move undermines too much.`, k: "morally sufficient reasons can't see god's reasons mysterious ways higher plan" },
    { q: "Plantinga refuted the problem of evil. Even atheist philosophers admit it.", a: `Plantinga answered the *logical* version: the claim that God and any evil at all are strictly contradictory. Philosophers widely accept that. The *evidential* version, that suffering makes God improbable, was not addressed by the free will defense and is very much alive in the literature (Rowe, Draper, Oppy, Schellenberg, Sterba). Even the free will defense covers only suffering caused by free choices.`, k: "plantinga refuted problem of evil atheists admit logical problem solved" },
    { q: "If there's no God, how can you even call anything evil?", a: `The argument is internal: you say God is perfectly good, and that suffering like childhood cancer is bad. The question is how those fit together. I don't have to adopt a particular theory of morality to point out that your own premises clash. As it happens, plenty of atheists are moral realists with their own account of why suffering is bad.`, k: "no god can't call anything evil standard of evil objective evil atheist complain" }
  ],
  sources: [
    "Rowe, W. (1979). 'The Problem of Evil and Some Varieties of Atheism.' American Philosophical Quarterly 16(4): 335–341.",
    "Draper, P. (1989). 'Pain and Pleasure: An Evidential Problem for Theists.' Noûs 23(3): 331–350.",
    "Plantinga, A. (1974). God, Freedom, and Evil. Harper & Row.",
    "van Inwagen, P. (2006). The Problem of Evil. Oxford University Press.",
    "Volk, A. & Atkinson, J. (2013). 'Infant and child death in the human environment of evolutionary adaptation.' Evolution and Human Behavior 34(3): 182–192.",
    "Sterba, J. (2019). Is a Good God Logically Possible? Palgrave Macmillan.",
    "McBrayer, J. & Howard-Snyder, D. (eds.) (2013). The Blackwell Companion to the Problem of Evil. Wiley-Blackwell.",
    "Tooley, M. 'The Problem of Evil.' Stanford Encyclopedia of Philosophy."
  ],
  keys: "problem of evil suffering why does god allow suffering evil bad things happen good people pain disease children dying rowe draper evidential theodicy",
  rel: ["free-will-defense", "natural-evil", "animal-suffering", "skeptical-theism", "soul-making", "evil-god", "cross-suffering"]
},
{
  id: "free-will-defense",
  cat: "evil",
  title: "The Free Will Defense",
  who: "Augustine; Alvin Plantinga, The Nature of Necessity (1974); Richard Swinburne, Providence and the Problem of Evil (1998)",
  claim: `God created beings with genuine free will because a world with free creatures capable of love and moral goodness is better than a world of robots. Free will requires the real possibility of choosing evil. Much suffering results from human choices. God cannot force free creatures to choose good without destroying their freedom. Plantinga adds that it is possible every free creature God could create would go wrong at least once ("transworld depravity").`,
  form: ["A world of free creatures who can love and choose the good is very valuable.", "Free creatures must be able to choose evil, and God can't guarantee that they never will.", "Much suffering results from free choices.", "Therefore God is justified in permitting that suffering for the sake of freedom."],
  short: `The defense explains, at most, suffering caused by free choices. It doesn't explain disease, natural disasters, or animal suffering. Even for moral evil, it fails to explain why God doesn't restrain the *consequences* of evil choices (we restrain murderers without destroying their freedom), why victims' freedom counts for nothing, and why heaven can contain free beings who never sin. If God could create such beings there, he could have created them here.`,
  points: [
    { h: "Freedom of will versus freedom of action", t: `A person can choose to murder and be stopped. Their free will was exercised; the harm was prevented. We think that police, parents, and bystanders *should* prevent atrocities, and no one says that stopping a rapist violates his free will in any troubling way. A God who never intervenes, at Auschwitz or in a child's abuse, is behaving in a way we would call grossly negligent in any human being with the power to help.` },
    { h: "The victim's freedom", t: `When one person murders another, the victim's freedom, including all their future choices, is destroyed. The free will defense values the murderer's freedom to kill above the victim's freedom to live. A God concerned with freedom as such would protect the free choices of the many against the destructive choices of the few.` },
    { h: "The heaven problem", t: `Christian doctrine holds that the redeemed in heaven are free and yet never sin (Revelation 21:4, 27). If free beings who never sin are possible, God could have created them from the start. If heaven's inhabitants cannot sin, then freedom to sin is not necessary for the highest good, and the defense loses its premise. See [[heaven-free-will]].` },
    { h: "Mackie's challenge: free beings who always choose right", t: `If it is possible for a free being to choose good on one occasion, it is possible for it to choose good on every occasion. So an omnipotent God could have created a world of free beings who always freely do right (Mackie, 1955). Plantinga's answer relies on "transworld depravity": every possible free creature would go wrong in some circumstance God could actualize. That is logically possible, but there is no reason to think it is *true*. And it presupposes Molinist middle knowledge, which has its own problems (see [[foreknowledge]]).` },
    { h: "The scale of moral evil versus what freedom requires", t: `Meaningful free choices would be possible in a world with much less room for catastrophe: where people could still choose cruelty, but where a single person couldn't order a genocide or a single choice couldn't destroy a child's entire life. Freedom doesn't require that the range of possible harms be unlimited.` }
  ],
  replies: [
    { q: "God doesn't want robots. Love must be freely chosen.", a: `Agreed that love must be free. But protecting victims doesn't turn anyone into a robot. Parents who stop one child from hitting another haven't destroyed anyone's capacity to love. And heaven is supposed to contain freely loving beings who never sin. If that's possible, the robot dilemma is false.`, k: "god doesn't want robots love must be free forced love puppets" },
    { q: "If God stopped every evil, there would be no free will.", a: `Nobody is asking him to stop every evil. The question is why he stops *none* of the worst ones: not the Holocaust, not the Rwandan genocide, not the torture of children. Even preventing the very worst would leave enormous room for free choice. And Christians believe God did intervene in history (the Flood, the plagues of Egypt), so non-intervention is not a principle he holds.`, k: "if god stopped evil no free will intervene every time" }
  ],
  sources: [
    "Plantinga, A. (1974). God, Freedom, and Evil. Harper & Row.",
    "Mackie, J. L. (1955). 'Evil and Omnipotence.' Mind 64: 200–212.",
    "Swinburne, R. (1998). Providence and the Problem of Evil. Oxford University Press.",
    "Adams, M. M. (1999). Horrendous Evils and the Goodness of God. Cornell University Press.",
    "Sterba, J. (2019). Is a Good God Logically Possible? Palgrave Macmillan.",
    "Pereboom, D. (2005). 'Free Will, Evil, and Divine Providence.' In Dole & Chignell (eds.), God and the Ethics of Belief. Cambridge."
  ],
  keys: "free will defense god gave us free will allows suffering because of free will robots love freely chosen human choices moral evil caused by people plantinga transworld depravity",
  rel: ["problem-of-evil", "heaven-free-will", "foreknowledge", "natural-evil"]
},
{
  id: "greater-good",
  cat: "evil",
  title: "God Brings Good Out of Evil",
  who: "Romans 8:28; Genesis 50:20 ('you meant evil against me, but God meant it for good'); Augustine, Enchiridion 11; Leibniz; popular pastoral apologetics ('everything happens for a reason')",
  claim: `God permits evil only because he can bring a greater good out of it. Joseph's brothers sold him into slavery, but God used it to save many lives (Genesis 50:20). The crucifixion, the worst evil, brought the greatest good. "All things work together for good for those who love God" (Romans 8:28). We may not see the good now, but God weaves every suffering into a greater purpose.`,
  short: `For the defense to work, every evil must be *necessary* for a greater good that couldn't be achieved without it, because an all-powerful God could achieve any merely contingent good in other ways. There's no evidence that most suffering meets that standard, and much of it, such as infants' deaths and animal agony, has no visible good it serves. Even where good follows evil, the good doesn't justify the evil if it could have been obtained without it. And "everything happens for a reason" can't be distinguished from "things happen and we find meaning afterward."`,
  points: [
    { h: "Necessity, not just outcome", t: `A doctor may cause pain to cure a disease because the pain is unavoidable. An omnipotent being has no such constraints except logical ones. So each permitted evil must be logically necessary for an outweighing good. That's an extremely strong claim, and the evidence (children dying of cancer, millions of years of animal pain) gives no support to it (see [[problem-of-evil]]).` },
    { h: "Good outcomes don't justify means", t: `Joseph's story is a narrative with a happy ending. For every Joseph, there are many whose suffering led nowhere: slaves who died in slavery, children who died before they could understand anything. Even when good results follow, we don't think they justify the evil if a better path was available.` },
    { h: "Ivan Karamazov's objection", t: `In Dostoevsky's *The Brothers Karamazov* (Book V, "Rebellion"), Ivan describes the torture of children and says that no future harmony could be worth "the tears of that one tortured child." He doesn't deny God; he "returns his ticket." The objection is moral, not logical: some evils make any greater-good accounting obscene.` },
    { h: "It explains anything", t: `If any suffering whatever can be assigned to an unknown greater good, the hypothesis can't be tested. Its defenders also tend to see good outcomes as God's work and bad ones as mysteries, which is a pattern of interpretation, not a discovery (see [[skeptical-theism]]).` }
  ],
  replies: [
    { q: "Everything happens for a reason. We'll understand it in heaven.", a: `That's a hope, not evidence. And it implies that every specific horror, every abused child and every death in a tsunami, was necessary for something better, which would make God's plan require each of them. Most people, including most Christians, recoil from that when applied to a particular case.`, k: "everything happens for a reason understand in heaven plan purpose" }
  ],
  sources: [
    "Augustine. Enchiridion, ch. 11.",
    "Leibniz, G. W. (1710). Theodicy.",
    "Dostoevsky, F. (1880). The Brothers Karamazov, Book V, ch. 4 ('Rebellion').",
    "Adams, M. M. (1999). Horrendous Evils and the Goodness of God. Cornell University Press.",
    "Rowe, W. (1979). 'The Problem of Evil and Some Varieties of Atheism.' American Philosophical Quarterly 16(4): 335–341."
  ],
  keys: "greater good god brings good out of evil all things work together for good romans 8:28 joseph genesis 50:20 everything happens for a reason purpose in suffering",
  rel: ["problem-of-evil", "skeptical-theism", "soul-making", "compensation", "cross-suffering"]
},
{
  id: "soul-making",
  cat: "evil",
  title: "Soul-Making: Suffering Builds Character",
  who: "Irenaeus; John Hick, Evil and the God of Love (1966); Richard Swinburne",
  claim: `God's purpose is not to make a hedonistic paradise but to develop morally and spiritually mature persons. Courage, compassion, patience, and faith can only develop in a world with real challenges and suffering. A world without pain would be a world where nothing we do matters. Suffering is the "vale of soul-making" (Keats).`,
  short: `Much suffering does not build souls. It crushes them, or falls on beings who cannot benefit: infants who die of disease, animals, people destroyed by dementia, people driven to despair. The amount and distribution of suffering bears no relation to anyone's need for growth. Hick himself acknowledged this "dysteleological" suffering and appealed to mystery and an afterlife where soul-making continues. That concedes that the world as we see it doesn't fit the theodicy.`,
  points: [
    { h: "Dysteleological suffering", t: `Hick used this term for suffering that serves no soul-making purpose: a child dying of meningitis, a village buried in a mudslide, a person whose mind is erased by Alzheimer's. These don't develop anyone's virtue, least of all the victim's. Hick conceded that such evils remain a mystery under his theodicy (*Evil and the God of Love*, 1966, ch. 17).` },
    { h: "Infants and animals can't be 'made'", t: `About half of all children born in human history died before adulthood, many before they could form moral character at all (see [[problem-of-evil]]). Animals have no soul-making to do. Suffering that falls on beings who cannot grow from it can't be justified by growth.` },
    { h: "Suffering often degrades character", t: `Severe trauma frequently produces PTSD, depression, addiction, and cruelty, not virtue. Research on "post-traumatic growth" shows that some people report growth after adversity, but this is far from universal, and its measurement is debated (Jayawickreme & Blackie, 2014). A soul-making God would use a far less erratic tool.` },
    { h: "The proportion problem", t: `A world with real challenges, uncertainty, and consequences would develop character without the Holocaust, smallpox, or child abuse. A gym builds strength without breaking bones. The theodicy justifies *some* hardship, not the amount and kinds we observe.` }
  ],
  replies: [
    { q: "Suffering made me stronger and closer to God.", a: `I'm glad you came through it, and that experience is real for many people. But the theodicy needs suffering in general to serve that purpose, and most of it falls on people who aren't strengthened, or on infants and animals who can't be. The fact that some people grow through hardship is what we'd expect on naturalism too: human resilience is a well-studied psychological capacity.`, k: "suffering made me stronger closer to god character growth hardship" }
  ],
  sources: [
    "Hick, J. (1966/2010). Evil and the God of Love. Palgrave Macmillan.",
    "Irenaeus. Against Heresies IV.37–39.",
    "Jayawickreme, E. & Blackie, L. (2014). 'Post-traumatic Growth as Positive Personality Change: Evidence, Controversies and Future Directions.' European Journal of Personality 28(4): 312–331.",
    "Adams, M. M. (1999). Horrendous Evils and the Goodness of God. Cornell University Press."
  ],
  keys: "soul making suffering builds character growth hick irenaean vale of soul making makes us stronger virtue courage compassion",
  rel: ["problem-of-evil", "animal-suffering", "free-will-defense"]
},
{
  id: "skeptical-theism",
  cat: "evil",
  title: "Skeptical Theism: We Can't Know God's Reasons",
  who: "Stephen Wykstra (CORNEA, 1984); Michael Bergmann (2001); Daniel Howard-Snyder; Isaiah 55:8–9; Job 38–41",
  claim: `Our inability to see a reason for some evil is not good evidence that there is no reason. The gap between God's knowledge and ours is like the gap between a parent's and an infant's. An infant cannot understand why it is getting a vaccination. We have no reason to think the goods, evils, and connections between them that we know of are representative of all there are. So "pointless-looking suffering" doesn't count against God.`,
  short: `If we really can't judge whether an evil is justified by goods beyond our understanding, then we can't judge anything about what God would do. That includes whether he would keep his promises, tell the truth in scripture, or reward the faithful. It also undermines our own moral decisions: should we prevent a child's suffering, if it might serve an unknown greater good? The cure destroys the patient, and makes theism compatible with any possible world.`,
  points: [
    { h: "The moral skepticism objection", t: `If I should not infer from "I see no justifying reason for this child's torture" to "there probably isn't one," then when I witness a child being tortured, I equally cannot judge that I should intervene: perhaps God allows it for unknown goods. Skeptical theism thus undermines everyday moral reasoning (Maitzen, 2013; Almeida & Oppy, 2003). Most skeptical theists act as if suffering should be prevented, which suggests they don't really accept the premise.` },
    { h: "It undermines revelation", t: `If God might have reasons we can't grasp for permitting horrendous evil, he might have reasons we can't grasp for deceiving us: for scripture to be false, for the resurrection appearances to be illusions, for heaven to be a lie. Erik Wielenberg ("Skeptical Theism and Divine Lies," *Religious Studies*, 2010) presses this point. The skeptical theist can't consistently trust any of God's promises.` },
    { h: "It makes theism predict nothing", t: `A hypothesis compatible with any world, whether full of suffering or free of it, is not confirmed by anything. If the theist can't say what God would do, they also can't argue that fine-tuning, consciousness, or morality are what God would produce. Skeptical theism cancels the arguments for God along with the argument against.` },
    { h: "The parent analogy cuts the other way", t: `A loving parent who has to hurt an infant (a vaccination) comforts the child, stays with it, and explains as soon as it can understand. The parent is *present*. People suffering horrendous evil frequently experience no comfort, no presence, and no explanation, ever, and many die without any. That is the opposite of what the analogy predicts (see [[hiddenness]]).` }
  ],
  replies: [
    { q: "God's ways are higher than our ways (Isaiah 55:9). Who are you to judge God?", a: `If his ways are so far above ours that we can't evaluate them, we also can't call them *good*, since "good" means what we understand by goodness. Using our moral judgment to praise God, but not to question him, is inconsistent. "Who are you to judge?" applies equally to the person concluding that God is good, wise, and loving.`, k: "god's ways higher than ours isaiah 55 who are you to judge god job mysterious ways" },
    { q: "An infant can't understand why it gets a vaccination, and we're like infants compared to God.", a: `A good parent stays with the infant, comforts it, and later explains. God, by contrast, is absent from much horrendous suffering and never explains. The analogy also implies that we can't know whether a given evil should be prevented, which would make us unable to act morally.`, k: "infant vaccination parent child understand analogy" }
  ],
  sources: [
    "Wykstra, S. (1984). 'The Humean Obstacle to Evidential Arguments from Suffering: On Avoiding the Evils of \"Appearance\".' International Journal for Philosophy of Religion 16: 73–93.",
    "Bergmann, M. (2001). 'Skeptical Theism and Rowe's New Evidential Argument from Evil.' Noûs 35(2): 278–296.",
    "Almeida, M. & Oppy, G. (2003). 'Sceptical Theism and Evidential Arguments from Evil.' Australasian Journal of Philosophy 81(4): 496–516.",
    "Maitzen, S. (2013). 'The Moral Skepticism Objection to Skeptical Theism.' In McBrayer & Howard-Snyder (eds.), Blackwell Companion to the Problem of Evil.",
    "Wielenberg, E. (2010). 'Skeptical Theism and Divine Lies.' Religious Studies 46(4): 509–523."
  ],
  keys: "skeptical theism we can't know god's reasons mysterious ways higher than ours who are you to judge god infant parent cornea limited perspective",
  rel: ["problem-of-evil", "hiddenness", "unfalsifiable"]
},
{
  id: "compensation",
  cat: "evil",
  title: "Heaven Will Make Up for All Suffering",
  who: "Marilyn McCord Adams, Horrendous Evils and the Goodness of God (1999); Romans 8:18 ('the sufferings of this present time are not worthy to be compared with the glory which will be revealed toward us'); Revelation 21:4",
  claim: `However great earthly suffering is, it will be overwhelmed by eternal joy in God's presence. Marilyn Adams argues that God will "defeat" even horrendous evils by integrating them into each person's relationship with God, so that every life is a great good on the whole. Finite suffering compared with infinite bliss is like a moment's pain compared with a lifetime of happiness.`,
  short: `Compensation isn't justification. If I harm you without good reason and later pay you generously, I've compensated you, but I haven't shown that the harm was justified. The question is why an all-powerful, loving God allowed suffering he could have prevented, not whether he could make up for it afterward. The view also depends on an afterlife for which there's no independent evidence (see [[soul]], [[nde]]), and it struggles with traditional Christian teaching that many people go to hell instead.`,
  points: [
    { h: "Compensation versus justification", t: `A parent who lets a child be tortured, then buys the child wonderful gifts for the rest of its life, has not shown that letting the torture happen was justified. The problem of evil asks why God permits the suffering, and a later reward doesn't answer that question.` },
    { h: "It relies on an unsupported afterlife", t: `The response works only if there's an afterlife, which is part of what's in dispute. Using an unevidenced future to rescue a present inconsistency makes the theory unfalsifiable.` },
    { h: "Not for everyone", t: `On traditional Christian teaching, many people's lives end not in compensating bliss but in eternal punishment. Adams herself was a universalist: her theodicy requires that every person be saved. That's a minority view in Christian history, and it conflicts with many New Testament texts (see [[hell]], [[hell-alternatives]]).` }
  ],
  replies: [],
  sources: [
    "Adams, M. M. (1999). Horrendous Evils and the Goodness of God. Cornell University Press.",
    "Dostoevsky, F. (1880). The Brothers Karamazov, Book V.",
    "Martin, M. & Augustine, K. (eds.) (2015). The Myth of an Afterlife. Rowman & Littlefield.",
    "Trakakis, N. (2007). The God Beyond Belief: In Defence of William Rowe's Evidential Argument from Evil. Springer."
  ],
  keys: "heaven make up for suffering compensation eternal joy outweighs suffering horrendous evils defeated afterlife reward romans 8:18",
  rel: ["greater-good", "problem-of-evil", "hell-alternatives", "heaven-free-will"]
},
{
  id: "natural-evil",
  cat: "evil",
  title: "Natural Evil Is the Result of the Fall",
  who: "Augustine; Calvin; young-earth creationists; Plantinga's suggestion that natural evil may be caused by fallen angels (1974)",
  claim: `Disease, natural disasters, and death entered the world through human sin (Genesis 3; Romans 5:12; Romans 8:20–22). Creation was originally "very good," and the curse on the ground affected all of nature. Alternatively, natural evil may be caused by fallen angels (Plantinga), or a world with stable natural laws, which is necessary for free action, inevitably produces natural disasters.`,
  short: `Natural evil predates humans by hundreds of millions of years: disease, predation, parasitism, and mass extinctions are all in the fossil record long before *Homo sapiens*. There is no historical Fall from a paradise (see [[adam-eve]]). The "fallen angels cause earthquakes" suggestion is a logical possibility with no evidence. And stable laws do not require tectonic plates that kill 230,000 people in a single tsunami, or a gene-copying system that produces childhood cancers.`,
  points: [
    { h: "Death before the Fall", t: `Fossil evidence of disease, injury, parasitism, and predation goes back to the Cambrian, more than 500 million years ago. Dinosaurs had tumors (osteosarcoma in a *Centrosaurus* fibula, Ekhtiari et al., *Lancet Oncology*, 2020). At least five mass extinctions wiped out most species living at the time, including the end-Permian extinction (~252 million years ago), which eliminated about 90% of marine species. No human choice could have caused any of this.` },
    { h: "No paradise to fall from", t: `Population genetics shows the human population never went through a bottleneck of two individuals (see [[adam-eve]]). Genesis 2–3 is an etiological story, explaining why snakes crawl, why childbirth hurts, and why farming is hard, comparable to other ancient Near Eastern stories (Adapa, Gilgamesh's lost plant of immortality). Without a historical Fall, the theological explanation of natural evil disappears.` },
    { h: "Fallen angels: an unfalsifiable rescue", t: `Plantinga proposed that natural evil *could* be the free action of non-human persons. That is enough to answer a logical argument, but as an explanation of what actually happens it has no evidence. We know what causes earthquakes (plate tectonics) and cancer (mutation). It also requires God to allow demons to torture children with disease, which reopens the original problem.` },
    { h: "Stable laws don't require these laws", t: `A regular, law-governed world is compatible with far less suffering: without pain far beyond its warning function, without diseases that serve no purpose, without parasites like the guinea worm. God is supposed to have chosen the laws. Choosing laws that produce childhood leukemia and the botfly when others were available is still a choice.` }
  ],
  replies: [
    { q: "Creation groans because of sin (Romans 8:22). Disasters are a result of the fallen world.", a: `That is a theological claim from Paul, a first-century writer who also believed Adam was a historical individual through whom death entered the world (Romans 5:12). We now know death, disease, and disaster existed for hundreds of millions of years before humans, so the causal story Paul gives cannot be right.`, k: "creation groans fallen world romans 8 curse ground disasters sin" }
  ],
  sources: [
    "Plantinga, A. (1974). God, Freedom, and Evil, pp. 57–59.",
    "Ekhtiari, S. et al. (2020). 'First case of osteosarcoma in a dinosaur: a multimodal diagnosis.' Lancet Oncology 21(8): 1021–1022.",
    "Erwin, D. (2006). Extinction: How Life on Earth Nearly Ended 250 Million Years Ago. Princeton University Press.",
    "Southgate, C. (2008). The Groaning of Creation. Westminster John Knox.",
    "Walton, J. (2015). The Lost World of Adam and Eve. InterVarsity."
  ],
  keys: "natural evil fall caused disease earthquakes tsunami disasters curse fallen world sin entered romans 5 fallen angels cancer",
  rel: ["animal-suffering", "adam-eve", "problem-of-evil", "original-sin"]
},
{
  id: "animal-suffering",
  cat: "evil",
  title: "Animal Suffering Is Not a Problem for God",
  who: "Michael Murray, Nature Red in Tooth and Claw (2008); Christopher Southgate (2008); Trent Dougherty, The Problem of Animal Pain (2014); Cartesian view that animals don't feel pain",
  claim: `Animals may not suffer as we do; they may lack self-awareness and so the capacity for real suffering. Or animal pain is the necessary price of a world with evolving, law-governed life. Animal suffering may be redeemed in an afterlife for animals (Dougherty), or caused by the Fall or by demons.`,
  short: `For more than 500 million years, sentient creatures have been eaten alive, parasitized, starved, and frozen. Most animals born die soon after birth. All of this happened before any human sin and with no possible moral or spiritual benefit to the animals. This "Darwinian problem of evil" is widely regarded, including by Christian scholars, as among the hardest problems for theism. Denying that animals suffer contradicts the neuroscience.`,
  points: [
    { h: "Animals do feel pain", t: `The Cambridge Declaration on Consciousness (2012) states that non-human animals, including all mammals and birds and many other creatures such as octopuses, possess the neurological substrates of conscious experience. The 2024 New York Declaration on Animal Consciousness extends a realistic possibility of consciousness to all vertebrates and many invertebrates. Animals show pain behavior, opioid systems, and learned avoidance. Descartes' view that animals are machines has no scientific defenders.` },
    { h: "Suffering is built into the mechanism", t: `Many species are "r-selected": they produce huge numbers of offspring, almost all of whom die quickly. A cod can lay millions of eggs. Natural selection *works through* mass death, starvation, and predation. Darwin wrote to Asa Gray (1860): "I cannot persuade myself that a beneficent & omnipotent God would have designedly created the Ichneumonidae with the express intention of their feeding within the living bodies of caterpillars." A God who chose evolution as his creative method chose this suffering on purpose.` },
    { h: "No theodicy reaches it", t: `Animals cannot exercise moral free will, can't grow spiritually through suffering, and can't be morally warned. Their suffering precedes humans, so it isn't a consequence of the Fall. Christian philosopher John Schneider (*Animal Suffering and the Darwinian Problem of Evil*, Cambridge, 2020) concludes that the standard theodicies fail here and that theists must take a different approach entirely.` },
    { h: "An animal afterlife is ad hoc", t: `Some propose that animals will be compensated in heaven. Scripture gives no clear support, and it is unclear what it would mean for a trilobite or a mosquito larva to be compensated. The proposal is invented to rescue the theory, not suggested by any evidence.` }
  ],
  replies: [
    { q: "Animals don't really suffer the way humans do. They lack self-awareness.", a: `Pain doesn't require philosophical self-awareness. It requires nociception and conscious experience, which mammals and birds clearly have (the Cambridge Declaration on Consciousness, 2012). A dog with a broken leg suffers whether or not it can reflect on its own existence. And even if animals suffered *less* than us, hundreds of millions of years and trillions of creatures is an enormous total.`, k: "animals don't suffer feel pain lack self awareness soul machines" }
  ],
  sources: [
    "Darwin, C. (1860). Letter to Asa Gray, 22 May. Darwin Correspondence Project, letter no. 2814.",
    "Murray, M. (2008). Nature Red in Tooth and Claw. Oxford University Press.",
    "Schneider, J. (2020). Animal Suffering and the Darwinian Problem of Evil. Cambridge University Press.",
    "Low, P. et al. (2012). The Cambridge Declaration on Consciousness.",
    "The New York Declaration on Animal Consciousness (2024).",
    "Dougherty, T. (2014). The Problem of Animal Pain. Palgrave Macmillan."
  ],
  keys: "animal suffering animals pain predation evolution cruel nature red in tooth and claw darwin wasp ichneumon parasites before humans",
  rel: ["natural-evil", "problem-of-evil", "evolution"]
},
{
  id: "evil-god",
  cat: "evil",
  title: "The Evil-God Challenge",
  who: "Stephen Law, 'The Evil-God Challenge' (Religious Studies, 2010); responses by Max Baker-Hytch, Edward Feser, and others",
  claim: `(This entry presents a skeptic's argument and the theist's replies.) Theists hold that the arguments for God and the theodicies make belief in a *good* God reasonable. But they would immediately reject an all-powerful, all-*evil* God, because the world contains too much good: love, beauty, laughter, charity.`,
  short: `Stephen Law points out that every theodicy has a mirror image, a "reverse theodicy" explaining good in an evil God's world. Free will: an evil God gave us freedom so our cruelty would be more terrible. Soul-making: he gave us beauty and love so we would suffer their loss. Skeptical theism: his reasons for allowing good are beyond us. If the theodicies don't rescue an evil God, and they clearly don't, they don't rescue a good God either, because the world is roughly equally poorly explained by both. The best explanation is no god at all.`,
  points: [
    { h: "The symmetry", t: `The cosmological, fine-tuning, and ontological arguments point to a powerful creator, not a *good* one. On goodness, the arguments are neutral. The evidence from suffering argues against a good God. The evidence from good things argues against an evil one. Most people find the evil god absurd, and Law's point is that the good god is absurd for parallel reasons.` },
    { h: "Reverse theodicies work just as well", t: `Why does the evil God allow good? *Free will*: to make our moral failures and betrayals possible, since only free beings can truly hate. *Character-destruction*: he lets us develop virtues so we will suffer from despair when they fail. *Contrast*: we can only feel the full horror of evil after experiencing good. *Skeptical anti-theism*: his malevolent reasons are beyond our understanding. If we reject these as silly, consistency requires similar doubt about the originals.` },
    { h: "Responses and their costs", t: `Classical theists reply that evil is a privation (absence) of good, so a maximally evil being is incoherent (Feser; others). But that only blocks a God of *maximal* evil, not a powerful creator who is malevolent, indifferent, or mixed. Others say goodness and power are linked (a perfect being must be good). That relies on the perfect-being theology and ontological reasoning discussed under [[ontological]] and [[perfect-freedom]].` }
  ],
  replies: [
    { q: "Evil is a privation of good, so a perfectly evil being is impossible.", a: `Even if so, the challenge can be restated with a powerful, malicious (not maximally evil) creator, or an indifferent one. The question is why the evidence supports "good creator" over "malicious" or "indifferent" creator. And on the evidence, an indifferent universe fits best of all.`, k: "evil privation of good perfectly evil god incoherent augustine" }
  ],
  sources: [
    "Law, S. (2010). 'The Evil-God Challenge.' Religious Studies 46(3): 353–373.",
    "Weaver, C. G. (2015). 'Evilism, Moral Rationalism, and Reasons Internalism.' International Journal for Philosophy of Religion 77: 3–24.",
    "Madden, E. & Hare, P. (1968). Evil and the Concept of God. Charles C. Thomas."
  ],
  keys: "evil god challenge stephen law malevolent creator reverse theodicy why not an evil god symmetry",
  rel: ["problem-of-evil", "skeptical-theism", "free-will-defense"]
},
{
  id: "hiddenness",
  cat: "evil",
  title: "God Is Hidden So That Faith Can Be Free",
  who: "Pascal ('a hidden God,' Pensées); Michael Murray; Daniel Howard-Snyder & Paul Moser (eds.), Divine Hiddenness (2002); Isaiah 45:15",
  claim: `God doesn't make his existence overwhelmingly obvious because that would coerce belief and leave no room for a free, loving response. He gives enough evidence for those who seek him and enough obscurity for those who don't (Pascal). Anyone who truly seeks God will find him (Jeremiah 29:13; Matthew 7:7). Nonbelievers are not really seeking.`,
  short: `John Schellenberg's hiddenness argument: a perfectly loving God would always be open to a personal relationship with every capable creature, so he would ensure that no one who is not resisting is left unable to believe he exists. But there are non-resistant nonbelievers: sincere seekers who lose their faith despite wanting it, people raised in other religions who never encountered the Christian God, and most of the humans who ever lived. So there is no perfectly loving God. Knowing that God exists doesn't coerce love any more than knowing your parents exist does.`,
  points: [
    { h: "Schellenberg's argument", t: `(1) If a perfectly loving God exists, he would always be open to relationship with every finite person capable of it. (2) If so, then no such person would be non-resistantly unaware of God's existence, since belief that God exists is a precondition for relationship. (3) There exist non-resistant nonbelievers. (4) So no perfectly loving God exists. (*Divine Hiddenness and Human Reason*, 1993; *The Hiddenness Argument*, 2015.) This is now one of the most discussed arguments in philosophy of religion.` },
    { h: "Belief is not coercion", t: `Satan and the demons in Christian tradition know God exists and still rebel (James 2:19). The disciples saw miracles and still doubted and betrayed. Adam and Eve walked with God and disobeyed. Knowing that someone exists does not force you to love or obey them. A child who knows her parents exist can still reject them. So making his existence clear would not destroy freedom.` },
    { h: "Non-resistant nonbelief is real", t: `There are many documented cases of people who prayed, studied, and begged for faith, yet lost it. Many former pastors and missionaries are among them (see Dennett & LaScola, "Preachers Who Are Not Believers," 2010). The claim that every nonbeliever is secretly resisting is unfalsifiable, insulting, and contradicted by these testimonies.` },
    { h: "Most humans never had a chance", t: `*Homo sapiens* has existed for roughly 300,000 years. Christianity began 2,000 years ago and reached most of the Americas, Africa, and East Asia only in the last 500. The Population Reference Bureau estimates that around 117 billion humans have ever been born. The large majority lived and died without ever hearing of the Christian God. Their nonbelief can't have been resistance to him (see [[demographics]]).` },
    { h: "The Bible's God was not hidden", t: `In the biblical narratives God speaks audibly, appears in fire, parts seas, and shows himself directly to Moses, Abraham, Paul, and others. If revealing himself doesn't violate freedom then, it doesn't now. The current hiddenness is what we'd expect if those stories are legends and there is no God to reveal himself.` }
  ],
  replies: [
    { q: "Anyone who truly seeks God will find him. You're not seeking hard enough.", a: `That claim can't be tested: whenever a sincere seeker doesn't find God, you conclude they weren't sincere. Many former believers, including pastors and missionaries, prayed for years and lost their faith anyway. And billions of seekers found Allah, Krishna, or the Buddha instead, which is what you'd expect if the "finding" is shaped by culture rather than by God.`, k: "seek and you will find truly seek not seeking hard enough heart closed jeremiah 29 matthew 7" },
    { q: "If God revealed himself clearly, it would force people to believe and take away free will.", a: `Knowing something exists doesn't force anyone to love it. In Christian theology, Satan knows God exists and rebels anyway. The disciples saw miracles daily and still deserted Jesus. Knowledge is the *precondition* of a free relationship, not the end of it.`, k: "reveal himself force belief take away free will coerce faith overwhelming" },
    { q: "There's enough evidence for those who want to believe (Pascal).", a: `That makes belief depend on *wanting* to believe, which is a recipe for believing whatever you prefer. A God who rewards people for wanting to believe on insufficient evidence rewards wishful thinking. And people of every religion say the same thing about theirs.`, k: "enough evidence want to believe pascal enough light enough darkness" }
  ],
  sources: [
    "Schellenberg, J. L. (1993). Divine Hiddenness and Human Reason. Cornell University Press.",
    "Schellenberg, J. L. (2015). The Hiddenness Argument. Oxford University Press.",
    "Howard-Snyder, D. & Moser, P. (eds.) (2002). Divine Hiddenness: New Essays. Cambridge University Press.",
    "Green, A. & Stump, E. (eds.) (2016). Hidden Divinity and Religious Belief. Cambridge University Press.",
    "Dennett, D. & LaScola, L. (2010). 'Preachers Who Are Not Believers.' Evolutionary Psychology 8(1): 122–150.",
    "Kaneda, T. & Haub, C. (2022). 'How Many People Have Ever Lived on Earth?' Population Reference Bureau."
  ],
  keys: "divine hiddenness god hidden why doesn't god show himself reveal himself faith free will schellenberg nonresistant nonbelief seek and you will find evidence",
  rel: ["demographics", "problem-of-evil", "skeptical-theism", "unevangelized"]
},
{
  id: "without-excuse",
  cat: "evil",
  title: "Everyone Knows God Exists and Is Without Excuse",
  who: "Romans 1:18–21; Psalm 14:1 ('The fool has said in his heart, There is no God'); presuppositional apologists",
  claim: `"For the invisible things of him since the creation of the world are clearly seen, being perceived through the things that are made, even his everlasting power and divinity; that they may be without excuse" (Romans 1:20). Atheists don't really lack belief. They know God exists and suppress the truth because they don't want to submit to him.`,
  short: `This is an empirical claim about other people's minds, and the evidence contradicts it: many people sincerely searched for God, wanted to believe, and couldn't (see [[hiddenness]]). Most people in history believed in different gods or none, according to culture (see [[demographics]]). The claim can't be tested, since any denial is treated as further proof of suppression. And it's the kind of claim every religion can make about outsiders.`,
  points: [
    { h: "The evidence against it", t: `Former pastors and missionaries who lost their faith, often painfully and against their wishes, are well documented (Dennett & LaScola, 2010). Billions of people throughout history worshipped other gods or followed non-theistic traditions. If God's existence were plain to everyone, belief wouldn't track culture so closely.` },
    { h: "Unfalsifiable by design", t: `If someone says they don't believe, the claim says they're suppressing; if they search sincerely and don't find God, they're suppressing harder. A claim that treats every possible piece of contrary evidence as confirmation tells us nothing (see [[unfalsifiable]]).` },
    { h: "It's a weapon, not an argument", t: `Telling people what they "really" believe avoids engaging with their reasons. Every faith can say the same: some Muslim apologists claim that everyone is born knowing Allah (the hadith on *fitra*), and that Christians suppress it. The symmetry shows the claim is a feature of religious rhetoric, not evidence.` }
  ],
  replies: [
    { q: "Deep down you know God exists. You just don't want to be accountable.", a: `I can only tell you what I find when I examine my own mind and the evidence: I don't believe, and I'd follow good evidence wherever it led. You can't know my mind better than I do. And if I just wanted to avoid accountability, I could choose a religion with an easier path to forgiveness. Plenty of people want to believe and can't.`, k: "deep down you know god exists don't want to be accountable suppress the truth romans 1 without excuse" }
  ],
  sources: [
    "Romans 1:18–21.",
    "Schellenberg, J. L. (2015). The Hiddenness Argument. Oxford University Press.",
    "Dennett, D. & LaScola, L. (2010). 'Preachers Who Are Not Believers.' Evolutionary Psychology 8(1): 122–150.",
    "Maitzen, S. (2006). 'Divine Hiddenness and the Demographics of Theism.' Religious Studies 42(2): 177–191."
  ],
  keys: "without excuse romans 1 everyone knows god exists suppress the truth atheists know deep down fool says no god accountable",
  rel: ["hiddenness", "demographics", "unfalsifiable"]
},
{
  id: "demographics",
  cat: "evil",
  title: "The Geography of Belief",
  who: "(Skeptic argument.) Stephen Maitzen, 'Divine Hiddenness and the Demographics of Theism' (Religious Studies, 2006); Philip Kitcher, Life After Faith (2014)",
  claim: `(Apologetic response being challenged:) The distribution of belief reflects human choices, missionary history, and God's mysterious providence. God judges people by the light they had. Geography affects access to the gospel, not the truth of the gospel.`,
  short: `Religious belief is distributed almost entirely by geography and family. A child born in Saudi Arabia will almost certainly become a Muslim, one in Thailand a Buddhist, one in Mississippi a Protestant. If a loving God wanted all people to know him, belief would track sincerity or virtue, not birthplace. The pattern is exactly what we'd expect if religion is a cultural inheritance, and very surprising if one religion is a revelation from a God who wants to be known by everyone.`,
  points: [
    { h: "Maitzen's demographic argument", t: `Theistic belief is extremely unevenly distributed. In Saudi Arabia nearly everyone is a theist; in Thailand, about 95% are Buddhist and non-theistic. If God wanted a relationship with every person, why would whether you believe in him depend so strongly on where you were born? Naturalism predicts this distribution (religion spreads by culture and politics). Theism does not (Maitzen, *Religious Studies* 42, 2006).` },
    { h: "The symmetry of testimony", t: `Philip Kitcher argues that religious believers worldwide have the *same kind* of grounds for their faiths: upbringing, community, and personal experience. These grounds produce incompatible beliefs, so they can't be reliable guides to truth. A Christian who believes because of their upbringing has no epistemic advantage over a Hindu who believes because of theirs (*Life After Faith*, 2014).` },
    { h: "Conversion follows power, not evidence", t: `The map of Christianity follows the Roman Empire, then European colonial empires. The map of Islam follows the Arab conquests and trade routes. Mass conversions in history were often decided by rulers (Constantine; Clovis; Vladimir of Kiev in 988; Charlemagne's forced baptism of the Saxons). A revelation spreading by the routes of political power is what we'd expect from human institutions.` }
  ],
  replies: [
    { q: "God judges people by the light they have. Those who never heard will be judged fairly.", a: `If people who never hear can be saved by responding to what they had, then evangelism puts people at risk by giving them the chance to reject Christ explicitly. If they can't be saved, God condemned billions for where they were born. Either way, it doesn't explain why a God who wants relationship would let knowledge of himself depend on geography in the first place. See [[unevangelized]].`, k: "god judges by the light they had never heard fair judgment" }
  ],
  sources: [
    "Maitzen, S. (2006). 'Divine Hiddenness and the Demographics of Theism.' Religious Studies 42(2): 177–191.",
    "Kitcher, P. (2014). Life After Faith: The Case for Secular Humanism. Yale University Press.",
    "Pew Research Center (2012). The Global Religious Landscape.",
    "MacMullen, R. (1984). Christianizing the Roman Empire. Yale University Press."
  ],
  keys: "geography of belief born in saudi arabia india religion depends where you were born demographics culture upbringing accident of birth maitzen",
  rel: ["hiddenness", "why-christianity", "outsider-test", "unevangelized"]
},
{
  id: "hell",
  cat: "evil",
  title: "Hell Is Just",
  who: "Augustine, City of God XXI; Aquinas; Jonathan Edwards; C. S. Lewis, The Great Divorce (1945); Jonathan Kvanvig, The Problem of Hell (1993)",
  claim: `Sin against an infinitely holy God deserves infinite punishment (Anselm, Edwards). Hell is not God's cruelty but the natural consequence of people choosing to reject him: "the doors of hell are locked on the inside" (Lewis). God respects human choice even when people choose separation from him. Jesus himself taught about hell more than anyone else in the Bible.`,
  short: `Eternal conscious torment for finite wrongs committed in a few decades, often by people with no clear knowledge of God, violates any recognizable principle of justice: proportionality, rehabilitation, or mercy. The "infinite offense" principle (the severity of a wrong depends on the status of the one wronged) is rejected in every other context. And the "locked from the inside" view contradicts the biblical texts, which describe people thrown in against their will. Many Christian scholars now reject eternal torment, which shows the doctrine is not even secure within Christianity.`,
  points: [
    { h: "The proportionality problem", t: `No finite set of acts, committed in a finite life, deserves infinite suffering. Stephen Kershnar (2005) and Marilyn McCord Adams (1993) argue that eternal punishment is disproportionate on any plausible theory of desert. Under the doctrine as traditionally taught, a decent person who did not accept Christ suffers for eternity while a murderer who converted on his deathbed enjoys heaven. Justice is not merely strained there; it is reversed.` },
    { h: "The status principle is not a moral principle", t: `Anselm and Edwards argued that sins against an infinite being are infinitely bad. But we don't think that insulting a king is worse than insulting a peasant in any morally relevant sense; that is a feudal intuition. And by this logic, every sin, however small, would deserve infinite punishment, which collapses all moral distinctions among wrongs.` },
    { h: "The biblical texts describe punishment, not choice", t: `The "locked from the inside" picture (Lewis) is not what the New Testament describes. People are *cast* into the outer darkness (Matthew 22:13), *thrown* into the fire (Matthew 13:42, 50), sent away to "eternal punishment" (Matthew 25:46). In Revelation 14:10–11 the damned are "tormented with fire and sulfur in the presence of the holy angels and in the presence of the Lamb," and "the smoke of their torment goes up forever and ever." In Luke 16:24 the rich man pleads for relief and is refused.` },
    { h: "The doctrine has a human history", t: `The Hebrew Bible has no hell: the dead go to Sheol, a shadowy underworld for good and bad alike (Ecclesiastes 9:5, 10; Psalm 6:5). Ideas of post-mortem punishment entered Judaism in the Hellenistic period (1 Enoch; Daniel 12:2, c. 165 BCE), influenced by Persian and Greek ideas. "Gehenna" was the Valley of Hinnom outside Jerusalem, associated with earlier child sacrifice (Jeremiah 7:31). 2 Peter 2:4 even uses the Greek word *Tartarus*. Bart Ehrman's *Heaven and Hell* (2020) traces this development. See [[afterlife-origins]].` },
    { h: "Christians can't agree", t: `Origen and Gregory of Nyssa taught universal reconciliation. Today, annihilationism (the wicked are destroyed, not tormented) is held by evangelicals such as John Stott and Edward Fudge, and universalism has been argued by Orthodox theologian David Bentley Hart (*That All Shall Be Saved*, 2019). Hart argues that eternal torment is incompatible with God's goodness. When a doctrine's own adherents can't agree on whether the punishment is eternal torture, annihilation, or temporary purification, its basis in revelation is weak.` }
  ],
  replies: [
    { q: "People choose hell. God simply respects their choice to be separated from him.", a: `Who would knowingly choose eternal torment? If people "choose" it, they do so under ignorance, doubt, or deception, which makes their choice uninformed and so not fully free. A loving parent doesn't respect a child's choice to walk into a fire. And the New Testament texts describe the damned being *thrown* into fire and *pleading* for relief, not choosing to stay.`, k: "people choose hell respect choice separation locked from inside lewis" },
    { q: "Sin against an infinite God deserves infinite punishment.", a: `The seriousness of a wrong depends on the harm done and the wrongdoer's culpability, not on the rank of the victim. We reject "the higher the status, the worse the crime" for humans. And if every sin deserves infinite punishment, a child's lie and genocide deserve the same, which destroys moral proportion entirely.`, k: "infinite god infinite punishment sin against infinite holy deserve" }
  ],
  sources: [
    "Adams, M. M. (1993). 'The Problem of Hell: A Problem of Evil for Christians.' In Stump (ed.), Reasoned Faith. Cornell University Press.",
    "Kershnar, S. (2005). 'The Injustice of Hell.' International Journal for Philosophy of Religion 58: 103–123.",
    "Kvanvig, J. (1993). The Problem of Hell. Oxford University Press.",
    "Hart, D. B. (2019). That All Shall Be Saved. Yale University Press.",
    "Fudge, E. (2011). The Fire That Consumes, 3rd ed. Cascade.",
    "Ehrman, B. (2020). Heaven and Hell: A History of the Afterlife. Simon & Schuster.",
    "Bernstein, A. (1993). The Formation of Hell. Cornell University Press."
  ],
  keys: "hell eternal punishment torment lake of fire damnation unfair just infinite punishment finite sin choose hell separation from god annihilation universalism",
  rel: ["afterlife-origins", "unevangelized", "pascal", "atonement"]
},
{
  id: "hell-alternatives",
  cat: "evil",
  title: "Hell Isn't Eternal Torment (Annihilation or Universal Salvation)",
  who: "Annihilationists: John Stott, Edward Fudge, Clark Pinnock; universalists: Origen, Gregory of Nyssa, David Bentley Hart (That All Shall Be Saved, 2019), Robin Parry (The Evangelical Universalist, 2006)",
  claim: `The objection from hell targets a doctrine many Christians reject. Annihilationism holds that the wicked are destroyed, not tormented forever; the "eternal punishment" is permanent death. Christian universalism holds that God will ultimately reconcile everyone. Either way, the moral objection to eternal conscious torment falls away while Christianity remains intact.`,
  short: `These views soften the moral problem but create others. They conflict with the most natural reading of the New Testament texts that apologists use elsewhere, such as Matthew 25:46, which sets "eternal punishment" beside "eternal life." The church condemned universalism in the 6th century. If everyone is saved, the urgency of faith, evangelism, and the cross itself becomes unclear. And the remaining problem, why a loving God permits suffering at all, is untouched.`,
  points: [
    { h: "The texts", t: `"These will go away into eternal punishment, but the righteous into eternal life" (Matthew 25:46). The same word, *aiōnios*, describes both, so if one is permanent, so is the other. Revelation 14:11 ("The smoke of their torment goes up forever and ever. They have no rest day and night") and 20:10 ("tormented day and night forever and ever") are hard to read as annihilation. Annihilationists and universalists offer alternative readings, but they require reading the texts against their most natural sense.` },
    { h: "Tradition", t: `Origen's teaching of universal restoration (*apokatastasis*) was condemned in anathemas associated with the Council of Constantinople in 553. Eternal conscious punishment was the dominant view of Catholic, Orthodox, and Protestant churches for most of Christian history.` },
    { h: "Universalism raises new questions", t: `If everyone will be saved regardless, what is the point of faith, missions, or the warnings of Jesus? Many universalists answer that everyone will eventually choose God freely after death, which concedes that earthly faith doesn't determine destiny. That's hard to square with the New Testament's urgency ("now is the day of salvation," 2 Corinthians 6:2).` },
    { h: "It's a sign of revision under pressure", t: `The rise of annihilationism and universalism among modern Christians is driven largely by moral objections to eternal torment. When doctrines are revised to fit moral intuitions, that suggests the doctrines come from human reasoning rather than revelation.` }
  ],
  replies: [],
  sources: [
    "Fudge, E. (2011). The Fire That Consumes, 3rd ed. Cascade.",
    "Hart, D. B. (2019). That All Shall Be Saved. Yale University Press.",
    "MacDonald, G. [Robin Parry] (2006). The Evangelical Universalist. Cascade.",
    "Date, C., Stump, G. & Anderson, J. (eds.) (2014). Rethinking Hell. Cascade.",
    "Ramelli, I. (2013). The Christian Doctrine of Apokatastasis. Brill."
  ],
  keys: "hell not eternal annihilationism universalism conditional immortality everyone saved destroyed not tormented apokatastasis origen hart",
  rel: ["hell", "compensation", "afterlife-origins"]
},
{
  id: "cross-suffering",
  cat: "evil",
  title: "God Suffers With Us on the Cross",
  who: "Dietrich Bonhoeffer, letter of 16 July 1944 ('only the suffering God can help'); Jürgen Moltmann, The Crucified God (1972); John Stott, The Cross of Christ (1986); Timothy Keller, The Reason for God (2008), ch. 2; Alvin Plantinga, 'Supralapsarianism, or O Felix Culpa' (2004)",
  claim: `Christianity doesn't answer suffering from a distance. Its God entered the world's pain in Jesus: he was betrayed, tortured, and executed, and he cried out, "My God, my God, why have you forsaken me?" (Mark 15:34). John Stott wrote that he "could never myself believe in God, if it were not for the cross," and asked, "In the real world of pain, how could one worship a God who was immune to it?" Writing from a Nazi prison, Dietrich Bonhoeffer put it in six words: "only the suffering God can help." The cross also points toward an explanation. Alvin Plantinga argues that a world containing the Incarnation and the Atonement is so good that no world without them could match it, and such a world must contain sin and suffering to redeem. The Easter liturgy calls Adam's sin *felix culpa*, the "happy fault" that gained so great a Redeemer. Suffering isn't explained away; it's taken into a story of redemption, and the resurrection promises that it won't have the last word.`,
  short: `The cross offers solidarity, not a reason. A God who shares suffering he could have prevented hasn't thereby justified allowing it, and the comfort exists only if the Incarnation is true, which is the question at issue. The *felix culpa* version makes sin and horror the price of God's display of love, which Christian philosophers such as Marilyn McCord Adams and Kevin Diller have found troubling. Classical Christian theology denies that God suffers at all. Other religions offer the same consolation. And none of it reaches the suffering of animals over hundreds of millions of years before humans existed.`,
  points: [
    { h: "Solidarity isn't justification", t: `The problem of evil asks why a being with the power to prevent suffering permits so much of it. That this being also suffers doesn't answer the question. A parent who could stop a child's torment, and instead joins in it, has shown sympathy, not a good reason. The evidential argument ([[problem-of-evil]]) is untouched: the amount and distribution of suffering are still what we'd expect if no all-powerful, all-good being governs the world.` },
    { h: "It assumes what's in question", t: `The comfort depends on the Incarnation and the Atonement: that Jesus was God, and that his death accomplished something. If those claims are doubtful (see [[incarnation]] and [[atonement]]), so is the comfort. At most the argument shows that *if* Christianity is true, its God isn't indifferent. It can't be evidence that Christianity is true, and a consoling story isn't evidence of anything (see [[consequences]]).` },
    { h: "Felix culpa makes evil a means", t: `Plantinga's theodicy says God permitted sin and suffering because a world with incarnation and atonement is better than any world without them. Critics, including Christian philosophers, object that this makes the horrors of history part of the price of displaying divine love, and seems to require that God want sin to occur so that he can redeem it (Diller, 2008; Adams, 2008). It also implies that the redeemed should be glad of the evils that made their redemption necessary.` },
    { h: "Christians disagree that God suffers", t: `The classical doctrine of divine impassibility, taught by Aquinas and by the Westminster Confession, which describes God as "without body, parts, or passions," holds that the divine nature doesn't suffer at all; only Christ's human nature did. Defenders of the tradition, such as Thomas Weinandy (*Does God Suffer?*, 2000), regard a suffering God as a modern revision. So "God suffers with us" isn't settled Christian teaching, and the classical alternative removes much of the comfort.` },
    { h: "A suffering with a known end", t: `Crucifixion was a horrific death, and the Gospels portray real anguish. But on Mark's account Jesus was on the cross for about six hours (Mark 15:25, 34), and Pilate was surprised that he had died so soon (Mark 15:44). The Gospels also present him as predicting his resurrection ([[passion-predictions]]). Rome crucified thousands of others, and many people suffer for years with no expectation of rescue. If Jesus was God and knew how the story would end, his experience differed from theirs in the very respect that makes suffering hardest to bear.` },
    { h: "Other traditions offer the same comfort", t: `In Mahayana Buddhism, bodhisattvas vow to remain in the world of suffering until all beings are freed. Twelver Shi'ism venerates Husayn's martyrdom at Karbala as redemptive suffering (Ayoub, 1978). In the Bhagavad Gita, Krishna descends into the world whenever righteousness declines (4:7–8). If divine or saintly participation in suffering were evidence, it would be evidence for several religions at once ([[outsider-test]]).` },
    { h: "Nothing here reaches animal suffering", t: `Predation, parasitism, and disease caused suffering for hundreds of millions of years before humans existed ([[animal-suffering]]). None of it resulted from human sin, and the cross isn't presented as redeeming it. Some theologians, such as Christopher Southgate (*The Groaning of Creation*, 2008), extend God's co-suffering and a future compensation to animals, but that's a further hypothesis added to the theory, not something the cross explains.` }
  ],
  replies: [
    { q: "At least Christianity offers a God who understands our pain. Atheism offers nothing.", a: `Whether a belief is comforting doesn't bear on whether it's true (see [[consequences]]). Atheism isn't a rival consolation scheme; it's the absence of one belief. People without religion find solidarity in each other and in the work of reducing suffering, and that solidarity doesn't depend on a God who allowed the suffering in the first place.`, k: "atheism offers nothing comfort hope understands our pain consolation god who understands" },
    { q: "Jesus' suffering was infinite, because he bore the sins of the whole world.", a: `That's the doctrine of penal substitution, which Christians themselves dispute and which faces serious moral objections (see [[atonement]]). Even granting it, it concerns guilt, not the suffering of a child with leukemia, which no one claims was caused by that child's sin.`, k: "infinite suffering bore the sins of the world wrath penal substitution atonement" },
    { q: "God will wipe away every tear. The resurrection shows suffering doesn't have the last word.", a: `A future reward doesn't explain why the suffering was permitted (see [[compensation]]). And the promise depends on the resurrection having happened, which is examined in [[minimal-facts]].`, k: "wipe away every tear revelation 21 resurrection last word new creation make all things new" }
  ],
  sources: [
    "Bonhoeffer, D. Letters and Papers from Prison, ed. E. Bethge. Letter of 16 July 1944.",
    "Moltmann, J. (1974). The Crucified God. SCM Press. German original, Der gekreuzigte Gott, 1972.",
    "Stott, J. (1986). The Cross of Christ. InterVarsity Press.",
    "Keller, T. (2008). The Reason for God. Dutton, ch. 2.",
    "Plantinga, A. (2004). 'Supralapsarianism, or “O Felix Culpa”.' In P. van Inwagen (ed.), Christian Faith and the Problem of Evil. Eerdmans.",
    "Diller, K. (2008). 'Are Sin and Evil Necessary for a Really Good World? Questions for Alvin Plantinga's Felix Culpa Theodicy.' Faith and Philosophy 25(1): 87–101.",
    "Adams, M. M. (2008). 'Plantinga on “Felix Culpa”: Analysis and Critique.' Faith and Philosophy 25(2).",
    "Weinandy, T. G. (2000). Does God Suffer? T&T Clark / University of Notre Dame Press.",
    "Westminster Confession of Faith (1646), ch. 2, sec. 1.",
    "Ayoub, M. (1978). Redemptive Suffering in Islam: A Study of the Devotional Aspects of 'Ashura' in Twelver Shi'ism. Mouton.",
    "Southgate, C. (2008). The Groaning of Creation: God, Evolution, and the Problem of Evil. Westminster John Knox."
  ],
  keys: "god suffers with us cross suffering crucified god god on the cross jesus suffered too understands our pain felix culpa o happy fault theodicy of the cross bonhoeffer moltmann stott keller only the suffering god can help why have you forsaken me god knows suffering",
  rel: ["problem-of-evil", "greater-good", "compensation", "atonement", "incarnation", "animal-suffering"]
}
]);
