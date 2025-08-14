// Atv 1
// Quais são os tipos de variáveis utilizadas no Javascript e qual a
// menos segura?

//const, var, let ; sendo o var menos seguro.


// 2. Informe que tipo de dado é o código abaixo:
// a. `123` = string
// b. ‘85.88’ = string
// c. 3.14 = float
// d. 9 = int
// e. “Aluno” = string
// f. “a+b” = string
// g. 123456 = int
// h. [1,3,5,7] = array
// i. {nome: “Vivi”: idade: 16} = object
// j. let aut = true; boolean


// 3. Solicite ao usuário que digite um CPF e verifique se ele tem
// exatamente 11 dígitos. Caso contrário, exiba uma mensagem
// personalizada explicando o erro.


//4
let cpf = prompt('digite seu cpf')

let strCpf = String(cpf)

if(cpf.length === 14){
    alert('Ta certo ai ó')
} else {
    alert('ta errado aí')
}

let n1 = '150'
parseInt(n1)
let n2 = 18
String(n2)
let n3 = '20.99'
parseFloat(n3)
let n4 = '010'
parseInt(n4)

//5

// a) 1
// b) 6
// c) 39
// d) 15
// e) 300
// f) 18
// g) 10
// h) 0


// 6. Crie um objeto aluno com as propriedades nome, idade, notaFinal e
// aprovado(boolean).

let obj = {
    nome: 'Henrijack',
    idade: 17,
    notaFinal: 13,
    aprovado: false
}

// 7. Com a atividade acima, crie uma string informando o nome, idade, nota e
// se foi aprovado.

let string = ''
string += `o nome do aluno é ${obj.nome}`
string += `o idade do aluno é ${obj.idade}`
string += `a nota do aluno é ${obj.notaFinal}`
string += `o aluno foi ${obj.aprovado ? 'aprovado' : "reprovado"}`

// 8. Faça uma calculadora da sua idade.

const anoAtual = 2025
const anoNascimento = 1997

let calculadora = anoAtual - anoNascimento
console.log('Minha idade é', calculadora)

// 9. Converta graus Celsius para Fahrenheit com a fórmula F = (C * 9/5) + 32.
// a) 18ºC c) 27ºC e) 100ºC g) -4ºC
// b) 5°C d) 0 f) 44ºC h) 33ºC

function(){
    let array = [18,5,27,0,100,-4,33]

    for (i of array){
        console.log((array[i]*9/5) + 32)
    }
}