import { getGif } from "../../src/helpers/GetGifs";

describe('Haciendo pruebas con el GetGif', () => {
    const category = 'one puch';
    test('Devolviendo un array', async () => {

        const gif = await getGif(category);
        // expect(gif).toEqual(expect.any(Object));
        // console.log(gif);
        // expect(gif.length).toBeGreaterThan(0);
        //toBeGreaterThan --> para comprobar si un elemento es más grande que ....

        // expect(gif).toEqual(expect.any(Array));


        console.log(gif[0]);


        /*Error :  */
        expect(gif[0]).toEqual(
            {
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String)
            }
        );
    });
});