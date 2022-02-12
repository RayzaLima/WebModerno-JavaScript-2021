let valor //Não inicializada (sem valor atribuido)
console.log(valor)

valor = null  // Null quer dizer "ausência de valor"
console.log(valor)
// console.log(valor.toString()) //Erro!!

const produto = {}
console.log(produto.preco)
console.log(produto) //é um objeto vazio, assim como está declarado na linha 8

produto.preco = 5.99

console.log(produto) // informa o atributo preço

produto.preco = undefined // EVITAR atribuir undefined