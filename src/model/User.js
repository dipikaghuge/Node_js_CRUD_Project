const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    name:{type:String},
    email:{type:String},
    city:{type:String},
    mobile:{type:String}
},{timestamps:true});

module.exports = mongoose.model('User',User);

