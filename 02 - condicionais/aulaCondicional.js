
const numero = 0;

const numeroPar = numero % 2 === 0;

console.log(numeroPar);

if (numeroPar) {
    console.log('o numero ' + numero, 'e um numero par');
} else {
    console.log('O numero ' + numero, 'e um numero impar');
}