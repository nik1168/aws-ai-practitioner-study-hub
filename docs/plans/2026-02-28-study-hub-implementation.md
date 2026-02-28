# AWS AI Practitioner Study Hub — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a beautiful single-page study app for the AWS AI Practitioner certification, deployed on GitHub Pages, with summaries, flashcards, and quizzes for Domain 1.

**Architecture:** Single `index.html` with embedded CSS/JS. Content in `data/domain1.js`. No build tools, no dependencies. Extensible via additional `data/domainN.js` files.

**Tech Stack:** Vanilla HTML5, CSS3 (custom properties, grid, flexbox, animations), vanilla JavaScript (ES6+). GitHub Pages for hosting.

---

### Task 1: Initialize Git Repo and GitHub Pages Structure

**Files:**
- Create: `index.html` (minimal shell)
- Create: `data/domain1.js` (empty data scaffold)
- Create: `.gitignore`
- Create: `CLAUDE.md` (already exists, will be updated)

**Step 1: Create a new GitHub repo**

```bash
cd "/Users/niklausgeisseraguilar/Documents/certifications/aws ai practitioner"
git init
```

**Step 2: Create `.gitignore`**

```
.DS_Store
*.swp
*~
```

**Step 3: Create minimal `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AWS AI Practitioner Study Hub</title>
</head>
<body>
    <h1>AWS AI Practitioner Study Hub</h1>
    <p>Coming soon...</p>
    <script src="data/domain1.js"></script>
    <script>
        console.log('Domains loaded:', window.DOMAINS);
    </script>
</body>
</html>
```

**Step 4: Create `data/domain1.js` with empty scaffold**

```js
window.DOMAINS = window.DOMAINS || {};
window.DOMAINS["domain1"] = {
  title: "Fundamentals of AI and ML",
  taskStatements: []
};
```

**Step 5: Commit and create GitHub repo**

```bash
git add .gitignore index.html data/domain1.js CLAUDE.md docs/
git commit -m "feat: initial project scaffold"
gh repo create aws-ai-practitioner-study-hub --public --source=. --push
```

**Step 6: Enable GitHub Pages**

```bash
gh api repos/{owner}/{repo}/pages -X POST -f "build_type=legacy" -f "source[branch]=main" -f "source[path]=/"
```

---

### Task 2: Build the Domain 1 Data File

**Files:**
- Modify: `data/domain1.js`

This is the largest task. Populate ALL content from the 17 transcript files into the structured data format. The content must be accurate to the transcripts — this is exam study material.

**Step 1: Write Task Statement 1.1 data**

Populate `data/domain1.js` with summaries, flashcards, and quiz questions for Task Statement 1.1 (5 lessons covering: AI/ML/deep learning definitions, data types, training/inference, overfitting/underfitting/bias, neural networks/generative AI).

Content guidance:
- **Summary**: 8-12 key points per task statement, grouped into concepts/services/definitions
- **Flashcards**: 15-20 cards per task statement covering key terms, AWS services, and concepts
- **Quiz**: 10-15 questions per task statement, 4 options each, with explanations referencing why each answer is correct

Source files to reference:
- `/Users/niklausgeisseraguilar/Documents/certifications/aws ai practitioner/domain_1/Task_Statement_1.1_Lesson_1_Transcript.txt`
- `...Lesson_2_Transcript.txt` through `...Lesson_5_Transcript.txt`

**Step 2: Write Task Statement 1.2 data**

Same structure for Task Statement 1.2 (5 lessons covering: when to use/not use AI, ML problem types, AWS pre-trained AI services, SageMaker, real-world case studies).

Source files: `Task_Statement_1.2_Lesson_{1-5}_Transcript.txt`

**Step 3: Write Task Statement 1.3 data**

Same structure for Task Statement 1.3 (7 lessons covering: ML pipeline, data preparation, model training/tuning, deployment, monitoring/MLOps, evaluation metrics, business metrics).

Source files: `Task_Statement_1.3_Lesson_{1-7}_Transcript.txt`

**Step 4: Commit**

```bash
git add data/domain1.js
git commit -m "feat: populate domain 1 content (summaries, flashcards, quizzes)"
git push
```

---

### Task 3: Build the App Shell and Navigation (HTML + CSS)

**Files:**
- Modify: `index.html`

**Step 1: Write the full HTML structure**

The HTML should include:
- `<header>` with app title and subtitle
- Domain tabs bar (Domain 1 active, Domain 2-4 as "coming soon" disabled tabs)
- Study mode tabs (Summaries | Flashcards | Quizzes)
- Task statement filter pills (All | 1.1 | 1.2 | 1.3)
- Content containers for each mode (initially hidden, JS toggles visibility)
- Summary section: accordion cards
- Flashcard section: card with flip container, navigation controls, progress bar
- Quiz section: question card, options, feedback area, results summary

**Step 2: Write all CSS**

Embedded in `<style>` tag. Must include:

**Color system (CSS custom properties):**
- `--navy`: `#232f3e` (AWS dark navy — header, dark backgrounds)
- `--navy-light`: `#37475a`
- `--orange`: `#ff9900` (AWS orange — primary accent, active states, buttons)
- `--orange-hover`: `#ec7211`
- `--teal`: `#1a9988` (secondary accent for summaries/services)
- `--bg`: `#f5f7fa` (light gray page background)
- `--card`: `#ffffff`
- `--text`: `#16191f`
- `--text-light`: `#545b64`
- `--success`: `#1d8102` (correct answer)
- `--error`: `#d13212` (wrong answer)
- `--border`: `#e1e4e8`

