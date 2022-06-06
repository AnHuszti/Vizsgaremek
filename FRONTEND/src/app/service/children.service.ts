import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Children } from '../model/children';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {

  list: Children[] = [
    {
      _id: 'ch001a',
      name: 'Alfa Anna',
      age: 3,
      mother: 'Alfa Anya',
      contact: '+36300000000',
      kindergarten: '1',
      group: '1A',
      specialClasses: 'logopédia1',
      sign: 'arany alma',
      active: true
    },
    {
      _id: 'ch002b',
      name: 'Beta Béla',
      age: 5,
      mother: 'Beta Anya',
      contact: '+36301111111',
      kindergarten: '2',
      group: '2B',
      specialClasses: 'angol nyelv1',
      sign: 'barna bolha',
      active: true
    },
    {
      _id: 'ch003c',
      name: 'Gamma Gizi',
      age: 6,
      mother: 'Gamma Anya',
      contact: '+36302222222',
      kindergarten: '3',
      group: '3C',
      sign: 'görbe görény',
      active: true
    },
  ]

  constructor() { }

  getAll(): Observable<Children[]> {
    return of(this.list)
  } 
}
