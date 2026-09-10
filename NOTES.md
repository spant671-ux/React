# React Learning Notes

A clean, notebook-friendly companion to summarize core concepts, code snippets, syntax, and mental models as you learn React.

---

## 📌 Index / Topics Covered
- [1. Introduction & Setup (CRA vs Vite)](#1-introduction--setup-cra-vs-vite)
- [Future Topics...](#)

---

## 1. Introduction & Setup (CRA vs Vite)

### 🔹 What is React?
- A declarative, component-based JavaScript library for building user interfaces.
- Developed and maintained by Meta (Facebook) and an open-source community.
- **Key philosophy:** You describe *what* the UI should look like for a given state, and React handles updating the DOM efficiently.

### 🔹 Why Vite over Create React App (CRA)?
- **Create React App (`create-react-app`)**:
  - Uses Webpack under the hood.
  - Bundles the entire application before starting the dev server (slower cold starts and rebuilds as project grows).
  - Mostly deprecated / no longer actively maintained.
- **Vite**:
  - Leverages native ES modules (ESM) in the browser during development.
  - Uses `esbuild` (written in Go) for pre-bundling dependencies (extremely fast).
  - Instant server start and near-instant Hot Module Replacement (HMR).

### 🔹 Project Structure Highlights & Breakdown

#### 📂 Directory & File Anatomy
1. **`node_modules/`**
   - Contains all the actual code of installed dependencies/packages.
   - Very heavy; **never** push to Git (listed in `.gitignore`). Re-created anytime using `npm install`.

2. **`package.json`**
   - The manifest of your project.
   - **`scripts`**: Commands like `npm run dev` (Vite) / `npm start` (CRA), `npm run build`, etc.
   - **`dependencies`**: Core packages required in production (`react`, `react-dom`).
   - **`devDependencies`**: Tools needed only during development (e.g. `vite`, `eslint`).

3. **`package-lock.json`**
   - Records the exact versions and dependency tree installed. Ensures every machine gets identical packages.

4. **`public/`**
   - For static assets (favicons, robots.txt, static images) that shouldn't be processed by the bundler.
   - In CRA, `index.html` lives inside `public/`.

5. **`vite.config.js`** (Vite only)
   - Configuration file for Vite; configures plugins (like `@vitejs/plugin-react`) and dev server settings.

6. **`index.html`**
   - The single HTML page loaded by the browser (Single Page Application - SPA).
   - Contains `<div id="root"></div>` — the mounting point for React.
   - **Difference:**
     - **CRA**: Inside `public/index.html`. Webpack dynamically injects the JS bundle during build.
     - **Vite**: At project root (`./index.html`). Directly points to `/src/main.jsx` with `<script type="module" src="/src/main.jsx"></script>`.

7. **`src/`** (Source Folder - where you write your code)
   - **`main.jsx`** (or `index.js` in CRA):
     - JavaScript entry point.
     - Grabs the `#root` element: `ReactDOM.createRoot(document.getElementById('root')).render(<App />)`.
   - **`App.jsx`**:
     - The root React component.
   - **Custom Components** (e.g., `chai.jsx` / `Chai.js`):
     - Custom reusable UI pieces.

---

### 🔹 Important React Rules to Remember (Notebook Notes)
- **Component File Extension**:
  - In Vite: Files with JSX **must** have `.jsx` extension (e.g. `Chai.jsx`).
  - In CRA: Files can be `.js` or `.jsx`.
- **Component Naming Convention**:
  - Component names and functions **must start with a capital letter** (PascalCase: `Chai`, `App`).
  - *Why?* React distinguishes HTML tags (lowercase like `<div>`, `<p>`) from React components (uppercase like `<Chai />`).
- **Single Parent / Fragment Rule**:
  - A component can only return a **single enclosing parent element**.
  - If you don't want extra `<div>` tags in the DOM, use React Fragments: `<> ... </>` or `<React.Fragment> ... </React.Fragment>`.

---

*Notes will be continuously updated here as you progress through each lesson/topic!*
