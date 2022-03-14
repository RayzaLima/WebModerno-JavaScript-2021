//Callback - passar uma função para outra função e quando um determinado evento(nesse caso é cada 1 dos elementos [elemento + indice]) acontecer ela (função) será chamada de volta

// Nesse exemplo o callback é chamado para cada elemento
// Para cada elemento do Array ele chama o callback, passando o elemnto e o indice (um a um).

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function (fabricante) {
    console.log(fabricante);
})

console.log('-------MODO ARROW FUNCTION-----------')

//Modo Arrow
fabricantes.forEach(fabricante => console.log(fabricante))