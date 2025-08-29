// 2 Implemente uma classe ContaBancaria com saldo privado e métodos depositar e sacar que
// alteram o saldo.
class ContaBancaria {
    #saldo;

    constructor(saldo) {
        this.#saldo = saldo;
    };

    depositar(valor) {
        if (valor > 0)
            this.#saldo += valor
    }

    sacar(valor) {
        if (valor <= this.#saldo)
            this.#saldo = this.#saldo - valor
    }

    getExtrato() {
        return this.#saldo
    }
}