const clientes = [
    {
        nome: "André",
        idade: 36,
        CPF: "01938562748",
        email: "andre@email.com",
        fones: ["5521988147632", "5514982475644"],
        dependentes: [
            {
                nome: "Sara",
                parentesco: "Filha",
                dataNasc: "20/03/2011"
            },
            {
                nome: "Samia Maria",
                parentesco: "Filha",
                dataNasc: "01/04/2014"
            }
        ],
    },

    {
        nome: "Juliana",
        idade: 28,
        CPF: "01938562748",
        email: "juliana@email.com",
        fones: ["5521988147632", "5514982475644"],
        dependentes: [
            {
                nome: "Pedro",
                parentesco: "Filho",
                dataNasc: "05/09/2010"
            }],
    }

]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
console.table(listaDependentes)