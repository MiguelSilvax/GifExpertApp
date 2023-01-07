import { useState, useRef } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [text, setText] = useState("")

    const onChange = ({ target }) => {
        setText(target.value);
    }

    const onFormSubmit = (event) => {
        if (text === "") return
        event.preventDefault();
        onNewCategory(text);
        setText("");
    };


    return (

        <form
            onSubmit={event => onFormSubmit(event)}
        >
            <input
                id='myTextField'
                type="text"
                placeholder="Buscar gifs"
                value={text}
                onChange={onChange}
            />
        </form>

    );
} 