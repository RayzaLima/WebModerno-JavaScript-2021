//Callback - passar uma função para outra função e quando um determinado event(nesse caso é cada 1 dos elementos [elemento + indice]) acontecer ela ser chamada de volta
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