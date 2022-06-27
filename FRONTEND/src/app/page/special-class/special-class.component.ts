import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpecialClass } from 'src/app/model/special-class';
import { ConfigService } from 'src/app/service/config.service';
import { MessageService } from 'src/app/service/message.service';
import { SpecialClassService } from 'src/app/service/special-class.service';

@Component({
  selector: 'app-special-class',
  templateUrl: './special-class.component.html',
  styleUrls: ['./special-class.component.scss']
})
export class SpecialClassComponent implements OnInit {

  columns = this.config.specialClassTableColumns

  list$ = this.specialClassService.getAll()

  constructor(
    private config: ConfigService,
    private specialClassService: SpecialClassService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  jumpToEdit(specClas: SpecialClass): void {
    this.router.navigate(['/kulonora/edit', specClas._id])
  }

  deleteEntity(specialClass: SpecialClass): void {
    if (specialClass['_id']) {
      this.specialClassService.delete(specialClass['_id']).subscribe({
        next: ()  => {
          this.messageService.showDelete(`${specialClass['name']} csoport törölve`)
          this.list$ = this.specialClassService.getAll()
        },
        error: err => console.error(err)     
      })
    }
  }
}
