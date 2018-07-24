import express from 'express';
import diseasedata from '../../model/register_schema';
import staticConfig from '../../config/staticConfig';

export default (req,res) =>{
	let info = {};

	diseasedata.insertMany({
		info.question = req.body.question,
		info.answer = req.body.answer
	},(err,data)=>{
		if(err){
			res.json({status : false ,message : staticConfig.addDetails.errorMessage});
		}
		else if(data==undefined){
			res.json({status : false ,message : staticConfig.addDetails.errorMessage});
		}
		else{
			res.json({status : true ,message : staticConfig.addDetails.successMessage, data: data});
		}
	});
};