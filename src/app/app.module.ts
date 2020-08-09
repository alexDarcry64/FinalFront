import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleBitacoraMantenimientoComponent } from './pages/bitacoraMantenimiento/detalle-bitacora-mantenimiento.component';
import { ListaBitacoraMantenimientoComponent } from './pages/bitacoraMantenimiento/lista-bitacora-mantenimiento.component';
import { NuevoBitacoraMantenimientoComponent } from './pages/bitacoraMantenimiento/nuevo-bitacora-mantenimiento.component';
import { EditarBitacoraMantenimientoComponent } from './pages/bitacoraMantenimiento/editar-bitacora-mantenimiento.component';
import { EditarMarcaVehiculoComponent } from './pages/marca/editar-marca-vehiculo.component';
import { NuevoMarcaVehiculoComponent } from './pages/marca/nuevo-marca-vehiculo.component';
import { DetalleMarcaVehiculoComponent } from './pages/marca/detalle-marca-vehiculo.component';
import { ListaMarcaVehiculoComponent } from './pages/marca/lista-marca-vehiculo.component';
import { ListaModeloVehiculoComponent } from './pages/modelo/lista-modelo-vehiculo.component';
import { DetalleModeloVehiculoComponent } from './pages/modelo/detalle-modelo-vehiculo.component';
import { NuevoModeloVehiculoComponent } from './pages/modelo/nuevo-modelo-vehiculo.component';
import { EditarModeloVehiculoComponent } from './pages/modelo/editar-modelo-vehiculo.component';
import { EditarTipoVehiculoComponent } from './pages/tipo/editar-tipo-vehiculo.component';
import { NuevoTipoVehiculoComponent } from './pages/tipo/nuevo-tipo-vehiculo.component';
import { DetalleTipoVehiculoComponent } from './pages/tipo/detalle-tipo-vehiculo.component';
import { ListaTipoVehiculoComponent } from './pages/tipo/lista-tipo-vehiculo.component';
import { ListaVehiculoComponent } from './pages/vehiculo/lista-vehiculo.component';
import { DetalleVehiculoComponent } from './pages/vehiculo/detalle-vehiculo.component';
import { NuevoVehiculoComponent } from './pages/vehiculo/nuevo-vehiculo.component';
import { EditarVehiculoComponent } from './pages/vehiculo/editar-vehiculo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditarBitacoraComponent } from './pages/bitacora/editar-bitacora.component';
import { NuevoBitacoraComponent } from './pages/bitacora/nuevo-bitacora.component';
import { ListaBitacoraComponent } from './pages/bitacora/lista-bitacora.component';
import { DetalleBitacoraComponent } from './pages/bitacora/detalle-bitacora.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalleBitacoraMantenimientoComponent,
    ListaBitacoraMantenimientoComponent,
    NuevoBitacoraMantenimientoComponent,
    EditarBitacoraMantenimientoComponent,
    EditarMarcaVehiculoComponent,
    NuevoMarcaVehiculoComponent,
    DetalleMarcaVehiculoComponent,
    ListaMarcaVehiculoComponent,
    ListaModeloVehiculoComponent,
    DetalleModeloVehiculoComponent,
    NuevoModeloVehiculoComponent,
    EditarModeloVehiculoComponent,
    EditarTipoVehiculoComponent,
    NuevoTipoVehiculoComponent,
    DetalleTipoVehiculoComponent,
    ListaTipoVehiculoComponent,
    ListaVehiculoComponent,
    DetalleVehiculoComponent,
    NuevoVehiculoComponent,
    EditarVehiculoComponent,
    EditarBitacoraComponent,
    NuevoBitacoraComponent,
    ListaBitacoraComponent,
    DetalleBitacoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
