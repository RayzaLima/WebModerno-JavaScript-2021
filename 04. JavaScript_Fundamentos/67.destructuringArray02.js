// uma vez desestruturado o que vc recebe não é um arrey e sim atributos que depois, vão ser passados como arrays
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])); // passa o valor de min e max (não precisa usar os nomes/ como é array basta apenas os valores)
console.log('- - - - - - - - - - - - - -');

console.log(rand([992])); // passa apenas o valor de min
console.log('- - - - - - - - - - - - - -');

console.log(rand([, 10])); // passa apenas o valor de Max (o min fica 0 como default)
console.log('- - - - - - - - - - - - - -');

console.log(rand([])); // chama a função usando seu array min e max como default
console.log('- - - - - - - - - - - - - -');

console.log(rand()); // ERRO (não passa nada / nada = nem o array da função como no Console.log anterior)