# shells

run shell on node.

## 参数

```
shells({
    // 要执行的命令, 必须
    command: 'echo 123',
    // 是否需要自行处理res, 默认为false
    respons: true,
    // 服务监听的路由
    url: '/api/update',
    // 服务监听的端口
    port: 8910,
    // 执行ok的
    resolve: function (rs) {
        // rs中有三个属性, rs.req: 请求对象, rs.res: 响应对象, rs.result: 命令执行后返回的内容
    },
    reject: function (rs) {
        request('http://localhost:8910/api/update', function (){
            var result = rs.result;
            console.log(result);
        });

    }
});
```

