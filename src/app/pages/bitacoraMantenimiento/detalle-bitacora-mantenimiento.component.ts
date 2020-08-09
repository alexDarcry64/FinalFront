import { Component, OnInit } from '@angular/core';
import { BitacoraMantenimientoService } from 'src/app/service/bitacora-mantenimiento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BitacoraMantenimiento } from 'src/app/models/bitacora-mantenimiento';

@Component({
  selector: 'app-detalle-bitacora-mantenimiento',
  templateUrl: './detalle-bitacora-mantenimiento.component.html',
  styleUrls: ['./detalle-bitacora-mantenimiento.component.css']
})
export class DetalleBitacoraMantenimientoComponent implements OnInit {

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
        this.volver();
      }
    );
  }

  volver(): void{
    this.router.navigate(['/']);
  }

}
