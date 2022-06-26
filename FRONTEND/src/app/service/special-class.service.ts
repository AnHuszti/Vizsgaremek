import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpecialClass } from '../model/special-class';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SpecialClassService extends BaseService<SpecialClass> {

  

  constructor(
    http: HttpClient
  ) {
    super(http, 'specialclasses')
   }


}
