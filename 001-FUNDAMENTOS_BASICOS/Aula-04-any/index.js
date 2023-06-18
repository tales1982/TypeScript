"use strict";
/* O tipo Any
O Any transmite ao ts que qualquer tipo satisfaz a variavel;
Devemos evitar ao maximo ese tipo de dado, pois vai contra os principios do javaScript;
--> Dois casos de uso do Any: o tipo de dados realmente nao importa e arrays comdados de multiplos tipos
Vamos ver na pratica!
*/
const testArray = [1, 2, 3, { nome: "tales" }];
console.log(testArray);
testArray.push({fristName:"THEO"});
console.log(typeof testArray[3])
console.log(`O array tem ${testArray.length} elementos.`)
