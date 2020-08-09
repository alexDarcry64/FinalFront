import { Component, OnInit } from '@angular/core';
import { BitacoraDetalle } from 'src/app/models/bitacora-detalle';
import { BitacoraDetalleService } from 'src/app/service/bitacora-detalle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-bitacora',
  templateUrl: './editar-bitacora.component.html',
  styleUrls: ['./editar-bitacora.component.css']
})
export class EditarBitacoraComponent implements OnInit {

  bitacora: BitacoraDetalle = null;

  constructor(
    private bitacoraDetalleService: BitacoraDetalleService,
    private activateRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;
    this.bitacoraDetalleService.detail(id).subscribe(
      data => {
        this.bitacora = data;
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
    this.bitacoraDetalleService.update(id, this.bitacora).subscribe(
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
