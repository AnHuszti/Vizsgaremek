import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ConfigService } from 'src/app/service/config.service';
import { MessageService } from 'src/app/service/message.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  columns = this.config.userTableColumns

  list$ = this.userService.getAll()

  constructor(
    private config: ConfigService,
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  jumpToEdit(user: User): void {
    this.router.navigate(['/felhasznalo/edit', user._id])
  }

  deleteEntity(user: User): void {
    if (user['_id']) {
      this.userService.delete(user['_id']).subscribe({
        next: ()  => {
          this.messageService.showDelete(`${user['surname']} ${user['firstname']} csoport törölve`)
          this.list$ = this.userService.getAll()
        },
        error: err => console.error(err)  
      })
    }
  }

}
