import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TipoVehiculo } from 'src/app/models/tipo-vehiculo';
import { ModeloVehiculo } from 'src/app/models/modelo-vehiculo';

@Component({
  selector: 'app-nuevo-vehiculo',
  templateUrl: './nuevo-vehiculo.component.html',
  styleUrls: ['./nuevo-vehiculo.component.css']
})
export class NuevoVehiculoComponent implements OnInit {

  numeroEconomico: string = '';
	fechaIngreso: string = '';
	numeroSerie: string = '';
	capacidadVehicular: string = '';
	color: string = '';
	anio: number = null;
	precioCompra: number = null;
  propietario: string = '';
  numeroLlantas: number = null;
	medida: string = '';
	combustible: string = '';
	kmLitros: number = null;
  capacidadCombustible: number = null;
	rendimiento: number = null;
  placas: string = '';
  tipoVehiculo: TipoVehiculo = null;
  modeloVehiculo: ModeloVehiculo = null;

  constructor(
    private bitacoraDetalleService: VehiculoService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const vehiculo = new Vehiculo(this.numeroEconomico, this.fechaIngreso, this.numeroSerie, this.capacidadVehicular,
      this.color, this.anio, this.precioCompra, this.propietario, this.numeroLlantas, this.medida, this.combustible,
      this.kmLitros, this.capacidadCombustible, this.rendimiento, this.placas, this.tipoVehiculo, this.modeloVehiculo);
    this.bitacoraDetalleService.save(vehiculo).subscribe(
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
