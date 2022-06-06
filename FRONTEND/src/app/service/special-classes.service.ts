import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { SpecialClasses } from '../model/special-classes';

@Injectable({
  providedIn: 'root'
})
export class SpecialClassesService {

  list: SpecialClasses[] = [
    {
      _id: 'sc01log',
      name: 'logopédia1',
      teacher: 'Alfa Logopédus',
      maxHeadcount: 5,
      actualHeadcount: 5,
      active: true
    },
    {
      _id: 'sc01eng',
      name: 'angol nyelv1',
      level: 'kezdő',
      teacher: 'Alfa Angoltanár',
      maxHeadcount: 5,
      actualHeadcount: 5,
      active: true
    },
    {
      _id: 'sc01swimm',
      name: 'úszás1',
      level: 'kezdő',
      teacher: 'Alfa Úszónő',
      maxHeadcount: 5,
      actualHeadcount: 0,
      active: false
    }
  ]

  constructor() { }

  getAll(): Observable<SpecialClasses[]> {
    return of(this.list)
  }
}
