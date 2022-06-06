import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Kindergarten } from '../model/kindergarten';

@Injectable({
  providedIn: 'root'
})
export class KindergartenService {

  list: Kindergarten[] = [
    {
      _id: 'kg01',
      name: '1',
      address: '1111 Budapest, A utca 1',
      employeesHeadcount: 16,
      maxHeadcount: 50,
      actualHeadcount: 30,
      active: true
    },
    {
      _id: 'kg02',
      name: '2',
      address: '1111 Budapest, B utca 2',
      employeesHeadcount: 16,
      maxHeadcount: 50,
      actualHeadcount: 25,
      active: true
    },
    {
      _id: 'kg03',
      name: '3',
      address: '1111 Budapest, C utca 3',
      employeesHeadcount: 16,
      maxHeadcount: 50,
      actualHeadcount: 40,
      active: true
    },
  ]

  constructor() { }

  getAll(): Observable<Kindergarten[]> {
    return of(this.list)
  }
}
