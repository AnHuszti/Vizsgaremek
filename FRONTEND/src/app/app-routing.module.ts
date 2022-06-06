import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './page/employee/employee.component';
import { GroupsComponent } from './page/groups/groups.component';
import { ChildrenComponent } from './page/children/children.component';
import { HomeComponent } from './page/home/home.component';
import { SpecialClassesComponent } from './page/special-classes/special-classes.component';
import { KindergartenComponent } from './page/kindergarten/kindergarten.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tagovodak',
    component: KindergartenComponent
  },
  {
    path: 'alkalmazottak',
    component: EmployeeComponent
  },
  {
    path: 'csoportok',
    component: GroupsComponent
  },
  {
    path: 'gyerekek',
    component: ChildrenComponent
  },
  {
    path: 'kulonorak',
    component: SpecialClassesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
