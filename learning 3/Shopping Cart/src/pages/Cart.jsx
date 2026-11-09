import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { FaShoppingBag } from "react-icons/fa";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="w-full max-w-[1240px] flex justify-center items-start px-2 sm:px-4">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 w-full">
          {/* Cart Items List */}
          <div className="lg:col-span-2 flex flex-col bg-white rounded-3xl shadow-sm border border-slate-200 p-4 sm:p-6 md:p-8 divide-y divide-slate-100">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Cart Summary Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-slate-200 flex flex-col justify-between h-fit sticky top-28 gap-8">
            <div className="space-y-2">
              <div className="text-green-700 font-bold uppercase tracking-wider text-sm">
                Your Cart
              </div>
              <h2 className="text-slate-800 font-extrabold uppercase text-3xl md:text-4xl tracking-tight">
                Summary
              </h2>
              <p className="text-slate-600 font-medium text-base pt-2">
                Total Items:{" "}
                <span className="text-slate-900 font-bold text-lg">
                  {cart.length}
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-6 pt-6 border-t border-slate-100">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-semibold text-lg">
                  Total Amount:
                </span>
                <span className="text-green-600 font-extrabold text-2xl md:text-3xl tracking-tight">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>

              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl transition duration-200 text-center w-full uppercase tracking-wider shadow-md hover:shadow-lg active:scale-98 cursor-pointer">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5 text-center p-8 bg-white rounded-3xl shadow-sm border border-slate-200 w-full max-w-xl my-8">
          <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center text-green-600 text-4xl mb-2">
            <FaShoppingBag />
          </div>
          <h1 className="text-slate-800 font-bold text-2xl md:text-3xl">
            Your cart is empty!
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-sm leading-relaxed">
            Looks like you haven't added anything to your cart yet. Explore our
            products and find something you love.
          </p>
          <Link to="/" className="mt-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-8 rounded-full uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer active:scale-95 text-sm">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
