/*

2) o IMC - Indice de massa corporal é um criterio de organização mundial de saude para dar uma indicação sobre a condição
de peso de uma pessoa adulta

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela
abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsidade Grave;

*/

function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

function classificarImc(massaCorporal) {
    if (massaCorporal < 18.5) {
        return('Abaixo do peso ' + massaCorporal.toFixed(2));
    } else if (massaCorporal >= 18.5 && massaCorporal < 25 ) {
        return('Peso normal ' + massaCorporal.toFixed(2));
    } else if (massaCorporal >= 25 && massaCorporal < 30 ) {
        return('Acima do peso ' + massaCorporal.toFixed(2));
    } else if (massaCorporal >= 30 && massaCorporal < 40) {
        return('Obeso ' + massaCorporal.toFixed(2)); 
    } else {
        return('Obesidade grave ' + massaCorporal.toFixed(2));
    }
}

function main() {
    const peso = 130;
    const altura = 1.80;

    const massaCorporal = calcularImc(peso, altura);
    console.log(classificarImc(massaCorporal));

}

main();







