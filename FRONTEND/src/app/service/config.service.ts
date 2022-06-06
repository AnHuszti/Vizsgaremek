import { Injectable } from '@angular/core';
import { INgxTableColumn } from '../data-table/ngx-data-table/ngx-data-table.component';

export interface IMenuItem {
  link: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  sidebarMenu: IMenuItem[] = [
    {link: '/', title: 'Dashboard'},
    {link: '/tagovodak', title: 'Tagóvodák'},
    {link: '/alkalmazottak', title: 'Alkalmazottak'},
    {link: '/csoportok', title: 'Csoportok'},
    {link: '/gyerekek', title: 'Gyerekek'},
    {link: '/kulonorak', title: 'Különórák'},
  ]

  kindergartenTableColumns: INgxTableColumn[] = [
    {key: '_id', title: '#'},
    {key: 'name', title: 'NÉV'},
    {key: 'address', title: 'TELEPHELY'},
    {key: 'employeesHeadcount', title: 'ALKALMAZOTTI LÉTSZÁM'},
    {key: 'maxHeadcount', title: 'MAX LÉTSZÁM'},
    {key: 'actualHeadcount', title: 'AKTUÁLIS LÉTSZÁM'},
    {key: 'active', title: 'AKTÍV'},
  ]

  employeeTableColumns: INgxTableColumn[] = [
    {key: '_id', title: '#'},
    {key: 'name', title: 'NÉV'},
    {key: 'position', title: 'MUNKAKÖR'},
    {key: 'kindergarten', title: 'TAGÓVODA'},
    {key: 'group', title: 'CSOPORT'},
    {key: 'skills', title: 'EGYÉB KOMPETENCIÁK'},
    {key: 'active', title: 'AKTÍV'},
  ]

  groupsTableColumns: INgxTableColumn[] = [
    {key: '_id', title: '#'},
    {key: 'name', title: 'NÉV'},
    {key: 'kindergarten', title: 'TAGÓVODA'}, // inkább telephely???
    {key: 'ageGroup', title: 'KORCSOPORT'},
    {key: 'teacher1', title: '1. NEVELŐ'},
    {key: 'teacher2', title: '2. NEVELŐ'},
    {key: 'nurse', title: 'DAJKA'},
    {key: 'maxHeadcount', title: 'MAX LÉTSZÁM'},
    {key: 'actualHeadcount', title: 'AKTUÁLIS LÉTSZÁM'},
    {key: 'active', title: 'AKTÍV'},
  ]
  
  childrenTableColumns: INgxTableColumn[] = [
    {key: '_id', title: '#'},
    {key: 'name', title: 'NÉV'},
    {key: 'age', title: 'KOR'},
    {key: 'mother', title: 'ANYA'},
    {key: 'contact', title: 'KAPCSOLAT'},
    {key: 'kindergarten', title: 'TAGÓVODA'}, // inkább telephely???
    {key: 'group', title: 'CSOPORT'},
    {key: 'specialClasses', title: 'KÜLÖNÓRÁK'},
    {key: 'sign', title: 'JEL'},
    {key: 'active', title: 'AKTÍV'},  
  ]
  
  specialClassesTableColumns: INgxTableColumn[] = [
    {key: '_id', title: '#'},
    {key: 'name', title: 'NÉV'},
    // {key: 'specification', title: 'SPECIFIKÁCIÓ'}, maybe unnecessary
    {key: 'level', title: 'SZINT'},
    {key: 'teacher', title: 'NEVELŐ'},
    {key: 'maxHeadcount', title: 'MAX LÉTSZÁM'},
    {key: 'actualHeadcount', title: 'AKTUÁLIS LÉTSZÁM'},
    {key: 'active', title: 'AKTÍV'},
  ]

  constructor() { }
}
