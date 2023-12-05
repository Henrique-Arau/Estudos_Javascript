/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
utilize os codigos de  tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
adequado.


Código condição de pagamento:
1 - A vista Débito, recebe 10% de desconto; 
2 - A vista no dinheiro ou pix, recebe 15% de desconto; 
3 - Em duas vezes, preço normal de etiqueta sem juros; 
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; 

*/



const precoEtiqueta = 100;
const formaDePagamento = 1;


if (formaDePagamento === 1) {
    console.log('R$' + (precoEtiqueta - (precoEtiqueta * 0.1)));
} else if (formaDePagamento === 2) {
    console.log('R$' + (precoEtiqueta - (precoEtiqueta * 0.15)));
} else if (formaDePagamento === 3) {
    console.log('R$' + precoEtiqueta);
} else {
    console.log('R$' + (precoEtiqueta + (precoEtiqueta * 0.1)));
}