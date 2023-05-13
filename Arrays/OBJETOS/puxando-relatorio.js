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

let relatorio = "";

for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function" ){
        continue
    }
    else{
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
}

console.log(relatorio)