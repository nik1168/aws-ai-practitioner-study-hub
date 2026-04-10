window.DOMAINS = window.DOMAINS || {};
window.DOMAINS["domain6"] = {
  title: "AWS AI Services by Use Case",
  taskStatements: [
    // =========================================================================
    // TASK STATEMENT 6.1 — Natural Language Processing Services
    // =========================================================================
    {
      id: "6.1",
      title: "Natural Language Processing Services",
      summary: {
        keyPoints: [
          { icon: "service", text: "Amazon Comprehend: Fully managed NLP service that uses machine learning to extract insights from text. Capabilities include sentiment analysis (positive, negative, neutral, mixed), entity recognition (people, places, organizations, dates, quantities), key phrase extraction, language detection (100+ languages), syntax analysis (parts of speech), and PII detection/redaction. Supports custom classifiers (train on your labeled data to categorize documents) and custom entity recognizers (detect domain-specific entities). Comprehend Medical variant extracts medical information from unstructured clinical text (conditions, medications, dosages, procedures).", diagram: "graph TD\n  INPUT[Input Text] --> COMP[Amazon Comprehend]\n  COMP --> SENT[Sentiment Analysis\nPositive/Negative/Neutral/Mixed]\n  COMP --> ENT[Entity Recognition\nPeople, Places, Orgs, Dates]\n  COMP --> KEY[Key Phrase Extraction]\n  COMP --> LANG[Language Detection\n100+ Languages]\n  COMP --> SYN[Syntax Analysis\nParts of Speech]\n  COMP --> PII[PII Detection\n& Redaction]\n  COMP --> CUSTOM[Custom Classifiers\n& Entity Recognizers]\n  style COMP fill:#ff9900,color:#fff" },
          { icon: "service", text: "Amazon Translate: Neural machine translation service supporting 75+ languages. Offers real-time translation (synchronous API for low-latency) and batch translation (asynchronous for large volumes). Custom Terminology allows you to define domain-specific terms that should not be translated or should be translated in a specific way (e.g., brand names, product names). Active Custom Translation uses parallel data (source/target sentence pairs) to customize translation style and tone. Supports automatic source language detection, formality settings (formal/informal output), and profanity masking." },
          { icon: "service", text: "Amazon Lex: Conversational AI service for building chatbots and voice bots. Combines Automatic Speech Recognition (ASR) for converting speech to text with Natural Language Understanding (NLU) for recognizing user intent. Supports multi-turn dialog management with slot filling (collecting required information across turns). Integrates with AWS Lambda for business logic fulfillment and Amazon Connect for contact center deployments. Uses the same deep learning technology that powers Alexa.", diagram: "graph LR\n  USER[User Input\nVoice or Text] --> LEX[Amazon Lex]\n  LEX --> ASR[ASR\nSpeech to Text]\n  LEX --> NLU[NLU\nIntent Recognition]\n  NLU --> SLOTS[Slot Filling\nCollect Parameters]\n  SLOTS --> LAMBDA[Lambda\nFulfillment Logic]\n  LAMBDA --> RESP[Response\nBack to User]\n  LEX --> CONNECT[Amazon Connect\nContact Center]\n  style LEX fill:#ff9900,color:#fff" },
          { icon: "service", text: "Amazon Polly: Text-to-speech service that converts text into lifelike speech. Neural TTS produces the highest quality, most natural-sounding speech. Standard TTS offers lower cost for less demanding use cases. Supports SSML (Speech Synthesis Markup Language) for fine-grained control over pronunciation, volume, pitch, and speed. Special speaking styles include Newscaster (formal news reading) and Conversational (friendly, natural). Brand Voice creates a custom voice exclusive to your organization. Speech Marks provide metadata about timing, visemes (mouth shapes), and word boundaries for lip-syncing animations." },
          { icon: "service", text: "Amazon Transcribe: Automatic speech recognition (ASR) service that converts speech to text. Supports real-time streaming transcription and batch processing of audio files. Custom vocabulary improves accuracy for domain-specific terms (product names, technical jargon). Custom language models adapt to your specific audio characteristics. Automatic language identification detects the spoken language. Speaker diarization identifies and labels individual speakers in multi-speaker audio. Content redaction automatically removes sensitive information (PII) from transcripts. Vocabulary filtering masks or removes unwanted words. Transcribe Medical variant is optimized for medical conversations and clinical terminology.", diagram: "graph TD\n  AUDIO[Audio Input\nStreaming or Batch] --> TRANS[Amazon Transcribe]\n  TRANS --> TEXT[Transcribed Text]\n  TRANS --> SPEAK[Speaker Diarization\nIdentify Speakers]\n  TRANS --> REDACT[Content Redaction\nRemove PII]\n  TRANS --> VOCAB[Custom Vocabulary\nDomain Terms]\n  TRANS --> LANG[Language\nIdentification]\n  TRANS --> MED[Transcribe Medical\nClinical Speech]\n  style TRANS fill:#ff9900,color:#fff" },
          { icon: "concept", text: "NLP service selection guide: Text analysis and insights -> Amazon Comprehend. Translation between languages -> Amazon Translate. Building chatbots/voice bots -> Amazon Lex. Text to speech -> Amazon Polly. Speech to text -> Amazon Transcribe. Medical text analysis -> Amazon Comprehend Medical. Medical speech to text -> Amazon Transcribe Medical. For conversational AI agents with tool use and orchestration, consider Amazon Bedrock Agents instead of Lex.", diagram: "graph TD\n  NEED{What do you need?}\n  NEED -->|Analyze text| COMP[Amazon Comprehend]\n  NEED -->|Translate text| TRAN[Amazon Translate]\n  NEED -->|Build chatbot| LEX[Amazon Lex]\n  NEED -->|Text to speech| POLLY[Amazon Polly]\n  NEED -->|Speech to text| TRANS[Amazon Transcribe]\n  COMP -->|Medical text?| COMPMED[Comprehend Medical]\n  TRANS -->|Medical speech?| TRANSMED[Transcribe Medical]\n  LEX -->|Complex orchestration?| BEDROCK[Bedrock Agents]\n  style NEED fill:#232f3e,color:#fff\n  style COMP fill:#ff9900,color:#fff\n  style TRAN fill:#ff9900,color:#fff\n  style LEX fill:#ff9900,color:#fff\n  style POLLY fill:#ff9900,color:#fff\n  style TRANS fill:#ff9900,color:#fff" }
        ]
      },
      flashcards: [
        { front: "What does Amazon Comprehend do?", back: "Amazon Comprehend is a fully managed NLP service that extracts insights from text using machine learning. It performs sentiment analysis, entity recognition, key phrase extraction, language detection (100+ languages), syntax analysis, and PII detection/redaction. It also supports custom classifiers and custom entity recognizers for domain-specific needs." },
        { front: "What is the difference between Amazon Comprehend and Comprehend Medical?", back: "Amazon Comprehend handles general-purpose NLP tasks (sentiment, entities, key phrases, language detection). Comprehend Medical is specifically optimized for extracting medical information from unstructured clinical text, including conditions, medications, dosages, procedures, and medical entities like ICD-10 codes." },
        { front: "What are the four sentiment types that Amazon Comprehend can detect?", back: "Positive, Negative, Neutral, and Mixed. Mixed indicates that the text contains both positive and negative sentiments." },
        { front: "What is the difference between Custom Terminology and Active Custom Translation in Amazon Translate?", back: "Custom Terminology defines specific terms that should not be translated or should be translated in a specific way (e.g., brand names). Active Custom Translation uses parallel data (source/target sentence pairs) to customize the overall translation style, tone, and domain adaptation." },
        { front: "How does Amazon Lex differ from Amazon Bedrock Agents?", back: "Amazon Lex is designed for structured conversational flows with defined intents, slots, and fulfillment logic (chatbots with predictable paths). Bedrock Agents handle complex, multi-step orchestration with dynamic tool use, API calls, and reasoning — better for open-ended tasks requiring planning and knowledge retrieval." },
        { front: "What technology powers Amazon Lex?", back: "Amazon Lex uses the same deep learning technologies that power Alexa. It combines Automatic Speech Recognition (ASR) for speech-to-text conversion with Natural Language Understanding (NLU) for intent recognition and slot filling." },
        { front: "What is the difference between Neural TTS and Standard TTS in Amazon Polly?", back: "Neural TTS produces the highest quality, most natural-sounding speech using advanced deep learning models. Standard TTS is lower quality but also lower cost, suitable for less demanding applications where natural-sounding speech is not critical." },
        { front: "What are Speech Marks in Amazon Polly?", back: "Speech Marks provide metadata about the generated speech including timing information, visemes (mouth shapes for lip-syncing), word boundaries, and sentence boundaries. They are used to synchronize speech with animations or highlight text as it is spoken." },
        { front: "What is speaker diarization in Amazon Transcribe?", back: "Speaker diarization is the ability to identify and label individual speakers in multi-speaker audio. Transcribe assigns speaker labels (Speaker 0, Speaker 1, etc.) to each segment of the transcript, making it possible to know who said what in meetings or conversations." },
        { front: "How does content redaction work in Amazon Transcribe?", back: "Content redaction automatically identifies and removes personally identifiable information (PII) from transcripts. It can redact items like names, addresses, social security numbers, and other sensitive data, replacing them with [PII] markers in the output." },
        { front: "What is Custom Vocabulary in Amazon Transcribe?", back: "Custom Vocabulary improves transcription accuracy for domain-specific terms that the standard model may not recognize well, such as product names, technical jargon, or proper nouns. You provide a list of terms with optional pronunciation hints." },
        { front: "Which AWS service would you use for a call center chatbot?", back: "Amazon Lex for the conversational AI (intent recognition, dialog management, slot filling), integrated with Amazon Connect for the contact center infrastructure. Lambda handles business logic fulfillment." },
        { front: "Which AWS NLP services support PII detection?", back: "Amazon Comprehend (PII detection and redaction in text) and Amazon Transcribe (content redaction in speech-to-text output). Both can identify and mask sensitive personal information." },
        { front: "What is the difference between Amazon Transcribe and Transcribe Medical?", back: "Amazon Transcribe handles general-purpose speech-to-text for any domain. Transcribe Medical is specifically optimized for medical conversations, clinical terminology, drug names, and medical procedures, providing higher accuracy for healthcare use cases." },
        { front: "Can Amazon Translate automatically detect the source language?", back: "Yes. Amazon Translate supports automatic source language detection. You can set the source language to 'auto' and the service will identify the language before translating, eliminating the need to specify the input language manually." }
      ],
      quiz: [
        {
          question: "A healthcare company needs to extract medical entities such as conditions, medications, and dosages from thousands of clinical notes stored as unstructured text. Which AWS service should they use?",
          options: ["Amazon Comprehend with custom entity recognizer", "Amazon Comprehend Medical", "Amazon Transcribe Medical", "Amazon SageMaker with a custom NER model"],
          correct: 1,
          explanation: "Amazon Comprehend Medical is specifically designed to extract medical information from unstructured clinical text, including conditions, medications, dosages, and procedures. While standard Comprehend with a custom entity recognizer could work, Comprehend Medical is purpose-built for this use case and requires no custom training."
        },
        {
          question: "A multinational company receives customer emails in various languages and needs to analyze sentiment across all of them. Which combination of services best addresses this requirement?",
          options: ["Amazon Translate to convert all emails to English, then Amazon Comprehend for sentiment analysis", "Amazon Comprehend only, as it supports multilingual sentiment analysis natively", "Amazon Lex to interpret intent, then Lambda for sentiment scoring", "Amazon Transcribe to process emails, then Comprehend for analysis"],
          correct: 0,
          explanation: "While Comprehend supports language detection, its sentiment analysis works best with supported languages. The recommended approach is to use Amazon Translate to convert emails to a common language (e.g., English), then use Amazon Comprehend for consistent sentiment analysis across all messages."
        },
        {
          question: "A media company needs to generate subtitles for video content and identify which speaker is talking at each point. Which AWS service and feature should they use?",
          options: ["Amazon Polly with Speech Marks", "Amazon Transcribe with speaker diarization", "Amazon Comprehend with entity recognition", "Amazon Lex with multi-turn dialog"],
          correct: 1,
          explanation: "Amazon Transcribe converts speech to text (generating subtitles), and speaker diarization identifies and labels individual speakers in the audio. Together, these features produce time-stamped subtitles with speaker identification."
        },
        {
          question: "An e-commerce company wants to build a structured chatbot that collects shipping information (address, delivery date, package size) before processing orders. Which AWS service is most appropriate?",
          options: ["Amazon Bedrock with a foundation model", "Amazon Comprehend with custom classifiers", "Amazon Lex with slot filling", "Amazon Polly with SSML"],
          correct: 2,
          explanation: "Amazon Lex is designed for structured conversational flows. Its slot filling capability collects required information (address, delivery date, package size) across multiple turns of dialog before triggering fulfillment logic via Lambda."
        },
        {
          question: "A company is translating product documentation and needs to ensure that proprietary product names like 'CloudSync Pro' and 'DataVault' are never translated into other languages. Which feature should they use?",
          options: ["Amazon Translate Active Custom Translation with parallel data", "Amazon Translate Custom Terminology", "Amazon Comprehend custom entity recognizer", "Amazon Translate formality settings"],
          correct: 1,
          explanation: "Custom Terminology in Amazon Translate allows you to specify terms that should not be translated or should be translated in a specific way. This ensures brand names and product names remain unchanged across all translated content."
        },
        {
          question: "A telehealth platform needs to transcribe doctor-patient conversations in real time while automatically masking patient Social Security numbers and addresses from the transcript. Which service and features are needed?",
          options: ["Amazon Transcribe Medical with content redaction", "Amazon Transcribe with custom vocabulary and vocabulary filtering", "Amazon Comprehend Medical with PII detection", "Amazon Transcribe with speaker diarization and language identification"],
          correct: 0,
          explanation: "Amazon Transcribe Medical provides accurate transcription of medical conversations, and content redaction automatically removes PII (Social Security numbers, addresses) from the output. The real-time streaming capability supports live transcription during consultations."
        },
        {
          question: "A news organization wants to convert written articles into audio format using a professional newscaster speaking style. Which AWS service and feature should they use?",
          options: ["Amazon Polly with Neural TTS and Newscaster style", "Amazon Transcribe with custom language models", "Amazon Polly with Standard TTS and SSML", "Amazon Lex with voice output enabled"],
          correct: 0,
          explanation: "Amazon Polly's Neural TTS with the Newscaster speaking style produces high-quality speech that sounds like a professional news anchor reading the content. This is specifically designed for news and informational content delivery."
        },
        {
          question: "A company wants to automatically categorize incoming support tickets into predefined categories (billing, technical, shipping, returns) based on ticket text content. They have 10,000 labeled historical tickets. Which approach is best?",
          options: ["Amazon Translate to normalize the text, then rule-based routing", "Amazon Lex to interpret ticket intent", "Amazon Comprehend custom classifier trained on the labeled tickets", "Amazon Transcribe to process the tickets"],
          correct: 2,
          explanation: "Amazon Comprehend custom classifiers can be trained on labeled data to categorize documents into predefined categories. With 10,000 labeled historical tickets, the company can train a classifier to automatically route new tickets to the correct category."
        },
        {
          question: "Which of the following statements about Amazon Lex is correct?",
          options: ["Lex only supports text-based input, not voice", "Lex uses different technology than Alexa", "Lex combines ASR and NLU to handle both voice and text inputs with intent recognition", "Lex requires Amazon Polly to generate any response"],
          correct: 2,
          explanation: "Amazon Lex combines Automatic Speech Recognition (ASR) for converting speech to text with Natural Language Understanding (NLU) for recognizing intents and filling slots. It handles both voice and text inputs and uses the same deep learning technology as Alexa."
        },
        {
          question: "A company records all internal meetings and needs to process the audio to generate transcripts that identify who said what, with each speaker clearly labeled. Which service and feature combination should they use?",
          options: ["Amazon Polly with Speech Marks for speaker timing", "Amazon Transcribe with speaker diarization and automatic language identification", "Amazon Comprehend with entity recognition to identify speakers in text", "Amazon Lex with multi-turn dialog tracking"],
          correct: 1,
          explanation: "Amazon Transcribe converts meeting audio to text, and speaker diarization identifies and labels individual speakers throughout the conversation. Automatic language identification handles meetings where participants may speak different languages."
        }
      ]
    }
    ,
    // =========================================================================
    // TASK STATEMENT 6.2 — Vision & Document Processing Services
    // =========================================================================
    {
      id: "6.2",
      title: "Vision & Document Processing Services",
      summary: {
        keyPoints: [
          { icon: "service", text: "Amazon Rekognition: Image and video analysis service powered by deep learning. Capabilities include object and scene detection, facial analysis (estimates age range, emotions, gender — does NOT identify specific individuals), face comparison (similarity matching between faces), celebrity recognition, content moderation (detecting unsafe, inappropriate, or unwanted content), Custom Labels (train custom models with as few as 10 images for domain-specific detection), text detection in images (signs, banners, license plates), PPE detection (hardhats, face covers, gloves for workplace safety), and streaming video analysis via Amazon Kinesis Video Streams for real-time processing.", diagram: "graph TD\n  INPUT[Image or Video Input] --> REK[Amazon Rekognition]\n  REK --> OBJ[Object & Scene Detection]\n  REK --> FACE[Facial Analysis\nAge, Emotions, Gender]\n  REK --> COMP[Face Comparison\nSimilarity Matching]\n  REK --> CELEB[Celebrity Recognition]\n  REK --> MOD[Content Moderation\nUnsafe/Inappropriate]\n  REK --> CUSTOM[Custom Labels\nMin 10 Training Images]\n  REK --> TEXT[Text Detection\nSigns, Banners, Plates]\n  REK --> PPE[PPE Detection\nHardhats, Masks, Gloves]\n  REK --> VIDEO[Streaming Video\nvia Kinesis Video Streams]\n  style REK fill:#ff9900,color:#fff" },
          { icon: "service", text: "Amazon Textract: Intelligent document processing service that goes beyond basic OCR. DetectDocumentText extracts raw text lines and words from documents. AnalyzeDocument extracts structured data including forms (key-value pairs) and tables with rows and columns. Queries let you ask natural language questions about a document and get specific answers. Specialized APIs: AnalyzeExpense (invoices and receipts — line items, totals, vendor info), AnalyzeID (driver's licenses, passports — standardized fields), and Lending (mortgage document processing supporting 50+ document types with automatic classification and splitting). Integrates with Amazon Augmented AI (A2I) for human review of low-confidence extractions.", diagram: "graph TD\n  DOC[Document Input\nScanned/Digital] --> TEX[Amazon Textract]\n  TEX --> DETECT[DetectDocumentText\nRaw Text Extraction]\n  TEX --> ANALYZE[AnalyzeDocument\nForms & Tables]\n  TEX --> QUERY[Queries\nAsk Questions About Doc]\n  TEX --> EXPENSE[AnalyzeExpense\nInvoices & Receipts]\n  TEX --> ID[AnalyzeID\nLicenses & Passports]\n  TEX --> LEND[Lending\n50+ Mortgage Doc Types]\n  TEX --> A2I[Amazon A2I\nHuman Review]\n  ANALYZE --> KV[Key-Value Pairs]\n  ANALYZE --> TBL[Tables & Rows]\n  style TEX fill:#ff9900,color:#fff" },
          { icon: "concept", text: "Selection guide: Use Amazon Rekognition for photos, videos, object detection, facial analysis, face comparison, content moderation, and custom image classification. Use Amazon Textract for scanned documents, forms, tables, invoices, receipts, identity documents, and mortgage processing. Rekognition text detection is optimized for text embedded in real-world images (signs, billboards), while Textract is optimized for structured document text with layout preservation.", diagram: "graph TD\n  NEED{What is your input?}\n  NEED -->|Photos or Videos| REK[Amazon Rekognition]\n  NEED -->|Documents or Forms| TEX[Amazon Textract]\n  REK -->|Objects, Scenes| OBJ[Object Detection]\n  REK -->|Faces| FACE[Facial Analysis/Comparison]\n  REK -->|Safety| MOD[Content Moderation]\n  REK -->|Custom models| CL[Custom Labels]\n  REK -->|Text in images| TXT[Text Detection\nSigns, Billboards]\n  TEX -->|Raw text| DET[DetectDocumentText]\n  TEX -->|Structured data| ANA[AnalyzeDocument\nForms, Tables]\n  TEX -->|Financial docs| EXP[AnalyzeExpense]\n  TEX -->|Identity docs| IDD[AnalyzeID]\n  TEX -->|Mortgage docs| LND[Lending API]\n  style NEED fill:#232f3e,color:#fff\n  style REK fill:#ff9900,color:#fff\n  style TEX fill:#ff9900,color:#fff" }
        ]
      },
      flashcards: [
        { front: "What is the key difference between Amazon Rekognition and Amazon Textract?", back: "Amazon Rekognition analyzes images and videos (object detection, facial analysis, content moderation, custom labels). Amazon Textract processes documents to extract text, forms, tables, and structured data. Rekognition works with visual/photographic content; Textract works with document content." },
        { front: "Can Amazon Rekognition identify specific individuals?", back: "No. Rekognition performs facial analysis (estimating age, emotions, gender) and face comparison (determining similarity between two faces), but it does NOT identify specific individuals by name from its own knowledge. Celebrity recognition is a separate feature that matches faces against a known celebrity database." },
        { front: "What is Amazon Rekognition Custom Labels?", back: "Custom Labels allows you to train a custom image classification or object detection model specific to your use case with as few as 10 training images. It automates the model training pipeline — you only need to provide labeled images, and Rekognition handles the ML infrastructure, training, and deployment." },
        { front: "What types of content can Amazon Rekognition content moderation detect?", back: "Rekognition content moderation detects unsafe, inappropriate, or unwanted content in images and videos. Categories include explicit/suggestive content, violence, visually disturbing content, drugs, tobacco, alcohol, gambling, hate symbols, and rude gestures. Confidence scores let you set thresholds for your use case." },
        { front: "What is the difference between DetectDocumentText and AnalyzeDocument in Amazon Textract?", back: "DetectDocumentText performs basic text extraction — it returns raw text lines and words from a document. AnalyzeDocument goes further by understanding document structure, extracting forms as key-value pairs (e.g., 'Name: John Smith') and tables with rows and columns, preserving the logical layout." },
        { front: "What are Textract Queries?", back: "Queries let you ask natural language questions about a document, and Textract returns the specific answer extracted from the document. For example, you can ask 'What is the patient name?' or 'What is the total amount?' without needing to parse the entire document structure yourself." },
        { front: "What specialized document types does Amazon Textract support with dedicated APIs?", back: "Three specialized APIs: (1) AnalyzeExpense — invoices and receipts (line items, totals, vendor info, tax). (2) AnalyzeID — identity documents like driver's licenses and passports (standardized field extraction). (3) Lending — mortgage documents supporting 50+ document types with automatic classification, splitting, and extraction." },
        { front: "How does Amazon Textract integrate with Amazon A2I?", back: "Amazon Textract integrates with Amazon Augmented AI (A2I) to enable human review of low-confidence extractions. When Textract is uncertain about extracted data (below a confidence threshold), the document is routed to human reviewers for verification, ensuring accuracy in critical workflows." },
        { front: "What does Amazon Rekognition PPE Detection identify?", back: "Rekognition PPE Detection identifies personal protective equipment on persons in images, including face covers (masks), head covers (hardhats/helmets), and hand covers (gloves). It detects both the presence of PPE and whether it is being worn correctly, useful for workplace safety compliance." },
        { front: "How does Amazon Rekognition handle real-time video analysis?", back: "Rekognition integrates with Amazon Kinesis Video Streams for real-time streaming video analysis. Video is ingested through Kinesis Video Streams, and Rekognition processes frames to detect objects, faces, people, and activities in near real-time, outputting results to Kinesis Data Streams for downstream processing." },
        { front: "When should you use Rekognition text detection versus Amazon Textract?", back: "Use Rekognition text detection for text embedded in real-world images — signs, billboards, street names, license plates, product packaging. Use Textract for structured documents — scanned forms, PDFs, invoices, receipts — where you need to preserve layout, extract key-value pairs, or parse tables." },
        { front: "A company needs to automatically process thousands of invoices with varying layouts to extract vendor names, line items, and totals. Which service should they use?", back: "Amazon Textract with the AnalyzeExpense API. AnalyzeExpense is specifically designed for invoices and receipts, automatically identifying and extracting fields like vendor name, line items, quantities, unit prices, totals, and tax amounts — regardless of the document layout or format." }
      ],
      quiz: [
        {
          question: "A manufacturing company wants to detect product defects on an assembly line using images of products. They have 50 labeled images of defective items and 50 of non-defective items. Which AWS service is most appropriate?",
          options: ["Amazon Textract with custom queries", "Amazon Rekognition Custom Labels", "Amazon SageMaker with a pre-built algorithm", "Amazon Comprehend image analysis"],
          correct: 1,
          explanation: "Amazon Rekognition Custom Labels allows you to train a custom image classification or object detection model with as few as 10 images. With 100 labeled images (50 defective, 50 non-defective), the company can train a custom model to identify manufacturing defects without managing ML infrastructure."
        },
        {
          question: "A bank needs to extract customer names, account numbers, and signatures from thousands of loan application forms that have different layouts across branches. Which AWS service should they use?",
          options: ["Amazon Rekognition text detection", "Amazon Textract AnalyzeDocument with forms extraction", "Amazon Comprehend entity recognition", "Amazon Translate with custom terminology"],
          correct: 1,
          explanation: "Amazon Textract AnalyzeDocument with forms extraction identifies key-value pairs from documents regardless of layout. It can extract structured data like 'Customer Name: Jane Doe' and 'Account Number: 12345' even when form layouts vary across branches."
        },
        {
          question: "A social media platform needs to automatically detect and flag user-uploaded images that contain inappropriate or explicit content before they become visible to other users. Which service should they use?",
          options: ["Amazon Comprehend sentiment analysis on image metadata", "Amazon Rekognition content moderation", "Amazon Textract to read text in images", "Amazon Macie for content classification"],
          correct: 1,
          explanation: "Amazon Rekognition content moderation detects unsafe, inappropriate, or unwanted content in images including explicit/suggestive content, violence, and other categories. Confidence scores allow the platform to set thresholds and automatically flag or remove content."
        },
        {
          question: "A real estate company needs to process mortgage applications that contain property photos, appraisal documents, income verification forms, and tax returns. Which combination of AWS services best addresses all these requirements?",
          options: ["Amazon Textract Lending API only", "Amazon Rekognition for all documents and photos", "Amazon Rekognition for property photos and Amazon Textract Lending for mortgage documents", "Amazon Comprehend for document classification and entity extraction"],
          correct: 2,
          explanation: "Amazon Rekognition handles the property photo analysis (object/scene detection), while Amazon Textract's Lending API is specifically designed for mortgage document processing, supporting 50+ document types with automatic classification, splitting, and data extraction."
        },
        {
          question: "A company needs to verify that a person presenting a photo ID at a kiosk matches the photo on the ID document. Which AWS service and feature should they use?",
          options: ["Amazon Rekognition facial analysis to estimate age", "Amazon Rekognition face comparison for similarity matching", "Amazon Textract AnalyzeID to read the ID fields", "Amazon Rekognition celebrity recognition"],
          correct: 1,
          explanation: "Amazon Rekognition face comparison determines the similarity between two faces — in this case, the live person at the kiosk and the photo on the ID document. It returns a similarity score that the company can use to verify identity. Note that Textract AnalyzeID extracts text fields from IDs but does not compare photos."
        },
        {
          question: "A delivery company wants to automatically read and extract text from street signs, building numbers, and billboards in photos taken by delivery drivers to verify delivery locations. Which service should they use?",
          options: ["Amazon Textract DetectDocumentText", "Amazon Rekognition text detection", "Amazon Comprehend key phrase extraction", "Amazon Translate to process sign text"],
          correct: 1,
          explanation: "Amazon Rekognition text detection is optimized for detecting and reading text embedded in real-world images such as street signs, building numbers, billboards, and license plates. Textract is designed for document processing, not text in photographic/real-world scenes."
        },
        {
          question: "A government agency needs to automatically extract standardized fields (name, date of birth, document number, expiration date) from millions of passports submitted for visa applications. Which service is most appropriate?",
          options: ["Amazon Rekognition facial analysis on passport photos", "Amazon Textract AnalyzeID", "Amazon Textract DetectDocumentText with custom parsing", "Amazon Comprehend entity recognition"],
          correct: 1,
          explanation: "Amazon Textract AnalyzeID is specifically designed for identity documents like passports and driver's licenses. It automatically extracts standardized fields (name, DOB, document number, expiration date) without requiring custom parsing logic."
        },
        {
          question: "Which of the following statements about Amazon Rekognition is correct?",
          options: ["Rekognition can identify any person by name from a photo", "Rekognition facial analysis provides exact age of a person", "Rekognition face comparison returns a similarity score between two faces", "Rekognition requires at least 1,000 images to train Custom Labels"],
          correct: 2,
          explanation: "Rekognition face comparison analyzes two faces and returns a similarity score indicating how likely they are the same person. It does NOT identify individuals by name (only celebrities from its database), provides age RANGES (not exact ages), and Custom Labels requires as few as 10 images."
        },
        {
          question: "A logistics company wants to extract tracking numbers, sender addresses, and delivery dates from shipping labels on packages. The labels are photographed in a warehouse with consistent lighting. Which approach should they use?",
          options: ["Amazon Rekognition text detection for all fields", "Amazon Textract AnalyzeDocument to extract structured data from the label images", "Amazon Rekognition Custom Labels to classify label types", "Amazon Comprehend entity recognition on OCR output"],
          correct: 1,
          explanation: "Amazon Textract AnalyzeDocument is the best choice for extracting structured data (key-value pairs like 'Tracking: ABC123', 'To: Address') from shipping labels. While these are photographed, they are structured documents with consistent fields, making Textract more appropriate than Rekognition text detection."
        },
        {
          question: "A construction company needs to verify that all workers on a job site are wearing required safety equipment (hardhats, safety vests, and gloves) using security camera footage. Which AWS service and feature should they use?",
          options: ["Amazon Rekognition Custom Labels trained on safety equipment", "Amazon Rekognition PPE Detection", "Amazon Rekognition object detection with default labels", "Amazon SageMaker object detection model"],
          correct: 1,
          explanation: "Amazon Rekognition PPE Detection is purpose-built to detect personal protective equipment on persons in images, including head covers (hardhats), face covers (masks), and hand covers (gloves). It identifies both the presence of PPE and whether it is being worn correctly, without requiring custom model training."
        }
      ]
    }
    // Remaining task statements (6.3 - 6.7) will be added in subsequent tasks
  ]
};
