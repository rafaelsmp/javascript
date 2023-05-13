const cliente = {
    nome: "André",
    idade: 36,
    CPF: "01938562748",
    email: "andre@email.com",
    fones: ["5521988147632", "5514982475644"],
    dependentes: [{
        nome: "Sara",
        parentesco: "Filha",
        dataNasc: "20/03/2011"
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "Filha",
    dataNasc: "01/04/2014"
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "01/04/2014")

console.log(filhaMaisNova[0].nome)