import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-vehiculo',
  templateUrl: './lista-vehiculo.component.html',
  styleUrls: ['./lista-vehiculo.component.css']
})
export class ListaVehiculoComponent implements OnInit {

  vehiculos: Vehiculo[] = [];

  constructor(
    private VehiculoService: VehiculoService, 
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cargarVehiculos();
  }

  cargarVehiculos(): void{
    this.VehiculoService.lista().subscribe(
      data => {
        this.vehiculos = data;
      },
      err =>{
        console.log(err);
      }
    );
  }

  borrar(vehiculos: Vehiculo){
    this.VehiculoService.delete(vehiculos.idVehiculo).subscribe(
      data => {
        this.toastr.success('Se ha eliminado el producto Correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarVehiculos();
       
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Ha ocurrido un error', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    );
  }
}
