import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Child } from 'src/app/model/child';
import { ChildService } from 'src/app/service/child.service';
import { ConfigService } from 'src/app/service/config.service';
import { GroupsService } from 'src/app/service/groups.service';
import { KindergartenService } from 'src/app/service/kindergarten.service';
import { MessageService } from 'src/app/service/message.service';

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

  /* phrase: string = '';
  filterKey: string = 'surname';
  filterKeys: string[] = ['surname', 'firstname', 'age', 'kindergarten', 'group', 'mothername', 'phone', 'active'];
 */
  isLoading = true;

  constructor(
    private config: ConfigService,
    private childService: ChildService,
    private kindergartenService: KindergartenService,
    private groupService: GroupsService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.childService.getAll()
       .subscribe( {
        next: data => this.isLoading = false,
        error: error => this.isLoading = false
       }
    );
  }

  jumpToEdit(child: Child): void {
    this.router.navigate(['/gyermek/edit', child._id])
  }

  deleteEntity(child: Child): void {
    if (child['_id']) {
      this.childService.delete(child['_id']).subscribe({
        next: ()  => {
          this.messageService.showDelete(`${child['surname']} ${child['firstname']} Gyermek törölve`)
          this.list$ = this.childService.getAll()
        },
        error: err => console.error(err)
              
      })
    }
  }
  
}
