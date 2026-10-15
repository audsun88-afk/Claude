/* Weak skeptic arguments. In these entries, `claim` is the weak skeptic
 * argument, `short` explains why it fails, and points give the stronger
 * argument to use instead. Flagged skeptic:true for the UI and the debate engine. */
DEF_ADD([
{
  id: "myth-jesus",
  cat: "honesty",
  skeptic: true,
  title: "'Jesus Never Existed'",
  who: "Jesus mythicists: Richard Carrier, On the Historicity of Jesus (2014); Robert M. Price; Earl Doherty; the film Zeitgeist (2007)",
  claim: `There's no contemporary evidence that Jesus existed. The Gospels are myths, Paul never mentions a historical Jesus, and the extra-biblical references are forgeries or hearsay. Jesus was a mythical figure, like Osiris or Hercules, later placed in history.`,
  short: `Nearly all historians of antiquity and New Testament scholars, including non-Christians like Bart Ehrman, conclude that Jesus existed. Paul knew Jesus' brother James and Peter personally (Galatians 1:18–19), and refers to Jesus as born of a woman, descended from David, betrayed, and crucified. Josephus mentions "James, the brother of Jesus who was called Christ." Crucifixion, a humiliating death for a messiah, is not what anyone would invent. Mythicism is a fringe view. The strong skeptical case doesn't need it: it grants a historical Jesus and argues he was an apocalyptic prophet who was not divine and did not rise.`,
  points: [
    { h: "Why historians accept a historical Jesus", t: `Paul's letters, written within about 20–25 years of Jesus' death, mention meeting Jesus' brother James (Galatians 1:19) and Peter. Paul refers to Jesus' Davidic descent (Romans 1:3), his birth (Galatians 4:4), his last supper (1 Corinthians 11:23–26), and his crucifixion. Multiple independent sources (Paul, Mark, material in Matthew and Luke not from Mark, John) refer to him. Josephus (*Antiquities* 20.200) and Tacitus (*Annals* 15.44) confirm his existence and execution.` },
    { h: "Why it matters", t: `Ehrman's *Did Jesus Exist?* (2012) and Maurice Casey's *Jesus: Evidence and Argument or Mythicist Myths?* (2014) review the case and find mythicism unconvincing. Relying on mythicism lets apologists dismiss skeptics as cranks and distracts from the stronger arguments.` },
    { h: "The stronger argument", t: `Accept that Jesus existed, and focus on what the evidence shows about him: an apocalyptic Jewish prophet who expected the imminent end of the age, didn't claim divinity in the earliest sources, and whose followers came to believe he was raised after his death through visionary experiences. See [[historical-jesus]], [[failed-return]], [[jesus-claimed-god]].` }
  ],
  replies: [],
  sources: [
    "Ehrman, B. (2012). Did Jesus Exist? The Historical Argument for Jesus of Nazareth. HarperOne.",
    "Casey, M. (2014). Jesus: Evidence and Argument or Mythicist Myths? Bloomsbury T&T Clark.",
    "Carrier, R. (2014). On the Historicity of Jesus. Sheffield Phoenix (the main mythicist case).",
    "Van Voorst, R. (2000). Jesus Outside the New Testament. Eerdmans."
  ],
  keys: "jesus never existed myth mythicism mythicist no evidence jesus existed fictional character carrier",
  rel: ["historical-jesus", "extrabiblical", "copycat"]
},
{
  id: "copycat",
  cat: "honesty",
  skeptic: true,
  title: "'Jesus Was Copied from Horus, Mithras, and Krishna'",
  who: "Kersey Graves (1875); Acharya S / D. M. Murdock; the film Zeitgeist (2007); popular internet memes",
  claim: `Jesus' story was copied from earlier gods. Horus was born of a virgin on December 25, had 12 disciples, was crucified, and rose after three days. Mithras and Krishna had the same story. Christianity is just a retelling of pagan sun-god myths.`,
  short: `Most of these specific claims are false. In Egyptian myth, Horus is conceived by Isis from the reassembled body of Osiris; he has no twelve disciples and isn't crucified. Mithras was born from a rock. Krishna isn't crucified. Many parallels in these lists were invented or distorted by 19th-century writers, and the sources cited don't support them. The scholarly "dying and rising gods" theory of Frazer has been heavily criticized (J. Z. Smith), though debated (Mettinger). There are genuine and useful parallels, such as divine births of great men and translation fables, but they need to be cited accurately.`,
  points: [
    { h: "The specific claims are false", t: `Horus: conceived when Isis revived the dismembered Osiris; no virgin birth in the Christian sense, no December 25, no twelve disciples, no crucifixion or three-day resurrection. Mithras: in Roman Mithraism, born from a rock (*petra genetrix*); the Roman cult is attested from the late 1st century CE, too late to have influenced the Gospels much. Krishna: killed by an arrow in the heel, not crucified. These "parallels" mostly trace to Kersey Graves's *The World's Sixteen Crucified Saviors* (1875), which cites no primary sources.` },
    { h: "The scholarly debate", t: `James Frazer's *The Golden Bough* (1890) grouped many gods as "dying and rising." J. Z. Smith argued this category was largely a construction. Tryggve Mettinger (*The Riddle of Resurrection*, 2001) argued that some ancient Near Eastern gods (Dumuzi, Baal, Melqart) really were thought to die and return, while concluding that the Christian resurrection belief wasn't simply derived from them. This is a real scholarly debate, not a settled case for copying.` },
    { h: "Better parallels", t: `The useful comparisons are documented ones. Greco-Roman biographies attributed divine conception to great men (Plato, Alexander, Augustus; see [[virgin-birth]]). Disappearing bodies and post-mortem appearances signaled divinization (Romulus; see [[empty-tomb]]). Wonder-workers like Apollonius of Tyana and Vespasian were credited with healings (see [[jesus-miracles]]). Jewish texts had exalted mediator figures (see [[jesus-claimed-god]]). These show that the Christian story drew on its cultural world, without fabrications.` }
  ],
  replies: [],
  sources: [
    "Smith, J. Z. (1987). 'Dying and Rising Gods.' In Eliade (ed.), Encyclopedia of Religion, vol. 4. Macmillan.",
    "Mettinger, T. (2001). The Riddle of Resurrection: 'Dying and Rising Gods' in the Ancient Near East. Almqvist & Wiksell.",
    "Beck, R. (2006). The Religion of the Mithras Cult in the Roman Empire. Oxford University Press.",
    "Miller, R. C. (2015). Resurrection and Reception in Early Christianity. Routledge."
  ],
  keys: "jesus copied horus mithras krishna pagan gods zeitgeist december 25 virgin birth 12 disciples crucified sun god copycat",
  rel: ["myth-jesus", "virgin-birth", "empty-tomb", "christmas-pagan"]
},
{
  id: "nicaea",
  cat: "honesty",
  skeptic: true,
  title: "'Constantine Chose the Books of the Bible at Nicaea'",
  who: "Dan Brown, The Da Vinci Code (2003); popular internet claims",
  claim: `At the Council of Nicaea in 325, Emperor Constantine decided which books would go into the Bible, suppressed the other gospels, and voted Jesus into divinity.`,
  short: `Nicaea didn't discuss the biblical canon. It dealt with the Arian controversy over the Son's relationship to the Father, the date of Easter, and church discipline. Jesus' divine status was already widely held; the question was how to describe it. The canon formed gradually over centuries (see [[canon]]). The real history is more useful to skeptics: the canon was disputed for centuries, and the doctrine of the Trinity was settled through councils with imperial involvement.`,
  points: [
    { h: "What Nicaea did", t: `The Council of Nicaea (325) addressed Arius's teaching that the Son was created, producing the Nicene Creed with the term *homoousios*. It also addressed the date of Easter and various disciplinary matters. No ancient source says it decided the canon.` },
    { h: "The better argument", t: `The canon's formation over centuries, with disputed books and differing canons still today (see [[canon]]), and the development of Trinitarian doctrine through imperial councils (see [[trinity]]) are the real, documented history. They make the point that Christian scripture and doctrine have a human history, without myths.` }
  ],
  replies: [],
  sources: [
    "Ehrman, B. (2004). Truth and Fiction in The Da Vinci Code. Oxford University Press.",
    "Ayres, L. (2004). Nicaea and Its Legacy. Oxford University Press.",
    "Metzger, B. (1987). The Canon of the New Testament. Oxford University Press."
  ],
  keys: "constantine chose bible council of nicaea decided books da vinci code voted jesus divine suppressed gospels",
  rel: ["canon", "trinity"]
},
{
  id: "telephone",
  cat: "honesty",
  skeptic: true,
  title: "'The Bible Has Been Translated So Many Times It's Like a Game of Telephone'",
  who: "Popular claim",
  claim: `The Bible was translated from language to language over thousands of years, like a game of telephone, so what we have today has nothing to do with the originals.`,
  short: `Modern translations are made directly from Hebrew, Aramaic, and Greek manuscripts, not from a chain of translations. The real issue is *copying*: the surviving manuscripts differ in many places, and some passages were added or changed. That's a serious point, but the "telephone" claim exaggerates it and is easily refuted.`,
  points: [
    { h: "How translation works", t: `Translators work from critical editions of the original-language texts (the Biblia Hebraica Stuttgartensia for the Hebrew Bible; Nestle-Aland and the UBS Greek New Testament). A modern English Bible is one translation step from the Hebrew or Greek.` },
    { h: "The better argument", t: `Focus on what textual criticism actually shows: hundreds of thousands of variants, significant additions like the ending of Mark and the Johannine Comma, theologically motivated changes, and the gap between the surviving "initial text" and the lost originals (see [[textual-variants]], [[manuscripts]]).` }
  ],
  replies: [],
  sources: [
    "Metzger, B. & Ehrman, B. (2005). The Text of the New Testament, 4th ed. Oxford University Press.",
    "Tov, E. (2012). Textual Criticism of the Hebrew Bible, 3rd ed. Fortress."
  ],
  keys: "bible translated many times telephone game lost in translation changed over time translations",
  rel: ["textual-variants", "manuscripts"]
},
{
  id: "christmas-pagan",
  cat: "honesty",
  skeptic: true,
  title: "'Christmas and Easter Are Pagan, So Christianity Is False'",
  who: "Popular claim",
  claim: `Christmas is on the date of a pagan festival (Sol Invictus or Saturnalia), Christmas trees are pagan, and Easter comes from the goddess Eostre and fertility symbols like eggs and rabbits. So Christianity is just recycled paganism.`,
  short: `Some Christian customs did absorb earlier practices, but that has no bearing on whether Christian beliefs are true. The New Testament never gives Jesus' birth date, and the December 25 date's origins are debated (some scholars argue it came from a calculation tied to the date of the crucifixion). Easter is tied to Passover, not to Eostre; in most languages it's called by a name derived from *Pascha*. The argument is a genetic fallacy and should be dropped.`,
  points: [
    { h: "Irrelevant to truth", t: `A tradition's dates or decorations don't tell us whether its central claims are true. If Christianity were true, absorbing pagan customs wouldn't make it false; if it's false, its holiday customs aren't the reason.` },
    { h: "The better argument", t: `Focus on the real historical issues: the nativity stories' contradictions ([[nativity]]), the resurrection evidence ([[minimal-facts]]), and the cultural parallels that actually bear on the content of the Christian story ([[virgin-birth]], [[empty-tomb]]).` }
  ],
  replies: [],
  sources: [
    "Talley, T. (1986). The Origins of the Liturgical Year. Pueblo.",
    "Hutton, R. (1996). The Stations of the Sun: A History of the Ritual Year in Britain. Oxford University Press."
  ],
  keys: "christmas pagan december 25 saturnalia sol invictus easter eostre eggs bunny pagan origins christmas tree",
  rel: ["copycat", "nativity"]
},
{
  id: "dark-ages",
  cat: "honesty",
  skeptic: true,
  title: "'Christianity Caused the Dark Ages and Has Always Opposed Science'",
  who: "John William Draper (1874); Andrew Dickson White (1896) ('conflict thesis'); popular claims (e.g., Christians believed in a flat earth; Galileo was tortured)",
  claim: `When Christianity took over, it plunged Europe into the Dark Ages, destroyed ancient learning, burned the Library of Alexandria, taught that the earth was flat, and has fought science ever since, torturing Galileo.`,
  short: `Historians have discredited much of this. Educated medieval Christians knew the earth was round. The early medieval decline in Western Europe had many causes, especially the collapse of Roman political and economic structures. Monasteries preserved many classical texts, and medieval universities and scholars made real advances. Galileo was tried and placed under house arrest, but not tortured. The Library of Alexandria declined over centuries. The real record, which includes the Galileo trial, the Index, and the burning of heretics, is mixed, and the accurate version is strong enough.`,
  points: [
    { h: "Myths to drop", t: `The flat-earth myth was largely a 19th-century invention (Washington Irving's 1828 biography of Columbus; Russell, *Inventing the Flat Earth*, 1991). Galileo was threatened with torture, as was standard procedure, but not tortured. The Library of Alexandria declined over centuries; the Serapeum, a daughter library, was destroyed by Christians in 391, but the main library was likely long diminished by then. See Numbers (ed.), *Galileo Goes to Jail* (2009).` },
    { h: "The better argument", t: `Point to the documented record: Galileo's trial and house arrest; Copernicus on the Index until 1835; the burning of Bruno and Servetus; resistance to evolution, which continues in creationism today; and, most importantly, the fact that science has advanced by explaining nature without supernatural causes (see [[science-founders]]).` }
  ],
  replies: [],
  sources: [
    "Numbers, R. (ed.) (2009). Galileo Goes to Jail and Other Myths about Science and Religion. Harvard University Press.",
    "Russell, J. B. (1991). Inventing the Flat Earth. Praeger.",
    "Lindberg, D. (2007). The Beginnings of Western Science, 2nd ed. University of Chicago Press.",
    "Grant, E. (1996). The Foundations of Modern Science in the Middle Ages. Cambridge University Press."
  ],
  keys: "dark ages christianity caused flat earth medieval church burned library of alexandria galileo tortured science religion war conflict",
  rel: ["science-founders", "christian-civilization"]
},
{
  id: "religion-wars",
  cat: "honesty",
  skeptic: true,
  title: "'Religion Causes Most Wars, So It Must Be False'",
  who: "Popular claim",
  claim: `Religion has caused more wars and killing than anything else in history: the Crusades, the Inquisition, the wars of religion. That shows it's false and harmful.`,
  short: `Most wars have been fought over territory, resources, and power. The *Encyclopedia of Wars* (Phillips & Axelrod, 2004) classifies about 7% of the wars it lists as primarily religious. Religion has contributed to many conflicts, and some atrocities, such as the Crusades, the Thirty Years' War, and witch hunts, were driven by religious conviction. But neither harm nor benefit shows whether a religion is true: that's the same argument-from-consequences mistake apologists make (see [[consequences]]).`,
  points: [
    { h: "Overstated", t: `War has many causes; religion is sometimes a primary cause, often a contributing one, and often a banner for other motives. Claiming religion causes "most wars" is easy to refute.` },
    { h: "The better argument", t: `The useful point is narrower: specific religious doctrines (such as the herem commands, [[genocide]]; harsh laws, [[harsh-laws]]; exclusive salvation, [[unevangelized]]) have been used to justify violence, and texts claimed to be perfect moral guides contain such commands. That speaks to the moral argument and to inerrancy. But the main question, whether the claims are true, is answered by evidence, not consequences.` }
  ],
  replies: [],
  sources: [
    "Phillips, C. & Axelrod, A. (2004). Encyclopedia of Wars. Facts on File.",
    "Cavanaugh, W. (2009). The Myth of Religious Violence. Oxford University Press.",
    "Wilson, P. (2009). The Thirty Years War. Harvard University Press."
  ],
  keys: "religion causes most wars crusades inquisition violence religion is harmful killing in the name of god",
  rel: ["consequences", "atheist-regimes", "genocide"]
},
{
  id: "science-disproved",
  cat: "honesty",
  skeptic: true,
  title: "'Science Has Disproved God'",
  who: "Popular claim",
  claim: `Science has proven that God doesn't exist. Evolution, the Big Bang, and neuroscience have explained everything, so there's no room left for God.`,
  short: `Science hasn't disproved every conception of God, and claiming so invites easy rebuttal. A deistic God who set up the universe and never intervenes isn't refuted by any experiment. What science has done is refute specific claims (a young earth, a global flood, a first human pair), remove the need for God as an explanation in one area after another, and fail to find the effects of prayer and miracles. The strong case combines this with philosophy and history.`,
  points: [
    { h: "What science shows", t: `Science has falsified many specific religious claims: the age of the earth, the order of creation, the flood, Adam and Eve as sole ancestors, and the efficacy of intercessory prayer. It has explained phenomena once attributed to God: disease, lightning, the diversity of life, and the motions of the planets. That pattern strongly supports naturalism as a working hypothesis.` },
    { h: "The better argument", t: `Say: the specific God of Christianity makes many testable claims that have failed; the arguments for God fail; and the evidence of suffering, hiddenness, and the dependence of mind on brain counts against him. See [[cumulative-case]], [[problem-of-evil]], [[young-earth]], [[prayer-studies]].` }
  ],
  replies: [],
  sources: [
    "Stenger, V. (2007). God: The Failed Hypothesis. Prometheus.",
    "Philipse, H. (2012). God in the Age of Science? Oxford University Press.",
    "Carroll, S. (2016). The Big Picture. Dutton."
  ],
  keys: "science has disproved god science proved no god evolution big bang explained everything",
  rel: ["unfalsifiable", "science-faith", "cumulative-case"]
}
]);
