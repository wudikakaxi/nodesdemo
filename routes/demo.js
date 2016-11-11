var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/redirect',function(req,res,next){
  res.redirect('http://www.baidu.com');
});


router.get('/example/b', function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from Ccc!');
}


router.get('/example/c', [cb0, cb1, cb2]);

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

router.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});


router.route('/book')
    .get(function(req, res) {
      res.send('Get a random book');
    })
    .post(function(req, res) {
      res.send('Add a book');
    })
    .put(function(req, res) {
      res.send('Update the book');
    });

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// 定义网站主页的路由
router.get('/abc', function(req, res) {
  res.send('Birds home page');
});
// 定义 about 页面的路由
router.get('/about', function(req, res) {
  res.send('About birds');
});



// 一个中间件栈，处理指向 /user/:id 的 GET 请求
//router.get('/user/:id', function (req, res, next) {
//
//  console.log(req.baseUrl);
//  console.log(req.hostname);
//  console.log(req.originalUrl);
//  console.log(req.path);
//  // 如果 user id 为 0, 跳到下一个路由
//  if (req.params.id == 0) next('route');
//  // 负责将控制权交给栈中下一个中间件
//  else next(); //
//}, function (req, res, next) {
//  // 渲染常规页面
//  res.send('regular');
//});


router.get('/user/pic',function(req,res,next){
  res.download('./public/images/1.jpg')
});


module.exports = router;
