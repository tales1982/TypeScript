/*
1- Vamos criar uma funcao que recebe review dos usuarios, precisamos utilizar o narrowing para receber o dado:
2- As possibilidades sao boolean e number;
3- Serao enviados números de 1 a 5 (estrelas), prever uma mensagem para cada umas dessas notas;
4- Ou false, que é quando u usuario nao deixa um review, prever um retorno para este caso tambem;
*/
function userReview() {
    var opcao;
    var opcao2 = prompt("Voce gostaria de avaliar noso site Y / N");
    if (opcao2 === "y") {
        opcao = true;
    }
    else
        opcao = false;
    if (opcao === true) {
        var avaliaNota = Number(prompt("Qual sua nota de 1 a 5;\n        Avalia\u00E7ao;\n        1- Muito Baixa\n        2- Baixa\n        3- Medio\n        4- Alto\n        5- Muito Alto"));
        alert("Obrigado por ter avaliado nosso site em ".concat(avaliaNota));
    }
    else {
        alert("Obrigado pela sua visita");
    }
}
userReview();
