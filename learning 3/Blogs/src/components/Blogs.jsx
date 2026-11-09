import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 my-[66px] mb-[70px] justify-center items-center">
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Posts Found !</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="w-full flex flex-col">
            <p className="font-bold text-lg hover:underline cursor-pointer">
              {post.title}
            </p>
            <p className="text-sm my-[3px]">
              By <span className="italic">{post.author}</span> on{" "}
              <span className="underline font-semibold cursor-pointer">
                {post.category}
              </span>
            </p>
            <p className="text-sm">Posted on {post.date}</p>
            <p className="text-[16px] mt-[13px] text-justify leading-relaxed">
              {post.content}
            </p>
            <div className="flex flex-wrap gap-x-2 items-center mt-[5px]">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-blue-700 font-semibold underline text-[12px] cursor-pointer"
                >
                  {`#${tag}`}
                </span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
