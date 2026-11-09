import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100/80 flex flex-col w-full text-slate-800">
      <header className="bg-slate-900 w-full sticky top-0 z-50 shadow-md">
        <Navbar />
      </header>

      <main className="w-full flex justify-center flex-1 py-10 px-4 md:px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
