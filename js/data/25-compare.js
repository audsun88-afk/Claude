/* The outsider test as a table: the kinds of evidence offered for Christianity, and the
 * parallel claims made for other traditions. Cells are short; rel links to library entries. */
DEF_SET("compare", {
  traditions: ["Christianity", "Islam", "Latter-day Saints", "Hindu traditions", "Buddhism"],
  rows: [
    {
      kind: "A founding miracle with named witnesses",
      cells: [
        "The risen Jesus appeared to Peter, the Twelve, James, and 'more than five hundred' (1 Corinthians 15:5–7).",
        "The Quran reports the splitting of the moon (54:1–2); hadith collections name companions who witnessed Muhammad's miracles.",
        "Eleven men signed statements that they saw, and some that they handled, the golden plates (1830).",
        "Krishna lifts Mount Govardhana before the people of Vraja; modern devotees testified in large numbers to Sathya Sai Baba's materializations.",
        "The Buddha's Twin Miracle at Savatthi, performed before a crowd, is recounted in the Pali commentaries."
      ],
      rel: ["appearances", "five-hundred", "testimony", "mormonism"]
    },
    {
      kind: "Fulfilled prophecy",
      cells: [
        "Messianic prophecies; the Temple's destruction; Israel's rebirth in 1948.",
        "The Byzantine victory 'within a few years' (Quran 30:2–4); Muslim apologists read Deuteronomy 18:18 and Jesus' promised 'Helper' (John 14:16) as predicting Muhammad.",
        "Joseph Smith's 1832 'prophecy on war' predicting conflict beginning in South Carolina (Doctrine and Covenants 87).",
        "Puranic prophecies of the Kali Yuga's decline and of Kalki, the avatar to come.",
        "Prophecies of the decline of the Dharma and of Maitreya, the future Buddha."
      ],
      rel: ["messianic-prophecy", "prophecy-odds", "israel-1948", "signs-of-times"]
    },
    {
      kind: "A uniquely preserved scripture",
      cells: [
        "Over 5,000 Greek New Testament manuscripts.",
        "The Quran is said to be preserved letter for letter and to be inimitable (2:23).",
        "Joseph Smith called the Book of Mormon 'the most correct of any book on earth' (1841).",
        "The Vedas were transmitted orally for some three thousand years with extraordinary fidelity.",
        "The Pali Canon was fixed by recitation at councils of monks and later written down."
      ],
      rel: ["manuscripts", "bible-survival", "textual-variants"]
    },
    {
      kind: "Rapid early growth",
      cells: [
        "About 40% per decade for three centuries (Stark).",
        "From Arabia to Spain and the Indus within a century of Muhammad's death.",
        "From six members in 1830 to a reported 17 million today.",
        "Ancient and continuous rather than founded; devotional movements spread rapidly.",
        "Spread across Asia, helped by Emperor Ashoka's missions in the 3rd century BCE."
      ],
      rel: ["christianity-growth", "moule-hole", "jesus-influence"]
    },
    {
      kind: "Martyrs and transformed lives",
      cells: [
        "Apostles and early martyrs; dramatic conversions.",
        "Early converts persecuted in Mecca; martyrs (shuhada) honored throughout Islamic history.",
        "Joseph Smith killed by a mob in 1844; persecution, expulsions, and the trek west.",
        "Saints and ascetics who renounced everything; devotees who died for their faith.",
        "Monks who endured persecution and self-sacrifice; lives transformed by practice."
      ],
      rel: ["martyrdom", "disciples-transformed", "transformation", "saints-holiness"]
    },
    {
      kind: "Inner witness and religious experience",
      cells: [
        "The witness of the Holy Spirit (Romans 8:16).",
        "Certainty of faith; Sufi experiences of union with God.",
        "A 'burning in the bosom' confirming the Book of Mormon (Moroni 10:4; D&C 9:8).",
        "Darshan, devotional ecstasy, and the realization of Brahman in samadhi.",
        "Meditative insight and the direct experience of awakening."
      ],
      rel: ["spirit-witness", "religious-experience", "dreams-visions"]
    },
    {
      kind: "Modern miracles",
      cells: [
        "Lourdes healings (about 70 recognized); Fatima; Pentecostal healings.",
        "Healings at saints' shrines; reports of miraculous signs and dreams.",
        "Healings through priesthood blessings.",
        "The 1995 'milk miracle' of Ganesha statues; healings attributed to gurus.",
        "Relics yielding sarira crystals; the preserved body of the lama Itigilov."
      ],
      rel: ["modern-miracles", "lourdes", "weeping-statues", "incorruptibles"]
    },
    {
      kind: "Philosophical arguments for its ultimate reality",
      cells: [
        "Aquinas's five ways, Leibniz's contingency argument, the kalam argument.",
        "The kalam argument was developed by Islamic theologians such as al-Ghazali; Avicenna's proof of the Necessary Existent.",
        "Few; the LDS God is embodied and part of an eternal universe, so classical natural theology fits poorly.",
        "Nyaya philosophers, notably Udayana, gave arguments for a creator, Ishvara.",
        "Buddhist philosophers such as Dharmakirti argued against a creator God."
      ],
      rel: ["kalam", "contingency", "classical-proofs", "eastern-claims"]
    },
    {
      kind: "Scientific foreknowledge",
      cells: [
        "'The circle of the earth' (Isaiah 40:22); the 'paths of the seas'.",
        "Embryology in Quran 23:12–14, popularized by Maurice Bucaille (1976).",
        "Rarely claimed.",
        "Claims that the Vedas anticipated modern cosmology and technology.",
        "Claims that Buddhist teaching anticipated quantum physics and neuroscience."
      ],
      rel: ["science-in-bible", "health-laws", "quantum-mind"]
    },
    {
      kind: "What it says about the others",
      cells: [
        "'No one comes to the Father, except through me' (John 14:6).",
        "Jesus was neither crucified nor divine (Quran 4:157; 5:72).",
        "Other churches had fallen into apostasy (Joseph Smith—History 1:19).",
        "Many traditions treat other paths as partial approaches to the same truth.",
        "Rejects a creator God and an eternal soul."
      ],
      rel: ["why-christianity", "outsider-test", "islam", "mormonism"]
    }
  ],
  note: "Every kind of evidence offered for Christianity is also offered, often with equal sincerity and detail, for traditions that contradict it. A Christian who examines the other columns with the skepticism they apply to them is running the outsider test (see [[outsider-test]])."
});
