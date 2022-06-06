import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Groups } from '../model/groups';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  
  list: Groups[] = [
    {
      _id: 'gr001A',
      name: '1A',
      kindergarten: '1',
      ageGroup: 'kiscsoport',
      teacher1: 'Alfa Óvóbá',
      teacher2: 'Gamma Óvónő',
      nurse: 'Alfa Dajka',
      maxHeadcount: 10,
      actualHeadcount: 5,
      active: true
    },
    {
      _id: 'gr003C',
      name: '3C',
      kindergarten: '3',
      ageGroup: 'nagycsoport',
      teacher1: 'Beta Óvónő',
      teacher2: 'Gamma Óvóbá',
      nurse: 'Gamma Dajka',
      maxHeadcount: 10,
      actualHeadcount: 8,
      active: true
    }
  ]

  constructor() { }

  getAll(): Observable<Groups[]> {
    return of(this.list)
  }
}
