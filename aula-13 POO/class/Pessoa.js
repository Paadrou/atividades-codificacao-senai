class Pessoa {
    // //Atributos da classe pessoa
    // nome;
    // carroFavorito;
    // dna;
    // idade;
    // cpf;
    // doencas;
    // cep;
    // peso;


    //Inicializar os meus atributos na minha classe
    constructor (nome, idade, cpf){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }

    //metodo para definir o atributo nome 
    setNome(nome){
        this.nome = nome
    }

    //metodo para pegar o atributo nome
    getNome(){
        return this.nome
    }
}

module.exports = Pessoa;