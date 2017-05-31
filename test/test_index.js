/**
 * @file test_index.js
 * @description 接口测试文件
 */

var shells = require('../index');

shells({
    command: 'echo 123',
    cb: function (rs) {
        var result = rs.result;
        console.log(result);
    }
});
