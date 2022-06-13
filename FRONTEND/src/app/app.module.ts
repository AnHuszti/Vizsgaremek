import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HomeComponent } from './page/home/home.component';
import { KindergartenComponent } from './page/kindergarten/kindergarten.component';
import { EmployeeComponent } from './page/employee/employee.component';
import { GroupsComponent } from './page/groups/groups.component';
import { ChildrenComponent } from './page/children/children.component';
import { SpecialClassesComponent } from './page/special-classes/special-classes.component';
import { DataTableModule } from './data-table/data-table.module';
import { EditChildComponent } from './page/edit-child/edit-child.component';
import { EditGroupComponent } from './page/edit-group/edit-group.component';
import { EditKindergartenComponent } from './page/edit-kindergarten/edit-kindergarten.component';
import { EditEmployeeComponent } from './page/edit-employee/edit-employee.component';
import { EditSpecialClassComponent } from './page/edit-special-class/edit-special-class.component';
import { EditFormModule } from './edit-form/edit-form.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    KindergartenComponent,
    EmployeeComponent,
    GroupsComponent,
    ChildrenComponent,
    SpecialClassesComponent,
    EditChildComponent,
    EditGroupComponent,
    EditKindergartenComponent,
    EditEmployeeComponent,
    EditSpecialClassComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTableModule,
    HttpClientModule,
    EditFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
