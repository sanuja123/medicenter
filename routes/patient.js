var express = require('express');
var router = express.Router();
const Patient = require('../model/patient');
//const jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
//const config = require('../config/database');
//const passport = require('passport');




//show all patient in database
router.get('/',function(req,res){
    Patient.find((err,patient)=>{
        if(err){
            console.log(err);
        }  
        else{
            res.json(patient);
        }

    });
});

//show a patient of particular reg number
router.get('/:id',function(req,res){
    Patient.findById(req.params.id,(err,patient)=>{
        if(err){
            console.log(err);
        }  
        else{
            res.json(patient);
        }

    });
});


//save new patient information
router.post('/add', function(req, res) {

    const newPatient = new Patient({
        reg_No:req.body.reg_No,
        name:req.body.name,
        age:req.body.age,
        address:req.body.address,
        mother:req.body.mother,
        father:req.body.father,
        diseases:req.body.diseases,
    });
    newPatient.save()
        .then(newPatient=>{
            res.status(200).json({'newPatient':'Added successfully'})
        })
        .catch(err => {
            res.status(400).send('Failed to create new Record');
        });

});




//update patient information
router.post('/update/:id',function(req,res){

    Patient.findById(req.params.id,function(err,patient){
        if(!patient){
          return next(new Error('Could not load document'));
        }
        else{
            patient.reg_No=req.body.reg_No,
            patient.name=req.body.name,
            patient.age=req.body.age,
            patient.address=req.body.address,
            patient.mother=req.body.mother,
            patient.father=req.body.father,
            patient.diseases=req.body.diseases,

            patient.save().then(patient=>{
                res.json('Update done');
            }).catch(err=>{
                res.status(400).send('Failed to update Record');
            });
        }

    });
});

//remove patient information
router.post('/delete/:id',function(req,res){

    Patient.findByIdAndRemove({_id:req.params.id},function(err,patient){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json('Remove successfully');
        }
        
    });
});

module.exports = router;

















module.exports = router;

