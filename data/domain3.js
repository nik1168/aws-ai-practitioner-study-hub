window.DOMAINS = window.DOMAINS || {};
window.DOMAINS["domain3"] = {
  title: "Applications of Foundation Models",
  taskStatements: [
    // =========================================================================
    // TASK STATEMENT 3.1 — Describe design considerations for foundation model
    //                       applications
    // =========================================================================
    {
      id: "3.1",
      title: "Describe design considerations for foundation model applications",
      summary: {
        keyPoints: [
          { icon: "concept", text: "Foundation model selection criteria: cost (cost-performance tradeoff — e.g., 98% accuracy but expensive vs. 97% but affordable), modality (text, image, code), latency, multilingual support, model size, model complexity, customization options, and input/output length constraints." },
          { icon: "concept", text: "Inference latency is critical for real-time applications (e.g., self-driving vehicles). Model complexity is measured by number of parameters, layers, and operations. Different architectures suit different tasks: CNNs for image recognition, RNNs for NLP." },
          { icon: "metric", text: "Evaluation metrics for model selection: Accuracy (not for imbalanced datasets), Precision, Recall, F1 Score, RMSE (Root Mean Squared Error), MAP (Mean Average Precision — better than accuracy for object detection), MAE (Mean Absolute Error)." },
          { icon: "concept", text: "Interpretability vs. Explainability: Interpretability means mathematically transparent models (coefficients, formulas). Explainability approximates black-box models with simpler local models. Foundation models are inherently black boxes — if interpretability is required, use simpler models (linear regression, decision trees)." },
          { icon: "concept", text: "Greater model complexity enhances performance but increases costs, makes models harder to explain and maintain. Additional considerations: hardware constraints, maintenance burden, data privacy requirements, and transfer learning opportunities." },
          { icon: "concept", text: "Inference parameters control model behavior: Temperature, Top K, Top P (control randomness/diversity), Response length, Penalties, Stop sequences (limit output). Experiment to find the optimal balance between diversity, coherence, and efficiency." },
          { icon: "concept", text: "Retrieval Augmented Generation (RAG) integrates domain-specific data from vector databases to enrich prompts with semantically relevant context. RAG has two components: a retriever (searches knowledge base) and a generator (produces output from retrieved information).", diagram: "graph LR\n  P[User Prompt] --> QE[Query Encoder]\n  QE --> E[Embedding]\n  E --> VDB[(Vector Database)]\n  VDB --> R[Retrieved Context]\n  R --> AP[Augmented Prompt]\n  P --> AP\n  AP --> LLM[Foundation Model]\n  LLM --> O[Response]" },
          { icon: "concept", text: "Vector databases store data as mathematical representations (embeddings). Embeddings are numerical representations capturing meaning and relationships. They enable efficient lookup, data management, fault tolerance, and semantic search across structured and unstructured data." },
          { icon: "concept", text: "RAG solves hallucinations by complementing LLMs with external knowledge bases. Instead of relying solely on training data, the model retrieves factual information from vector databases containing verified knowledge articles." },
          { icon: "service", text: "AWS vector database services: Amazon OpenSearch Service (low-latency search, dashboards, plugins for alerting/security/vector storage), Amazon Aurora, Redis, Amazon Neptune, Amazon DocumentDB, Amazon RDS with PostgreSQL (pgvector extension). OpenSearch Serverless offers fully managed vector storage." },
          { icon: "service", text: "Knowledge Bases for Amazon Bedrock securely connect foundation models to company data stored as embeddings for relevant, context-specific responses. Agents for Amazon Bedrock automatically break down tasks, generate orchestration logic, call APIs, and invoke knowledge bases for multi-step workflows." },
          { icon: "concept", text: "Bias in pre-trained models must be assessed. Check model availability: maintenance status, license terms, documentation quality, and framework compatibility. Balance customization needs against complexity — more customization means more maintenance." }
        ]
      },
      flashcards: [
        { front: "What are the key criteria for selecting a foundation model?", back: "Cost (cost-performance tradeoff), modality (text/image/code), inference latency, multilingual support, model size, model complexity, customization options, and input/output length constraints." },
        { front: "What is the difference between interpretability and explainability?", back: "Interpretability: mathematically transparent models where you can see coefficients and formulas (e.g., linear regression). Explainability: approximating black-box models locally with simpler, interpretable models. Foundation models are inherently black boxes due to their complexity." },
        { front: "When should you choose interpretable models over foundation models?", back: "When mathematical transparency is required (regulatory compliance, auditing), when you need to understand exactly why decisions are made, or when the task is simple enough that a linear regression or decision tree performs adequately." },
        { front: "What are the main inference parameters that control model output?", back: "Temperature (randomness), Top K (limits vocabulary to K most likely tokens), Top P (nucleus sampling — limits to tokens whose cumulative probability reaches P), Response length, Penalties (reduce repetition), and Stop sequences (define where to stop generating)." },
        { front: "What is Retrieval Augmented Generation (RAG)?", back: "An architecture that integrates external knowledge from vector databases into the generation process. It has two components: a retriever (searches knowledge base for relevant context) and a generator (produces output using retrieved information plus the original prompt). RAG helps prevent hallucinations.", backDiagram: "graph LR\n  P[User Prompt] --> QE[Query Encoder]\n  QE --> VDB[(Vector DB)]\n  VDB --> R[Retrieved Context]\n  R --> AP[Augmented Prompt]\n  P --> AP\n  AP --> LLM[LLM]\n  LLM --> O[Response]" },
        { front: "What is a vector database?", back: "A collection of data stored as mathematical representations (embeddings). Vector embeddings are numerical representations that capture meaning and relationships between data points. Key capabilities: efficient lookup, data management, fault tolerance, authentication, and semantic search." },
        { front: "How does RAG solve the hallucination problem?", back: "Instead of relying solely on the LLM's training data (which may be incomplete or outdated), RAG retrieves factual information from verified external knowledge bases (vector databases). This grounds the model's responses in actual data, reducing fabricated outputs." },
        { front: "What AWS services support vector databases?", back: "Amazon OpenSearch Service (with serverless option), Amazon Aurora, Redis, Amazon Neptune, Amazon DocumentDB (MongoDB compatible), and Amazon RDS with PostgreSQL (pgvector extension). Each offers vector storage and similarity search capabilities." },
        { front: "What are Knowledge Bases for Amazon Bedrock?", back: "A feature that securely connects foundation models to company data stored as embeddings. It enables RAG by providing relevant, context-specific responses grounded in your organization's data sources." },
        { front: "What are Agents for Amazon Bedrock?", back: "A fully managed capability to build AI applications that can automatically break down tasks, generate orchestration logic, call APIs, and invoke knowledge bases. They handle multi-step workflows — e.g., a travel booking agent that searches availability, checks prices, and makes reservations." },
        { front: "What is Amazon OpenSearch Service?", back: "A managed search and analytics service offering low-latency search, visualization dashboards, and plugins for alerting, access control, observability, security monitoring, and vector storage. OpenSearch Serverless provides fully managed vector storage without infrastructure management." },
        { front: "Why is accuracy not recommended for imbalanced datasets?", back: "Because a model can achieve high accuracy by simply predicting the majority class. For example, if 95% of data is class A, predicting all as A gives 95% accuracy but completely misses class B. Metrics like Precision, Recall, F1 Score, or MAP are more informative." },
        { front: "What is MAP (Mean Average Precision)?", back: "A metric that evaluates ranking quality by computing the average precision across different recall levels. It is better than accuracy for tasks like object detection where you need to assess how well the model ranks its predictions." }
      ],
      quiz: [
        {
          question: "A company needs a model that can explain exactly why it made each decision for regulatory compliance. Which approach is most appropriate?",
          options: ["A large foundation model with billions of parameters", "A simpler interpretable model like linear regression or decision trees", "A diffusion model with post hoc analysis", "A multimodal foundation model"],
          correct: 1,
          explanation: "When mathematical transparency and interpretability are required (regulatory compliance, auditing), simpler models like linear regression or decision trees are more appropriate. Foundation models are inherently black boxes and cannot provide the mathematical transparency needed."
        },
        {
          question: "A self-driving car needs to make split-second decisions. Which model selection criterion is most critical?",
          options: ["Multilingual support", "Model customization options", "Inference latency", "Input/output length"],
          correct: 2,
          explanation: "Inference latency is critical for real-time applications like self-driving vehicles where decisions must be made in milliseconds. Slow inference could have safety implications."
        },
        {
          question: "An LLM confidently provides outdated information about a company's product catalog. Which approach best addresses this?",
          options: ["Increase the model's temperature parameter", "Implement RAG with a vector database containing current product data", "Fine-tune the model with more training data", "Use a larger foundation model"],
          correct: 1,
          explanation: "RAG (Retrieval Augmented Generation) solves this by connecting the model to an external vector database containing current product information. This grounds responses in up-to-date data rather than relying on potentially outdated training data."
        },
        {
          question: "Which inference parameter controls the randomness and creativity of model outputs?",
          options: ["Stop sequences", "Response length", "Temperature", "Penalties"],
          correct: 2,
          explanation: "Temperature controls randomness — higher temperature produces more diverse/creative outputs, lower temperature produces more focused/deterministic outputs. Top K and Top P also control diversity."
        },
        {
          question: "A company wants to build an AI assistant that can search databases, make API calls, and execute multi-step workflows. Which AWS service is most appropriate?",
          options: ["Amazon SageMaker Canvas", "Knowledge Bases for Amazon Bedrock", "Agents for Amazon Bedrock", "Amazon OpenSearch Service"],
          correct: 2,
          explanation: "Agents for Amazon Bedrock can automatically break down tasks, generate orchestration logic, call APIs, and invoke knowledge bases for multi-step workflows — exactly what's needed for a complex AI assistant."
        },
        {
          question: "Which metric is more appropriate than accuracy for evaluating object detection models?",
          options: ["RMSE (Root Mean Squared Error)", "MAE (Mean Absolute Error)", "MAP (Mean Average Precision)", "F1 Score"],
          correct: 2,
          explanation: "MAP (Mean Average Precision) is better than accuracy for object detection because it evaluates ranking quality by computing average precision across different recall levels, which is critical for detection tasks."
        },
        {
          question: "What are the two main components of a RAG architecture?",
          options: ["Encoder and decoder", "Retriever and generator", "Trainer and evaluator", "Tokenizer and embedder"],
          correct: 1,
          explanation: "RAG has two components: the retriever (searches the knowledge base/vector database for relevant context) and the generator (produces output using the retrieved information combined with the original prompt)."
        },
        {
          question: "An organization needs fully managed vector storage and search without infrastructure management. Which AWS service should they use?",
          options: ["Amazon RDS with pgvector", "Amazon Neptune", "Amazon OpenSearch Serverless", "Amazon DocumentDB"],
          correct: 2,
          explanation: "Amazon OpenSearch Serverless provides fully managed vector storage and search without the need to manage underlying infrastructure, making it ideal for organizations wanting a hands-off approach."
        },
        {
          question: "A model achieves 96% accuracy on a fraud detection dataset where only 4% of transactions are fraudulent. What is the problem?",
          options: ["The model is overfitting", "The accuracy metric is misleading — the model may simply predict all transactions as non-fraudulent", "The model needs more training data", "The temperature parameter is too high"],
          correct: 1,
          explanation: "With a 96:4 class imbalance, a model predicting everything as non-fraudulent would achieve 96% accuracy while catching zero fraud. Precision, Recall, or F1 Score would reveal this failure. Accuracy is not recommended for imbalanced datasets."
        },
        {
          question: "What is a vector embedding?",
          options: ["A type of neural network layer", "A numerical representation of data that captures meaning and relationships", "A database indexing technique", "A model compression method"],
          correct: 1,
          explanation: "Vector embeddings are numerical representations of data (words, sentences, images) that capture meaning and relationships. Similar items have similar embeddings, enabling semantic search and similarity comparisons in vector databases."
        }
      ]
    },

    // =========================================================================
    // TASK STATEMENT 3.2 — Describe prompt engineering techniques
    // =========================================================================
    {
      id: "3.2",
      title: "Choose effective prompt engineering techniques",
      summary: {
        keyPoints: [
          { icon: "definition", text: "Prompt engineering is the practice of crafting and optimizing input prompts — selecting appropriate words, phrases, sentences, punctuation, and separator characters. The quality of prompts directly impacts the quality of responses." },
          { icon: "concept", text: "Prompt components: Task/instruction (what to do), Context (background information), and Input text (data to process). A well-structured prompt clearly defines all three components." },
          { icon: "concept", text: "Prompting techniques: Zero-shot (no examples), Few-shot (examples to calibrate output), Chain-of-thought (breaking reasoning into intermediate steps for better coherence), and Prompt templates (reusable structures with instructions, examples, and questions).", diagram: "graph TD\n  ZS[Zero-shot\nNo examples] --> FS[Few-shot\nWith examples]\n  FS --> CoT[Chain-of-thought\nStep-by-step reasoning]\n  CoT --> PT[Prompt Tuning\nOptimized embeddings]\n  style ZS fill:#fde8e4\n  style PT fill:#e8f5e2" },
          { icon: "concept", text: "Prompt tuning replaces prompt text with continuous embeddings that are optimized during training while keeping all other model parameters frozen. It is more efficient than full fine-tuning and adapts the model through the prompt layer only." },
          { icon: "concept", text: "Latent space is the encoded knowledge of language in an LLM — stored patterns capturing relationships. The model reconstructs language from these patterns when prompted. When information is not in the latent space, the model halluccinates (chooses the closest statistical match)." },
          { icon: "concept", text: "Models generate text one word at a time based on conditional probability. They reason through statistical probability, not logical reasoning. Smaller models are more prone to hallucination on topics outside their latent space knowledge." },
          { icon: "concept", text: "Prompt engineering best practices: (1) Be specific with format, examples, style, tone, and length. (2) Include examples of desired behavior. (3) Experiment iteratively. (4) Know model strengths and weaknesses. (5) Balance simplicity and complexity. (6) Use multiple comments for context. (7) Add guardrails." },
          { icon: "concept", text: "Guardrails are safety and privacy controls for generative AI: define undesirable topics, block specific words, set thresholds for harmful content categories, and filter inputs containing sensitive data." },
          { icon: "concept", text: "Prompt attack types: Prompt injection (combining trusted prompt with untrusted input for malicious output), Jailbreaking (bypassing guardrails/safety measures), Hijacking (changing/manipulating the original prompt), Poisoning (embedding harmful instructions in external content like emails or web pages).", diagram: "graph TD\n  A[Prompt Attacks] --> PI[Prompt Injection\nMalicious user input]\n  A --> JB[Jailbreaking\nBypass guardrails]\n  A --> HJ[Hijacking\nManipulate prompt]\n  A --> PO[Poisoning\nHidden instructions in content]" },
          { icon: "service", text: "Common LLM tasks on Amazon Bedrock: classification, question answering (with/without context), summarization, open-ended text generation, code generation, math, and reasoning/logical thinking." }
        ]
      },
      flashcards: [
        { front: "What is prompt engineering?", back: "The practice of crafting and optimizing input prompts by selecting appropriate words, phrases, sentences, punctuation, and separator characters. The quality of prompts directly impacts the quality of model responses." },
        { front: "What are the three components of a prompt?", back: "1) Task/instruction — what to do. 2) Context — background information. 3) Input text — the data to process. A well-structured prompt clearly defines all three." },
        { front: "What is the difference between zero-shot and few-shot prompting?", back: "Zero-shot provides no examples — the model relies entirely on its training. Few-shot provides examples in the prompt to help the model calibrate its output format and style. Few-shot generally produces better results for specialized tasks." },
        { front: "What is chain-of-thought prompting?", back: "A technique that breaks down reasoning into intermediate steps, guiding the model through a logical sequence. This produces more coherent, higher-quality responses for complex tasks requiring multi-step reasoning." },
        { front: "What is prompt tuning?", back: "A technique that replaces prompt text with continuous embeddings optimized during training while keeping all other model parameters frozen. It's more efficient than full fine-tuning — the model adapts through the prompt layer only." },
        { front: "What is latent space in an LLM?", back: "The encoded knowledge of language stored as patterns capturing relationships. The model reconstructs language from these patterns when prompted. When information is not in the latent space, the model halluccinates by choosing the closest statistical match." },
        { front: "How do LLMs generate text?", back: "One word at a time based on conditional probability. They reason through statistical probability, not logical reasoning. Each next word is selected based on the probability distribution conditioned on all previous words." },
        { front: "What are seven best practices for prompt engineering?", back: "1) Be specific (format, examples, style, tone, length). 2) Include examples of desired behavior. 3) Experiment iteratively. 4) Know model strengths/weaknesses. 5) Balance simplicity and complexity. 6) Use multiple comments for context. 7) Add guardrails." },
        { front: "What are guardrails in generative AI?", back: "Safety and privacy controls that manage interactions: define undesirable topics, block specific words, set thresholds for harmful content categories, and filter inputs containing sensitive data. They protect both the model and users." },
        { front: "What are the four types of prompt attacks?", back: "1) Prompt injection — combining trusted prompt with untrusted user input. 2) Jailbreaking — bypassing guardrails and safety measures. 3) Hijacking — changing/manipulating the original prompt. 4) Poisoning — embedding harmful instructions in external content (emails, web pages)." },
        { front: "Why do smaller LLMs hallucinate more?", back: "Smaller models have less information in their latent space. When asked about topics outside their training knowledge, they are more likely to hallucinate by choosing the closest statistical match rather than admitting they don't know." },
        { front: "What is a prompt template?", back: "A reusable structure containing instructions, examples, and questions that can be applied consistently across similar tasks. Templates standardize prompt quality and reduce the effort of crafting prompts from scratch each time." }
      ],
      quiz: [
        {
          question: "A developer needs a model to produce step-by-step mathematical solutions. Which prompting technique is most effective?",
          options: ["Zero-shot prompting", "Few-shot prompting", "Chain-of-thought prompting", "Prompt injection"],
          correct: 2,
          explanation: "Chain-of-thought prompting breaks reasoning into intermediate steps, which is ideal for mathematical solutions where showing the logical sequence leads to more accurate and coherent results."
        },
        {
          question: "An LLM is asked about a very niche topic not well-represented in its training data. What is the most likely outcome?",
          options: ["The model will refuse to answer", "The model will hallucinate by choosing the closest statistical match", "The model will search the internet for the answer", "The model will ask for clarification"],
          correct: 1,
          explanation: "When information is not in the model's latent space, it halluccinates — generating statistically plausible but factually incorrect responses. The model doesn't 'know' the answer but produces the closest statistical match."
        },
        {
          question: "Which technique adapts a model through optimized embeddings while keeping all other parameters frozen?",
          options: ["Full fine-tuning", "LoRA", "Prompt tuning", "RLHF"],
          correct: 2,
          explanation: "Prompt tuning replaces prompt text with continuous embeddings optimized during training while freezing all other model parameters. It's more efficient than full fine-tuning and adapts the model through the prompt layer only."
        },
        {
          question: "A malicious user crafts input that causes an AI chatbot to ignore its safety instructions. What type of attack is this?",
          options: ["Poisoning", "Hijacking", "Jailbreaking", "Prompt tuning"],
          correct: 2,
          explanation: "Jailbreaking is the act of bypassing guardrails and safety measures in a generative AI system. It involves crafting inputs specifically designed to make the model ignore its safety constraints."
        },
        {
          question: "What is the relationship between prompt quality and model output?",
          options: ["Prompt quality has no effect on output", "Higher quality prompts always guarantee correct outputs", "The quality of prompts directly impacts the quality of responses", "Only model size affects output quality"],
          correct: 2,
          explanation: "The quality of prompts directly impacts the quality of responses. Well-crafted prompts with clear instructions, context, and examples produce significantly better outputs than vague or poorly structured prompts."
        },
        {
          question: "A company wants to prevent its AI chatbot from discussing competitor products or inappropriate topics. What should they implement?",
          options: ["Prompt templates", "Chain-of-thought prompting", "Guardrails", "Few-shot learning"],
          correct: 2,
          explanation: "Guardrails are safety and privacy controls that let you define undesirable topics, block specific words, set thresholds for harmful content, and filter sensitive inputs — exactly what's needed to restrict discussion topics."
        },
        {
          question: "An attacker embeds hidden instructions in a web page that an AI assistant reads, causing it to perform unintended actions. What attack type is this?",
          options: ["Jailbreaking", "Prompt injection", "Hijacking", "Poisoning"],
          correct: 3,
          explanation: "Poisoning involves embedding harmful instructions in external content (emails, web pages, messages) that the AI system processes, causing it to execute unintended actions when it reads the poisoned content."
        },
        {
          question: "Which of the following is NOT one of the three components of a well-structured prompt?",
          options: ["Task/instruction", "Context", "Temperature setting", "Input text"],
          correct: 2,
          explanation: "The three components of a prompt are: Task/instruction (what to do), Context (background information), and Input text (data to process). Temperature is an inference parameter, not a prompt component."
        }
      ]
    },

    // =========================================================================
    // TASK STATEMENT 3.3 — Describe the training and fine-tuning process for
    //                       foundation models
    // =========================================================================
    {
      id: "3.3",
      title: "Describe the training and fine-tuning process for foundation models",
      summary: {
        keyPoints: [
          { icon: "concept", text: "Three key training elements: Pre-training (huge amounts of unstructured data, self-supervised learning, requires millions of GPUs, terabytes of data, trillions of tokens), Fine-tuning (extends training for specific tasks using labeled examples, supervised learning), and Continuous pre-training (ongoing training on varied data to expand capabilities).", diagram: "graph LR\n  PT[Pre-training\nMassive unlabeled data] --> FT[Fine-tuning\nLabeled task-specific data]\n  FT --> CPT[Continuous Pre-training\nOngoing varied data]\n  PT -.->|Self-supervised| PT\n  FT -.->|Supervised| FT" },
          { icon: "concept", text: "Catastrophic forgetting occurs when fine-tuning on a single task modifies all model weights, improving that task but degrading performance on others. This may or may not matter depending on whether the model needs to handle multiple tasks." },
          { icon: "concept", text: "Parameter-Efficient Fine-Tuning (PEFT) freezes original LLM parameters and fine-tunes only small task-specific adaptor layers. This dramatically reduces compute and memory requirements compared to full fine-tuning while preserving the model's general capabilities." },
          { icon: "concept", text: "LoRA (Low-Rank Adaptation) is a popular PEFT technique that preserves/freezes original foundation model weights and creates new trainable low-rank matrices in each transformer layer. It modifies weights but not the model's internal representations." },
          { icon: "concept", text: "ReFT (Representation Fine-Tuning) freezes the base model and learns task-specific interventions on hidden representations. Based on the linear representation hypothesis — the idea that concepts are encoded in linear subspaces within the model." },
          { icon: "concept", text: "Multitask fine-tuning trains on examples of multiple tasks simultaneously, producing an instruction-tuned model. This helps mitigate catastrophic forgetting because losses are calculated across multiple task examples.", diagram: "graph TD\n  STF[Single-task Fine-tuning] -->|Risk| CF[Catastrophic Forgetting]\n  MTF[Multitask Fine-tuning] -->|Mitigates| CF\n  PEFT[PEFT / LoRA] -->|Avoids| CF\n  style CF fill:#fde8e4\n  style MTF fill:#e8f5e2\n  style PEFT fill:#e8f5e2" },
          { icon: "concept", text: "Domain adaptation fine-tuning adapts pre-trained models to specific domains with limited domain-specific data — helps the model understand industry jargon, technical terms, and specialized language. RLHF (Reinforcement Learning from Human Feedback) aligns models with human preferences." },
          { icon: "concept", text: "Fine-tuning process: select prompts from training data, pass to LLM, generate completions, compare against training labels, calculate loss, update weights. Data is split into training, validation, and test sets." },
          { icon: "service", text: "AWS data preparation tools: SageMaker Canvas (low-code), Apache Spark/Hive/Presto (scalable frameworks), SageMaker Studio (EMR integration), AWS Glue (serverless Spark), SageMaker Feature Store (centralized feature repository), SageMaker Clarify (bias detection across gender, race, age), SageMaker Ground Truth (data labeling workflows)." },
          { icon: "concept", text: "Continuous pre-training is important because generative AI output is non-deterministic. When models train on varied data (topics, genres, contexts), they become more powerful and better learn to use out-of-domain data. Amazon Bedrock supports continuous pre-training for Titan Text Express and Lite." }
        ]
      },
      flashcards: [
        { front: "What are the three key elements of training foundation models?", back: "1) Pre-training — massive unstructured data, self-supervised learning (millions of GPUs, terabytes of data). 2) Fine-tuning — task-specific labeled examples, supervised learning. 3) Continuous pre-training — ongoing training on varied data to expand capabilities.", backDiagram: "graph LR\n  PT[Pre-training\nMassive unlabeled data] --> FT[Fine-tuning\nLabeled task-specific data]\n  FT --> CPT[Continuous Pre-training\nOngoing varied data]" },
        { front: "What is catastrophic forgetting?", back: "When fine-tuning on a single task modifies all model weights, improving that specific task but degrading performance on all other tasks the model previously handled well. It may or may not matter depending on whether multi-task capability is needed." },
        { front: "What is PEFT (Parameter-Efficient Fine-Tuning)?", back: "A technique that freezes original LLM parameters and fine-tunes only small task-specific adaptor layers. It dramatically reduces compute and memory requirements compared to full fine-tuning while preserving the model's general capabilities." },
        { front: "What is LoRA (Low-Rank Adaptation)?", back: "A popular PEFT technique that preserves/freezes original foundation model weights and creates new trainable low-rank matrices in each transformer layer. It modifies weights but not the model's internal representations — efficient and preserves model quality." },
        { front: "What is ReFT (Representation Fine-Tuning)?", back: "A technique that freezes the base model and learns task-specific interventions on hidden representations. Based on the linear representation hypothesis — the idea that concepts are encoded in linear subspaces within the model." },
        { front: "How does multitask fine-tuning mitigate catastrophic forgetting?", back: "By training on examples of multiple tasks simultaneously, the model calculates losses across all task types. This produces an instruction-tuned model that maintains capability across multiple tasks instead of over-specializing on one." },
        { front: "What is domain adaptation fine-tuning?", back: "Adapting pre-trained models to specific domains (medical, legal, financial) with limited domain-specific data. Helps the model understand industry jargon, technical terms, and specialized language. Amazon SageMaker JumpStart supports this." },
        { front: "What are the steps of the fine-tuning process?", back: "1) Select prompts from training data. 2) Pass to LLM. 3) Generate completions. 4) Compare against training labels. 5) Calculate loss. 6) Update weights. Data is split into training, validation, and test sets." },
        { front: "What does Amazon SageMaker Clarify do?", back: "Analyzes data and detects biases across facets like gender, race, and age. It detects imbalanced representations and labeling biases in training data, and can evaluate LLMs through model evaluation jobs." },
        { front: "What is Amazon SageMaker Ground Truth?", back: "A service for managing data labeling workflows for training datasets. It helps create high-quality labeled data needed for supervised learning and fine-tuning." },
        { front: "What is Amazon SageMaker Feature Store?", back: "A centralized repository for searching, discovering, and retrieving features for training. It provides standardized feature data that can be reused across ML projects, reducing duplication and ensuring consistency." },
        { front: "Why is continuous pre-training important?", back: "Generative AI output is non-deterministic, making validation harder. Training on varied data (topics, genres, contexts) makes models more powerful and better at using out-of-domain data. Amazon Bedrock supports this for Titan Text Express and Lite." }
      ],
      quiz: [
        {
          question: "A company fine-tunes a foundation model for customer support, but the model loses its ability to summarize documents. What happened?",
          options: ["The model was undertrained", "Catastrophic forgetting — fine-tuning on one task degraded other capabilities", "The training data was biased", "The model needs more parameters"],
          correct: 1,
          explanation: "Catastrophic forgetting occurs when fine-tuning on a single task modifies all weights, improving that task but degrading performance on others. The customer support fine-tuning overwrote the model's summarization capabilities."
        },
        {
          question: "Which fine-tuning technique creates new trainable low-rank matrices while keeping original weights frozen?",
          options: ["Full fine-tuning", "LoRA (Low-Rank Adaptation)", "ReFT (Representation Fine-Tuning)", "Continuous pre-training"],
          correct: 1,
          explanation: "LoRA creates new trainable low-rank matrices in each transformer layer while preserving/freezing the original foundation model weights. This is a popular PEFT technique that is both efficient and preserves model quality."
        },
        {
          question: "A team needs to fine-tune a model but has limited GPU resources. Which approach should they consider?",
          options: ["Full fine-tuning with all parameters", "PEFT (Parameter-Efficient Fine-Tuning)", "Training a new model from scratch", "Increasing the model size"],
          correct: 1,
          explanation: "PEFT freezes original LLM parameters and fine-tunes only small task-specific adaptor layers, dramatically reducing compute and memory requirements compared to full fine-tuning."
        },
        {
          question: "Which AWS service helps detect bias in training data across facets like gender, race, and age?",
          options: ["SageMaker Ground Truth", "SageMaker Feature Store", "SageMaker Clarify", "SageMaker Canvas"],
          correct: 2,
          explanation: "Amazon SageMaker Clarify analyzes data and detects biases across facets like gender, race, and age. It identifies imbalanced representations and labeling biases in training data."
        },
        {
          question: "What is the key difference between LoRA and ReFT?",
          options: ["LoRA modifies weights; ReFT modifies hidden representations", "LoRA is slower than ReFT", "ReFT requires more memory than LoRA", "LoRA works only with text; ReFT works with images"],
          correct: 0,
          explanation: "LoRA modifies weights by creating new trainable low-rank matrices. ReFT freezes the base model and learns task-specific interventions on hidden representations, based on the linear representation hypothesis."
        },
        {
          question: "A medical company wants their LLM to understand specialized terminology like 'anterior cruciate ligament reconstruction'. What type of fine-tuning is most appropriate?",
          options: ["Multitask fine-tuning", "Domain adaptation fine-tuning", "Prompt tuning", "Reinforcement learning"],
          correct: 1,
          explanation: "Domain adaptation fine-tuning adapts pre-trained models to specific domains with limited domain-specific data, helping the model understand industry jargon, technical terms, and specialized language."
        },
        {
          question: "How does multitask fine-tuning differ from single-task fine-tuning?",
          options: ["It uses more GPUs", "It trains on examples of multiple tasks, producing an instruction-tuned model", "It only works with LoRA", "It requires no labeled data"],
          correct: 1,
          explanation: "Multitask fine-tuning trains on examples of multiple tasks simultaneously, producing an instruction-tuned model capable of completing many different tasks. This helps mitigate catastrophic forgetting."
        },
        {
          question: "In the fine-tuning process, what happens after generating completions from training prompts?",
          options: ["The model is deployed to production", "Completions are compared against training labels, loss is calculated, and weights are updated", "The model's temperature is adjusted", "The training data is re-labeled"],
          correct: 1,
          explanation: "The fine-tuning loop: select prompts → pass to LLM → generate completions → compare against training labels → calculate loss → update weights. This cycle repeats until the model achieves satisfactory performance."
        }
      ]
    },

    // =========================================================================
    // TASK STATEMENT 3.4 — Describe methods to evaluate foundation model
    //                       performance
    // =========================================================================
    {
      id: "3.4",
      title: "Describe methods to evaluate foundation model performance",
      summary: {
        keyPoints: [
          { icon: "concept", text: "LLM output is non-deterministic (same input can produce different outputs), making evaluation more difficult than deterministic models. Deployment considerations include inference speed, compute budget, and performance-accuracy tradeoffs." },
          { icon: "concept", text: "Optimization techniques: reduce model size (faster but may decrease quality), use more concise prompts, reduce size/number of retrieved snippets in RAG, and control generation through inference parameters." },
          { icon: "metric", text: "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) evaluates automatic summarization and machine translation. BLEU (Bilingual Evaluation Understudy) evaluates machine-translated text quality. Both compare model output against human reference texts." },
          { icon: "metric", text: "LLM Benchmarks: GLUE/SuperGLUE (language understanding — sentiment analysis, Q&A, multi-sentence reasoning), MMLU (knowledge and problem-solving across history, math, law, CS), BIG-bench (tasks beyond current LLM capabilities — math, biology, reasoning), HELM (holistic evaluation — transparency, summarization, bias detection).", diagram: "graph TD\n  B[LLM Benchmarks] --> GLUE[GLUE / SuperGLUE\nLanguage understanding]\n  B --> MMLU[MMLU\nMultitask knowledge]\n  B --> BB[BIG-bench\nBeyond current capabilities]\n  B --> HELM[HELM\nHolistic evaluation]" },
          { icon: "concept", text: "Human evaluation uses human workers to manually assess model responses. It can compare responses from different models (SageMaker JumpStart models, non-AWS models) and provides qualitative assessment that automated metrics cannot capture." },
          { icon: "service", text: "Amazon SageMaker Clarify can evaluate LLMs and create model evaluation jobs for text-based foundation models. Amazon Bedrock evaluation uses automatic comparison with semantic similarity (BERTscore) against human references — suitable for evaluating faithfulness and hallucinations." },
          { icon: "concept", text: "RAG helps overcome outdated model knowledge and avoid hallucinations by accessing external data at inference time. This is more cost-effective than re-training, which requires repeated expensive training cycles to keep models current." },
          { icon: "concept", text: "End-to-end application stack: Infrastructure layer (compute, storage, network, security), Model layer (LLM selection, inference), Tools layer (model hubs, development frameworks), and UI layer (website or REST API with security). Each layer needs security considerations.", diagram: "graph TD\n  UI[UI Layer\nWebsite / REST API] --> Tools[Tools Layer\nModel hubs, frameworks]\n  Tools --> Model[Model Layer\nLLM selection, inference]\n  Model --> Infra[Infrastructure Layer\nCompute, storage, network]\n  style UI fill:#fff3e0\n  style Tools fill:#e3f2fd\n  style Model fill:#e8f5e2\n  style Infra fill:#f3e5f5" },
          { icon: "concept", text: "Application development process: (1) Define business goals with specific problem, (2) Determine success metrics and infrastructure, (3) Measure, monitor, and review metrics to evaluate performance. Store user completions and feedback for additional fine-tuning and alignment." }
        ]
      },
      flashcards: [
        { front: "Why is evaluating LLMs harder than traditional ML models?", back: "LLM output is non-deterministic — the same input can produce different outputs each time. Traditional ML models are deterministic (same input = same output), making evaluation with fixed metrics straightforward." },
        { front: "What are four optimization techniques for LLM deployment?", back: "1) Reduce model size (faster loading, may decrease quality). 2) Use more concise prompts. 3) Reduce size/number of retrieved snippets in RAG. 4) Control generation through inference parameters and prompts." },
        { front: "What is the GLUE benchmark?", back: "General Language Understanding Evaluation — tests natural language tasks like sentiment analysis and question answering to evaluate how well models generalize across tasks. SuperGLUE extends it with multi-sentence reasoning and reading comprehension (introduced 2019)." },
        { front: "What is MMLU?", back: "Massive Multitask Language Understanding — evaluates knowledge and problem-solving across diverse subjects including history, math, law, and computer science. Tests breadth of model knowledge." },
        { front: "What is BIG-bench?", back: "Beyond the Imitation Game Benchmark — tests tasks beyond current LLM capabilities including math, biology, physics, bias detection, linguistics, reasoning, and software development. Pushes the boundaries of model evaluation." },
        { front: "What is HELM?", back: "Holistic Evaluation of Language Models — improves model transparency by combining metrics for summarization, Q&A, sentiment analysis, and bias detection. Provides a comprehensive view of model capabilities and limitations." },
        { front: "What is BERTscore?", back: "A semantic similarity metric used by Amazon Bedrock evaluation. It automatically compares generated responses against human reference responses using semantic similarity rather than exact word matching. Useful for evaluating faithfulness and detecting hallucinations." },
        { front: "When is human evaluation preferred over automated metrics?", back: "When qualitative assessment is needed — evaluating response quality, appropriateness, helpfulness, or nuance that automated metrics cannot capture. It can also compare responses from different models side by side." },
        { front: "What are the four layers of a generative AI application stack?", back: "1) Infrastructure layer (compute, storage, network, security). 2) Model layer (LLM selection, inference). 3) Tools layer (model hubs, development frameworks). 4) UI layer (website or REST API). Each layer needs security considerations.", backDiagram: "graph TD\n  UI[UI Layer\nWebsite / REST API] --> Tools[Tools Layer\nModel hubs, frameworks]\n  Tools --> Model[Model Layer\nLLM selection, inference]\n  Model --> Infra[Infrastructure Layer\nCompute, storage, network]\n  style UI fill:#fff3e0\n  style Tools fill:#e3f2fd\n  style Model fill:#e8f5e2\n  style Infra fill:#f3e5f5" },
        { front: "Why is RAG preferred over re-training for keeping models current?", back: "Re-training requires repeated expensive training cycles. RAG accesses external data at inference time, providing up-to-date information without modifying the model. It's more cost-effective and can be updated by simply changing the knowledge base." },
        { front: "What should be stored for ongoing model improvement?", back: "User completions (model outputs) and user feedback. This data can be used for additional fine-tuning, evaluation, and alignment to continuously improve model performance based on real-world usage." },
        { front: "What is the application development process for generative AI?", back: "1) Define business goals with a specific problem. 2) Determine success metrics and infrastructure. 3) Measure, monitor, and review metrics to evaluate performance. Continuously iterate based on results." }
      ],
      quiz: [
        {
          question: "Which benchmark evaluates LLMs on tasks that go beyond current model capabilities, including math, biology, and reasoning?",
          options: ["GLUE", "MMLU", "BIG-bench", "HELM"],
          correct: 2,
          explanation: "BIG-bench (Beyond the Imitation Game Benchmark) specifically tests tasks beyond current LLM capabilities, including math, biology, physics, bias, linguistics, reasoning, childhood development, and software development."
        },
        {
          question: "A company needs to evaluate whether their LLM generates faithful, non-hallucinated responses. Which approach is most suitable?",
          options: ["GLUE benchmark", "MMLU benchmark", "Amazon Bedrock evaluation with BERTscore", "Manual code review"],
          correct: 2,
          explanation: "Amazon Bedrock evaluation uses BERTscore for semantic similarity comparison against human references, making it specifically suitable for evaluating faithfulness and detecting hallucinations in text generation."
        },
        {
          question: "A deployed LLM is too slow for real-time use. Which is NOT a recommended optimization technique?",
          options: ["Reduce model size", "Use more concise prompts", "Increase model parameters", "Reduce retrieved snippet size in RAG"],
          correct: 2,
          explanation: "Increasing model parameters would make the model larger and slower. The recommended optimizations are reducing model size, using concise prompts, reducing RAG snippet sizes, and controlling generation through inference parameters."
        },
        {
          question: "Which benchmark provides a holistic evaluation combining metrics for summarization, Q&A, sentiment analysis, and bias detection?",
          options: ["GLUE", "MMLU", "BIG-bench", "HELM"],
          correct: 3,
          explanation: "HELM (Holistic Evaluation of Language Models) improves model transparency by combining metrics across multiple dimensions including summarization, Q&A, sentiment analysis, and bias detection."
        },
        {
          question: "A company's product knowledge base changes weekly. What is the most cost-effective way to keep the LLM's responses current?",
          options: ["Re-train the model weekly", "Fine-tune the model weekly", "Use RAG with an updated vector database", "Deploy a new model each week"],
          correct: 2,
          explanation: "RAG accesses external data at inference time, so updating the vector database with current product information keeps responses current without expensive re-training. Simply update the knowledge base as products change."
        },
        {
          question: "What is the key difference between GLUE and SuperGLUE benchmarks?",
          options: ["GLUE is for images; SuperGLUE is for text", "SuperGLUE adds multi-sentence reasoning and reading comprehension tasks", "GLUE tests more subjects than SuperGLUE", "SuperGLUE only works with AWS models"],
          correct: 1,
          explanation: "SuperGLUE (introduced 2019) extends GLUE by adding more challenging tasks including multi-sentence reasoning and reading comprehension, providing a harder benchmark for evaluating language understanding."
        },
        {
          question: "Which layer of the generative AI application stack handles LLM selection and inference?",
          options: ["Infrastructure layer", "Model layer", "Tools layer", "UI layer"],
          correct: 1,
          explanation: "The Model layer handles LLM selection and inference. The Infrastructure layer provides compute/storage, the Tools layer has model hubs and frameworks, and the UI layer provides the user interface."
        },
        {
          question: "Why should companies store user feedback from their AI applications?",
          options: ["For marketing purposes only", "For additional fine-tuning, evaluation, and alignment to improve model performance", "To increase storage costs", "It is not recommended to store user feedback"],
          correct: 1,
          explanation: "Storing user completions and feedback enables additional fine-tuning, evaluation, and alignment, allowing the model to continuously improve based on real-world usage and user satisfaction."
        }
      ]
    }
  ]
};
