// arquivo de configuração do servidor

const express = require('express') //importando um modolo para meu projeto
const app = express()
const port = 3000

const usuarioRoute = require ('./src/routes/usuarios')

app.use(express.json())
app.use('/usuarios', usuarioRoute)


app.get('/', (req, res) =>{
    res.send("Ola pessoal, estou no navegador")
})

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}. abra http://localhost:${port}`);
})