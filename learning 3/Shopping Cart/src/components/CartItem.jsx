import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from Cart");
  };

  const formattedPrice =
    typeof item.price === "number" ? item.price.toFixed(2) : item.price;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 md:p-10 border-b border-slate-200 last:border-b-0 gap-8 md:gap-10 w-full">
      {/* Product Image Frame */}
      <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 p-5 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 shadow-inner">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between flex-1 gap-4 w-full py-2">
        <div className="space-y-2">
          <h1 className="text-slate-800 font-bold text-lg md:text-xl line-clamp-1">
            {item.title}
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-100">
          <p className="text-green-600 font-extrabold text-xl md:text-2xl">
            ${formattedPrice}
          </p>
          <button
            onClick={removeFromCart}
            aria-label="Remove item from cart"
            className="w-11 h-11 rounded-full bg-red-100 hover:bg-red-500 text-red-600 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
          >
            <AiFillDelete className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
