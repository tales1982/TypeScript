//Definindo uma clase em typescript
var Maquina = /** @class */ (function () {
    function Maquina(nome, modelo, serie, maquinista) {
        this.nome = nome;
        this.modelo = modelo;
        this.serie = serie;
        this.maquinista = maquinista;
    }
    Maquina.prototype.apresentar = function () {
        var paragrafo = document.getElementById("result");
        paragrafo.innerHTML = "Nome............: ".concat(this.nome, " <br>\n                               Modelo..........: ").concat(this.modelo, " <br>\n                               Serie..............: ").concat(this.serie, " <br>\n                               Maquinista...: ").concat(this.maquinista);
    };
    return Maquina;
}());
// Capturando o evento de envio do formulário
var formulario = document.getElementById('meuFormulario');
// Obtém o elemento do formulário com a tipagem correta
formulario.addEventListener('submit', function (ev) {
    ev.preventDefault(); //evita que minha pagina recaregue
    var inputElemnt = document.getElementById("nomeInput");
    var valorImput = inputElemnt.value;
    var inputElemnt2 = document.getElementById("modelInput");
    var valorImput2 = inputElemnt2.value;
    var inputElemnt3 = document.getElementById("serieInput");
    var valorImput3 = inputElemnt3.value;
    var inputElemnt4 = document.getElementById("maquinista");
    var valorImput4 = inputElemnt4.value;
    var maquina1 = new Maquina(valorImput, valorImput2, Number(valorImput3), valorImput4);
    maquina1.apresentar();
    limpaForm(formulario);
    return maquina1;
});
//2 maneiras de lipa o formulario
function limpaForm(formulario) {
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
