# Defeaters

The scholarly case against the truth claims of Christianity, and of religion generally, with a debate arena where you can argue against the site.

The name comes from epistemology: a *defeater* is a reason that undermines a belief. The term was popularized in philosophy of religion by Alvin Plantinga, one of Christianity's most important defenders.

## What's in it

### The library

**244 arguments for Christianity in 19 categories and five parts**, about 120,000 words, each answered. Every entry has a siglum for citation (§1.1 is the first argument in the first category) and contains:

- **The argument (*videtur quod*):** the apologetic argument, stated as strongly as its best defenders state it, with formal premises where it has them.
- **The answer (*respondeo*):** a one-paragraph reply.
- **An argument map:** for the 25 entries with formal premises, each premise is listed with the defeaters that attack it, and the inference is listed with the defeaters that attack the step from premises to conclusion.
- **Defeaters:** the detailed counter-arguments.
- **If they reply (*ad obiecta*):** common comebacks, each with an answer.
- **Apparatus:** the sources cited, about 1,150 works across the library.

The five parts:

| Part | Categories |
|---|---|
| I. God | arguments for God; mind, reason and consciousness; morality and value; the coherence of God; evil, suffering and hiddenness |
| II. Scripture | the Bible as history; the New Testament as evidence; archaeology and artifacts; prophecy |
| III. Christ | who Jesus was; the resurrection; doctrine |
| IV. History & Experience | Christianity's moral record; religious experience; miracles and wonders |
| V. Reason & Rivals | science; other religions; faith and knowledge; bad skeptic arguments |

