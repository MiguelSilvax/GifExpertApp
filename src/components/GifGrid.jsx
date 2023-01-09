import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/GetGifs';
import { GifItem } from "../components/GifItem";

export const GifGrid = ({ category }) => {
    const [images, setimages] = useState([]);
    useEffect(() => {
        getGif(category)
            .then(result => setimages(result));
    }, []);

    return (
        <>
            <ol>
                <div className="card-grid">
                    <GifItem images = {images}/>
                </div>
            </ol>
        </>
    );
};



