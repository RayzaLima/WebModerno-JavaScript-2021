
// função é um bloco de código nomeado, pra que vc possa chamar esse bloco quantas vezes quiser. 

// FUNÇÃO SEM RETORNO
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

console.log('- - - - - - - - - - - - - -');
// FUNÇÃO COM RETORNO
function soma(a, b = 0) {
    return a + b
}
console.log(soma(12,3))
console.log('- - - - - - - - - - - - - -');
console.log(soma(10)) // retorna valor pq B já foi definida como 0