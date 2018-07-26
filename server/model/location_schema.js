const mongoose = require('mongoose');
mongoose.set('debug',true);
let Schema=mongoose.Schema;

let location=new Schema({
 diseaseinfo: []
},{collection:'citylocation',versionKey: false});

let location_model= mongoose.model('citylocation',location);

module.exports =  location_model;