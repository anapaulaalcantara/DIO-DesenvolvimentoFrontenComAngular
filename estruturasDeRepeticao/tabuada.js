// Crie um programa que dado um número imprima a sua tabuada.

// 1- Eu tentado resolver sozinha com array e for (conteúdo da aula)
/*
// Armazena o número da tabuada
let numero = 9;

// Array com os multiplicadores
let multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Arazena o resultado do for
let resultado = 0;

// Iteração dos multiplicadores, calcula a tabuada e imprime o resultado
for (let i = 0; i < multiplicadores.length; i++) {
    let multiplicador = multiplicadores[i];
    resultado = multiplicador * numero; 
    console.log(`${multiplicador} x ${numero} = ${resultado}`)   
}
*/

// 2- Simplificando e imprimindo somente o resultado (o professor)
// Armazeda no numero da tabuada
const numero = 5;

// Iteração dos multiplicadores, calcula a tabuada e imprime o resultado
for (let i = 1; i <= 10; i++) {
    console.log(i * numero);    
}

// 3- Utilizando uma função (eu pesquisando outras formas de fazer)
// Função para calcular e imprimir a tabuada de um número até 10
function calcularTabuada(numero) {
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
      const resultado = multiplicador * numero;
      console.log(`${multiplicador} x ${numero} = ${resultado}`);
    }
  }
  
  // Chamar a função com o número desejado (por exemplo, 5)
  calcularTabuada(5);
