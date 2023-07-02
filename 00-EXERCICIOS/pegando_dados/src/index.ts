alert("Bem vindo! A seguir pediremos que informe alguns dados.");
const nome:string | null = prompt("Porfavor informe o nome de usuário.");
const idade:number| null = Number(prompt("Digite sua idade"));
confirm(`Porfavor confirme que sua idade é ${idade} anos`)
alert(`Ola ${nome}, seja bem vindo, nossa equipe quer te dar os parabens pelo seus ${idade} anos`)