import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseService<Employee> {

  //apiUrl = environment.apiUrl;

  constructor(
    http: HttpClient 
  ) {
    super(http, 'employees')
  }


  /* getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}employees`)
  }

  getOne(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}employees/${id}`)
  } */
}
