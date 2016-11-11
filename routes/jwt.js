/**
 * Created by wudi on 2016/11/9.
 */

var express = require('express');
var router = express.Router();
var jwtSign = require('jsonwebtoken');
var config=require('../config/config');
router.get('/auth', function(req, res,next) {

        console.log('到了这里了')
        if (!req.user) return res.sendStatus(401);
        res.send({
            state:'ok'
        });
    });

router.get('/noauth', function(req, res,next) {
        res.json({userid:123});
    });
router.get('/gettoken',function(req,res,next){
    var user={id:1,username:'wudi'};
    var token = jwtSign.sign(user, config.token.secret, { expiresIn: config.token.expr });

    res.json({
        token : token,
        expires: config.token.expr,
        user: user
    });
});
module.exports=router;