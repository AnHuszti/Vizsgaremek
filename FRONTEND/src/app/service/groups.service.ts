import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Group } from '../model/group';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient 
  ) { }

  getAll(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.apiUrl}groups`)
  }

  getOne(id: string): Observable<Group> {
    return this.http.get<Group>(`${this.apiUrl}groups/${id}`)
  }
}
