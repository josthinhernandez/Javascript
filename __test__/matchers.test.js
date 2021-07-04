describe("Comparadores comunes", () => {
    const user = {
        name: "Josthin",
        lastname: "Hernandez"
    }

    const user2 = {
        name: "Josthin",
        lastname: "Hernandz"
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });

    test('No son exactamente iguales', () => {
        expect(user).not.toEqual(user2);
    })
});