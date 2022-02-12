const pessoa = {
    suadacao: 'Bom dia!',

    falar() {
        console.log(this.suadacao);
    }
}
pessoa.falar()

console.log('-----------------')

const falar = pessoa.falar
falar()

console.log('-----------------')

const falarDePessoa = pessoa.falar.bind(pessoa) // "bind" passa o objeto do qual quer ser resolvido o "this"
falarDePessoa()