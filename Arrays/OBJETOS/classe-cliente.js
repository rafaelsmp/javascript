class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpgf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(`O seu saldo é: ${this.saldo}`)
    }
}

const andre = new Cliente("André","email.andre@email.com","91837546728",100)

andre.depositar(500)
andre.exibirSaldo()
console.log(andre)
