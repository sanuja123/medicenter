var mongoose = require('mongoose');
//var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var patientSchema = new Schema({

    reg_No:  {type:String,required:true,unique: true },

    name: {type:String,required:true},

    age:{type:Number,required:true},

    address:{type:String,required:true},

    mother: {
        name: {type:String,required:true},
        job:{type:String,required:true},
        age:{type:Number,required:true},
    },

    father: {
        name: {type:String,required:true},
        job:{type:String,required:true},
        age:{type:Number,required:true},
    },

    diseases:[String]

});


module.exports = mongoose.model("Patient",patientSchema);








