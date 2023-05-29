//Estou dando a opcao do usuario digitar uma strig ou number
function userId(name) {
    console.log("O seu nome de usuario \u00E9 ".concat(name));
}
var nome = prompt("Digite o usuario");
userId(nome);
//outro exemplo
function showBalance(balance) {
    console.log("O saldo da sua conta \u00E9 de ".concat(balance, " "));
}
showBalance("ZERADA");
showBalance(735.00);
//outro exemplo de declara um array tipado com o uso do union
var arr2 = [1, "tales", true];
console.log(arr2);
//Uso avançado do union usando o typeof
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario nao aprovado";
    }
    return "A fun\u00E7ao do usuario \u00E9 ".concat(role);
}
console.log(showUserRole(true));
console.log(showUserRole("Admin"));
