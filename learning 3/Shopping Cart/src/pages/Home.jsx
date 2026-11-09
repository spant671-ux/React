import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log("Error fetching products:", error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      {loading ? (
        <div className="min-h-[60vh] flex justify-center items-center">
          <Spinner />
        </div>
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-[1240px] gap-8 justify-items-center">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="min-h-[60vh] flex flex-col justify-center items-center gap-2">
          <p className="text-slate-700 font-semibold text-xl">No Products Found</p>
          <p className="text-slate-400 text-sm">Please check your connection and try again.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
