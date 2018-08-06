import express from 'express';
import location_schema from '../../model/location_schema';
import staticConfig from '../../config/staticConfig';

export default (req,res) =>{
		let location = req.body;

		location_schema.updateMany({},{ $addToSet : {	locationData: location} },{ upsert : true },(err,data)=>{
			console.log("Here ",location);
		if(err){
			res.json({status : false ,message : staticConfig.addLocation.errorMessage });
		}
		else if(data==undefined){
			res.json({status : false ,message : staticConfig.addLocation.errorMessage });
		}
		else{
			location_schema.findOne((error,result)=>{
				if(error){
					res.json({status : false ,message : staticConfig.addLocation.errorMessage });
				}
				else if(result==undefined)
				{
					res.json({status : false ,message : staticConfig.addLocation.errorMessage });
				}
				else{
					res.json({status : true ,message : staticConfig.addLocation.successMessage, data: result});
				}			
			})
		}
	});
};