import express from 'express';
import register from '../../../model/admin_schema';
import staticConfig from '../../../config/staticConfig';

export default (req,res)=>{
	register.findOne({email: req.body.email},(error,data)=>{

		if(error){
			res.json({status : false ,message : staticConfig.login.errorMessage});
		}
		else if(data==undefined){
			res.json({status : false,message : staticConfig.login.errorMessage});
		}
		else if(!data){
			res.json({status : false,message : staticConfig.login.errorMessage});
		}
		else{
			data.comparePassword(req.body.password, (err, isMatch) => {
			if (isMatch) {
				res.json({status: true, message: staticConfig.login.sucessMessage,userdata : data});
			}
			else {
				res.json({status: false, message: staticConfig.login.wrongpassword,userdata : null});
			}
			});
		}
})
}