

/**
 * ----------------------------------------------------------------------------------------------------------------------
 *                                                                                                                       |
 * En este bloque permite agregar una lista de categoría en                                                              |   
 * la etiqueta <li>{item}</li>                                                                                           |
 *                                                                                                                       |
 * Se hace el uso del hook useState para actualizar el nuevo registro                                                    |
 * o estado que se va ingresando en el input                                                                             |
 *                                                                                                                       |
 * En el método setCategory(), se usó el operador spread (...) para almacenar                                            |
 * los regristos en el anterior valor del @inputCategory                                                                      |
 *                                                                                                                       |                               |    
 * ----------------------------------------------------------------------------------------------------------------------
 */



import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const Categories = () => {

    const [inputCategory, setCategory] = useState([]);

    const addNewCategory = (event) => {
        if (inputCategory.includes(event)) return;
        setCategory(category => [event, ...category]);
    }

    return (
        <>
            <h1>Encuentra tu Gif</h1>

            <AddCategory
                onNewCategory={event => addNewCategory(event)}
            />

            <div>
                {
                    inputCategory.map((item, index) => {
                        return <GifGrid key={item} category={item} />
                    })
                }
            </div>
        </>
    )
}