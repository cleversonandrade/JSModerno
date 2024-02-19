function moto(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;

    this.dados = function() {
        setTimeout(() => {
            console.log(this.marca);
            console.log(this.modelo);
        }, 2000)
    }
}

const moto1 = new moto('YAMAHA', 'Lander');
moto1.dados();