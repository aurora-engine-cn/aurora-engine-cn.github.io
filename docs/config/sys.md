# 系统参数
系统参数是 `aurora` 服务器中提供的便捷机制，同时系统变量也提供到了用户级别注册，在 `aurora` 中有几个默认的系统变量，为以下几个。

## 参数列表
|类型|参数功能|是否系统自带|
|:-|:-|:-|
|*http.Request|原生http请求体|是|
|http.ResponseWritre|原生http响应体|是|
|web.Context|aurora中间件上下文参数|是|
|*web.MultipartFile|Post请求解析文件参数|是|

## 使用示例
系统变量的使用方式，在处理器的函数参数列表的任意位置使用即可，参数的类型要严格匹配
```go
a.Get("/", func(req *http.Request) {
		
})
a.Get("/", func(rew http.ResponseWritre) {
		
})

a.Get("/", func(ctx web.Context) {
		
})

a.Post("/", func(file *web.MultipartFile) {
		
})

```

## 自定义系统变量
`aurora` 提供自定义系统变量注册，参数列表中的自定义类型需要严格匹配。
```go
type Ccc struct {
	Name string
}
/// 注册一个系统变量，类型为 *Ccc
a.Variate(&Ccc{}, func(ctx Context) any {
	// 更具使用情况 对变量进行初始化并且返回
	c := &Ccc{"test"}
	return c
})
// 执行处理 ccc 是通过自定义的方式初始化好的
a.Get("/", func(ccc *Ccc, req *http.Request) {
	fmt.Println(ccc)
})
```