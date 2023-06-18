/*
Tipo de parametro de funcao
podemos definir o tipo de cada parametro de uma funcao;
Assin condicionamos o seu uso correto;
A sintaxe é functio minhafucao(nome:string){}
Agora podemos passar o parametro nome, apenas como texto;
*/

function sum(a:number,b:number){
    return a + b
}

console.log(sum(5,9))

//Retorno de funcao

function saudacao(nome:string):string{
    return `Ola ${nome}`
}

console.log(saudacao("THEO"))
console.log(saudacao("Tales"),"Voce tem " ,sum(10,30), "Anos");

//funcoes anonimas
//o setTimeout permite executar uma funcao anonima como argumento.

 setTimeout(function(){
    
    const salario:number = 1000
    console.log(salario)
 })
 