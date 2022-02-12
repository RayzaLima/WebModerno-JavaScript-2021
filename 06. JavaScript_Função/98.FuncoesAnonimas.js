// Quando se trabalha com funções normais pode-se nomear as funções.
// FUNÇÕES ANÔNIMAS são funções sem nome!
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado (3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) //chamada do imprimirResultado + uma ArrowFunction
console.log('----------------------');

//Criando Função anônima dentro de um Objeto
const pessoa = {
    falar: function () {
        console.log('Opa');
    }
}

pessoa.falar()