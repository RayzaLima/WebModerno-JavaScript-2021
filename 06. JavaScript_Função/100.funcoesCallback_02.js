const notas = [7.5, 5.2, 7.9, 6.5, 9.0, 7.1, 3.6]

// PUSH adiciona um elemnto a um array(novo)
// Nesse exemplo o .Push está verificando os valores do arrei notas e adicionando ao array NotasBaixas. notasBaixas foi declarado como LET pois iria ser subscrito (pelo método .push)

// Sem Callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

console.log('----------- Com CallBack -----------');

// .filter é uma função que vai filtrar elementos diante de um array, por meio de uma determinada condição

// Com Callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2);

console.log('----------- Com Arrow Function -----------');

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3);