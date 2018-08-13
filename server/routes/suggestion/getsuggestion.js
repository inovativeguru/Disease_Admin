import express from 'express';
import suggestion from '../../model/feedback_schema';
import staticConfig from '../../config/staticConfig';

export default (req,res) =>{

	suggestion.findOne((err,data)=>{
		if(err){
			res.json({status : false ,message : staticConfig.getSuggestions.errorMessage});
		}
		else if(data==undefined){
			res.json({status : false ,message : staticConfig.getSuggestions.errorMessage});
		}
		else{
			res.json({status : true ,message : staticConfig.getSuggestions.successMessage, data: data});
		}
	});
};