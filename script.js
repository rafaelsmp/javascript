//var - variável solta, pode ser declarada em qualquer lugar do código


var altura = 5;
var comprimento = 7;
//var area;
var area = altura * comprimento;

console.log(area)


//let - a declaração dessa variável deve ser antes da atribuição


let forma = "retangulo"
let altura2 = 5;
let comprimento2 = 7;
let area2;

if (forma === "retangulo"){
    area2 = altura2 * comprimento2;
}
else{
    area2 = (altura2 * comprimento2) / 2;
}

console.log(area2 + " é a área do " + forma)



//const - não conseguimos alterar o valor da variável


const forma3 = "quadrado"
const altura3 = 5;
const comprimento3 = 7;
let area3 = null;

if(forma3 === "quadrado"){
    area3 = altura3 * comprimento3;
}
else{
    area3 = (altura3 * comprimento3) / 2;
}
console.log(area3)



//tipagem dinâmica - não precisa especificar o tipo da variável
//untyped

let minhaVar = 567;
    minhaVar = "texto";
    minhaVar = true;

//Multiparadigma - Resolver o mesmo problema de várias formas diferentes

//ES6/ES2015 - Versão mais famosa do JavaScript

//Linguagem interpretada - código executado 

//NodeJS - É um interpretador para executar códigos em JavaScript fora do navegador
