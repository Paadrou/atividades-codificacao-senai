//.forEach
// const array = [1,2,3,4,5]

// let soma = 0

// lista.forEach((valor, indice, lista) => {
//     soma += valor
//     console.log(valor, indice, lista)
// })

// console.log(soma)

//.map

const alunos = [
    {name:'shaolin matador de porco', nota: [7,7,7]},
    {name:'gnomel mones', nota: [7,7,7]},
    {name:'sorriso ronaldo', nota: [6,6,6]}
]

const mediasPorAluno = alunos.map(aluno =>{
    return{
        name: aluno.name,
        nota: aluno.nota.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual) / aluno.nota.length
    }
})

console.log(mediasPorAluno)