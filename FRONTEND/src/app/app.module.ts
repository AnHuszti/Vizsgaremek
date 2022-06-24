import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HomeComponent } from './page/home/home.component';
import { KindergartenComponent } from './page/kindergarten/kindergarten.component';
import { EmployeeComponent } from './page/employee/employee.component';
import { GroupsComponent } from './page/groups/groups.component';
import { ChildComponent } from './page/child/child.component';
import { SpecialClassesComponent } from './page/special-classes/special-classes.component';
import { DataTableModule } from './data-table/data-table.module';
import { EditChildComponent } from './page/edit-child/edit-child.component';
import { EditGroupComponent } from './page/edit-group/edit-group.component';
import { EditKindergartenComponent } from './page/edit-kindergarten/edit-kindergarten.component';
import { EditEmployeeComponent } from './page/edit-employee/edit-employee.component';
import { EditSpecialClassComponent } from './page/edit-special-class/edit-special-class.component';
import { EditFormModule } from './edit-form/edit-form.module';
import { FileUploaderComponent } from './common/file-uploader/file-uploader.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './page/login/login.component';
import { JwtInterceptor } from './service/jwt.interceptor';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    KindergartenComponent,
    EmployeeComponent,
    GroupsComponent,
    ChildComponent,
    SpecialClassesComponent,
    EditChildComponent,
    EditGroupComponent,
    EditKindergartenComponent,
    EditEmployeeComponent,
    EditSpecialClassComponent,
    FileUploaderComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTableModule,
    HttpClientModule,
    EditFormModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-full-width',
      preventDuplicates: true,
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      deps: [
        AuthService,
      ],
      multi: true // more interceptor possible
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
