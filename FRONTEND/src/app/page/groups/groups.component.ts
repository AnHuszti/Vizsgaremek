import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/model/group';
import { ConfigService } from 'src/app/service/config.service';
import { GroupsService } from 'src/app/service/groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  columns = this.config.groupsTableColumns

  list$ = this.groupsService.getAll()

  constructor(
    private config: ConfigService,
    private groupsService: GroupsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  jumpToEdit(group: Group): void {
    this.router.navigate(['/csoport/edit', group._id])
  }

  deleteEntity(group: Group): void {
    if (group['_id']) {
      this.groupsService.delete(group['_id']).subscribe({
        next: ()  => {
          //this.messageService.showDelete(`${group['name']} csoport törölve`)
          this.list$ = this.groupsService.getAll()
        },
        error: err => console.error(err)
        //alert      
      })
    }
  }
}
