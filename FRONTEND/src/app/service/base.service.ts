import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends {_id?: string}> {

  list: T[] = []

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient,
    @Inject(String) private entityName: string,
  ) { }

  create(entity: T): Observable<T> {
    console.log(`3.log: ${entity['_id']}`)
      return this.http.post<T>(`${this.apiUrl}${this.entityName}`, entity)
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}${this.entityName}`)
  }

  getOne(id: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${this.entityName}/${id}`)
  }

  update(entity: T): Observable<T> {
    console.log(`4.log: ${entity}`)
    return this.http.patch<T>(
      `${this.apiUrl}${this.entityName}/${entity._id}`, entity
    )
  }

  delete(id: string): Observable<T> {
    console.log(id);
    return this.http.delete<T>(`${this.apiUrl}${this.entityName}/${id}`)
  }
}
