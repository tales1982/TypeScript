/*
A Interface é uma sintaxe do TypeScript que define as especificações de uma entidade. Ou seja, define o contrato, a estrutura de uma Classe, Objeto ou Função.
*/
interface Point  {
    x:number
    y:number
    z: number
}


function showcoodernads(obj:Point){
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z} `)
}
const coodernada:Point = {
    x:10,
    y:50,
    z:45
}

showcoodernads(coodernada)

//Outros exemplos

interface Maquinas{
    clientes:string
    marca:string
    modelo:string
    ano: number
    serial: number
    disponivel:boolean
}

const alugada: Maquinas = {
    clientes:"Tales",
    marca: 'Yamar',
    modelo:'Vio50',
    ano: 2006,
    serial: 123456879,
    disponivel: true
}
function clinet(obj: Maquinas){
    if(obj.disponivel == true){
        console.log(`O Cliente ${obj.clientes} alugou a maquina ${obj.modelo} do ano ${obj.ano} que tem o serial ${obj.serial},
 a maquina estava diponivel`)
    }else{
        console.log('A maquina nao esta diponivel')
    }
    
}

clinet(alugada)