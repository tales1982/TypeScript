//Definindo uma clase em typescript
 class Maquina {
    nome:string;
    modelo: string;
    serie:number;
    maquinista:string;
    
    constructor(nome:string,modelo:string,serie:number,maquinista:string){
        this.nome = nome;
        this.modelo = modelo;
        this.serie = serie;
        this.maquinista = maquinista
    }
    apresentar(): void {
        const paragrafo = document.getElementById("result") as HTMLParagraphElement;
        paragrafo.innerHTML = `Nome............: ${this.nome} <br>
                               Modelo..........: ${this.modelo} <br>
                               Serie..............: ${this.serie} <br>
                               Maquinista...: ${this.maquinista}`;
      }
}

// Capturando o evento de envio do formulário
const formulario = document.getElementById('meuFormulario') as HTMLFormElement; 
// Obtém o elemento do formulário com a tipagem correta

formulario.addEventListener('submit',(ev)=>{
    ev.preventDefault()//evita que minha pagina recaregue
const inputElemnt = document.getElementById("nomeInput") as HTMLInputElement
const valorImput = inputElemnt.value;
const inputElemnt2 = document.getElementById("modelInput") as HTMLInputElement
const valorImput2 = inputElemnt2.value;
const inputElemnt3 = document.getElementById("serieInput") as HTMLInputElement
const valorImput3 = inputElemnt3.value;
const inputElemnt4 = document.getElementById("maquinista") as HTMLInputElement
const valorImput4 = inputElemnt4.value;

const maquina1 = new Maquina(valorImput,valorImput2,Number(valorImput3),valorImput4)
maquina1.apresentar()
limpaForm(formulario)


return maquina1
})

//2 maneiras de lipa o formulario


function limpaForm(formulario: HTMLFormElement): void {
    formulario.reset();
  }
/*
function limpaForm(){
    const inputElemnt = document.getElementById("nomeInput") as HTMLInputElement
const valorImput = inputElemnt.value = "";
const inputElemnt2 = document.getElementById("modelInput") as HTMLInputElement
const valorImput2 = inputElemnt2.value = "";
const inputElemnt3 = document.getElementById("serieInput") as HTMLInputElement
const valorImput3 = inputElemnt3.value = "";
const inputElemnt4 = document.getElementById("maquinista") as HTMLInputElement
const valorImput4 = inputElemnt4.value = "";
}
*/

