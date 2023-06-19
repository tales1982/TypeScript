/*
1- Vamos criar uma funcao que recebe review dos usuarios, precisamos utilizar o narrowing para receber o dado:
2- As possibilidades sao boolean e number;
3- Serao enviados números de 1 a 5 (estrelas), prever uma mensagem para cada umas dessas notas;
4- Ou false, que é quando u usuario nao deixa um review, prever um retorno para este caso tambem;
*/

function userReview(){
    let opcao: true|false
let opcao2 = prompt(`Voce gostaria de avaliar noso site Y / N`);
if(opcao2 === "y"){
    opcao = true
}else opcao = false

    if(opcao === true){
        const avaliaNota: number = Number(prompt(`Qual sua nota de 1 a 5;
        Avaliaçao;
        1- Muito Baixa
        2- Baixa
        3- Medio
        4- Alto
        5- Muito Alto`))
        alert(`Obrigado por ter avaliado nosso site em ${avaliaNota}`)
}else{
    alert("Obrigado pela sua visita")
}
}

userReview()