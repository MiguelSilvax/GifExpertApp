import React, { useEffect, useState } from 'react'
import { GifItem } from "../components";
import { useFechItem } from '../../Hooks/useFechItem';

export const GifGrid = ({ category }) => {


    const { images , isLoading } = useFechItem(category);
    return (

        <ol>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">

                {
                    images.map((item) => {
                        return (
                            <GifItem
                                key={item.id}
                                {...item}
                            />
                        )
                    })

                }
            </div>
        </ol>
    );
};



