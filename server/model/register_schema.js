const mongoose = require('mongoose');
mongoose.set('debug',true);
let Schema=mongoose.Schema;

let register=new Schema({
 name: String,
 username: {type:String},
 contact_no: {type: Number, unique: true},
 email: {type: String, unique: true},
 password: String,
 status: Boolean,
 diseaseinfo: []
},{collection:'registereduser',versionKey: false});

let register_model= mongoose.model('registereduser',register);

module.exports =  register_model;