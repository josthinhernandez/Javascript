afterEach(() => console.log("Despues de cada prueba"));
afterAll(() => console.log("Despues de todas las pruebas"));

beforeAll(() => console.log("Antes de todas la pruebras"));
beforeEach(() => console.log("Antes de cada prueba"));

describe("Preparar antes de ejecutar", () => {
    test("Es verdadero", () => {
        expect(true).toBeTruthy();
    })
})