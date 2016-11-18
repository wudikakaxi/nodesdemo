var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var formidable = require('express-formidable');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var config=require('./config/config');
var jwtmiddleware = require('./middlewares/jwtmiddleware');

/*---------路由引用都放到这里--------*/
var jwtrouter=require('./routes/jwt');
var demorouter = require('./routes/demo');
var usersrouter = require('./routes/users');
var filerouter=require('./routes/file');
var redisrouter=require('./routes/redis');
var qrcoderouter=require('./routes/qrcode');
var socketrouter=require('./routes/socket');
/*---------路由引用都放到这里--------*/

var jwt=require('express-jwt')({
    secret: config.token.secret
}).unless({
    path:['/jwt/noauth','/jwt/gettoken']
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    store: new redisStore(config.redis),
    secret: 'demouser',
    resave: false,
    saveUninitialized: true
}));
app.use('/', demorouter,function(req,res){
    if (req.session.token) {
        res.render('index', {
            token: req.session.token
        });
    }
    else
        res.redirect('/login');
});
app.use('/users', usersrouter);
app.use('/file',filerouter);
app.use('/jwt/auth',[jwt,jwtrouter]);
app.use('/jwt',[jwtmiddleware,jwtrouter]);
app.use('/redis',redisrouter);
app.use('/qrcode',qrcoderouter);
app.use('/socket',socketrouter);
app.use('/doc', express.static(path.join(__dirname, 'doc')));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//console.log(app.get('env'));




module.exports = app;
