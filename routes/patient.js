var express = require('express');
var router = express.Router();
const Patient = require('../model/patient');
//const jwt = require('jsonwebtoken');
const config = require('../config/database');
const passport = require('passport');



router.post('/', function(req, res) {

    const newPatient = new Patient({
        reg_No:req.body.reg_No,
        name:req.body.name,
        age:req.body.age,
        address:req.body.address,
        mother:req.body.mother,
        father:req.body.father,
        diseases:req.body.diseases,
    })
  
    Patient.savePatient(newPatient,function(err,patient){
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(patient){
            res.json({state:true,msg:"data inserted"});
        }
    })

});

















module.exports = router;

