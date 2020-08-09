import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vehiculo } from 'src/app/models/vehiculo';

@Component({
  selector: 'app-detalle-vehiculo',
  templateUrl: './detalle-vehiculo.component.html',
  styleUrls: ['./detalle-vehiculo.component.css']
})
export class DetalleVehiculoComponent implements OnInit {

  vehiculo: Vehiculo = null;

  constructor(
    private vehiculoService: VehiculoService,
    private activateRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;
    this.vehiculoService.detail(id).subscribe(
      data => {
        this.vehiculo = data;
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
