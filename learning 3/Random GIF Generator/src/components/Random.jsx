import Spinner from "./Spinner";
import useGIF from "../hooks/useGIF";

const Random = () => {
    const { gif, loading, fetchData } = useGIF();

    const clickHandler = () => {
        fetchData();
    };

    return (
        <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-3.75 pb-5">
            <h1 className="text-2xl underline uppercase font-bold mt-4">
                A Random GIF
            </h1>
            {
                loading ? (<Spinner />) : (<img src={gif} width="450" className="max-h-87.5 object-contain rounded" />)
            }

            <button onClick={clickHandler}
                className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg cursor-pointer"
            >
                Generate
            </button>
        </div>
    );
};

export default Random;
