
//vareaveis -> inferencia x ammotation

//ammotation
//string, boolean, number, ....

let x: number = 10;
x = 6;
console.log(x);

//inferencia
const y = 12;

//tipos basicos
let fristName: string = "Tales";
let age: number = 40;
let isAdmin: boolean = true;

//declarando  um Array em typeScript
const myNumber: number[]=[1,2,3];

console.log(myNumber);
console.log(myNumber.length);


//TUPLAS -> tuple

let myTuplas:[number,string,string[]];
myTuplas = [20,"tales",["ola","teste"]]
console.log(myTuplas);

//object literals -> {prop: value}

const user:{name:string; age:number} = {
    name:"Tales",
    age: 40
}

console.log(user);
console.log(user.name);

//ANY

let a: any = 10;
console.log(a);
a = "teste";
console.log(a);
a = true;
console.log(a);

//Union type
let id: string | number
id = "tales"
console.log(id);
id = 200;
console.log(id);

//Type Alias
type meTipoDeId = number | string | boolean

const usuario: meTipoDeId = 40;
console.log(usuario);
const userId: meTipoDeId = "TALES";
console.log(userId);
const verdadeiro_falso: meTipoDeId = true;
console.log(verdadeiro_falso);

//enum

enum tamanho{
    P = "Pegqueno",
    M = "Medio",
    G = "grande"
}

const camisa = {
    name:"Camisa de gola V",
    size:tamanho.M
}

console.log(camisa);