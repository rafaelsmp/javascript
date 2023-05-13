const cliente = {
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
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor
    }
}


function oferecerSeguro (obj){
    
    const propsClientes = Object.keys(obj);

    if (propsClientes.includes("dependentes")){

        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

//console.log(Object.values(cliente))
//console.log(Object.entries(cliente))
oferecerSeguro(cliente)