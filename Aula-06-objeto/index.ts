/*
Tipos de Objetos.
Sintaxe é {proprieda:tipo,propriedade2:tipo2}
Ou seja, estamos determinando quas tipos as propriedades de um objeto possuem.
*/

function passandoCordenadas(cordenada:{x: number, y:number}){
    console.log(`Cordenada X : ${cordenada.x}`);
    console.log(`Cordenada Y : ${cordenada.y}`);
}

const cordenadaLocal = {x: 541,y: 87.9};
console.log(cordenadaLocal);