Each entry is marked by level: **scholarly** (made by academic philosophers and historians), **popular** (the default), or **fringe** (rejected by most Christian scholars as well, such as Ron Wyatt's "discoveries" or Bible codes). The last category, **bad skeptic arguments**, lists weak objections skeptics should drop, such as "Jesus never existed" or "Jesus was copied from Horus", and gives the stronger argument to use instead.

### Tools

- **Index Argumentorum** (home page): every entry on one page, by part and category, filterable by level and text.
- **Debate arena:** you argue for God, Christianity, or religion, and the site rebuts you.
  - **Library engine (offline):** runs entirely in the browser.
    - Ranks your argument against the library using weighted BM25 plus phrase matching.
    - Remembers the current topic, so a comeback like "but the BGV theorem proves a beginning" gets its prepared answer.
    - Flags reasoning patterns: appeal to consequences, God of the gaps, circular appeal to scripture, appeal to popularity, and others.
    - Offers "push back" suggestions so you can keep going.
  - **Live AI:** free-form replies from Claude, grounded in the library entries that match each message.
    - When the page is opened as a Claude artifact, it uses the viewer's own Claude account through the artifact `sample` capability, so no key is needed.
    - When run standalone (for example on GitHub Pages), it uses the official Anthropic TypeScript SDK (`@anthropic-ai/sdk@0.131.0`, loaded from jsDelivr) with an API key the visitor supplies.
    - The key stays in that browser and is sent only to `api.anthropic.com`. It is stored only if the visitor ticks "Remember on this device".
    - Default model is `claude-opus-5-5`, with server-side refusal fallbacks enabled.
- **Case map:** the seven claims Christianity needs, from "something exists beyond nature" to "this version of Christianity is the right one". Each link shows the arguments offered for it, its main defeaters, and a slider for your own probability; a chart shows how the probability of the whole chain multiplies down.
- **Ledger:** Bayes' theorem in odds form across eleven kinds of evidence, from cosmology and religious experience to the resurrection reports and the distribution of suffering. Three sets of assumptions (critical scholarship, generous to Christianity, and the maximal numbers published by apologists) or your own, with a waterfall chart, a break-even calculation for the resurrection, and the reasoning behind every range. The numbers are judgments, and the page says so.
- **Timelines:** the Hebrew Bible and Christian origins, each in three lanes (where the story is set, what history shows, and when the texts were written), with the gaps between them marked.
- **Atlas:** every entry and cross-reference drawn as one network.
- **Parallels:** fifteen sets of passages side by side in the World English Bible (the empty tomb, the two genealogies, the death of Judas, the census, Paul's conversion, and others), with the points of disagreement set out in a table.
- **Compare:** the outsider test as a table. Ten kinds of evidence offered for Christianity, set against the parallel claims made for Islam, the Latter-day Saints, Hindu traditions, and Buddhism.
- **Classics concordance:** twelve well-known works of apologetics (Plantinga's two dozen arguments, Kreeft and Tacelli's twenty, Lewis, Strobel, Keller, Craig, Wallace, Habermas, Wright and others) mapped item by item to the entries that answer them.
- **Drill:** read an argument, write your own rebuttal, and see which of the library's defeaters you covered.
- **Glossary:** 79 terms, also explained in place wherever they appear in an entry or essay.
- **Essays:** a summary of the case, what apologists get right, the chain of dependence, how the ledger works, reading paths, the method, and an about page.
- **Sources:** a searchable bibliography of every work cited.

The site has light and dark themes and works on phones.

## Standards

- **Steelman first.** Every rebuttal answers the strongest version of the argument.
- **No invented citations.** Sources were checked during writing, and uncertain details were removed or hedged.
- **Concede what's true.** Jesus existed and was crucified. The Tel Dan stele supports a historical David. Plantinga answered the *logical* problem of evil. The flat-earth and "Galileo was tortured" stories are myths. The "Concessions" essay collects these.
- **Flag non-replications.** The 2012 "analytic thinking reduces belief" study failed to replicate, and the 2019 *Nature* "moralizing gods" paper was retracted. The library says so.
- **Cite believing scholars where they matter.** Many of the sources are Christians whose honest work cuts against apologetics, including Dale Allison, Raymond Brown, Dennis Venema, Hans Halvorson, Mike Licona and John Schneider.
- **Separate the fringe.** Arguments that most Christian scholars also reject are labeled, so they aren't mistaken for the strongest case.
- **Critique ideas, not people.**

## Running it

No build step is needed. Open `index.html` in a browser, or serve the folder:

```sh
npx serve .
```

To publish on GitHub Pages, enable Pages for this repository from the root of the branch. The site uses hash routes such as `#a.kalam`, `#c.resurrection`, `#ledger` and `#parallels.tomb`, so deep links work on any static host.

### Single-file builds

```sh
node build/build.js
```

This writes two files:

- `dist/defeaters.html`: one self-contained file with all CSS and JS inlined. You can email it or open it offline.
- `dist/defeaters-artifact.html`: the same page without the document skeleton, for publishing as a Claude artifact.

## Tests

```sh
node tests/data.test.js          # integrity: required fields, unique ids, every cross-reference, [[link]] and argument map resolves
node tests/engine.test.js        # routing: 155 realistic apologetic statements → expected entry; conversation flow; pattern checks
node build/build.js && NODE_PATH=$(npm root -g) node tests/smoke.e2e.js   # Chromium: every view and tool, desktop + phone, light + dark
NODE_PATH=$(npm root -g) node tests/ai.e2e.js                             # Live AI path against a simulated artifact `sample` runtime
```

The smoke test renders all 244 entries, exercises each tool (index filter, glossary tooltips, case-map sliders, ledger presets, timeline labels, atlas search, parallels, drill scoring, the debate, and search), and fails on console errors or horizontal overflow. The browser tests need Playwright installed globally.

## Layout

```
index.html              page shell (markers delimit the parts the build inlines)
css/style.css           design tokens (light + dark), header, library, entries, essays, debate
css/tools.css           charts and tool pages
js/core.js              registry: parts, categories, DEF_ADD, DEF_ESSAY, DEF_SET
js/data/00-essays.js    essays
js/data/01–19-*.js      the library, one file per category
js/data/20-meta.js      entry levels and premise-by-premise structure for argument maps
js/data/21-27-*.js      glossary, classics, timelines, parallels, comparison, case map, ledger
js/text.js              escaping, inline markup ([[cross-links]], [[#route|links]], *italic*, **bold**), Markdown for AI output
js/engine.js            search index, debate engine, reasoning-pattern checks, retrieval for Live AI
js/ai.js                Live AI providers (artifact `sample` capability, or the Anthropic SDK with a visitor key)
js/ui/shell.js          router, header, search, theme, glossary tooltips, shared helpers
js/ui/*.js              one file per view: home, library, pages, debate, map, ledger, timeline, atlas, reference, drill; boot.js starts the app
build/build.js          single-file bundles
tests/                  engine, smoke, and AI-path tests
```

### Adding an entry

Add an object to the right `js/data/NN-*.js` file. The fields are `id`, `cat`, `title`, `who`, `claim`, optional `form`, `short`, `points`, `replies` (each with `q`, `a` and match keywords `k`), `sources`, `keys` and `rel`.

If the entry has formal premises, add a line to `structure` in `js/data/20-meta.js`: one array per premise listing the defeaters (by index) that attack it, and a last array for defeaters that attack the inference. If it is a scholarly or fringe argument, add its id to the matching list under `levels`.

Then run the data and routing tests. You can also add a test case for your entry to `tests/engine.test.js`.
