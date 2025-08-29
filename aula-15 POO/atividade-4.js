// 4 Implemente uma classe Carro com atributos privados marca e velocidade. Adicione método
// para acelerar e frear.
class Carro {
    ligar;
    frear;

    constructor(ligar, frear,) {
        this.ligar = ligar;
        this.frear = frear;
    };

    setLigar() {
        this.ligar = 1;
    };

    getLigar() {
        return this.ligar;
    };

    setFrear() {
        this.frear = 1;
    };

    getFrear() {
        return this.frear;
    };
}