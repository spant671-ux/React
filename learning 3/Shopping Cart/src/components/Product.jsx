import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const isItemInCart = cart.some((p) => p.id === post.id);

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  const formattedPrice =
    typeof post.price === "number" ? post.price.toFixed(2) : post.price;

  return (
    <div className="group flex flex-col justify-between w-full max-w-[280px] h-[400px] bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Header Info */}
      <div className="w-full">
        <h2
          className="text-slate-800 font-bold text-sm leading-snug line-clamp-1 group-hover:text-green-600 transition-colors duration-200"
          title={post.title}
        >
          {post.title}
        </h2>
        <p className="text-slate-500 font-normal text-xs leading-relaxed line-clamp-2 mt-1">
          {post.description}
        </p>
      </div>

      {/* Product Image */}
      <div className="w-full h-[180px] flex items-center justify-center p-2 my-auto">
        <img
          src={post.image}
          alt={post.title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Bottom Action Bar */}
      <div className="w-full flex justify-between items-center pt-3 border-t border-slate-100 mt-auto">
        <div>
          <p className="text-green-600 font-extrabold text-base tracking-tight">
            ${formattedPrice}
          </p>
        </div>

        {isItemInCart ? (
          <button
            className="h-8 px-3.5 flex items-center justify-center text-red-600 bg-red-50 border-2 border-red-500 rounded-full font-bold text-[11px] uppercase tracking-wider hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="h-8 px-3.5 flex items-center justify-center text-slate-700 bg-transparent border-2 border-slate-700 rounded-full font-bold text-[11px] uppercase tracking-wider hover:bg-slate-700 hover:text-white transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
