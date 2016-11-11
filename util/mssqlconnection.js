/**
 * Created by wudi on 2016/11/9.
 */

'use strict';
var mssql=require('mssql');
var config=require('../config/config');

var mssqlconnection={
    read:new mssql.Connection(config.mssqlRead,function(err){
        err && console.log(err);
        console.log('readConnection');
    }),
    write:new mssql.Connection(config.mssqlWrite,function(err){
        err && console.log(err);
        console.log('writeConnection');
    })
};

module.exports = mssqlconnection;