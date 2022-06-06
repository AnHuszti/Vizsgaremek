import { Component, OnInit } from '@angular/core';
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
    private groupsService: GroupsService
  ) { }

  ngOnInit(): void {
  }

}
