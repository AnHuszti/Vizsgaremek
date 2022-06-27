import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { SpecialClass } from 'src/app/model/special-class';
import { KindergartenService } from 'src/app/service/kindergarten.service';
import { MessageService } from 'src/app/service/message.service';
import { SpecialClassService } from 'src/app/service/special-class.service';

@Component({
  selector: 'app-edit-special-class',
  templateUrl: './edit-special-class.component.html',
  styleUrls: ['./edit-special-class.component.scss']
})
export class EditSpecialClassComponent implements OnInit {

  kindergartens$ = this.kindergartenService.getAll()

  days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"]

  specialclass$: Observable<SpecialClass> = this.activatedRoute.params.pipe(
    switchMap( params => {
      let entityFromList$: Observable<SpecialClass> =
      this.specialClassService.getOne(params['id'])
  
      if (params['id'] == '0') {
        
        this.newEntity$.subscribe()
        return this.newEntity$
      }
  
      return entityFromList$
    } )
   )

   newEntity$: Observable<SpecialClass> = new Observable(entity => {
    entity.next(new SpecialClass())
  })

  constructor(
    private router: Router,
    private specialClassService: SpecialClassService,
    private activatedRoute: ActivatedRoute,
    private kindergartenService: KindergartenService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  private isNewEntity: boolean = false

  onSave(specialClassForm: NgForm, specialClass: SpecialClass): void {
    if (!specialClassForm.valid) {
      this.messageService.showError()
    }

    else if (!specialClass['_id']) {
      this.isNewEntity = true
      specialClass['_id'] = undefined
      this.specialClassService.create(specialClass).subscribe({
        next: newSpecialClass => {
          this.messageService.showSuccess('Új különóra hozzáadva.'),
          setTimeout( () =>
        {this.router.navigate(['/kulonorak'])}, 3000)
    },
        error: err => console.error(err)
      })
    }
    else if (specialClass._id && !this.isNewEntity){
      this.isNewEntity = false
      this.specialClassService.update(specialClass).subscribe({
      next: updatedSpecialClass => {
        this.messageService.showSuccess('Módosítás megtörtént.'),
        setTimeout( () =>
        {this.router.navigate(['/kulonorak'])}, 3000)
    },
      error: err => console.error(err)
    })
    }
  }

}
