import Carro from "./Carro.js";

const objCarro = new Carro()
objCarro.nome = "dois"
let nome = objCarro.nome
console.log("o nome é:", nome)

const objCarro2 = new Carro()
objCarro2.setChassi("12")
let chassi = objCarro2.getChassi()
console.log(chassi)