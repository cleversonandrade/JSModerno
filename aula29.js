function carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;

    this.dadosDoVeiculo = function() {
       setTimeout(() => {
        console.log(this.marca);
        console.log(this.modelo);
       }, 2000)
    }
}

const carro2 = new carro('Honda', 'Civic');
carro2.dadosDoVeiculo();
