window.DOMAINS = window.DOMAINS || {};
window.DOMAINS["domain2"] = {
  title: "Fundamentals of Generative AI",
  taskStatements: [
    // =========================================================================
    // TASK STATEMENT 2.1 — Explain basic concepts of generative AI
    // =========================================================================
    {
      id: "2.1",
      title: "Explain basic concepts of generative AI",
      summary: {
        keyPoints: [
          { icon: "definition", text: "Generative AI is a subset of deep learning that generates new original content (text, images, audio, video, code) rather than classifying existing content. It uses foundation models — very large neural networks with billions of parameters pre-trained on vast amounts of data." },
          { icon: "concept", text: "Transformer architecture (introduced in 2017 paper 'Attention Is All You Need') is the core of modern generative AI. It processes entire input sequences in parallel using a self-attention mechanism, unlike traditional neural networks (RNNs, CNNs) that process sequentially.", diagram: "graph LR\n  I[Input Tokens] --> E[Embeddings +\nPosition Encoding]\n  E --> Enc[Encoder]\n  Enc --> Dec[Decoder]\n  Dec --> O[Output Tokens]\n  Enc -.->|Self-Attention| Enc" },
          { icon: "concept", text: "Self-attention computes query, key, and value vectors for each token. Dot products between query and key vectors determine attention weights, producing a weighted sum of value vectors. This allows the model to capture long-range dependencies between words." },
          { icon: "definition", text: "Key terminology: Prompt (input text), Completion (model output), Context Window (range of tokens considered), Token (discrete text unit), Tokenizer (converts text to token IDs/vectors), Embedding (numerical vector capturing semantic meaning)." },
          { icon: "concept", text: "In-context learning helps LLMs by including examples in the prompt. Zero-shot (no examples), one-shot (one example), and few-shot (multiple examples) inference guide model behavior without retraining. Prompt engineering optimizes prompts for better outputs.", diagram: "graph LR\n  ZS[Zero-shot] --> OS[One-shot] --> FS[Few-shot] --> FT[Fine-tuning]\n  style ZS fill:#fde8e4\n  style FT fill:#e8f5e2" },
          { icon: "concept", text: "Vectors are ordered lists of numbers representing features. Embeddings encode semantic meaning — vectors close together in vector space have similar meaning. Position embeddings encode token order so the model distinguishes identical words in different positions." },
          { icon: "concept", text: "Pre-training uses self-supervised learning on gigabytes to petabytes of text data. Only 1-3% of collected tokens are used after data quality curation (removing bias, harmful content). Pre-training is extremely resource-intensive, requiring GPUs." },
          { icon: "concept", text: "Unimodal models work with one data type (e.g., text-only LLMs). Multimodal models process and generate multiple types (text, image, video, audio). Multimodal tasks include image captioning, visual question answering (VQA), and text-to-image synthesis." },
          { icon: "concept", text: "Diffusion models learn to reverse a gradual noising process: forward diffusion adds noise to data, reverse diffusion iteratively de-noises random noise into coherent output. They produce higher quality, more diverse, and more stable results than GANs and VAEs.", diagram: "graph LR\n  A[Original Image] -->|Forward Diffusion| B[Add Noise]\n  B --> C[Pure Noise]\n  C -->|Reverse Diffusion| D[De-noise]\n  D --> E[Generated Image]" },
          { icon: "concept", text: "Stable Diffusion operates in a reduced latent space instead of pixel space, making it more efficient. Examples: Stable Diffusion (images), Whisper (speech), AudioLM (audio). Models are deployable through SageMaker JumpStart." },
          { icon: "concept", text: "Generative AI use cases: text generation/summarization, information extraction, question answering, classification, translation, recommendation engines, personalized marketing, chatbots, customer service, code generation/completion/translation, and search." },
          { icon: "service", text: "Amazon Bedrock provides pre-trained foundation models (including Amazon Titan) for text and image generation with fine-tuning support. Amazon Q Developer (formerly CodeWhisperer) generates real-time code suggestions. SageMaker supports code generation and completion." },
          { icon: "concept", text: "Generative AI project lifecycle: (1) Identify use case, (2) Experiment and select model, (3) Adapt/align/augment (prompt engineering, fine-tuning, RLHF), (4) Evaluate, (5) Deploy and iterate, (6) Monitor. Start with prompt engineering before fine-tuning.", diagram: "graph LR\n  A[Identify Use Case] --> B[Select Model]\n  B --> C[Adapt & Align]\n  C --> D[Evaluate]\n  D --> E[Deploy]\n  E --> F[Monitor]\n  F -.->|Iterate| C" },
          { icon: "definition", text: "Fine-tuning is supervised learning to further train a model on a specific dataset. RLHF (Reinforcement Learning from Human Feedback) aligns model behavior with human preferences. Transfer learning uses a pre-trained model as a starting point, requiring less data and time.", diagram: "graph LR\n  PE[Prompt Engineering] -->|Not enough?| FT[Fine-tuning]\n  FT -->|Align values| RLHF[RLHF]\n  style PE fill:#e8f5e2\n  style RLHF fill:#fff3e0" },
          { icon: "concept", text: "LLM limitations: Hallucinations (generating false information confidently), limited complex mathematical/logical reasoning, and statelessness (no memory of earlier conversations). A useful test: 'Could a 10-year-old follow these instructions?'" }
        ]
      },
      flashcards: [
        { front: "What is generative AI?", back: "A subset of deep learning that generates new original content (text, images, audio, video, code) using foundation models — very large neural networks with billions of parameters pre-trained on vast amounts of data." },
        { front: "What is a foundation model?", back: "A very large neural network with billions of parameters, pre-trained on vast amounts of data. It serves as a baseline for developing specialized models and is considerably larger than traditional ML models. Examples: GPT-4, Stable Diffusion, Amazon Titan." },
        { front: "What paper introduced the transformer architecture and when?", back: "'Attention Is All You Need' (2017). Transformers process entire sequences in parallel using self-attention, unlike RNNs/CNNs which process sequentially. This dramatically speeds up training and enables much larger datasets." },
        { front: "How does the self-attention mechanism work?", back: "For each token, it computes query, key, and value vectors. Dot products between query and key vectors determine attention weights, which produce a weighted sum of value vectors. This allows the model to capture long-range dependencies between words in a sequence." },
        { front: "What is the difference between a prompt and a completion?", back: "A prompt is the input text sent to the model during inference. A completion is the output/response generated by the model in response to the prompt." },
        { front: "What is a context window?", back: "The range of tokens the model can consider when generating output. It limits how much text the model can process in a single interaction." },
        { front: "What is a tokenizer?", back: "A component that converts human text into vectors with token IDs. Each token is a discrete unit of text in the model's vocabulary. Tokenization breaks text into individual units (words or phrases) for processing." },
        { front: "What is an embedding?", back: "A numerical vectorized representation of an entity that captures semantic meaning. Vectors close together in vector space have more similar meaning. Embeddings can be compressed, stored, and indexed for efficient advanced searches." },
        { front: "What is the difference between zero-shot, one-shot, and few-shot inference?", back: "Zero-shot: no examples in the prompt. One-shot: one example provided. Few-shot: multiple examples provided. These are forms of in-context learning that guide model behavior without retraining." },
        { front: "What are position embeddings?", back: "Encodings of each token's relative position in the sequence. They help the model distinguish identical tokens in different positions without needing recurrent or convolutional operations." },
        { front: "What is the role of pre-training in LLMs?", back: "The initial phase where the model learns from vast amounts of unstructured data using self-supervised learning, internalizing patterns and structures in language. It requires processing gigabytes to petabytes of data using GPUs. Only 1-3% of tokens are used after data curation." },
        { front: "What is the difference between unimodal and multimodal generative AI?", back: "Unimodal models work with one data type (e.g., text-only LLMs). Multimodal models process and generate multiple types (text, image, video, audio) and can perform cross-modal reasoning like image captioning, VQA, and text-to-image synthesis." },
        { front: "What is a diffusion model?", back: "A generative model that learns to reverse a gradual noising process. Forward diffusion adds noise; reverse diffusion iteratively de-noises random noise into coherent output. Advantages over GANs/VAEs: higher quality, more diversity, more stability, easier to train." },
        { front: "What is stable diffusion and how does it differ from standard diffusion?", back: "Stable diffusion operates in a reduced latent space (compressed representation) instead of pixel space, making it more efficient. It is deployable through SageMaker JumpStart." },
        { front: "What are three generative model architectures?", back: "1) GANs (Generative Adversarial Networks) — two competing networks. 2) VAEs (Variational Autoencoders) — encoder-decoder with latent space. 3) Transformers/Auto-regressive models — predict next token based on previous tokens. Diffusion models are another important type." },
        { front: "What is Amazon Q Developer?", back: "Formerly Amazon CodeWhisperer, it generates real-time code suggestions and completions based on comments and existing code. It supports code generation, code completion, and code translation between programming languages." },
        { front: "What are the stages of the generative AI project lifecycle?", back: "1) Identify use case. 2) Experiment and select model. 3) Adapt, align, augment (prompt engineering → fine-tuning → RLHF). 4) Evaluate. 5) Deploy and iterate. 6) Monitor. Always start with prompt engineering before moving to fine-tuning.", backDiagram: "graph LR\n  A[Identify Use Case] --> B[Select Model]\n  B --> C[Adapt & Align]\n  C --> D[Evaluate]\n  D --> E[Deploy]\n  E --> F[Monitor]\n  F -.->|Iterate| C" },
        { front: "What is RLHF (Reinforcement Learning from Human Feedback)?", back: "An additional fine-tuning technique that aligns model behavior with human preferences and values. It follows after initial fine-tuning and helps increase helpfulness, honesty, and harmlessness while decreasing toxicity and misinformation." },
        { front: "What is transfer learning in the context of generative AI?", back: "Using a pre-trained foundation model as a starting point rather than training from scratch. It requires less training time, smaller datasets, and produces accurate models more efficiently." },
        { front: "What are hallucinations in LLMs?", back: "When LLMs generate false or invented information confidently. This occurs because models are trained on internet text that may contain misinformation. The model doesn't 'know' it's wrong — it produces plausible-sounding but incorrect outputs." },
        { front: "What is a useful test to determine if an LLM can perform a task?", back: "'Could a 10-year-old child follow these instructions and complete the task?' If yes, the LLM can likely do it. Tasks requiring specialized domain knowledge, complex reasoning, or access to private data may need additional approaches." }
      ],
      quiz: [
        {
          question: "A company wants to generate product descriptions from images. Which type of generative AI model is most appropriate?",
          options: ["A unimodal text-only LLM", "A multimodal model capable of cross-modal reasoning", "A reinforcement learning agent", "A traditional supervised classification model"],
          correct: 1,
          explanation: "Multimodal models can process multiple data types (images and text) and perform cross-modal reasoning. Image captioning — generating text descriptions from images — is a core multimodal task."
        },
        {
          question: "What is the primary advantage of the transformer architecture over RNNs for processing sequences?",
          options: ["Transformers use less memory", "Transformers process the entire sequence in parallel rather than sequentially", "Transformers don't require training data", "Transformers work only with structured data"],
          correct: 1,
          explanation: "Transformers process entire sequences in parallel using self-attention, unlike RNNs which process elements one at a time sequentially. This dramatically speeds up training and enables the use of much larger datasets."
        },
        {
          question: "A data scientist provides three example input-output pairs in a prompt before asking the model to complete a new task. What technique is this?",
          options: ["Zero-shot inference", "One-shot inference", "Few-shot inference", "Fine-tuning"],
          correct: 2,
          explanation: "Few-shot inference provides multiple examples in the prompt to guide model behavior. This is a form of in-context learning — zero-shot uses no examples, one-shot uses one, and few-shot uses multiple examples."
        },
        {
          question: "Which generative model type learns by reversing a gradual noising process to produce coherent outputs from random noise?",
          options: ["Generative Adversarial Networks (GANs)", "Variational Autoencoders (VAEs)", "Diffusion models", "Auto-regressive models"],
          correct: 2,
          explanation: "Diffusion models use forward diffusion (adding noise) and reverse diffusion (iteratively de-noising) to generate outputs. They produce higher quality, more diverse, and more stable results than GANs and VAEs."
        },
        {
          question: "What is the correct order of approaches when improving an LLM's performance for a specific task?",
          options: ["Fine-tuning → Prompt engineering → RLHF", "RLHF → Fine-tuning → Prompt engineering", "Prompt engineering → Fine-tuning → RLHF", "Fine-tuning → RLHF → Prompt engineering"],
          correct: 2,
          explanation: "The recommended progression is: start with prompt engineering (cheapest, fastest), then move to fine-tuning if needed, then RLHF for alignment with human preferences. Always revisit prompt engineering throughout."
        },
        {
          question: "An LLM confidently provides detailed but completely fabricated statistics about a recent event. What limitation does this demonstrate?",
          options: ["Underfitting", "Bias", "Hallucination", "Overfitting"],
          correct: 2,
          explanation: "Hallucinations occur when LLMs generate false or invented information with confidence. The model doesn't 'know' it's wrong — it produces plausible-sounding but incorrect outputs, especially when the correct answer is unknown to the model."
        },
        {
          question: "During pre-training, approximately what percentage of collected tokens are actually used after data quality curation?",
          options: ["50-75%", "25-50%", "10-15%", "1-3%"],
          correct: 3,
          explanation: "Only 1-3% of tokens are actually used for pre-training after curation, which addresses bias, removes harmful content, and improves data quality. This is an important metric for calculating required data collection volumes."
        },
        {
          question: "What makes stable diffusion more efficient than standard diffusion models?",
          options: ["It uses fewer training examples", "It operates in a reduced latent space instead of pixel space", "It requires no GPU resources", "It only generates text, not images"],
          correct: 1,
          explanation: "Stable diffusion uses a reduced latent space (compressed, lower-dimensional representation) instead of operating directly in pixel space, making it significantly more efficient while maintaining output quality."
        },
        {
          question: "In the self-attention mechanism, what are the three types of vectors computed for each token?",
          options: ["Input, output, and hidden vectors", "Position, embedding, and token vectors", "Query, key, and value vectors", "Encoder, decoder, and attention vectors"],
          correct: 2,
          explanation: "Self-attention computes query, key, and value vectors for each token. Dot products between query and key vectors determine attention weights, which produce a weighted sum of value vectors to capture relationships between tokens."
        },
        {
          question: "Why are position embeddings necessary in transformer architectures?",
          options: ["To reduce the model's memory requirements", "To encode token positions so the model can distinguish identical words in different positions", "To convert text into numerical format", "To compress the model for deployment"],
          correct: 1,
          explanation: "Position embeddings encode each token's relative position in the sequence. Without them, the model couldn't distinguish between identical words appearing in different positions, since transformers process all tokens in parallel rather than sequentially."
        },
        {
          question: "A team wants to build a generative AI application for their business. What should be their first step according to the project lifecycle?",
          options: ["Select a foundation model", "Fine-tune a pre-trained model", "Identify and define the use case", "Deploy the model to production"],
          correct: 2,
          explanation: "The generative AI project lifecycle starts with identifying the use case. Narrowly and accurately defining project objectives is critical before selecting models or beginning any technical work."
        },
        {
          question: "Which AWS service provides real-time code suggestions and completions for developers?",
          options: ["Amazon Bedrock", "SageMaker JumpStart", "Amazon Q Developer", "Amazon Titan"],
          correct: 2,
          explanation: "Amazon Q Developer (formerly CodeWhisperer) generates real-time code suggestions and completions based on comments and existing code. It supports code generation, completion, and translation between languages."
        },
        {
          question: "What is an embedding in the context of generative AI?",
          options: ["A type of neural network layer", "A numerical vector representation capturing semantic meaning", "A data storage format for model weights", "A technique for reducing model size"],
          correct: 1,
          explanation: "An embedding is a numerical vectorized representation of an entity that captures semantic meaning. Vectors close together in vector space have more similar meaning. Embeddings enable efficient storage, indexing, and advanced searches."
        },
        {
          question: "Which statement about the relationship between generative AI, deep learning, and AI is correct?",
          options: ["Generative AI is the broadest category containing deep learning and AI", "Generative AI is a subset of deep learning, which is a subset of AI", "Deep learning is a subset of generative AI", "Generative AI and deep learning are unrelated fields"],
          correct: 1,
          explanation: "Generative AI is a subset of deep learning (uses neural networks), which is a subset of machine learning, which is a subset of AI. Generative AI specifically focuses on creating new original content."
        },
        {
          question: "What is transfer learning and why is it preferred over training from scratch?",
          options: ["Training a model on multiple GPUs simultaneously; it's faster", "Using a pre-trained model as a starting point; it requires less data and time", "Transferring data between AWS regions; it reduces latency", "Converting one model type to another; it improves accuracy"],
          correct: 1,
          explanation: "Transfer learning uses a pre-trained foundation model as a starting point. It requires less training time, smaller datasets, and lower computational costs compared to training a model from scratch."
        }
      ]
    },

    // =========================================================================
    // TASK STATEMENT 2.2 — Understand capabilities and limitations of generative AI
    // =========================================================================
    {
      id: "2.2",
      title: "Understand the capabilities and limitations of generative AI for solving business problems",
      summary: {
        keyPoints: [
          { icon: "concept", text: "Generative AI advantages: Adaptability (works across many problem domains without fine-tuning), Responsiveness (quick to build and deploy), Simplicity (easier than traditional AI approaches). It is a general-purpose technology with many uses across economic sectors." },
          { icon: "concept", text: "Key limitations: Hallucinations (confident but incorrect answers), statelessness (no memory of earlier conversations — each prompt is independent), limited complex reasoning, potential for toxic/aggressive/harmful outputs, and non-deterministic outputs (same prompt can give different responses)." },
          { icon: "concept", text: "Three human values for responsible AI: Helpfulness (useful, relevant responses), Honesty (accurate, truthful information), Harmlessness (no offensive, discriminatory, or dangerous content). Fine-tuning with human feedback increases HHH values." },
          { icon: "concept", text: "Model interpretability tradeoff: Higher interpretability often means lower performance. Intrinsic analysis works with simpler models with clear input-output relationships. Post hoc analysis works with complex models like neural networks (local interpretation for single data points, global for overall behavior).", diagram: "graph LR\n  Simple[Simple Models\nHigh Interpretability] -.-> Complex[Complex Models\nHigh Performance]\n  Simple ---|Intrinsic Analysis| IA[Clear Input-Output]\n  Complex ---|Post Hoc Analysis| PH[Local & Global]" },
          { icon: "metric", text: "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) evaluates automatically-generated summaries against human references. BLEU (Bilingual Evaluation Understudy) evaluates machine-translated text against human translations. Both compare model output to human-generated references." },
          { icon: "concept", text: "Foundation models serve as baselines for specialized development. Key architecture types: VAEs (Variational Autoencoders), GANs (Generative Adversarial Networks), and auto-regressive models. Different models excel in different areas (e.g., Stable Diffusion for images, GPT-4 for NLP)." },
          { icon: "metric", text: "Business metrics for generative AI: Output quality (relevance, accuracy, coherence, appropriateness), Efficiency (task completion rates, reduction in manual effort), Operational costs (computing, infrastructure, maintenance), and ROI. Error rates maintain accuracy and credibility." },
          { icon: "concept", text: "Customer Lifetime Value (CLTV) measures total profit from a customer over time. Optimization strategies: loyalty programs, brand loyalty, feedback collection, cross-selling, and personalized experiences. Foundation models can enhance CLTV through better customer interactions." },
          { icon: "concept", text: "Enterprise challenges with foundation models: ensuring high-quality outputs, minimizing hallucinations, integrating with existing systems (ERP, CRM), finding skilled employees, managing computational resources, and ensuring cost-effective deployment. Continuous model monitoring is essential." }
        ]
      },
      flashcards: [
        { front: "What are the three main advantages of generative AI?", back: "1) Adaptability — works across many problem domains without fine-tuning. 2) Responsiveness — quick to build and deploy. 3) Simplicity — easier to build AI applications compared to traditional approaches. It is considered a general-purpose technology." },
        { front: "Why are LLMs considered stateless?", back: "LLMs don't remember earlier conversations — each prompt is treated independently. There is no memory of previous interactions. To maintain context, the entire relevant conversation history must be included in the prompt within the context window." },
        { front: "What are the three human values (HHH) for responsible AI?", back: "Helpfulness (providing useful, relevant responses), Honesty (delivering accurate, truthful information), and Harmlessness (avoiding offensive, discriminatory, or dangerous content). Fine-tuning with human feedback helps increase these values." },
        { front: "What is the interpretability-performance tradeoff?", back: "Higher model interpretability (ability to understand predictions) often means lower model performance. Simple models are more interpretable but less powerful. Complex models like neural networks are more powerful but harder to interpret — requiring post hoc analysis techniques." },
        { front: "What is intrinsic vs. post hoc interpretability analysis?", back: "Intrinsic analysis interprets simpler models with clear input-output relationships (higher interpretability, potentially lower performance). Post hoc analysis interprets complex models like neural networks — it's model-agnostic and can provide local (single data point) or global (overall behavior) interpretation." },
        { front: "What is ROUGE and what does it measure?", back: "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is a metric for evaluating automatically-generated summaries by comparing them to human-generated reference summaries. It measures how much of the reference content is captured." },
        { front: "What is BLEU and what does it measure?", back: "BLEU (Bilingual Evaluation Understudy) is an algorithm for evaluating machine-translated text by comparing it to human reference translations. It measures the quality of machine translation output." },
        { front: "Why is evaluating LLM outputs more challenging than traditional ML?", back: "LLM outputs are non-deterministic — the same prompt can generate different responses each time. Traditional ML models are deterministic (same input always produces same output), making evaluation straightforward with fixed metrics." },
        { front: "What are the four output quality metrics for foundation models?", back: "Relevance (output addresses the prompt), Accuracy (factually correct), Coherence (logical and well-structured), and Appropriateness (suitable for the context and audience). These drive user satisfaction and adoption." },
        { front: "What is Customer Lifetime Value (CLTV)?", back: "The total profit expected from a customer over the entire business relationship. Optimization strategies include loyalty programs, brand loyalty, feedback collection, cross-selling, and personalized customer experiences." },
        { front: "What are three enterprise challenges with foundation models?", back: "1) Ensuring high-quality outputs aligned with business needs while minimizing hallucinations. 2) Integrating with existing systems (ERP, CRM). 3) Managing computational costs and finding skilled employees. Continuous monitoring is essential." },
        { front: "How can you improve an LLM's domain-specific performance?", back: "Start with prompt engineering (cheapest/fastest). If insufficient, use fine-tuning to train the model on domain-specific business data. For alignment with human preferences, apply RLHF. Each approach builds on the previous one." },
        { front: "What issues can arise in LLM outputs beyond hallucinations?", back: "Toxic language (offensive or inappropriate content), aggressive voice (combative tone), harmful completions (discriminatory content, descriptions of illegal activities), and providing detailed dangerous information inappropriately. Solutions include fine-tuning with human feedback." }
      ],
      quiz: [
        {
          question: "A company's chatbot provides a detailed but completely invented company policy when asked a question it hasn't been trained on. What limitation is this?",
          options: ["Bias", "Hallucination", "Underfitting", "Overfitting"],
          correct: 1,
          explanation: "Hallucinations occur when LLMs provide confident but incorrect answers, inventing information when the correct answer is unknown. The model generates plausible-sounding but fabricated content."
        },
        {
          question: "Which metric would you use to evaluate the quality of an automatically-generated text summary?",
          options: ["BLEU", "ROUGE", "F1 Score", "AUC-ROC"],
          correct: 1,
          explanation: "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is specifically designed for evaluating automatically-generated summaries by comparing them to human-generated reference summaries."
        },
        {
          question: "Why might a team choose a simpler, more interpretable model over a complex neural network for a loan approval system?",
          options: ["Simpler models are always more accurate", "Regulatory requirements may demand explainable decisions", "Complex models cannot process financial data", "Simpler models require more training data"],
          correct: 1,
          explanation: "The interpretability-performance tradeoff means simpler models are easier to explain. In regulated industries like finance, being able to explain why a decision was made (interpretability) may be more important than marginal performance gains."
        },
        {
          question: "A user has a long conversation with an LLM and references something mentioned 50 messages ago. The model doesn't recall it. Why?",
          options: ["The model has a bias problem", "LLMs are stateless and don't remember earlier conversations", "The model was not fine-tuned", "The model's training data was insufficient"],
          correct: 1,
          explanation: "LLMs are stateless — they don't remember earlier conversations. Each prompt is treated independently. Context from earlier in the conversation must be included in the current prompt within the context window."
        },
        {
          question: "Which metric is specifically designed for evaluating machine translation quality?",
          options: ["ROUGE", "BLEU", "Precision", "Recall"],
          correct: 1,
          explanation: "BLEU (Bilingual Evaluation Understudy) is an algorithm specifically designed for evaluating machine-translated text by comparing it to human reference translations."
        },
        {
          question: "What are the three core human values that guide responsible AI use?",
          options: ["Speed, accuracy, cost", "Helpfulness, honesty, harmlessness", "Precision, recall, F1", "Privacy, security, compliance"],
          correct: 1,
          explanation: "The three core values (HHH) are Helpfulness (useful responses), Honesty (accurate information), and Harmlessness (no offensive or dangerous content). Fine-tuning with human feedback helps align models with these values."
        },
        {
          question: "An LLM generates different responses each time the same prompt is submitted. What characteristic does this demonstrate?",
          options: ["The model is broken and needs retraining", "Non-deterministic output — a normal characteristic of LLMs", "The model is hallucinating", "The model has insufficient parameters"],
          correct: 1,
          explanation: "LLM outputs are non-deterministic by nature — the same prompt can generate different responses. This is a fundamental characteristic, not a defect, and makes evaluation more challenging compared to traditional deterministic models."
        },
        {
          question: "A business wants to measure the success of its generative AI chatbot. Which set of metrics is most comprehensive?",
          options: ["Only output accuracy", "Only operational costs", "Output quality, efficiency, operational costs, and ROI", "Only customer satisfaction scores"],
          correct: 2,
          explanation: "A comprehensive evaluation includes output quality metrics (relevance, accuracy, coherence), efficiency metrics (task completion, manual effort reduction), operational costs (computing, infrastructure), and return on investment (ROI)."
        },
        {
          question: "What is post hoc interpretability analysis and when is it used?",
          options: ["Analysis done before model training to select features", "A model-agnostic method to interpret complex models like neural networks after training", "A preprocessing technique for data cleaning", "A deployment strategy for production models"],
          correct: 1,
          explanation: "Post hoc analysis is a model-agnostic interpretability method applied to complex models like neural networks. It can provide local interpretation (single data point) or global interpretation (overall model behavior)."
        },
        {
          question: "Which foundation model architecture is best suited for image generation?",
          options: ["GPT-4", "BERT", "Stable Diffusion", "Amazon Titan"],
          correct: 2,
          explanation: "Stable Diffusion excels at image generation using diffusion processes (forward noise addition and reverse de-noising). Different foundation models excel in different domains — GPT-4 is better for natural language."
        },
        {
          question: "A company wants to increase Customer Lifetime Value (CLTV). Which strategy would a generative AI system best support?",
          options: ["Reducing server infrastructure", "Personalized customer experiences and recommendations", "Minimizing employee headcount", "Standardizing all customer interactions"],
          correct: 1,
          explanation: "Generative AI can enhance CLTV through personalized customer experiences, tailored recommendations, and responsive interactions. Other CLTV strategies include loyalty programs, cross-selling, and collecting/acting on customer feedback."
        },
        {
          question: "What is a key challenge when integrating foundation models into enterprise environments?",
          options: ["Foundation models cannot be deployed in the cloud", "Connecting with existing business systems like ERP and CRM while ensuring output quality", "Foundation models only work with unstructured data", "Enterprise environments don't support AI workloads"],
          correct: 1,
          explanation: "Integrating foundation models with existing enterprise systems (ERP, CRM, databases) while ensuring outputs are high-quality and aligned with business needs is a major challenge. Finding skilled employees and managing costs are additional challenges."
        }
      ]
    },

    // =========================================================================
    // TASK STATEMENT 2.3 — Describe AWS infrastructure and technologies for
    //                       building generative AI applications
    // =========================================================================
    {
      id: "2.3",
      title: "Describe AWS infrastructure and technologies for building generative AI applications",
      summary: {
        keyPoints: [
          { icon: "concept", text: "AWS generative AI advantages: accessibility (lower barrier to entry), efficiency (pre-trained models via transfer learning), cost-effectiveness (no need to train from scratch), speed to market, and business alignment. Most organizations use pre-trained models rather than training their own LLMs." },
          { icon: "service", text: "SageMaker JumpStart is a model hub for discovering, fine-tuning, and deploying foundation models. It provides pre-built projects, datasets, algorithms, blogs, videos, and example notebooks. Fine-tuning requires GPUs — check the pricing page before selecting infrastructure. Delete endpoints when not in use." },
          { icon: "service", text: "Amazon Bedrock is a fully managed service providing API access to multiple foundation models (AWS and third-party like Cohere, Stability AI). Features: on-demand pricing (pay per use, no time commitments), Bedrock Playgrounds for experimentation, and custom weight imports for select architectures." },
          { icon: "service", text: "Amazon Titan is AWS's own foundation model for general-purpose text and image generation. PartyRock is a playground built on Bedrock for learning and experimenting with generative AI — build apps like playlists, trivia games, and recipes." },
          { icon: "concept", text: "AWS ML Stack (bottom to top): 1) Infrastructure Layer — Regions, Availability Zones, Edge locations. 2) ML Services Layer — SageMaker and managed ML services. 3) AI Services Layer — prebuilt services, algorithms, and models (highest-level abstractions, no ML expertise needed).", diagram: "graph TD\n  L3[AI Services Layer\nPrebuilt, no ML expertise needed] --> L2[ML Services Layer\nSageMaker & managed services]\n  L2 --> L1[Infrastructure Layer\nRegions, AZs, Edge locations]\n  style L3 fill:#fff3e0\n  style L2 fill:#e3f2fd\n  style L1 fill:#e8f5e2" },
          { icon: "concept", text: "Two pricing models: Infrastructure hosting (pay for compute resources, may include license fees) vs. Token-based pricing (pay per tokens processed — characters, words, pixels; enables scalability, pay only for what you use). Token-based pricing avoids upfront infrastructure investment." },
          { icon: "concept", text: "Three-layer generative AI security model: Bottom (tools for building/training, hardware, guardrails), Middle (access to models, ML services for training/tuning), Top (applications using LLMs — dashboards, prompt engineering, RAG). Each layer has different security considerations.", diagram: "graph TD\n  Top[Top: Applications\nDashboards, RAG, Prompt Engineering] --> Mid[Middle: Model Access\nML services, training, tuning]\n  Mid --> Bot[Bottom: Infrastructure\nHardware, guardrails, tools]\n  style Top fill:#fff3e0\n  style Mid fill:#e3f2fd\n  style Bot fill:#e8f5e2" },
          { icon: "service", text: "Specialized ML hardware: AWS Inferentia (optimized for inference/prediction), AWS Trainium (optimized for training), GPU instances (P4, P5, G5, G6). ML accelerators offer better price-performance than traditional CPUs/GPUs for ML workloads." },
          { icon: "concept", text: "AWS Nitro System provides hardware-level security with specialized firmware enforcing a zero-access model — no unauthorized person can access AI data, model weights, or processed data. AWS Global Infrastructure (Regions, AZs) ensures high availability and fault tolerance." },
          { icon: "concept", text: "AI system vulnerabilities: Prompt injection (manipulating prompts for unintended behavior), Data poisoning (corrupting training data), Model inversion (extracting sensitive info from models). Mitigations: encryption, multi-factor authentication, continuous monitoring, security policies." },
          { icon: "concept", text: "Vector databases store embeddings/vectors that can be compressed, indexed, and searched efficiently. They enable generative AI applications to perform advanced semantic searches across large datasets." }
        ]
      },
      flashcards: [
        { front: "What is SageMaker JumpStart?", back: "A model hub for discovering, fine-tuning, and deploying foundation models. It provides pre-built projects, datasets, algorithms, and resources (blogs, videos, notebooks). Fine-tuning requires GPUs. Delete endpoints when not in use to control costs." },
        { front: "What is Amazon Bedrock?", back: "A fully managed AWS service providing API access to multiple foundation models (AWS-curated and third-party like Cohere, Stability AI). Features on-demand pricing (pay per use, no time commitments), Bedrock Playgrounds for experimentation, and custom weight imports." },
        { front: "What is Amazon Titan?", back: "AWS's own foundation model designed for general-purpose text and image generation. It is available through Amazon Bedrock alongside third-party models." },
        { front: "What is PartyRock?", back: "A playground built on Amazon Bedrock for learning and experimenting with generative AI. Users can build applications like playlists, trivia games, and recipes without technical expertise." },
        { front: "What are the three layers of the AWS ML Stack?", back: "1) Infrastructure Layer — Regions, Availability Zones, Edge locations. 2) ML Services Layer — SageMaker and managed ML services. 3) AI Services Layer — prebuilt services, algorithms, and models (highest abstraction, no ML expertise needed).", backDiagram: "graph TD\n  L3[AI Services Layer\nPrebuilt, no ML expertise needed] --> L2[ML Services Layer\nSageMaker & managed services]\n  L2 --> L1[Infrastructure Layer\nRegions, AZs, Edge locations]\n  style L3 fill:#fff3e0\n  style L2 fill:#e3f2fd\n  style L1 fill:#e8f5e2" },
        { front: "What are the two main pricing models for generative AI services?", back: "1) Infrastructure hosting — pay for compute resources (may include license fees), requires upfront investment. 2) Token-based pricing — pay per tokens processed (characters, words, pixels); enables scalability with no upfront commitment." },
        { front: "What is the difference between AWS Inferentia and AWS Trainium?", back: "AWS Inferentia is optimized for inference (running predictions on trained models). AWS Trainium is optimized for training ML models. Both are ML accelerators offering better price-performance than traditional CPUs/GPUs for ML workloads." },
        { front: "What GPU instance types does AWS offer for ML?", back: "P4, P5 (high-performance training and inference), G5, G6 (general-purpose ML and graphics). These are traditional GPU options alongside the specialized ML accelerators (Inferentia, Trainium)." },
        { front: "What is the AWS Nitro System?", back: "Specialized hardware and firmware that enforces security restrictions on EC2 instances. It implements a zero-access model — preventing unauthorized access to workloads, AI data, model weights, and processed data." },
        { front: "What are the three layers of the generative AI security model?", back: "Bottom: tools for building/training LLMs, hardware demands, guardrails. Middle: access to models and ML services for training/tuning. Top: applications using LLMs/FMs (dashboards, prompt engineering, RAG).", backDiagram: "graph TD\n  Top[Top: Applications\nDashboards, RAG, Prompt Engineering] --> Mid[Middle: Model Access\nML services, training, tuning]\n  Mid --> Bot[Bottom: Infrastructure\nHardware, guardrails, tools]\n  style Top fill:#fff3e0\n  style Mid fill:#e3f2fd\n  style Bot fill:#e8f5e2" },
        { front: "What are three AI system vulnerabilities?", back: "1) Prompt injection — manipulating prompts to cause unintended behavior. 2) Data poisoning — corrupting training data to degrade performance. 3) Model inversion — extracting sensitive information from trained models." },
        { front: "How does AWS ensure high availability for AI workloads?", back: "Through AWS Global Infrastructure: multiple Regions (geographic areas), Availability Zones (isolated locations within regions), and Edge locations. Managed services have high availability and fault tolerance built in." },
        { front: "What are inference parameters in Amazon Bedrock?", back: "Adjustable settings that affect how foundation models generate completions. They vary by selected model and can be experimented with in Bedrock Playgrounds to find optimal configurations for specific use cases." },
        { front: "Why do most organizations not train their own LLMs?", back: "Training LLMs from scratch requires massive investment in research, data collection, data cleaning, computational resources (GPUs), and time. Using pre-trained models via services like Bedrock and SageMaker JumpStart is far more cost-effective." },
        { front: "What is a vector database?", back: "A storage system for embeddings/vectors. Vectors can be compressed, stored, and indexed for efficient advanced semantic searches across large datasets. They are essential infrastructure for many generative AI applications." },
        { front: "What security mitigations protect AI systems?", back: "Encryption (data at rest and in transit), multi-factor authentication, continuous monitoring, security policies and standards, risk management frameworks, and the AWS Nitro System's zero-access model." }
      ],
      quiz: [
        {
          question: "A startup wants to quickly experiment with different foundation models without managing infrastructure. Which AWS service is most appropriate?",
          options: ["SageMaker JumpStart", "Amazon Bedrock", "AWS Inferentia", "Amazon EC2 with GPUs"],
          correct: 1,
          explanation: "Amazon Bedrock is a fully managed service providing API access to multiple foundation models without infrastructure management. Its Playgrounds feature allows easy experimentation, and on-demand pricing means no upfront commitment."
        },
        {
          question: "Which AWS hardware is specifically optimized for running ML inference workloads with the best price-performance?",
          options: ["AWS Trainium", "AWS Inferentia", "Amazon EC2 P5 instances", "AWS Nitro System"],
          correct: 1,
          explanation: "AWS Inferentia is specifically optimized for inference (running predictions on trained models) with better price-performance than traditional GPUs. AWS Trainium is the counterpart optimized for training."
        },
        {
          question: "A company is choosing between self-hosting an LLM and using token-based pricing through Bedrock. What is a key advantage of token-based pricing?",
          options: ["It always costs less regardless of usage", "It requires upfront hardware investment", "It enables scalability — you only pay for tokens processed with no time commitments", "It provides faster inference speeds"],
          correct: 2,
          explanation: "Token-based pricing enables scalability — you pay only for the tokens processed with no long-term commitments or upfront infrastructure investment. Self-hosting requires significant hardware, storage, and maintenance costs."
        },
        {
          question: "An attacker manipulates input prompts to make a generative AI system reveal sensitive training data. What type of vulnerability is this?",
          options: ["Data poisoning", "Model inversion", "Prompt injection", "Overfitting"],
          correct: 2,
          explanation: "Prompt injection involves manipulating prompts to cause unintended behavior in AI systems. Model inversion extracts sensitive info from models, while data poisoning corrupts training data."
        },
        {
          question: "What does the AWS Nitro System provide for AI workloads?",
          options: ["Faster model training through GPU acceleration", "A zero-access security model preventing unauthorized access to data and model weights", "Automatic model fine-tuning capabilities", "Token-based pricing for foundation models"],
          correct: 1,
          explanation: "The AWS Nitro System is specialized hardware and firmware that enforces a zero-access model — ensuring no unauthorized person can access sensitive AI data, model weights, or processed data on EC2 instances."
        },
        {
          question: "What are the three layers of the AWS ML Stack from bottom to top?",
          options: ["Data → Training → Deployment", "Infrastructure → ML Services → AI Services (prebuilt)", "Hardware → Software → Applications", "Storage → Compute → Networking"],
          correct: 1,
          explanation: "The AWS ML Stack has three layers: Infrastructure (Regions, AZs, services), ML Services (SageMaker), and AI Services (prebuilt services, algorithms, models). Higher layers require less ML expertise."
        },
        {
          question: "A team needs to fine-tune a foundation model using SageMaker JumpStart. What critical resource requirement should they verify first?",
          options: ["Available S3 storage", "GPU availability and pricing", "Number of AWS Regions", "VPC configuration"],
          correct: 1,
          explanation: "Fine-tuning with SageMaker JumpStart requires GPUs. Teams should check the SageMaker pricing page for compute costs before selecting infrastructure. Endpoints should be deleted when not in use to control costs."
        },
        {
          question: "Which AWS service allows non-technical users to build generative AI applications for learning purposes?",
          options: ["SageMaker Studio", "Amazon Bedrock API", "PartyRock", "AWS Trainium"],
          correct: 2,
          explanation: "PartyRock is a playground built on Amazon Bedrock for learning and experimenting with generative AI. Anyone can build AI apps (playlists, trivia games, recipes) without technical expertise."
        },
        {
          question: "A company needs to store and efficiently search through millions of text embeddings for a semantic search feature. What type of database should they use?",
          options: ["Relational database (RDS)", "Document database (DocumentDB)", "Vector database", "Time series database"],
          correct: 2,
          explanation: "Vector databases are specifically designed to store embeddings/vectors. They support compression, indexing, and efficient semantic searches across large datasets — essential infrastructure for generative AI applications."
        },
        {
          question: "What is Retrieval-Augmented Generation (RAG) in the context of the generative AI security model?",
          options: ["A hardware acceleration technique", "An architecture combining LLMs with external data retrieval, operating at the top layer", "A data encryption method", "A model training optimization"],
          correct: 1,
          explanation: "RAG is an architecture that combines LLMs with external data retrieval to provide more accurate, contextual responses. It operates at the top layer of the generative AI security model alongside dashboards and prompt engineering."
        },
        {
          question: "Why is transfer learning the preferred approach when building generative AI applications on AWS?",
          options: ["It always produces better models than training from scratch", "It requires no data at all", "It uses pre-trained models as starting points, requiring less data, time, and cost", "It eliminates the need for any model evaluation"],
          correct: 2,
          explanation: "Transfer learning uses pre-trained foundation models as starting points, producing accurate models with smaller datasets, less training time, and lower computational costs compared to the massive investment required to train from scratch."
        },
        {
          question: "An AI system's training data has been intentionally corrupted by a malicious actor to degrade model performance. What vulnerability is this?",
          options: ["Prompt injection", "Model inversion", "Data poisoning", "Hallucination"],
          correct: 2,
          explanation: "Data poisoning involves corrupting training data to degrade model performance. This differs from prompt injection (manipulating inputs) and model inversion (extracting sensitive information from trained models)."
        }
      ]
    }
  ]
};
