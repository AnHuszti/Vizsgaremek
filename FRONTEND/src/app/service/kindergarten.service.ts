import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kindergarten } from '../model/kindergarten';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class KindergartenService extends BaseService<Kindergarten> {

  constructor(
    http: HttpClient 
  ) {
    super(http, 'kindergartens')
  }

}

