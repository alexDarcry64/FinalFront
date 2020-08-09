import { Component, OnInit } from '@angular/core';
import { BitacoraDetalle } from 'src/app/models/bitacora-detalle';
import { BitacoraDetalleService } from 'src/app/service/bitacora-detalle.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BitacoraMantenimiento } from 'src/app/models/bitacora-mantenimiento';
import { Vehiculo } from 'src/app/models/vehiculo';


@Component({
  selector: 'app-nuevo-bitacora-mantenimiento',
  templateUrl: './nuevo-bitacora-mantenimiento.component.html',
  styleUrls: ['./nuevo-bitacora-mantenimiento.component.css']
})
export class NuevoBitacoraMantenimientoComponent implements OnInit {

  fecha: string = '';
  vehiculo: Vehiculo = null;
  bitacoraMantenimiento: BitacoraMantenimiento = null;

  constructor(
    private bitacoraDetalleService: BitacoraDetalleService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const bitacoraDetalle = new BitacoraDetalle(this.fecha, this.vehiculo, this.bitacoraMantenimiento);
    this.bitacoraDetalleService.save(bitacoraDetalle).subscribe(
      data => {
        this.toastr.success('Se ha creado el producto Correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Ha ocurrido un error', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      }
    );
  }

}
