import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpclient:HttpClient) { }

  detail(data):Observable<any>{
  	let url:string="http://localhost:3000/details"
  	return this.httpclient.post(url,data)
  	.map((res:Response)=>res);
}

}


