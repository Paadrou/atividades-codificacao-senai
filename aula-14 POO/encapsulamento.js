class ContaBancaria {
    #saldo;

    constructor(saldoInical) {
        this.#saldo = saldoInical;
    }

    depositar(valor){
        if (valor > 0) this.#saldo += valor;
    }
    
    sacar(valor){
        if (valor <= this.#saldo) this.#saldo = this.#saldo - valor;
    }
    
    getSaldo(){
        return this.#saldo;
    }
}


let saldoInical = 100.000

const contaBancaria = new ContaBancaria()
ContaBancaria.depositar(100.000)
console.log("meu saldo é: ")

contaBancaria.sacar(2)
console.log("meu saldo é: ", contaBancaria.getSaldo())