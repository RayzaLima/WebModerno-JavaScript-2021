function soma() {
    let soma = 0
    for (i in arguments) {
            soma += arguments[i]    
    }
    return soma
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));
console.log(soma(1.1, 2.2, "Teste")); //Soma os 2 primeiros e concatena com a a String
console.log(soma("a", "b", "_Teste"));

// "+="" - atribuição aditiva: adiciona o valor do operando direito a uma variável e atribui o resultado à variável