// == (comparação implícita)

const numero = 5;
const texto = "5"

console.log(numero == texto) //implicita
console.log(numero === texto) //explicita


//typeof

console.log(typeof numero) //number
console.log(typeof texto) //string

// == só compara o valor
// === compara o valor e o tipo de dados (boas práticas)

//conversão explícita

Number()
String()