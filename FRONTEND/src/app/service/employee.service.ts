import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // temporary sample list:
  list: Employee[] = [
    {
      _id: 'emp101n',
      name: 'Alfa Dajka',
      position: 'dajka',
      kindergarten: '1',
      group: '1A',
      skills: 'valami',
      active: true
    },
    {
      _id: 'emp000t',
      name: 'Alfa Óvónő',
      position: 'óvópedagógus',
      kindergarten: '2',
      group: '2A',
      active: true
    },
    {
      _id: 'emp002pa',
      name: 'Alfa Ped Asszisztens',
      position: 'pedagógiai asszisztens',
      kindergarten: '1',
      skills: 'valami',
      active: true
    },
    {
      _id: 'emp003t',
      name: 'Beta Óvónő',
      position: 'óvópedagógus',
      kindergarten: '3',
      group: '3C',
      skills: 'valamimás',
      active: false
    },
  ]

  constructor() { }

  getAll(): Observable<Employee[]> {
    return of(this.list) // DATA FROM SERVER: this.http
  }
}
