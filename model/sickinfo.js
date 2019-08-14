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


const SickInfo = module.exports = mongoose.model("SickInfo",sickinfoSchema);

module.exports.saveSickInfo = function(newSickInfo,callback,err){
    if(err) throw err;
    newSickInfo.save(callback);
};

module.exports.findByRegNo = function(reg_No,callback){
    const query = {reg_No:reg_No};
    SickInfo.findOne(query,callback);
 
};

module.exports.updateSickInfo= function(res,err,callback){
    const iteam = {reg_No:reg_No};
    if(err) throw err;
    SickInfo.updateOne(item,callback);
 
};