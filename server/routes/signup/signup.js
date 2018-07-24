import express from 'express';
import register from '../../model/register_schema';
import staticConfig from '../../config/staticConfig';

export default (req,res)=>{
	register.insertMany(
		{
			name: req.body.adminname,
			username: req.body.username,
			contact_no: req.body.contact_no,
			email: req.body.email,
			password: req.body.password,
		},(error,data)=>{
			console.log("In signup",req.body)

		if(error){
			res.json({status : false ,message : staticConfig.signup.errorMessage});
		}
		else if(data==undefined){
			res.json({status : false,message : staticConfig.signup.errorMessage});
		}
		else{
			res.json({status : true,message : staticConfig.signup.successMessage,userdata : data});
		}

	})

}