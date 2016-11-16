/**
 * Created by wudi on 2016/11/9.
 */
'use strict';

var mssql = require('mssql');
var conn = require('../util/mssqlconnection');

module.exports = {
    getUserById: function (params) {
        return new Promise(function (resolve, reject) {
            var sql = `select
                    username,
                    password,
                    sex,
                    createtime  from users (nolock) where id=${params.userid}`;
            var req = new mssql.Request(conn.read);
            req.query(sql).then(function (recordset) {
                resolve(recordset);
            }).catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
    },
    addUser: function (params) {
        return new Promise(function (resolve, reject) {
            var req = new mssql.Request(conn.write);
            req.input('username', mssql.NVarChar, params.username);
            req.input('password', mssql.NVarChar, params.password);
            req.input('sex', mssql.BIT, params.sex);
            req.input('createtime', mssql.NVarChar, params.createtime);
            var sql = `insert into users(
                    username,
                    password,
                    sex,
                    createtime
                    ) values(
                    @username,
                    @password,
                    @sex,
                    @createtime
                    );
                   select  @@identity as id;
                    `;

            req.query(sql).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
    },
    editUserById: function (params) {
        return new Promise(function (resolve, reject) {
            var req = new mssql.Request(conn.write);
            req.input('username', mssql.NVarChar, params.username);
            req.input('password', mssql.NVarChar, params.password);
            req.input('sex', mssql.BIT, params.sex);
            req.input('id', mssql.Int, params.id);
            var sql = `update users set
                    username=@username,
                    password=@password,
                    sex=@sex
                    where id=@id`;
            req.query(sql).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
    },
    delUserById: function (params) {
        return new Promise(function (resolve, reject) {
            var req = new mssql.Request(conn.write);
            req.input('id', mssql.Int, params.id);
            var sql = `delete from users where id=@id`;
            req.query(sql).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
    }
}
