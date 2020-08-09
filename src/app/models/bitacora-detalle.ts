import { Vehiculo } from './vehiculo';
import { BitacoraMantenimiento } from './bitacora-mantenimiento';

export class BitacoraDetalle {
    idBitacoraDetalle?: number;
    fecha: string;
    vehiculo: Vehiculo;
    bitacoraMantenimiento : BitacoraMantenimiento;

    constructor(fecha: string, vehiculo: Vehiculo, bitacoraMantenimiento: BitacoraMantenimiento){
        this.fecha = fecha;
        this.vehiculo = vehiculo;
        this.bitacoraMantenimiento = bitacoraMantenimiento;
    }
}
