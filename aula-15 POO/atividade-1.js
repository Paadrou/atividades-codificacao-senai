// 1 Crie uma classe Pessoa com atributos privados nome e idade, e métodos públicos para
// acessar e alterar esses valores.
class Pessoa {
    #nome;
    #idade;

    constructor(nome, idade,) {
        this.#nome = nome
        this.#idade = idade
    }

    setNome(nome) {
        this.#nome = nome
    }

    setIdade(idade) {
        this.#idade = idade
    }

    getNome() {
        return this.#nome
    }

    getIdade() {
        return this.#idade
    }
}
