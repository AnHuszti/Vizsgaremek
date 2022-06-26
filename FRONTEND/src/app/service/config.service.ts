import { Injectable } from '@angular/core';
import { get } from 'lodash'
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
    {link: '/felhasznalok', title: 'Felhasználók'},
  ]

  kindergartenTableColumns: INgxTableColumn[] = [
    //{key: '_id', title: '#'},
    //{key: 'image', title: 'LOGO'},
    {key: 'name', title: 'NÉV'},
    {key: 'address', title: 'TELEPHELY'}, 
    {key: 'numOfEmployees', title: 'ALKALMAZOTTAK SZÁMA'},
    {key: 'numOfGroups', title: 'CSOPORTOK SZÁMA'},
    {key: 'maxHeadcountOfChildren', title: 'MAX GYERMEK LÉTSZÁM'},
    {key: 'actualHeadcountOfChildren', title: 'AKTUÁLIS GYERMEK LÉTSZÁM'},
    //{key: 'active', title: 'AKTÍV'},
  ]

  employeeTableColumns: INgxTableColumn[] = [
    // {key: '_id', title: '#'},
    {key: 'surname', title: 'VEZETÉKNÉV'},
    {key: 'firstname', title: 'KERESZTNÉV'},
    {key: 'position', title: 'MUNKAKÖR'},
    {key: 'kindergarten', title: 'TAGÓVODA',
    pipes: [ConfigService.getProp],
    pipeArgs: [[
      "name"
    ]]},
    {key: 'group', title: 'CSOPORT',
    pipes: [ConfigService.getProp],
    pipeArgs: [[
      "name"
    ]]},
    {key: 'skills', title: 'EGYÉB KOMPETENCIÁK'},
    {key: 'active', title: 'AKTÍV'},
  ]

  groupsTableColumns: INgxTableColumn[] = [
    // {key: '_id', title: '#'},
    {key: 'name', title: 'NÉV'},
    {key: 'kindergarten', title: 'TAGÓVODA',
    pipes: [ConfigService.getProp],
    pipeArgs: [[
      "name"
    ]]},
    {key: 'ageGroup', title: 'KORCSOPORT'},
    {key: 'teacherFirst', title: '1. NEVELŐ'},
    {key: 'teacherSecond', title: '2. NEVELŐ'},
    {key: 'nurse', title: 'DAJKA'},
    {key: 'maxHeadcount', title: 'MAX LÉTSZÁM'},
    {key: 'actualHeadcount', title: 'AKTUÁLIS LÉTSZÁM'},
    {key: 'active', title: 'AKTÍV'},
  ]
  
  childrenTableColumns: INgxTableColumn[] = [
    // {key: '_id', title: '#'},
    {key: 'surname', title: 'VEZETÉKNÉV'},
    {key: 'firstname', title: 'KERESZTNÉV'},
    {key: 'age', title: 'KOR'},
    {key: 'kindergarten', title: 'TAGÓVODA',
    pipes: [ConfigService.getProp],
    pipeArgs: [[
      "name"
    ]]}, 
    {key: 'group', title: 'CSOPORT',
    pipes: [ConfigService.getProp],
    pipeArgs: [[
      "name"
    ]]},
    {key: 'mothername', title: 'ANYA NEVE'},
    {key: 'phone', title: 'TELEFON'},
    //{key: 'specialClass', title: 'KÜLÖNÓRÁK'},
    {key: 'picture', title: 'JEL'},
    {key: 'active', title: 'AKTÍV'},  
  ]
  
  specialClassTableColumns: INgxTableColumn[] = [
    // {key: '_id', title: '#'},
    {key: 'name', title: 'NÉV'},
    {key: 'level', title: 'SZINT'},
    {key: 'kindergarten', title: 'TAGÓVODA',
      pipes: [ConfigService.getProp],
      pipeArgs: [[
        "name"
      ]]},
    {key: 'teacher', title: 'OKTATÓ'},
    {key: 'day', title: 'NAP'},
    {key: 'maxHeadcount', title: 'MAX LÉTSZÁM'},
    {key: 'actualHeadcount', title: 'AKTUÁLIS LÉTSZÁM'},
    {key: 'active', title: 'AKTÍV'},
  ]

  userTableColumns: INgxTableColumn[] = [
    // {key: '_id', title: '#'},
    {key: 'surname', title: 'VEZETÉKNÉV'},
    {key: 'firstname', title: 'KERESZTNÉV'},
    {key: 'email', title: 'EMAIL'},
    { key: 'role', title: 'JOGOSULTSÁG' }
  ]

  constructor() { }

  static getProp(obj: any, ...keys: string[]): string | number | boolean | undefined {
    return keys.map( key => get(obj, key) ).join(', ');
  }
}
