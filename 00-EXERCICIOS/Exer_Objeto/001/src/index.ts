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
    apresentar():void{
        const paragrafo = document.getElementById("result") as HTMLAnchorElement
  paragrafo.innerHTML = `Nome..: ${ this.nome } -->
  Modelo..: ${ this.modelo } -->
  Serie...: ${ this.serie } -->
  Maquinista..: ${ this.maquinista}`
    }
}

// Capturando o evento de envio do formulário
const formulario = document.getElementById('meuFormulario') as HTMLFormElement; // Obtém o elemento do formulário com a tipagem correta

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
limpaForm()


return maquina1
})


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


