function sendSpace(name, capitain) {
    var spaceship = {
        name: name,
        capitain: capitain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capitao ").concat(spaceship.capitain, " fo enviada em uma misao."));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name));
    }
}
var spaceshipname = prompt('Insira o nome da nave a ser enviada.');
var spaceshiCaptain = prompt('Insira o nome do capitao');
sendSpace(spaceshipname, spaceshiCaptain);
