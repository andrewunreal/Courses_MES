try {
    let num = 5.2;
if (typeof num !== 'number' || num % 1 !== 0) {
    throw new Error('Число должно быть целым!');
}
} catch (error) {
console.log(error.message);
}