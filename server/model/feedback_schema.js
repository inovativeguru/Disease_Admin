const mongoose = require('mongoose');
mongoose.set('debug',true);
let Schema=mongoose.Schema;

let feedback=new Schema({
 feedbackData: []
},{collection:'userfeedback',versionKey: false});

let feedback_data= mongoose.model('userfeedback',feedback);

module.exports =  feedback_data;