import express from 'express';
import suggestion from '../../model/feedback_schema';
import staticConfig from '../../config/staticConfig';

export default (req,res) =>{

	suggestion.findOne((err,data)=>{
		if(err){
			res.json({status : false ,message : staticConfig.suggestions.errorMessage});
		}
		else if(data==undefined){
			res.json({status : false ,message : staticConfig.suggestions.errorMessage});
		}
		else{
			res.json({status : true ,message : staticConfig.suggestions.successMessage, data: data});
		}
	});
};