# AWS AI Practitioner Study Hub — Design Document

## Goal

A beautiful, single-page web app to help a study group prepare for the AWS Certified AI Practitioner exam. Deployed on GitHub Pages. Extensible to additional domains.

## Architecture

Single HTML file (`index.html`) with embedded CSS and JS. Content lives in separate JS data files per domain (`data/domain1.js`). No build tools, no dependencies.

```
index.html
data/
  domain1.js
```

Adding a domain = create `data/domainN.js`, add a `<script>` tag, register in the domains array.

## Navigation

- Top: domain tabs (Domain 1 active, others "Coming Soon")
- Within domain: three study modes — Summaries, Flashcards, Quizzes
- Within mode: task statement filter pills (1.1, 1.2, 1.3, or All)

## Study Modes

### Summaries
- Accordion-style cards per task statement
- Each card expands to show key concepts, AWS services, and important definitions
- Visual grouping with icons for concept categories (services, concepts, metrics)

### Flashcards
- Card flip interaction (click to reveal answer)
- Navigate with prev/next arrows or keyboard arrows
- Shuffle button to randomize order
- Progress indicator (card 5 of 30)
- Filter by task statement

### Quizzes
- Multiple choice (4 options), one correct answer
- Immediate feedback after each answer (green/red highlight + explanation)
- Score summary at the end with percentage and breakdown by task statement
- "Try Again" to retake, "Review Mistakes" to see only missed questions
- Questions randomized each attempt

## Data Schema (domain1.js)

```js
window.DOMAINS = window.DOMAINS || {};
window.DOMAINS["domain1"] = {
  title: "Fundamentals of AI and ML",
  taskStatements: [
    {
      id: "1.1",
      title: "Explain basic AI concepts and terminologies",
      summary: { concepts: [...], services: [...], keyPoints: [...] },
      flashcards: [{ front: "...", back: "..." }, ...],
      quiz: [{ question: "...", options: ["A","B","C","D"], correct: 0, explanation: "..." }, ...]
    },
    ...
  ]
};
```

## UI/UX Design Principles

- AWS-inspired color palette (dark navy header, orange accents for interactive elements)
- Clean card-based layout with generous whitespace
- Smooth transitions and micro-animations (card flips, accordion expand, answer feedback)
- Fully responsive (works on phones for studying on the go)
- Keyboard accessible (arrow keys for flashcards, Enter to submit quiz answers)
- Progress feels rewarding (score animations, encouraging messages)

## No-Backend Constraint

Everything runs client-side. No login, no server, no localStorage tracking. Pure static files served from GitHub Pages.
