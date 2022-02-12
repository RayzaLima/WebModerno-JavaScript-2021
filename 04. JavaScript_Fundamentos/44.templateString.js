//String comun não aceita quebra de linha
const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + " !"


//Utilizando TemplateString - onde pode ser quebrada a linha pois ele considera a formatação(quebras de linhas, tabs, espaços em brancos)
const template = ` 
    Olá 
    ${nome}!` // simbole de graze (acento agudo invertido) // interpolação == converte a variável dentro do próprio textoInterpolação
console.log(concatenacao, template)

// expressões...
// para chamar uma expressão de template string ela começa com o sinal de $ (dolar) {} (abre e fecha chaves) e coloca a logica dentro da chaves
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Eii... ${up('cuidado')}!`)