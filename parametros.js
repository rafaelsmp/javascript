function soma(){
    return 2 + 2;
}

function somaOutroNumero(){
    return 50 + 25;
}

// console.log(soma())
// console.log(somaOutroNumero())



//parametros de função

function soma (numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(2 , 2))
console.log(soma(5232 , 6432))
console.log(soma(2362 , -363262))


//parametros x argumentos
//ordem dos parâmetros


function nomeIdade (nome, idade) {
    return `Meu nome é ${nome}, e minha idade é ${idade}.`
}


console.log(nomeIdade("Rafael", 38))


function multiplica (numero3, numero4){
    return numero3 * numero4
}

console.log(multiplica(soma(2, 3) , soma(4, 5)))