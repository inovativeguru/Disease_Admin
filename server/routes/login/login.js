import express from 'express';
import register from '../../model/register_schema';
import staticConfig from '../../config/staticConfig';

export default (req,res)=>{
	register.find({email: req.body.email},(error,data)=>{console.log("email",req.body)

		if(error){
			res.json({status : false ,message : staticConfig.login.errorMessage});
		}
		else if(data==undefined){
			res.json({status : false,message : staticConfig.login.errorMessage});
		}
		else{
			res.json({status : true,message : staticConfig.login.successMessage,userdata : data});
		}

	})

}