import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Group } from 'src/app/model/group';
import { GroupsService } from 'src/app/service/groups.service';
import { KindergartenService } from 'src/app/service/kindergarten.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss']
})
export class EditGroupComponent implements OnInit {

  kindergartens$ = this.kindergartenService.getAll()

  group$: Observable<Group> = this.activatedRoute.params.pipe(
    switchMap( params => {
      let entityFromList$: Observable<Group> =
    this.groupService.getOne(params['id'])

    if (params['id'] == '0') {
      this.newEntity$.subscribe()
      return this.newEntity$
    }

    return entityFromList$
    })
   )

   newEntity$: Observable<Group> = new Observable(entity => {
    entity.next(new Group())
  })


  constructor(
    private router: Router,
    private groupService: GroupsService,
    private activatedRoute: ActivatedRoute,
    private kindergartenService: KindergartenService,
  ) { }

  ngOnInit(): void {
  }

  private isNewEntity: boolean = false

  onSave(group: Group): void {
    console.log(`2. log: ${group['_id']}`)
    if (!group['_id']) {
      this.isNewEntity = true
      this.groupService.create(group).subscribe({
        next: newGroup => this.router.navigate(['/csoportok']),
        error: err => console.error(err)
      })
    }
    else if (group._id && !this.isNewEntity){
      this.isNewEntity = false
      this.groupService.update(group).subscribe({
      next: updatedGroup => this.router.navigate(['/csoportok']),
      error: err => console.error(err)
      //alert! 
    })
    }
  }
}
