import express from 'express';
import feedbackdata from '../../model/feedback_schema';
import staticConfig from '../../config/staticConfig';

export default (req,res) =>{
		let info = req.body.feedback;
		feedbackdata.updateMany({},{ $addToSet : {	feedbackData: info} },{ upsert : true },(err,data)=>{
		if(err){
			res.json({status : false ,message : staticConfig.addSuggestions.errorMessage});
		}
		else if(data==undefined){
			res.json({status : false ,message : staticConfig.addSuggestions.errorMessage});
		}
		else{
			feedbackdata.findOne((error,result)=>{
				if(error){
					res.json({status : false ,message : staticConfig.addSuggestions.errorMessage});
				}
				else if(result==undefined)
				{
					res.json({status : false ,message : staticConfig.addSuggestions.errorMessage});
				}
				else{
					res.json({status : true ,message : staticConfig.addSuggestions.successMessage, data: result});
				}			
			})
		}
	});
};