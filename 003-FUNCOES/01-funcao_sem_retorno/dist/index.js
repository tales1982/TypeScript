//void 
function semRetorno() {
    var Nome = prompt("Ola como voçe se chama.");
    alert("Ola ".concat(Nome, ", fa\u00E7a sua escola para comer."));
    menu();
}
//semRetorno()
function menu() {
    var escola = Number(prompt("========= MENU =========\n   1\u00B0 Peixe assado\n   2\u00B0 Frango a passarinho\n   3\u00B0 Bife\n   4\u00B0 Macarao a carbonada\n   5\u00B0 Ovo frito"));
    if (escola == 1) {
        alert("Otima escolha, ja ja seu Peixe assado estara ponto");
    }
    else if (escola == 2) {
        alert("Otima escolha, ja ja seu Frango a passarinho, estara ponto");
    }
    else if (escola == 3) {
        alert("Otima escolha, ja ja seu Bife, estara ponto");
    }
    else if (escola == 4) {
        alert("Otima escolha, ja ja seu Macarao a carbonada estara ponto");
    }
    else if (escola == 5) {
        alert("Otima escolha, ja ja seu Ovo frito estara ponto");
    }
    else {
        alert("Desculpe escola somente oque esta na lista.");
    }
}
semRetorno();
