//Estou dando a opcao do usuario digitar uma strig ou number

function userId(name: string | number){
    console.log(`O seu nome de usuario é ${name}`)
}
let nome = prompt("Digite o usuario");
userId(nome);

//outro exemplo

function showBalance(balance: string | number){
    console.log(`O saldo da sua conta é de ${balance} `);
}

showBalance("ZERADA");
showBalance(735.00);

//outro exemplo de declara um array tipado com o uso do union

const arr2: Array<number | string | boolean> = [1,"tales",true]
console.log(arr2);

//Uso avançado do union usando o typeof

function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuario nao aprovado"
    }
    return `A funçao do usuario é ${role}`
}

console.log(showUserRole(true));
console.log(showUserRole("Admin"));