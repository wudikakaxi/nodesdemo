/**
 * Created by wudi on 2016/11/18.
 */
var config = require('../config/config');
var jwtSign = require('jsonwebtoken');
class Auth {
    signToken(params) {
        var token = jwtSign.sign(params, config.token.secret, {expiresIn: config.token.expr});
        params.sign = 1;
        var refreshtoken = jwtSign.sign(params, config.token.secret, {expiresIn: config.token.refreshExpr});
        return {token: 'Bearer ' + token, refreshtoken: 'Bearer ' + refreshtoken};
    }
}

module.exports = new Auth();