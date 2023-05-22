function sendSpace(name:string,capitain:string){
    const spaceship = {
        name,
        capitain,
        speed: 20,
        inMission: true,
        crew:[]
    }
    alert(`A nave ${spaceship.name} comandada pelo capitao ${spaceship.capitain} fo enviada em uma misao.`)
    return spaceship;
}

function accelerate(targetSpeed:number, spaceship:{name: string, speed: number}){
    if (spaceship.speed > targetSpeed){
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`)
    }else if(spaceship.speed < targetSpeed){
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`)
    }else{
        alert(`Mantendo a velocidade da ${spaceship.name}`)
    }
}

const spaceshipname = prompt('Insira o nome da nave a ser enviada.');
const spaceshiCaptain = prompt('Insira o nome do capitao');
sendSpace(spaceshipname,spaceshiCaptain)