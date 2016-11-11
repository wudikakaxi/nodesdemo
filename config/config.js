/**
 * Created by wudi on 2016/11/9.
 */
var express = require('express');
var app = express();

var configDev={
    mssqlRead: {
        server: '127.0.0.1',
        user: 'sa',
        password: '123123',
        database: 'test',
        pool: {
            max: 100,
            min: 0,
            idleTimeoutMillis: 30000
        },
        options: {
            appName: 'test',
            useUTC: false
        }
    },
    mssqlWrite: {
        server: '127.0.0.1',
        user: 'sa',
        password: '123123',
        database: 'test',
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },
        options: {
            appName: 'test',
            useUTC: false
        }
    },
    token:{
        secret:'wuditestauth',
        expr:'360 days',
        refreshExpr:'360 days'
    },
    redis: {
        host: '127.0.0.1',
        port: 6379,
        expire: 60*15
    },
    log4:{
        "appenders": [{
            type: "console",
            category: "console"
        }, {
            "type": "file",
            "filename": "./logs/error.log",
            "maxLogSize": 102400,
            "backups": 3,
            "category": "file"
        },
            {
                "type": "file",
                "filename": "./logs/info.log",
                "maxLogSize": 102400,
                "backups": 3,
                "category": "fileinfo"
            }]
    }
};
var config=configDev;

module.exports = config;