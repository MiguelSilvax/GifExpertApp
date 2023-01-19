import { waitFor, renderHook, act } from '@testing-library/react';
import { useFechItem } from '../../Hooks/useFechItem';


describe('Pruebas para el custom hooks', () => {

    test('Debe de regresar el estado iniciar', () => {

        //   const {images , isLoading } =   useFechItem("naruto");

        const { result } = renderHook(() => useFechItem('naruto'));
        const { images, isLoading } = result.current;
        console.log(isLoading);
    });

    test('Debe de retornar un arreglo de imágenes y el isLoading en false', async () => {

        const { result } = renderHook(() => useFechItem('one puch'));

        // const {images , isLoading} = result.current;

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        

    });



});