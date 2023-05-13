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

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }

    exibirSaldoPoupanca(){
        console.log(`O seu saldo poupança é: ${this.saldoPoupanca}`)
    }
}

const rafael = new ClientePoupanca("Rafael", "rafae@gmail.com", "9877665436789", 500, 10000)

console.log(rafael)

rafael.depositar(100)
rafael.depositarPoupanca(200)
rafael.exibirSaldo()
rafael.exibirSaldoPoupanca()
