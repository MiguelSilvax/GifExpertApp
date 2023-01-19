import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components';
import { useFechItem } from '../../Hooks/useFechItem';

// jest.mock('../../Hooks/useFechItem.js');





describe('Realizando pruebas para el componente <GifGrid />', () => {
    const category = "one punch";


    test('Realizando un snapshot', () => {

        
        
        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('Cargando...');
        screen.debug();
    });
    
    
    
    // test('Debe de mostrar items cuando se cargan las imagenes mediante useFetchItem', () => { 

    //     const listGif = [
    //         {
    //             id: "a",
    //             title: "Naruto",
    //             url: "https://images/naruto.jpg"
    //         },
    //         {
    //             id: "b",
    //             title: "one puch",
    //             url: "https://images/onepuch.jpg"
    //         }
    //     ]

    //     useFechItem.mockReturnValue({
    //         images:listGif,
    //         isLoading: true
    //     });

    //     render(<GifGrid category={category} />);

    //     expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(2)
    //     screen.debug();

    // });    
});