import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './page/employee/employee.component';
import { GroupsComponent } from './page/groups/groups.component';
import { ChildrenComponent } from './page/children/children.component';
import { HomeComponent } from './page/home/home.component';
import { SpecialClassesComponent } from './page/special-classes/special-classes.component';
import { KindergartenComponent } from './page/kindergarten/kindergarten.component';
import { EditChildComponent } from './page/edit-child/edit-child.component';
import { EditKindergartenComponent } from './page/edit-kindergarten/edit-kindergarten.component';
import { EditGroupComponent } from './page/edit-group/edit-group.component';
import { EditEmployeeComponent } from './page/edit-employee/edit-employee.component';
import { EditSpecialClassComponent } from './page/edit-special-class/edit-special-class.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'tagovodak',
    component: KindergartenComponent
  },
  {
    path: 'tagovoda/edit/:id',
    component: EditKindergartenComponent,
  },
  {
    path: 'alkalmazottak',
    component: EmployeeComponent
  },
  {
    path: 'alkalmazott/edit/:id',
    component: EditEmployeeComponent,
  },
  {
    path: 'csoportok',
    component: GroupsComponent
  },
  {
    path: 'csoport/edit/:id',
    component: EditGroupComponent,
  },
  {
    path: 'gyerekek',
    component: ChildrenComponent
  },
  {
    path: 'gyermek/edit/:id',
    component: EditChildComponent,
  },
  {
    path: 'kulonorak',
    component: SpecialClassesComponent
  },
  {
    path: 'kulonora/edit/:id',
    component: EditSpecialClassComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
