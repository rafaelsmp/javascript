//delacação de função

function minhaFuncao(param){
    //bloco de código
}

minhaFuncao("param")


//expressao de função 
// a função não tem nome (opicional), geralmente não é utilizado.

const soma = function(num1, num2) {return num1 + num2}
console.log( soma( 2, 2 ) );

//Diferença principal  : HOISTING
//função e var são "listadas" no topo

console.log( apresentar() );

function apresentar(){
    return "Olá!";
}

console.log( soma2( 1, 1) );
const soma2 = function(num1, num2) {return num1 + num2}
