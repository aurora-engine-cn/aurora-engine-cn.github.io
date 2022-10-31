# 参数验证器
参数验证器可以对结构体内的字段进行校验，通过 `tag` 属性来标记被检测字段，可选的 `tag`属性为以下
|tag|功能|说明|
|:-|:-|:-|
|empty|校验字段是否是零值|aurora内部自带的一种校验|
|constraint|使用约束校验器|需要向aurora中添加约束校验器实现，可支持多个(通过分号隔开)|


定义一个请求参数
```go
type GetArgs struct {
	Name string `empty:"false"`
	Age  int    `constraint:"check"`
}
```
`Name` 字段使用了 `empty`标签值是 `false`，表示 字段在到达请求控制器不能为空(或零值), `Age` 字段则使用了自定义解析 `check` 定义如下，如果年龄字段小于0则根据规则返回一个错误。
```go
func (server *Server) Server() {
	server.Constraint("check", func(value any) error {
		if value.(int) <= 0 {
			return errors.New("error value is 0")
		}
		return nil
	})
}
```
在 `Router` 中定义接口并使用定义的请求参数
```go
func (server *Server) Router() {
	server.Get("test", func(args GetArgs) {

	})
}
```
