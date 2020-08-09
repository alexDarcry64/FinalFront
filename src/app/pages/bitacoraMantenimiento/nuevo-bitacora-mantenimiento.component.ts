import { Component, OnInit } from '@angular/core';
import { BitacoraMantenimientoService } from 'src/app/service/bitacora-mantenimiento.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BitacoraMantenimiento } from 'src/app/models/bitacora-mantenimiento';


@Component({
  selector: 'app-nuevo-bitacora-mantenimiento',
  templateUrl: './nuevo-bitacora-mantenimiento.component.html',
  styleUrls: ['./nuevo-bitacora-mantenimiento.component.css']
})
export class NuevoBitacoraMantenimientoComponent implements OnInit {

  fecha: string = '';
  clasificacion: string = '';
  bitacoraMankilometrajeMomentotenimiento: string = '';
  trabajoRealizado: string = '';
  Mecanico: string = '';
  costo: number = null;
  fechaMantenimientoSiguiente: string = '';
  notas: string = '';

  constructor(
    private bitacoraMantenimientoService: BitacoraMantenimientoService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const bitacoraMantenimiento = new BitacoraMantenimiento(this.fecha, this,this.clasificacion, 
      this.bitacoraMankilometrajeMomentotenimiento, this.trabajoRealizado, this.Mecanico,
      this.costo, this.fechaMantenimientoSiguiente, this.notas);
    this.bitacoraMantenimientoService.save(bitacoraMantenimiento).subscribe(
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
