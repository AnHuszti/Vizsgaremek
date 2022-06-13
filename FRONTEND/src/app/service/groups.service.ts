import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Groups } from '../model/groups';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient 
  ) { }

  getAll(): Observable<Groups[]> {
    return this.http.get<Groups[]>(`${this.apiUrl}groups`)
  }
}
