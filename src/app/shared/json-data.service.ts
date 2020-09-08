import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonDto } from '../Data/json-dto';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  constructor(private http:HttpClient) { }
  //getJSONData():Observable<any>{ 
  getJSONData(){ 
   return this.http.get('https://api.github.com/users/hadley/orgs');   
  }
}
