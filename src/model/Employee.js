const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Employee = new Schema({
    name:{type:String},
    city:{type:String},
    salary:{type:String},
    designation:{type:String},
    phoneno:{type:String},
    age:{type:Number},
},{timestamps:true});

module.exports = mongoose.model('Employee',Employee);