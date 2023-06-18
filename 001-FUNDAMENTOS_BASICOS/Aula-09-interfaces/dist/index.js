function showcoodernads(obj) {
    console.log("X: ".concat(obj.x, " Y: ").concat(obj.y, " Z: ").concat(obj.z, " "));
}
var coodernada = {
    x: 10,
    y: 50,
    z: 45
};
showcoodernads(coodernada);
var alugada = {
    clientes: "Tales",
    marca: 'Yamar',
    modelo: 'Vio50',
    ano: 2006,
    serial: 123456879,
    disponivel: true
};
function clinet(obj) {
    if (obj.disponivel == true) {
        console.log("O Cliente ".concat(obj.clientes, " alugou a maquina ").concat(obj.modelo, " do ano ").concat(obj.ano, " que tem o serial ").concat(obj.serial, ",\n a maquina estava diponivel"));
    }
    else {
        console.log('A maquina nao esta diponivel');
    }
}
clinet(alugada);
