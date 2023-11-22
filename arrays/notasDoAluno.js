/*
    Criar um array para armazenar as notas das provas dos alunos.
    Deve ser dinamico. Cada professor pode ter uma quantidade diferente da provas.
*/

// Cria um array vazio
const notas = [];

// Adiciona elementos no array
notas.push(7);
notas.push(7);
notas.push(8);
notas.push(10);
notas.push(5);

// Verifica o tamanho do array
console.log(notas.length);


// Variável para arazenar a soma que será realizada no for
let soma = 0;

// Itinerar o array for loop
// For é utilizado para recorrer por um número x de vezes
// Sintaxe (inicialização; condição; incremeto)
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;   
}

// Calcula a média das notas do aluno e arredonda em uma cada decimal
const mediaDoAluno = (soma / notas.length).toFixed(1);

console.log(mediaDoAluno);
