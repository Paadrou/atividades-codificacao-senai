const mysql = require('mysql2/promise') // importando o modulo mysql2 com suporte a promisse

const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"ronaldo"
})

// Louis Pe Camole
module.exports = db