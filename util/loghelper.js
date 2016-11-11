/**
 * Created by wudi on 2016/11/10.
 */
var log4js = require('log4js');
var config = require('../config/config');

class logs {
    constructor() {
        log4js.configure(config.log4);
        this.log = log4js.getLogger("file");
        this.console = log4js.getLogger("console");
        this.loginfo = log4js.getLogger("fileinfo");
    }
    error(err) {
        this.log.error(err);
        this.console.error(err);
    }
    info(message) {
        this.loginfo.info(message);
        this.console.info(message);
    }
}
var logManager = new logs();
exports.error = function(err) {
    logManager.error(err);
};
exports.info = function(message) {
    logManager.info(message);
};
