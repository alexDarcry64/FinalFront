import { Component, OnInit } from '@angular/core';
import { BitacoraDetalle } from 'src/app/models/bitacora-detalle';
import { BitacoraDetalleService } from 'src/app/service/bitacora-detalle.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-bitacora-mantenimiento',
  templateUrl: './lista-bitacora-mantenimiento.component.html',
  styleUrls: ['./lista-bitacora-mantenimiento.component.css']
})
export class ListaBitacoraMantenimientoComponent implements OnInit {

  bitacoraDetalle: BitacoraDetalle[] = [];

  constructor(
    private bitacoraDetalleService: BitacoraDetalleService, 
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cargarDetalles();
  }

  cargarDetalles(): void{
    this.bitacoraDetalleService.lista().subscribe(
      data => {
        this.bitacoraDetalle = data;
      },
      err =>{
        console.log(err);
      }
    );
  }

  borrar(bitacoraDetalle: BitacoraDetalle){
    this.bitacoraDetalleService.delete(bitacoraDetalle.idBitacoraDetalle).subscribe(
      data => {
        this.toastr.success('Se ha eliminado el producto Correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarDetalles();
       
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Ha ocurrido un error', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    );
  }

}
