/**
 * Created by wudi on 2016/11/10.
 */
'use strict'
var config = require('../config/config');
var log = require("./loghelper");
var redis = require("redis");
function initialclient(param) {
    var option={ host: config.redis.host, port: config.redis.port};
    if(param)
    {
        option=Object.assign(option,param);
    }
    let client = redis.createClient(option);

    client.on("error", function(err) {
        log.error(err);
    });
    return client;
}

exports.setValueTimeOut = function(key, value, timeOut,db) {
    let client=initialclient();
    if(db)
    {
        client=initialclient({db:db});
    }
    client.set(key, value)
    client.expire(key, timeOut);
    client.quit();

};
exports.getValue = function(key) {
    return new Promise(function(resolve, reject) {
        let client=initialclient();
        client.get(key, function(err, reply) {
            if (err)
                reject(err);
            else
                resolve(reply);
            client.quit();
        });
    });
};
exports.del = function(key) {
    return new Promise(function (rs,rj) {
        let client=initialclient();

        client.del(key,function (err,reply) {
            if (err)
                rj(err);
            else
                rs(reply);
            client.quit();
        });
    });
};

exports.sadd=function (key,value,timeout) {
    let client=initialclient({db:3});
    timeout=timeout||config.redis.expire;
    var array=Array.of(value);
    for(let a of array)
    {
        client.sadd(key,a);
    }
    client.expire(key,timeout);
    client.quit();
};
exports.spop=function (key) {
    return new Promise(function (rs,rj) {
        let client=initialclient({db:3});
        client.spop(key,function (err,reply) {
            if(err)
                rj(err);
            rs(reply);
            client.quit();
        });

    });
};

exports.switchdb=function (dbnum,cb) {
    return new Promise(function (rs,rj) {
        let client=initialclient();
        client.select(dbnum,function (err,reply) {
            if(err)
                rj(err);
            rs(reply);
            cb&&cb();
            client.quit();
        });
    });
};
