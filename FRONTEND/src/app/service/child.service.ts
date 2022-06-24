import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Child } from '../model/child';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ChildService extends BaseService<Child> {

  //apiUrl = environment.apiUrl;

  constructor(
    http: HttpClient,
  ) {
    super(http, 'children')
  }

  /* getAll(): Observable<Child[]> {
    return this.http.get<Child[]>(`${this.apiUrl}children`)
  }

  getOne(id: string): Observable<Child> {
    return this.http.get<Child>(`${this.apiUrl}children/${id}`)
  } */
}
