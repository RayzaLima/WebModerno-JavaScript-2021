function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (min - max) * min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 15)
    console.log(`o numero é: ${opcao}.`);
} while (opcao != -1)

console.log('Até a proxima');

//Mesmo que a variavel começe com o valor default, ele executa pelo menos 1x pois o teste tá no final do código
