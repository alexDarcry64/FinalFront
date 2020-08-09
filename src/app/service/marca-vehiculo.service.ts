import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MarcaVehiculo } from '../models/marca-vehiculo';


@Injectable({
  providedIn: 'root'
})
export class MarcaVehiculoService {

  URL = 'http://localhost:8080/marcaVehiculo/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<MarcaVehiculo[]>{
    return this.httpClient.get<MarcaVehiculo[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<MarcaVehiculo>{
    return this.httpClient.get<MarcaVehiculo>(this.URL + `detail/${id}`);
  }

  public detailName(valor: string): Observable<MarcaVehiculo>{
    return this.httpClient.get<MarcaVehiculo>(this.URL + `detailvalor/${valor}`);
  }

  public save(marcaVehiculo: MarcaVehiculo): Observable<MarcaVehiculo>{
    return this.httpClient.post<MarcaVehiculo>(this.URL + 'create', marcaVehiculo);
  }

  public update(id: number, marcaVehiculo: MarcaVehiculo): Observable<MarcaVehiculo>{
    return this.httpClient.put<MarcaVehiculo>(this.URL + `update/${id}`, marcaVehiculo);
  }

  public delete(id: number): Observable<MarcaVehiculo>{
    return this.httpClient.delete<MarcaVehiculo>(this.URL + `delete/${id}`);
  }
}
