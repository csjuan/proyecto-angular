export function randomString(length: number): string{
    const caracteres = 'iduhicnaicnaslciashnclaisbcaliscnalcna';
    let stringRandom = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        stringRandom += caracteres.charAt( randomIndex);
    }
    return stringRandom
}