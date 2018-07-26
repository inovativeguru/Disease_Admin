import express from 'express';
import diseasedata from '../../model/location_schema';
import staticConfig from '../../config/staticConfig';

export default (req,res) =>{
		let info = req.body;

		diseasedata.updateMany({},{ $addToSet : {	diseaseinfo: info} },{ upsert : true },(err,data)=>{
		if(err){
			res.json({status : false ,message : staticConfig.addDetails.errorMessage});
		}
		else if(data==undefined){
			res.json({status : false ,message : staticConfig.addDetails.errorMessage});
		}
		else{
			diseasedata.findOne((error,result)=>{
				if(error){
					res.json({status : false ,message : staticConfig.addDetails.errorMessage});
				}
				else if(result==undefined)
				{
					res.json({status : false ,message : staticConfig.addDetails.errorMessage});
				}
				else{
					res.json({status : true ,message : staticConfig.addDetails.successMessage, data: result});
				}			
			})
		}
	});
};