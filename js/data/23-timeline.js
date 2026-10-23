/* Timelines. Years are negative for BCE. Each preset has lanes; each event sits in one lane.
 * y2 marks a span; approx marks a scholarly estimate; short is the label drawn on the chart; gaps are the intervals the chart emphasizes. */
DEF_SET("timeline", {
  presets: [
    {
      id: "hebrew",
      name: "The Hebrew Bible",
      blurb: "Where the Bible sets its stories, what history and archaeology show, and when the texts were written. The distance between the second and third lanes is the point.",
      from: -2100, to: 1100,
      lanes: ["Where the Bible sets it", "History & archaeology", "Texts written or copied"],
      events: [
        { y: -2000, lane: 0, label: "Abraham", note: "Traditional dating from biblical chronology. The stories contain 1st-millennium anachronisms such as domesticated camels and Philistines.", rel: ["patriarchs"], approx: true },
        { y: -1446, lane: 0, label: "The Exodus (1 Kings 6:1)", short: "Exodus (1 Kgs 6:1)", note: "1 Kings 6:1 implies about 1446 BCE; others prefer the 13th century. No archaeological trace of the event has been found.", rel: ["exodus"] },
        { y: -1406, y2: -1380, lane: 0, label: "Conquest of Canaan", short: "Conquest", note: "Many of the cities said to be conquered were unoccupied or unwalled at the time.", rel: ["conquest"], approx: true },
        { y: -1010, y2: -931, lane: 0, label: "David and Solomon", short: "David, Solomon", note: "The Bible describes a great united kingdom; archaeology suggests a modest chiefdom in Jerusalem.", rel: ["david-solomon"], approx: true },
        { y: -605, y2: -536, lane: 0, label: "Daniel in Babylon", note: "The book is set in the 6th century but its detailed 'predictions' end in the 160s BCE.", rel: ["daniel"] },
        { y: -1208, lane: 1, label: "Merneptah Stele", note: "An Egyptian inscription mentioning 'Israel' as a people in Canaan: the earliest reference outside the Bible.", rel: ["exodus", "archaeology"] },
        { y: -1200, y2: -1000, lane: 1, label: "Highland villages appear", short: "Highland villages", note: "Israel emerges from within Canaanite culture in the central highlands.", rel: ["exodus", "conquest"], approx: true },
        { y: -840, lane: 1, label: "Tel Dan and Mesha stelae", short: "Tel Dan, Mesha", note: "The Tel Dan inscription refers to the 'House of David', supporting a historical David.", rel: ["david-solomon", "archaeology"], approx: true },
        { y: -722, lane: 1, label: "Assyria destroys Samaria", short: "Fall of Samaria", note: "The northern kingdom of Israel falls.", rel: [] },
        { y: -701, lane: 1, label: "Sennacherib besieges Jerusalem", short: "Sennacherib's siege", note: "Recorded in both 2 Kings and Sennacherib's own annals.", rel: ["archaeology"] },
        { y: -586, lane: 1, label: "Babylon destroys Jerusalem", short: "Fall of Jerusalem", note: "The First Temple falls; the exile begins.", rel: ["babylon-nineveh"] },
        { y: -539, lane: 1, label: "Cyrus takes Babylon", short: "Cyrus", note: "The Cyrus Cylinder credits Marduk with choosing him.", rel: ["cyrus"] },
        { y: -515, lane: 1, label: "Second Temple completed", short: "Second Temple", note: "Under Darius, not Cyrus.", rel: ["cyrus"] },
        { y: -167, y2: -164, lane: 1, label: "Antiochus IV and the Maccabean revolt", short: "Maccabean revolt", note: "The crisis that the Book of Daniel describes in detail, as 'prophecy'.", rel: ["daniel", "daniel-9"] },
        { y: -622, lane: 2, label: "Josiah's 'Book of the Law'", short: "Josiah's lawbook", note: "2 Kings 22 reports a law book 'found' in the Temple, usually identified with an early form of Deuteronomy.", rel: ["mosaic-authorship"] },
        { y: -600, lane: 2, label: "Ketef Hinnom amulets", short: "Ketef Hinnom", note: "Silver amulets with the priestly blessing of Numbers 6:24–26: the oldest surviving biblical text.", rel: ["archaeology"], approx: true },
        { y: -540, lane: 2, label: "Second Isaiah (Isa 40–55)", short: "Second Isaiah", note: "Written during the exile, when Cyrus was already conquering.", rel: ["cyrus", "isaiah-53"], approx: true },
        { y: -500, y2: -350, lane: 2, label: "The Torah completed", short: "Torah completed", note: "Most scholars date the final form of the five books to the Persian period.", rel: ["mosaic-authorship"], approx: true },
        { y: -250, lane: 2, label: "Septuagint (Torah)", short: "Septuagint", note: "The Greek translation used by the New Testament writers.", rel: ["isaiah-7-14"], approx: true },
        { y: -165, lane: 2, label: "Daniel written", note: "Its forecasts are accurate up to about 165 BCE and then fail.", rel: ["daniel", "daniel-9"], approx: true },
        { y: -250, y2: 68, lane: 2, label: "Dead Sea Scrolls copied", short: "Dead Sea Scrolls", note: "They show a Hebrew text still fluid in this period.", rel: ["dead-sea-scrolls"], approx: true },
        { y: 930, lane: 2, label: "Aleppo Codex", note: "The earliest near-complete Masoretic manuscript.", rel: ["dead-sea-scrolls"], approx: true },
        { y: 1008, lane: 2, label: "Leningrad Codex", note: "The oldest complete Hebrew Bible.", rel: ["dead-sea-scrolls"] }
      ],
      gaps: [
        { from: -1446, to: -1208, label: "≈240 years: traditional Exodus to the first mention of 'Israel'" },
        { from: -1400, to: -500, label: "≈900 years: Moses to the finished Torah" },
        { from: -550, to: -165, label: "≈400 years: Daniel's setting to its writing" }
      ]
    },
    {
      id: "christian",
      name: "Christian origins",
      blurb: "Events, the texts that report them, and the manuscripts and institutions that preserved them. Each gap is time in which tradition could grow.",
      from: -10, to: 420,
      lanes: ["Events", "Texts written", "Manuscripts & institutions"],
      events: [
        { y: -4, lane: 0, label: "Herod the Great dies", short: "Herod dies", note: "Matthew places Jesus' birth before this.", rel: ["nativity"] },
        { y: 6, lane: 0, label: "Census of Quirinius", short: "Quirinius census", note: "Luke places Jesus' birth at this census, about ten years after Herod's death.", rel: ["nativity"] },
        { y: 30, lane: 0, label: "Crucifixion", note: "Around 30 or 33 CE.", rel: ["jesus-died", "historical-jesus"], approx: true },
        { y: 33, lane: 0, label: "Paul's conversion", note: "Paul's visionary experience.", rel: ["paul-conversion"], approx: true },
        { y: 62, lane: 0, label: "James executed", note: "Josephus, Antiquities 20.200.", rel: ["james-conversion", "martyrdom"] },
        { y: 64, lane: 0, label: "Nero's persecution", short: "Nero", note: "Tacitus, Annals 15.44.", rel: ["martyrdom", "extrabiblical"] },
        { y: 66, y2: 70, lane: 0, label: "Jewish War; Temple destroyed", short: "Temple destroyed", note: "The event that Mark 13 and Luke 21 appear to reflect.", rel: ["temple-prediction", "early-gospels"] },
        { y: 132, y2: 135, lane: 0, label: "Bar Kokhba revolt", note: "Rabbi Akiva hails Bar Kokhba as messiah.", rel: ["messiah-before-70"] },
        { y: 312, lane: 0, label: "Constantine converts", note: "Imperial patronage begins.", rel: ["christianity-growth"] },
        { y: 325, lane: 0, label: "Council of Nicaea", short: "Nicaea", note: "Defines the Son as 'of one substance' with the Father.", rel: ["nicaea", "trinity"] },
        { y: 380, lane: 0, label: "Edict of Thessalonica", note: "Nicene Christianity becomes the empire's religion.", rel: ["christianity-growth", "church-survival"] },
        { y: 50, y2: 58, lane: 1, label: "Paul's letters", note: "The earliest Christian texts. No miracle of Jesus is mentioned.", rel: ["paul-confirms", "creed-1cor15"], approx: true },
        { y: 70, lane: 1, label: "Mark", note: "Anonymous; around 70 CE.", rel: ["early-gospels", "gospel-authorship"], approx: true },
        { y: 80, y2: 90, lane: 1, label: "Matthew and Luke", short: "Matthew, Luke", note: "Both copy Mark; anonymous.", rel: ["synoptic-dependence"], approx: true },
        { y: 85, y2: 115, lane: 1, label: "Acts", note: "Dated 80–90 by many scholars; some argue for 110–120.", rel: ["luke-historian"], approx: true },
        { y: 90, y2: 110, lane: 1, label: "John", note: "The most theologically developed Gospel.", rel: ["john-reliable"], approx: true },
        { y: 93, lane: 1, label: "Josephus, Antiquities", short: "Josephus", note: "Mentions James 'the brother of Jesus'; the Testimonium is partly interpolated.", rel: ["extrabiblical"] },
        { y: 116, lane: 1, label: "Tacitus, Annals", short: "Tacitus", note: "Reports Christus executed under Pilate.", rel: ["extrabiblical"], approx: true },
        { y: 120, lane: 1, label: "Papias", note: "Our earliest testimony about Gospel authors, quoted by Eusebius.", rel: ["gospel-authorship"], approx: true },
        { y: 155, lane: 1, label: "Justin Martyr", note: "Sunday worship; 'memoirs of the apostles', not yet named Gospels.", rel: ["sunday-worship", "gospel-authorship"], approx: true },
        { y: 180, lane: 1, label: "Irenaeus names four Gospels", short: "Irenaeus", note: "The first author to name all four.", rel: ["gospel-authorship", "canon"], approx: true },
        { y: 125, y2: 225, lane: 2, label: "P52", note: "A scrap of John, dated paleographically within a broad range.", rel: ["early-manuscripts", "manuscripts"], approx: true },
        { y: 175, y2: 250, lane: 2, label: "P45, P46, P66, P75", note: "The earliest substantial manuscripts.", rel: ["early-manuscripts", "manuscripts"], approx: true },
        { y: 326, lane: 2, label: "Holy Sepulchre site chosen", short: "Holy Sepulchre", note: "No earlier record of Christians venerating a tomb.", rel: ["tomb-veneration"], approx: true },
        { y: 330, y2: 360, lane: 2, label: "Codex Sinaiticus and Vaticanus", short: "Sinaiticus, Vaticanus", note: "The earliest complete or near-complete New Testaments.", rel: ["manuscripts", "textual-variants"], approx: true },
        { y: 367, lane: 2, label: "Athanasius lists the 27 books", short: "Athanasius's 27 books", note: "The first list matching today's New Testament.", rel: ["canon"] }
      ],
      gaps: [
        { from: 30, to: 50, label: "≈20 years to Paul's letters" },
        { from: 30, to: 70, label: "≈40 years to the first Gospel" },
        { from: 30, to: 100, label: "≈60–80 years to John" },
        { from: 30, to: 200, label: "≈170 years to substantial manuscripts" }
      ]
    }
  ]
});
