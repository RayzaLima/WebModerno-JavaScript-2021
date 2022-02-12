// ceil -> opera um arredondamento (para cima)
// floor -> opera um arredondamento (para baixo)
console.log(Math.ceil(6.5))
console.log(Math.floor(6.5))

console.log('- - - - - - - - - - - - - -');

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'
console.log(obj1.nome);

console.log('- - - - - - - - - - - - - -');

// com a palavra reservada (this.) você consegue criar tanto atributos quanto funções que serão expostas pra fora.
function obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...');
    }
}
const obj2 = new obj('Cadeira')
const obj3 = new obj('Mesa')
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec()