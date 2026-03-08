# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

A study hub web application for the **AWS Certified AI Practitioner (AIF-C01)** exam, deployed on GitHub Pages. Contains both the source transcript files and a single-page study app with summaries, flashcards, and quizzes.

**Live site:** https://nik1168.github.io/aws-ai-practitioner-study-hub/

## Architecture

Single HTML file with embedded CSS/JS. No build tools, no dependencies, no framework.

```
index.html          — Complete app (HTML + CSS + JS)
data/domain1.js     — Domain 1 content (summaries, flashcards, quiz questions)
data/domain2.js     — Domain 2 content (summaries, flashcards, quiz questions)
domain_1/           — Source transcript files (17 lessons)
domain_2/           — Source transcript files (10 lessons)
```

## Adding a New Domain

1. Create `data/domainN.js` following the schema below
2. Add `<script src="data/domainN.js"></script>` before the app script in `index.html`
3. The domain tabs in the HTML are hardcoded — enable the corresponding tab by removing the `disabled` class

### Data Schema

```js
window.DOMAINS = window.DOMAINS || {};
window.DOMAINS["domain2"] = {
  title: "Domain Title",
  taskStatements: [
    {
      id: "2.1",
      title: "Task statement title",
      summary: {
        keyPoints: [
          { icon: "concept|service|definition|metric", text: "...", diagram: "graph LR\n  A --> B" }  // diagram is optional, Mermaid.js syntax
        ]
      },
      flashcards: [
        { front: "Question", back: "Answer", frontDiagram: "graph...", backDiagram: "graph..." }  // diagrams optional
      ],
      quiz: [
        {
          question: "...",
          options: ["A", "B", "C", "D"],
          correct: 0,       // 0-based index of correct answer
          explanation: "..." // Why the answer is correct
        }
      ]
    }
  ]
};
```

Icon values: `concept` (general concepts), `service` (AWS services), `definition` (key terms), `metric` (evaluation metrics).

Diagrams use [Mermaid.js](https://mermaid.js.org/) syntax. Common types: `graph TD` (top-down flowchart), `graph LR` (left-right flowchart), `sequenceDiagram`. Diagrams are rendered client-side via CDN.

## Source Transcripts

- `domain_1/Task_Statement_1.1_Lesson_{1-5}` — AI/ML/deep learning fundamentals, data types, training, overfitting/bias, neural networks, generative AI
- `domain_1/Task_Statement_1.2_Lesson_{1-5}` — When to use AI, ML problem types, AWS pre-trained services, SageMaker, real-world case studies
- `domain_1/Task_Statement_1.3_Lesson_{1-7}` — ML pipeline, data prep, training/tuning, deployment, monitoring/MLOps, evaluation metrics, business metrics
- `domain_2/Task_Statement_2.1_Lesson_{1-5}` — Generative AI concepts, transformers, embeddings, diffusion models, use cases, project lifecycle
- `domain_2/Task_Statement_2.2_Lesson_{1-2}` — Capabilities/limitations, HHH values, interpretability, ROUGE/BLEU metrics, business metrics
- `domain_2/Task_Statement_2.3_Lesson_{1-2}` — AWS infrastructure, SageMaker JumpStart, Bedrock, Titan, ML stack, security, pricing models
