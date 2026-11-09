# ⚛️ React Study Notes & Handbook

A comprehensive, structured companion covering core concepts, internal mechanisms, architectural patterns, and practical lessons from the entire React learning journey — from building a custom renderer to production-grade Redux applications.

---

## 📌 Table of Contents

### Part I — Foundations & Core Primitives (`learning 1`)
1. [What is React?](#1-what-is-react)
2. [History of React](#2-history-of-react)
3. [Project Setup & Structure: CRA vs. Vite](#3-project-setup--structure-cra-vs-vite)
4. [JSX & Evaluated Expressions](#4-jsx--evaluated-expressions)
5. [How React Works Under the Hood (Custom React)](#5-how-react-works-under-the-hood-custom-react)
6. [State & Hooks: `useState` (Counter Project)](#6-state--hooks-usestate-counter-project)
7. [Virtual DOM, Reconciliation & React Fiber](#7-virtual-dom-reconciliation--react-fiber)
8. [Tailwind CSS & Props (`03tailwind-props`)](#8-tailwind-css--props-03tailwind-props)
9. [Events & Dynamic Styling (`04bgChanger`)](#9-events--dynamic-styling-04bgchanger)
10. [`useCallback`, `useEffect` & `useRef` Hooks (`05passwordGenerator`)](#10-usecallback-useeffect--useref-hooks-05passwordgenerator)
11. [Custom Hooks, `useId` & Component Design (`06currencyConvertor`)](#11-custom-hooks-useid--component-design-06currencyconvertor)

### Part II — Component Architecture, Advanced Hooks & Global State (`learning 2`)
12. [Advanced Props — Children & Callbacks](#12-advanced-props--children--callbacks)
13. [State Lifting & Sibling Synchronization](#13-state-lifting--sibling-synchronization)
14. [Conditional Rendering Patterns](#14-conditional-rendering-patterns)
15. [Event Handling & Synthetic Events Deep Dive](#15-event-handling--synthetic-events-deep-dive)
16. [`useEffect` Deep Dive — Lifecycles & Cleanup](#16-useeffect-deep-dive--lifecycles--cleanup)
17. [Global State with Context API (`useContext`)](#17-global-state-with-context-api-usecontext)
18. [Client-Side Routing with React Router](#18-client-side-routing-with-react-router)
19. [High-Performance Forms with React Hook Form](#19-high-performance-forms-with-react-hook-form)
20. [Redux Toolkit & Global State Management](#20-redux-toolkit--global-state-management)
21. [📊 Quick Revision Cheat Sheet](#-quick-revision-cheat-sheet)

---

# Part I — Foundations & Core Primitives

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
3. **Never Mutate Directly**: Writing `count = count + 1` ❌ fails because React will not know to re-render. Always call the setter function ✅.
4. **Hook Rules**: Hooks must only be called at the **top level** of functional components, never inside loops, conditions, or nested functions.

---

## 7. Virtual DOM, Reconciliation & React Fiber

### 1. What is the Virtual DOM (VDOM)?
The **Real DOM** represents the browser's parsed tree of HTML elements. Manipulating the real DOM directly is expensive because any change can trigger **browser reflow (layout recalculation)** and **repaint**.

The **Virtual DOM** is a lightweight, in-memory representation of the real DOM created as plain JavaScript objects.
- When state changes, React creates a new Virtual DOM tree.
- Instead of re-rendering the whole page, React compares this new tree with the previous one.
- Only the specific nodes that changed are patched in the actual browser DOM.

---

### 2. What is Reconciliation?
**Reconciliation** is the algorithm behind React that compares two Virtual DOM trees to determine which parts of the real DOM need to be updated.

#### The Diffing Heuristic (O(n) Complexity):
A generic tree comparison algorithm takes $O(n^3)$ time (too slow for real-time UIs). React achieves an optimal $O(n)$ comparison by relying on two key assumptions:

1. **Different Element Types Produce Different Trees**:
   - If a `<div>` changes to a `<span>`, React destroys the entire old tree below `<div>` and rebuilds the new `<span>` tree from scratch.
2. **Keys in Lists (`key` prop)**:
   - When rendering lists of children, React uses the `key` attribute to match children in the original tree with children in the new tree.
   - Without unique keys, adding an item at the beginning causes React to mutate every single child. With unique keys, React knows only one new element was inserted and moves the rest without re-rendering them.

---

### 3. What is React Fiber?

**React Fiber** is the complete rewrite of React's core reconciliation engine introduced in **React 16**.

#### Why Was Fiber Needed? (The Problem with the Old Reconciler)
Before React 16, React used the **Stack Reconciler**:
- It processed updates synchronously using standard JavaScript function call stacks.
- Once reconciliation started, it **could not be interrupted** or paused until the entire component tree finished rendering.
- If the tree was large, the main thread was blocked, causing dropped animation frames, input lag, and a stuttering UI ("jank").

#### Core Goals of Fiber:
Fiber changed the reconciler from a synchronous recursive stack to an **incremental, asynchronous work scheduler**.

Each component/DOM node is represented as a **Fiber node** (a unit of work / virtual stack frame).

Key capabilities enabled by Fiber:
- **Pause & Resume Work**: Split rendering into small chunks and yield back control to the browser between chunks.
- **Priority-Based Scheduling**: Assign different priorities to different updates:
  - **High Priority**: Immediate user inputs (typing, clicking, animations).
  - **Low Priority**: Off-screen data rendering, background API fetches.
- **Abort & Reuse Work**: Throw away in-progress render work if a newer, higher-priority update arrives.
- **Foundation for Concurrency**: Paved the way for Concurrent Mode, `startTransition`, and Suspense in React 18 & 19.

---

## 8. Tailwind CSS & Props (`03tailwind-props`)

### 1. Modern Tailwind CSS v4 Setup (Vite + React)
In Tailwind CSS v4, setup is significantly streamlined without needing `tailwind.config.js` or `postcss.config.js`:

1. **Install dependencies**:
   ```bash
   npm i tailwindcss @tailwindcss/vite
   ```
2. **Configure Vite plugin (`vite.config.js`)**:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [react(), tailwindcss()],
   })
   ```
3. **Import in CSS (`src/index.css`)**:
   ```css
   @import "tailwindcss";
   ```

---

### 2. Understanding Props in React
**Props** (short for *properties*) are the primary mechanism for passing data from a parent component down to a child component, making components modular and reusable.

#### Passing Props:
- **Strings**: Pass directly with quotes:
  ```jsx
  <Card channel="chai" btnText="Click Me" />
  ```
- **Non-string values (Numbers, Objects, Arrays, Booleans)**: Must be wrapped in curly braces `{}`:
  ```jsx
  <Card
    count={42}
    myObj={{ username: "Alex", age: 25 }}
    myArr={[1, 2, 3]}
    isLoggedIn={true}
  />
  ```

#### Receiving & Consuming Props:

**Approach 1: Using the `props` object**
```jsx
function Card(props) {
  return <h2>{props.channel}</h2>;
}
```

**Approach 2: Destructuring with Default Values (Recommended)**
Destructure specific props directly in the function parameters and assign fallback defaults:
```jsx
function Card({ channel, btnText = "Read more" }) {
  return (
    <div className="max-w-xs rounded-md bg-black text-white p-4">
      <h2>{channel}</h2>
      <button className="bg-gray-800 p-2 rounded">{btnText}</button>
    </div>
  );
}
```

#### Core Rules of Props:
- **Read-Only (Immutable)**: A child component must **never** modify its own `props`. Props are pure inputs.
- **Unidirectional**: Props always flow downward (Parent ➡️ Child).
- **Importing Images**: Local images in `src/assets` must be imported as JavaScript variables (`import pic from './assets/pic.jpg'`) before being passed as prop values.
- **Inline Styles**: Passed as JavaScript objects with camelCase properties (e.g. `style={{ borderRadius: "10px" }}`).

---

## 9. Events & Dynamic Styling (`04bgChanger`)

### 1. The `onClick` Callback Rule in React
Event handling in React differs fundamentally from standard HTML. React event listeners expect a **function reference**, not a function call.

```jsx
// ❌ WRONG: Function executes immediately during component render!
// Returns undefined as the handler and causes infinite re-render loops.
<button onClick={setColor("red")}>Red</button>

// ⚠️ LIMITED: Passes function reference, but cannot pass custom arguments.
// Automatically receives the event object 'e' as the first argument.
<button onClick={setColor}>Red</button>

// ✅ CORRECT: Wraps the function call inside an arrow function.
// React receives a function reference that executes ONLY when clicked.
<button onClick={() => setColor("red")}>Red</button>
```

---

### 2. Dynamic Inline Styling with State
In React, inline styling is defined using JavaScript objects rather than CSS strings:

```jsx
<div
  className="w-full h-screen duration-200"
  style={{ backgroundColor: color }}
>
```

- **Double Curly Braces `{{ }}`**:
  - The outer `{}` tells JSX to evaluate a JavaScript expression.
  - The inner `{}` defines a JavaScript object `{ backgroundColor: color }`.
- **CSS Properties in camelCase**:
  - `background-color` ➡️ `backgroundColor`
  - `font-size` ➡️ `fontSize`
  - `z-index` ➡️ `zIndex`
- **Dynamic Reactivity**: When `color` state updates via `setColor`, React automatically updates the element's style attribute in the DOM without re-rendering the whole page.

---

### 3. Floating UI Patterns with Tailwind CSS
In `04bgChanger`, a bottom floating control palette is built using:
- **`fixed`**: Keeps the control bar pinned on top of the viewport regardless of scrolling.
- **`bottom-12 inset-x-0`**: Places the bar 3rem from the bottom and spans it across full width for horizontal centering.
- **`flex flex-wrap justify-center gap-3`**: Keeps color buttons centered and nicely spaced on all screen sizes.
- **`duration-200`**: Smooth CSS background-color transitions when colors switch.

---

## 10. `useCallback`, `useEffect` & `useRef` Hooks (`05passwordGenerator`)

The Password Generator project brings together three essential React hooks beyond `useState`, demonstrating how to memoize functions, synchronize side effects, and directly access DOM nodes.

### 1. `useCallback` – Memoizing Functions

`useCallback` returns a **memoized version** of a callback function that only changes when one of its dependencies changes.

```jsx
import { useState, useCallback } from 'react';

const passwordGenerator = useCallback(() => {
  let pass = '';
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  if (numberAllowed) str += '0123456789';
  if (charAllowed) str += '!@#$%^&*-_+=[]{}`~';

  for (let i = 0; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  setPassword(pass);
}, [length, numberAllowed, charAllowed, setPassword]);
```

#### Why Not Just Define a Regular Function?
- In React, every re-render creates a **new instance** of every function defined inside the component.
- `useCallback` caches the function reference and only recreates it when a listed dependency changes.
- This is especially important when the function is passed as a dependency to other hooks (like `useEffect`) or passed as a prop to child components—it prevents unnecessary re-renders and infinite loops.

#### Syntax:
```jsx
const memoizedFn = useCallback(() => {
  // function body
}, [dependency1, dependency2]);
```

---

### 2. `useEffect` – Synchronizing Side Effects

`useEffect` lets you run code **after render** as a side effect, and re-run it whenever specified dependencies change.

```jsx
import { useEffect } from 'react';

useEffect(() => {
  passwordGenerator();
}, [length, numberAllowed, charAllowed, passwordGenerator]);
```

#### How It Works:
- The callback inside `useEffect` runs **after the component mounts** (initial render).
- It re-runs **only when** any value in the dependency array changes.
- In this project, whenever the user adjusts the length slider or toggles the Numbers/Characters checkboxes, the password is automatically regenerated.

#### Dependency Array Behavior:
| Dependency Array | Behavior |
|---|---|
| `useEffect(fn)` | Runs after **every** render (no array = no caching) |
| `useEffect(fn, [])` | Runs **only once** after the initial mount |
| `useEffect(fn, [a, b])` | Runs on mount **and** whenever `a` or `b` changes |

> **Important**: Omitting a dependency that the effect uses leads to stale closures (bugs where the effect reads outdated values). Always include every value the effect references.

---

### 3. `useRef` – Accessing DOM Elements Directly

`useRef` creates a **mutable ref object** (`{ current: ... }`) that persists across re-renders without causing them.

```jsx
import { useRef } from 'react';

// 1. Create the ref
const passwordRef = useRef(null);

// 2. Attach to a DOM element via the ref attribute
<input
  type="text"
  value={password}
  ref={passwordRef}
  readOnly
/>

// 3. Access the DOM node via .current
const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 101);
  window.navigator.clipboard.writeText(password);
}, [password]);
```

#### Key Points:
- **`useRef(null)`** initializes `passwordRef.current` to `null`.
- **`ref={passwordRef}`** on the `<input>` element tells React to assign the real DOM node to `passwordRef.current` after mounting.
- **`.select()`** programmatically highlights the text inside the input field, giving the user visual feedback that the password was copied.
- **`.setSelectionRange(0, 101)`** ensures the entire password text is selected regardless of length.
- **`useRef` does NOT trigger re-renders** when `.current` is mutated—unlike `useState`. This makes it ideal for storing DOM references, timers, or previous values.

---

### 4. Clipboard API: `window.navigator.clipboard`

The modern `navigator.clipboard.writeText()` API is used to copy the generated password:

```jsx
window.navigator.clipboard.writeText(password);
```

- This is a **Promise-based** asynchronous API.
- Requires the page to be served over **HTTPS** or **localhost** (Vite's dev server satisfies this).
- Replaces the older, deprecated `document.execCommand('copy')` approach.

---

### 5. How the Three Hooks Work Together

```
┌─ useState ─────────────────────────────────────────────┐
│  length, numberAllowed, charAllowed, password           │
└───────────────────────┬─────────────────────────────────┘
                        │ (dependencies change)
                        ▼
┌─ useCallback ──────────────────────────────────────────┐
│  passwordGenerator() is memoized; only recreated       │
│  when length / numberAllowed / charAllowed change      │
└───────────────────────┬────────────────────────────────┘
                        │ (passed as dependency)
                        ▼
┌─ useEffect ────────────────────────────────────────────┐
│  Runs passwordGenerator() after render whenever        │
│  any dependency changes → updates password state       │
└───────────────────────┬────────────────────────────────┘
                        │ (password displayed in input)
                        ▼
┌─ useRef ───────────────────────────────────────────────┐
│  passwordRef.current points to the <input> DOM node    │
│  Used by copyPasswordToClipboard() to select text      │
│  and copy via navigator.clipboard.writeText()          │
└────────────────────────────────────────────────────────┘
```

---

## 11. Custom Hooks, `useId` & Component Design (`06currencyConvertor`)

The Currency Convertor project introduces building **custom hooks**, designing **reusable controlled components**, fetching **live API data**, and structuring a scalable project with **barrel exports**.

### 1. Custom Hooks — Building `useCurrencyInfo`

A **custom hook** is a regular JavaScript function whose name starts with `use` and that can call other hooks internally. It encapsulates reusable stateful logic.

```javascript
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
```

#### Key Design Principles:
- **Naming Convention**: Must start with `use` — this tells React to apply hook rules (e.g., only call at the top level of a component or another hook).
- **Encapsulation**: The `fetch` logic, loading state, and data transformation are hidden inside the hook. The consuming component just gets clean data back.
- **Reactive Re-fetching**: Because `currency` is in the `useEffect` dependency array, the API is re-called automatically whenever the user switches the source currency.
- **Return Value**: Can return anything — a single value, an array, or an object. Here it returns a plain object mapping currency codes to exchange rates.

#### Usage in a Component:
```jsx
const currencyInfo = useCurrencyInfo(from);
const options = Object.keys(currencyInfo); // ["usd", "inr", "eur", ...]
```

---

### 2. `useId` — Generating Unique Accessible IDs

`useId` is a React hook that generates a **unique, stable ID** that is consistent across server and client renders.

```jsx
import { useId } from 'react';

function InputBox({ label, ... }) {
  const amountInputId = useId();

  return (
    <div>
      <label htmlFor={amountInputId}>{label}</label>
      <input id={amountInputId} type="number" />
    </div>
  );
}
```

#### Why Not Use Hardcoded IDs?
- If the same component is rendered **multiple times** on a page (e.g., a "From" `InputBox` and a "To" `InputBox`), hardcoded IDs like `id="amount"` would **collide**, breaking accessibility and causing invalid HTML.
- `useId` generates unique IDs like `:r1:`, `:r2:` automatically for each instance.
- The `htmlFor` ↔ `id` link ensures screen readers correctly associate labels with their inputs.

> **Rule**: Never use `useId` for generating `key` props in lists. Use `useId` exclusively for accessibility attributes (`id`, `htmlFor`, `aria-describedby`, etc.).

---

### 3. Reusable Component Design — `InputBox`

The `InputBox` component demonstrates a **fully controlled, configurable component** pattern:

```jsx
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  // Component renders an amount input + currency dropdown
}
```

#### Design Patterns Used:
1. **Controlled Component**: The `amount` value and `selectCurrency` value are controlled by the parent — the component never owns its own state.
2. **Callback Props**: `onAmountChange` and `onCurrencyChange` let the parent decide how to handle changes.
3. **Guard Checks**: `onAmountChange && onAmountChange(Number(e.target.value))` prevents errors when the callback is not provided (e.g., the "To" field has no `onAmountChange`).
4. **Default Props via Destructuring**: Fallback values like `currencyOptions = []` and `className = ""` ensure the component works even with minimal props.
5. **`className` Passthrough**: Accepting `className` as a prop and merging it with `` `bg-white p-3 ... ${className}` `` allows the parent to extend styling without modifying the component.

---

### 4. Barrel Exports — Clean Import Paths

A **barrel file** (`index.js`) re-exports components from a directory, enabling cleaner import paths:

```javascript
// src/components/index.js
import InputBox from './InputBox';
export { InputBox };
```

#### Consumer Benefits:
```jsx
// Without barrel: importing from exact file path
import InputBox from './components/InputBox';

// With barrel: importing from the directory
import { InputBox } from './components';
```

- **Scales well**: As you add more components (`Card`, `Header`, `Footer`), you add one line to the barrel file and all consumers get access via the same import path.
- **Encapsulation**: Internal file structure can be refactored without updating every consumer's import path.

---

### 5. API Data Fetching with `fetch` + `useEffect`

This project fetches live currency exchange rates from a free public API:

```jsx
useEffect(() => {
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((res) => setData(res[currency]));
}, [currency]);
```

#### Key Concepts:
- **`fetch` inside `useEffect`**: Side effects (API calls, subscriptions, DOM mutations) must be performed inside `useEffect`, never during the render phase.
- **Chained `.then()`**: The `fetch` API returns a `Response` object. The first `.then()` parses the JSON body; the second `.then()` extracts the relevant nested data.
- **Dependency-Driven Re-fetch**: Placing `currency` in the dependency array means the API is called once on mount and again whenever the source currency changes.

---

### 6. The Swap Pattern

The swap button exchanges the "From" and "To" currencies along with their amounts:

```jsx
const swap = () => {
  setFrom(to);
  setTo(from);
  setConvertedAmount(amount);
  setAmount(convertedAmount);
};
```

#### How React Batching Makes This Work:
- All four `setState` calls use the **snapshot values** from the current render (`from`, `to`, `amount`, `convertedAmount`).
- React **batches** these calls into a single re-render, so there's no intermediate inconsistent state.
- Without batching, `setFrom(to)` would update `from` before `setTo(from)` runs, causing both to become the same value. Batching guarantees all updates see the same pre-update snapshot.

---

### 7. Form Handling with `onSubmit` & `e.preventDefault()`

The conversion is triggered by a form submission instead of a plain button click:

```jsx
<form onSubmit={(e) => {
  e.preventDefault();
  convert();
}}>
```

- **`e.preventDefault()`**: Prevents the browser's default form submission behavior (which would cause a full page reload).
- **Why a `<form>` instead of just a `<button>`?**: Using a form allows the user to press **Enter** on the keyboard to trigger conversion, improving UX and accessibility.
- **`type="button"` on Swap**: The swap button explicitly sets `type="button"` to prevent it from accidentally submitting the form (buttons inside a `<form>` default to `type="submit"`).

---

# Part II — Component Architecture, Advanced Hooks & Global State

---

## 12. Advanced Props — Children & Callbacks

### 1. Core Purpose
* **`props.children`**: Enables wrapper/container components that project whatever nested JSX is placed between their tags.
* **Callback Props**: Allows a child component to communicate events up to its parent by executing a function received as a prop.

### 2. How It Works
```
┌─ Parent: App.jsx (Holds count state) ────────────────┐
│                                                        │
│  handleClick ─────────passes as prop──────────▶ Child │
│                                                        │
│  ◀──────────User click executes handleClick──── Child │
└────────────────────────────────────────────────────────┘
```

### 3. Essential Patterns

**Pattern 1: Container Component with `props.children`**
```jsx
const Card = (props) => {
  return <div className="card-box">{props.children}</div>
}

// Usage in App.jsx:
<Card>
  <h1>Course Title</h1>
  <p>Enclosed text rendered via props.children</p>
</Card>
```

**Pattern 2: Passing Functions as Props (Callback Props)**
```jsx
// Parent: App.jsx
function App() {
  const [count, setCount] = useState(0);
  function handleClick() { setCount(count + 1); }

  return <Button incrementCount={handleClick} text="Click Me" />
}

// Child: Button.jsx
const Button = (props) => {
  return (
    <button onClick={props.incrementCount}>
      {props.text}
    </button>
  )
}
```

### 4. Golden Rules:
* **Content Projection**: Use `props.children` when building reusable cards, modals, dialogs, and layout containers.
* **Child-to-Parent Communication**: React does not allow data to flow upward directly; parents pass a function, and the child calls that function with data as arguments.

---

## 13. State Lifting & Sibling Synchronization

### 1. Core Purpose
Sibling components cannot communicate directly. When two or more siblings need to share or synchronize the same data, you **lift the state up** to their closest common ancestor.

### 2. How It Works
```
┌─ Common Parent: App.jsx (Holds state: name) ─────────┐
│                                                        │
│   ┌── Child 1: Card ──┐    ┌── Child 2: Card ──┐     │
│   │ Input field        │    │ Display card       │     │
│   │ onChange → setName │    │ Shows: {name}      │     │
│   └────────────────────┘    └────────────────────┘     │
│                                                        │
│  Typing in Card 1 updates parent → re-renders Card 2  │
└────────────────────────────────────────────────────────┘
```

### 3. Essential Syntax
```jsx
// Parent (src/App.jsx) - Single Source of Truth
import Card from "./components/Card"
import { useState } from "react"

function App() {
  const [name, setName] = useState('');

  return (
    <div>
      <Card title="Card 1" name={name} setName={setName}/>
      <Card title="Card 2" name={name} setName={setName}/>
    </div>
  )
}
export default App
```

```jsx
// Child (src/components/Card.jsx)
const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>{props.title} value: {props.name}</p>
    </div>
  )
}
export default Card
```

### 4. Golden Rules:
* **Single Source of Truth**: State lives in one common place (`App.jsx`), avoiding duplicate, out-of-sync variables.
* **Two-Way Synchronization**: Typing into `Card 1` updates the parent state, which immediately re-renders and reflects in `Card 2`.

---

## 14. Conditional Rendering Patterns

### 1. Core Purpose
Conditionally display different UI components or elements depending on state variables (such as authentication or loading status).

### 2. The 4 Core Patterns Cheat Sheet
```jsx
// 1. Early Return (Guard Clause)
if (!isLoggedIn) {
  return <LoginBtn />
}
return <LogoutBtn />

// 2. Logical AND Operator (&&) - Render element or nothing
{isLoggedIn && <LogoutBtn />}

// 3. Ternary Operator (? :) - Clean inline binary toggle
{isLoggedIn ? <LogoutBtn /> : <LoginBtn />}

// 4. Classic if-else block
let btn;
if (isLoggedIn) { btn = <LogoutBtn />; } else { btn = <LoginBtn />; }
return <div>{btn}</div>
```

### 3. Golden Rules:
* **Best for Toggles**: Use **Ternary (`? :`)** for inline choices between two different components.
* **Best for Show/Hide**: Use **Logical AND (`&&`)** when you want to render something only if a condition is true.
* **Best for Guards**: Use **Early Return** at the top of a component for loading spinners or unauthorized states.

---

## 15. Event Handling & Synthetic Events Deep Dive

### 1. Core Purpose
React wraps native browser DOM events in a normalized wrapper called **`SyntheticEvent`**. This ensures identical event behavior across all browsers (Chrome, Safari, Firefox, Edge).

### 2. How It Works
```
Browser Event (click / input)
        │
        ▼
React SyntheticEvent (normalized cross-browser wrapper)
        │
        ▼
Handler Function (onClick / onChange / onSubmit)
        │
        ▼
Action (Update State / e.preventDefault())
```

### 3. Essential Patterns
```jsx
function App() {
  // 1. Passing function reference (correct)
  function handleClick() {
    alert("Button clicked!");
  }

  // 2. Input event reading value
  function handleInputChange(e) {
    console.log("Current text:", e.target.value);
  }

  // 3. Form submit with preventDefault
  function handleSubmit(e) {
    e.preventDefault(); // Prevents browser page reload
    alert("Form submitted safely!");
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Correct: function reference without parentheses */}
      <button type="button" onClick={handleClick}>Click Me</button>
      
      <input type="text" onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  )
}
export default App
```

### 4. Golden Rules:
* **Reference vs Call**: Always pass the function reference (`onClick={handleClick}` ✅). Never write `onClick={handleClick()}` ❌ (this calls the function immediately on render!).
* **Form Submission**: Always call `e.preventDefault()` on form submit handlers to prevent the browser from reloading the entire page.

---

## 16. `useEffect` Deep Dive — Lifecycles & Cleanup

### 1. Core Purpose
Handles **side effects** (operations outside React's pure rendering flow), such as API fetching, setting timers, window event listeners, and manual cleanup.

### 2. Lifecycle Flow
```
Component Mounts
        │
        ▼
Run useEffect Setup Function
        │
        ▼
  Dependencies Changed?
   ┌────┴────┐
   No        Yes
   │         │
   ▼         ▼
  Idle    Run Cleanup Function (previous effect)
   │         │
   │         ▼
   │    Re-run Setup Function
   │
   ▼
Component Unmounts
        │
        ▼
Run Final Cleanup (clearTimer / removeListener)
```

### 3. The 4 Dependency Rules
```jsx
import { useEffect, useState } from 'react'

// 1. No dependency array -> Runs after EVERY single render
useEffect(() => {
  console.log("Runs on every render");
});

// 2. Empty array [] -> Runs ONLY ONCE on mount (Ideal for API fetching)
useEffect(() => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => setData(data));
}, []);

// 3. With dependencies [count] -> Runs on mount AND when count changes
useEffect(() => {
  console.log("Count changed to:", count);
}, [count]);

// 4. With Cleanup function -> Runs before re-running effect & on unmount
useEffect(() => {
  const timer = setInterval(() => setSec(s => s + 1), 1000);
  return () => clearInterval(timer); // Prevents memory leaks
}, []);
```

### 4. Cleanup Examples

**Timer Cleanup:**
```jsx
useEffect(() => {
  const timer = setInterval(() => setSec(s => s + 1), 1000);
  return () => clearInterval(timer);
}, []);
```

**Event Listener Cleanup:**
```jsx
useEffect(() => {
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

### 5. Golden Rules:
* **Always Clean Up**: Timers (`setInterval`), web sockets, and event listeners (`addEventListener`) must return a cleanup function to avoid memory leaks.
* **Data Fetching**: Put initial API calls inside `useEffect(..., [])` with an empty array so they run once.
* **Stale Closures**: Omitting a dependency that the effect uses leads to bugs where the effect reads outdated values. Always include every value the effect references.

---

## 17. Global State with Context API (`useContext`)

### 1. Core Purpose
Eliminates **Prop Drilling** (the tedious passing of props down through intermediary components that do not need them). Provides direct global access to state anywhere in the component tree.

### 2. How It Works
```
┌─ App.jsx (UserContext.Provider value='Santosh') ──────┐
│                                                        │
│  Child A (Passthrough - No props needed)               │
│     │                                                  │
│     └─ Child B (Passthrough - No props needed)         │
│           │                                            │
│           └─ Child C (Consumer)                        │
│                 │                                      │
│                 └─ useContext(UserContext) ◀── Direct!  │
└────────────────────────────────────────────────────────┘
```

### 3. The 3-Step Recipe

**Step 1: Create Context**
```jsx
// In App.jsx (or separate file)
import { createContext, useState } from 'react'
export const UserContext = createContext();
```

**Step 2: Wrap children in Provider & pass value**
```jsx
function App() {
  const [user, setUser] = useState({ name: "Santosh" });

  return (
    <UserContext.Provider value={user}>
      <ChildA />
    </UserContext.Provider>
  )
}
export default App
```

**Step 3: Consume Context directly in any nested component**
```jsx
import { useContext } from 'react'
import { UserContext } from '../App'

const ChildC = () => {
  const user = useContext(UserContext); // Direct access — no prop drilling!
  return <h1>Hello, {user.name}</h1>
}
export default ChildC
```

### 4. Golden Rules:
* **Create, Provide, Consume**: 1. `createContext()`, 2. `<Context.Provider value={...}>`, 3. `useContext(Context)`.
* **Use Case**: Best for global data like current user session, UI themes (dark/light), and app settings.
* **Multiple Contexts**: You can nest multiple providers (`UserContext.Provider` wrapping `ThemeContext.Provider`) for different categories of global state.

---

## 18. Client-Side Routing with React Router

### 1. Core Purpose
Enables **Single Page Applications (SPAs)** where route changes dynamically swap views without full browser reloads. Supports dynamic params, nested layouts, and 404 handling.

### 2. How It Works
```
createBrowserRouter
    │
    ├── Path '/'              → renders Home
    ├── Path '/about'         → renders About
    ├── Path '/dashboard'     → renders Dashboard
    │       ├── '/courses'    → renders inside <Outlet />
    │       ├── '/reports'    → renders inside <Outlet />
    │       └── '/mocktest'   → renders inside <Outlet />
    ├── Path '/student/:id'   → renders ParamComp (dynamic)
    └── Path '*'              → renders NotFound (404)
```

### 3. Essential Syntax

**Router Configuration (`App.jsx`):**
```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Courses from './components/Courses'
import ParamComp from './components/ParamComp'
import NotFound from './components/NotFound'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { 
    path: '/dashboard', 
    element: <Dashboard />,
    children: [
      { path: 'courses', element: <Courses /> } // Renders in <Outlet />
    ]
  },
  { path: '/student/:id', element: <ParamComp /> },
  { path: '*', element: <NotFound /> } // 404 Wildcard
]);

function App() {
  return <RouterProvider router={router} />
}
export default App
```

**Core Router Hooks & Components:**
```jsx
// 1. Active Link Styling:
<NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>

// 2. Programmatic Navigation:
const navigate = useNavigate();
navigate('/dashboard');

// 3. Dynamic URL Params (/student/:id):
const { id } = useParams();

// 4. Nested Route Viewport inside Dashboard.jsx:
<Outlet />
```

**Protected Routes Pattern:**
```jsx
// PrivateRoute component guards authenticated routes
const PrivateRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) return <Navigate to="/login" />;
  return children;
};

// Usage:
<Route path='/dashboard' element={
  <PrivateRoute isLoggedIn={isLoggedIn}>
    <Dashboard />
  </PrivateRoute>
} />
```

### 4. Golden Rules:
* **No Reloads**: Use `<NavLink>` or `<Link>` instead of `<a href="...">` to prevent full browser refreshes.
* **Nested Viewports**: Parent components must render `<Outlet />` for child routes defined under `children` to display.
* **Dynamic Params**: Colons denote variable path segments (`:id`), extracted using `useParams()`.
* **Protected Routes**: Wrap private route elements in a guard component that checks authentication state before rendering.

---

## 19. High-Performance Forms with React Hook Form

### 1. Core Purpose
Traditional forms with `useState` and `onChange` re-render the **entire component on every single keystroke**. **React Hook Form** uses **uncontrolled inputs via React `ref`s**, providing zero-rerender typing, built-in validation rules, and automatic error handling.

### 2. How It Works
```
User clicks Submit
        │
        ▼
handleSubmit intercepted
        │
        ▼
  Validations Pass?
   ┌────┴────┐
   No        Yes
   │         │
   ▼         ▼
Populate    Set isSubmitting = true
errors      │
object      ▼
         Execute onSubmit (API call)
            │
            ▼
         Promise Resolves → isSubmitting = false
```

### 3. Essential Syntax
```jsx
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  async function onSubmit(data) {
    await new Promise(r => setTimeout(r, 2000)); // Simulate API delay
    console.log("Form Submitted:", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 1. Register input with validation constraints */}
      <input 
        className={errors.firstname ? 'input-error' : ''}
        {...register('firstname', { 
          required: "First name is required", 
          minLength: { value: 3, message: "Min 3 characters" } 
        })} 
      />
      {/* 2. Display field error message */}
      {errors.firstname && <p className="error-msg">{errors.firstname.message}</p>}

      {/* 3. Regex pattern constraint */}
      <input 
        {...register('lastname', { 
          pattern: { value: /^[A-Za-z]+$/i, message: "Letters only" } 
        })} 
      />
      {errors.lastname && <p className="error-msg">{errors.lastname.message}</p>}

      {/* 4. Disable submit button during active submission */}
      <input 
        type="submit" 
        disabled={isSubmitting} 
        value={isSubmitting ? "Submitting..." : "Submit"} 
      />
    </form>
  )
}
export default App
```

### 4. Golden Rules:
* **Zero Typing Re-renders**: `register` connects inputs directly through `ref`s without triggering component state updates on each keystroke.
* **Auto-Validation**: `handleSubmit` validates all constraints *before* calling your `onSubmit` function. If invalid, `onSubmit` is never executed.
* **Prevent Duplicate Submits**: Use `formState.isSubmitting` to disable the submit button during asynchronous API requests.

---

## 20. Redux Toolkit & Global State Management

### 1. Core Purpose
While Context API works for small-to-medium apps, large applications with frequent, complex state updates benefit from **Redux Toolkit** — a predictable, centralized state container with immutable updates powered by **Immer**.

### 2. How It Works
```
┌─ Component ───────────────────────────────────────────┐
│  const count = useSelector(state => state.counter.value)
│  const dispatch = useDispatch()                        │
│                                                        │
│  dispatch(increment())   ────▶  Redux Store            │
│  dispatch(decrement())   ────▶  Runs Reducer           │
│  dispatch(incrementByAmount(5)) ▶ Updates State        │
│                                                        │
│  Store state changes  ◀────── Re-renders component     │
└────────────────────────────────────────────────────────┘
```

### 3. The 3-Step Setup

**Step 1: Create a Slice (reducer + actions)**
```jsx
// src/features/counter/counterSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1  // Immer makes this safe (immutable under the hood)
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

// Auto-generated action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

**Step 2: Configure the Store**
```jsx
// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})
```

**Step 3: Provide Store & Consume in Components**
```jsx
// src/main.jsx - Wrap app with Provider
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
```

```jsx
// Any component - Read state & dispatch actions
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice'

function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  )
}
```

### 4. Golden Rules:
* **Immer Integration**: You can write "mutating" syntax (`state.value += 1`) inside reducers — Redux Toolkit uses Immer internally to produce immutable updates safely.
* **Slices = Reducer + Actions**: `createSlice` auto-generates action creators and action types from reducer function names.
* **`useSelector`**: Reads data from the store. Component re-renders only when the selected value changes.
* **`useDispatch`**: Returns the `dispatch` function to send actions to the store.
* **When to Use**: Prefer Redux Toolkit over Context API when state is updated frequently, shared across many distant components, or involves complex update logic.

---

## 📊 Quick Revision Cheat Sheet

| # | Core Topic | Primary Hook / API | One-Line Memory Hook |
| :--- | :--- | :--- | :--- |
| **01** | **What is React?** | Declarative, Component-Based Library | UI-State Synchronization: update data → React updates every UI reference. |
| **02** | **History** | FaxJS → React 19 | 2011 prototype → 2013 open source → 2017 Fiber → 2019 Hooks → 2024 Compiler. |
| **03** | **Setup (CRA vs Vite)** | `npm create vite@latest` | Vite = ESM-native, instant HMR; CRA = deprecated Webpack. |
| **04** | **JSX** | `{}` expressions | Only expressions inside braces; statements (`if`, `for`) are not allowed. |
| **05** | **Under the Hood** | `React.createElement()` | JSX → createElement → JS Object → Real DOM. |
| **06** | **State (`useState`)** | `useState(init)` | Reactive variables whose setters trigger component re-render. |
| **07** | **Virtual DOM & Fiber** | Diffing + Fiber Nodes | $O(n)$ heuristic diffing; Fiber enables pause, resume, and priority scheduling. |
| **08** | **Props** | `props.name`, destructuring | Immutable data flowing strictly top-down (Parent → Child). |
| **09** | **Events & Styling** | `onClick={() => fn()}` | Pass function reference, not call; inline styles as JS objects. |
| **10** | **useCallback, useEffect, useRef** | Memoize, Side-effect, DOM ref | Cache functions, sync effects with deps, access DOM without re-renders. |
| **11** | **Custom Hooks & useId** | `useCurrencyInfo`, `useId` | Encapsulate reusable logic; generate unique accessible IDs. |
| **12** | **Advanced Props** | `props.children`, callbacks | Container wrappers & child-to-parent event notification. |
| **13** | **State Lifting** | Common Parent State | Lift state up to closest ancestor to sync sibling components. |
| **14** | **Conditional Rendering** | `? :`, `&&`, early return | Render dynamic layouts based on state conditions. |
| **15** | **Synthetic Events** | `SyntheticEvent`, `preventDefault` | Cross-browser normalized events; pass function reference without `()`. |
| **16** | **useEffect Lifecycles** | `useEffect(fn, [deps])` | Post-render lifecycle: API calls, timers, and unmount cleanups. |
| **17** | **Context API** | `createContext`, `useContext` | Eliminate prop drilling by broadcasting state directly to consumers. |
| **18** | **React Router** | `createBrowserRouter`, `<Outlet />` | SPAs without reload: active links, nested routes, dynamic `:id`, protected routes. |
| **19** | **React Hook Form** | `useForm`, `register`, `handleSubmit` | Uncontrolled high-performance forms with built-in schema validation. |
| **20** | **Redux Toolkit** | `createSlice`, `useSelector`, `useDispatch` | Centralized predictable state: slices auto-generate actions from reducers. |

---

*Part of the ⚛️ React Learning Journey — Happy Coding & Learning! 🚀*
