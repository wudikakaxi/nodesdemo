var express = require('express');
var router = express.Router();

var customerservice=require('../services/usersservice');
var sd = require('silly-datetime');

/**
 * @api {get} /users?userid=1 /
 * @apiName /
 * @apiGroup users
 * @apiDescription 获取用户信息
 *
 * @apiParam {int} userid  用户id

 *
 *
 * @apiVersion 0.0.2
 * @apiSampleRequest http://localhost:3000/users?userid=1

 * @apiSuccessExample {json} Success-Response:
 {
   "code": 0,
   "msg": "获取成功",
   "data": {}
 }
 */
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
/**
 * @api {get} /users/add add
 * @apiName add
 * @apiGroup users
 * @apiDescription 添加用户信息
 *
 * @apiParam {int} username  用户姓名
* @apiParam {int} password  用户密码
* @apiParam {int} sex  用户性别

 *
 *
 * @apiVersion 0.0.2
 * @apiSampleRequest http://localhost:3000/users/add/

 * @apiSuccessExample {json} Success-Response:
 {
   "code": 0,
   "msg": "添加成功",
   "data": {}
 }
 */
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
/**
 * @api {get} /users/edit edit
 * @apiName edit
 * @apiGroup users
 * @apiDescription 修改用户信息
 *
 * @apiParam {int} username  用户姓名
 * @apiParam {int} password  用户密码
 * @apiParam {int} sex  用户性别
 * @apiParam {int} id  用户id
 *
 *
 * @apiVersion 0.0.2
 * @apiSampleRequest http://localhost:3000/users/edit/

 * @apiSuccessExample {json} Success-Response:
 {
   "code": 0,
   "msg": "添加成功",
   "data": {}
 }
 */
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

router.post('/del', function (req, res, next) {
    var id = req.body.id;
    customerservice.delUserById({id: id}).then(result=> {
        res.json({
            code: 0,
            msg: 'ok',
            data: result
        })
    }).catch(err=> {
        res.json({
            code: 1,
            msg: 'err',
            data: JSON.stringify(err)
        })
    })
});
module.exports = router;

router.post('/abc', function (req, res, next) {

    'abc'.then(result=> {
        res.json({
            code: 0,
            msg: 'ok',
            data: result
        })
    }).catch(err=> {
        res.json({
            code: 1,
            msg: 'err',
            data: JSON.stringify(err)
        })
    })
});

