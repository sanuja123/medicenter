var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const SickInfo = require('../model/sickinfo');


//show all the sick information about all reg numbers
router.get('/',function(req,res){
    SickInfo.find((err,sickinfo)=>{
        if(err){
            console.log(err);
        }  
        else{
            res.json(sickinfo);
        }

    });
});

//show sick infor about particular reg number
router.get('/:id',function(req,res){
    SickInfo.findById(req.params.id,(err,sickinfo)=>{
        if(err){
            console.log(err);
        }  
        else{
            res.json(sickinfo);
        }

    });
});


//save sick information
router.post('/add', function(req, res) {

    const  newSickInfo = new SickInfo({
        reg_No:req.body.reg_No,
        Info:req.body.Info,
    });
    newSickInfo.save()
        .then(newSickInfo=>{
            res.status(200).json({'newSickInfo':'Added successfully'})
        })
        .catch(err => {
            res.status(400).send('Failed to create new Record');
        });

});

//update sick infor
router.post('/update/:id',function(req,res){

    SickInfo.findById(req.params.id,function(err,sickinfo){
        if(!sickinfo){
          return next(new Error('Could not load document'));
        }
        else{
            sickinfo.reg_No = req.body.reg_No,
            sickinfo.Info = req.body.Info,

            sickinfo.save().then(sickinfo=>{
                res.json('Update done');
            }).catch(err=>{
                res.status(400).send('Failed to update Record');
            });
        }

    });
});

router.post('/delete/:id',function(req,res){

    SickInfo.findByIdAndRemove({_id:req.params.id},function(err,sickinfo){
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