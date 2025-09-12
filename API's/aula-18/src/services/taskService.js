const express = require('express')

let task = [
    {id:1, title: 'estudar apis', done:false},
    {id:2, title: 'praticar criação de apis', done:true},
    {id:3, title: 'ronaldo', done:false}
]

const getAll = () => tasks

const getById = (id) => {
    const task = tasks.find(t => t.id === id)
    if(!task) throw {status: 404, message: "tarefa nao encontrada"}
    return task
}

const update = (id, {title, done}) =>{
    const task = getById(id)

    if(title){
        const exists = tasks.some(
            t => t.title.toLowerCase() === title.toLowerCase() && t.id !== id
        )

        if(exists) 
            throw {status: 400, message: "ja existe outra tarefa com este titulo"}

        tasks.title = title
    }

    if(done !== undefined){
        if(typeof done !== "boolean ")
            throw {status: 400, message: "O campo done deve ser 'true' ou 'false'"}
        tasks.done = done
    }
}

const create = (id, title) =>{
    if(!title)
        throw {status: 400, message: "o campo 'title' é obrigatorio"}; 
    const exists = tasks.some(
        t.title.toLowerCase() === title.toLowerCase()
    )

    if(exists)
        throw {status: 400, message: "ja tem  uma com esse titulo"}; 

    const newTask = {id: tasks.length + 1, title, done: false}
    tasks.push(newTask)
    return newTask
}

const del = (id, title) =>{
    const taskIndex = tasks.findIndex(t=>t.id === id)
    if(taskIndex === -1)
        throw{status: 404, message: "nao encontrada"}
    
    if(tasks[taskIndex].done){
        throw{status:400, message:"nao é permitido excluir uma tarefa concluida"}
    }

    const deleted = tasks.splice(taskIndex,1)[0]
    return deleted
}

module.exports = {getAll, getById, del, create, update}