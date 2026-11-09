import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="w-full flex justify-center items-center border-t-2 border-t-gray-300 fixed bottom-0 bg-white py-2">
      <div className="flex justify-between items-center w-11/12 max-w-[670px]">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="rounded-md border-2 border-gray-300 px-4 py-1 text-sm font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="rounded-md border-2 border-gray-300 px-4 py-1 text-sm font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              Next
            </button>
          )}
        </div>

        <p className="font-semibold text-sm">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
