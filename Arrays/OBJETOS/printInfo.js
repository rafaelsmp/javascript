const cliente = {
    nome: "André",
    idade: 36,
    CPF: "01938562748",
    email: "andre@email.com"
}

console.log(`O nome do cliente é ${cliente.nome}, e ele tem ${cliente.idade} anos. `)

console.log(`O seu CPF é: ${cliente.CPF.substring(0,3)}***.***-**`)