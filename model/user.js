var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    username:  {type:String,required:true},
    name: {type:String,required:true},
    email:   {type:String,required:true,unique: true},
    password: {type:String,required:true},

});

const User = module.exports = mongoose.model("User",userSchema);

module.exports.saveUser = function(newUser,callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            // Store hash in your password DB.
            //console.log(hash);
            newUser.password = hash;
            if(err) throw err;
            newUser.save(callback);
        });
    });
};


module.exports.findByEmail = function(email,callback){
   const query = {email:email};
   User.findOne(query,callback);

};

module.exports.passwordCheck = function(plainpassword,hash,callback){
    bcrypt.compare(plainpassword, hash, function(err, res) {
        // res === true
        //console.log(res);
        if(err) throw err;
        if(res){
            callback(null,res);
        }    
        
    });
};

module.exports.findUserbyId = function(id,callback){
    User.findOne(id,callback);

};
