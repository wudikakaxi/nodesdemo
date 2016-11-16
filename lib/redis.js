/**
 * Created by wudi on 2016/11/10.
 */
var express = require('express');
var loghelper=require('../util/loghelper')
var router = express.Router();
var redishelper=require('../util/redishelper')
router.get('/set',function(req,res,next){

    redishelper.setValueTimeOut('wudi',JSON.stringify({userid:1}),60000);
    res.json({msg:'ok'});

});
router.get('/get',function(req,res,next){

    redishelper.getValue('wudi').then(result=>{
            res.json({msg:JSON.parse(result)});
        }).catch(err=>{
            res.json({msg:err});
        });

});



module.exports = router;