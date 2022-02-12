const escola = "cod3r"

console.log(escola.charAt(4)) //retorna a 4ª letra 
console.log(escola.charAt(5)) //retorna Nulo pq 5º não existe

console.log('Escola '.concat(escola).concat("!")) //concatenação declarada
console.log('Escola ' + escola + "!") //Concatenação Simples
console.log(escola.replace(3,'e')) //substitue "3" por "e" - procura a string de valor declado e substitue por um novov valor (que tbm vai ser declarada) 

console.log('Ana,Maria,Pedro'.split(',')) //converte em Array. Vai pegar a "," e colocar espaço após.