q# 结构体控制器
结构体控制器，在有项目依赖的情况下主要配合Ioc来使用会非常便捷，结构体控制器需要将指定的结构体类型提前初始化到 Ioc中。
## 结构体方法注册
当前的结构体注册方式，首先定义一个结构体，提供一个结构体构造器，构造器类型如下所示，一个返回 接口的函数
```go
type Constructors func() interface{}
```
定义结构体
```go
type Index struct {
	
}
// 定义一个 构造器
func NewIndex() aurora.Constructors {
	return func() interface{} {
		return new(Index)
	}
}

// 定义一个接口
func (i *Index) Home()  {
	fmt.Println("Hme")
}
```
我们在自定义的服务器实例中把 准备好的结构体嵌套进去 ，修改上面的 `Server` 为以下
```go
// Server 嵌套Aurora定义一个服务 实例
type Server struct {
    *aurora.Engine
    *Index
}
```
修改代码，通过 `Server()` 函数进行初始化操作
```go
func (server *Server) Server() {
	// 进行一下初始化操作，比如 控制器实例，全局中间件，全局变量，第三方依赖库等操作
	// 将 Index 结构体的构造器 添加到配置项中，最后会被加载到ioc容器中
	server.Use(NewIndex())
}

func (server *Server) Router() {
	// 添加 web 路由

	server.Get("/", func() string {
		return "hello world"
	})
	
	// 开始注册 *Index 的路由 
	server.Get("/home",server.Home)
}
```