function soBoaNoticia(nota) {
    if (nota >=7) {
        console.log('Aprovado com ' + nota);
    } 
    else {
        console.log('REPROVADO com Nota ' + nota);
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.5)

console.log('- - - - - - - - - - - - - - -  -');

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor);
    }
}

//valores Falsos
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)

//valores verdadeiro
seForVerdadeEuFalo('Oie')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})