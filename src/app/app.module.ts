import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { GridCheckBoxComponent } from './grid-check-box/grid-check-box.component';
import { ErrorControlMessageComponent } from './UIValidation/error-control-message/error-control-message.component';
import { SimpleValidationComponent } from './UIValidationAnotherWay/simple-validation/simple-validation.component';
import {httpIntercepterProvidors} from './http-intercepter/testinterceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    GridCheckBoxComponent,
    ErrorControlMessageComponent,
    SimpleValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [httpIntercepterProvidors],
  bootstrap: [AppComponent]
})
export class AppModule { }
