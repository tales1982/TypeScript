// Definindo um símbolo
const mySymbol = Symbol("mySymbol");

// Usando um símbolo como chave de propriedade de objeto
const obj = {
  [mySymbol]: "Valor do símbolo"
};

console.log(obj[mySymbol]); // Valor do símbolo

// Iterando sobre as propriedades de um objeto, incluindo os símbolos
const symbols = Object.getOwnPropertySymbols(obj);
symbols.forEach(symbol => {
  console.log(obj[symbol]); // Valor do símbolo
});
