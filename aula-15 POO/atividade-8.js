// 8 Implemente uma classe Circulo com raio privado e métodos para calcular área e
// circunferência.
class Circulo{
    #raio;

    constructor(raio){
        this.#raio = raio
    }

    setRaio(raio){
        this.#raio = raio
    }

    calculaAreaCirculo(){
        return 2 * Math.PI * this.#raio ** 2
    }
}