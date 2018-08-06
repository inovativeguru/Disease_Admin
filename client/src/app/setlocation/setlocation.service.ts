import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SetlocationService {

  constructor(private httpclient:HttpClient) { }
  addlocation(data):Observable<any>{
  	let url:string="http://localhost:3000/login"
  	return this.httpclient.put(url,data)
  	.map((res:Response)=>res);
  }
}