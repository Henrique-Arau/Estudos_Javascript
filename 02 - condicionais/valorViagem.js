/*

Faça um programa para calcular o valor de uma viagem

você tera  3 variaveis. sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que esta no seu carro;
4 - gasto médio de combustivel do carro por KM;
5 - Distancia em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';


const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const gastoMedio = precoEtanol * litrosConsumidos;
    console.log(gastoMedio.toFixed(2));
} else {
    const gastoMedio = precoGasolina * litrosConsumidos;
    console.log(gastoMedio.toFixed(2));
}


