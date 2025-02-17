import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/empleado.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private apiURL = 'http://localhost:8000/empleado';

  constructor( private http: HttpClient) {}

  getEmpleado(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.apiURL);
  }


}
