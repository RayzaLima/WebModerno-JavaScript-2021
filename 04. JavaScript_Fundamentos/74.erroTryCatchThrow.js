function tratarErroELancar(erro) {
    // throw new Error('........');
    // throw 10
    // throw true
    // throw 'Ocorreu um erro'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErroELancar(e)
    } finally { // sempre será executado, caso sucesso(try) ou não(catch)
        console.log('Final');
    }
}

// descomentar para vefificar o alerta de erro
// const obj = { nome: 'Roberto' }
// imprimirNomeGritado(obj)

// comentar esse, caso queira ver o alerta de erro
const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)