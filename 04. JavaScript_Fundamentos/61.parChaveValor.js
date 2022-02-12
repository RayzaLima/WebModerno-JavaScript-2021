//par chave/valor
const saudacao = 'oiee' //contexto léxico 01

function exec() {
    const saudacao = 'Falaaaa' //contexto léxico 02
    return saudacao;
}

//Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Carla',
    idade: 26,
    peso: 51,
    endereco: {
        logradouro: 'Rua 5',
        numero: 25
    }
}

console.log(saudacao);
console.log('- - - - - - - - - - - - - -');
console.log(exec());
console.log('- - - - - - - - - - - - - -');
console.log(cliente);