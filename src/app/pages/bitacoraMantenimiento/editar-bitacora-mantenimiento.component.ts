import { Component, OnInit } from '@angular/core';
import { BitacoraMantenimiento } from 'src/app/models/bitacora-mantenimiento';
import { BitacoraMantenimientoService } from 'src/app/service/bitacora-mantenimiento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-bitacora-mantenimiento',
  templateUrl: './editar-bitacora-mantenimiento.component.html',
  styleUrls: ['./editar-bitacora-mantenimiento.component.css']
})
export class EditarBitacoraMantenimientoComponent implements OnInit {

  bitacoraMantenimiento: BitacoraMantenimiento = null;

  constructor(
    private bitacoraMantenimientoService: BitacoraMantenimientoService,
    private activateRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;
    this.bitacoraMantenimientoService.detail(id).subscribe(
      data => {
        this.bitacoraMantenimiento = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Ha ocurrido un error', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      }
    );
  }
  onUpdate(): void{
    const id = this.activateRoute.snapshot.params.id;
    this.bitacoraMantenimientoService.update(id, this.bitacoraMantenimiento).subscribe(
      data => {
        this.toastr.success('Se ha actualizado el producto Correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'});
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
