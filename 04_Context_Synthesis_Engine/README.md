# ⚙️ 04 | Context Synthesis Engine

Welcome to the RAG (Retrieval-Augmented Generation) and Context Optimization layer.

One of the biggest mistakes in Prompt Engineering is dumping massive amounts of raw text into an LLM and hoping it finds what it needs. The Context Synthesis Engine provides protocols to format and inject external knowledge into Claude so it can search, synthesize, and retrieve data with laser precision.

### 🎯 What's Inside?
- **`Context_Optimization_Protocol.xml`**: An XML template that teaches Claude how to index and cross-reference multiple documents.

### 🛠️ How to Use It
1. Wrap your documents in `<document id="1"> ... </document>` tags.
2. Use this protocol to instruct Claude to synthesize the information before answering.
3. This guarantees that Claude's answers are heavily grounded in the provided context, virtually eliminating hallucinations.
