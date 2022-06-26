import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IFileUploadResponse } from 'src/app/common/file-uploader/file-uploader.component';
import { Group } from 'src/app/model/group';
import { GroupsService } from 'src/app/service/groups.service';
import { KindergartenService } from 'src/app/service/kindergarten.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss']
})
export class EditGroupComponent implements OnInit {

  kindergartens$ = this.kindergartenService.getAll()

  agegroups = ["Kiscsoport", "Középső csoport", "Nagycsoport", "Vegyes csoport"]

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

  uploadedFilePath: string = ''


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
      group['_id'] = undefined

      if (this.uploadedFilePath) {
        group.image = this.uploadedFilePath
      }

      this.groupService.create(group).subscribe({
        next: newGroup => this.router.navigate(['/csoportok']),
        error: err => console.error(err)
      })
    }
    else if (group._id && !this.isNewEntity){
      this.isNewEntity = false

      if (this.uploadedFilePath) {
        group.image = this.uploadedFilePath
      }

      this.groupService.update(group).subscribe({
      next: updatedGroup => this.router.navigate(['/csoportok']),
      error: err => console.error(err)
      //alert! 
    })
    }
  }

  uploadSuccess(event: IFileUploadResponse): void {
   
    this.uploadedFilePath = event.path
  }

  getImageSrc(group: Group): string {
    return `${environment.apiUrl}${group.image}`
  }
}
