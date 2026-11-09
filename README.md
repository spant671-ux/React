# ⚛️ React Learning Journey

Welcome to my centralized React learning repository! This monorepo documents my complete journey mastering React from the ground up to production-grade applications — spanning hands-on code projects, deep-dive experiments, architectural patterns, and structured study handbooks across three progressive learning stages.

---

## 📚 Table of Contents
- [🗺️ Learning Stages Overview](#️-learning-stages-overview)
- [📖 Study Notes & Handbooks](#-study-notes--handbooks)
- [📂 Projects Directory Matrix](#-projects-directory-matrix)
  - [Stage 1: React Foundations & Core Primitives (`learning 1`)](#stage-1-react-foundations--core-primitives-learning-1)
  - [Stage 2: Component Architecture, Advanced Hooks & Global State (`learning 2`)](#stage-2-component-architecture-advanced-hooks--global-state-learning-2)
  - [Stage 3: Practical Projects, Routing & Redux Toolkit Ecosystem (`learning 3`)](#stage-3-practical-projects-routing--redux-toolkit-ecosystem-learning-3)
- [🚀 Getting Started & How to Run](#-getting-started--how-to-run)
- [🛠️ Tech Stack & Ecosystem](#️-tech-stack--ecosystem)

---

## 🗺️ Learning Stages Overview

The repository is structured into three dedicated learning tiers, each representing a distinct phase of React mastery:

```text
React/
├── learning 1/                  # Stage 1: Core Fundamentals, Fiber, Reconciliation & Custom Hooks
├── learning 2/                  # Stage 2: Deep Dive Hooks, Prop Patterns, Context API, Router & Forms
└── learning 3/                  # Stage 3: Real-World Mini-Apps, Asynchronous APIs & Redux Toolkit
```

1. **`learning 1` (Foundations & Custom Renderer)**: From scratch JSX mechanics, custom React renderer, reconciliation & fiber internals, basic hooks (`useState`, `useCallback`, `useEffect`, `useRef`), and custom hook architectures.
2. **`learning 2` (Deep Dive Hooks, Forms & Context)**: In-depth exploration of unidirectional data flow, state lifting, synthetic events, 5 lifecycle patterns of `useEffect`, Context API for prop drilling, client-side routing, and uncontrolled form validations.
3. **`learning 3` (Interactive Projects & Redux Ecosystem)**: Feature-rich applications with real-world integrations, API consumption, toast notifications, protected authentication routes, pagination, and scalable Redux Toolkit global state with shopping cart slices.

---

## 📖 Study Notes & Handbooks

All conceptual explanations, architectural breakdowns, rules, mental models, and interview cheat sheets are preserved in the dedicated study guides:

- 👉 **[Stage 1 Handbook: NOTES.md](./learning%201/NOTES.md)** — Core React philosophy, JSX compilation pipeline, Fiber reconciliation, `useState` batching, memoization rules, and custom hook guidelines.
- 👉 **[Stage 2 Handbook: notes.md](./learning%202/notes.md)** — Comprehensive notes across 12 modules covering component lifecycles, event synthetic system, Context provider pattern, `createBrowserRouter` internals, and `react-hook-form` validation schemas.

### Key Conceptual Topics Covered Across the Repo:
1. **What is React?** – Declarative UI paradigms, Virtual DOM, and state-driven reconciliation.
2. **Virtual DOM, Diffing Heuristics & React Fiber** – Fiber tree traversal, interruptible work loops, and priority scheduling.
3. **Under the Hood (`customReact`)** – Building a custom React rendering engine from pure JavaScript to DOM nodes.
4. **State Primitives (`useState`)** – Re-render triggers, functional state updates (`prev`), and batching.
5. **Memoization & Refs (`useCallback`, `useRef`)** – Referential equality, preventing child re-renders, and accessing mutable DOM nodes.
6. **Lifecycle & Side Effects (`useEffect`)** – Mount, render, dependency triggers, and cleanup functions for subscriptions and timers.
7. **Global State & Context API (`useContext`)** – Solving prop drilling, nested providers, and consumer subscription ergonomics.
8. **Client-Side Routing (`react-router-dom`)** – `createBrowserRouter`, `RouterProvider`, `NavLink`, dynamic route params (`useParams`), nested layouts (`<Outlet />`), and protected routes.
9. **High-Performance Form Management (`react-hook-form`)** – Controlled vs uncontrolled inputs, regex validation rules, error handling, and `isSubmitting` tracking.
10. **Predictable Global State (`@reduxjs/toolkit` & `react-redux`)** – Store configuration, slices, reducers, payload actions, selectors, and immutable state updates via Immer.

---

## 📂 Projects Directory Matrix

### Stage 1: React Foundations & Core Primitives (`learning 1`)

| # | Project Folder | Setup Type | Description | Key Learnings |
|---|---|---|---|---|
| 01 | [`01basicreact`](./learning%201/01basicreact) | Create React App (CRA) | Classic React setup powered by Webpack | CRA project layout, `index.js`, basic components (`Chai.js`) |
| 02 | [`01_vitereact`](./learning%201/01_vitereact) | Vite + React | Modern, lightning-fast React setup | Vite architecture, `main.jsx`, strict `.jsx` requirement, `React.createElement` testing |
| 03 | [`customReact`](./learning%201/customReact) | Vanilla JS | Building a custom React rendering engine from scratch | Understanding how React elements convert into actual browser DOM nodes (`customRender`) |
| 04 | [`02counter`](./learning%201/02counter) | Vite + React | Counter application demonstrating React state | `useState` hook, UI synchronization, value bounds (0–20), functional updates (`prevCounter`) |
| 05 | [`03tailwind-props`](./learning%201/03tailwind-props) | Vite + Tailwind CSS v4 | Reusable Card component with custom props | Tailwind CSS v4 integration (`@tailwindcss/vite`), passing props, destructuring & default values |
| 06 | [`04bgChanger`](./learning%201/04bgChanger) | Vite + Tailwind CSS v4 | Interactive background color switcher | Event callbacks in `onClick` (`() => setColor(...)`), dynamic inline styling `style={{ backgroundColor: color }}` |
| 07 | [`05passwordGenerator`](./learning%201/05passwordGenerator) | Vite + Tailwind CSS v4 | Configurable password generator with copy-to-clipboard | `useCallback` for memoization, `useEffect` for side effects, `useRef` for DOM access, `window.navigator.clipboard` |
| 08 | [`06currencyConvertor`](./learning%201/06currencyConvertor) | Vite + Tailwind CSS v4 | Real-time currency converter with live API rates | Custom hooks (`useCurrencyInfo`), `useId` for accessibility, API fetching with `useEffect`, reusable `InputBox`, barrel exports |

---

### Stage 2: Component Architecture, Advanced Hooks & Global State (`learning 2`)

| # | Project Folder | Setup Type | Description | Key Learnings |
|---|---|---|---|---|
| 01 | [`01react`](./learning%202/01react) | Vite + React | React component mounting and fragments | `createRoot`, DOM mounting, arrow vs function components, React fragments (`<>...</>`) |
| 02 | [`02comps-props-jsx`](./learning%202/02comps-props-jsx) | Vite + React | Components, Props & Asset handling | Unidirectional data flow, primitive props, local image imports as props, inline style objects |
| 03 | [`03usestate-hook`](./learning%202/03usestate-hook) | Vite + React | State management fundamentals | `useState` hook, initial state, updater function, state re-rendering, `onClick` handler |
| 04 | [`04props-extra`](./learning%202/04props-extra) | Vite + React | Advanced props patterns | **`props.children`** wrapper pattern, **passing functions as callback props**, parent-child communication |
| 05 | [`05state-lifting`](./learning%202/05state-lifting) | Vite + React | Sibling state synchronization | Lifting state up to closest common ancestor, sharing state between siblings, bidirectional synchronization |
| 06 | [`06conditional-rendering`](./learning%202/06conditional-rendering) | Vite + React | Conditional UI presentation strategies | Early returns, logical AND (`&&`), ternary operator (`condition ? A : B`), classic `if-else` |
| 07 | [`07event-handling`](./learning%202/07event-handling) | Vite + React | SyntheticEvent system & form events | SyntheticEvent system, inline vs referenced handlers, input tracking with `e.target.value`, `e.preventDefault()` |
| 08 | [`08useEffect-hook`](./learning%202/08useEffect-hook) | Vite + React | Side effects & lifecycle management | 5 variations of `useEffect`, dependency array rules, cleanup functions (`clearInterval`, `removeEventListener`), async fetch |
| 09 | [`09useContext-hook`](./learning%202/09useContext-hook) | Vite + React | Global state without prop drilling | `createContext`, Context Providers (`UserContext`, `ThemeContext`), deep consumers with `useContext()`, theme toggle |
| 10 | [`10react-router`](./learning%202/10react-router) | Vite + React Router | Client-side routing system | `createBrowserRouter`, `RouterProvider`, `NavLink` active styles, `useNavigate`, nested routes (`<Outlet />`), `useParams`, 404 route |
| 11 | [`11react-hook-form`](./learning%202/11react-hook-form) | Vite + React Hook Form | High-performance form validation | `useForm()`, `register`, validation constraints (`required`, `minLength`, `pattern`), `handleSubmit`, `errors` state, `isSubmitting` |
| 12 | [`12redux-toolkit`](./learning%202/12redux-toolkit) | Vite + Redux Toolkit | Centralized state management | `configureStore`, `createSlice`, action creators, reducer registration, `<Provider store={store}>` integration |

---

### Stage 3: Practical Projects, Routing & Redux Toolkit Ecosystem (`learning 3`)

| # | Project Folder | Setup Type | Description | Key Learnings |
|---|---|---|---|---|
| 01 | [`Counter`](./learning%203/Counter) | Vite + Tailwind CSS v4 | Minimalist state counter with clean UI | Basic state management, increment, decrement, and reset logic with Tailwind styling |
| 02 | [`TravelPlanner`](./learning%203/TravelPlanner) | Vite + Tailwind CSS v4 | Interactive travel tour planner | Expandable "Read More / Show Less" text, card removal filter (`filter()`), "No tours left" refresh state |
| 03 | [`Courses`](./learning%203/Courses) | Vite + Tailwind + Toastify | Async course directory with category filters | Async `useEffect` data pipeline, category aggregations, loading spinner, like toggle with interactive toasts |
| 04 | [`Testimonial Slider`](./learning%203/Testimonial%20Slider) | Vite + Tailwind CSS v4 | Testimonial review carousel | Left/Right index cycling with array boundary wrapping (`0 ↔ length - 1`), "Surprise Me" randomizer |
| 05 | [`FormApp`](./learning%203/FormApp) | Vite + React | Multi-field controlled form | Single unified `changeHandler`, computed object keys (`[name]: value`), immutable updates via `prevFormData` |
| 06 | [`Window Size Checker`](./learning%203/Window%20Size%20Checker) | Vite + React | Viewport dimensions tracker | `useEffect` with window `resize` event listener and cleanup function to prevent memory leaks |
| 07 | [`Blogs`](./learning%203/Blogs) | Vite + Tailwind CSS v4 | Paginated blog application with Context | Context API (`AppContext`), asynchronous post fetching with pagination controls, page navigation state |
| 08 | [`Random GIF Generator`](./learning%203/Random%20GIF%20Generator) | Vite + Axios + Tailwind | Dynamic GIF generator powered by Giphy API | Axios integration, custom hook for API fetching, tag-based and random GIF discovery |
| 09 | [`React Router`](./learning%203/React%20Router) | Vite + React Router DOM | Multi-page routing baseline | `Routes`, `Route`, `NavLink` with active states, nested routes with `MainHeader` layout wrapper |
| 10 | [`Router Project`](./learning%203/Router%20Project) | Vite + React Router DOM | Auth-enabled routing with private dashboards | Login/Signup page flows, authentication state management, `PrivateRoute` route guards |
| 11 | [`Shopping Cart`](./learning%203/Shopping%20Cart) | Vite + Redux Toolkit + Router | E-commerce shopping cart web application | Redux Toolkit store, `cartSlice` (add, remove, total calculation), cart count badge, toast notifications |

---

## 🚀 Getting Started & How to Run

Each subproject across the learning stages is an independent, self-contained application.

### 1. Modern Vite Projects (`learning 1`, `learning 2`, or `learning 3`)
Navigate into any subproject folder, install dependencies, and start the development server:

```bash
# Example from learning 1:
cd "learning 1/06currencyConvertor"
npm install
npm run dev

# Example from learning 2:
cd "learning 2/10react-router"
npm install
npm run dev

# Example from learning 3:
cd "learning 3/Shopping Cart"
npm install
npm run dev
```

Open `http://localhost:5173` (or the terminal-provided port) in your browser.

### 2. Classic Create React App (`learning 1/01basicreact`)
```bash
cd "learning 1/01basicreact"
npm install
npm start
```

### 3. Custom React Rendering Engine (`learning 1/customReact`)
The custom React project uses plain HTML and JavaScript:
- Open `learning 1/customReact/index.html` directly in your web browser, or launch it with the VS Code Live Server extension.

---

## 🛠️ Tech Stack & Ecosystem

- **UI Library:** [React 19](https://react.dev/)
- **Build Tools:** [Vite](https://vitejs.dev/), Create React App (CRA)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`), Component CSS
- **Routing:** [React Router DOM v6 / v7](https://reactrouter.com/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/), React Redux, Context API
- **Form Handling:** [React Hook Form](https://react-hook-form.com/)
- **Data Fetching:** [Axios](https://axios-http.com/), native `fetch` API
- **Icons & UI Feedback:** [React Icons](https://react-icons.github.io/react-icons/), [React-Toastify](https://fkhadra.github.io/react-toastify/)
- **Language:** Modern JavaScript (ES6+), JSX
- **Package Manager:** npm

---

*Happy Coding & Learning! 🚀*
