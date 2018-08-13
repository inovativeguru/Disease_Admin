const mongoose = require('mongoose');
mongoose.set('debug',true);
let Schema=mongoose.Schema;

let schema=new Schema({
 name: String,
 username: {type:String},
 contact_no: {type: Number, unique: true},
 email: {type: String, unique: true},
 password: String,
 status: Boolean,
 usertype: {type:String,required:true}
},{collection:'registeredadmin',versionKey: false});

schema.methods.comparePassword = function(pw, cb) { 
    if(this.password==pw){
    cb(null, true);
    }
    else 
     cb(null, false)
    };

let admin_model= mongoose.model('registeredadmin',schema);

module.exports =  admin_model;