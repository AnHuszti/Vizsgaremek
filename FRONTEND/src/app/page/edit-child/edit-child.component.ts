import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IFileUploadResponse } from 'src/app/common/file-uploader/file-uploader.component';
import { Child } from 'src/app/model/child';
import { ChildService } from 'src/app/service/child.service';
import { GroupsService } from 'src/app/service/groups.service';
import { KindergartenService } from 'src/app/service/kindergarten.service';
import { MessageService } from 'src/app/service/message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-child',
  templateUrl: './edit-child.component.html',
  styleUrls: ['./edit-child.component.scss']
})
export class EditChildComponent implements OnInit {

  kindergartens$ = this.kindergartenService.getAll()

  groups$= this.groupService.getAll()

  child$: Observable<Child> = this.activatedRoute.params.pipe(
    switchMap( params => {
      let entityFromList$: Observable<Child> =
      this.childService.getOne(params['id'])
  
      if (params['id'] == '0') {
        console.log(`1. log: ${params['id']}`);
        this.newEntity$.subscribe()
        return this.newEntity$
      }
  
      return entityFromList$
    } )
   )

   newEntity$: Observable<Child> = new Observable(entity => {
    entity.next(new Child())
  })

  uploadedFilePath: string = ''

  constructor(
    private router: Router,
    private childService: ChildService,
    private activatedRoute: ActivatedRoute,
    private kindergartenService: KindergartenService,
    private groupService: GroupsService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  private isNewEntity: boolean = false

  onSave(childForm: NgForm, child: Child): void {
    if (!childForm.valid) {
      this.messageService.showError()
    }

    else if (!child['_id']) {
      this.isNewEntity = true
      child['_id'] = undefined
      this.childService.create(child).subscribe({
        next: newChild => {
          this.messageService.showSuccess('Új gyermek hozzáadva.')
          setTimeout( () =>
        {this.router.navigate(['/gyerekek'])}, 3000)
    },
        error: err => console.error(err)
      })
    }
    else if (child._id && !this.isNewEntity){
      this.isNewEntity = false
      this.childService.update(child).subscribe({
      next: updatedChild => {
        this.messageService.showSuccess('Módosítás megtörtént.')
        setTimeout( () =>
        {this.router.navigate(['/gyerekek'])}, 3000)
    },
      error: err => console.error(err) 
    })
    }
  }

  uploadSuccess(event: IFileUploadResponse): void {
    
    this.uploadedFilePath = event.path
  }

  getImageSrc(child: Child): string {
    return `${environment.apiUrl}${child.picture}`
  }

}
