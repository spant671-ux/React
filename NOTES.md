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
7. [Virtual DOM, Reconciliation & React Fiber](#7-virtual-dom-reconciliation--react-fiber)
8. [Tailwind CSS & Props (`03tailwind-props`)](#8-tailwind-css--props-03tailwind-props)
9. [Events & Dynamic Styling (`04bgChanger`)](#9-events--dynamic-styling-04bgchanger)
10. [`useCallback`, `useEffect` & `useRef` Hooks (`05passwordGenerator`)](#10-usecallback-useeffect--useref-hooks-05passwordgenerator)

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
