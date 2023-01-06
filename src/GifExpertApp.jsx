

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
 * los regristos en el anterior valor del @category                                                                      |
 *                                                                                                                       |                               |    
 * ----------------------------------------------------------------------------------------------------------------------
 */



import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const Categories = () => {

    const [inputCategory, setCategory] = useState([""]);

    const addNewCategory = (event) => {
        console.log(event);
        setCategory(category => [event,...category]);
    }

    const categoryList = inputCategory.map((item, index) => {
        return item === '' || item === null ? inputCategory.splice(index, 1) : (
            <li key={index}>
                {item}
            </li>
        );
    });

    return (
        <>
            <h1>Encuentra tu Gif</h1>
            <AddCategory
                // addCategory = { setCategory } 
                onNewCategory={event => addNewCategory(event)}
            />
            <ol>
                {categoryList}
            </ol>
        </>
    )
}