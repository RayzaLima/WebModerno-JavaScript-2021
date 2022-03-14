// Criar de forma Literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array [a parte fun1(é o valor da forma Literal) e fun2(é o valor da variável)]
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3));

//Armazenar em um atributo de objeto
const objeto = {}
objeto.falar = function () { return 'Opa' }
console.log(objeto.falar());

// Passar uma função como parâmetro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

//Uma função pode Retornar ou Conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}
soma(2, 2) (4);

//armazena uma função(2, 3) numa variável e depois chama ela passando o valor da 2ª função(5)
//Como exemplo foi usado a função acima linhas 24 a 29
const cincoMais = soma(2, 3)
cincoMais(5)