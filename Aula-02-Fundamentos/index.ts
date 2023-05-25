//NUBER
let a: number = 20;
let b: number = 10.12345;
console.log(a , b);
console.log(typeof a);
console.log(b.toPrecision(3))


//STRING

let fristname: string = "Tales";
console.log(fristname.toUpperCase());
const lastName: string = "Lima";
const age: number = 40
const fullName: string = fristname + "  " +lastName;
console.log(fullName + " " +"tem " + age+ " anos."); 

//boolean
const verdade:boolean = true;
const mentira: boolean = false;

console.log(`${fristname} tem ${ age} ${ verdade}`);
console.log(`${fristname} tem ${age - 10} anos ${mentira}`);
console.log(typeof verdade, typeof lastName)