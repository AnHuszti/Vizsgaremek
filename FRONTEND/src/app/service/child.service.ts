import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Child } from '../model/child';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ChildService extends BaseService<Child> {


  constructor(
    http: HttpClient,
  ) {
    super(http, 'children')
  }
}
