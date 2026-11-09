import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const baseUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGIF = (tag) => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchData(customTag) {
        setLoading(true);
        try {
            const queryTag = customTag !== undefined ? customTag : tag;
            const url = queryTag ? `${baseUrl}&tag=${queryTag}` : baseUrl;
            const { data } = await axios.get(url);
            const imageSource = data.data.images.downsized_large.url;
            setGif(imageSource);
        } catch (error) {
            console.error("Error fetching GIF:", error);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData(tag);
    }, []);

    return { gif, loading, fetchData };
};

export default useGIF;
