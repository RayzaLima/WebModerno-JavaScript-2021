let numero = 1
{
    let numero = 2
    console.log('Dentro = ' ,numero);
}
console.log('Fora = ', numero);

// LET ela não subscreve valor. Após o valor ser declarado
// ele continua até o final do escopo.
// 