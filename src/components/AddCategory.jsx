import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [text, setText] = useState("")

    const onChange = ({ target }) => {
        setText(target.value);
    }

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if (text === '') return false;
        onNewCategory(text);
        setText('');
    };


    return (

        <form
            onSubmit={ e  => onFormSubmit(e) }
            aria-label='form'
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

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}