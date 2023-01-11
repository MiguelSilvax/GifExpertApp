

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
import { AddCategory, GifGrid } from './components';

export const Categories = () => {

    const [inputCategory, setCategory] = useState([]);

    const addNewCategory = (event) => {
        if (inputCategory.includes(event)) return;
        setCategory(category => [event, ...category]);
    }

    return (
        <>
            <h1 className='title'>Encuentra tu Gif ! &#128125;</h1>
            <AddCategory
                onNewCategory={event => addNewCategory(event)}
            />

            <div>
                {
                    inputCategory.map( item => {
                        return <GifGrid 
                        key = { item } 
                        category = { item } 
                        />
                    })
                }
            </div>
        </>
    )
}