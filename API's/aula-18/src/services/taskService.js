const express = require('express')

let task = [
    {id:1, title: 'estudar apis', done:false},
    {id:2, title: 'praticar criação de apis', done:true}
]

const getAll = () => tasks

const getById = (id) => {
    const task = tasks.find(t => t.id === id)
    if(!task) throw {status: 404, message: "tarefa nao encontrada"}
    return task
}