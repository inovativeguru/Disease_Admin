import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor( private httpclient:HttpClient ) { }

  getfeedback():Observable<any>{
  	let url:string="http://localhost:3000/suggestion"
  	return this.httpclient.get(url)
  	.map((res:Response)=>res);
  }
}