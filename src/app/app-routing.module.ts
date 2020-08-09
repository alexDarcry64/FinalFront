import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaVehiculoComponent } from './pages/vehiculo/lista-vehiculo.component';
import { DetalleVehiculoComponent } from './pages/vehiculo/detalle-vehiculo.component';
import { NuevoVehiculoComponent } from './pages/vehiculo/nuevo-vehiculo.component';
import { EditarVehiculoComponent } from './pages/vehiculo/editar-vehiculo.component';

const routes: Routes = [
  {path: '', component: ListaVehiculoComponent},
  {path: 'detalle/:id', component: DetalleVehiculoComponent},
  {path: 'nuevo', component: NuevoVehiculoComponent},
  {path: 'editar/:id', component: EditarVehiculoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
