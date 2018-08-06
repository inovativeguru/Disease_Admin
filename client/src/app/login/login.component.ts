import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  data:any={};
  constructor( private loginservice : LoginService ) { }

  ngOnInit() {
  }

  login(){
    console.log("data",this.data)
  	this.loginservice.login(this.data)
  	.subscribe((res)=>{

  	})
  }

}