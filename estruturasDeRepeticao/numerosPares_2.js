/* Crie um programa que seja capaz de percorrer uma 
   lista de numeros e imprima cada numero par encontrado.
*/

// 2- Ideia = simplificar usando for of

// Armazena os valores em um array
let lista = [1, 3, 7, 2, 6, 3, 8, 4];

// Cria a função para descobrir se o número é par
function numerosPares(lista) {
    // Iteração numero da lista
    for (let numero of lista) {
        // Condição para o número ser par | o resto da divisão por 2 tem que ser = 0
        if (numero % 2 === 0) {
            console.log(numero);
        }
    }
}

numerosPares(lista);