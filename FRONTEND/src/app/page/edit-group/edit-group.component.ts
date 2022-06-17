import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Group } from 'src/app/model/group';
import { GroupsService } from 'src/app/service/groups.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss']
})
export class EditGroupComponent implements OnInit {

  group$: Observable<Group> = this.activatedRoute.params.pipe(
    switchMap( params => this.groupService.getOne(params['id']) )
   )

  constructor(
    private router: Router,
    private groupService: GroupsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
