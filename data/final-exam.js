/*  ================================================================
    AWS AI Practitioner (AIF-C01) — Final Practice Exam
    65 questions · 90 minutes · Passing score 700/1000

    Domain distribution (mirrors real exam):
      Domain 1: Fundamentals of AI and ML          — 20% → 13 questions
      Domain 2: Fundamentals of Generative AI       — 24% → 16 questions
      Domain 3: Applications of Foundation Models    — 28% → 18 questions
      Domain 4: Guidelines for Responsible AI        — 14% →  9 questions
      Domain 5: Security, Compliance & Governance    — 14% →  9 questions

    Question types:
      - Single-choice: 4 options, 1 correct
      - Multiple-response: 5-6 options, 2-3 correct (marked with multiSelect: true)
    ================================================================ */

window.FINAL_EXAM = [

  /* ================================================================
     DOMAIN 1 — Fundamentals of AI and ML (13 questions)
     ================================================================ */

  {
    id: 1,
    domain: 1,
    question: "A retail company wants to group customers into segments based on purchasing behavior without any predefined categories. Which type of machine learning is most appropriate?",
    options: [
      "Supervised learning with classification",
      "Unsupervised learning with clustering",
      "Reinforcement learning",
      "Supervised learning with regression"
    ],
    correct: [1],
    explanation: "Unsupervised learning with clustering groups data points by similarity without predefined labels. Since the company has no predefined categories and wants to discover natural customer segments, clustering (e.g., k-means) is the correct approach."
  },
  {
    id: 2,
    domain: 1,
    question: "A machine learning model performs extremely well on training data but poorly on new, unseen data. What is this problem called, and how can it be mitigated?",
    options: [
      "Underfitting — add more features and increase model complexity",
      "Overfitting — use regularization, more training data, or simpler models",
      "Bias — increase the number of hidden layers",
      "Vanishing gradient — switch to a ReLU activation function"
    ],
    correct: [1],
    explanation: "High training accuracy with poor test accuracy is overfitting — the model memorized the training data instead of generalizing. Regularization (L1/L2), dropout, cross-validation, more training data, or using a simpler model all help mitigate overfitting."
  },
  {
    id: 3,
    domain: 1,
    question: "A healthcare company needs to extract text from scanned medical forms and then identify medical conditions mentioned in the text. Which combination of AWS services should they use?",
    options: [
      "Amazon Rekognition for text extraction and Amazon Comprehend Medical for entity detection",
      "Amazon Textract for text extraction and Amazon Comprehend Medical for entity detection",
      "Amazon Polly for text extraction and Amazon Lex for entity detection",
      "Amazon Translate for text extraction and Amazon Kendra for entity detection"
    ],
    correct: [1],
    explanation: "Amazon Textract extracts text from scanned documents. Amazon Comprehend Medical is specifically designed to identify medical conditions, medications, and other healthcare entities from text. Rekognition is for image/video analysis, not document text extraction."
  },
  {
    id: 4,
    domain: 1,
    question: "Which neural network architecture is specifically designed to process sequential data such as time series or natural language by maintaining a hidden state across time steps?",
    options: [
      "Convolutional Neural Network (CNN)",
      "Feedforward Neural Network (FNN)",
      "Recurrent Neural Network (RNN)",
      "Generative Adversarial Network (GAN)"
    ],
    correct: [2],
    explanation: "RNNs are designed for sequential data and maintain a hidden state that captures information from previous time steps. CNNs are designed for spatial data (images), FNNs have no memory of previous inputs, and GANs are used for generating new data."
  },
  {
    id: 5,
    domain: 1,
    question: "A data scientist is evaluating a binary classification model for fraud detection. The dataset is highly imbalanced with 99% legitimate and 1% fraudulent transactions. Which metric is LEAST useful for evaluating this model?",
    options: [
      "Accuracy",
      "Precision",
      "Recall (sensitivity)",
      "F1 score"
    ],
    correct: [0],
    explanation: "With 99% legitimate transactions, a model that predicts everything as legitimate achieves 99% accuracy — misleadingly high. Precision, recall, and F1 score are more informative for imbalanced datasets because they focus on the minority class performance."
  },
  {
    id: 6,
    domain: 1,
    question: "A company wants to build a chatbot that can understand customer intent, manage conversation flow, and generate speech responses. Which combination of AWS services addresses all three requirements?",
    options: [
      "Amazon Lex, Amazon Kendra, and Amazon Transcribe",
      "Amazon Lex, Amazon Comprehend, and Amazon Polly",
      "Amazon Connect, Amazon Personalize, and Amazon Translate",
      "Amazon Transcribe, Amazon Translate, and Amazon Rekognition"
    ],
    correct: [1],
    explanation: "Amazon Lex understands intent and manages conversation flow (NLU + dialog management). Amazon Comprehend can provide additional NLP capabilities. Amazon Polly converts text to natural-sounding speech. Together they cover understanding, flow, and speech generation."
  },
  {
    id: 7,
    domain: 1,
    question: "In the machine learning development lifecycle, what is the primary purpose of feature engineering?",
    options: [
      "Deploying models to production endpoints",
      "Transforming raw data into meaningful inputs that improve model performance",
      "Monitoring model accuracy after deployment",
      "Splitting data into training and test sets"
    ],
    correct: [1],
    explanation: "Feature engineering transforms raw data into features that better represent the underlying problem, improving model performance. It includes creating new features, combining existing ones, encoding categorical variables, and scaling numerical features."
  },
  {
    id: 8,
    domain: 1,
    question: "A logistics company wants to predict delivery times based on distance, weather, and traffic conditions. Which type of machine learning problem is this?",
    options: [
      "Classification",
      "Clustering",
      "Regression",
      "Reinforcement learning"
    ],
    correct: [2],
    explanation: "Predicting a continuous numerical value (delivery time) based on input features is a regression problem. Classification predicts categories, clustering groups data without labels, and reinforcement learning learns through trial-and-error interactions."
  },
  {
    id: 9,
    domain: 1,
    question: "Which of the following are valid reasons NOT to use an AI/ML solution? (Select TWO)",
    options: [
      "The problem requires deterministic, rule-based outcomes with no tolerance for error",
      "The company has large volumes of historical data available",
      "The cost of developing and maintaining the AI system exceeds the business value it provides",
      "The company wants to automate a complex pattern recognition task",
      "The problem involves processing unstructured data at scale"
    ],
    correct: [0, 2],
    multiSelect: true,
    explanation: "AI/ML is not appropriate when: (1) problems require deterministic, guaranteed outcomes — rule-based systems are better, or (2) the cost-benefit analysis shows the implementation cost exceeds the value. Having large data, complex patterns, and unstructured data are all good reasons TO use AI."
  },
  {
    id: 10,
    domain: 1,
    question: "A company uses Amazon SageMaker to train models. They want to automatically track experiments, compare training runs, and manage model versions. Which SageMaker capability should they use?",
    options: [
      "SageMaker Data Wrangler",
      "SageMaker MLflow",
      "SageMaker Ground Truth",
      "SageMaker Canvas"
    ],
    correct: [1],
    explanation: "SageMaker MLflow provides experiment tracking, run comparison, and model versioning — it's designed specifically for managing the ML experimentation workflow. Data Wrangler is for data preparation, Ground Truth for labeling, and Canvas for no-code ML."
  },
  {
    id: 11,
    domain: 1,
    question: "What is the primary difference between batch inference and real-time inference?",
    options: [
      "Batch inference uses GPUs while real-time inference uses CPUs",
      "Batch inference processes large datasets at once while real-time inference provides immediate predictions for individual requests",
      "Batch inference is more accurate than real-time inference",
      "Real-time inference can only handle structured data"
    ],
    correct: [1],
    explanation: "Batch inference processes large volumes of data in bulk (e.g., scoring all customers overnight), while real-time inference provides immediate, low-latency predictions for individual requests (e.g., fraud detection on a single transaction). The trade-off is latency vs. throughput."
  },
  {
    id: 12,
    domain: 1,
    question: "Which AWS service enables business analysts to build ML models using a visual, no-code interface without writing any code?",
    options: [
      "Amazon SageMaker Notebooks",
      "Amazon SageMaker Canvas",
      "Amazon SageMaker JumpStart",
      "Amazon SageMaker Pipelines"
    ],
    correct: [1],
    explanation: "SageMaker Canvas provides a visual, no-code interface for business analysts to build ML models through point-and-click. SageMaker Notebooks require coding, JumpStart provides pre-trained models for developers, and Pipelines automates ML workflows."
  },
  {
    id: 13,
    domain: 1,
    question: "A Convolutional Neural Network (CNN) uses a series of convolutional layers and pooling layers. What is the primary purpose of pooling layers?",
    options: [
      "To add new features to the data",
      "To reduce the spatial dimensions and computational cost while retaining important features",
      "To connect every neuron to every other neuron",
      "To apply the activation function to each pixel"
    ],
    correct: [1],
    explanation: "Pooling layers (e.g., max pooling, average pooling) reduce the spatial dimensions of the feature maps, decreasing computational cost and parameters while retaining the most important features. This also helps prevent overfitting."
  },

  /* ================================================================
     DOMAIN 2 — Fundamentals of Generative AI (16 questions)
     ================================================================ */

  {
    id: 14,
    domain: 2,
    question: "A company wants to quickly build and prototype a generative AI application without managing infrastructure. Which AWS service provides a fully managed API to access multiple foundation models from various providers?",
    options: [
      "Amazon SageMaker JumpStart",
      "Amazon Bedrock",
      "Amazon SageMaker HyperPod",
      "Amazon EC2 with custom model deployment"
    ],
    correct: [1],
    explanation: "Amazon Bedrock is a fully managed service that provides API access to foundation models from multiple providers (Anthropic, Meta, Cohere, Stability AI, Amazon Titan, etc.) without managing infrastructure. JumpStart requires more ML expertise, HyperPod is for training, and EC2 requires full infrastructure management."
  },
  {
    id: 15,
    domain: 2,
    question: "What is the purpose of tokenization in large language models?",
    options: [
      "To encrypt the input text for security",
      "To break text into smaller units (tokens) that the model can process numerically",
      "To translate text from one language to another",
      "To remove stop words and punctuation from the input"
    ],
    correct: [1],
    explanation: "Tokenization breaks input text into smaller units (tokens) — which can be words, subwords, or characters — that are then converted into numerical representations the model can process. It is a fundamental preprocessing step, not encryption or translation."
  },
  {
    id: 16,
    domain: 2,
    question: "A legal team wants to use generative AI to draft contracts but is concerned about the AI generating clauses that sound authoritative but are legally invalid. Which limitation of generative AI does this describe?",
    options: [
      "Toxicity",
      "Hallucination",
      "Intellectual property infringement",
      "Data privacy leakage"
    ],
    correct: [1],
    explanation: "Hallucination occurs when a generative AI model produces confident, plausible-sounding content that is factually incorrect or fabricated. Generating legally invalid clauses that appear authoritative is a textbook example of hallucination."
  },
  {
    id: 17,
    domain: 2,
    question: "Which of the following describes how transformers differ from traditional RNNs in processing text?",
    options: [
      "Transformers process tokens sequentially one at a time, while RNNs process all tokens simultaneously",
      "Transformers use self-attention mechanisms to process all tokens in parallel, while RNNs process sequentially",
      "Transformers can only handle fixed-length inputs, while RNNs handle variable-length inputs",
      "Transformers require labeled training data, while RNNs can be trained without labels"
    ],
    correct: [1],
    explanation: "Transformers use self-attention mechanisms to weigh the importance of all tokens relative to each other simultaneously (in parallel), enabling much faster training and better capture of long-range dependencies. RNNs process tokens one at a time sequentially, which creates bottlenecks."
  },
  {
    id: 18,
    domain: 2,
    question: "An e-commerce company wants to use Amazon Q to help employees find information across internal wikis, Confluence, and SharePoint. What type of AI application is this?",
    options: [
      "Code generation",
      "Image generation",
      "Enterprise search and knowledge retrieval",
      "Fraud detection"
    ],
    correct: [2],
    explanation: "Amazon Q Business provides enterprise search and knowledge retrieval by connecting to various data sources (wikis, Confluence, SharePoint, etc.) and enabling employees to ask questions and get answers based on internal company knowledge."
  },
  {
    id: 19,
    domain: 2,
    question: "What is the relationship between tokens and cost when using foundation model APIs like Amazon Bedrock?",
    options: [
      "Cost is fixed regardless of the number of tokens processed",
      "Only input tokens are charged; output tokens are free",
      "Both input and output tokens contribute to cost — more tokens mean higher cost",
      "Cost is based only on the number of API calls, not tokens"
    ],
    correct: [2],
    explanation: "Foundation model APIs use token-based pricing where both input tokens and output tokens contribute to cost. More tokens (longer prompts and responses) result in higher costs. Input and output tokens may have different per-token rates."
  },
  {
    id: 20,
    domain: 2,
    question: "A company is evaluating whether to use Amazon Bedrock with on-demand pricing or Provisioned Throughput. In which scenario is Provisioned Throughput most cost-effective?",
    options: [
      "Occasional, low-volume experimentation and prototyping",
      "Consistent, high-volume production workloads with predictable traffic",
      "One-time batch processing of a small dataset",
      "Development environments used a few hours per day"
    ],
    correct: [1],
    explanation: "Provisioned Throughput is cost-effective for consistent, high-volume workloads because you reserve capacity at a lower per-token rate. On-demand is better for variable, unpredictable, or low-volume usage where you pay per token without commitment."
  },
  {
    id: 21,
    domain: 2,
    question: "What is chunking in the context of generative AI and retrieval-augmented generation?",
    options: [
      "Splitting the model's parameters into smaller segments for distributed training",
      "Breaking large documents into smaller, meaningful segments for storage in a vector database",
      "Dividing the GPU memory into equal partitions",
      "Compressing model weights to reduce file size"
    ],
    correct: [1],
    explanation: "Chunking breaks large documents into smaller, semantically meaningful segments that can be individually embedded and stored in a vector database. When a query is made, the most relevant chunks are retrieved and provided as context to the model, improving response accuracy."
  },
  {
    id: 22,
    domain: 2,
    question: "Which of the following are capabilities of generative AI? (Select TWO)",
    options: [
      "Generating novel images from text descriptions",
      "Guaranteeing 100% factual accuracy in all outputs",
      "Summarizing and translating text across languages",
      "Replacing the need for all human oversight in content creation",
      "Performing deterministic mathematical calculations with no errors"
    ],
    correct: [0, 2],
    multiSelect: true,
    explanation: "Generative AI can generate images from text descriptions and summarize/translate text. However, it cannot guarantee factual accuracy (hallucinations are inherent), cannot replace all human oversight, and is not designed for deterministic calculations."
  },
  {
    id: 23,
    domain: 2,
    question: "The AWS Cloud Adoption Framework for AI (CAF-AI) includes multiple perspectives. Which perspective focuses on organizational change management, skills development, and workforce readiness for AI adoption?",
    options: [
      "Business perspective",
      "People perspective",
      "Platform perspective",
      "Security perspective"
    ],
    correct: [1],
    explanation: "The People perspective of AWS CAF-AI focuses on organizational change management, upskilling the workforce, defining new AI-related roles, and ensuring teams have the skills needed to adopt and manage AI effectively."
  },
  {
    id: 24,
    domain: 2,
    question: "A startup wants to build a generative AI app without any coding. Which AWS tool allows non-technical users to experiment with foundation models in a playground environment?",
    options: [
      "Amazon SageMaker Studio",
      "PartyRock",
      "AWS App Studio",
      "Amazon SageMaker Canvas"
    ],
    correct: [1],
    explanation: "PartyRock is a no-code playground powered by Amazon Bedrock that lets anyone experiment with generative AI by building apps through a simple interface without any coding. SageMaker Studio and Canvas are for more technical ML workflows."
  },
  {
    id: 25,
    domain: 2,
    question: "What is an embedding in the context of generative AI?",
    options: [
      "A technique for compressing large models into smaller ones",
      "A numerical vector representation of data (text, images) that captures semantic meaning in a continuous space",
      "A method for encrypting sensitive data before feeding it to a model",
      "A hyperparameter that controls the randomness of model outputs"
    ],
    correct: [1],
    explanation: "An embedding is a dense numerical vector that represents data (words, sentences, images) in a continuous vector space where semantically similar items are close together. Embeddings enable similarity search, are stored in vector databases, and power RAG systems."
  },
  {
    id: 26,
    domain: 2,
    question: "A media company is concerned about generative AI producing content that closely resembles copyrighted material from its training data. Which risk category does this fall under?",
    options: [
      "Hallucination",
      "Toxicity",
      "Intellectual property infringement",
      "Prompt injection"
    ],
    correct: [2],
    explanation: "Intellectual property infringement is the risk that generative AI models trained on copyrighted data may produce outputs that closely resemble or reproduce protected content. This is a significant legal concern, as seen in cases like Getty Images vs. Stability AI."
  },
  {
    id: 27,
    domain: 2,
    question: "Which of the following best describes a diffusion model?",
    options: [
      "A model that generates text by predicting the next token in a sequence",
      "A model that learns to generate data by gradually removing noise from a random starting point",
      "A model that uses a generator and discriminator network competing against each other",
      "A model that processes sequential data using recurrent connections"
    ],
    correct: [1],
    explanation: "Diffusion models generate data by learning to reverse a noise-addition process — starting from random noise and gradually denoising it to produce coherent outputs (images, audio). This is different from autoregressive models (next token) and GANs (generator/discriminator)."
  },
  {
    id: 28,
    domain: 2,
    question: "Amazon Bedrock Knowledge Bases enable which capability when integrated with a foundation model?",
    options: [
      "Fine-tuning the model on custom data",
      "Retrieval-Augmented Generation (RAG) using company-specific data sources",
      "Training a new foundation model from scratch",
      "Converting text to speech for voice applications"
    ],
    correct: [1],
    explanation: "Amazon Bedrock Knowledge Bases enable RAG by connecting foundation models to company data sources. Documents are chunked, embedded, and stored in a vector database. At query time, relevant information is retrieved and provided as context to the model for more accurate, grounded responses."
  },
  {
    id: 29,
    domain: 2,
    question: "A company is measuring the business impact of their generative AI customer service chatbot. Which metrics are most relevant for evaluating business value? (Select TWO)",
    options: [
      "BLEU score of the model's responses",
      "Reduction in average customer service handling time",
      "Number of GPU hours used for inference",
      "Customer satisfaction (CSAT) score changes after deployment",
      "Number of model parameters"
    ],
    correct: [1, 3],
    multiSelect: true,
    explanation: "Business metrics measure real-world impact: reduction in handling time (productivity/cost savings) and CSAT score changes (customer experience quality). BLEU score is a technical metric, GPU hours are infrastructure costs, and parameter count is a model characteristic — none directly measure business value."
  },

  /* ================================================================
     DOMAIN 3 — Applications of Foundation Models (18 questions)
     ================================================================ */

  {
    id: 30,
    domain: 3,
    question: "A company wants to customize a foundation model's behavior using examples within the prompt, without modifying the model's weights. Which technique should they use?",
    options: [
      "Fine-tuning with LoRA",
      "Continuous pre-training",
      "Few-shot prompting (in-context learning)",
      "Reinforcement Learning from Human Feedback"
    ],
    correct: [2],
    explanation: "Few-shot prompting provides examples within the prompt to guide model behavior without changing model weights. This is a form of in-context learning. Fine-tuning and continuous pre-training modify weights, and RLHF is a training technique, not a prompting technique."
  },
  {
    id: 31,
    domain: 3,
    question: "When selecting a foundation model for a multilingual customer support application, which factors are MOST important to evaluate? (Select TWO)",
    options: [
      "The number of model parameters",
      "The model's multilingual support and language coverage",
      "Whether the model was trained using reinforcement learning",
      "Response latency and throughput for real-time conversations",
      "The model's ability to generate images"
    ],
    correct: [1, 3],
    multiSelect: true,
    explanation: "For multilingual customer support: language coverage ensures the model supports all required languages, and low latency/high throughput is critical for real-time conversations. Parameter count doesn't directly indicate language support, training method is less relevant, and image generation is not needed."
  },
  {
    id: 32,
    domain: 3,
    question: "A developer sets the temperature parameter of a foundation model to 0.1. What effect does this have on the model's output?",
    options: [
      "The model produces more creative and diverse responses",
      "The model produces more deterministic and focused responses",
      "The model generates longer responses",
      "The model ignores the system prompt"
    ],
    correct: [1],
    explanation: "Low temperature (close to 0) makes the model more deterministic — it strongly favors the highest-probability tokens, producing focused, consistent outputs. High temperature increases randomness and creativity. Temperature does not affect response length or prompt handling."
  },
  {
    id: 33,
    domain: 3,
    question: "A financial services company has thousands of internal policy documents and wants their AI assistant to provide accurate answers grounded in these documents. Which approach is most appropriate?",
    options: [
      "Fine-tune a foundation model on all policy documents",
      "Use prompt engineering with chain-of-thought reasoning",
      "Implement Retrieval-Augmented Generation (RAG) with a vector database",
      "Train a new foundation model from scratch on the policy documents"
    ],
    correct: [2],
    explanation: "RAG is ideal for grounding responses in specific, frequently updated document collections. It retrieves relevant document chunks at query time and provides them as context. Fine-tuning teaches style/format but doesn't reliably ground factual retrieval. Training from scratch is prohibitively expensive."
  },
  {
    id: 34,
    domain: 3,
    question: "Which AWS services can be used as vector databases for storing embeddings in a RAG architecture? (Select TWO)",
    options: [
      "Amazon DynamoDB",
      "Amazon OpenSearch Service",
      "Amazon S3",
      "Amazon Aurora (with pgvector)",
      "Amazon Kinesis"
    ],
    correct: [1, 3],
    multiSelect: true,
    explanation: "Amazon OpenSearch Service supports vector search natively, and Amazon Aurora PostgreSQL supports vector storage via the pgvector extension. Both can serve as vector databases for RAG. DynamoDB is a key-value store, S3 is object storage, and Kinesis is for streaming data."
  },
  {
    id: 35,
    domain: 3,
    question: "What is the primary difference between fine-tuning and continuous pre-training of a foundation model?",
    options: [
      "Fine-tuning uses labeled examples for specific tasks while continuous pre-training extends the model's general knowledge with new unlabeled data",
      "Fine-tuning is free while continuous pre-training is expensive",
      "Continuous pre-training changes the model architecture while fine-tuning does not",
      "Fine-tuning can only be done once while continuous pre-training can be repeated"
    ],
    correct: [0],
    explanation: "Fine-tuning uses labeled, task-specific data to adapt a model for particular tasks (e.g., instruction-following, classification). Continuous pre-training extends the model's general knowledge by training on additional unlabeled domain data without changing the architecture."
  },
  {
    id: 36,
    domain: 3,
    question: "A developer is using chain-of-thought prompting. What does this technique involve?",
    options: [
      "Providing multiple unrelated examples in the prompt",
      "Instructing the model to break down its reasoning into intermediate steps before giving a final answer",
      "Chaining multiple API calls together sequentially",
      "Using a series of negative prompts to constrain output"
    ],
    correct: [1],
    explanation: "Chain-of-thought prompting instructs the model to show its reasoning process step by step before arriving at a final answer. This improves performance on complex reasoning tasks (math, logic, multi-step problems) by making the reasoning explicit."
  },
  {
    id: 37,
    domain: 3,
    question: "A company fine-tuned a foundation model for medical Q&A. After fine-tuning, the model answers medical questions well but can no longer perform basic tasks like summarization that it could do before. What problem has occurred?",
    options: [
      "Data poisoning",
      "Catastrophic forgetting",
      "Hallucination",
      "Prompt injection"
    ],
    correct: [1],
    explanation: "Catastrophic forgetting occurs when fine-tuning causes a model to lose previously learned capabilities. The model 'forgot' how to summarize while learning medical Q&A. Parameter-efficient fine-tuning methods (LoRA, PEFT) help mitigate this by only modifying a small subset of parameters."
  },
  {
    id: 38,
    domain: 3,
    question: "What is the purpose of a negative prompt in generative AI?",
    options: [
      "To make the model generate incorrect responses for testing",
      "To specify elements or characteristics that should be excluded from the output",
      "To reduce the token count of the response",
      "To train the model on examples of what not to do"
    ],
    correct: [1],
    explanation: "A negative prompt tells the model what to avoid in its output — e.g., 'do not include technical jargon' or (in image generation) 'no blur, no watermark'. It's a prompt engineering technique for constraining output, not a training mechanism."
  },
  {
    id: 39,
    domain: 3,
    question: "Which foundation model evaluation metric measures the overlap between generated text and reference text based on n-gram precision, commonly used for machine translation?",
    options: [
      "ROUGE",
      "BLEU",
      "BERTScore",
      "F1 Score"
    ],
    correct: [1],
    explanation: "BLEU (Bilingual Evaluation Understudy) measures n-gram precision between generated and reference text, originally designed for machine translation evaluation. ROUGE focuses on recall (used for summarization), BERTScore uses contextual embeddings, and F1 is a classification metric."
  },
  {
    id: 40,
    domain: 3,
    question: "A developer needs to evaluate the quality of AI-generated text summaries against reference summaries. Which metric is most appropriate?",
    options: [
      "BLEU",
      "ROUGE",
      "Accuracy",
      "Mean Squared Error"
    ],
    correct: [1],
    explanation: "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is specifically designed for evaluating text summarization by measuring the recall of n-grams between generated and reference summaries. BLEU is for translation, and accuracy/MSE are for classification/regression."
  },
  {
    id: 41,
    domain: 3,
    question: "What is prompt hijacking?",
    options: [
      "When a user provides too many examples in a few-shot prompt",
      "When an attacker crafts input that causes the model to ignore its original instructions and follow new ones",
      "When the model generates the same response regardless of the prompt",
      "When the temperature is set too high causing random outputs"
    ],
    correct: [1],
    explanation: "Prompt hijacking (a form of prompt injection) occurs when an attacker crafts malicious input that overrides the model's system instructions, causing it to follow the attacker's instructions instead. This can lead to data leakage, harmful outputs, or unauthorized behavior."
  },
  {
    id: 42,
    domain: 3,
    question: "A company is deciding between RAG and fine-tuning to improve their foundation model's responses for a customer support use case. Their product catalog changes weekly. Which approach is better and why?",
    options: [
      "Fine-tuning, because it permanently stores product information in the model weights",
      "RAG, because it can retrieve up-to-date information from external sources without retraining",
      "Continuous pre-training, because it updates the model's knowledge base automatically",
      "Prompt engineering alone, because the product catalog is small enough to fit in the context window"
    ],
    correct: [1],
    explanation: "RAG is ideal for frequently changing data because it retrieves current information from external sources at query time. Fine-tuning 'bakes in' knowledge that becomes stale. Continuous pre-training requires expensive retraining. The catalog likely doesn't fit in a single prompt."
  },
  {
    id: 43,
    domain: 3,
    question: "What is LoRA (Low-Rank Adaptation) and why is it used?",
    options: [
      "A technique for increasing the size of a foundation model to improve accuracy",
      "A parameter-efficient fine-tuning method that adds small trainable matrices to frozen model layers, reducing compute and memory costs",
      "A data augmentation technique that generates synthetic training data",
      "A prompt engineering method that chains multiple prompts together"
    ],
    correct: [1],
    explanation: "LoRA adds small, low-rank trainable matrices to the frozen pre-trained model layers. Only these small matrices are trained, drastically reducing the number of trainable parameters, memory requirements, and compute costs while achieving performance close to full fine-tuning."
  },
  {
    id: 44,
    domain: 3,
    question: "In a RAG architecture, what is the role of the vector database?",
    options: [
      "To train the foundation model on new data",
      "To store document embeddings and enable similarity search for retrieving relevant context",
      "To cache API responses for faster inference",
      "To monitor model performance and detect drift"
    ],
    correct: [1],
    explanation: "In RAG, the vector database stores document chunk embeddings and enables semantic similarity search. When a query comes in, it's embedded and compared against stored vectors to find the most relevant document chunks, which are then provided as context to the foundation model."
  },
  {
    id: 45,
    domain: 3,
    question: "A developer wants the model to reason through a complex math problem. They write: 'Solve step by step: If a store has 150 items and sells 30% on Monday, 20% of the remainder on Tuesday, how many are left?' Which prompting technique is this?",
    options: [
      "Zero-shot prompting",
      "Few-shot prompting",
      "Chain-of-thought prompting",
      "Self-refine prompting"
    ],
    correct: [2],
    explanation: "By instructing the model to 'solve step by step,' the developer is using chain-of-thought prompting. This technique explicitly asks the model to break reasoning into intermediate steps, which significantly improves accuracy on math and logic problems."
  },
  {
    id: 46,
    domain: 3,
    question: "Which of the following best describes the cost tradeoff between pre-training, fine-tuning, and in-context learning for customizing foundation models?",
    options: [
      "Pre-training is cheapest, fine-tuning is moderate, in-context learning is most expensive",
      "All three approaches have roughly the same cost",
      "Pre-training is most expensive, fine-tuning is moderate, in-context learning (prompting) is cheapest",
      "Fine-tuning is most expensive because it requires the most data"
    ],
    correct: [2],
    explanation: "Pre-training from scratch is extremely expensive (millions of dollars, massive datasets, weeks of compute). Fine-tuning is moderate (adapts existing model with smaller datasets). In-context learning/prompting is cheapest (no training required, just craft better prompts)."
  },
  {
    id: 47,
    domain: 3,
    question: "What is prompt jailbreaking?",
    options: [
      "Optimizing prompts for better model performance",
      "Crafting prompts that attempt to bypass the model's safety guardrails and content policies",
      "Using encrypted prompts for secure communication",
      "Testing the model's response time under heavy load"
    ],
    correct: [1],
    explanation: "Prompt jailbreaking attempts to bypass a model's built-in safety restrictions and content policies through carefully crafted prompts. Attackers try to make the model produce harmful, biased, or restricted content that it was designed to refuse."
  },

  /* ================================================================
     DOMAIN 4 — Guidelines for Responsible AI (9 questions)
     ================================================================ */

  {
    id: 48,
    domain: 4,
    question: "A company's hiring AI consistently scores male candidates higher than equally qualified female candidates. Which dimension of responsible AI has been violated?",
    options: [
      "Robustness",
      "Fairness",
      "Transparency",
      "Privacy"
    ],
    correct: [1],
    explanation: "Fairness ensures equitable treatment regardless of demographics like gender. A model that systematically favors one gender over another with equal qualifications exhibits bias and violates the fairness principle of responsible AI."
  },
  {
    id: 49,
    domain: 4,
    question: "Amazon SageMaker Clarify can detect bias at which stages? (Select TWO)",
    options: [
      "During data center provisioning",
      "In the training dataset before model training (pre-training bias)",
      "During VPC network configuration",
      "In the trained model's predictions (post-training bias)",
      "During DNS resolution"
    ],
    correct: [1, 3],
    multiSelect: true,
    explanation: "SageMaker Clarify detects bias at two key stages: pre-training bias (analyzing the dataset for imbalances like class imbalance, label imbalance, demographic disparity) and post-training bias (analyzing model predictions for metrics like DPIP, recall difference, treatment equality)."
  },
  {
    id: 50,
    domain: 4,
    question: "A company wants to prevent their customer-facing AI chatbot from generating hateful content, discussing competitors, and exposing any PII in responses. Which AWS service provides all these safeguards?",
    options: [
      "Amazon SageMaker Clarify",
      "AWS WAF (Web Application Firewall)",
      "Guardrails for Amazon Bedrock",
      "Amazon Macie"
    ],
    correct: [2],
    explanation: "Guardrails for Amazon Bedrock provides content filters (hate, insults, sexual, violence), topic restrictions (block competitor discussions via natural language descriptions), and PII detection/redaction — covering all three requirements in a single service."
  },
  {
    id: 51,
    domain: 4,
    question: "Which metric in SageMaker Clarify measures whether a trained model predicts positive outcomes at different rates for different demographic groups?",
    options: [
      "Class Imbalance",
      "Difference in Positive Proportions in Predictions (DPIP)",
      "Demographic Disparity",
      "Label Imbalance"
    ],
    correct: [1],
    explanation: "DPIP (Difference in Positive Proportions in Predictions) is a post-training metric that measures whether the model predicts positive outcomes at different rates for different groups. Class Imbalance, Demographic Disparity, and Label Imbalance are pre-training (dataset) metrics."
  },
  {
    id: 52,
    domain: 4,
    question: "When selecting a model, a company should consider environmental sustainability. Which practice aligns with this principle?",
    options: [
      "Always use the largest available model for maximum accuracy",
      "Evaluate the carbon footprint and energy consumption alongside performance requirements",
      "Deploy models in every available AWS region for redundancy",
      "Run training jobs 24/7 to maximize GPU utilization"
    ],
    correct: [1],
    explanation: "Responsible AI includes environmental considerations — evaluating carbon footprint and energy consumption when selecting models. Larger models consume more resources. Organizations should balance performance needs against sustainability goals rather than defaulting to the largest model."
  },
  {
    id: 53,
    domain: 4,
    question: "A user asks an AI chatbot 'What was the ruling in Smith v. Anderson (2019)?' and receives a detailed, confident response citing specific legal precedents. However, the case does not exist. What is this an example of?",
    options: [
      "Prompt injection attack",
      "Model hallucination",
      "Data poisoning",
      "Adversarial input"
    ],
    correct: [1],
    explanation: "Hallucination occurs when the model generates confident, detailed responses about things that don't exist. The model fabricated a non-existent legal case with convincing details — a well-documented risk, as demonstrated by the real-world case of lawyers who submitted AI-generated fake citations to court."
  },
  {
    id: 54,
    domain: 4,
    question: "What is the difference between SageMaker Clarify's pre-training bias metrics and post-training bias metrics?",
    options: [
      "Pre-training metrics analyze the dataset for imbalances; post-training metrics analyze the model's predictions for unfair patterns",
      "Pre-training metrics are more accurate than post-training metrics",
      "Post-training metrics can only be used with classification models",
      "Pre-training metrics require labeled data while post-training metrics do not"
    ],
    correct: [0],
    explanation: "Pre-training metrics (Class Imbalance, Label Imbalance, Demographic Disparity) analyze the dataset before training to catch data-level biases. Post-training metrics (DPIP, Specificity, Recall Difference, Treatment Equality) analyze the trained model's predictions to detect bias in how the model treats different groups."
  },
  {
    id: 55,
    domain: 4,
    question: "Which of the following are key characteristics of a responsible AI dataset? (Select TWO)",
    options: [
      "Data should be collected from a single source for consistency",
      "Data should be inclusive and representative of diverse demographic groups",
      "Data should include as many features as possible regardless of relevance",
      "Data should have balanced class distribution to prevent demographic bias",
      "Data should always be publicly available"
    ],
    correct: [1, 3],
    multiSelect: true,
    explanation: "Responsible datasets must be inclusive and representative of diverse groups (preventing bias against underrepresented populations) and have balanced class distribution (preventing the model from favoring overrepresented classes). Single-source, feature bloat, and public availability are not requirements."
  },
  {
    id: 56,
    domain: 4,
    question: "A model correctly predicts loan approvals 90% of the time for group A but only 65% for group B. Which bias metric captures this?",
    options: [
      "DPIP",
      "Treatment Equality",
      "Accuracy Difference",
      "Label Imbalance"
    ],
    correct: [2],
    explanation: "Accuracy Difference measures the gap in prediction accuracy between groups. A 90% vs. 65% accuracy gap directly indicates that the model performs significantly better for group A than group B, suggesting unfair bias. DPIP measures positive prediction rates, not overall accuracy."
  },

  /* ================================================================
     DOMAIN 5 — Security, Compliance & Governance (9 questions)
     ================================================================ */

  {
    id: 57,
    domain: 5,
    question: "Under the AWS Shared Responsibility Model, a company uses Amazon SageMaker to train ML models on sensitive healthcare data. Which security task is the CUSTOMER's responsibility?",
    options: [
      "Patching the underlying SageMaker compute instances' operating system",
      "Encrypting training data stored in S3 using AWS KMS",
      "Physically securing the data center where SageMaker runs",
      "Maintaining the SageMaker API service availability"
    ],
    correct: [1],
    explanation: "Customers are responsible for encrypting their data (including choosing and managing KMS keys), configuring access controls, and protecting their workloads. AWS handles physical security, service availability, and infrastructure patching for managed services like SageMaker."
  },
  {
    id: 58,
    domain: 5,
    question: "A company needs to comply with the EU AI Act. Their AI system ranks job applicants for hiring decisions. How is this system classified under the regulation?",
    options: [
      "Unacceptable risk — must be banned",
      "High-risk — requires risk management, data governance, and compliance documentation",
      "Low-risk — only transparency requirements apply",
      "Unregulated — no specific requirements"
    ],
    correct: [1],
    explanation: "The EU AI Act classifies AI systems that rank job applicants as high-risk. This requires implementing risk management systems, data governance measures, and maintaining compliance documentation. It's not banned (like social scoring) but is regulated."
  },
  {
    id: 59,
    domain: 5,
    question: "Which AWS service automatically collects compliance evidence, maps it to frameworks like SOC 2 and generative AI best practices, and produces audit-ready assessment reports?",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "AWS Audit Manager",
      "Amazon Inspector"
    ],
    correct: [2],
    explanation: "AWS Audit Manager maps compliance requirements to AWS usage data, automatically collects evidence, and produces assessment reports. It includes built-in frameworks for SOC 2 and generative AI best practices. CloudTrail logs API calls, Config tracks resource configurations, and Inspector assesses vulnerabilities."
  },
  {
    id: 60,
    domain: 5,
    question: "A company wants to enforce fine-grained access control (column-level and row-level) on their data lake stored in S3, integrated with their Glue Data Catalog. Which service should they use?",
    options: [
      "S3 bucket policies",
      "IAM policies with S3 resource conditions",
      "AWS Lake Formation",
      "Amazon Macie"
    ],
    correct: [2],
    explanation: "AWS Lake Formation provides fine-grained access control at column, row, and cell levels for S3 data lakes. It integrates with Glue Data Catalog for permissions enforcement and works with Athena, Glue, EMR, and Redshift. S3 bucket policies and IAM don't support column/row-level controls."
  },
  {
    id: 61,
    domain: 5,
    question: "An attacker repeatedly queries a deployed ML model with carefully crafted inputs to reconstruct the training data. What type of attack is this?",
    options: [
      "Data poisoning",
      "Prompt injection",
      "Model inversion",
      "Adversarial input"
    ],
    correct: [2],
    explanation: "Model inversion attacks extract information about training data by analyzing model outputs across many queries. The attacker exploits the model's responses to reconstruct sensitive data it was trained on. Mitigation includes limiting model access and rate-limiting inference requests."
  },
  {
    id: 62,
    domain: 5,
    question: "In the NIST AI Risk Management Framework, what are the four core functions?",
    options: [
      "Plan, Build, Deploy, Monitor",
      "Govern, Map, Measure, Manage",
      "Identify, Protect, Detect, Respond",
      "Assess, Design, Implement, Evaluate"
    ],
    correct: [1],
    explanation: "The NIST AI RMF's four core functions are Govern (establishing AI governance), Map (identifying AI risks in context), Measure (analyzing and quantifying risks), and Manage (prioritizing and responding to risks). It is a voluntary framework for trustworthy AI."
  },
  {
    id: 63,
    domain: 5,
    question: "A company must retain ML training data for regulatory compliance for 7 years but wants to minimize storage costs. Which S3 strategy should they implement?",
    options: [
      "Store all data in S3 Standard for the entire 7 years",
      "Delete data after model training is complete",
      "Use S3 lifecycle rules to transition data from Standard to Glacier, then auto-delete after 7 years",
      "Store data in S3 One Zone-IA for the entire duration"
    ],
    correct: [2],
    explanation: "S3 lifecycle rules automate storage class transitions — moving data from Standard (for active use) to cheaper tiers like Glacier Deep Archive (for long-term retention), with automatic deletion after the compliance period. This balances regulatory retention requirements with cost optimization."
  },
  {
    id: 64,
    domain: 5,
    question: "Which AWS service provides conformance packs with pre-built rules specifically for 'Operational best practices for AI/ML' and 'Security best practices for SageMaker'?",
    options: [
      "AWS Trusted Advisor",
      "AWS Config",
      "Amazon Inspector",
      "AWS Audit Manager"
    ],
    correct: [1],
    explanation: "AWS Config offers conformance packs that bundle compliance rules and remediation actions. Specifically, it includes packs for 'Operational best practices for AI/ML' and 'Security best practices for SageMaker,' enabling automated compliance evaluation of AI/ML resources."
  },
  {
    id: 65,
    domain: 5,
    question: "In the Generative AI Security Scoping Matrix, a company using Amazon Bedrock with RAG to build a custom AI assistant falls under which scope?",
    options: [
      "Scope 1 — consuming a third-party consumer app",
      "Scope 2 — consuming a third-party enterprise app",
      "Scope 4 — using pre-trained models with customization",
      "Scope 5 — fine-tuning models on SageMaker JumpStart"
    ],
    correct: [2],
    explanation: "Scope 4 involves using pre-trained models (Bedrock) with enhancements like RAG. The company isn't just consuming an app (Scopes 1-2) or fine-tuning models (Scope 5) — they're building a custom solution on top of pre-trained models with their own data retrieval pipeline."
  }
];
