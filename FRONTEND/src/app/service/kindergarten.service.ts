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

  create(entity: Kindergarten): Observable<Kindergarten> {
    console.log(`3.log: ${entity['_id']}`)
    const newEntity = {
      name: entity['name'], 
      address: entity['address'], 
      numOfEmployees: entity['numOfEmployees'],
      numOfGroups: entity['numOfGroups'],
      maxHeadcountOfChildren: entity['maxHeadcountOfChildren'],
      actualHeadcountOfChildren: entity['actualHeadcountOfChildren']
    }
    return this.http.post<Kindergarten>(`${this.apiUrl}kindergartens`, newEntity)
  }

  getAll(): Observable<Kindergarten[]> {
    return this.http.get<Kindergarten[]>(`${this.apiUrl}kindergartens`)
  }

  getOne(id: string): Observable<Kindergarten> {
    return this.http.get<Kindergarten>(`${this.apiUrl}kindergartens/${id}`)
  }

  update(entity: Kindergarten): Observable<Kindergarten> {
    return this.http.patch<Kindergarten>(
      `${this.apiUrl}kindergartens/${entity._id}`, entity
    )
  }

  delete(id: string): Observable<Kindergarten> {
    console.log(id);
    return this.http.delete<Kindergarten>(`${this.apiUrl}kindergartens/${id}`)
  }
}

