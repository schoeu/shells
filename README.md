# shells

run shell on node.

## 参数

```
shells({
    // 要执行的命令, 必须
    command: 'echo 123',
    // 是否需要自行处理res, 默认为false, 可选
    respons: true,
    // 服务监听的路由, 默认为'/api/update', 可选
    url: '/api/update',
    // 服务监听的端口, 默认为8910, 可选
    port: 8910,
    // 需要执行的回调函数, 可选
    cb: function (err, rs) {
        // 如果出错, err为错误对象, 如果运行ok则为null
        // rs中有三个属性, rs.req: 请求对象, rs.res: 响应对象, rs.result: 命令执行后返回的内容
    },
});
```

## 最简形式

```
shells({
    command: 'echo 123',
});

```

