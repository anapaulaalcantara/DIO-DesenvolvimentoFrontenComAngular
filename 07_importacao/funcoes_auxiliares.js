/*
    Funções que serão exportados para o main.js
*/

// Declarando as funções
function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

// Exportando um objeto que tem as funções gets e print
module.exports = { gets, print};