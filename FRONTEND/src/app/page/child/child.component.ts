import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Child } from 'src/app/model/child';
import { ChildService } from 'src/app/service/child.service';
import { ConfigService } from 'src/app/service/config.service';
import { GroupsService } from 'src/app/service/groups.service';
import { KindergartenService } from 'src/app/service/kindergarten.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit {

  columns = this.config.childrenTableColumns

  list$ = this.childService.getAll()

  kindergartens$ = this.kindergartenService.getAll()

  groups$ = this.groupService.getAll()

  //new = new Child()

  constructor(
    private config: ConfigService,
    private childService: ChildService,
    private kindergartenService: KindergartenService,
    private groupService: GroupsService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  jumpToEdit(child: Child): void {
    this.router.navigate(['/gyermek/edit', child._id])
  }

  deleteEntity(child: Child): void {
    if (child['_id']) {
      this.childService.delete(child['_id']).subscribe({
        next: ()  => {
          //this.messageService.showDelete(`${child['surname']} ${child['firstname']} alkalmazott törölve`)
          this.list$ = this.childService.getAll()
        },
        error: err => console.error(err)
        //alert      
      })
    }
  }
  
  /* jumpToEdit(child: Child): void {
    if (child._id != "0") {
      this.router.navigate(['/gyermek/edit', child._id])
    } else {
      this.router.navigate(['/gyermek/edit', 0])
    }
  } */
}
