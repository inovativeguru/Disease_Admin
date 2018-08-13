import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) { }

  login(data):Observable<any>{
  	let url:string="http://localhost:3000/user/login"
  	return this.httpclient.put(url,data)
  	.map((res:Response)=>res);
  }

}