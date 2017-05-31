/**
 * @file test_index.js
 * @description 接口测试文件
 */

var shells = require('../index');

// 最简形式
shells({
    command: 'sh ./test/test_shell.sh'
});


shells({
    command: 'sh ./test/test_shell.sh',
    port: 8911,
    cb: function (err, rs) {
        if (err) {
            throw err;
        }
        var result = rs.result;
        console.log(result);
    }
});
