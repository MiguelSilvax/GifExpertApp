import { useState } from 'react';

export const AddCategory = ({ addCategory,onNewCategory }) => {

    const [text, setText] = useState("")

    const onChange = ({ target }) => {
        setText(target.value);
    }

    const onFormSubmit = (event) => {
        if (text === "")
            return
        else
            event.preventDefault();
            onNewCategory(text);
            // addCategory(categories => [text, ...categories]);
            setText("");
    }

    return (

        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={text}
                onChange={onChange}
            />
        </form>

    );
} 