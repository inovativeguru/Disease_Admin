const mongoose = require('mongoose');
mongoose.set('debug',true);
let Schema=mongoose.Schema;

let data=new Schema({
 diseaseinfo: []
},{collection:'disease_info',versionKey: false});

let disease_data= mongoose.model('diseasedata',data);

module.exports =  disease_data;