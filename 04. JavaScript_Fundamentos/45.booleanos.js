let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // transforma o valor em verdadeiro ou falso 
// uma ! é "não" -- e duas !! é "não não" e volta pro valor original
// nesse caso, !!isAtivo é true (1 é = a true) -- se tivesse só !isAtivo seria false
console.log('- - - - - - - - - - - - - -');

console.log('os verdadeiros......') // todo número diferente de 0 é true
console.log(!!3)
console.log(!!-1) 
console.log(!!' ') // espaço em branco
console.log(!![ ]) // Array vazio
console.log(!!{ }) // objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('- - - - - - - - - - - - - -');

console.log('os Falsos......')
console.log(!!0);
console.log(!!'') //vazio
console.log(!!null)
console.log(!!NaN) // leia-se "Not a Number" (NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('PRA FINALIZAR......')
console.log(!!('' || null || 0 || ' '));

console.log('- - - - - - - - - - - - - -');
let nome = ''
console.log(nome || 'Desconhecido')

let nome2 = 'Lucas'
console.log(nome2 || 'Desconhecido')