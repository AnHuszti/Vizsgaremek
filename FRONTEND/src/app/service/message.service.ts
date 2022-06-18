import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private toastr: ToastrService
  ) { }

  showError() {
    this.toastr.error('Hibás adat! Ellenőrizze a bevitt adatokat!');
  };
  
  showSuccess(message: string) {
    this.toastr.info(message);
  };

  showDelete(message: string) {
    this.toastr.error(message);
  };
}
