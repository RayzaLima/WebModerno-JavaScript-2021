// random = valor aleatório
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj)); // chama a função rand, mas usa uma contante "obj" definindo os parametros de min=40 a max=55
console.log('- - - - - - - - - - - - - -');

console.log(rand({min: 955})); //chama a função rand(pegando o valor de Max = 1000), definindo só o valor de minimo = 955
console.log('- - - - - - - - - - - - - -');

console.log(rand({})); // chama a função rand usando os valores definidos por default min=0 a max=1000
console.log('- - - - - - - - - - - - - -');

console.log(rand()); // ERRO (chama a função mas não chama seus parametros "{ }" como a função anterior)