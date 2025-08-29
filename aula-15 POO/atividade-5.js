// 5 Crie uma classe Aluno com nome e nota como atributos privados. Crie um método que retorna
// se o aluno foi aprovado (nota >= 7).
class Aluno {
    #nome;
    #nota;
    constructor(nome, nota){
        this.#nome = nome
        this.#nota = nota
    }

    setNome(nome){
        this.#nome = nome
    }

    setNota(nota){
        this.#nota = nota
    }

    getNome(){
        return this.#nome
    }

    getNota(){
        return this.#nota
    }

    Aprovado(nota){
        if (nota  >= 7){
            return Aprovado
        } else {
            return Reprovado
        }
    }
}
 