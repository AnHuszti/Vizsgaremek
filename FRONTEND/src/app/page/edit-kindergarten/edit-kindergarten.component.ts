import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Observable } from 'rxjs';
import { IFileUploadResponse } from 'src/app/common/file-uploader/file-uploader.component';
import { Kindergarten } from 'src/app/model/kindergarten';
import { KindergartenService } from 'src/app/service/kindergarten.service';
import { MessageService } from 'src/app/service/message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-kindergarten',
  templateUrl: './edit-kindergarten.component.html',
  styleUrls: ['./edit-kindergarten.component.scss']
})
export class EditKindergartenComponent implements OnInit {

  kindergarten$: Observable<Kindergarten> = this.activatedRoute.params.pipe(
   switchMap( params => {
    let entityFromList$: Observable<Kindergarten> =
    this.kindergartenService.getOne(params['id'])

    if (params['id'] == '0') {
      console.log(`1. log: ${params['id']}`);
      this.newEntity$.subscribe()
      return this.newEntity$
    }

    return entityFromList$
  } )
  )

  newEntity$: Observable<Kindergarten> = new Observable(entity => {
    entity.next(new Kindergarten())
  })

  uploadedFilePath: string = ''

  constructor(
    private router: Router,
    private kindergartenService: KindergartenService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  private isNewEntity: boolean = false

  onSave(kindergarten: Kindergarten): void {
    console.log(`2. log: ${kindergarten['_id']}`)
    if (!kindergarten['_id']) {
      this.isNewEntity = true
      kindergarten['_id'] = undefined

      if (this.uploadedFilePath) {
        kindergarten.image = this.uploadedFilePath
      }

      this.kindergartenService.create(kindergarten).subscribe({
        next: newKindergarten => this.router.navigate(['/tagovodak']),
        error: err => console.error(err)
      })
    }

    else if (kindergarten._id && !this.isNewEntity){
      this.isNewEntity = false

      if (this.uploadedFilePath) {
        kindergarten.image = this.uploadedFilePath
      }

      this.kindergartenService.update(kindergarten).subscribe({
      next: updatedKindergarten => this.router.navigate(['/tagovodak']),
      error: err => console.error(err)
      //alert! 
    })
    }
  }
  
  uploadSuccess(event: IFileUploadResponse): void {
    console.log('hiba?')
    this.uploadedFilePath = event.path
  }

  getImageSrc(kindergarten: Kindergarten): string {
    return `${environment.apiUrl}${kindergarten.image}`
  }
}
