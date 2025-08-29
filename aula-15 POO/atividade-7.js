// 7 Crie uma classe Retangulo com base e altura privados. Crie métodos para calcular área e
// perímetro.
class Retangulo {
    #base;
    #altura;
    constructor(base, altura){
        this.#base = base
        this.#altura = altura
    }


    setBase(base){
        this.#base = base
    }

    setAltura(altura){
        this.#altura = altura
    }

    getBase(){
       return this.#base
    }

    getAltura(){
        return this.#altura
    }

    calculaArea(){
        return this.#base*this.#altura
    }
   
    calcularPerimetro(){
        return 2 + (this.#base + this.#altura)
    }
}