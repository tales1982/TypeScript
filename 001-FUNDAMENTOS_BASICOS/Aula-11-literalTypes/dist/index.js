/*
-------------------- Literal types ---------------------
Literal types é um recurso que permite colocar valores como tipos;
Isso restringe o uso a nao só tipos como também os proprios valores;
Este tecurso é muito utilizado com Union types
 */
function caminho(direcao) {
    if (direcao == "left") {
        console.log("Vire a esquerda");
    }
    else if (direcao == "right") {
        console.log("Vire a direita");
    }
    else {
        console.log("Va em frente");
    }
}
caminho("centre");
