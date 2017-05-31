/**
 * @file test_index.js
 * @description 接口测试文件
 */

var shells = require('../index');

shells({
    command: 'sh ./test/test_shell.sh',
    cb: function (err, rs) {
        if (err) {
            throw err;
        }
        var result = rs.result;
        console.log(result);
    }
});
