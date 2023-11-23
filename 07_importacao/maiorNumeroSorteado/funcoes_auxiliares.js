/*
    Funções que serão exportados para o main.js
*/

/*
    Simulando a plataforma da DIO
*/
const entradas = [5, 50, 10, 98, 23]
let i = 0;

// Declarando as funções
function gets() {
    const numero = entradas[i];
    i++
    return numero;
}

function print(texto) {
    console.log(texto);
}

// Exportando um objeto que tem as funções gets e print
module.exports = { gets, print};