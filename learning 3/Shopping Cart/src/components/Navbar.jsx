import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <nav className="flex justify-between items-center h-20 w-11/12 max-w-[1200px] mx-auto">
      <NavLink to="/">
        <div className="hover:opacity-90 transition">
          <img src="/logo.png" alt="Ecomzy Logo" className="h-12 md:h-14" />
        </div>
      </NavLink>

      <div className="flex items-center font-medium text-slate-100 gap-8 pr-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition duration-200 text-base md:text-lg ${
              isActive ? "text-green-400 font-bold" : "text-slate-100 hover:text-green-400"
            }`
          }
        >
          <p>Home</p>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `transition duration-200 ${
              isActive ? "text-green-400" : "text-slate-100 hover:text-green-400"
            }`
          }
        >
          <div className="relative flex items-center justify-center p-1">
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white font-bold">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
