//number -> pode-se acessar o valor atraves da variável 'this'
Number.prototype.entre = function (inicio, fim ) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado!!!')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação...')
    } else if (nota.entre(0, 3.99)) {
        console.log('REPROVADO__')
    } else {
        console.log('NOTA INVÁLIDA')
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(3)
imprimirResultado(-1)