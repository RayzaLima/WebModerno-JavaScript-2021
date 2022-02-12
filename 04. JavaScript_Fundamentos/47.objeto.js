const produto1 = {} //um par de chaves representa um objeto (de forma literal)
produto1.nome = 'Celular Ultra'
produto1.preco = 4998,90
produto1['Desconto legal'] = 0.40  //evitar atributos com espaçamento

console.log(produto1)

const produto2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    // obj: {
    //     nome02: 1,
    //     obj: {
    //         nome03: 2
    //     }
    // }
}

// transformando em json
// '{ "nome": "Camisa Polo", "preco": 79.90 }'

console.log(produto2)