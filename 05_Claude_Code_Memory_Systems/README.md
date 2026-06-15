# 🤖 05 | Claude Code (Agentic Memory)

Welcome to the most advanced feature of the Suite: **Persistent Agentic Memory**.

When working on large projects, AI models often "forget" the coding standards, directory structures, or architectural decisions made in previous chats. By utilizing `CLAUDE.md`, we give Claude a persistent "brain" that it automatically reads every time a new session starts in that directory.

### 🎯 What's Inside?
- **`CLAUDE.md`**: The master configuration file. It tells Claude how to behave, what commands to run, and the stylistic rules of the repository.
- **`Rules.xml`**: An auxiliary file containing strict formatting rules that can be injected into the agent's workflow.

### 🛠️ How to Use It
1. Place the `CLAUDE.md` file in the root of your project directory.
2. When using tools like **Claude Code** (the CLI tool), it will automatically read this file.
3. Update this file continuously as your project evolves so your AI Agent never loses context!
