"use strict";
//vareaveis -> inferencia x ammotation
//ammotation
//string, boolean, number, ....
let x = 10;
x = 6;
console.log(x);
//inferencia
const y = 12;
//tipos basicos
let fristName = "Tales";
let age = 40;
let isAdmin = true;
//declarando  um Array em typeScript
const myNumber = [1, 2, 3];
console.log(myNumber);
console.log(myNumber.length);
//TUPLAS -> tuple
let myTuplas;
myTuplas = [20, "tales", ["ola", "teste"]];
console.log(myTuplas);
//object literals -> {prop: value}
const user = {
    name: "Tales",
    age: 40
};
console.log(user);
console.log(user.name);
//ANY
let a = 10;
console.log(a);
a = "teste";
console.log(a);
a = true;
console.log(a);
//Union type
let id;
id = "tales";
console.log(id);
id = 200;
console.log(id);
const usuario = 40;
console.log(usuario);
const userId = "TALES";
console.log(userId);
const verdadeiro_falso = true;
console.log(verdadeiro_falso);
//enum
var tamanho;
(function (tamanho) {
    tamanho["P"] = "Pegqueno";
    tamanho["M"] = "Medio";
    tamanho["G"] = "grande";
})(tamanho || (tamanho = {}));
const camisa = {
    name: "Camisa de gola V",
    size: tamanho.M
};
console.log(camisa);
