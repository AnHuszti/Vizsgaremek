import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { ConfigService } from 'src/app/service/config.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {

  columns = this.config.employeeTableColumns

  // list$: Observable<Employee[]> = this.employeeService.getAll()
  list$ = this.employeeService.getAll()

  constructor(
    private config: ConfigService,
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  jumpToEdit(employee: Employee): void {
    this.router.navigate(['/alkalmazott/edit', employee._id])
  }
}
