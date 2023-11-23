/*
    Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

// Cria variáveis locais ao Importa um objeto que tem as funções gets e print
const { gets, print} = require('./funcoes_auxiliares.js');

// Armazena a quantidade de números sorteados
const quantidade = gets();

// Armazena o maior numero
let maiorNumero = 0;

// Iteração dos números do array e verificação da condicional
for (let i = 0; i < quantidade; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorNumero) {
        maiorNumero = numeroSorteado;
    }
}

print(maiorNumero);
