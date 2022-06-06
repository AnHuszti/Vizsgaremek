import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
  }

}
