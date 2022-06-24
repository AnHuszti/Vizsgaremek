import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Observable } from 'rxjs';
import { Kindergarten } from 'src/app/model/kindergarten';
import { KindergartenService } from 'src/app/service/kindergarten.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-edit-kindergarten',
  templateUrl: './edit-kindergarten.component.html',
  styleUrls: ['./edit-kindergarten.component.scss']
})
export class EditKindergartenComponent implements OnInit {

  /* kindergarten$: Observable<Kindergarten> = this.activatedRoute.params.pipe(
    switchMap( params => this.kindergartenService.getOne(params['id']) )
   ) */

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
      this.kindergartenService.create(kindergarten).subscribe({
        next: newKindergarten => this.router.navigate(['/tagovodak']),
        error: err => console.error(err)
      })
    }
    else if (kindergarten._id && !this.isNewEntity){
      this.isNewEntity = false
      this.kindergartenService.update(kindergarten).subscribe({
      next: updatedKindergarten => this.router.navigate(['/tagovodak']),
      error: err => console.error(err)
      //alert! 
    })
    }
  }
  /* update(kindergarten: Kindergarten): void {
    this.kindergartenService.update(kindergarten).subscribe({
      next: updatedKindergarten => this.router.navigate(['/tagovodak']),
      error: err => console.error(err)
      //alert!
    })
  } */
}
