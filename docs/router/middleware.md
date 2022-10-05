# 路由中间件
中间件是一个固定的函数签名，日后也许会有所调整，函数通过返回一个 `bool` 来判断是否执行下一个中间件。
```go
type Middleware func(Context) bool
```
## 定义中间件
```go
func Before() web.Middleware {
	return func(ctx web.Context) bool {
		fmt.Println("before")
		return true
	}
}
```
## 全局中间件
直接调用 `Use(Before())` 方法即可,任何接口执行之前都会被 `Before` 中间件优先处理。

## 局部中间件
在注册函数的最后一个参数是一个可变参数，能给一个接口配置多个中间件
```go
a.Get("/", func() {}, Before())
```
## 中间件处理中断
某个中间件如果逻辑处理失败，我们需要正常的对客户端做出响应，通过 `web.Context` 的 `func (c Context) Return(value ...any)` 来完成。