**Layout:**
- Max-width container (900px) centered
- CSS Grid for quiz option layout (2x2 on desktop, stack on mobile)
- Flexbox for navigation elements

**Components to style:**
- Domain tabs (horizontal, pill-shaped, disabled state for coming soon)
- Mode tabs (underline-style tab bar)
- Filter pills (small rounded buttons)
- Summary accordion cards (expand/collapse with rotate chevron)
- Flashcard (3D flip transform on click, front/back faces)
- Quiz option buttons (hover state, selected state, correct/incorrect state)
- Results card (score percentage, circular progress indicator, breakdown table)
- Progress bar (thin, colored bar)

**Animations:**
- Accordion expand: `max-height` transition
- Card flip: `transform: rotateY(180deg)` with `perspective`
- Quiz feedback: slide-in explanation
- Tab switch: fade content in
- Button hover: subtle scale + shadow
- Score reveal: count-up animation

**Responsive breakpoints:**
- Mobile (<640px): stack everything, full-width cards, single-column quiz options
- Tablet (640-900px): minor spacing adjustments
- Desktop (>900px): max-width container, 2-column quiz options

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: app shell with full HTML structure and CSS styling"
git push
```

---

### Task 4: Build the JavaScript Application Logic

**Files:**
- Modify: `index.html` (add `<script>` at bottom)

**Step 1: Write the core app module**

Single IIFE or module pattern. Functions needed:

**State management:**
```js
const state = {
  currentDomain: 'domain1',
  currentMode: 'summaries',   // summaries | flashcards | quiz
  currentFilter: 'all',       // all | 1.1 | 1.2 | 1.3
  flashcardIndex: 0,
  flashcardFlipped: false,
  flashcardShuffled: false,
  quizIndex: 0,
  quizAnswers: [],             // user's selected answers
  quizSubmitted: false,
  quizQuestions: [],            // current randomized question set
};
```

**Navigation functions:**
- `switchDomain(domainKey)` — swap active domain tab, reset mode state
- `switchMode(mode)` — swap active mode tab, render appropriate content
- `setFilter(filter)` — filter content by task statement, re-render current mode

**Summaries rendering:**
- `renderSummaries()` — build accordion cards from data, attach toggle listeners
- Each accordion card shows task statement title, expands to show grouped content
- Summary content organized with sub-headers: Key Concepts, AWS Services, Important Definitions

**Flashcard functions:**
- `renderFlashcard()` — show current card front, handle flip
- `nextCard()` / `prevCard()` — navigate with wraparound
- `shuffleCards()` — Fisher-Yates shuffle on filtered card array
- `resetFlashcards()` — back to first card, unshuffled
- Keyboard: ArrowLeft/ArrowRight for nav, Space to flip

**Quiz functions:**
- `startQuiz()` — randomize questions from filtered set, reset answers
- `renderQuizQuestion()` — show current question with options
- `selectAnswer(index)` — highlight selection, show immediate feedback (correct/wrong + explanation), auto-advance after 1.5s
- `renderQuizResults()` — show score, percentage, breakdown by task statement, "Try Again" and "Review Mistakes" buttons
- `reviewMistakes()` — filter to only incorrectly answered questions, restart quiz with those

**Utility:**
- `getFilteredData(mode)` — return data array for current domain + filter
- `shuffleArray(arr)` — Fisher-Yates shuffle (returns new array)

**Step 2: Wire up event listeners**

- Domain tab clicks → `switchDomain()`
- Mode tab clicks → `switchMode()`
- Filter pill clicks → `setFilter()`
- Flashcard click → flip
- Flashcard prev/next buttons → navigate
- Flashcard shuffle button → shuffle
- Quiz option clicks → `selectAnswer()`
- Quiz "Try Again" button → `startQuiz()`
- Quiz "Review Mistakes" button → `reviewMistakes()`
- `keydown` listener for flashcard arrow keys and space

**Step 3: Initialize app**

```js
document.addEventListener('DOMContentLoaded', () => {
  switchDomain('domain1');
  switchMode('summaries');
});
```

**Step 4: Commit**

```bash
git add index.html
git commit -m "feat: complete app logic (summaries, flashcards, quizzes)"
git push
```

---

### Task 5: Polish and Visual Verification

**Files:**
- Modify: `index.html` (CSS tweaks)
- Modify: `data/domain1.js` (content fixes if needed)

**Step 1: Open in browser and verify all three modes work**

Use Playwright browser to navigate to the local file or GitHub Pages URL. Check:
- Domain tabs render, only Domain 1 is clickable
- Mode tabs switch content correctly
- Filter pills filter content within each mode
- Summaries: all 3 task statements show, accordions expand/collapse
- Flashcards: cards flip, navigation works, shuffle works, progress updates
- Quizzes: questions display, answer selection gives feedback, results show at end
- Responsive: resize to mobile width, verify layout stacks properly

**Step 2: Fix any visual or functional issues found**

**Step 3: Commit any fixes**

```bash
git add -A
git commit -m "fix: visual polish and bug fixes"
git push
```

---

### Task 6: Update CLAUDE.md and Final Push

**Files:**
- Modify: `CLAUDE.md`

**Step 1: Update CLAUDE.md to reflect the new web app**

Add information about:
- How to add new domains (create `data/domainN.js`, add script tag)
- Data schema reference
- File structure

**Step 2: Final commit and verify GitHub Pages deployment**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md with web app documentation"
git push
```

Verify GitHub Pages URL is live and working.
