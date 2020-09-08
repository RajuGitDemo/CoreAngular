import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) { }
  saveEmployee(EmployeeData){ 
   return this.http.post('https://localhost:44365/Employee',EmployeeData);   
  }

  updateEmployee(EmployeeData){
   return this.http.put('https://localhost:44365/Employee',EmployeeData);   
  }
  getAllEmployee(){
    return this.http.get('https://localhost:44365/Employee');   
  }

  getEmployeeByID(empid){
    return this.http.get('https://localhost:44365/Employee'+ empid);   
  }

  deleteEmployeeByID(empid){
    return this.http.get('https://localhost:44365/Employee'+ empid);   
  }
  
  
}
