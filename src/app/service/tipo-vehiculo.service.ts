import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoVehiculo } from '../models/tipo-vehiculo';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoService {

 
  URL = 'http://localhost:8080/tipoVehiculo/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<TipoVehiculo[]>{
    return this.httpClient.get<TipoVehiculo[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<TipoVehiculo>{
    return this.httpClient.get<TipoVehiculo>(this.URL + `detail/${id}`);
  }

  public detailName(valor: string): Observable<TipoVehiculo>{
    return this.httpClient.get<TipoVehiculo>(this.URL + `detailvalor/${valor}`);
  }

  public save(modeloVehiculo: TipoVehiculo): Observable<TipoVehiculo>{
    return this.httpClient.post<TipoVehiculo>(this.URL + 'create', modeloVehiculo);
  }

  public update(id: number, modeloVehiculo: TipoVehiculo): Observable<TipoVehiculo>{
    return this.httpClient.put<TipoVehiculo>(this.URL + `update/${id}`, modeloVehiculo);
  }

  public delete(id: number): Observable<TipoVehiculo>{
    return this.httpClient.delete<TipoVehiculo>(this.URL + `delete/${id}`);
  }
}
