/* Crie um programa que seja capaz de percorrer uma 
   lista de numeros e imprima cada numero par encontrado.
*/

// 1- Ideia = Criar uma função usando for

// Armazena os valores da lista em um array
let lista = [1, 3, 7, 2, 6, 3, 8, 4];

// Cria uma função para encontrar os números pares
function numerosPares(lista){
    // Iteração da lista
    for (let i = 0; i < lista.length; i++) {
        const numero = lista[i];

        // Condição para o número ser par | o resto da divisão por 2 tem que ser = 0
        if (numero % 2 === 0){
            console.log(numero);
        }
    }
}

// Invoca a função
numerosPares(lista);
