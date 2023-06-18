/*
---------------------- Diferença entre types alias e interfaces -------------------------
Na maioria das veses podemos optar entre qualquer um dos recursos sem problemas;
A única diferença é que a interface pode ser alterada ao longo do codigo, ja o alias nao;
Ou seja, se pretendemos mudar como o tipo se conforma, devemos escolher a interface;
*/
var clinet = { nome: "Tales", idade: 40 };
console.log(clinet);
//Aqui ja nao e possivel editar meu type alias
/*
type DadosAlias = {
    age:number
}
*/
