import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {
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
        this.router.navigate(['/']);
      }
    );
  }
  onUpdate(): void{
    const id = this.activateRoute.snapshot.params.id;
    this.vehiculoService.update(id, this.vehiculo).subscribe(
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
