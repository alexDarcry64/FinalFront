import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from '../models/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  URL = 'http://localhost:8080/Vehiculo/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Vehiculo[]>{
    return this.httpClient.get<Vehiculo[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Vehiculo>{
    return this.httpClient.get<Vehiculo>(this.URL + `detail/${id}`);
  }

  public detailName(numeroEconomico: string): Observable<Vehiculo>{
    return this.httpClient.get<Vehiculo>(this.URL + `detailnumeroeconomico/${numeroEconomico}`);
  }

  public save(vehiculo: Vehiculo): Observable<Vehiculo>{
    return this.httpClient.post<Vehiculo>(this.URL + 'create', vehiculo);
  }

  public update(id: number, vehiculo: Vehiculo): Observable<Vehiculo>{
    return this.httpClient.put<Vehiculo>(this.URL + `update/${id}`, vehiculo);
  }

  public delete(id: number): Observable<Vehiculo>{
    return this.httpClient.delete<Vehiculo>(this.URL + `delete/${id}`);
  }
}
