const express = require('express');
const bcrypt = require('bcrypt')
const Usuario = require('../models/Usuario.js')

const router = express.Router();

router.post("/", async(req,res)=>{
    try {
        const{email, senha} = req.body

        const usuario = await Usuario.findOne({where: {email} })

        if(!usuario)
            return res.status(401).json({mensagem: "Usuario incorreto"})

        const senhaValida = await bcrypt.compare(senha, usuario.senha)

        if(senhaValida){
            return res.status(200).json({mensagem: "login realizado"})
        } else {
            return res.status(401).json({mensagem: "opa, usuario incorreto"})
        }
    } catch (error) {
        res.status(400).json({mensagem: "Ocorreu um erro, tente novamente"})
        console.log("Erro: ", error);
        
    }
})

module.exports = router;