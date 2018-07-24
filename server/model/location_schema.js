const mongoose = require('mongoose');
mongoose.set('debug',true);
let Schema=mongoose.Schema;

let location=new Schema({
 name:String,
 username:{type:String},
 contact_no:{type:Number, unique:true},
 email:{type:String, unique:true},
 password:String
},{collection:'citylocation',versionKey: false});

let location_model= mongoose.model('citylocation',location);

module.exports =  location_model;