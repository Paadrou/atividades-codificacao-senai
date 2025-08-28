class Carro {
    nome;
    ano;
    modelo;
    #chassi;

    constructor(nome, ano, modelo, chassi){
        this.nome = nome
        this.ano = ano
        this.modelo = modelo 
        this.#chassi = chassi
    }

    setChassi(chassi){
        this.#chassi = chassi
    }

    getChassi(){
        return this.#chassi
    }
}

module.exports = Carro;