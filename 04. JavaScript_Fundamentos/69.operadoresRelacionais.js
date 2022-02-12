console.log('01:', '1' == 1); // '1' é igual a 1 = verdadeiro
console.log('02:', '1' === 1); // '1' é igual e do mesmo tipo de 1 = falso ('1'= string / 1= number)
console.log('03:', '3' != 3); // '3 é diferente de 3 = false
console.log('04:', '3' !== 3); // '3' é diferente e do mesmo tipo de 3 = true ('3'= string / 3= number)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09:', d1 === d2);
console.log('10:', d1 == d2);
console.log('11:', d1.getTime() === d2.getTime());
console.log('12:', undefined === null);
console.log('13:', undefined == null);