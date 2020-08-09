export class BitacoraMantenimiento {
    idBitacoraMantenimiento: number;
	fecha: string;
	clasificacion: string;
	kilometrajeMomento: string;
	trabajoRealizado: string;
	Mecanico: string;
	costo: number;
	fechaMantenimientoSiguiente: string;
	notas: string;

    constructor(fecha: string, clasificacion: string, kilometrajeMomento: string,
        trabajoRealizado: string, Mecanico: string, costo: number, fechaMantenimientoSiguiente: string, notas: string){
        this.fecha = fecha;
        this.clasificacion = clasificacion;
        this.kilometrajeMomento = kilometrajeMomento;
        this.trabajoRealizado = trabajoRealizado;
        this.Mecanico = Mecanico;
        this.costo = costo;
        this.fechaMantenimientoSiguiente = fechaMantenimientoSiguiente;
        this.notas = notas;
    }
}
