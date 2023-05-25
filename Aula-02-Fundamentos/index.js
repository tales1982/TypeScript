"use strict";
//NUBER
let a = 20;
let b = 10.12345;
console.log(a, b);
console.log(typeof a);
console.log(b.toPrecision(3));
//STRING
let fristname = "Tales";
console.log(fristname.toUpperCase());
const lastName = "Lima";
const age = 40;
const fullName = fristname + "  " + lastName;
console.log(fullName + " " + "tem " + age + " anos.");
//boolean
const verdade = true;
const mentira = false;
console.log(`${fristname} tem ${age} ${verdade}`);
console.log(`${fristname} tem ${age - 10} anos ${mentira}`);
console.log(typeof verdade, typeof lastName);
