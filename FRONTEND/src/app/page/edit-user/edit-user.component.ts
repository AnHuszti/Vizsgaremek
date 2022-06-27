import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { User } from 'src/app/model/user';
import { MessageService } from 'src/app/service/message.service';
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
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  private isNewEntity: boolean = false

  onSave(userForm: NgForm, user: User): void {
    
    if (!userForm.valid) {
      this.messageService.showError()
    }

    else if (!user['_id']) {
      this.isNewEntity = true
      user['_id'] = undefined
      this.userService.create(user).subscribe({
        next: newUser => {
          this.messageService.showSuccess('Új felhasználó hozzáadva.'),
          setTimeout( () =>
        {this.router.navigate(['/felhasznalok'])}, 3000)
    },
        error: err => console.error(err)
      })
    }
    else if (user._id && !this.isNewEntity){
      this.isNewEntity = false
      this.userService.update(user).subscribe({
      next: updatedUser => { 
        this.messageService.showSuccess('Módosítás megtörtént.'),
        setTimeout( () =>
        {this.router.navigate(['/felhasznalok'])}, 3000)
    },
      error: err => console.error(err)
     
    })
    }
  }

}
