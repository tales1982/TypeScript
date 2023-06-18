
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

//literal types
let teste: "autenticado" | null;
teste = "autenticado";
teste = null;

//funcoes
function sum(a: number, b:number){
    return a + b;
}
console.log(12,12)

function sayhelloTo(name: string): string{
    return `Hello ${name}`;
}

console.log(sayhelloTo("TALES"));

function logger(msg: string): void{
    console.log(msg);
}//nao retorna nada

logger("teste");


function greeting(name: string, greet?: string){
    if(greet){
        console.log(`Ola ${greet} ${name}`);
        return;
    }
    console.log(`Ola ${name}`);
}

greeting("Jose");
greeting("Pedro","Sir");


//interfaces
interface MathFunctionParams{
    n1: number,
    n2: number
}

function sumNumber(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}

console.log(sumNumber({n1: 1, n2: 2}));

function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
    n1:  5,
    n2:  10,
};

console.log(multiplyNumbers(someNumbers));

//narrowing
//checagem tipos
function doSomething(info: number|boolean){
    if(typeof info === "number"){
        console.log(`O numero é ${info}`)
        return;
    }
    console.log(("Nao foi passado um numero"));
}

doSomething(5);
doSomething(true);

//generics

function showArraysItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1,2,3];
const a2 = ["a","b","c"];

//clases
class client {
    name;
    role;
    isApproved;

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName(){
        console.log(`O nome do usuario é ${this.name}`);
    }

    showUserRole(canShow: Boolean):void{
        if(canShow){
        console.log(`Idade do usuario é: ${this.role}`);
        return;
        }
        console.log("Informacao restrita!")
    }

}

const zeca = new client("Zeca","Admin",true);

console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);

//interfaces em classes

interface IVehicle{
    brand: string
    showBrand():void
}

class Car implements IVehicle{
    
    brand
    wheels

    constructor(brand: string,wheels: number){
        this.brand = brand
        this.wheels = wheels
    }
    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car("VW",4);

fusca.showBrand();

//herança

class SuperCar extends Car{
    engine;

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new SuperCar("Audi",4, 2.0);
a4.showBrand();


//decorators
function BaseParameters(){
    return function <T extends {new (...args: any[]): {}}>(constructor:T){
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}

@BaseParameters()
class Person {
    name;

    constructor(name:string){
        this.name = name;
    }
}
const sam = new Person("Sam");
console.log(sam);