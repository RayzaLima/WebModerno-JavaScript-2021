// função normal
let dobro = function (a) {
    return 2 * a
}

// função Arrow
dobro = (a) => {
    return 2 * a
}

// função Arrow simplificado ( usado para pequenas funções de 1 unica linha)
dobro = a => 2 * a
console.log(dobro(Math.PI))

// função normal
let ola = function () {
    return 'Olá'
}

// função Arrow
ola = ( ) => 'Olá'
console.log(ola());