import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {EmpService} from 'src/app/shared/emp.service'
import {JsonDataService} from 'src/app/shared/json-data.service'
import{JsonDto} from 'src/app/Data/json-dto'
import { Subscription } from 'rxjs';
import { toArray } from 'rxjs/operators';
import{ValidationService} from 'src/app/UIValidation/validation.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
employeeForm:FormGroup;
// jsonData:JsonDto[];
jsonData:any;
sbscription:Subscription;
selectedItem:string[];
  constructor(private fb:FormBuilder, private http:HttpClient, private empService: EmpService, private _freeApiService: JsonDataService) { }

  ngOnInit(): void {
    this.employeeForm=this.fb.group({
      name:[''],
      email:['',[Validators.required, ValidationService.emailValidator]],
      password:['']  
    });
    this.GetEmployeeData()  
    this.selectedItem=new Array<string>();
    
  }
  ngAfterViewInit() {
    //For JSON DATA CODE
  //  this.sbscription= this._freeApiService.getJSONData().pipe(toArray()).subscribe(
    this._freeApiService.getJSONData().subscribe(
      data=>{
        this.jsonData=data;    
        console.log(this.jsonData);
               
      }
    )
    /// End
  }
  OnSubmit(){
    this.empService.saveEmployee(this.employeeForm.value).subscribe(x=>{
      console.log(x);
    })    
  }

  GetEmployeeData(){
    this.empService.getAllEmployee().subscribe(x=>{
      console.log(x);
    })   
  }
  getJsonDatId(e:any,id:string){
    if(e.target.checked){
      console.log(id,"checked");
      this.selectedItem.push(id);

    }
    else{
      console.log(id,"Unchecked");
    this.selectedItem =  this.selectedItem.filter(m=>m!=id)

    }
    console.log(this.selectedItem);

  }


}
