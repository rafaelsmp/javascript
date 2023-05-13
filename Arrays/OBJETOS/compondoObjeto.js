const cliente = {
    nome: "André",
    idade: 36,
    CPF: "01938562748",
    email: "andre@email.com",
    fones: ["5521988147632","5514982475644"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "Filha",
    dataNasc: "20/03/2011"

}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)