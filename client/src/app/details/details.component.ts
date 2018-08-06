import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';
import { NgModule } from '@angular/core';
@Component({
   selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ DetailsService ]
})
export class DetailsComponent implements OnInit {
data:any={};
dataResult:any;
  constructor( private detailsservice : DetailsService ) { }

  ngOnInit() {
  }

  detail(){
    console.log("data",this.data);
  	this.detailsservice.detail(this.data)
  	.subscribe((res)=>{
    console.log("response",res);
  	this.dataResult=res.data.diseaseinfo;
    })
  }

}