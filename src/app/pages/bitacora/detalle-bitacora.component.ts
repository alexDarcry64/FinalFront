import { Component, OnInit } from '@angular/core';
import { BitacoraDetalleService } from 'src/app/service/bitacora-detalle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BitacoraDetalle } from 'src/app/models/bitacora-detalle';

@Component({
  selector: 'app-detalle-bitacora',
  templateUrl: './detalle-bitacora.component.html',
  styleUrls: ['./detalle-bitacora.component.css']
})
export class DetalleBitacoraComponent implements OnInit {

  bitacoraDetalle: BitacoraDetalle = null;

  constructor(
    private bitacoraService: BitacoraDetalleService,
    private activateRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;
    this.bitacoraService.detail(id).subscribe(
      data => {
        this.bitacoraDetalle = data;
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
