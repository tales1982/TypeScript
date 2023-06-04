class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        const paragrafo = document.querySelector(".paragrafo");
        paragrafo.innerHTML = `Nome..: ${this.nome}<br>Idade..: ${this.idade}`;
    }
}
const formulario = document.querySelector(".form");
formulario.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const inputNome = document.querySelector("#nome");
    const valorInputNome = inputNome.value;
    const inputIdade = document.querySelector("#idade");
    const valorInputIdade = inputIdade.value;
    const novoAluno = new Pessoa(valorInputNome, valorInputIdade);
    novoAluno.apresentar();
    console.log(valorInputNome);
});
class Aluno extends Pessoa {
}
const alunoNove = new Aluno("Theo", 1);
