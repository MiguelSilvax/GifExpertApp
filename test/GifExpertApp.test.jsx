import {render,screen,fireEvent} from '@testing-library/react';
import { Categories } from '../src/GifExpertApp';

describe('Pruebas con <GifExpertApp />', () => {
    test('Debe de funcionar al addNewCategory', () => { 

        render(<Categories />);

        
        const form = screen.getByRole('form',{name:"form"})
        
        const input = screen.getByRole('textbox', { id:"myTextField"});
        
        fireEvent.input(input,{target:{value:"naruto"}});
        
        const onFormSubmit = jest.fn();

        fireEvent.submit(form, { target: { onSubmit: onFormSubmit }});

        screen.debug();
     });
}); 