const cliente = {
    nome: "André",
    idade: 36,
    CPF: "01938562748",
    email: "andre@email.com"
}

const chaves = ["nome", "idade", "CPF", "email"]

console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))