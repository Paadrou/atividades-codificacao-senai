// 1) Crie variáveis para armazenar: seu nome, idade, se você gosta de programar, sua altura,
// uma lista de 3 cores favoritas e um objeto com nome e idade.
let Erick = {
    nome:"Erick",
    idade: 16
}
let gostaProgramar = true
let altura = 1.65
let coresFavoritas = "Vermelho, preto e branco"
// Conversão de tipos
// 2) Receba uma string "42" e converta para número. Depois, some com mais 10 e exiba o
// resultado.
let number = "42"
parseInt(number)
let resultado = number - 10
// Operadores aritméticos
// 3) Peça ao usuário (prompt) dois números e exiba: soma, subtração, multiplicação e divisão
// deles no console.
function operacoes(a, b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
}
console.log(operacoes(3, 3))
// Condicional simples e ternário
// 4) Peça a idade do usuário. Se for maior ou igual a 18, mostre “Maior de idade”, caso
// contrário “Menor de idade” — faça com if e depois com operador ternário.
function maioridade(idade){
    if(idade >= 18){
        console.log("Maior de idade")
    } else{
        console.log("Menor de idade")
    }
}
console.log(maioridade(18))
// Switch
// 5) Crie um programa que receba um número de 1 a 7 e retorne o dia da semana
// correspondente.
let dia = 1
switch(dia){
    case 1: console.log("Domingo");
    break;
    case 2: console.log("Segunda");
    break;
    case 3: console.log("Terça");
    break;
    case 4: console.log("Quarta");
    break;
    case 5: console.log("Quinta");
    break;
    case 6: console.log("Sexta");
    break;
    case 7: console.log("Sábado");
    break;
    default: console.log("Esse dia não existe")
}
// Operadores lógicos e relacionais
// 6) Crie um código que verifique se um número está entre 10 e 20 e é par.
function par10e20(numero){
    if(numero >= 10 && numero <= 20 && numero%2 == 0){
        console.log("É par e está entre 10 e 20")
    } else{
        console.log("Não é par ou não está entre 10 e 20")
    }
}

par10e20(19)
// Métodos de string
// 7) Peça um nome e exiba:
let nome = "Ronaldo"
// a) Nome todo em maiúsculas
console.log(nome.toUpperCase())
// b) Nome todo em minúsculas
console.log(nome.toLocaleLowerCase())
// c) Quantidade de caracteres
console.log(nome.length)
// Métodos de array
// 8) Crie um array de frutas e use métodos para: adicionar uma fruta no final, remover a
// primeira, verificar se existe “maçã” e exibir o array final.
let frutas = ["abacaxi", "laranja", "morango"]
frutas.push("pera")
frutas.shift()
console.log(frutas.includes("maçã"))
console.log(frutas)
// For e While
// 9) Use o laço de repetição for para contar de 1 a 10.
function contador(){
    for(let i =1; i <= 10; i++){
        console.log(i)
    }
    console.log("Fim!")
}
console.log(contador())
// 10) Crie um array de nomes e exiba cada nome no console com uma frase: "Olá,
// [nome]!".
let nomes = ["Sabrino", "Mário", "Josué"]
function saudacao(){
    nomes.forEach(element => {
        console.log(element)
    });
}
console.log(saudacao())
// 11) Crie um array de números e use map para criar um novo array com cada número ao
// quadrado.
const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map(numero => numero ** 2);

console.log(quadrados);
// filter
// 12) Crie um array de idades e filtre apenas as maiores ou iguais a 18.
// Função tradicional e arrow function
const idades = [15, 22, 17, 30, 8, 18];

function verificarMaioridade(idade) {
  return idade >= 18;
}

const maioresTradicional = idades.filter(verificarMaioridade);
console.log(maioresTradicional);
// 13) Crie uma função tradicional que receba dois números e retorne a soma, e depois faça o
// mesmo com arrow function.
function soma(a, b){
    return a+b
}
let arrowSoma = (a,b) => a + b;

