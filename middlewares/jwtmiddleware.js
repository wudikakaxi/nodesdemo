/**
 * Created by wudi on 2016/11/9.
 */
var jsonwebtoken = require('jsonwebtoken')
var config = require('../config/config');

module.exports=function(req,res,next){

    if (req.headers && req.headers.authorization) {

        console.log(req.headers.authorization);
        /* authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIiLCJjdXN0b21lcmlkIjoiNTgzMzYzMiIsImlhdCI6MTQ3MTA2NzEzNCwiZXhwIjoxNTAyMTcxMTM0fQ.y4QxFJcNNRli53hjpwA27popULdepF-bS0BS0Kfh18E' */
        try {
            var token = req.headers.authorization.slice('Bearer '.length);
            var dtoken = jsonwebtoken.decode(token, { complete: true }) || {};
            req.user = dtoken.payload
            console.log('jwt middleware');
            console.log('req.user.begin');
            console.log(req.user);
            console.log('req.user.end');
        } catch (err) {
            console.log(err);
        }
    }

    if (!req.user) {
        req.user = {}
    }

    next();
};