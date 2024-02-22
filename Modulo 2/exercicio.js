class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca,cor,gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

   calcularGastoDeViagem(distanciaKm, precoCombustivel,) {
    return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
   }


}


const uno = new Carro (`Fiat`,`Prata`,1/12);
const palio = new Carro(`Palio`,`Preto`,1/10);

console.log(palio.calcularGastoDeViagem(70,5))