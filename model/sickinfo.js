var mongoose = require('mongoose');
//var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var sickinfoSchema = new Schema({

    reg_No:  { type:String,required:true,unique: true },
    Info: [
        {
            date: {type:Date,required:true},
            feaver:{type:Number,required:true},
            sickness:[String],
            prescription:[String],
        }
    ],
   

});


module.exports = mongoose.model("SickInfo",sickinfoSchema);


