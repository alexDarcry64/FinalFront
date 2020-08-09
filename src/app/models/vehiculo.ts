import { TipoVehiculo } from './tipo-vehiculo';
import { ModeloVehiculo } from './modelo-vehiculo';

export class Vehiculo {
    idVehiculo: number;
	numeroEconomico: string;
	fechaIngreso: string;
	numeroSerie: string;
	capacidadVehicular: string;
	color: string;
	anio: number;
	precioCompra: number;
    propietario: string;
    numeroLlantas: number;
	medida: string;
	combustible: string;
	kmLitros: number;
    capacidadCombustible: number;
	rendimiento: number;
    placas: string;
    tipoVehiculo: TipoVehiculo;
    modeloVehiculo: ModeloVehiculo;

    constructor(numeroEconomico: string, fechaIngreso: string, numeroSerie: string,
        capacidadVehicular: string, color: string, anio: number, precioCompra: number, propietario: string,
        numeroLlantas: number, medida: string, combustible: string,
        kmLitros: number, capacidadCombustible: number, rendimiento: number, placas: string, tipoVehiculo: TipoVehiculo,
        modeloVehiculo: ModeloVehiculo){
            this.numeroEconomico = numeroEconomico;
            this.fechaIngreso = fechaIngreso;
            this.numeroSerie = numeroSerie;
            this.capacidadVehicular = capacidadVehicular;
            this.color = color;
            this.anio = anio;
            this.precioCompra = precioCompra;
            this.propietario = propietario;
            this.numeroLlantas = numeroLlantas;
            this.medida = medida;
            this.combustible = combustible;
            this.kmLitros = kmLitros;
            this.capacidadCombustible = capacidadCombustible;
            this.rendimiento = rendimiento;
            this.placas = placas;
            this.tipoVehiculo = tipoVehiculo;
            this.modeloVehiculo = modeloVehiculo;
        
    }
}
