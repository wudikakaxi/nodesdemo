var express = require('express');
var router = express.Router();

var customerservice=require('../services/usersservice');
var sd = require('silly-datetime');
/* GET users listing. */
// GET users?userid=num
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    var userid=req.query.userid;
    customerservice.getUserById({userid:userid}).then(result=>{
            res.json({
            code:0,
            msg:'ok',
            data:result[0]
        })
    }).catch (err=> {
            res.json({
            code: 1,
            msg: 'err',
            data: JSON.stringify(err)
        })
    })
});
//GET users?username=username&password=password&sex=sex&
router.get('/add',function(req,res,next){
    var username=req.query.username;
    var password=req.query.password;
    var sex=req.query.sex;
    var createtime=sd.format(new Date(),'YYYY-MM-DD HH:mm:ss');
    customerservice.addUser({username:username,password:password,sex:sex,createtime:createtime}).then(result=>{
            res.json({
            code:0,
            msg:'ok',
            data:result
        })
    }).catch(err=>{
            res.json({
            code: 1,
            msg: 'err',
            data: JSON.stringify(err)
        })
    })
});

router.get('/edit',function(req,res,next){
    var username=req.query.username;
    var password=req.query.password;
    var sex=req.query.sex;
    var id=req.query.id;
    customerservice.editUserById({username:username,password:password,sex:sex,id:id}).then(result=>{
            res.json({
            code:0,
            msg:'ok',
            data:result
        })
    }).catch(err=>{
            res.json({
            code: 1,
            msg: 'err',
            data: JSON.stringify(err)
        })
    })
});

router.get('/del',function(req,res,next){
    var id=req.query.id;
    customerservice.delUserById({id:id}).then(result=>{
            res.json({
            code:0,
            msg:'ok',
            data:result
        })
    }).catch(err=>{
            res.json({
            code: 1,
            msg: 'err',
            data: JSON.stringify(err)
        })
    })
});

router.post('/',function(req,res,next){
    var userid=req.body.userid;
    customerservice.getUserById({userid:userid}).then(result=>{
            res.json({
            code:0,
            msg:'ok',
            data:result[0]
        })
    }).catch (err=> {
            res.json({
            code: 1,
            msg: 'err',
            data: JSON.stringify(err)
        })
    })
});

router.post('/add',function(req,res,next){
    var username=req.body.username;
    var password=req.body.password;
    var sex=req.body.sex;
    var createtime=sd.format(new Date(),'YYYY-MM-DD HH:mm:ss');
    customerservice.addUser({username:username,password:password,sex:sex,createtime:createtime}).then(result=>{
            res.json({
            code:0,
            msg:'ok',
            data:result
        })
    }).catch(err=>{
            res.json({
            code: 1,
            msg: 'err',
            data: JSON.stringify(err)
        })
    })
});

router.post('/edit',function(req,res,next){
    var username=req.body.username;
    var password=req.body.password;
    var sex=req.body.sex;
    var id=req.body.id;
    customerservice.editUserById({username:username,password:password,sex:sex,id:id}).then(result=>{
            res.json({
            code:0,
            msg:'ok',
            data:result
        })
    }).catch(err=>{
            res.json({
            code: 1,
            msg: 'err',
            data: JSON.stringify(err)
        })
    })
});

router.post('/del',function(req,res,next){
    var id=req.body.id;
    customerservice.delUserById({id:id}).then(result=>{
            res.json({
            code:0,
            msg:'ok',
            data:result
        })
    }).catch(err=>{
            res.json({
            code: 1,
            msg: 'err',
            data: JSON.stringify(err)
        })
    })
});
module.exports = router;
