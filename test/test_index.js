/**
 * Created by memee on 2017/5/31.
 */

var shells = require('../index');
shells({
    command: 'date'
}).then(function (rs) {
    var res = rs.res;
    var result = rs.result;
    // res.end('update ok');
    console.log(result);
}, function (err) {
    console.log('reject',err);
}).catch(function (err) {
    console.error('error',err);
});