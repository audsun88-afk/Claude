# Defeaters

The scholarly case against the truth claims of Christianity, and of religion generally, with a debate arena where you can argue against the site.

The name comes from epistemology: a *defeater* is a reason that undermines a belief. The term was popularized in philosophy of religion by Alvin Plantinga, one of Christianity's most important defenders.

## What's in it

- **A library of 148 arguments in 14 categories**, about 80,000 words. Each entry contains:
  - **The argument (*videtur quod*):** the apologetic argument, stated as strongly as its best defenders state it, with formal premises where it has them.
  - **The answer (*respondeo*):** a one-paragraph reply.
  - **Defeaters:** the detailed counter-arguments.
  - **If they reply (*ad obiecta*):** common comebacks, each with an answer.
  - **Apparatus:** the sources cited, about 750 works in total.
- **Categories:** arguments for God; coherence of the concept of God; evil, suffering and hiddenness; the Bible as history; prophecy; who Jesus was; the resurrection; doctrine; biblical morality; miracles and experience; science; other religions; faith and knowledge; and **bad skeptic arguments**. The last category lists weak objections skeptics should drop, such as "Jesus never existed" or "Jesus was copied from Horus", and gives the stronger argument to use instead.
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
- **Essays:** "The Case in Brief" (a seven-part summary that links into the library), "How to Weigh a Religious Claim" (the method), and "About".
- **Sources:** a searchable bibliography of every work cited.

## Standards

- **Steelman first.** Every rebuttal answers the strongest version of the argument.
- **No invented citations.** Sources were checked during writing, and uncertain details were removed or hedged.
- **Concede what's true.** Jesus existed and was crucified. The Tel Dan stele supports a historical David. Plantinga answered the *logical* problem of evil. The flat-earth and "Galileo was tortured" stories are myths.
- **Flag non-replications.** The 2012 "analytic thinking reduces belief" study failed to replicate, and the 2019 *Nature* "moralizing gods" paper was retracted. The library says so.
- **Cite believing scholars where they matter.** Many of the sources are Christians whose honest work cuts against apologetics, including Dale Allison, Raymond Brown, Dennis Venema, Hans Halvorson, Mike Licona and John Schneider.
- **Critique ideas, not people.**

## Running it

No build step is needed. Open `index.html` in a browser, or serve the folder:

```sh
npx serve .
```

To publish on GitHub Pages, enable Pages for this repository from the root of the branch. The site uses hash routes such as `#a.kalam`, `#c.resurrection` and `#debate`, so deep links work on any static host.

### Single-file builds

```sh
node build/build.js
```

This writes two files:

- `dist/defeaters.html`: one self-contained file with all CSS and JS inlined. You can email it or open it offline.
- `dist/defeaters-artifact.html`: the same page without the document skeleton, for publishing as a Claude artifact.

## Tests

```sh
node tests/engine.test.js        # routing: 63 realistic apologetic statements → expected entry; conversation flow; pattern checks
node build/build.js && NODE_PATH=$(npm root -g) node tests/smoke.e2e.js   # Chromium: every view, desktop + phone, light + dark, no console errors, no horizontal overflow
NODE_PATH=$(npm root -g) node tests/ai.e2e.js                             # Live AI path against a simulated artifact `sample` runtime
```

The browser tests need Playwright installed globally.

## Layout

```
index.html            page shell (markers delimit the parts the build inlines)
css/style.css         design tokens (light + dark), layout
js/core.js            registry: categories, DEF_ADD, DEF_ESSAY
js/data/*.js          the library, one file per category, plus essays
js/text.js            escaping, inline markup ([[cross-links]], *italic*, **bold**), Markdown for AI output
js/engine.js          search index, debate engine, reasoning-pattern checks, retrieval for Live AI
js/ai.js              Live AI providers (artifact `sample` capability, or the Anthropic SDK with a visitor key)
js/app.js             routing, views, search, debate arena
build/build.js        single-file bundles
tests/                engine, smoke, and AI-path tests
```

### Adding an entry

Add an object to the right `js/data/NN-*.js` file. The fields are `id`, `cat`, `title`, `who`, `claim`, optional `form`, `short`, `points`, `replies` (each with `q`, `a` and match keywords `k`), `sources`, `keys` and `rel`.

Then run the routing test. You can also add a test case for your entry to `tests/engine.test.js`.
