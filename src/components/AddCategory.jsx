import { useState } from 'react';

export const AddCategory = ({ addCategory }) => {

    const [text, setText] = useState("")

    const onChange  = ( {target} ) => {
        // console.log(target.value);
        setText(target.value);
    }

    const onFormSubmit = ( event ) => {
        if (text === "") {
            return
        }else{
            event.preventDefault();
            addCategory( categories => [text ,...categories] );
           setText("");
       }
    }

    return (
        
        <form onSubmit={ onFormSubmit }>
              <input
                  type="text"
                  placeholder="Buscar gifs"
                  value={text}
                  onChange={ onChange }
              />
          </form>
       
    );
} 