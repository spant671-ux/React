# ⚛️ React Notes

---

## 1. What is React?

React is a declarative, component-based JavaScript library for building user interfaces, maintained by Meta (Facebook) and an open-source community.

### Key Highlights:
- **Library, not a Framework**: Focuses solely on the View layer (UI). You choose your own routing, styling, and state management tools.
- **Component-Based**: UIs are broken into small, independent, and reusable blocks of code called components.
- **Declarative**: You define *what* the UI should look like for a given state; React takes care of updating the DOM efficiently.
- **Virtual DOM (VDOM)**: React keeps a lightweight copy of the DOM in memory. When state changes, it compares the new VDOM with the previous one (reconciliation) and updates only the changed elements in the real DOM.
- **JSX (JavaScript XML)**: A syntax extension that lets you write HTML-like markup directly inside JavaScript files.
- **One-Way Data Flow**: Data passes downward from parent components to child components via `props`, making data flow predictable and easy to debug.

---

## 2. History of React

- **Created by**: **Jordan Walke**, a software engineer at Facebook.
- **2011 (The Origin - FaxJS)**:
  - Developed internally at Facebook as a prototype called **FaxJS**.
  - Built to solve real-time UI synchronization issues in Facebook's News Feed and Chat.
- **2012 (Instagram Adoption)**:
  - Facebook acquired Instagram.
  - The technology was decoupled from Facebook's internal stack so Instagram could use it for web.
- **May 2013 (Open Sourced)**:
  - Publicly announced and open-sourced at **JSConf US**.
  - Initially met with skepticism because JSX mixed HTML directly into JavaScript.
- **2015 (React Native & Core Split)**:
  - React split into two packages: `react` (core logic) and `react-dom` (browser rendering).
  - Launched **React Native** to build native mobile apps for iOS and Android.
- **2017 (React 16 - Fiber)**:
  - Complete rewrite of the reconciliation algorithm (**React Fiber**), enabling asynchronous rendering.
- **2019 (React 16.8 - The Hooks Revolution)**:
  - Introduced **Hooks** (`useState`, `useEffect`, etc.).
  - Allowed functional components to have state and lifecycle behavior without using ES6 Classes.
- **2022 (React 18 - Concurrent Features)**:
  - Added Concurrent Mode, automatic batching, and transitions (`startTransition`) for smoother UIs.
- **2024 (React 19 - Modern Era)**:
  - Introduced Actions (`useActionState`, `useOptimistic`), React Compiler, and direct Server Components support.

---

## 3. React Project Structure (Vite + React)

Below is the standard directory structure of a modern React project built with Vite:

```text
my-react-app/
├── node_modules/          # External dependencies installed via npm
├── public/                # Static assets served as-is (favicon, icons)
├── src/                   # Main source code of your application
│   ├── assets/            # Media files (images, logos, SVGs)
│   ├── App.css            # Styles for the App component
│   ├── App.jsx            # Main root React component
│   ├── index.css          # Global styles (CSS resets, base styling)
│   └── main.jsx           # Entry point that mounts React into the browser DOM
├── .gitignore             # Files and folders to ignore in Git
├── index.html             # The single HTML page served to the browser
├── package.json           # Project metadata, scripts, and dependencies
├── package-lock.json      # Exact versions of installed packages
└── vite.config.js         # Vite bundler and dev server configuration
```

---

## 4. File & Folder Breakdown

### Core Files:

- **`index.html`**
  - The primary HTML page.
  - Contains `<div id="root"></div>`, which serves as the mounting container for the entire React app.
  - Directly includes the script: `<script type="module" src="/src/main.jsx"></script>`.

- **`src/main.jsx`**
  - The JavaScript entry point.
  - Grabs the `#root` element from `index.html` using `document.getElementById('root')`.
  - Uses `createRoot` from `react-dom/client` to render `<App />` into the DOM.

- **`src/App.jsx`**
  - The top-level component that serves as the root of your UI component tree.

- **`src/index.css`**
  - Global CSS applied across the entire web application.

- **`src/App.css`**
  - Specific styling for the `App` component.

### Configuration & Dependency Files:

- **`package.json`**
  - Tracks installed libraries (`dependencies`, `devDependencies`) and scripts (e.g., `npm run dev`, `npm run build`).

- **`package-lock.json`**
  - Locks down exact dependency versions so the project installs identically on every machine.

- **`vite.config.js`**
  - Configuration file for Vite plugins, development ports, and build settings.

- **`node_modules/`**
  - Contains all installed npm packages. Never edit directly and never commit to Git.

---

## 5. Execution Flow (How It Runs)

1. **Browser requests the app** ➡️ `index.html` is loaded.
2. **`index.html` requests entry file** ➡️ loads `/src/main.jsx`.
3. **`main.jsx` runs** ➡️ finds `<div id="root"></div>` in the DOM.
4. **React initializes** ➡️ `createRoot(document.getElementById('root')).render(<App />)`.
5. **UI renders** ➡️ `App.jsx` returns JSX, which React converts into DOM nodes and paints to the screen.
