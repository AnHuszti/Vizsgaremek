import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user$: Observable<User> = this.activatedRoute.params.pipe(
    switchMap( params => {
      let entityFromList$: Observable<User> =
      this.userService.getOne(params['id'])
  
      if (params['id'] == '0') {
        
        this.newEntity$.subscribe()
        return this.newEntity$
      }
  
      return entityFromList$
    } )
   )

   newEntity$: Observable<User> = new Observable(entity => {
    entity.next(new User())
  })

  constructor(
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  private isNewEntity: boolean = false

  onSave(user: User): void {
    
    if (!user['_id']) {
      this.isNewEntity = true
      user['_id'] = undefined
      this.userService.create(user).subscribe({
        next: newUser => this.router.navigate(['/felhasznalok']),
        error: err => console.error(err)
      })
    }
    else if (user._id && !this.isNewEntity){
      this.isNewEntity = false
      this.userService.update(user).subscribe({
      next: updatedUser => this.router.navigate(['/felhasznalok']),
      error: err => console.error(err)
      //alert! 
    })
    }
  }

}
