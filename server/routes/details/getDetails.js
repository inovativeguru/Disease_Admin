import express from 'express';
import data from '../../model/disease_data';
import staticConfig from '../../config/staticConfig';

export default (req,res) =>{

	data.findOne((err,info)=>{
		if(err){
			res.json({status : false ,message : staticConfig.getDetails.errorMessage});
		}
		else if(info==undefined){
			res.json({status : false ,message : staticConfig.getDetails.errorMessage});
		}
		else{
			res.json({status : true ,message : staticConfig.getDetails.successMessage, data: info});
		}
	});
};