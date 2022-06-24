import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Group } from '../model/group';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsService extends BaseService<Group> {
  
  //apiUrl = environment.apiUrl;

  constructor(
    http: HttpClient 
  ) {
    super(http, 'groups')
   }

  /* getAll(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.apiUrl}groups`)
  }

  getOne(id: string): Observable<Group> {
    return this.http.get<Group>(`${this.apiUrl}groups/${id}`)
  } */
}
