import { numbers } from "../numbers";

describe('Comparacion de numeros', () => {
    test("Mayor que", () => {
        expect(numbers(2, 2)).toBeGreaterThan(9);
    })
    test("Mayor que o igual", () => {
        expect(numbers(2, 2)).toBeGreaterThanOrEqual(30);
    });
    test("Menor que", () => {
        expect(numbers(2, 2)).toBeLessThan(1);
    })
    test("Menor que o igual", () => {
        expect(numbers(2, 2)).toBeLessThanOrEqual(1)
    })
    test("Numeros flotantes", () => {
        expect(numbers(0.2, 0.2)).toBeCloseTo(0.4);
    })
})