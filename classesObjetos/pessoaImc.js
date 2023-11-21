/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;

3) Classifique o IMC:
Abaixo do peso: IMC menor que 18,5
Peso normal: IMC entre 18,5 e 24,9
Sobrepeso: IMC entre 25 e 29,9
Obesidade grau 1: IMC entre 30 e 34,9
Obesidade grau 2: IMC entre 35 e 39,9
Obesidade grau 3: IMC 40 ou superior
*/

/*
Usando console.log:
A função console.log é usada para exibir informações no console do navegador 
ou no ambiente Node.js, mas ela não retorna um valor que pode ser usado em outras partes do código.
Essa abordagem é útil para depuração e visualização imediata de resultados 
durante o desenvolvimento, mas pode não ser a melhor escolha se 
você precisar usar o valor calculado em outras partes do seu código.

class Pessoa{
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;   
    }

    calcularImc(){
        let imc = (this.peso / (this.altura * this.altura)).toFixed(2); 
        console.log(imc.toFixed(2));
    }
}

let jose = new Pessoa('José', 70, 1.75);
jose.calcularImc();
*/


/*
Usando return:
A declaração return é usada para devolver um valor do método para o chamador.
Essa abordagem é útil se você deseja usar o valor calculado em outras partes do seu código, 
atribuí-lo a uma variável, ou passá-lo como argumento para outras funções/métodos.
É a escolha apropriada se você deseja encapsular a lógica de cálculo e permitir que 
outros partes do código usem o resultado conforme necessário.
*/
class Pessoa{
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;      
    }

    calcularImc(){
        return (this.peso / (this.altura * this.altura)).toFixed(1);       
    }

    classificarImc(){
        let imc = this.calcularImc();
        if (imc < 18.5){
            return 'Abaixo do peso';
        } else if (imc >= 18.5){
            return 'Peso normal';
        } else if (imc >= 25){
            return 'Sobrepeso';
        } else if (imc >=30){
            return 'Obesidade grau 1';
        } else if (imc >= 35){
            return 'Obesidade grau 2';
        } else {
            return 'Obesidade grau 3';
        }
    }
}

let jose = new Pessoa('José', 70, 1.75);
console.log(jose.calcularImc());
console.log(jose.classificarImc());