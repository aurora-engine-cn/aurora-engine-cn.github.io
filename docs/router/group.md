# 路由分组
通过调用 `Group(url string, middleware ...Middleware)` 方法来进行接口分组，在分组中使用中间件和全局使用中间件是隔离开的，分组会触发全局中间件到每个用分组创建的接口中。
`Group` 的 `Use()` 方法仅仅用于当前分组的全局中间件
```go
func (a *Aurora) Group(url string, middleware ...Middleware) *Group
func (g *Group) Group(url string, middleware ...Middleware) *Group
```