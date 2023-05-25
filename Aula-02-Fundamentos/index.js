//NUBER
var a = 20;
var b = 10.12345;
console.log(a, b);
console.log(typeof a);
console.log(b.toPrecision(3));
//STRING
var fristname = "Tales";
console.log(fristname.toUpperCase());
var lastName = "Lima";
var age = 40;
var fullName = fristname + "  " + lastName;
console.log(fullName + " " + "tem " + age + " anos.");
//boolean
var verdade = true;
var mentira = false;
console.log("".concat(fristname, " tem ").concat(age, " ").concat(verdade));
console.log("".concat(fristname, " tem ").concat(age - 10, " anos ").concat(mentira));
console.log(typeof verdade, typeof fristname);
