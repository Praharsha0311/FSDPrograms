import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCssComponent } from './event-css/event-css.component';
import { FormsModule } from '@angular/forms';
import { JobComponent } from './job/job.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    EventCssComponent,
    JobComponent,
    EmployeeComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
