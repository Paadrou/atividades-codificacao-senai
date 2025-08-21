const cep = `01001000`

fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))



function lerDados(arquivo = "usuarios.json") {
    return JSON.parse(fs.readFile(arquivo, 'utf-8'))
}

function salvarDados(arquio = "usuarios.json", dados) {
    fs.writeFileSync(arquio, JSON.stringify(dados, null, 2))
}

const http = require("http")
const fs = require("fs")
const port = 3000

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "application/json")

    if (req === "GET" && req.url === '/dados') {
        const dados = lerDados('usuarios.json')
        res.writeHead(200)
        res.end(JSON.stringify(dados))
    } else if (req.method === "POST" && req.url === "/dados") {
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        })

        req.on('end', ()=>{
            try {
                const novoDado = JSON.parse(body)
                const dados = lerDados('usuarios.json')

                novoDado.id = 69
                dados.push(novoDado)

                salvarDados('usuarios.json', dados)

                res.writeHead(201)
                res.end("dados adicionados com succeso")
            } catch (error) {
                res.writeHead(404)
                res.end("pagina não existe")
            }
        })
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

const url = `http://localhost:${port}`

const objNovoDado = {
    nome: "Ronaldo Emanuel Porsche",
    idade: 84903679,
    salario: 250.00
}

fetch(url, {
    method:"POST",
    headers: {
        'content-type':'application/json'
    },
    body: JSON.stringify(objNovoDado)
})
.then(response =>{
    if (!response)
        console.log("Erorrror")

    return response.json()
})
.then(data => console.log("resposta do servidor: ", data))
.catch(error => {
    console.log("error: ", error)
})