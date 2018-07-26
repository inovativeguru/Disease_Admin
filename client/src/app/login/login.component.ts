import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  constructor( private loginservice : LoginService ) { }

  ngOnInit() {
  }

  login(email,password){
  	let data:any={};
  	data.email=email;
  	data.password=password;
  	this.loginservice.login(data)
  	.subscribe((res)=>{
  		
  	})
  }

}
