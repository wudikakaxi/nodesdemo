/**
 * Created by wudi on 2016/11/11.
 */
var express = require('express');
var router = express.Router();
router.get('/',function(req,res,next){
    res.render('socket');
});
module.exports = router;