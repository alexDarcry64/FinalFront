import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModeloVehiculo } from '../models/modelo-vehiculo';
@Injectable({
  providedIn: 'root'
})
export class ModeloVehiculoService {

  URL = 'http://localhost:8080/modeloVehiculo/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<ModeloVehiculo[]>{
    return this.httpClient.get<ModeloVehiculo[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<ModeloVehiculo>{
    return this.httpClient.get<ModeloVehiculo>(this.URL + `detail/${id}`);
  }

  public detailName(valor: string): Observable<ModeloVehiculo>{
    return this.httpClient.get<ModeloVehiculo>(this.URL + `detailvalor/${valor}`);
  }

  public save(modeloVehiculo: ModeloVehiculo): Observable<ModeloVehiculo>{
    return this.httpClient.post<ModeloVehiculo>(this.URL + 'create', modeloVehiculo);
  }

  public update(id: number, modeloVehiculo: ModeloVehiculo): Observable<ModeloVehiculo>{
    return this.httpClient.put<ModeloVehiculo>(this.URL + `update/${id}`, modeloVehiculo);
  }

  public delete(id: number): Observable<ModeloVehiculo>{
    return this.httpClient.delete<ModeloVehiculo>(this.URL + `delete/${id}`);
  }
}
