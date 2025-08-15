// 1) Crie variáveis para armazenar: seu nome, idade, se você gosta de programar, sua altura,
// uma lista de 3 cores favoritas e um objeto com nome e idade.

let nomeIdade = {
    nome: 'igor',
    idade: 17
}

let cores = 'verde, preto, roxo'

let altura = '1,64'

let gostaProgamar = true

// 2) Receba uma string "42" e converta para número. Depois, some com mais 10 e exiba o
// resultado

let conversao = '42'
conversao = parseInt(conversao)
let conversao2 = conversao + 10
console.log(conversao2)

// 3) Peça ao usuário (prompt) dois números e exiba: soma, subtração, multiplicação e divisão
// deles no console


// 4) Peça a idade do usuário. Se for maior ou igual a 18, mostre “Maior de idade”, caso
// contrário “Menor de idade” — faça com if e depois com operador ternário.

let atv4 = prompt(('qual é sua idade'))
if (atv4 >= 18) {
    console.log('maior de idade')
} else {
    console.log('menor de idade')
}

console.log(atv4 >= 18 ? 'maior de idade' : 'menor de idade')

// 5) Crie um programa que receba um número de 1 a 7 e retorne o dia da semana correspondente.

let atv5 = 2
switch (atv5) {
    case 1:
        console.log('domingo');
        break;
    case 2:
        console.log('segunda');
        break;
    case 3:
        console.log('terça');
        break
    case 4:
        console.log('quarta');
        break;
    case 5:
        console.log('quinta')
    case 6:
        console.log('sexta')
    case 5:
        console.log('sabado')
    default:
        console.log('n tem esse dia ai')
}

// 6) Crie um código que verifique se um número está entre 10 e 20 e é par.

let atv6 = 15

if (atv6 > 10 && atv6 <= 20) {
    if (atv6 % 2 == 0) {
        console.log('par')
    } else {
        console.log('impar')
    }
} else {
    console.log("numero invalido")
}

// 7) Peça um nome e exiba:
// a) Nome todo em maiúsculas
// b) Nome todo em minúsculas
// c) Quantidade de caracteres

let nomeAtv7 = 'JAck'

console.log(nomeAtv7.toUpperCase())
console.log(nomeAtv7.toLowerCase())
console.log(nomeAtv7.length)

// 8) Crie um array de frutas e use métodos para: adicionar uma fruta no final, remover a primeira, verificar se existe “maçã” e exibir o array final.

let frutas = [lemon, banana, mango, maçã]

frutas.push('jorge')
frutas.splice(0,1)