console.log(soma(1,2))
console.log(arrowSoma(1,2))
// Função callback
// 14) Crie uma função que receba outra função como parâmetro e a execute (ex.: função que
// recebe um nome e imprime no console).
function executar(nome){
    imprimirNome(nome)
}
function imprimirNome(nome){
    console.log(`Olá, ${nome}`)
}
console.log(executar("José"))
// Função anônima
// 15) Crie uma função anônima atribuída a uma variável que receba um número e retorne se
// ele é par ou ímpar.
let parImpar = function (a){
    if(a%2 === 0){
        console.log("Par")
    } else {
        console.log("Ímpar")
    }
}
console.log(parImpar(2))
// Manipulação de JSON
// 16) Crie um objeto com nome e idade, converta para JSON e exiba no console. Depois,
// converta de volta para objeto.
const pessoa = {
  nome: "Carlos",
  idade: 30
};
const pessoaJSON = JSON.stringify(pessoa);
console.log("Formato JSON:", pessoaJSON);
const pessoaObjeto = JSON.parse(pessoaJSON);
console.log("Objeto convertido:", pessoaObjeto);
// Função assíncrona
// 17) Crie uma função async que aguarde 2 segundos e depois exiba "Carregou!".
async function carregarDados() {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Aguarda 2 segundos
  console.log("Carregou!");
}

carregarDados();
// 18) Explique, com suas palavras, o que é back-end e cite 3 exemplos de tecnologias
// usadas para desenvolvê-lo.
//Back-end é a parte não visual de um sistema que executa códigos para o funcionamento do mesmo e gerencia dados. JavaScript, PHP e Java
// Diferença entre server-side e client-side
// 19) Escreva uma tabela comparando server-side e client-side, incluindo:
// a) Onde o código é executado
// b) Exemplos de linguagens
// c) Vantagens e desvantagens
// Critério	                    Server-side	Client-side
// Onde o código é executado	No servidor	                                                              |  No navegador do usuário
// Exemplos de linguagens	    PHP, Python (Django/Flask), Ruby (Ruby on Rails), Java (Spring), C# (.NET)|	 JavaScript (React, Angular, Vue), HTML, CSS
// Vantagens	                - Maior segurança (lógica oculta)                                         |  - Offline possível (PWA)
//                              - Independência do dispositivo do usuário	                              |  - Interface mais rápida e interativa
//                              - Acesso direto a bancos de dados                                         |  - Menos carga no servidor
//                                                                                                          
// 
// Desvantagens	                - Sobrecarga do servidor                                                  |  - Código exposto no navegador
//                              - Latência (requer round-trip)                                            |  - Limitações de acesso a recursos do sistema
//                              - Dependência de conexão	                                              |  - Depende do desempenho do dispositivo do usuário

// Fluxo de funcionamento do back-end
// 20)Descreva um esquema simples mostrando o fluxo de dados quando um usuário acessa
// um site.
// Usuário → DNS → Servidor → (BD) → Resposta → Navegador → Página

// Primeiro script com Node.js
// 21) Crie um arquivo teste.js, digite qualquer coisa e execute no terminal chamando o
// comando do node.
// Verificação de instalação
// 22) Você baixou o Nodejs no seu computador, mas precisa verificar se foi instalado
// corretamente. Quais comandos você deve executar no terminal para confirmar a instalação?
//node -v, npm -v

// NPM
// 23) O que é o npm e qual a sua função?
// O npm é o gerenciador de pacotes do Node.js que permite instalar, compartilhar e controlar dependências em projetos JavaScript. Ele baixa bibliotecas como React ou Express com um simples comando, gerencia versões no package.json e automatiza tarefas como iniciar servidores. Fundamental para desenvolvimento moderno.

// Exemplos reais de uso do back-end
// 24) Pesquise e liste 3 exemplos de funcionalidades de sistemas que dependem do
// back-end para funcionar.
// Autenticação e Login – Valida usuários, verifica credenciais no banco de dados e gerencia sessões (ex: login com e-mail/senha, OAuth, JWT).
// Processamento de Pagamentos – Integra com gateways (ex: PayPal, Stripe), valida transações e atualiza saldos no banco de dados.
// Busca e Filtros Avançados – Processa consultas complexas no banco de dados (ex: filtros em e-commerces, busca em redes sociais).

// Protocolos HTTP
// 25) Liste 4 métodos HTTP e explique resumidamente para que serve cada um.
// GET - Busca dados de um servidor (somente leitura).
// POST - Envia dados para criar ou processar algo.
// PUT - Atualiza um recurso existente (substitui tudo).
// DELETE - Remove um recurso do servidor.