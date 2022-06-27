import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { ConfigService } from 'src/app/service/config.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { KindergartenService } from 'src/app/service/kindergarten.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {

  columns = this.config.employeeTableColumns

  list$ = this.employeeService.getAll()

  kindergartens$ = this.kindergartenService.getAll()

  constructor(
    private config: ConfigService,
    private employeeService: EmployeeService,
    private kindergartenService: KindergartenService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  jumpToEdit(employee: Employee): void {
    this.router.navigate(['/alkalmazott/edit', employee._id])
  }

  deleteEntity(employee: Employee): void {
    if (employee['_id']) {
      this.employeeService.delete(employee['_id']).subscribe({
        next: ()  => {
          this.messageService.showDelete(`${employee['surname']} ${employee['firstname']} alkalmazott törölve`)
          this.list$ = this.employeeService.getAll()
        },
        error: err => console.error(err)      
      })
    }
  }
}
