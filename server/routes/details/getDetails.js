import express from 'express';
import register from '../../model/location_schema';
import staticConfig from '../../config/staticConfig';

export default (req,res)=>{
	register.findOne((error,data)=>{

		if(error){
			res.json({status : false ,message : staticConfig.login.errorMessage});
		}
		else if(data==undefined){
			res.json({status : false,message : staticConfig.login.errorMessage});
		}
		else{
			res.json({status : true ,message : staticConfig.addDetails.successMessage, data: data});
		}
})
}