# 🧠 01 | Logic Protocols (XML)

Welcome to the foundation of the Claude Intelligence Suite. 

Large Language Models perform best when their operating boundaries are strictly defined. By wrapping instructions, constraints, and variables inside **XML tags**, we provide Claude with a deterministic, parser-friendly structure. This eliminates hallucinations and ensures the agent stays exactly on track.

### 🎯 What's Inside?
- **`CIS_Core_Logic.xml`**: A fundamental template demonstrating how to define an AI's persona, context, and operational rules using XML nodes.
- **`CIS_Logic_Core_v1.xml`**: An extended version that dictates the step-by-step thinking process (Chain of Thought) the AI must follow before outputting a response.

### 🛠️ How to Use It
1. Copy the contents of the XML file.
2. Paste it at the very beginning of your System Prompt or initial message to Claude.
3. Fill in the specific variables (like `<task>`, `<context>`) for your use case.

> **Pro Tip:** Always instruct Claude to wrap its internal reasoning in `<thinking>` tags before giving the final `<response>`.
