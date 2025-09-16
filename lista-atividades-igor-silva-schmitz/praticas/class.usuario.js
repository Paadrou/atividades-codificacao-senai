// 19. Imagine que temos uma classe Usuario com os atributos id, nome, ativo, documento.
// Crie os métodos getters e setters desses atributos e depois instancie essa classe
// utilizando esses métodos.
























class Usuario{
    constructor(id, nome, ativo, documento){
        this.id = id;
        this.nome = nome;
        this.ativo = ativo;
        this.documento = documento
    }

    setId(id){
        this.id = id
    }
    setNome(nome){
        this.nome = nome
    }
    setAtivo(ativo){
        this.ativo = ativo
    }
    setDocumento(documento){
        this.documento = documento
    }

    getId(){
        return this.id
    }
    getNome(){
        return this.nome
    }
    getAtivo(){
        return this.ativo
    }
    getDocumento(){
        return this.documento
    }
}

const usuario1 = new Usuario()
usuario1.setId('1')
usuario1.setNome('ronaldo')
usuario1.setAtivo(true)
usuario1.setDocumento("documento aqui do ronaldo")

usuario1.getId()
usuario1.getNome()
usuario1.getAtivo()
usuario1.getDocumento()