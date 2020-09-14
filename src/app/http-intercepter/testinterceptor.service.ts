// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TestinterceptorService {

//   constructor() { }
// }
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {AuthIntercepterService} from './auth-intercepter.service'
export const httpIntercepterProvidors=[
  {provide:HTTP_INTERCEPTORS, useClass:AuthIntercepterService,multi:true}
]
