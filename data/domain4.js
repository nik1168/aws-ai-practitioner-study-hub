window.DOMAINS = window.DOMAINS || {};
window.DOMAINS["domain4"] = {
  title: "Guidelines for Responsible AI",
  taskStatements: [
    // =========================================================================
    // TASK STATEMENT 4.1 — Explain the development of AI systems that are
    //                       responsible
    // =========================================================================
    {
      id: "4.1",
      title: "Explain the development of AI systems that are responsible",
      summary: {
        keyPoints: [
          { icon: "concept", text: "Core dimensions of responsible AI: fairness (equitable treatment regardless of demographics), explainability (human-understandable reasoning), robustness (tolerance of failures, minimization of errors), privacy & security (protecting sensitive data), governance (organizational oversight), and transparency (openness about model behavior).", diagram: "graph TD\n  RAI[Responsible AI] --> F[Fairness]\n  RAI --> E[Explainability]\n  RAI --> R[Robustness]\n  RAI --> PS[Privacy & Security]\n  RAI --> G[Governance]\n  RAI --> T[Transparency]" },
          { icon: "concept", text: "Responsible datasets are the foundation of responsible AI. Key characteristics: inclusivity, diversity, curated sources, balanced class distribution, privacy protection, consent and transparency in data collection, and regular audits to detect emerging biases." },
          { icon: "concept", text: "Class imbalance occurs when a feature value has fewer training samples than another (e.g., 32.4% women vs. 67.6% men). This causes demographic disparity — unequal outcomes across groups based on age, race, sex, etc. Overfitting and underfitting on imbalanced data worsen bias." },
          { icon: "concept", text: "Environmental and sustainability considerations: evaluate carbon footprint and energy consumption when selecting models. Larger models consume more resources. Model selection practices should include environmental impact assessment, sustainability goals, and stakeholder engagement." },
          { icon: "service", text: "SageMaker Clarify detects bias and provides explainability analysis. It works as a black-box analyzer — a processing job sends requests to a deployed model endpoint, retrieves predictions, and analyzes inputs vs. outputs to determine feature importance. Input data and models are stored in S3.", diagram: "graph LR\n  S3D[(S3: Dataset)] --> CJ[Clarify Processing Job]\n  S3M[(S3: Model)] --> EP[SageMaker Endpoint]\n  CJ -->|sends requests| EP\n  EP -->|predictions| CJ\n  CJ --> R[Bias & Explainability Report]" },
          { icon: "metric", text: "Dataset bias metrics: Class Imbalance (uneven feature distribution), Label Imbalance (labels favor positive outcomes for one class), Demographic Disparity (one class has larger proportion of rejected vs. accepted outcomes)." },
          { icon: "metric", text: "Trained model bias metrics: DPIP (Difference in Positive Proportions in Predictions — whether model predicts positive outcomes differently per class), Specificity (correct negative predictions), Recall Difference (TPR gap between classes), Accuracy Difference (prediction accuracy gap), Treatment Equality (ratio of false negatives to false positives between classes)." },
          { icon: "concept", text: "Hallucinations occur when generative AI produces confident but fictional information. Real-world example: lawyers submitted AI-generated fake case citations to a NYC court, resulting in case dismissal and sanctions." },
          { icon: "concept", text: "Key generative AI risks: hallucinations (fabricated facts), copyright violations (training on copyrighted data — e.g., Getty Images lawsuit against Stable Diffusion), biased/discriminatory outputs (e.g., EEOC lawsuits for AI hiring discrimination against older applicants), toxic content, and data privacy leaks of PII." },
          { icon: "service", text: "Amazon Bedrock Guardrails provide configurable content filters applied to both prompts and model responses. Configure thresholds for hate, insults, sexual content, and violence. Add topic-based blocking using plaintext descriptions to prevent specific subjects from being discussed.", diagram: "graph LR\n  U[User Prompt] --> GI[Guardrails: Input Filter]\n  GI -->|blocked| BR1[Blocked Response]\n  GI -->|passed| FM[Foundation Model]\n  FM --> GO[Guardrails: Output Filter]\n  GO -->|blocked| BR2[Blocked Response]\n  GO -->|passed| R[Response to User]" },
          { icon: "metric", text: "SageMaker Clarify LLM evaluation dimensions: Prompt Stereotyping (biases by race, gender, religion, age, etc.), Toxicity (sexual references, hate, profanity, threats), Factual Knowledge (veracity), Semantic Robustness (sensitivity to typos/formatting changes), and Accuracy (comparison to expected responses)." }
        ]
      },
      flashcards: [
        { front: "What are the six core dimensions of responsible AI?", back: "Fairness (equitable treatment), Explainability (human-understandable reasoning), Robustness (failure tolerance), Privacy & Security (data protection), Governance (organizational oversight), and Transparency (openness about model behavior)." },
        { front: "What are the key characteristics of a responsible dataset?", back: "Inclusivity, diversity, curated data sources, balanced class distribution, privacy protection, consent and transparency in data collection, and regular audits to detect emerging biases." },
        { front: "What is class imbalance and why does it matter?", back: "Class imbalance occurs when one feature value has significantly fewer training samples than another (e.g., 32.4% women vs. 67.6% men). It leads to demographic disparity — the model performs worse for underrepresented groups because it has less data to learn their patterns." },
        { front: "How does SageMaker Clarify work?", back: "It runs a processing job that acts as a black-box analyzer. It sends requests to a deployed SageMaker model endpoint, retrieves predictions, and compares inputs vs. outputs to identify bias and determine feature importance. Data and models are stored in S3.", backDiagram: "graph LR\n  S3[(S3)] --> CJ[Clarify Job]\n  CJ -->|requests| EP[Model Endpoint]\n  EP -->|predictions| CJ\n  CJ --> R[Report]" },
        { front: "What dataset bias metrics does SageMaker Clarify analyze?", back: "Class Imbalance (uneven feature distribution), Label Imbalance (labels favor positive outcomes for one class over another), and Demographic Disparity (one class has a disproportionate share of rejected vs. accepted outcomes)." },
        { front: "What trained model bias metrics does SageMaker Clarify report?", back: "DPIP (Difference in Positive Proportions in Predictions), Specificity (correct negative predictions), Recall Difference (TPR gap between classes), Accuracy Difference, and Treatment Equality (ratio of false negatives to false positives between classes)." },
        { front: "What is a hallucination in generative AI?", back: "When a model generates information that sounds factual and confident but is actually fabricated. Example: lawyers submitted AI-generated fake case citations to a NYC court, leading to sanctions." },
        { front: "What are the main risks of generative AI?", back: "Hallucinations (fabricated facts), copyright violations (training on copyrighted data), biased/discriminatory outputs, toxic content generation, and data privacy leaks (PII exposure from training data or user inputs)." },
        { front: "How do Amazon Bedrock Guardrails work?", back: "They apply configurable content filters to both incoming prompts and outgoing model responses. You set thresholds for categories like hate, insults, sexual content, and violence. You can also add topic-based blocking using plaintext descriptions to prevent specific subjects.", backDiagram: "graph LR\n  U[Prompt] --> GI[Input Filter]\n  GI -->|pass| FM[Model]\n  FM --> GO[Output Filter]\n  GO -->|pass| R[Response]" },
        { front: "What dimensions does SageMaker Clarify evaluate for LLMs?", back: "Prompt Stereotyping (biases related to race, gender, religion, age, etc.), Toxicity (hate, profanity, threats, insults), Factual Knowledge (veracity of responses), Semantic Robustness (sensitivity to typos and formatting), and Accuracy (comparison to expected responses)." },
        { front: "What is the DPIP metric?", back: "Difference in Positive Proportions in Predictions — measures whether a trained model predicts positive outcomes at different rates for different classes. A large difference indicates the model treats groups unequally." },
        { front: "What is Treatment Equality?", back: "A bias metric that measures the difference in the ratio of false negatives to false positives between classes. It reveals whether the model's errors are distributed equally across groups." }
      ],
      quiz: [
        {
          question: "A company discovers their loan approval model approves 80% of applications from one demographic group but only 45% from another, despite similar qualifications. Which SageMaker Clarify metric would best identify this issue?",
          options: ["Class Imbalance", "Difference in Positive Proportions in Predictions (DPIP)", "Semantic Robustness", "Factual Knowledge"],
          correct: 1,
          explanation: "DPIP measures whether a model predicts positive outcomes at different rates for different classes. The significant gap between approval rates (80% vs. 45%) for similar qualifications directly indicates a difference in positive proportions in predictions."
        },
        {
          question: "A healthcare AI generates a confident but completely fabricated medical study citation. What type of generative AI risk is this?",
          options: ["Toxic content generation", "Copyright violation", "Hallucination", "Data privacy leak"],
          correct: 2,
          explanation: "Hallucination occurs when a generative AI model produces information that sounds factual and authoritative but is entirely fabricated. This is particularly dangerous in healthcare where fake citations could influence medical decisions."
        },
        {
          question: "Which of the following is NOT a core dimension of responsible AI?",
          options: ["Fairness", "Profitability", "Robustness", "Transparency"],
          correct: 1,
          explanation: "The six core dimensions of responsible AI are fairness, explainability, robustness, privacy & security, governance, and transparency. Profitability is a business consideration, not a responsible AI dimension."
        },
        {
          question: "A company wants to prevent their customer service chatbot from discussing competitor products. Which AWS feature should they use?",
          options: ["SageMaker Clarify bias detection", "Amazon Bedrock Guardrails with topic-based blocking", "SageMaker Model Cards", "Amazon A2I human review"],
          correct: 1,
          explanation: "Amazon Bedrock Guardrails support topic-based blocking using plaintext descriptions. The company can configure a guardrail that blocks prompts and responses related to competitor products."
        },
        {
          question: "A training dataset has 95% male and 5% female samples. Which dataset bias metric does SageMaker Clarify use to flag this?",
          options: ["Label Imbalance", "DPIP", "Class Imbalance", "Treatment Equality"],
          correct: 2,
          explanation: "Class Imbalance measures uneven distribution of feature values in the training data. A 95:5 ratio between male and female samples is a textbook example of class imbalance that could lead to biased model performance."
        },
        {
          question: "Which SageMaker Clarify evaluation dimension tests whether an LLM's output changes when typos or formatting changes are introduced to the prompt?",
          options: ["Prompt Stereotyping", "Factual Knowledge", "Toxicity", "Semantic Robustness"],
          correct: 3,
          explanation: "Semantic Robustness measures whether the model's output changes due to minor input perturbations like typos, uppercase changes, or whitespace modifications. A robust model should produce consistent outputs despite these insignificant changes."
        },
        {
          question: "A model correctly predicts negative outcomes 92% of the time for group A but only 71% for group B. Which bias metric captures this difference?",
          options: ["Recall Difference", "Specificity", "Accuracy Difference", "Demographic Disparity"],
          correct: 1,
          explanation: "Specificity measures how often the model correctly predicts negative outcomes. The difference in specificity between groups (92% vs. 71%) indicates the model is significantly better at identifying negative cases for one group over another."
        },
        {
          question: "Which approach best addresses the environmental impact of AI model selection?",
          options: ["Always use the largest available model for best accuracy", "Evaluate the carbon footprint and energy consumption alongside performance metrics", "Only use pre-trained models to avoid training costs", "Deploy models in the nearest AWS region"],
          correct: 1,
          explanation: "Responsible AI includes evaluating environmental impact — assessing carbon footprint and energy consumption when selecting models. Larger models consume more resources, so organizations should balance performance needs against sustainability goals."
        },
        {
          question: "Amazon Bedrock Guardrails apply content filters at which stage(s)?",
          options: ["Only on user prompts before they reach the model", "Only on model responses before they reach the user", "On both incoming prompts and outgoing model responses", "Only during model training"],
          correct: 2,
          explanation: "Bedrock Guardrails apply configurable content filters to both incoming prompts (preventing inappropriate inputs from reaching the model) and outgoing model responses (filtering inappropriate content before it reaches the user)."
        },
        {
          question: "What real-world legal issue arose from Getty Images regarding AI?",
          options: ["AI-generated fake legal case citations", "Lawsuit against Stable Diffusion for allegedly using 12M+ copyrighted photographs for training", "EEOC complaint about AI hiring discrimination", "Data privacy breach from an AI chatbot"],
          correct: 1,
          explanation: "Getty Images filed a lawsuit against Stability AI (Stable Diffusion) for allegedly using over 12 million copyrighted photographs from Getty's library to train their image generation model without licensing or compensation."
        }
      ]
    },

    // =========================================================================
    // TASK STATEMENT 4.2 — Recognize the importance of transparent and
    //                       explainable models
    // =========================================================================
    {
      id: "4.2",
      title: "Recognize the importance of transparent and explainable models",
      summary: {
        keyPoints: [
          { icon: "concept", text: "Transparency is the degree to which ML owners and stakeholders understand how a model works and why it produces outputs. Interpretability uses straightforward algorithms (linear regression, decision trees) with directly understandable mechanisms. Explainability describes what a black-box model does without knowing exactly how (model-agnostic).", diagram: "graph TD\n  T[Transparency] --> I[Interpretability]\n  T --> E[Explainability]\n  I --> SM[Simple Models]\n  SM --> LR[Linear Regression]\n  SM --> DT[Decision Trees]\n  E --> BB[Black-Box Models]\n  BB --> NN[Neural Networks]\n  BB --> FM[Foundation Models]" },
          { icon: "concept", text: "Key tradeoffs: Performance vs. Transparency (simple models are interpretable but limited; complex models perform better but are harder to understand), Transparency vs. Security (transparent models are more susceptible to attacks), Transparency vs. Proprietary Protection (explainability makes reverse engineering easier), Transparency vs. Privacy (sharing model details may expose data)." },
          { icon: "concept", text: "Regulatory requirements determine the needed transparency level. Assess whether interpretability is a hard requirement from regulations or business objectives. Model-agnostic explainability approaches can meet business objectives without full transparency." },
          { icon: "concept", text: "Open source software maximizes transparency — code is developed collaboratively and shared openly, enabling diverse developer input and full auditability of algorithms." },
          { icon: "service", text: "AI Service Cards are AWS's responsible AI documentation for pre-built AI services (e.g., Rekognition, Textract, Comprehend, Titan). They provide intended use cases, limitations, responsible AI design choices, and deployment/optimization practices." },
          { icon: "service", text: "SageMaker Model Cards document the lifecycle of custom-trained models. They auto-populate details about datasets, containers, and bias/explainability reports from SageMaker Clarify, creating a centralized record of how a model was built and evaluated." },
          { icon: "concept", text: "Shapley values determine the contribution of each feature to a model's prediction. SageMaker Clarify provides feature attributions via Shapley values. Partial dependence plots show how predictions change for different values of a single feature — both make black-box models more explainable." },
          { icon: "concept", text: "Human-centered AI designs systems that prioritize human needs and values. Incorporates interdisciplinary collaboration — psychologists, ethicists, domain experts, and engineers work together to ensure AI serves people effectively." },
          { icon: "service", text: "Amazon A2I (Augmented AI) incorporates human review into model inferences. Use cases: send low-confidence predictions to human reviewers, audit random predictions for quality. Works with AWS AI services (Rekognition, Textract) or custom models. Reviewers can come from your organization or Amazon Mechanical Turk.", diagram: "graph LR\n  M[Model Prediction] --> CC{Confidence Check}\n  CC -->|High confidence| O[Output]\n  CC -->|Low confidence| HR[Human Review]\n  HR --> O" },
          { icon: "concept", text: "Reinforcement Learning from Human Feedback (RLHF) is the industry standard for ensuring LLMs produce truthful, harmless, helpful content. Process: human reviewers evaluate multiple LLM responses → indicate preferences → preferences train a reward model → reward model scores future outputs → LLM is refined to maximize reward scores.", diagram: "graph TD\n  LLM1[LLM generates responses] --> HR[Human reviewers rank responses]\n  HR --> TD[Preference training data]\n  TD --> RM[Train Reward Model]\n  RM --> SC[Score LLM outputs]\n  SC --> REF[Refine LLM]\n  REF --> LLM1" },
          { icon: "service", text: "SageMaker Ground Truth collects human preference labels for RLHF and model improvement. Configurable number of reviewers per prediction. Integrates with Amazon Mechanical Turk for third-party reviewer pools." }
        ]
      },
      flashcards: [
        { front: "What is the difference between transparency, interpretability, and explainability?", back: "Transparency: how well stakeholders understand a model's workings. Interpretability: using simple, mathematically transparent algorithms (linear regression, decision trees) whose inner mechanisms are directly understandable. Explainability: describing what a black-box model does without knowing exactly how — a model-agnostic approach." },
        { front: "What are the four key tradeoffs involving model transparency?", back: "1) Performance vs. Transparency (complex models perform better but are harder to understand). 2) Transparency vs. Security (transparent models are more vulnerable to attacks). 3) Transparency vs. Proprietary Protection (explainability enables reverse engineering). 4) Transparency vs. Privacy (sharing model details may expose sensitive data)." },
        { front: "What are AI Service Cards?", back: "AWS's responsible AI documentation for pre-built AI services like Rekognition, Textract, Comprehend, and Titan. They describe intended use cases, known limitations, responsible AI design choices, and deployment/optimization best practices." },
        { front: "What are SageMaker Model Cards?", back: "A documentation tool for custom-trained SageMaker models. They auto-populate details about training datasets, containers, and bias/explainability reports from Clarify. They create a centralized lifecycle record of how the model was built, trained, and evaluated." },
        { front: "What are Shapley values in the context of ML explainability?", back: "A method to determine the contribution of each input feature to a model's prediction. SageMaker Clarify computes Shapley values to provide feature attribution — showing which features most influenced each prediction, making black-box models more understandable." },
        { front: "What is a partial dependence plot?", back: "A visualization showing how a model's predictions change as you vary the values of a single feature while keeping all other features constant. It reveals the relationship between a feature and the predicted outcome, aiding model explainability." },
        { front: "What is Amazon A2I (Augmented AI)?", back: "An AWS service that incorporates human review into ML workflows. It routes low-confidence predictions to human reviewers and can audit random predictions for quality. Works with AWS AI services (Rekognition, Textract) or custom models. Reviewers can be internal or from Amazon Mechanical Turk.", backDiagram: "graph LR\n  P[Prediction] --> C{Confidence?}\n  C -->|High| Out[Output]\n  C -->|Low| HR[Human Review]\n  HR --> Out" },
        { front: "How does Reinforcement Learning from Human Feedback (RLHF) work?", back: "1) Human reviewers evaluate multiple LLM responses to the same prompt. 2) Reviewers indicate their preferred response. 3) Preferences become training data for a reward model. 4) The reward model learns to predict human preference scores. 5) The LLM is refined to maximize reward model scores — producing more truthful, harmless, helpful content." },
        { front: "What is SageMaker Ground Truth?", back: "An AWS service for collecting human feedback and preference labels used in RLHF and model improvement. Supports configurable numbers of reviewers per prediction and integrates with Amazon Mechanical Turk for third-party reviewer pools." },
        { front: "What is human-centered AI?", back: "An approach to designing AI systems that prioritizes human needs and values. It incorporates interdisciplinary collaboration — psychologists, ethicists, domain experts, and engineers — to ensure AI systems serve people effectively and responsibly." },
        { front: "When should you prioritize model interpretability over performance?", back: "When regulations require mathematical transparency (e.g., financial compliance, healthcare), when you need to explain exactly why each decision was made (auditing), or when stakeholder trust depends on understanding the model's reasoning. Use simpler models (linear regression, decision trees) in these cases." },
        { front: "How does open source software contribute to AI transparency?", back: "Open source code is developed collaboratively and shared openly, enabling diverse developer input, full auditability of algorithms, and community review. This maximizes transparency because anyone can inspect, verify, and improve the code." }
      ],
      quiz: [
        {
          question: "A company needs to document how their custom SageMaker model was trained, what data was used, and what bias was detected. Which tool should they use?",
          options: ["AI Service Cards", "SageMaker Model Cards", "SageMaker Ground Truth", "Amazon A2I"],
          correct: 1,
          explanation: "SageMaker Model Cards document the lifecycle of custom-trained models, auto-populating details about datasets, training containers, and bias/explainability reports from Clarify. AI Service Cards are for AWS's pre-built AI services, not custom models."
        },
        {
          question: "A medical imaging AI flags a scan as abnormal with only 60% confidence. What AWS service can route this to a doctor for review?",
          options: ["SageMaker Clarify", "Amazon Bedrock Guardrails", "Amazon A2I (Augmented AI)", "SageMaker Ground Truth"],
          correct: 2,
          explanation: "Amazon A2I routes low-confidence predictions to human reviewers. In this case, the 60% confidence prediction would be sent to a qualified doctor for review before being acted upon."
        },
        {
          question: "Which technique determines how much each input feature contributed to a specific prediction?",
          options: ["RLHF", "Partial dependence plots", "Shapley values", "Class imbalance metrics"],
          correct: 2,
          explanation: "Shapley values determine the contribution of each feature to a model's prediction, providing per-prediction feature attribution. Partial dependence plots show feature-prediction relationships in general, not per-prediction contributions."
        },
        {
          question: "A financial regulator requires full mathematical transparency into how a credit scoring model makes decisions. Which approach is most appropriate?",
          options: ["Use a large foundation model with Shapley value explanations", "Use an interpretable model like logistic regression or decision trees", "Use a neural network with SageMaker Clarify reports", "Use RLHF to align the model with regulatory preferences"],
          correct: 1,
          explanation: "When full mathematical transparency is required, interpretable models (logistic regression, decision trees) are most appropriate because their inner mechanisms are directly understandable — you can see the exact coefficients and decision rules. Black-box models with post hoc explanations cannot provide this level of transparency."
        },
        {
          question: "What is the primary purpose of RLHF (Reinforcement Learning from Human Feedback)?",
          options: ["To detect bias in training datasets", "To ensure LLMs produce truthful, harmless, and helpful content", "To measure model accuracy on benchmarks", "To provide feature attribution for model predictions"],
          correct: 1,
          explanation: "RLHF is the industry standard for aligning LLMs with human values. Human reviewers rank model responses, those preferences train a reward model, and the LLM is refined to maximize reward scores — producing more truthful, harmless, and helpful outputs."
        },
        {
          question: "Making a model more transparent increases which risk?",
          options: ["Overfitting", "Hallucination", "Adversarial attacks exploiting known model internals", "Class imbalance"],
          correct: 2,
          explanation: "Transparency vs. Security is a key tradeoff — transparent models are more susceptible to attacks because adversaries understand the inner mechanisms and can craft targeted exploits. Opaque models only expose outputs, giving attackers less to work with."
        },
        {
          question: "Which AWS resource provides documentation on intended use cases, limitations, and responsible AI design choices for Amazon Rekognition?",
          options: ["SageMaker Model Cards", "AI Service Cards", "Amazon A2I audit reports", "SageMaker Clarify reports"],
          correct: 1,
          explanation: "AI Service Cards are AWS's responsible AI documentation for pre-built AI services like Rekognition, Textract, Comprehend, and Titan. They describe intended use cases, known limitations, and responsible AI practices. SageMaker Model Cards are for custom-trained models."
        },
        {
          question: "In the RLHF process, what is the role of the reward model?",
          options: ["It generates the initial LLM responses", "It detects bias in training data", "It learns to predict human preference scores and guides LLM refinement", "It collects human feedback from reviewers"],
          correct: 2,
          explanation: "The reward model is trained on human preference data (rankings of LLM responses). It learns to predict which outputs humans prefer and assigns scores. The LLM is then refined to maximize these scores, aligning its outputs with human values."
        },
        {
          question: "A data scientist wants to understand how changing a customer's age affects the model's predicted churn probability. Which visualization should they use?",
          options: ["Shapley value chart", "Partial dependence plot", "Confusion matrix", "ROC curve"],
          correct: 1,
          explanation: "A partial dependence plot shows how model predictions change as you vary the values of a single feature (age) while keeping all other features constant. It reveals the relationship between age and predicted churn probability."
        },
        {
          question: "Which AWS service collects human preference labels that are used to train reward models in RLHF?",
          options: ["Amazon A2I", "SageMaker Ground Truth", "SageMaker Clarify", "Amazon Bedrock"],
          correct: 1,
          explanation: "SageMaker Ground Truth collects human feedback and preference labels used in RLHF. It supports configurable reviewers per prediction and integrates with Amazon Mechanical Turk. A2I is for human review of live inferences, not for collecting training preferences."
        }
      ]
    }
  ]
};
