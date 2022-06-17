import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient 
  ) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}employees`)
  }

  getOne(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}employees/${id}`)
  }
}
