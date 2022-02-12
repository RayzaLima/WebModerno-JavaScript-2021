// Operador Ternário = operador que tem 3 operandos (tem que colocar a interrogação depois da 1ª parte(nota =>7))

// função usando arrow function ( => )
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1));
console.log(resultado(5.5));

// função usando arrow function( =>) com corpo // FUNCIONA DO MESMO JEITO
// const resultado = nota => {
//     return nota >= 7 ? 'Aprovado' : 'Reprovado'
// }

// console.log(resultado(7.1));
// console.log(resultado(5.5));