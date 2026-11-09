# React2 Learning Workspace

Workspace tracking React fundamentals, component patterns, state management, props, lifecycle effects, global context, client-side routing, and high-performance form handling across progressive modular practice projects.

---

## 📂 Repository Structure

```text
React2/
├── 01react/                     # Module 1: React setup & basic component mounting
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx       # Arrow function component
│   │   ├── App.css
│   │   ├── App.jsx              # Standard function component with React Fragment
│   │   ├── index.css            # Global reset & layout
│   │   └── main.jsx             # createRoot mount to #root
│   ├── index.html
│   └── package.json
│
├── 02comps-props-jsx/           # Module 2: Components, Props, JSX & Assets
│   ├── src/
│   │   ├── assets/              # Image assets (Zoro.jpg, Mikey.jpg, Guts.jpg)
│   │   ├── components/
│   │   │   ├── UserCard.css     # Card styling
│   │   │   └── UserCard.jsx     # Reusable card component consuming props
│   │   ├── App.css              # Container layout
│   │   ├── App.jsx              # Parent rendering cards with props & asset imports
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── 03usestate-hook/             # Module 3: State Management with useState
│   ├── src/
│   │   ├── components/
│   │   │   ├── Counter.css      # Counter button & container styling
│   │   │   └── Counter.jsx      # Counter component utilizing useState & onClick
│   │   ├── App.css
│   │   ├── App.jsx              # Renders Counter
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── 04props-extra/               # Module 4: Advanced Props (Children & Functions)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button.css
│   │   │   ├── Button.jsx       # Consumes props.children & callback prop (incrementCount)
│   │   │   ├── Card.css
│   │   │   └── Card.jsx         # Wrapper component rendering props.children
│   │   ├── App.css
│   │   ├── App.jsx              # Parent managing count state & passing handleClick function
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── 05state-lifting/             # Module 5: State Lifting & Sibling Synchronization
│   ├── src/
│   │   ├── components/
│   │   │   └── Card.jsx         # Sibling card updating & reading lifted state via props
│   │   ├── App.jsx              # Closest common ancestor holding name state & setter
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── 06conditional-rendering/     # Module 6: Conditional Rendering Patterns
│   ├── src/
│   │   ├── components/
│   │   │   ├── LoginBtn.jsx     # Rendered when logged out
│   │   │   └── LogoutBtn.jsx    # Rendered when logged in
│   │   ├── App.jsx              # Early return, ternary, logical &&, if-else implementations
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── 07event-handling/            # Module 7: Event Handling & Synthetic Events
│   ├── src/
│   │   ├── App.jsx              # onClick, onMouseOver, onChange, onSubmit & e.preventDefault()
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── 08useEffect-hook/            # Module 8: Side Effects & Lifecycle with useEffect
│   ├── src/
│   │   ├── components/
│   │   │   ├── DataFetcher.jsx         # API data fetching (jsonplaceholder) with loading state
│   │   │   ├── LoggerComponent.jsx     # Side effect logger on every render
│   │   │   ├── MultiEffectComponent.jsx# Multiple independent useEffects
│   │   │   ├── ResizeComponent.jsx     # Window resize listener with removeEventListener cleanup
│   │   │   └── TimerComponent.jsx      # setInterval timer with clearInterval cleanup
│   │   ├── App.jsx              # 5 useEffect variations (all renders, mount, dependencies, cleanup)
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── 09useContext-hook/           # Module 9: Global State & Context API
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChildA.jsx       # Intermediate passthrough component
│   │   │   ├── ChildB.jsx       # Intermediate passthrough component
│   │   │   └── ChildC.jsx       # Deep consumer accessing UserContext & ThemeContext
│   │   ├── App.jsx              # Context creation (createContext) & nested Providers
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── 10react-router/              # Module 10: Client-Side Routing with React Router
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx        # About page with programmatic navigation
│   │   │   ├── Courses.jsx      # Nested child route inside Dashboard
│   │   │   ├── Dashboard.jsx    # Parent route with <Outlet /> for nested children
│   │   │   ├── Home.jsx         # Home page with useNavigate navigation
│   │   │   ├── MockTest.jsx     # Nested child route inside Dashboard
│   │   │   ├── Navbar.css       # Active route indicator styling (.active-link)
│   │   │   ├── Navbar.jsx       # Navigation bar with NavLink active state
│   │   │   ├── NotFound.jsx     # 404 Catch-All fallback component
│   │   │   ├── ParamComp.jsx    # Dynamic route parameter consumer (useParams)
│   │   │   └── Reports.jsx      # Nested child route inside Dashboard
│   │   ├── App.css
│   │   ├── App.jsx              # createBrowserRouter configuration & RouterProvider
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── 11react-hook-form/           # Module 11: High-Performance Forms with React Hook Form
│   ├── src/
│   │   ├── assets/
│   │   │   └── hero.png
│   │   ├── App.css              # Error border and message styling (.input-error, .error-msg)
│   │   ├── App.jsx              # useForm hook, register, validation constraints, handleSubmit, isSubmitting
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── notes.md                     # Comprehensive conceptual study notes across all 11 modules
└── readme.md                    # Workspace guide and module overview
```

---

## 🛠️ How to Run Any Module

To run any of the practice projects locally, change into its folder and start the Vite dev server:

```bash
# Example: Running Module 5 (State Lifting)
cd 05state-lifting
npm install
npm run dev

# Example: Running Module 9 (useContext Hook)
cd ../09useContext-hook
npm install
npm run dev

# Example: Running Module 10 (React Router)
cd ../10react-router
npm install
npm run dev

# Example: Running Module 11 (React Hook Form)
cd ../11react-hook-form
npm install
npm run dev
```

