// 14 Implemente uma classe Musica com atributos titulo e artista privados, e um método tocar().

class Musica {
    #titulo
    #artista
    constructor(titulo, artista){
        this.#titulo = titulo
        this.#artista = artista
    }

    setTitulo(titulo){
        this.#titulo = titulo
    }

    setArtista(artista){
        this.#artista = artista
    }

    tocar(){
     return `Tocando ${this.#titulo} do artista ${this.#artista}`;
    }
}

module.exports = Musica