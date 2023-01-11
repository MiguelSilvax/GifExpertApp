import { useEffect, useState } from "react";
import { getGif } from '../src/helpers/GetGifs';


export const useFechItem = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
        getGif(category)
            .then(result => setimages(result));
        
    }, []);
    return {
        images,
        isLoading
    };
}
