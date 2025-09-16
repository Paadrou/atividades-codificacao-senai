// 20. Imagine que temos o servidor já construído, mas precisamos criar as rotas de uma
// aplicação de tickets de chamados.
// A) Construa o roteamento /ticket e implemente as rotas para: listar todos, adicionar,
// atualizar, remover.


const express = require('express')
const app = express()

app.use(express.json())

let tickets = []

app.get('/ticket', (req, res)=>{
    res.json(tickets)
})


app.post('/ticket', (req, res)=>{
    const novoTicket = {
        id: tickets.length + 1,
        ...req.body
    }
    tickets.push(novoTicket)
})



app.put('/ticket/:id', (req, res)=>{
    const {id} = req.params

    let ticket = ticket.find(t => t.id === id)
    
    if(!ticket){
        return res.status(404).json({msg: "ticket nao encontrado, ent ele n sera atualizado"})
    }

    ticket = {...ticket, ...req.body}

    tickets = tickets.map(t => (t.id === id ? ticket : t))
    res.json(ticket)
})

app.delete('/ticket/:id', (req, res) =>{
    const {id} = req.params
    
    tickets = tickets.filter(t => t.id != id)
    res.json({
        msg: "ticket atualizado com sucesso"
    })
})
function middlewareValidarTicket(req, res, next){
    const {titulo, prioridade, descricao, categoria, nomeSolicitante, depatarmento, telefone, email} = req.body

    if(!titulo || !prioridade || !descricao || !categoria || !nomeSolicitante || !depatarmento || !telefone || !email){
        return res.status(400).json({msg: "Titulo é obrigatorio"})
    }
    
    next()
}






module.exports = app;