# ⚛️ React Learning Journey

Welcome to my React learning repository! This repo documents my journey mastering React from the ground up, covering hands-on code projects, deep-dive experiments, and structured study notes.

---

## 📚 Table of Contents
- [📖 Study Notes & Handbook](#-study-notes--handbook)
- [📂 Projects Directory](#-projects-directory)
- [🚀 Getting Started](#-getting-started)
- [🛠️ Tech Stack & Tools](#️-tech-stack--tools)

---

## 📖 Study Notes & Handbook

All conceptual explanations, architectural breakdowns, rules, and interview notes are documented in:
👉 **[NOTES.md](./NOTES.md)**

### Topics Covered:
1. **What is React?** – Core philosophy, declarative UI, Virtual DOM, and the UI-State synchronization problem.
2. **History of React** – From FaxJS (2011) to React 19 (Actions, Compiler, Server Components).
3. **Project Setup & Structure** – In-depth comparison of Create React App (CRA) vs. modern Vite.
4. **JSX & Evaluated Expressions** – Syntax rules, fragments `<>`, and expressions inside `{}`.
5. **How React Works Under the Hood** – JSX compilation pipeline and building a custom renderer (`customReact`).
6. **State & Hooks (`useState`)** – Why normal variables fail, state batching, and functional updates (`prevCounter`).

---

## 📂 Projects Directory

| # | Folder | Setup Type | Description | Key Learnings |
|---|---|---|---|---|
| 01 | [`01basicreact`](./01basicreact) | Create React App (CRA) | Classic React setup powered by Webpack | CRA project layout, `index.js`, basic components (`Chai.js`) |
| 02 | [`01_vitereact`](./01_vitereact) | Vite + React | Modern, lightning-fast React setup | Vite architecture, `main.jsx`, strict `.jsx` requirement, `React.createElement` testing |
| 03 | [`customReact`](./customReact) | Vanilla JS | Building a custom React rendering engine from scratch | Understanding how React elements convert into actual browser DOM nodes (`customRender`) |
| 04 | [`02counter`](./02counter) | Vite + React | Counter application demonstrating React state | `useState` hook, UI synchronization, value bounds (0–20), functional state updates (`prevCounter`) |

---

## 🚀 Getting Started

To explore and run any of the projects locally:

### 1. Modern Vite Project (`01_vitereact` or `02counter`)
```bash
cd 01_vitereact   # or cd 02counter
npm install
npm run dev
```

### 2. Classic Basic React (`01basicreact`)
```bash
cd 01basicreact
npm install
npm start
```

### 3. Custom React Engine (`customReact`)
The custom React project uses plain HTML and JavaScript:
- Simply open `customReact/index.html` in any web browser, or use the VS Code Live Server extension.

---

## 🛠️ Tech Stack & Tools
- **Library:** [React](https://react.dev/)
- **Build Tools:** [Vite](https://vitejs.dev/), Create React App (CRA)
- **Language:** JavaScript (ES6+), JSX
- **Package Manager:** npm

---

*Happy Coding & Learning! 🚀*