/**
 * Created by wudi on 16-12-20.
 */
var express = require('express');
var router = express.Router();
var mq=require('../util/rabbitmq');

router.get('/addrmq',function (req,res,next) {
    mq.sendJob({id:1,data:"test"});
    res.json({
        code:0,
        msg:'ok',
        data:{}
    });
    return ;
});


module.exports = router;