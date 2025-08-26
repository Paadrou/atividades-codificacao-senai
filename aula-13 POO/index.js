import Pessoa from './class/Pessoa.js'
//importando aquivo de classe Pessoa


//instanciando a classe Pessoa
const pessoa1 = new Pessoa("Ronaldo", 67, '12')// a const pessoa1 é um objeto

pessoa1.setNome('Ronaldo')
let nomePessoa = pessoa1.setNome()
console.log(nomePessoa)