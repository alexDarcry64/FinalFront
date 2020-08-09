import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BitacoraDetalle } from '../models/bitacora-detalle';

@Injectable({
  providedIn: 'root'
})
export class BitacoraDetalleService {

  URL = 'http://localhost:8080/bitacoraDetalle/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<BitacoraDetalle[]>{
    return this.httpClient.get<BitacoraDetalle[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<BitacoraDetalle>{
    return this.httpClient.get<BitacoraDetalle>(this.URL + `detail/${id}`);
  }

  public detailName(fecha: string): Observable<BitacoraDetalle>{
    return this.httpClient.get<BitacoraDetalle>(this.URL + `detailfecha/${fecha}`);
  }

  public save(bitacoraDetalle: BitacoraDetalle): Observable<BitacoraDetalle>{
    return this.httpClient.post<BitacoraDetalle>(this.URL + 'create', bitacoraDetalle);
  }

  public update(id: number, bitacoraDetalle: BitacoraDetalle): Observable<BitacoraDetalle>{
    return this.httpClient.put<BitacoraDetalle>(this.URL + `update/${id}`, bitacoraDetalle);
  }

  public delete(id: number): Observable<BitacoraDetalle>{
    return this.httpClient.delete<BitacoraDetalle>(this.URL + `delete/${id}`);
  }
}
