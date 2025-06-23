import { Component } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  user={
    name:'',
    email:'',
    role:''
  };
  submitted=false;
  submitForm(form:any){
    this.submitted=true;
  }
}
