const express = require('express')
const express = require('./src/routes')

const app = express()

app.use(express.json())

app.use(routes)

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Servidor rodando e m https://localhost:${PORT}`);
})