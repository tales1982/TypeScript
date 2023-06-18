"use strict";
/*
Tipos de Objetos.
Sintaxe é {proprieda:tipo,propriedade2:tipo2}
Ou seja, estamos determinando quas tipos as propriedades de um objeto possuem.
*/
function passandoCordenadas(cordenada) {
    console.log(`Cordenada X : ${cordenada.x}`);
    console.log(`Cordenada Y : ${cordenada.y}`);
}
const cordenadaLocal = { x: 541, y: 87.9 };
console.log(cordenadaLocal);
//Criando Objeto
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
// Uso do objeto Pessoa
const pessoa1 = new Pessoa("João", 25);
pessoa1.saudacao(); // Saída: Olá, meu nome é João e tenho 25 anos.
const pessoa2 = new Pessoa("Maria", 30);
pessoa2.saudacao(); // Saída: Olá, meu nome é Maria e tenho 30 anos.
