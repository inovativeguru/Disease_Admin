import express from 'express';
import feedbackdata from '../../model/feedback_schema';
import staticConfig from '../../config/staticConfig';

export default (req,res) =>{
		let info = req.body.feedback;
		console.log("Here",req.body);
		feedbackdata.updateMany({},{ $addToSet : {	feedbackData: info} },{ upsert : true },(err,data)=>{
		if(err){
			res.json({status : false ,message : staticConfig.suggestions.errorMessage});
		}
		else if(data==undefined){
			res.json({status : false ,message : staticConfig.suggestions.errorMessage});
		}
		else{
			res.json({status : true ,message : staticConfig.suggestions.successMessage, data:data});
		}
	});
};