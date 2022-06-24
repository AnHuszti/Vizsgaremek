import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Child } from 'src/app/model/child';
import { ChildService } from 'src/app/service/child.service';
import { GroupsService } from 'src/app/service/groups.service';
import { KindergartenService } from 'src/app/service/kindergarten.service';

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

  constructor(
    private router: Router,
    private childService: ChildService,
    private activatedRoute: ActivatedRoute,
    private kindergartenService: KindergartenService,
    private groupService: GroupsService
  ) { }

  ngOnInit(): void {
  }

  private isNewEntity: boolean = false

  onSave(child: Child): void {
    console.log(`2. log: ${child['_id']}`)
    if (!child['_id']) {
      this.isNewEntity = true
      child['_id'] = undefined
      this.childService.create(child).subscribe({
        next: newChild => this.router.navigate(['/gyerekek']),
        error: err => console.error(err)
      })
    }
    else if (child._id && !this.isNewEntity){
      this.isNewEntity = false
      this.childService.update(child).subscribe({
      next: updatedChild => this.router.navigate(['/gyerekek']),
      error: err => console.error(err)
      //alert! 
    })
    }
  }

}
