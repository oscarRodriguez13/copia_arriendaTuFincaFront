import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alquiler } from '../../models/Alquiler';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  private baseUrl = 'http://127.0.0.1/api/alquileres'; 

  constructor(private http: HttpClient) {}

  getAlquileresPorUsuario(userId: number): Observable<Alquiler[]> {
    return this.http.get<Alquiler[]>(`${this.baseUrl}/usuario/${userId}`);
  }

  crearAlquiler(alquiler: Alquiler): Observable<Alquiler> {
    return this.http.post<Alquiler>(this.baseUrl, alquiler);
  }
}
