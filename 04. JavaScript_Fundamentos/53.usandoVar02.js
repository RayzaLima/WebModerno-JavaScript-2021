var numero = 1
{
    var numero = 2
    console.log('Dentro = ', numero);
}
// subescreve o valor de 01 (VAR possui escopo Global)
console.log('Fora = ', numero);