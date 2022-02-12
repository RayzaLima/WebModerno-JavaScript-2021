// Operador de desestruturação (ele tira da estrutura), ele extrai de um objeto seus atributos, extrai de um array os elementos.
// PARA USAR O OPERADOR DETRUCTION: para objeto ele usa {} ; para array usa-se []

// nono recurso ES2015
const pessoa = {
    nome: 'Bruna',
    idade: 27,
    endereco: {
        rua: 'Rua Dois',
        numero: 215
    }
}

const {nome, idade} = pessoa
console.log(nome, idade);
console.log('- - - - - - - - - - - - - -');

const {nome: n, idade: i} = pessoa
console.log(n, i);
console.log('- - - - - - - - - - - - - -');

const {sobrenome, bemHumorada = true} = pessoa // foi atribuido a bemHumorada o valor padrão, caso não tenha nada em pessoa
console.log(sobrenome, bemHumorada);
console.log('- - - - - - - - - - - - - -');

// const {endereco} = pessoa
// console.log(endereco);
const {endereco: {rua, numero, cep}} = pessoa
console.log(rua, numero, cep);
