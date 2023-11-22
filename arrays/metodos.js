// Criando um array
var frutas = ["maçã", "banana", "cereja"];

// Acessando elementos do array
console.log(frutas[0]); // Saída: maçã
console.log(frutas[1]); // Saída: banana

// Modificando um elemento do array
frutas[1] = "pera";

// Adicionando elementos ao final do array
frutas.push("manga");

// Adicionando elementos no início do array
frutas.unshift("melão");

// Adicionando elementos ao final do array
frutas.shift("melão");

// Removendo o último elemento do array
frutas.pop();

// Verificando o tamanho do array
console.log(frutas.length); // Saída: 3