import { screen, fireEvent, render } from "@testing-library/react";
import { AddCategory as Category } from "../../src/components/AddCategory";

describe('Comprobando el componente de AddCategory', () => {

    //1 
    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<Category onNewCategory={() => { }} />);

        const input = screen.getByRole('textbox', { id: 'myTextField' });


        fireEvent.input(input, { target: { value: 'naruto' } });


        expect(input.value).toBe("naruto"); 

        // screen.debug();
    });


    //2 

    test('Debe de llamar el onNewCategory si el input tiene un valor ', () => { 

        let onNewCategory = jest.fn();

        render(<Category onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox',{target:{value:"boruto"}});

        const form = screen.getByRole('form');

        fireEvent.input(input,{target:{value:"one puch"}});

        fireEvent.submit(form)

        //Comprueba si se ha llamado la función 
        expect(onNewCategory).toHaveBeenCalled();

        //comprobamos si se ha llamado con un argumento específico
        expect(onNewCategory).toHaveBeenCalledWith("one puch");

        screen.debug();
     });


    //3

    test('No debe llamar el input si el valor está vacio', () => {

        const newCategory = jest.fn();

        render(<Category onNewCategory={newCategory} />);

        const input = screen.getByRole('textbox');

        const form = screen.getByRole('form', { name: form });

        fireEvent.input(input, { target: { value: '' } });

        const onFormSubmit = jest.fn();

        fireEvent.submit(form, { target: { onsubmit: onFormSubmit } });

        expect(onFormSubmit).toHaveBeenCalled();

        expect(newCategory).not.toHaveBeenCalled();


        screen.debug();
    });



});