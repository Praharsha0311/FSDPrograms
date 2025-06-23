import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students:any[]=[];
  newStudent={
    name:'',stuclass:''
  };
  constructor(private http:HttpClient){}
  ngOnInit():void{
    this.loadStudents();
  }
  loadStudents(){
    this.http.get<any[]>('http://localhost:4000/api/students').subscribe((data:any[])=>{
      this.students=data;
    });
  }
  addStudent(){
    this.http.post('http://localhost:4000/api/students',this.newStudent).subscribe((newStudent:any)=>{
      this.students.push(this.newStudent);
      this.newStudent = { name: '', stuclass: '' };
    });
  }
}
