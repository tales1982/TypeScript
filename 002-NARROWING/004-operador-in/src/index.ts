//Operador IN

class Dog {
    name
    breed

    constructor(name:string, breed?:string){
        this.name = name
        if(breed){
            this.breed = breed
        }
    }
}

const turca = new Dog("Turca")
const bob = new Dog("Bob","Pastor Alemao")

function showDogTails(dog:object){
    if("breed" in dog){
        console.log(`O cachorro e da raça ${dog.breed}`)
    }else{
        console.log(`O cachorro e um vira lata`)
    }
}

showDogTails(turca)
showDogTails(bob)