The app will run locally on `http://localhost:5173` (or the next available port).

---

## 🌟 Modules & Concepts Implemented

| Module | Core Topic | Key Files | Concepts Covered |
| :--- | :--- | :--- | :--- |
| **`01react`** | Setup & Mounting | [Navbar.jsx](file:///c:/Personal/Code/React2/01react/src/components/Navbar.jsx), [main.jsx](file:///c:/Personal/Code/React2/01react/src/main.jsx) | `createRoot`, DOM mounting, Arrow vs Function components, React Fragments (`<>...</>`), Global vs Component CSS. |
| **`02comps-props-jsx`** | Components & Props | [UserCard.jsx](file:///c:/Personal/Code/React2/02comps-props-jsx/src/components/UserCard.jsx), [App.jsx](file:///c:/Personal/Code/React2/02comps-props-jsx/src/App.jsx) | Unidirectional data flow, passing primitive props (`name`, `desc`), importing local image assets as props (`image`), passing inline style objects (`style={props.style}`). |
| **`03usestate-hook`** | State Management | [Counter.jsx](file:///c:/Personal/Code/React2/03usestate-hook/src/components/Counter.jsx), [App.jsx](file:///c:/Personal/Code/React2/03usestate-hook/src/App.jsx) | `useState` hook, initial state, updater function, state re-rendering, `onClick` event handling. |
| **`04props-extra`** | Advanced Props | [Button.jsx](file:///c:/Personal/Code/React2/04props-extra/src/components/Button.jsx), [Card.jsx](file:///c:/Personal/Code/React2/04props-extra/src/components/Card.jsx), [App.jsx](file:///c:/Personal/Code/React2/04props-extra/src/App.jsx) | **`props.children`** (wrapper pattern), **passing functions as props** (`incrementCount={handleClick}`), parent-child communication. |
| **`05state-lifting`** | State Lifting | [Card.jsx](file:///c:/Personal/Code/React2/05state-lifting/src/components/Card.jsx), [App.jsx](file:///c:/Personal/Code/React2/05state-lifting/src/App.jsx) | Lifting state up to closest common ancestor, sharing state between siblings, bidirectional data sync (`onChange` -> `setName`). |
| **`06conditional-rendering`** | Conditional UI | [LoginBtn.jsx](file:///c:/Personal/Code/React2/06conditional-rendering/src/components/LoginBtn.jsx), [LogoutBtn.jsx](file:///c:/Personal/Code/React2/06conditional-rendering/src/components/LogoutBtn.jsx), [App.jsx](file:///c:/Personal/Code/React2/06conditional-rendering/src/App.jsx) | 4 approaches: Early return, Logical AND (`&&`), Ternary operator (`condition ? A : B`), classic `if-else`. |
| **`07event-handling`** | Event Handling | [App.jsx](file:///c:/Personal/Code/React2/07event-handling/src/App.jsx) | SyntheticEvent system, inline vs referenced handlers (`onClick={clickHandler}`), `onMouseOver`, input tracking with `e.target.value`, form handling with `e.preventDefault()`. |
| **`08useEffect-hook`** | Side Effects & Lifecycle | [App.jsx](file:///c:/Personal/Code/React2/08useEffect-hook/src/App.jsx), [DataFetcher.jsx](file:///c:/Personal/Code/React2/08useEffect-hook/src/components/DataFetcher.jsx), [TimerComponent.jsx](file:///c:/Personal/Code/React2/08useEffect-hook/src/components/TimerComponent.jsx), [ResizeComponent.jsx](file:///c:/Personal/Code/React2/08useEffect-hook/src/components/ResizeComponent.jsx) | 5 variations of `useEffect`, dependency array rules, cleanup functions (`clearInterval`, `removeEventListener`), async API fetching with loading states. |
| **`09useContext-hook`** | Global State & Context | [App.jsx](file:///c:/Personal/Code/React2/09useContext-hook/src/App.jsx), [ChildC.jsx](file:///c:/Personal/Code/React2/09useContext-hook/src/components/ChildC.jsx) | Solving Prop Drilling, `createContext`, Context Providers (`UserContext.Provider`, `ThemeContext.Provider`), consuming state deeply with `useContext()`, theme toggle logic. |
| **`10react-router`** | Client-Side Routing | [App.jsx](file:///c:/Personal/Code/React2/10react-router/src/App.jsx), [Navbar.jsx](file:///c:/Personal/Code/React2/10react-router/src/components/Navbar.jsx), [Dashboard.jsx](file:///c:/Personal/Code/React2/10react-router/src/components/Dashboard.jsx), [ParamComp.jsx](file:///c:/Personal/Code/React2/10react-router/src/components/ParamComp.jsx) | `createBrowserRouter`, `RouterProvider`, `NavLink` with dynamic `isActive`, `useNavigate` for programmatic navigation, Nested Routes (`children` & `<Outlet />`), Dynamic Route Parameters (`useParams`), 404 Catch-All route (`*`). |
| **`11react-hook-form`** | Form Handling & Validation | [App.jsx](file:///c:/Personal/Code/React2/11react-hook-form/src/App.jsx), [App.css](file:///c:/Personal/Code/React2/11react-hook-form/src/App.css) | `react-hook-form`, `useForm()` hook, `register` (uncontrolled refs), validation constraints (`required`, `minLength`, `maxLength`, `pattern` regex), `handleSubmit`, `errors` state, and async submission with `isSubmitting`. |

---

## 📖 Related Documents

- **[notes.md](file:///c:/Personal/Code/React2/notes.md)**: In-depth explanations, code snippets, architectural diagrams, gotchas, and walkthroughs for all topics implemented across Modules 1 to 11.
