import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { GroupsService } from 'src/app/service/groups.service';
import { KindergartenService } from 'src/app/service/kindergarten.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  kindergartens$ = this.kindergartenService.getAll()

  groups$ = this.groupService.getAll()

  employee$: Observable<Employee> = this.activatedRoute.params.pipe(
    switchMap( params => {
      let entityFromList$: Observable<Employee> =
      this.employeeService.getOne(params['id'])
  
      if (params['id'] == '0') {
        this.newEntity$.subscribe()
        return this.newEntity$
      }
  
      return entityFromList$
    })
   )

   newEntity$: Observable<Employee> = new Observable(entity => {
    entity.next(new Employee())
  })

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private kindergartenService: KindergartenService,
    private groupService: GroupsService
  ) { }

  ngOnInit(): void {
  }

  private isNewEntity: boolean = false

  onSave(employee: Employee): void {

    if (!employee['_id']) {
      this.isNewEntity = true
      employee['_id'] = undefined
      this.employeeService.create(employee).subscribe({
        next: newEmployee => this.router.navigate(['/alkalmazottak']),
        error: err => console.error(err)
      })
    }
    else if (employee._id && !this.isNewEntity){
      this.isNewEntity = false
      this.employeeService.update(employee).subscribe({
      next: updatedEmployee => this.router.navigate(['/alkalmazottak']),
      error: err => console.error(err)
      //alert! 
    })
    }
  }

}
