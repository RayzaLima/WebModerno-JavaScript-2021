// Armazenando função em uma variavel

// exemplo de função anonima == quando a função não tem nome
const imprimirSoma = function (a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3)
console.log('- - - - - - - - - - - - - -');

// Armazenando função arrow em uma variavel ( a => substitui onome "function")
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 5));
console.log('- - - - - - - - - - - - - -');

// Retorno Implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 6));