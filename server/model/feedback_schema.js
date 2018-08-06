const mongoose = require('mongoose');
mongoose.set('debug',true);
let Schema=mongoose.Schema;

let feedback=new Schema({
 feedbackData: []
},{collection:'userfeedback',versionKey: false});

let feedback= mongoose.model('userfeedback',location);

module.exports =  feedback;