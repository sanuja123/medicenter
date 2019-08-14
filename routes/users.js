var express = require('express');
var router = express.Router();
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res) {

  const newUser = new User({
    username:req.body.username,
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
  })
  
  User.saveUser(newUser,function(err,user){
    if(err){
      res.json({state:false,msg:"data not inserted"});
    }
    if(user){
      res.json({state:true,msg:"data inserted"});
    }
  })
});





router.post('/login',function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    User.findByEmail(email, function(err,user){
      if(err) throw err;

      if(!user){
        res.json({state:false,msg:"No user found"});
        //console.log(user);
      }

      User.passwordCheck(password,user.password,function(err,match){
        if(err) throw err;
        if(match){
          //console.log("Worked");
          var token = jwt.sign({'user':user.email,'password':user.password},config.secret,{expiresIn:86400});
          res.json({state:true,msg:"logging",token:token});
          

        }
      }); 
    });
});



router.post('/profile', passport.authenticate('jwt', { session: false }),
    function(req, res) {
      res.json({user:req.user});
    }
);

module.exports = router;

