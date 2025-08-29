// 6 Implemente uma classe Livro com título e autor privados, e um método exibirInfo().
class Livro {
    #titulo;
    #autor;

    constructor(titulo, autor){
        this.#titulo = titulo
        this.#autor = autor
    }

    exibirInfo(){
        return this.#titulo, this.#autor
    }
}