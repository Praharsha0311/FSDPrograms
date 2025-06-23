import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees:any[]=[];
  constructor(private http:HttpClient){}
  ngOnInit():void{
    this.http.get<any[]>('assets/employee.json').subscribe((data:any[])=>{
      this.employees=data;
    });
  }
}
