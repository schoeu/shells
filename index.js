/**
 * @file shells主文件
 */

var http = require('http');
var exec = require('child_process').exec;

var defaultOps = {
    port: 8910,
    url: '/api/update',
    cwd: process.cwd(),
    command: ''
};

/**
 * 导出shell方法
 * @param {Object} options 方法参数对象
 * @return {Promise} promise对象
 * */
module.exports = function (options) {
    options = options || {};
    options = Object.assign({}, defaultOps, options);
    var port = options.port;
    var url = options.url;
    var cwd = options.cwd;
    var loop = function () {};
    var cb = options.cb || loop;
    var response = options.response === true;
    var command = options.command;
    http.createServer(function (req, res) {
        var reqUrl = req.url;
        if (reqUrl === url && command) {
            exec(command, {
                cwd: cwd
            }, function (err, result) {
                if (err) {
                    cb(err);
                }
                else {
                    var rsInfo = {
                        req: req,
                        res: res,
                        result: result
                    };
                    if (!response) {
                        rsInfo.res = null;
                        res.end(JSON.stringify({
                            status: 0,
                            message: 'ok'
                        }))
                    }
                    cb(null, rsInfo);
                }
            });
        }
    }).listen(port);
};