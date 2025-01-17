import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';
import { Propiedad } from '../../models/Propiedad';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  private apiUrl = 'http://127.0.0.1/api/propiedades'; 

  constructor(private http: HttpClient) { }

  getPropiedadPorAlquilerNoAprobado(userId: number): Observable<Propiedad[]> {
    return this.http.get<Propiedad[]>(`${this.apiUrl}/usuario/${userId}/sin-alquiler-aprobado`);
  }

  getPropiedadPorId(userId: number): Observable<Propiedad[]> {
    return this.http.get<Propiedad[]>(`${this.apiUrl}/usuario/${userId}`);
  }

  putPropiedadPorID(propiedadId: number, propiedad: Propiedad): Observable<Propiedad> {
    return this.http.put<Propiedad>(`${this.apiUrl}/${propiedadId}`, propiedad);
  }
  
  }
