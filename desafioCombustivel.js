
/*Faça um programa para calcular o valor de uma viagem


você terá 3 variaveis. sendo elas:

1 - Preço do combustivel
2 - Gasto medio de combustivel do carro por KM;
3 - Distancia em KM da viagem;

imprima no console o valor que será gasto de combustivel para realizar esta viagem
*/


const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const gastoMedio = precoCombustivel * litrosConsumidos;

console.log(gastoMedio.toFixed(2));

