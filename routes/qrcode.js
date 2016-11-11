/**
 * Created by wudi on 2016/11/11.
 */
var express = require('express');
var router = express.Router();
var qr_image = require('qr-image');
router.get('/getqrimg',function(req,res,next){
    try {
        var img = qr_image.image('http://www.baidu.com',{size :10});

        res.writeHead(200, {'Content-Type': 'image/png'});
        img.pipe(res);
    } catch (e) {
        res.writeHead(414, {'Content-Type': 'text/html'});
        res.end('<h1>414 Request-URI Too Large</h1>');
    }
});


module.exports=router;