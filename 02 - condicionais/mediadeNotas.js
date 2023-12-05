/*
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre
de faculdade calcule e imprima a sua media e a sua classificação conforme a tabela abaixo.

Classificação:

- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/

const nota1 = 5;
const nota2 = 2;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Não atingiu a nota e foi reprovado com a nota: ' + media.toFixed(2));
    
}else if (media >= 5 && media <= 7 ) {
    console.log('Ficou de recuperação com a nota: ' + media.toFixed(2));
}else {
    console.log('Aprovado com a nota: ' + media.toFixed(2));
}
