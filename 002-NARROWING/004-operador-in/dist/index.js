//Operador IN
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var turca = new Dog("Turca");
var bob = new Dog("Bob", "Pastor Alemao");
function showDogTails(dog) {
    if ("breed" in dog) {
        console.log("O cachorro e da ra\u00E7a ".concat(dog.breed));
    }
    else {
        console.log("O cachorro e um vira lata");
    }
}
showDogTails(turca);
showDogTails(bob);
