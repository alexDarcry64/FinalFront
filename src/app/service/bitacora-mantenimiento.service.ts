import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BitacoraMantenimiento } from '../models/bitacora-mantenimiento';

@Injectable({
  providedIn: 'root'
})
export class BitacoraMantenimientoService {
  
  URL = 'http://localhost:8080/bitacoraMantenimiento/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<BitacoraMantenimiento[]>{
    return this.httpClient.get<BitacoraMantenimiento[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<BitacoraMantenimiento>{
    return this.httpClient.get<BitacoraMantenimiento>(this.URL + `detail/${id}`);
  }

  public detailName(fecha: string): Observable<BitacoraMantenimiento>{
    return this.httpClient.get<BitacoraMantenimiento>(this.URL + `detailfecha/${fecha}`);
  }

  public save(bitacoraMantenimiento: BitacoraMantenimiento): Observable<BitacoraMantenimiento>{
    return this.httpClient.post<BitacoraMantenimiento>(this.URL + 'create', bitacoraMantenimiento);
  }

  public update(id: number, bitacoraMantenimiento: BitacoraMantenimiento): Observable<BitacoraMantenimiento>{
    return this.httpClient.put<BitacoraMantenimiento>(this.URL + `update/${id}`, bitacoraMantenimiento);
  }

  public delete(id: number): Observable<BitacoraMantenimiento>{
    return this.httpClient.delete<BitacoraMantenimiento>(this.URL + `delete/${id}`);
  }
}
