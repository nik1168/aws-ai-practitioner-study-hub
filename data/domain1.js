window.DOMAINS = window.DOMAINS || {};
window.DOMAINS["domain1"] = {
  title: "Fundamentals of AI and ML",
  taskStatements: [
    // =========================================================================
    // TASK STATEMENT 1.1 — Explain basic AI concepts and terminologies
    // =========================================================================
    {
      id: "1.1",
      title: "Explain basic AI concepts and terminologies",
      summary: {
        keyPoints: [
          { icon: "definition", text: "Artificial Intelligence (AI) is the field of computer science dedicated to solving cognitive problems commonly associated with human intelligence, such as learning, creation, and image recognition. The goal is to create self-learning systems that derive meaning from data.", diagram: "graph TD\n  AI[Artificial Intelligence] --> ML[Machine Learning]\n  ML --> DL[Deep Learning]\n  DL --> GenAI[Generative AI]" },
          { icon: "definition", text: "Machine Learning (ML) is a branch of AI that focuses on using data and algorithms to imitate the way humans learn. ML algorithms process large quantities of historical data to identify patterns and make predictions without explicit instructions." },
          { icon: "definition", text: "Deep Learning is a type of ML that uses neural networks (layers of interconnected nodes) inspired by the human brain. It excels at tasks like image classification and NLP where complex relationships between data objects must be identified." },
          { icon: "concept", text: "ML data types include: Structured (rows/columns, CSV, SQL — stored in RDS/Redshift), Semi-structured (JSON, key-value — stored in DynamoDB/DocumentDB), Unstructured (images, video, text — stored in S3), and Time Series (timestamped sequential data for trend prediction)." },
          { icon: "service", text: "Amazon S3 is the primary source for ML training data because it can store any data type, is low cost, and has virtually unlimited storage capacity. Data from RDS, Redshift, and DynamoDB is typically exported to S3 for training." },
          { icon: "concept", text: "Model training uses algorithms to find correlations between input features and expected outputs. Parameters (like slope and intercept in linear regression) are adjusted iteratively until the model reliably produces accurate outputs. The trained model then makes inferences on new data." },
          { icon: "concept", text: "Supervised learning uses pre-labeled training data (input + expected output). Unsupervised learning finds patterns in unlabeled data (clustering, anomaly detection). Reinforcement learning uses an agent that learns through trial and error with rewards for goal-directed actions.", diagram: "graph LR\n  SL[Supervised Learning] ---|Labeled Data| P1[Classification & Regression]\n  UL[Unsupervised Learning] ---|Unlabeled Data| P2[Clustering & Anomaly Detection]\n  RL[Reinforcement Learning] ---|Rewards| P3[Goal-Directed Actions]" },
          { icon: "concept", text: "Model artifacts (trained parameters, model definition, metadata) are stored in S3. Inference can be real-time (persistent endpoint, low latency) or batch (offline processing, cost-effective for large datasets where waiting for results is acceptable).", diagram: "graph LR\n  RT[Real-time Inference] ---|Persistent Endpoint| L1[Low Latency]\n  B[Batch Inference] ---|Offline Processing| L2[Cost-Effective]" },
          { icon: "concept", text: "Overfitting: model performs well on training data but poorly on new data (fix: more diverse training data). Underfitting: model cannot find meaningful relationships (fix: more data or longer training). Bias: disparities in model performance across groups (fix: diverse data, feature weight adjustment, fairness constraints)." },
          { icon: "service", text: "Amazon SageMaker Ground Truth helps build labeled training datasets using Amazon Mechanical Turk (500,000+ crowdsourced workers) or private workforces. AWS DeepRacer teaches reinforcement learning through a model race car on a track." },
          { icon: "concept", text: "Traditional ML works best with structured/labeled data (classification, recommendations). Deep learning is better for unstructured data (images, video, text). Deep learning self-learns features but has significantly higher infrastructure costs." },
          { icon: "definition", text: "Generative AI uses deep learning models pre-trained on extremely large datasets. Transformer neural networks process input sequences (prompts) in parallel to generate output sequences (responses). Large Language Models (LLMs) contain billions of features capturing wide-ranging human knowledge." },
          { icon: "concept", text: "Tokenization breaks text into individual units (words or phrases) to derive features from unstructured text data for machine learning processing." },
          { icon: "service", text: "Amazon Bedrock is a fully managed service for building generative AI applications. PartyRock (partyrock.aws) lets anyone build AI apps for free to experiment with generative AI capabilities." }
        ]
      },
      flashcards: [
        { front: "What is Artificial Intelligence (AI)?", back: "AI is the field of computer science dedicated to solving cognitive problems commonly associated with human intelligence, such as learning, creation, and image recognition. The goal is to create self-learning systems that derive meaning from data." },
        { front: "What is Machine Learning (ML)?", back: "ML is a branch of AI and computer science that focuses on using data and algorithms to imitate the way humans learn. ML models are trained using large datasets to identify patterns and make predictions without explicit instructions." },
        { front: "What is Deep Learning?", back: "Deep learning is a type of ML that uses algorithmic structures called neural networks (inspired by the human brain) with layers of interconnected nodes. It excels at image classification, NLP, and tasks requiring identification of complex data relationships.", backDiagram: "graph TD\n  AI[Artificial Intelligence] --> ML[Machine Learning]\n  ML --> DL[Deep Learning]\n  DL --> GenAI[Generative AI]" },
        { front: "What is an inference in ML?", back: "An inference is the output or prediction made by a trained ML model when given new data it hasn't seen during training. It is essentially an educated guess — a probabilistic result, not a guaranteed correct answer." },
        { front: "What are the four main data types used in ML?", back: "1) Structured data — rows/columns (CSV, RDS, Redshift). 2) Semi-structured — flexible schema (JSON, DynamoDB). 3) Unstructured — no fixed format (images, video, text in S3). 4) Time series — timestamped sequential records for trend prediction." },
        { front: "Why is Amazon S3 the primary source for ML training data?", back: "S3 can store any type of data (structured, semi-structured, unstructured), is low cost, and has virtually unlimited storage capacity. Data from other AWS databases (RDS, Redshift, DynamoDB) is typically exported to S3 for model training." },
        { front: "What is the difference between model parameters and hyperparameters?", back: "Parameters (e.g., weights, slope, intercept) are internal values adjusted automatically during training. Hyperparameters are external settings configured by data scientists before training (e.g., number of neural layers, learning rate)." },
        { front: "What is supervised learning?", back: "A learning style where the model is trained with pre-labeled data — the training data specifies both inputs and desired outputs. The model learns to map inputs to correct outputs. Challenge: labeling large datasets is time-consuming." },
        { front: "What is unsupervised learning?", back: "A learning style where algorithms train on unlabeled data to discover patterns, group data into clusters, or detect anomalies. Useful for pattern recognition, anomaly detection, and automatic data categorization. Setup is straightforward since no labeling is needed." },
        { front: "What is reinforcement learning?", back: "A learning method where an agent takes actions in an environment to achieve specific goals. The model learns through trial and error — actions that move closer to the goal are rewarded. No labeled input is needed, but there is a predetermined end goal." },
        { front: "What is AWS DeepRacer?", back: "A model race car from AWS used to teach developers about reinforcement learning. The car is the agent, the track is the environment, moving forward is the action, and staying on track to finish efficiently is the goal." },
        { front: "What is overfitting in ML?", back: "When a model performs well on training data but poorly on new data. The model fits training data too tightly and cannot generalize. Common fix: train with more diverse data. Training too long can also cause overfitting by overemphasizing noise." },
        { front: "What is underfitting in ML?", back: "When a model cannot determine a meaningful relationship between input and output data, giving inaccurate results on both training and new data. Causes: insufficient training time or too small a dataset." },
        { front: "What is bias in ML models?", back: "Disparities in model performance across different groups, where results are skewed for or against a particular class. Caused by unrepresentative training data. Fix: diverse training data, feature weight adjustment, and fairness constraints identified before model creation." },
        { front: "How do transformers differ from traditional neural networks?", back: "Traditional neural networks process sequence elements one word at a time (sequentially). Transformers process the entire sequence in parallel, which speeds up training dramatically and allows much larger datasets to be used." },
        { front: "What are Large Language Models (LLMs)?", back: "LLMs contain billions of features capturing a wide range of human knowledge. They outperform other ML approaches to NLP, excel at understanding/generating human language, can summarize articles, translate languages, write original content, and even write code." },
        { front: "What is tokenization?", back: "A processing technique that breaks down text into individual units (words or phrases). It is used to derive features from unstructured text data for machine learning." },
        { front: "Real-time inference vs. batch inference?", back: "Real-time: persistent endpoint always available, low latency, high throughput — ideal for online requests. Batch: offline processing of large datasets, compute resources only run during the batch job — more cost-effective when you can wait for results." },
        { front: "What is Amazon SageMaker Ground Truth?", back: "A labeling service that helps build high-quality training datasets. It can leverage Amazon Mechanical Turk (500,000+ crowdsourced workers) for data labeling, addressing the challenge of needing many thousands of labeled examples for supervised learning." },
        { front: "When should you use traditional ML vs. deep learning?", back: "Traditional ML: structured/labeled data, classification, recommendations (e.g., predicting customer churn). Deep learning: unstructured data like images, video, text; NLP, image classification. Deep learning self-learns features but costs more." }
      ],
      quiz: [
        {
          question: "A company needs to process large volumes of historical sales data overnight to generate inventory forecasts for the next month. Which inference approach is most appropriate?",
          options: ["Real-time inference with a persistent endpoint", "Batch inference processing", "Reinforcement learning", "Unsupervised clustering"],
          correct: 1,
          explanation: "Batch inference is ideal for offline processing of large datasets where you don't need immediate results. Computing resources only run during the batch job, making it more cost-effective than maintaining a persistent endpoint."
        },
        {
          question: "Which type of machine learning would be most appropriate for a model race car that needs to learn to navigate a track by trial and error?",
          options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Deep learning"],
          correct: 2,
          explanation: "Reinforcement learning is focused on autonomous decision-making by an agent that learns through trial and error, receiving rewards for actions that move it closer to a goal. AWS DeepRacer is a prime example of this approach."
        },
        {
          question: "A machine learning model correctly identifies fish in photos used during training but fails to recognize fish in new, slightly different images. What problem is this?",
          options: ["Underfitting", "Overfitting", "Bias", "Concept drift"],
          correct: 1,
          explanation: "Overfitting occurs when a model performs well on training data but poorly on new data because it fits the training data too tightly. The best fix is to train with more diverse data."
        },
        {
          question: "What makes Amazon S3 the primary choice for storing ML training data?",
          options: ["It only stores structured data efficiently", "It provides SQL query capabilities", "It can store any data type, is low cost, and has virtually unlimited capacity", "It automatically labels training data"],
          correct: 2,
          explanation: "Amazon S3 is the primary source for training data because it can store any type of data (structured, semi-structured, unstructured), is low cost, and offers virtually unlimited storage capacity."
        },
        {
          question: "Which statement best describes the relationship between AI, ML, and deep learning?",
          options: ["They are three independent fields of study", "ML is a subset of deep learning, which is a subset of AI", "Deep learning is a subset of ML, which is a subset of AI", "AI and ML are the same, and deep learning is different"],
          correct: 2,
          explanation: "AI is the broadest field (computer science solving cognitive problems). ML is a branch of AI that uses data and algorithms to learn. Deep learning is a specific type of ML that uses neural networks."
        },
        {
          question: "A data scientist needs to train a model to identify different species of animals from photographs. The training images must be labeled with the correct species. Which AWS service can help with this labeling task?",
          options: ["Amazon Rekognition", "Amazon SageMaker Ground Truth", "Amazon Comprehend", "Amazon Textract"],
          correct: 1,
          explanation: "SageMaker Ground Truth helps build high-quality labeled training datasets by leveraging Amazon Mechanical Turk crowdsourced workers or private workforces to label data at scale."
        },
        {
          question: "A customer support system stores interaction logs as JSON documents with varying fields per record. What type of data is this?",
          options: ["Structured data", "Semi-structured data", "Unstructured data", "Time series data"],
          correct: 1,
          explanation: "Semi-structured data doesn't fully follow tabular rules — elements can have different attributes or missing attributes. JSON documents with key-value pairs are a classic example of semi-structured data."
        },
        {
          question: "How do transformers in generative AI differ from traditional neural networks when processing sequences?",
          options: ["Transformers process elements sequentially, while traditional networks process in parallel", "Transformers process the sequence in parallel, which speeds up training and allows larger datasets", "Transformers only work with images, not text", "There is no difference in processing approach"],
          correct: 1,
          explanation: "Traditional neural networks process sequence elements one at a time (sequentially). Transformers process the entire sequence in parallel, dramatically speeding up training and enabling the use of much larger datasets."
        },
        {
          question: "A loan approval model consistently denies applications from a specific demographic group despite their qualifications. What is this problem called?",
          options: ["Overfitting", "Underfitting", "Bias", "Anomaly detection"],
          correct: 2,
          explanation: "Bias occurs when there are disparities in model performance across different groups, with results skewed for or against a particular class. This typically stems from training data that doesn't adequately represent diverse populations."
        },
        {
          question: "Which data type would be most relevant for training a model to predict when manufacturing equipment will need maintenance?",
          options: ["Structured data from a relational database", "Semi-structured JSON documents", "Unstructured image data", "Time series data from equipment sensors"],
          correct: 3,
          explanation: "Time series data (timestamped sequential records from sensors — temperature, pressure, etc.) is essential for training models that predict future trends like equipment maintenance needs."
        },
        {
          question: "What is tokenization in the context of machine learning?",
          options: ["A security mechanism for protecting training data", "A technique that breaks text into individual units (words or phrases) to derive features", "A method for encrypting model parameters", "A type of reinforcement learning reward"],
          correct: 1,
          explanation: "Tokenization is a processing technique that breaks down text into individual units (words or phrases) to derive features from unstructured text data for machine learning processing."
        },
        {
          question: "A model gives inaccurate results on both training data and new data. What is this problem, and what is a likely cause?",
          options: ["Overfitting — the model was trained too long", "Bias — the training data lacks diversity", "Underfitting — the model hasn't been trained long enough or with enough data", "Concept drift — the target variable properties changed"],
          correct: 2,
          explanation: "Underfitting occurs when the model cannot determine a meaningful relationship between inputs and outputs, giving inaccurate results on both training and new data. This typically happens when training time or dataset size is insufficient."
        },
        {
          question: "Which of the following is a key advantage of deep learning over traditional ML for computer vision?",
          options: ["Deep learning models require less computing power", "Deep learning models can identify and extract important features on their own", "Deep learning models need fewer training examples", "Deep learning models always have lower infrastructure costs"],
          correct: 1,
          explanation: "A major advantage of deep learning for computer vision is that models don't need relevant features given to them — they can identify patterns in images and extract important features on their own, unlike traditional ML which requires manual feature engineering."
        },
        {
          question: "What distinguishes unsupervised learning from reinforcement learning, given that both work without labeled data?",
          options: ["Unsupervised learning requires more computing power", "Reinforcement learning has a predetermined end goal, while unsupervised learning discovers patterns without a specific target", "Unsupervised learning uses rewards, while reinforcement learning does not", "There is no meaningful difference between them"],
          correct: 1,
          explanation: "Both work without labeled data, but reinforcement learning has a predetermined end goal and uses rewards to validate exploratory actions. Unsupervised learning simply discovers patterns (clusters, anomalies) in the data without a specific target outcome."
        },
        {
          question: "What is the correct definition of an inference in machine learning?",
          options: ["The process of labeling training data", "A probabilistic prediction or output made by a trained model on new data", "The algorithm used to train the model", "The error rate during model training"],
          correct: 1,
          explanation: "An inference is the prediction or output generated by a trained ML model when presented with new data. It is a probabilistic result — essentially an educated guess — not a guaranteed correct answer."
        }
      ]
    },

    // =========================================================================
    // TASK STATEMENT 1.2 — Identify practical use cases for AI
    // =========================================================================
    {
      id: "1.2",
      title: "Identify practical use cases for AI",
      summary: {
        keyPoints: [
          { icon: "concept", text: "AI is ideal for: repetitive/tedious tasks, complex problems requiring analysis of vast data at high velocity, pattern recognition and anomaly/fraud detection, demand forecasting, and tasks that need 24/7 performance without degradation." },
          { icon: "concept", text: "AI is NOT ideal when: costs exceed business benefits, complete model interpretability is required (complex neural networks are hard to explain), or deterministic (same input = same output) behavior is necessary. Consider rule-based systems as alternatives." },
          { icon: "concept", text: "ML models are probabilistic (determine likelihood, adapt over time, results may vary), while rule-based systems are deterministic (same input always produces the same output). Choose based on business requirements for consistency and transparency." },
          { icon: "concept", text: "Classification problems: Binary classification assigns inputs to one of two mutually exclusive classes (e.g., fish/not fish, disease/no disease). Multiclass classification assigns inputs to one of several classes (e.g., document topic: religion, politics, finance)." },
          { icon: "concept", text: "Regression problems predict continuous values. Linear regression models direct linear relationships (simple = one variable; multiple = several variables). Logistic regression predicts probability of an event (value between 0 and 1) using logarithmic functions." },
          { icon: "concept", text: "Clustering groups similar data objects together (members similar within groups, different between groups). Anomaly detection identifies rare items or events that differ significantly from the rest of the data (e.g., failed sensors, fraud)." },
          { icon: "service", text: "Amazon Rekognition: pre-trained deep learning for computer vision — face recognition, object detection/labeling, content moderation, custom object recognition, and text detection in images and video (including streaming)." },
          { icon: "service", text: "Amazon Textract extracts text, handwriting, forms, and tabular data from scanned documents (beyond simple OCR). Amazon Comprehend is an NLP service for sentiment analysis, insight discovery, and PII detection in text. They are often used together." },
          { icon: "service", text: "Amazon Lex builds voice/text chatbot interfaces (same technology as Alexa). Amazon Transcribe provides automatic speech recognition for 100+ languages. Amazon Polly converts text to natural-sounding speech in dozens of languages." },
          { icon: "service", text: "Amazon Kendra uses ML for intelligent enterprise search with NLP. Amazon Personalize generates personalized recommendations for retail, media, and entertainment. Amazon Translate provides neural machine translation across 75 languages." },
          { icon: "service", text: "Amazon Fraud Detector identifies potentially fraudulent online activities with pre-trained models for payment fraud, fake accounts, account takeovers, and suspicious reviews." },
          { icon: "service", text: "Amazon Bedrock is a fully managed service for generative AI — choose from foundation models by Amazon, Meta, and leading AI startups. Supports customization via training data or knowledge bases. Retrieval Augmented Generation (RAG) lets models query external knowledge." },
          { icon: "service", text: "Amazon SageMaker provides full ML capabilities for custom models: data preparation, labeling, large-scale training, model deployment, and real-time inference endpoints. Use when pre-built AI services don't meet requirements." },
          { icon: "concept", text: "Real-world cases: MasterCard tripled fraud detection with SageMaker (added GenAI for 20% improvement). DoorDash replaced IVR with Amazon Lex NLP. Laredo Petroleum uses SageMaker for real-time sensor monitoring. Booking.com built an AI Trip Planner using RAG. Pinterest uses S3 + Ground Truth + Mechanical Turk for visual product search." }
        ]
      },
      flashcards: [
        { front: "When should you NOT use AI/ML?", back: "When costs exceed the business benefits, when complete model interpretability/transparency is required (e.g., loan decisions with compliance requirements), or when deterministic behavior is needed (same input must always produce the same output). Rule-based systems are better alternatives in these cases." },
        { front: "What is model interpretability?", back: "The ability to understand how and why a model's internal mechanics impact its predictions. Complex neural networks present a tradeoff: higher capability but lower interpretability. If complete transparency is a business/compliance requirement, simpler models or rule-based systems may be needed." },
        { front: "Deterministic vs. Probabilistic systems?", back: "Deterministic: always produces the same output for the same input (e.g., rule-based systems). Probabilistic: determines likelihood, learns and adapts over time, and incorporates randomness — identical inputs may produce varying results (e.g., ML models)." },
        { front: "What is binary classification?", back: "A supervised learning problem that assigns an input to one of two predefined, mutually exclusive classes based on its attributes. Examples: disease/no disease, fish/not fish, fraud/not fraud." },
        { front: "What is multiclass classification?", back: "A supervised learning problem that assigns an input to one of several predefined classes. Example: classifying a document as being about religion, politics, finance, or other topics." },
        { front: "Linear regression vs. Logistic regression?", back: "Linear regression predicts continuous values based on direct linear relationships between variables (e.g., predicting house prices). Logistic regression predicts the probability of an event (value between 0 and 1) using logarithmic functions (e.g., likelihood of heart disease)." },
        { front: "What is clustering in ML?", back: "An unsupervised learning technique that classifies data into groups (clusters) where members are as similar as possible within groups and as different as possible between groups. You specify features, a distance function, and the number of clusters. Example: customer segmentation." },
        { front: "What is anomaly detection?", back: "The identification of rare items, events, or observations that differ significantly from the rest of the data. Used for detecting failed sensors, medical errors, fraud, and other outliers in datasets." },
        { front: "What is Amazon Rekognition?", back: "A pre-trained deep learning service for computer vision that works with images and video (including streaming). Capabilities: face recognition/verification, object detection and labeling, content moderation, custom object recognition, and text detection." },
        { front: "What is Amazon Textract?", back: "More than just OCR — Textract extracts text, handwriting, forms, and tabular data from scanned documents. Often used together with Amazon Comprehend for sentiment analysis of extracted content." },
        { front: "What is Amazon Comprehend?", back: "An NLP service that discovers insights and relationships in text. Use cases: sentiment analysis of customer feedback, PII detection (names, addresses, credit cards). AWS uses it to analyze comments on certification exams." },
        { front: "What is Amazon Lex?", back: "A service for building voice and text conversational interfaces (chatbots). Uses the same technology that powers Amazon Alexa. Common use cases: customer service chatbots and interactive voice response (IVR) systems." },
        { front: "What are Amazon Transcribe and Amazon Polly?", back: "Transcribe: automatic speech recognition for 100+ languages, processes live and recorded audio/video for transcription. Polly: text-to-speech in dozens of languages using deep learning, used for converting articles to speech and IVR prompts." },
        { front: "What is Amazon Kendra?", back: "An intelligent enterprise search service that uses ML and NLP to understand natural language questions and find content across enterprise systems. It goes beyond keyword matching to understand the meaning of queries." },
        { front: "What is Amazon Personalize?", back: "A service that automatically generates personalized recommendations for customers in retail, media, and entertainment. Also supports customer segmentation for targeted marketing campaigns based on preferences." },
        { front: "What is Amazon Fraud Detector?", back: "A service to identify potentially fraudulent online activities. Features pre-trained models for: online payment fraud, fake account creation, checkout/payment fraud, suspicious product reviews, and account takeovers." },
        { front: "What is Retrieval Augmented Generation (RAG)?", back: "When a generative AI model calls an external knowledge system to retrieve information outside its training data, making responses more accurate and current. Example: Booking.com's AI Trip Planner retrieves customer reviews before making recommendations." },
        { front: "How did MasterCard improve fraud detection with AWS?", back: "MasterCard trained a fraud detection model with SageMaker, tripling detected fraudulent transactions and reducing false positives by 10x. In 2024, they added generative AI (using customer transaction history as prompts) to improve detection by an additional 20%." },
        { front: "How did DoorDash improve customer service with AWS?", back: "DoorDash replaced an outdated touch-tone IVR system with Amazon Lex natural language processing, letting customers speak instead of pressing buttons. This improved customer experience, decreased hold times, and increased self-service adoption." },
        { front: "Simple vs. Multiple linear regression?", back: "Simple linear regression uses a single independent variable to predict a dependent variable (e.g., weight to predict height). Multiple linear regression uses two or more independent variables (e.g., bedrooms, bathrooms, square footage to predict house price)." }
      ],
      quiz: [
        {
          question: "A financial institution needs a system that always produces exactly the same decision for the same customer inputs, with full transparency for regulatory compliance. What approach is most appropriate?",
          options: ["A deep neural network trained on historical data", "A rule-based system", "An unsupervised learning model", "A generative AI application"],
          correct: 1,
          explanation: "When deterministic behavior (same input = same output) and complete transparency are required for compliance, a rule-based system is the best choice. ML models are probabilistic and complex neural networks lack full interpretability."
        },
        {
          question: "A company wants to classify customer support tickets as either 'billing', 'technical', 'shipping', or 'general inquiry'. What type of ML problem is this?",
          options: ["Binary classification", "Multiclass classification", "Linear regression", "Anomaly detection"],
          correct: 1,
          explanation: "Multiclass classification assigns inputs to one of several predefined classes. Since tickets are classified into four categories, this is a multiclass classification problem."
        },
        {
          question: "An e-commerce company wants to predict the exact selling price of used electronics based on brand, condition, and age. What type of ML problem is this?",
          options: ["Binary classification", "Clustering", "Linear regression", "Logistic regression"],
          correct: 2,
          explanation: "Since the target value (price) is a continuous number predicted from multiple input features, this is a linear regression problem (specifically, multiple linear regression)."
        },
        {
          question: "A streaming service wants to show 'You might also like' suggestions to users based on their viewing history. Which AWS service is best suited?",
          options: ["Amazon Comprehend", "Amazon Personalize", "Amazon Kendra", "Amazon Textract"],
          correct: 1,
          explanation: "Amazon Personalize automatically generates personalized recommendations for customers in industries like media and entertainment, making it ideal for viewing recommendation features."
        },
        {
          question: "A company needs to extract text and table data from thousands of scanned invoices and then analyze the sentiment of any customer comments included. Which combination of AWS services should they use?",
          options: ["Amazon Rekognition and Amazon Translate", "Amazon Textract and Amazon Comprehend", "Amazon Lex and Amazon Polly", "Amazon Kendra and Amazon Personalize"],
          correct: 1,
          explanation: "Amazon Textract extracts text, forms, and tabular data from scanned documents. Amazon Comprehend performs NLP sentiment analysis on the extracted text. These two services are commonly used together."
        },
        {
          question: "A healthcare provider wants to determine the probability that a patient will develop diabetes based on BMI, smoking status, and genetic factors. What type of ML problem is this?",
          options: ["Linear regression", "Logistic regression", "Clustering", "Multiclass classification"],
          correct: 1,
          explanation: "Logistic regression predicts the probability of an event occurring (value between 0 and 1). Predicting the likelihood of developing a disease based on multiple factors is a classic logistic regression use case."
        },
        {
          question: "A security team needs to monitor a network and detect unusual traffic patterns that could indicate a breach. Which ML approach is most appropriate?",
          options: ["Supervised binary classification", "Linear regression", "Anomaly detection", "Logistic regression"],
          correct: 2,
          explanation: "Anomaly detection identifies rare events or observations that differ significantly from normal patterns. Detecting unusual network traffic that deviates from expected patterns is a classic anomaly detection use case."
        },
        {
          question: "Which AWS service uses the same technology that powers Amazon Alexa and can build conversational chatbot interfaces?",
          options: ["Amazon Comprehend", "Amazon Transcribe", "Amazon Lex", "Amazon Polly"],
          correct: 2,
          explanation: "Amazon Lex uses the same conversational AI technology as Alexa to build voice and text interfaces for customer engagement, including chatbots and interactive voice response systems."
        },
        {
          question: "A retail company wants to segment its customers into groups based on purchase behavior, without predefined categories. What type of ML problem is this?",
          options: ["Binary classification", "Regression", "Clustering", "Anomaly detection"],
          correct: 2,
          explanation: "Clustering is an unsupervised technique that groups similar data objects together without predefined labels. Customer segmentation by purchase behavior is a classic clustering use case."
        },
        {
          question: "When should a company consider NOT using AI for a business problem?",
          options: ["When large amounts of data need to be processed quickly", "When the cost of building the AI solution exceeds the expected business benefits", "When the task is repetitive and tedious", "When pattern recognition is needed for fraud detection"],
          correct: 1,
          explanation: "Before embarking on a costly AI project, the business benefits should outweigh the costs. If costs exceed savings, a simpler solution should be considered. AI excels at the other listed scenarios."
        },
        {
          question: "A travel company wants its generative AI chatbot to provide accurate, up-to-date hotel recommendations including recent customer reviews. What technique should they use?",
          options: ["Transfer learning", "Unsupervised clustering", "Retrieval Augmented Generation (RAG)", "Reinforcement learning"],
          correct: 2,
          explanation: "RAG allows a generative AI model to query external knowledge systems to retrieve current information outside its training data. Booking.com used this approach for their AI Trip Planner to retrieve customer reviews before making recommendations."
        },
        {
          question: "An oil company needs to monitor pressure, temperature, and flow rate data from 1,300+ wells to predict maintenance needs. Which AWS service should they use to build ML models for this?",
          options: ["Amazon Comprehend", "Amazon Rekognition", "Amazon SageMaker", "Amazon Personalize"],
          correct: 2,
          explanation: "Amazon SageMaker provides full ML capabilities for building custom models. Laredo Petroleum used SageMaker to build real-time monitoring models for sensor data across their wells, enabling proactive maintenance."
        },
        {
          question: "A company needs to screen user-uploaded images for inappropriate or violent content before publishing. Which AWS service is best suited?",
          options: ["Amazon Textract", "Amazon Rekognition", "Amazon Comprehend", "Amazon Kendra"],
          correct: 1,
          explanation: "Amazon Rekognition can detect and filter explicit, inappropriate, and violent content in images and videos, and flag content for human review. It is a pre-trained computer vision service for these use cases."
        },
        {
          question: "Which statement correctly describes the difference between classification and regression in ML?",
          options: ["Classification predicts continuous values; regression predicts discrete categories", "Classification assigns inputs to discrete categories; regression predicts continuous values", "Both classification and regression predict discrete categories", "Classification is supervised; regression is unsupervised"],
          correct: 1,
          explanation: "Classification problems have categorical target values (discrete classes), while regression problems have mathematically continuous target values. Both are supervised learning problem types."
        },
        {
          question: "A company needs to detect PII (personally identifiable information) in a large collection of customer emails before using them as ML training data. Which AWS service should they use?",
          options: ["Amazon Rekognition", "Amazon Textract", "Amazon Comprehend", "Amazon Translate"],
          correct: 2,
          explanation: "Amazon Comprehend is pre-trained to find PII in text, including names, addresses, emails, phone numbers, and credit card numbers, with confidence scores. It is the appropriate service for detecting PII before data processing."
        }
      ]
    },

    // =========================================================================
    // TASK STATEMENT 1.3 — Describe the ML development lifecycle
    // =========================================================================
    {
      id: "1.3",
      title: "Describe the ML development lifecycle",
      summary: {
        keyPoints: [
          { icon: "concept", text: "The ML pipeline is a series of interconnected steps: (1) Define the business goal, (2) Collect and prepare data, (3) Train, tune, and evaluate the model, (4) Deploy for inference, (5) Monitor. It is a lifecycle — parts or all of it are repeated even after deployment.", diagram: "graph LR\n  A[Define Business Goal] --> B[Collect & Prepare Data]\n  B --> C[Train & Tune Model]\n  C --> D[Evaluate]\n  D --> E[Deploy]\n  E --> F[Monitor]\n  F -.->|Iterate| B" },
          { icon: "concept", text: "Start with the business goal: define the problem, measurable success criteria, and business value. Evaluate if ML is the right approach via cost-benefit analysis. Investigate all options starting with the simplest solution before adding complexity." },
          { icon: "concept", text: "Approach hierarchy: (1) Use AWS pre-trained AI services (pay-as-you-go, some customizable). (2) Fine-tune an existing model with your data via transfer learning (e.g., Bedrock foundation models, SageMaker JumpStart). (3) Train a custom model from scratch (most costly, technically challenging).", diagram: "graph TD\n  A[Start Here] --> B[AWS Pre-trained AI Services]\n  B -->|Not sufficient?| C[Fine-tune Existing Model]\n  C -->|Not sufficient?| D[Train Custom Model from Scratch]\n  style B fill:#e8f5e2\n  style D fill:#fde8e4" },
          { icon: "concept", text: "Data preparation: Collect data via ETL, ensure repeatability. Data splitting recommendation: 80% training, 10% evaluation, 10% final testing. Reduce features to only those needed for inference to minimize memory and compute requirements." },
          { icon: "service", text: "AWS Glue: fully managed ETL service. Discovers data, stores metadata in Glue Data Catalog, generates transformation code. Built-in transforms include dropping duplicates, filling missing values, and splitting datasets. Glue DataBrew provides visual, no-code data preparation with 250+ built-in transformations." },
          { icon: "service", text: "SageMaker Canvas provides a visual interface for data preparation and feature engineering with 300+ built-in transformations. SageMaker Feature Store is a centralized repository for features and metadata enabling discovery and reuse across ML projects." },
          { icon: "concept", text: "Model training is iterative: parameters/weights are adjusted each iteration to minimize error. Run experiments (parallel training jobs with different algorithms/settings) to find the best solution. Hyperparameters (external settings like neural layers, nodes) are set before training." },
          { icon: "service", text: "SageMaker Training Jobs run training code on managed ML compute instances. SageMaker Experiments lets you manage, analyze, and compare ML experiments. SageMaker Automatic Model Tuning (AMT) automatically finds optimal hyperparameter values by running many training jobs." },
          { icon: "concept", text: "SageMaker supports 4 inference types: (1) Batch transform — offline, large datasets, no persistent endpoint. (2) Asynchronous — queued requests, scales to zero. (3) Serverless — uses Lambda, pay only when running. (4) Real-time — persistent endpoint, low latency, backed by chosen instance types." },
          { icon: "concept", text: "Deployment options: API Gateway + Lambda for model hosting, or SageMaker managed endpoints. Model artifacts and inference code are deployed as Docker containers. SageMaker manages endpoints with auto scaling on your behalf." },
          { icon: "concept", text: "Monitoring detects data drift (changes in data distribution vs. training data) and concept drift (changes in target variable properties). Both cause model performance degradation. SageMaker Model Monitor collects endpoint data, detects changes against baselines, and sends results to CloudWatch for alarms." },
          { icon: "concept", text: "MLOps applies software engineering best practices to ML: automating manual tasks, testing/evaluating code, responding to incidents, version control for everything (including training data), and infrastructure as code. Benefits: productivity, repeatability, reliability, compliance/auditability, and improved data/model quality." },
          { icon: "metric", text: "Confusion matrix metrics — Accuracy: (TP+TN)/total (not good for imbalanced data). Precision: TP/(TP+FP) (minimize false positives). Recall/Sensitivity: TP/(TP+FN) (minimize false negatives). F1 Score: balances precision and recall when both matter." },
          { icon: "metric", text: "AUC/ROC: measures binary classification performance across all threshold values (0-1 scale, 0.5 = random, 1 = perfect). Regression metrics: MSE (mean squared error), RMSE (root MSE, same units as target), MAE (mean absolute error, doesn't emphasize outliers)." },
          { icon: "concept", text: "Business metrics quantify the model's value: cost reduction, user/sales increases, customer feedback improvement. Track actual costs via AWS Cost Explorer with cost allocation tags. Compare actual results and costs against original business goals to calculate ROI." }
        ]
      },
      flashcards: [
        { front: "What are the five phases of the ML pipeline?", back: "1) Define the business goal and success criteria. 2) Collect and prepare training data. 3) Train, tune, and evaluate the model. 4) Deploy for inference. 5) Monitor. It's a lifecycle — phases repeat as models are re-trained and improved." },
        { front: "What is the recommended approach hierarchy for ML solutions?", back: "Start with the simplest: (1) Use AWS pre-trained AI services (pay-as-you-go). (2) Fine-tune an existing model with your data via transfer learning (Bedrock, SageMaker JumpStart). (3) Build a custom model from scratch (most costly and technically challenging)." },
        { front: "What is transfer learning?", back: "The process of fine-tuning a pre-trained model with your own dataset using incremental training. This saves significant cost and development time compared to training from scratch. Available through Amazon Bedrock (foundation models) and SageMaker JumpStart." },
        { front: "What is the recommended data split for ML training?", back: "80% for training the model, 10% for model evaluation, and 10% for final testing before production deployment." },
        { front: "What is ETL in the context of ML?", back: "Extract, Transform, and Load — the process of collecting data from multiple sources, transforming it, and storing it in a centralized repository. Must be repeatable since models are re-trained frequently with new data." },
        { front: "What is AWS Glue?", back: "A fully managed ETL service that discovers data, stores metadata in the Glue Data Catalog, and generates transformation code. Built-in transforms include dropping duplicates, filling missing values, and splitting datasets. Supports extraction from databases, data warehouses, streaming services, and more." },
        { front: "What is the AWS Glue Data Catalog?", back: "A centralized metadata repository containing references to data used in ETL jobs — including location, schema, and runtime metrics. Crawlers automatically determine data schema using classifiers. The source data itself is NOT stored in the catalog, only metadata." },
        { front: "What is AWS Glue DataBrew?", back: "A visual, no-code data preparation tool for cleaning and normalizing data. Offers 250+ built-in transformations (removing nulls, fixing schema inconsistencies, etc.), smart suggestions for data quality issues, and reusable transformation recipes." },
        { front: "What is Amazon SageMaker Feature Store?", back: "A centralized store for features and associated metadata so they can be easily discovered and reused across ML projects. Reduces repetitive data processing by enabling sharing of pre-engineered features." },
        { front: "What are hyperparameters vs. parameters in ML?", back: "Parameters (weights) are internal values adjusted automatically during training. Hyperparameters are external settings configured by data scientists before training (e.g., number of neural layers and nodes). Optimal hyperparameter values are found by running multiple experiments." },
        { front: "What is Amazon SageMaker Automatic Model Tuning (AMT)?", back: "Also called hyperparameter tuning — AMT automatically finds the best hyperparameter values by running many training jobs. You specify algorithm, hyperparameter ranges, and an optimization metric. It stops when completion criteria (no longer improving) are met." },
        { front: "What are the four SageMaker inference types?", back: "1) Batch transform — offline, large datasets, no persistent endpoint. 2) Asynchronous — queued requests with large payloads, scales to zero. 3) Serverless — uses Lambda, pay only when running, good for intermittent traffic. 4) Real-time — persistent endpoint, low latency, backed by chosen instance types." },
        { front: "What is data drift vs. concept drift?", back: "Data drift: significant changes in data distribution compared to training data. Concept drift: changes in the properties of the target variables. Both cause model performance degradation and should trigger re-training." },
        { front: "What is Amazon SageMaker Model Monitor?", back: "A SageMaker capability that monitors production models and detects errors. You define a monitoring schedule that collects endpoint data, detects changes against baselines, and analyzes data with built-in or custom rules. Results go to SageMaker Studio and CloudWatch for alarms." },
        { front: "What is MLOps?", back: "Applying software engineering best practices to ML: automating manual tasks, testing code before release, responding to incidents, version control for everything (including training data and infrastructure). Benefits: productivity, repeatability, reliability, compliance/auditability, model quality." },
        { front: "What is a confusion matrix?", back: "A table summarizing classification model performance with four outcomes: True Positive (correct positive prediction), True Negative (correct negative prediction), False Positive (incorrectly predicted positive), False Negative (incorrectly predicted negative)." },
        { front: "What is accuracy and why can it be misleading?", back: "Accuracy = (TP + TN) / total predictions. It measures the percentage of correct predictions. It's misleading with imbalanced datasets — e.g., if 90% of test images are fish, always predicting 'fish' gives 90% accuracy without truly learning." },
        { front: "Precision vs. Recall — when to use each?", back: "Precision = TP/(TP+FP) — use when minimizing false positives matters (e.g., don't mark legitimate email as spam). Recall = TP/(TP+FN) — use when minimizing false negatives matters (e.g., don't miss a disease diagnosis). You can't optimize for both." },
        { front: "What is the F1 Score?", back: "A metric that balances precision and recall by combining them into a single score. Use F1 when both precision and recall are important to the model's performance and you need a compromise between the two." },
        { front: "What is AUC (Area Under the Curve)?", back: "A metric for binary classification that plots the true positive rate against false positive rate across all threshold values (ROC curve). Scores: 1.0 = perfect, 0.5 = no better than random. Provides an aggregated performance measure across all thresholds." },
        { front: "MSE vs. RMSE vs. MAE for regression models?", back: "MSE (Mean Squared Error): average of squared errors — emphasizes outliers. RMSE (Root MSE): square root of MSE — same units as the target variable, easier to interpret. MAE (Mean Absolute Error): average of absolute errors — doesn't emphasize large errors." },
        { front: "How do you track ML project costs on AWS?", back: "Define cost allocation tags and assign them to all resources in your ML pipeline. Then filter cost reports in AWS Cost Explorer to see actual charges for the project and calculate return on investment against initial cost-benefit estimates." }
      ],
      quiz: [
        {
          question: "A company is considering building an ML solution. They have identified the business problem and estimated costs. What should they evaluate FIRST before building a custom model?",
          options: ["The best hyperparameter settings", "Whether AWS pre-trained AI services can meet their needs", "The optimal data splitting ratio", "Which SageMaker instance type to use"],
          correct: 1,
          explanation: "The approach hierarchy starts with the simplest and cheapest option: evaluate AWS pre-trained AI services first. Only move to fine-tuning or custom models if pre-built services don't achieve the business objectives."
        },
        {
          question: "A data engineer needs to collect data from multiple databases, remove duplicates, fill missing values, and store the processed data in S3 for model training. Which AWS service is best suited?",
          options: ["Amazon SageMaker Canvas", "AWS Glue", "Amazon SageMaker Feature Store", "Amazon Redshift"],
          correct: 1,
          explanation: "AWS Glue is a fully managed ETL service with built-in transformations for dropping duplicates, filling missing values, and splitting datasets. It can extract from multiple data stores and load into S3."
        },
        {
          question: "A data scientist wants to automatically find the best combination of hyperparameters for their model by running many training jobs. Which SageMaker feature should they use?",
          options: ["SageMaker Experiments", "SageMaker Ground Truth", "SageMaker Automatic Model Tuning (AMT)", "SageMaker Model Monitor"],
          correct: 2,
          explanation: "SageMaker AMT (also called hyperparameter tuning) automatically finds the best hyperparameter values by running many training jobs with different settings, stopping when the optimization metric no longer improves."
        },
        {
          question: "A company has an ML model that receives requests only during business hours. They want to avoid paying for idle compute during nights and weekends, but need real-time responses during working hours. Which SageMaker inference type is best?",
          options: ["Batch transform", "Asynchronous inference", "Serverless inference", "Real-time inference"],
          correct: 2,
          explanation: "Serverless inference uses Lambda functions, so you only pay when functions are running. It handles real-time requests without provisioning persistent compute instances, making it cost-effective for intermittent traffic patterns."
        },
        {
          question: "An ML model that was 95% accurate at launch now shows declining performance after 6 months. The underlying customer behavior has changed significantly. What is the most likely cause?",
          options: ["Overfitting", "Underfitting", "Concept drift", "Data drift"],
          correct: 2,
          explanation: "Concept drift occurs when the properties of the target variables change over time (e.g., customer behavior shifts). This degrades model performance because the model was trained on patterns that no longer reflect reality."
        },
        {
          question: "What is the recommended data split ratio for ML training, evaluation, and testing?",
          options: ["50% training, 25% evaluation, 25% testing", "80% training, 10% evaluation, 10% testing", "70% training, 20% evaluation, 10% testing", "90% training, 5% evaluation, 5% testing"],
          correct: 1,
          explanation: "The commonly recommended split is 80% for training the model, 10% for model evaluation during development, and 10% for final testing before production deployment."
        },
        {
          question: "A model for detecting spam emails should prioritize never marking legitimate emails as spam. Which metric should be optimized?",
          options: ["Recall", "Precision", "Accuracy", "Mean Squared Error"],
          correct: 1,
          explanation: "Precision = TP/(TP+FP) measures how well the model avoids false positives. When the goal is to minimize false positives (not marking legitimate email as spam), precision is the right metric to optimize."
        },
        {
          question: "A medical screening model needs to ensure it doesn't miss any patients who have a disease, even if it means some healthy patients are flagged for further testing. Which metric should be optimized?",
          options: ["Precision", "Recall", "AUC", "Mean Absolute Error"],
          correct: 1,
          explanation: "Recall = TP/(TP+FN) measures how well the model avoids false negatives. When missing a positive case (disease) is very costly, recall should be optimized, even at the expense of more false positives."
        },
        {
          question: "Which of the following is NOT a benefit of MLOps?",
          options: ["Productivity through automation and self-service environments", "Repeatability through automating all ML lifecycle steps", "Eliminating the need for model monitoring", "Improved auditability by versioning all inputs and outputs"],
          correct: 2,
          explanation: "MLOps does NOT eliminate monitoring — in fact, monitoring is a key MLOps principle. MLOps benefits include productivity, repeatability, reliability, compliance/auditability, and improved data and model quality."
        },
        {
          question: "A regression model predicts house prices. The data scientist wants an error metric that is in the same units as the price and doesn't overemphasize outliers. Which metric should they use?",
          options: ["Mean Squared Error (MSE)", "Root Mean Squared Error (RMSE)", "Mean Absolute Error (MAE)", "F1 Score"],
          correct: 2,
          explanation: "MAE averages the absolute values of errors without squaring them, so it doesn't emphasize outliers. Unlike MSE, it doesn't change units. Unlike RMSE (which is in the same units), MAE treats all errors equally rather than penalizing large errors more."
        },
        {
          question: "A company stores feature definitions in one SageMaker service and trained model versions in another. Which two services are these?",
          options: ["SageMaker Canvas and SageMaker Experiments", "SageMaker Feature Store and SageMaker Model Registry", "SageMaker Ground Truth and SageMaker Pipelines", "SageMaker DataBrew and SageMaker Studio"],
          correct: 1,
          explanation: "SageMaker Feature Store is a centralized repository for feature definitions and metadata. SageMaker Model Registry is a centralized repository for trained models and their history. Together they enable versioning and reuse."
        },
        {
          question: "An AUC score of 0.5 for a binary classification model indicates what?",
          options: ["Perfect accuracy", "The model performs no better than random guessing", "The model has zero false positives", "The model has perfect recall"],
          correct: 1,
          explanation: "AUC scores range from 0 to 1. A score of 0.5 means the model performs no better than a random classifier. A score of 1.0 indicates perfect accuracy across all thresholds."
        },
        {
          question: "Which service allows you to define ML pipeline workflows as code, including conditional branches, and view them visually in SageMaker Studio?",
          options: ["AWS Step Functions", "Amazon SageMaker Pipelines", "Apache Airflow", "AWS Glue"],
          correct: 1,
          explanation: "SageMaker Pipelines orchestrates SageMaker jobs with reproducible ML pipelines. Pipelines can be defined using the SageMaker Python SDK or JSON, include conditional branches, and be viewed in SageMaker Studio."
        },
        {
          question: "After deploying an ML model, a company wants to track the actual AWS costs of the project and compare them against the original cost-benefit estimate. What should they use?",
          options: ["SageMaker Model Monitor", "Amazon CloudWatch metrics", "AWS Cost Explorer with cost allocation tags", "SageMaker Experiments"],
          correct: 2,
          explanation: "Define cost allocation tags for all resources in your ML pipeline, then filter cost reports in AWS Cost Explorer to determine actual charges. Compare these with the original cost-benefit model to calculate ROI."
        },
        {
          question: "A data scientist has 90 fish images and 10 non-fish images in their test set. The model predicts everything as 'fish' and achieves 90% accuracy. Why is accuracy misleading here?",
          options: ["Because accuracy doesn't account for the size of the dataset", "Because the dataset is imbalanced — the model can score high by always predicting the majority class without truly learning", "Because accuracy can never exceed 50% on binary classification", "Because accuracy only works with regression problems"],
          correct: 1,
          explanation: "With imbalanced datasets, accuracy is misleading because a model can achieve high accuracy by simply predicting the majority class every time. Precision, recall, or F1 score are better metrics for imbalanced data."
        }
      ]
    }
  ]
};
