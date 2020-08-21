import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
employeeForm:FormGroup;
  constructor(private fb:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.employeeForm=this.fb.group({
      name:[''],
      email:[''],
      password:['']  
    });
  }
  OnSubmit(){
    this.http.post('https://localhost:44365/Employee',this.employeeForm.value).subscribe(x=>{
      console.log(x);
    })
    console.log(this.employeeForm)
  }

}
