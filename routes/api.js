const express=require('express');
const app=express();
var PORT = 3000; 
const router=express.Router();
const loc=require('./random');
// console.log('it works ');

router.get('/api',function (req,res){

    // console.log(loc);
    res.send('sssdds');

});

router.post('/api',function (req,res){

    // console.log(loc.latitude);
    res.send(loc);

    
    });





    module.exports = router;
