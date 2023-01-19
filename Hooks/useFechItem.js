import { useEffect, useState } from "react";
import { getGif } from '../src/helpers/GetGifs';


export const useFechItem = (category) => {
        const [images, setimages] = useState([]);
        const [isLoading, setIsLoading] = useState(true);


    const getImages = async() => {
        const newImages = await getGif( category );
        setimages( newImages );
        setIsLoading(false);
    }


    useEffect(() => {
        getImages();
    }, []);
    
    return {
        images,
        isLoading
    };
};
