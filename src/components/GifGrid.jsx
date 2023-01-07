import React, { useState } from 'react'
import { getGif } from '../helpers/GetGifs';

export const GifGrid = ({ category }) => {
    

    getGif( category );

    const [counter, setCounter] = useState(0)

    return (
        <>
            <h3>{category}</h3>
            <h5>{counter}</h5>
            <button onClick={ () => setCounter(counter +1)}>+1</button>
        </>
    );
};
