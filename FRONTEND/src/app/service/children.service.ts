import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Children } from '../model/children';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {

    
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Children[]> {
    return this.http.get<Children[]>(`${this.apiUrl}children`)
  } 
}
