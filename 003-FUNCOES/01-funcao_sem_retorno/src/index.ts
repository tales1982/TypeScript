//void 

function semRetorno():void{
    const Nome:string = prompt("Ola como voçe se chama.")
    alert(`Ola ${Nome}, faça sua escola para comer.`)
    menu()
    

}

//semRetorno()

function menu():void{
    const escola:number = Number(prompt(`========= MENU =========
   1° Peixe assado
   2° Frango a passarinho
   3° Bife
   4° Macarao a carbonada
   5° Ovo frito`))
if(escola == 1){
    alert("Otima escolha, ja ja seu Peixe assado estara ponto")
}else if(escola == 2){
    alert("Otima escolha, ja ja seu Frango a passarinho, estara ponto")
}else if(escola == 3){
    alert("Otima escolha, ja ja seu Bife, estara ponto")
}else if(escola == 4){
    alert("Otima escolha, ja ja seu Macarao a carbonada estara ponto")
}else if(escola == 5){
    alert("Otima escolha, ja ja seu Ovo frito estara ponto")
}else{
    alert("Desculpe escola somente oque esta na lista.")
}
}


semRetorno()
 