//AULA IMPORTANTE

function Carro (velocidadeMaxima = 200, delta = 5) {
    // atributo provado
    let velocidadeAtual = 0

    // Metodo publico (usando This)
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Metodo Publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())