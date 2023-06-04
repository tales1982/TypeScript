class Pessoa{
    nome:string;
    idade:number;
        constructor(nome:string,idade:number){
            this.nome = nome;
            this.idade = idade;
        }

    apresentar():void{       
        const paragrafo = document.querySelector(".paragrafo") as HTMLFormElement;
        paragrafo.innerHTML = `Nome..: ${this.nome}<br>Idade..: ${this.idade}`
    }
}

const formulario = document.querySelector(".form") as HTMLFormElement

formulario.addEventListener('submit',(ev) =>{
    ev.preventDefault()

    const inputNome = document.querySelector("#nome") as HTMLFormElement
    const valorInputNome = inputNome.value;

    const inputIdade = document.querySelector("#idade") as HTMLFormElement
    const valorInputIdade = inputIdade.value;

    const novoAluno = new Pessoa(valorInputNome,valorInputIdade)
    novoAluno.apresentar()

    console.log(valorInputNome)
})

class Aluno extends Pessoa{
    matricula:number;
    
       
}

const alunoNove = new Aluno("Theo",1)

