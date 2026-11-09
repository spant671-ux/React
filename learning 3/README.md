# ⚛️ React 3 — Practical Projects & UI Engineering

Welcome to the **React 3** workspace! This repository contains a collection of hands-on, real-world mini-applications and UI components built with **React 19**, **Vite**, and **Tailwind CSS v4**. 

Each project is designed to isolate and master essential React patterns — ranging from multi-field controlled forms, dynamic array state manipulation, async API integration with toast notifications, and interactive slider logic, to lifecycle event cleanups and state lifting.

---

## 📚 Table of Contents
- [📂 Repository Architecture](#-repository-architecture)
- [🌟 Projects Showcase Matrix](#-projects-showcase-matrix)
- [🚀 Quick Start & How to Run](#-quick-start--how-to-run)
- [🔍 In-Depth Project Breakdowns](#-in-depth-project-breakdowns)
  - [1. Counter](#1-counter)
  - [2. TravelPlanner](#2-travelplanner)
  - [3. Courses](#3-courses)
  - [4. Testimonial Slider](#4-testimonial-slider)
  - [5. FormApp](#5-formapp)
  - [6. Window Size Checker](#6-window-size-checker)
- [🧠 Core React Patterns Mastered](#-core-react-patterns-mastered)
- [🛠️ Tech Stack & Ecosystem](#️-tech-stack--ecosystem)

---

## 📂 Repository Architecture

```text
React3/
├── Counter/                     # Project 1: Minimalist state counter with custom styling
│   ├── src/
│   │   ├── App.jsx              # Increment, decrement, and reset logic
│   │   ├── App.css
│   │   ├── index.css            # Tailwind CSS setup
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── TravelPlanner/               # Project 2: Interactive travel tour planner
│   ├── src/
│   │   ├── components/
│   │   │   ├── Card.jsx         # Tour card with collapsible description & remove button
│   │   │   └── Tours.jsx        # Tour list container with responsive grid
│   │   ├── images/              # Tour destination assets (Agra, Goa, Jaipur, etc.)
│   │   ├── App.jsx              # Tour removal, empty-state fallback, and refresh logic
│   │   ├── data.js              # Initial tour data and descriptions
│   │   ├── App.css              # Custom layout and button styles
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── Courses/                     # Project 3: Async API course browser with category filters
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx       # Header navigation
│   │   │   ├── Filter.jsx       # Category button filter bar (All, Dev, Business, etc.)
│   │   │   ├── Cards.jsx        # Grid aggregator flattening categories & filtering
│   │   │   ├── Card.jsx         # Course card with like toggle & toast notifications
│   │   │   └── Spinner.jsx      # Loading animation component
│   │   ├── App.jsx              # Async fetch pipeline, loading state, category selection
│   │   ├── data.js              # API endpoint & category definitions
│   │   ├── index.css            # Tailwind CSS v4 theme & utilities
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── Testimonial Slider/          # Project 4: Interactive customer testimonial carousel
│   ├── src/
│   │   ├── components/
│   │   │   ├── Card.jsx         # Review details, circular avatar, and quote icons
│   │   │   └── Testimonials.jsx # Prev/Next carousel navigation & surprise picker
│   │   ├── App.jsx              # Centered hero card layout
│   │   ├── data.js              # Reviewers dataset (names, jobs, avatars, text)
│   │   ├── index.css            # Tailwind CSS styling
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── FormApp/                     # Project 5: Controlled form with dynamic multi-field handler
│   ├── src/
│   │   ├── App.jsx              # Unified changeHandler with computed properties & prevFormData
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── Window Size Checker/         # Project 6: Viewport resize tracker & lifecycle cleanups
│   ├── src/
│   │   ├── App.jsx              # useEffect with window 'resize' listener and cleanup
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md                    # Comprehensive repository documentation
```

---

## 🌟 Projects Showcase Matrix

| # | Project | Tech Stack | Core Concepts | Highlights |
|:---:|:---|:---|:---|:---|
| **01** | [`Counter`](./Counter) | React 19, Tailwind CSS v4, Vite | Basic State, Event Handlers | Clean UI with increment, decrement, and reset actions. |
| **02** | [`TravelPlanner`](./TravelPlanner) | React 19, Tailwind CSS v4, Vite | List Rendering, State Lifting, Conditional Fallback | Collapsible "Read More / Show Less" text, card removal filter, and "No tours left" refresh state. |
| **03** | [`Courses`](./Courses) | React 19, Tailwind CSS v4, React Icons, React-Toastify | Async `useEffect`, API Fetching, Multi-Category Filtering | Real API integration, loading spinner, category pills, like toggle with interactive toast notifications. |
| **04** | [`Testimonial Slider`](./Testimonial%20Slider) | React 19, Tailwind CSS v4, React Icons | Carousel State, Array Boundary Wrap, Randomizer | Left/Right index cycling with boundary wrapping (`0 ↔ length - 1`) and a "Surprise Me" randomizer. |
| **05** | [`FormApp`](./FormApp) | React 19, Vite | Controlled Components, Computed Object Keys | Unified `changeHandler` using `[name]: value` and immutable state updates with `prevFormData`. |
| **06** | [`Window Size Checker`](./Window%20Size%20Checker) | React 19, Vite | `useEffect` Hook, Event Listeners, Cleanup Functions | Real-time viewport dimensions tracker with `removeEventListener` cleanup to avoid memory leaks. |

---

## 🚀 Quick Start & How to Run

Each subproject is an independent Vite application. To run any project locally:

1. **Navigate into the target project folder:**
   ```bash
   # Choose any project:
   cd Courses
   # or: cd TravelPlanner
   # or: cd "Testimonial Slider"
   # or: cd FormApp
   # or: cd Counter
   # or: cd "Window Size Checker"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. Open your browser at the displayed local URL (typically `http://localhost:5173`).

---

## 🔍 In-Depth Project Breakdowns

### 1. Counter
* **Path:** [`./Counter`](./Counter)
* **Description:** An interactive numerical counter highlighting basic React state primitives and clean user interface presentation with Tailwind CSS.
* **Key Mechanisms:**
  - `useState(0)` tracks current count value.
  - Separate modular event handlers: `increaseHandler`, `decreaseHandler`, and `resetHandler`.
  - Border-separated button control group with flexbox layout.

---

### 2. TravelPlanner
* **Path:** [`./TravelPlanner`](./TravelPlanner)
* **Description:** A travel tour planner featuring destination cards with expandable text and dynamic card removal.
* **Key Mechanisms:**
  - **Expandable Text:** `Card.jsx` toggles between full info and a 200-character truncated snippet (`${info.substring(0, 200)}...`) via a `readmore` boolean state.
  - **Filtering & Removal:** `removeTour(id)` filters out the selected card using `tours.filter(tour => tour.id !== id)` and updates the parent state.
  - **Empty State Fallback:** Conditional rendering renders a "No tours left" screen with a `Refresh` button to reload the original dataset when `tours.length === 0`.

---

### 3. Courses
* **Path:** [`./Courses`](./Courses)
* **Description:** A full-featured course catalogue dashboard powered by an external API, category filters, and user feedback toasts.
* **Key Mechanisms:**
  - **Async API Fetching:** Executes an asynchronous data fetch inside `useEffect` on initial mount, handling errors gracefully with `toast.error()`.
  - **Dynamic Filtering:** `Cards.jsx` dynamically aggregates either all courses across every category (`Object.values(courses).forEach(...)`) or extracts the selected category array (`courses[category]`).
  - **User Interaction & Toasts:** Each card provides a like/unlike heart button (`FcLike` / `FcLikePlaceholder`) triggering `react-toastify` feedback ("Liked Successfully" / "Like Removed").
  - **Loading UI:** Renders a dedicated `<Spinner />` while data is being fetched.

---

### 4. Testimonial Slider
* **Path:** [`./Testimonial Slider`](./Testimonial%20Slider)
* **Description:** A testimonial slider with smooth navigation controls and random review discovery.
* **Key Mechanisms:**
  - **Circular Boundary Navigation:**
    - `leftShiftHandler`: If `index - 1 < 0`, wraps around to `reviews.length - 1`.
    - `rightShiftHandler`: If `index + 1 >= reviews.length`, wraps back to `0`.
  - **Surprise Me Feature:** Generates a random review using `Math.floor(Math.random() * reviews.length)` to instantly display an unexpected testimonial.
  - **Component Layering:** `Testimonials.jsx` manages index state and navigation, while `Card.jsx` isolates visual presentation, avatar imagery, and quote icons.

---

### 5. FormApp
* **Path:** [`./FormApp`](./FormApp)
* **Description:** A clean demonstration of handling complex multi-field form state in React with a single reusable handler function.
* **Key Mechanisms:**
  - **Object State:** Manages all form fields inside a single state object: `useState({ firstName: "", lastName: "" })`.
  - **Unified `changeHandler`:** Eliminates the need for multiple boilerplate handlers by extracting `e.target.name` and `e.target.value`.
  - **Immutable Updates with `prevFormData`:** Uses `...prevFormData` to retain other form fields while updating the modified key using computed property names:
    ```javascript
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
    ```

---

### 6. Window Size Checker
* **Path:** [`./Window Size Checker`](./Window%20Size%20Checker)
* **Description:** Real-time viewport dimensions tracker demonstrating the lifecycle of React side-effects and cleanup procedures.
* **Key Mechanisms:**
  - **`useEffect` with Empty Dependency Array:** Subscribes to the global `window.addEventListener('resize', handleResize)` on initial mount.
  - **Cleanup Function:** Returns `() => window.removeEventListener('resize', handleResize)` to detach the event listener when the component unmounts, preventing memory leaks and zombie listeners.

---

## 🧠 Core React Patterns Mastered

### 1. Functional State Updates (`prev` pattern)
Always reference the most up-to-date state snapshot when your new state depends on the previous state:
```javascript
setFormData(prevFormData => ({
  ...prevFormData,
  [e.target.name]: e.target.value
}));
```

### 2. State Lifting & Callback Passing
State is preserved in the highest common parent (`App.jsx` in `TravelPlanner`), and mutation handlers (`removeTour`) are passed down as props to deeply nested components (`Card.jsx`).

### 3. Subscription & Cleanup Lifecycle
Whenever subscribing to browser APIs, timers, or websockets in `useEffect`, always return a cleanup function:
```javascript
useEffect(() => {
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

### 4. Controlled Components & Computed Keys
By assigning each input a `name` attribute matching its state key, dynamic ES6 computed keys (`[name]: value`) make forms scalable without redundant boilerplate.

---

## 🛠️ Tech Stack & Ecosystem

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/fc`, `react-icons/fi`, `react-icons/fa`)
- **Notifications:** [React-Toastify](https://fkhadra.github.io/react-toastify/)
- **Language:** Modern JavaScript (ES6+), JSX

---

*Authored as part of the React Learning Journey series.*
