class Carro {
    marca;
    modelo;
    ano
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo
        this.ano = ano
    }

    setMarca(marca){
        this.marca = marca
    }

    setModelo(modelo){
        this.modelo = modelo
    }

    setAno(ano){
        this.ano = ano
    }

    getMarca(){
        return this.marca
    }

    getModelo(){
        return this.modelo
    }

    getAno(){
        return this.ano
    }

    ligar(){
        return 'Carro ligado'
    }

    desligar(){
        return 'Carro desligado'
    }
}



const carro1 = new Carro()
carro1.setAno('2025')
carro1.setModelo('sedan')
carro1.setMarca('honda')

const carro2 = new Carro()
carro2.setAno('2026')
carro2.setModelo('hatch')
carro2.setMarca('toyota')

const carro3 = new Carro()
carro3.setAno('2025')
carro3.setModelo('sedan')
carro3.setMarca('honda')

carro1.getAno()
carro1.getModelo()
carro1.getMarca()

carro2.getAno()
carro2.getModelo()
carro2.getMarca()