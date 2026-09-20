# ⚛️ React Study Notes & Handbook

A neat, structured companion covering core concepts, internal mechanisms, and practical lessons from the projects.

---

## 📌 Table of Contents
1. [What is React?](#1-what-is-react)
2. [History of React](#2-history-of-react)
3. [Project Setup & Structure: CRA vs. Vite](#3-project-setup--structure-cra-vs-vite)
4. [JSX & Evaluated Expressions](#4-jsx--evaluated-expressions)
5. [How React Works Under the Hood (Custom React)](#5-how-react-works-under-the-hood-custom-react)
6. [State & Hooks: `useState` (Counter Project)](#6-state--hooks-usestate-counter-project)

---

## 1. What is React?

**React** is a declarative, component-based JavaScript library designed by Meta for building dynamic user interfaces.

### Core Problem Solved by React:
In vanilla JavaScript, updating multiple UI elements in response to a data change requires manual imperative DOM manipulation (`document.getElementById`, `innerHTML`, `textContent`). If data changes in 5 places, you have to manually update all 5 places.
React solves this through **UI-State Synchronization**: You update the data (state), and React automatically updates every corresponding UI element.

### Core Highlights:
- **Library, not Framework**: Focuses strictly on the View layer. You choose your routing, styling, and state management tools.
- **Component-Based**: UIs are constructed using reusable, independent building blocks.
- **Declarative**: You declare *what* the UI should look like for a given state; React handles DOM reconciliation.
- **Virtual DOM (VDOM)**: A lightweight representation of the real DOM in memory. React calculates differences (diffing) and performs batch updates to the real DOM.
- **One-Way Data Flow**: Data flows unidirectionally from parent to child via `props`.

---

## 2. History of React

- **Created by**: **Jordan Walke**, a software engineer at Facebook (Meta).
- **2011 (FaxJS)**: Built internally at Facebook as a prototype named **FaxJS** to solve synchronization bugs in Facebook's News Feed and Chat.
- **2012 (Instagram)**: Adopted by Instagram after its acquisition by Facebook, leading to React being decoupled from Facebook's internal stack.
- **May 2013 (Open Sourced)**: Jordan Walke officially released React at **JSConf US**.
- **2015 (React Native & Core Split)**: Split into `react` (core logic) and `react-dom` (browser rendering); launched **React Native** for mobile.
- **2017 (React 16 - Fiber)**: Complete rewrite of the reconciliation algorithm to enable cooperative, non-blocking rendering.
- **2019 (React 16.8 - Hooks)**: Introduced **Hooks** (`useState`, `useEffect`), transitioning the ecosystem from Class components to functional components.
- **2022 (React 18)**: Concurrent rendering, automatic batching, and `startTransition`.
- **2024+ (React 19)**: Actions (`useActionState`, `useOptimistic`), React Compiler, and first-class Server Components.

---

## 3. Project Setup & Structure: CRA vs. Vite

### Comparison:

| Feature | Create React App (`01basicreact`) | Vite + React (`01_vitereact`) |
|---|---|---|
| **Bundler** | Webpack (bundles entire app upfront) | Vite (powered by native ES Modules & esbuild) |
| **Speed** | Heavy, slower startup and hot reload | Ultra-fast startup and instant Hot Module Replacement (HMR) |
| **`index.html` Location** | Inside `/public/index.html` | At root `/index.html` (acts as the entry point) |
| **File Extension** | Allows JSX inside plain `.js` files | Strictly requires `.jsx` for files containing JSX |
| **Entry Point** | `src/index.js` | `src/main.jsx` |
| **Status** | Deprecated | Industry Standard |

### Standard Modern Folder Structure (Vite):

```text
my-react-app/
├── node_modules/       # Installed packages from npm
├── public/             # Raw static assets served directly
├── src/                # Development source code
│   ├── assets/         # Images, SVGs, media bundled by Vite
│   ├── App.css         # Styles for root App component
│   ├── App.jsx         # Root component
│   ├── index.css       # Global stylesheet (resets, tokens)
│   └── main.jsx        # JavaScript entry point (mounts to DOM)
├── index.html          # HTML shell containing <div id="root"></div>
├── package.json        # Manifest (scripts, dependencies)
├── package-lock.json   # Exact dependency version lockfile
└── vite.config.js      # Vite build configuration
```

---

## 4. JSX & Evaluated Expressions

### What is JSX?
**JSX** (JavaScript XML) is a syntax extension for JavaScript that looks like HTML. It allows you to write HTML structure and JavaScript logic side-by-side.

### Core Rules of JSX:
1. **Single Root Element**: Every component must return a single parent tag. Use a **React Fragment** (`<> ... </>`) to avoid adding unnecessary nodes to the DOM.
2. **Close All Tags**: All tags must be explicitly closed (`<img />`, `<br />`, `<input />`).
3. **camelCase Attributes**:
   - `class` ➡️ `className` (since `class` is a reserved keyword in JS)
   - `for` ➡️ `htmlFor`
   - `onclick` ➡️ `onClick`

### Evaluated Expressions `{}`:
Inside JSX, curly braces `{}` are used to inject JavaScript:

```jsx
function App() {
  const username = "chai aur react";

  return (
    <h1>Hello, {username}!</h1>
  );
}
```

> **Crucial Rule**: Only **expressions** (code that resolves to a final value) can go inside `{}`. You **cannot** put JavaScript statements (like `if...else` statements or `for` loops) directly inside `{}` because `{}` expects an evaluated value.

---

## 5. How React Works Under the Hood (Custom React)

Browsers do not understand JSX directly. React transforms JSX into JavaScript objects before rendering them to the real DOM.

### The Transformation Pipeline:
```
1. JSX: 
   <a href="https://google.com" target="_blank">Click me</a>
                      │
                      ▼ (Compiler: Babel / esbuild)
2. React.createElement:
   React.createElement('a', { href: 'https://google.com', target: '_blank' }, 'Click me')
                      │
                      ▼
3. React Element (Plain JavaScript Object):
   {
     type: 'a',
     props: { href: 'https://google.com', target: '_blank' },
     children: 'Click me'
   }
                      │
                      ▼ (ReactDOM.render / customRender)
4. Real Browser DOM:
   <a href="https://google.com" target="_blank">Click me</a>
```

### Building a Custom Renderer (`customReact`):
To understand how React mounts an object tree into the DOM, we built our own minimal renderer:

```javascript
function customRender(reactElement, container) {
  // 1. Create the DOM element based on type
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  // 2. Attach props dynamically as DOM attributes
  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // 3. Append to target container
  container.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click me to visit google',
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
```

---

## 6. State & Hooks: `useState` (Counter Project)

In vanilla JavaScript, updating a variable does not automatically notify the UI to re-render.

```javascript
let counter = 15;
const addValue = () => {
  counter = counter + 1; // Variable increments, but UI stays 15!
};
```

### The Solution: React State
To reflect changes on the screen, state updates must be managed through React's rendering system using the `useState` hook.

```jsx
import { useState } from 'react';

function App() {
  // counter: current state value
  // setCounter: dispatcher function to update state and trigger re-render
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    // Clamping to a maximum value of 20
    setCounter((prev) => Math.min(prev + 1, 20));
  };

  const removeValue = () => {
    // Clamping to a minimum value of 0
    setCounter((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}
```

### Key Takeaways on `useState`:
1. **Multi-location UI Sync**: Updating `counter` via `setCounter` updates every place `{counter}` is used across the component automatically.
2. **Batching & Functional Updates**:
   - Calling `setCounter(counter + 1)` multiple times in a row within one handler batches the calls (React sees the same snapshot value).
   - Use the callback form `setCounter(prev => prev + 1)` when the new state depends directly on the previous state to guarantee accuracy.
