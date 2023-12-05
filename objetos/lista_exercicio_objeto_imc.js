/*
  2 - Crie uma classe para representar pessoas.
  Para cada pessoa teremos os atributos nome, peso e altura.
  As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
  Instancie uma pessoa chamada José que tenha 70Kg de peso e 1,75 de altura e peça ao José para dizer o valor
  do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    
    calcularImc() {
       return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
      const imc = this.calcularImc();
      if (imc < 18.5) {
        return('Abaixo do peso ' + imc.toFixed(2));
    } else if (imc >= 18.5 && imc < 25 ) {
        return('Peso normal ' + imc.toFixed(2));
    } else if (imc >= 25 && imc < 30 ) {
        return('Acima do peso ' + imc.toFixed(2));
    } else if (imc >= 30 && imc < 40) {
        return('Obeso ' + imc.toFixed(2)); 
    } else {
        return('Obesidade grave ' + imc.toFixed(2));
    }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose, '= ' + jose.classificarImc());
const peniel = new Pessoa('Peniel', 120, 1.89);
console.log(peniel, '= ' + peniel.classificarImc());
const caio = new Pessoa('Caio', 75, 1.89);
console.log(caio, '= ' + caio.classificarImc());
const peniel1 = new Pessoa('Peniel1', 145, 1.89);
console.log(peniel1, '= ' + peniel1.classificarImc());

