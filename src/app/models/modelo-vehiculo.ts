import { MarcaVehiculo } from './marca-vehiculo';

export class ModeloVehiculo {
    idModelo?: number;
    valor: string;
    marcaVehiculo: MarcaVehiculo;

    constructor(valor: string, marcaVehiculo: MarcaVehiculo){
        this.valor = valor;
        this.marcaVehiculo = marcaVehiculo;
    }
}
