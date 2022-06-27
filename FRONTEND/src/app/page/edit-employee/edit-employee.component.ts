import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IFileUploadResponse } from 'src/app/common/file-uploader/file-uploader.component';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { GroupsService } from 'src/app/service/groups.service';
import { KindergartenService } from 'src/app/service/kindergarten.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  kindergartens$ = this.kindergartenService.getAll()

  groups$ = this.groupService.getAll()

  positions = ["óvópedagógus 1.", "óvópedagógus 2.", "dajka", "pedagógiai asszisztens", "pszichológus"]

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

  uploadedFilePath: string = ''

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

  onSave(employeeForm: NgForm, employee: Employee): void {

    if (!employee['_id']) {
      this.isNewEntity = true
      employee['_id'] = undefined

      if (this.uploadedFilePath) {
        employee.image = this.uploadedFilePath
      }

      this.employeeService.create(employee).subscribe({
        next: newEmployee => this.router.navigate(['/alkalmazottak']),
        error: err => console.error(err)
      })
    }
    else if (employee._id && !this.isNewEntity){
      this.isNewEntity = false

      if (this.uploadedFilePath) {
        employee.image = this.uploadedFilePath
      }

      this.employeeService.update(employee).subscribe({
      next: updatedEmployee => this.router.navigate(['/alkalmazottak']),
      error: err => console.error(err)
    })
    }
  }

  uploadSuccess(event: IFileUploadResponse): void {
   
    this.uploadedFilePath = event.path
  }

  getImageSrc(employee: Employee): string {
    return `${environment.apiUrl}${employee.image}`
  }
}
