function test1(num) {
    if (num > 7)
        console.log(num)
         
    console.log('Final') //sempre vai ser executada pois tá fora do bloco IF
}

test1(6)
test1(8)

console.log('- - - - - - - - - - - - - - -  -');

function test2(num) {
    if (num > 7); { //cuidado com o ' ; ' , não usar com as estruturas de controles
        console.log(num)
    }
}

test2(6)
test2(8)