import { getByText, render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";
describe('Pruebas para GifItem', () => {
  test('Debe coincidir con el snapshot', () => {
    const { container } = render(<GifItem id="" title="" url="" />);
    screen.debug();
    expect(container).toMatchSnapshot();
  });


  test('Debe retornar los props sus respectivos tipos de datos', () => {
    render(<GifItem id="1" title="Naruto shippuden" url="https://home/src/public/naruto.gif" />);
    expect(screen.getByRole('img')).toBeTruthy();
    screen.debug();
    console.log(screen.getByRole('img').src); // otra forma de hacer selección a un elemento
    console.log(document.getElementById('img').src);
    console.log(document.getElementById('img').alt);
    expect(document.getElementById('img').src).toEqual( expect.any(String));
    expect(document.getElementById('img').alt).toEqual( expect.any(String));
  });
});