const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // imprime apenas os indices selecionados

console.log(valores[4]) // não existe

valores[4] = 10
console.log(valores)
console.log(valores.length + ' elementos no array')

// PUSH função de array que adiciona novos elementos
valores.push ({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //retira o yltimo valor do array (nesse caso, TESTE)

delete valores[0]
console.log(valores)

console.log(typeof valores)