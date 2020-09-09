import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { SimpleValidationComponent } from './UIValidationAnotherWay/simple-validation/simple-validation.component';

const routes: Routes = [{path:'create-employee', component: EmployeeComponent},{path:'simplevalid', component: SimpleValidationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
