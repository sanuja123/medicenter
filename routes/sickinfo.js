var express = require('express');
var router = express.Router();
const SickInfo = require('../model/sickinfo');
//const jwt = require('jsonwebtoken');
const config = require('../config/database');
const passport = require('passport');



router.post('/', function(req, res) {

    const  newSickInfo = new SickInfo({
        reg_No:req.body.reg_No,
        Info:req.body.Info,
    })
  
    SickInfo.saveSickInfo(newSickInfo,function(err,sickinfo){
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(sickinfo){
            res.json({state:true,msg:"data inserted"});
        }
    })

});

router.put('/update',function(req,res){
    const reg_No=req.body.reg_No;

    var item = {
        Info:req.body.Info,
    }

    SickInfo.findByRegNo(reg_No, function(err,sickinfo){

        if(err) throw err;
  
        if(!sickinfo){
          res.json({state:false,msg:"user not found"}); 
        }

        SickInfo.updateSickInfo(item,function(err,result,callback){
            item.save(callback)
        })

    })
});
module.exports = router;