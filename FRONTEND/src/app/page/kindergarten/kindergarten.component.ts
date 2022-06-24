import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kindergarten } from 'src/app/model/kindergarten';
import { ConfigService } from 'src/app/service/config.service';
import { KindergartenService } from 'src/app/service/kindergarten.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-kindergarten',
  templateUrl: './kindergarten.component.html',
  styleUrls: ['./kindergarten.component.scss']
})
export class KindergartenComponent implements OnInit {

  columns = this.config.kindergartenTableColumns

  list$ = this.kindergartenService.getAll()

  constructor(
    private config: ConfigService,
    private kindergartenService: KindergartenService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  jumpToEdit(kindergarten: Kindergarten): void {
    this.router.navigate(['/tagovoda/edit', kindergarten._id])
  }

  deleteEntity(kindergarten: Kindergarten): void {
    if (kindergarten['_id']) {
      this.kindergartenService.delete(kindergarten['_id']).subscribe({
        next: ()  => {
          this.messageService.showDelete(`${kindergarten['name']} tagóvoda törölve`)
          this.list$ = this.kindergartenService.getAll()
        },
        error: err => console.error(err)
        //alert      
      })
    }
  }

}
