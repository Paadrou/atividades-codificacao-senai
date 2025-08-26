// Atividade 1
// Contexto:
// ❏ Você foi contratado para desenvolver um sistema de cadastro de usuários. Para
// isso, será necessário criar uma classe que represente cada usuário,
// armazenando seu nome, e-mail e idade.

class Usuario {

    constructor(nome, email, idade){
        this.nome = nome
        this.email = email
        this.idade = idade
    }

    setNome(nome){
        this.nome = nome
    }

    setEmail(email){
        this.email = email
    }

    setIdade(idade){
        this.idade = idade
    }

    getNome(nome){
       return this.nome
    }

    getEmail(email){
        return this.email
    }

    getIdade(idade){
        return this.idade
    }
}

const usuario1 = new Usuario ("Ronaldo", "ronaldo@ronaldo.com", 24)
usuario1.setNome("Ronaldo")
usuario1.setEmail("ronaldo@ronaldo.com")
usuario1.setIdade(24)

console.log(usuario1.getNome(), usuario1.getEmail(), usuario1.getIdade())

// Atividade 2
// Contexto: Uma empresa quer organizar seus funcionários em um sistema de back-end. Para isso, você
// precisa criar uma estrutura que permita definir características comuns a todos os funcionários e métodos
// para gerenciar suas informações.

// Comando: Explique como a POO poderia ser aplicada para criar a estrutura de funcionários e quais
// vantagens ela oferece.

// A) Criando uma classe Funcionario que serve como modelo, permitindo instanciar vários objetos com dados
// individuais e métodos compartilhados
    // É essa aqui professora



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ● Atividade 3
// Explique a diferença entre classe e objeto em POO.
// Qual a diferença de uma classe “Carro” e um objeto “meuCarro”?

// ● Atividade 4
// Liste os atributos e métodos que você colocaria em uma classe “Aluno”.
    // atributos: nome, idade, matricula
    // metodos: estudar, intervalinho, lerLivro, programar

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ● Atividade 5
// Crie uma classe Livro com atributos título, autor e ano. Instancie dois objetos e exiba suas
// informações no console.
    class Livro{

        constructor(titulo, autor, ano){
            this.titulo = titulo
            this.autor = autor
            this.ano = ano
        }

        setTitulo(titulo){
            this.titulo = titulo
        }

        setAutor(autor){
            this.autor = autor
        }

        setAno(ano){
            this.ano = ano
        }

        getTitulo(titulo){
            return this.titulo
        }
        
        getAutor(autor){
            return this.autor
        }

        getAno(ano){
            return this.ano
        }
    }


const livro1 = new Livro("Ronaldo", "Gustavo scat", "2024")
livro1.setTitulo("Ronaldo")
livro1.setAutor("Gustavo scat")
livro1.setAno("2024")

const livro2 = new Livro("Ronaldo 2 a volta", "Gustavo Scat", "2025")
livro2.setTitulo("Ronaldo 2 a volta")
livro2.setAutor("Gustavo scat")
livro2.setAno("2025")


console.log(livro1.getTitulo(), livro1.getAutor(), livro1.getAno(), livro2.getTitulo(), livro2.getAutor(), livro2.getAno())


// ● Atividade 6
// Crie uma classe Calculadora com métodos somar(a, b) e multiplicar(a, b).
// Teste os métodos criando um objeto da classe


// ● Atividade 7
// Crie uma classe Pessoa com um construtor que inicializa nome e idade.
// Crie três objetos diferentes usando o construtor.