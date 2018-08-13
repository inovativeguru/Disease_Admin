import express from 'express';
import suggestion from '../../model/location_schema';
import staticConfig from '../../config/staticConfig';

export default (req,res) =>{

	suggestion.findOne((err,data)=>{
		if(err){
						console.log("in err",data);
			res.json({status : false ,message : staticConfig.getLocation.errorMessage});
		}
		else if(data==undefined){
						console.log("in undefined",data);
			res.json({status : false ,message : staticConfig.getLocation.errorMessage});
		}
		else{
			console.log("in else",data);
			res.json({status : true ,message : staticConfig.getLocation.successMessage, data: data});
		}
	});
};