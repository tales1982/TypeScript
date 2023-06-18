//Props opcionais
//O (?) seguinifica que o tercero paramentro e opcional 
function showNumbers(a, b, c) {
    console.log(`A: ${a}`);
    console.log(`B: ${b}`);
    //Se o terceiro paramentro foi pasado vou emprimir senao fore nao imprimo
    if (c) { //se c for verdadeiro imprimo
        console.log(`C: ${c}`);
    }
}
showNumbers(10, 20);
showNumbers(5, 15, 25);
//VALIDACAO DE ARGUMENTO OPCIONAL
function Greeting(fristName, lastName) {
    if (lastName !== undefined) {
        return console.log(`your frist Name is ${fristName} and you last Name is ${lastName}`);
    }
    return console.log(`Your frist Name is ${fristName}`);
}
Greeting("Tales", "Lima");
