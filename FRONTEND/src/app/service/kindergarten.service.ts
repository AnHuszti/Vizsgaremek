import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Kindergarten } from '../model/kindergarten';

@Injectable({
  providedIn: 'root'
})
export class KindergartenService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient 
  ) { }

  getAll(): Observable<Kindergarten[]> {
    return this.http.get<Kindergarten[]>(`${this.apiUrl}kindergartens`)
  }

  getOne(id: string): Observable<Kindergarten> {
    return this.http.get<Kindergarten>(`${this.apiUrl}kindergartens/${id}`)
  }
}

