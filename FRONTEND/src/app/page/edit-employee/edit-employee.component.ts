import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  employee$: Observable<Employee> = this.activatedRoute.params.pipe(
    switchMap( params => this.employeeService.getOne(params['id']) )
   )

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
