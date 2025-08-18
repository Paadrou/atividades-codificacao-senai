const http = require('http') // modulo interno do node
const port = 3000 // porta onde o node/servidor ira rodar

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-type" : "text/plain"})
    res.write("Ola, servidor de nidejs esta funcionando '-'") //corpo
    res.end() //finalizar
})

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})


// lendo arquivos

const fs = require("fs") //importando modulo interno do node chamawndo File System

// fs.readFile('dados.txt', 'utf-8', (err,data) =>{ // chamando o metodo para ler o arquivo
//     if(err) //se der erro vai aparecer no console
//         console.log('erro:', err)

//     console.log(data)//mostra od dados do meu  arquivo 'dados.txt'
// })

//Escrevendo no arquivo

// fs.writeFile('dados.txt', 'ola pessoal', (erro) =>{
//     if(erro)
//         console.log("erro" + erro)

//     console.log('arquivo salvo')
// })


fs.appendFile("dados.txt", "isso é um cinema absoluto", (err)=>{
    if(err)
        console.log("erro" + err)

    console.log('linha adicionada com sucesso')
})""