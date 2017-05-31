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
    var response = options.response;
    var command = options.command;
    return new Promise(function (resolve, reject) {
        http.createServer(function (req, res) {
            var reqUrl = req.url;
            if (reqUrl === url && command) {
                exec(command, {
                    cwd: cwd
                }, function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({
                            req: req,
                            res: res,
                            result: result
                        });
                        if (!response) {
                            res.end(JSON.stringify({
                                status: 0,
                                message: 'ok'
                            }))
                        }
                    }
                });
            }
        }).listen(port);
    });
};