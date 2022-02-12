const imprimirResultado = function (nota) {
    if(nota >= 7) {
        console.log('APROVADO...' );
    } else {
        console.log('REPROVADO !!!');
    }
}

imprimirResultado(8.5)
imprimirResultado(5)
imprimirResultado('Epa!') //como não é igual a 7, ao invés de acusar erro, ele imprime no console como reprovado (js é linguagem fracamente tipada)