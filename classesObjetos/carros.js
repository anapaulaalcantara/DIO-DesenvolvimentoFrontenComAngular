/*
    1) Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.


class Carro {
    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoEmReais(percursoEmKm, precoCombustivel) {
        let gastoEmReais = (percursoEmKm / this.gastoMedioPorKm) * precoCombustivel;
        console.log(`O gasto em reais no percurso de ${percursoEmKm}km é R$${gastoEmReais.toFixed(2)} `)
    }
}

let civic2017 = new Carro('Honda', 'Preto', 14);
console.log(civic2017);
civic2017.calcularGastoEmReais(320, 5.89);
*/

//  Modifiquei devido as observaçoes feitas no exercício pessoaImc.js sobre o uso do return
class Carro {
    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoEmReais(percursoEmKm, precoCombustivel) {
        return ((percursoEmKm / this.gastoMedioPorKm) * precoCombustivel).toFixed(2);      
    }
}

let civic2017 = new Carro('Honda', 'Preto', 14);
console.log(civic2017.calcularGastoEmReais(320, 5.89));


