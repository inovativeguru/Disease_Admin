import { Component, OnInit } from '@angular/core';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

	res:any;
  constructor( private feedbackservice:FeedbackService) { }

  ngOnInit() {
  	this.getfeedback();
  }

getfeedback(){
  	this.feedbackservice.getfeedback()
  	.subscribe((res)=>{
    console.log("response",res);
  		this.res=res.data.feedbackData;
    })
  }

}
