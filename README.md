
# 什么是 Aurora ?
`Aurora` 是由 Golang 语言编写的 Web 开发框架, 框架的项目结构和开发习惯借鉴了著名框架 `Gin` 和 `Spring Boot` 的开发设计,
比如请求参数解析到结构体,责任链调用的中间件处理,简单且强大的同时保障了代码结构的优雅,是一款优秀的 web 开发工具, 交流群:836414068,
如果您觉得 aurora 不错，或者对您有帮助，请赏颗星吧！
![](https://img-1252940994.cos.ap-nanjing.myqcloud.com/Aurora%20Web%20Framework.png)



# 快速开始
本节将帮助您从零开始构建一个 `Aurora web` 项目
::: tip
本教程也假设您有一定的编程基础，能够大致明白GO语言代码的意思，如果您在阅读Go代码方面遇见问题，可以访问 [golang](https://golang.google.cn/)。
:::

## Go 版本
```text
go1.20.4
```

## 导入依赖
```go
import "gitee.com/aurora-engine/aurora"
```

## 创建服务器
创建一个结构体，嵌套一个 `*aurora.Engine` 实例。
### 第一步 创建Serve
```go
// Server 嵌套Engine定义一个服务 实例
type Server struct {
    *aurora.Engine
}
```

### 第二步 创建实现接口
开始实现 `aurora.Application` 接口中的两个方法,`Server()` 和 `Router()`, `Server()` 函数仅用于加载服务运行期间的依赖组件，`Router()` 函数则负责定义服务的路由部分，他们在某些特定的情况下需要严格区分。
下面的实现中在 `Router()` 中定义了一个 `Get` 请求，请求路径为 `/`。
```go
func (server *Server) Server() {
	// 进行一下初始化操作，比如 控制器实例，全局中间件，全局变量，第三方依赖库等操作
	// 请不要在 Server()函数中进行路由注册，Server()函数 仅负责加载组件依赖
}

func (server *Server) Router() {
	// 添加 web 路由
	// Router() 函数内可以做任何处理，路由分组，路由中间件等

	server.Get("/", func() string {
		return "hello world"
	})
}
```

### 第三步 启动服务器
```go
func main(){
    err := aurora.Run(&Server{aurora.New()})
    if err != nil {
        panic(err)
    }
}
```

# 路由解析

## 参数解析规则
`aurora` 中**任何请求的参数解析规则,都是按照传递参数的顺序自动一一对应解析的**,就如同函数调用一般,
参数的顺序规则是 `RESTFul参数 > get请求参数 > post 请求参数`(按顺序从左到右排序的优先级),
当一个请求中同时带有多个类型的参数时候, 需要更具,优先级定义参数的入参位置(内置的系统参数排除在外规则之外)

## Get 请求
### 基础解析
Get请求参数的获取,和处理器定义的参数名无关,只与处理器的如参顺序和类型有关,下面的解析会把对应的,
`age=20`赋值给第一个入参`age int`,`name=saber`对应赋值给`name string`,如果顺序反了,将会发生解析错误的提示
```go
// GET http://localhost:8080/get?age=20&name=saber
a.Get("/get", func(age int, name string) {
    fmt.Printf("age: %d, name: %s", age, name)
})
```

### map 解析
通过map可以 k/v 形式的参数,使用map解析请求需要注意的一点,如上述的参数类型存在多种则只能通过 `map[string]interface{}` 或者 `map[string]string` 这样的形式来处理否则参数解析将失败.
```go
// GET http://localhost:8080/get?age=20&name=saber
a.Get("/get", func(data map[string]string) {
    fmt.Println(data)
}) 
```
### struct 解析
Get也可以通过自定义结构体来接收参数,结构体的字段必须为可导出,即大写字母开头
```go
type Get struct {
    Name string
    Age  int
}
// GET http://localhost:8080/get?age=20&name=saber
a.Get("/get", func(data Get) {
    fmt.Println(data)
})
```

### Get 切片解析
Get请求的数组或者切片接收参数只能通过 `map`或者 `starcut` 来进行解析
```go
type Arg struct {
	Id   []string  // Id 和 入参 id保持一直
}
// GET http://localhost:8080/get?id=20&id=21
a.Get("/get", func(data Arg) {
    fmt.Println(data)
})
```
## Post 请求
Post 请求的参数解析对应更加简单，大多是以`struct`或者`map`的方式进行接收，我们先准备一个请求体作为测试的例子
```json
{
    "name": "test",
    "age": 16,
    "gender": "男",
    "address":["aa","bb"],
    "report":{
    	"a":11,
    	"b":12
    }
}
```
开始对应的进行一个结构体封装
```go
//对应结构体
type Post struct {
    Name    string
    Age     int
    Gender  string
    Address []string
    Report  map[string]interface{}
}
```
`Report` 并不是一定要用 `map` 接收，您也可以换成对应的结构体.
### struct,pointer 以及 map
```go
a.Post("/post1", func(post Post) {
    fmt.Println(post)
})
    
a.Post("/post2", func(post *Post) {
    fmt.Println(post)
})
    
a.Post("/post3", func(post map[string]interface{}) {
    fmt.Println(post)
})
```
::: danger
注意 : 在处理器的函数参为结构体或结构体指针解析请求，必须使用可导出的字段，否则无法解析参数 , `map[string]string` 在Get中适用而在Post中并不适用于复杂结构体 。
:::

## File 上传
文件上传,提供了一个内部变量`*web.MultipartFile`作为支持,通过它可以很轻松的拿到上传的文件
### MultipartFile
通过系统参数 `*web.MultipartFile` 可以获取到上传的文件信息
```go
server.Post("/upload", func(file *web.MultipartFile) {
    for _, headers := range file.File {
        err := file.SaveUploadedFile(headers[0],path+headers[0].Filename)
        if err != nil {
            panic(err)
        }
    }
})
```

### Body & File
文件混合请求体上传方式
```go
// data 可以是任何定义被接收表单数据的 类型
server.Post("/upload", func(data any, file *web.MultipartFile) {
    for _, headers := range file.File {
        err := file.SaveUploadedFile(headers[0], path+headers[0].Filename)
        if err != nil {
            panic(err)
        }
    }
})
```

## Group
通过调用 `Group(url string, interceptor ...web.Interceptor)` 方法来进行接口分组，在分组中使用中间件和全局使用中间件是隔离开的，分组会触发全局中间件到每个用分组创建的接口中。
`Group` 的 `Use()` 方法仅仅用于当前分组的全局中间件
```go
func (a *Aurora) Group(url string, interceptor ...web.Interceptor) *Group
func (g *Group) Group(url string, interceptor ...web.Interceptor) *Group
```


## 拦截器
中间件的功能在`v1.3.17`中和拦截器进行合并。需要实现 `web.Interceptor`接口。和中间件参数相差不大，多了一个参数 `handler` 记录了
处理器的基础信息。
```go
type Interceptor interface {
    // 处理器执行之前 执行Before，Before执行返回true，err为空将会放行执行处理器或者下一个拦截器
	Before(ctx Context, handler any) (bool, error)
	// 处理器执行完毕后调用 Complete 
	Complete(ctx Context, handler any) error
	// 响应结果写入给客户端之后调用 After
	After(ctx Context, handler any) error
}
```
### 全局拦截器
直接调用 `Engine.Interceptors(Before{})` (Before{}是一个实现 `web.Interceptor`的结构体)方法即可,任何接口执行之前都会被 `Before` 拦截器优先处理。

### 分组拦截器
和全局的注册方式一致 `Group.Interceptors(...)` 方法即可

### 局部中间件
在注册函数的最后一个参数是一个可变参数，能给一个接口配置多个拦截器 (Before{}是一个实现 `web.Interceptor`的结构体)
```go
a.Get("/", func() {}, Before{})
```
### 拦截器处理中断
某个拦截器如果逻辑处理失败，我们需要正常的对客户端做出响应，通过 `web.Context` 的 `func (c Context) Return(value ...any)` 来完成。
::: danger
注意 : 中断处理应该在Before中使用，在After中使用中断处理并没有任何效果
:::

## 跨域
`aurora`提供一个默认的跨域处理工具，开发者也可以自定义，自定义跨域只需要一个函数即可。通过函数返回一个 `bool`值来处理跨域检测。
```go
type CorsHandle func(r *http.Request, w http.ResponseWriter) bool
```
默认提供的跨域处理使用例子:
```go
func Cors() web.CorsHandle {
	corsOpt := web.NewDefaultCors()
	corsOpt.Domain(http.MethodPost, "/*")
	corsOpt.Domain(http.MethodGet, "/*")
	corsOpt.Domain(http.MethodDelete, "/*")
	corsOpt.Domain(http.MethodPut, "/*")
	return corsOpt.Handle()
}
```
应用配置
```go
Engine.Use(Cors())
```

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

# 数据响应
`aurora` 接口处理器中的数据响应通过返回值的方式直接处理，仅在中间件阶段处理数据响应需要调用方法设定，返回的数据统一格式化成为`json`数据
## 字符串数据
对三种字符串数据有着不同的解析，普通字符串，静态资源响应字符串，服务转发字符串。
### 普通字符串
上面提到过说有的数据都统一为`json`数据，纯普通字符串的处理并不会被二次处理，而是作为字符串直接写入到响应，设计的目的是可以让用户的操作性更加广泛得以支持多种数据格式的传输，传输数据前定义需要响应的类型头即可。
### Html 响应
`aurora` 中支持对浏览器响应html页面(静态资源下的html文件),对html的响应是通过静态资源全路径来实现
## 结其他数据
自定义结构体，any 或者 map，切片等数据将统一处理为json格式。
## 响应 500
`aurora` 的接口返回一个非`nil`的 `error` 表示向客户端发送一个500响应状态


# 静态资源
现在的 `Aurora` 的试图解析只不过是通过读取文件响应给浏览器，使用的还是go包提供的 `html/template` 包解析。
## 视图资源
`aurora` 默认静态资源解析目录是项目根目录，推荐单独创建一个静态资源目录存放  html , js ,css 等静态资源，
在 `aurora` 项目中所有的html中引入的静态资源都必须以静态资源根路径为基础。通过`application.yaml`配置文件设置:
```yaml
aurora:
    resource: static
```
配置文件中设置 `aurora.resource` 的值是项目根路径下面的一个目录 static ，此刻 static 目录为 所有静态资源的根路径。注意，如果对静态资源进行了打包，此配置也是必须配置的。
## 文件资源
`aurora` 基于go原生的api提供服务器文件系统支持，需要做出以下配置。
```yaml
aurora:
  server:
    # 文件服务接口
    file: /resource
```
配置中的 `aurora.server.file` 选项配置的是当前web 服务中提供文件访问的接口名，随后在程序中添加相关处理接口如下：
```go
a.Get("/resource", 
    http.StripPrefix("/resource/", 
    http.FileServer(http.Dir("W:\\xxx\\xxx\\static"))))
```
注册一个处理文件访问的接口 `/resource` , `http.StripPrefix` 中的前缀设置一定要和 服务接口保持一致。


# 配置文件
`aurora` 项目中会默认读取配置文件 `application.yaml` ，很多配置项都需要从中读取，主机信息，端口配置以及
[静态资源](/static/static)

## 配置实例
`aurora` 的配置处理采用的 `viper` 实现，仅支持 yml 格式的读取， 自带的 `ConfigCenter` 配置中心实现对 `viper` 的封装，提供了并发读写安全的操作。
### 默认配置文件
`aurora` 会加载项目跟目录下的`application.yml`配置文件，存在多个同名的配置文件加载顺序会优先查找最外层的配置。
### 读取配置文件
通过 `func (*Engine) GetConfig() Config` 提供对配置的访问
### 自定义配置文件
实现 `web.Config` 接口，该接口是对 `viper` 中的一个抽取，以便用户自定义对 `viper` 中的功能进行扩展。
```go
type Config interface {
	SetConfigFile(string)
	SetConfigType(string)
	ReadConfig(io.Reader) error
	Set(string, interface{})
	SetDefault(string, interface{})
	GetStringMapString(string) map[string]string
	Get(string) interface{}
	GetStringSlice(string) []string
	GetStringMap(string) map[string]interface{}
	GetString(string) string
	GetStringMapStringSlice(string) map[string][]string
}
```
使用自定义 `viper` 替换默认的配置
```go{7}
cnf := viper.New()
cnf.SetConfigFile("X:\\xc\\xx\\xx\\xx\\xx.yml")
err := cnf.ReadInConfig()
if err != nil {
	a.Panic(err)
}
a.Use(cnf)
```

## 服务端口配置
`aurora` 仅支持通过配置文件方式更改运行端口号
```yaml{3}
aurora:
  server:
    port: 2021
```

## 开启TLS
如需开启 http2 通过指定tls配置项设定相关证书和私钥路径
```yaml{5,6}
aurora:
  server:
    # *tls 配置
    tls:
      certFile: cafile\rootCert.pem
      keyFile: cafile\rootKey.pem
```
## 静态资源
```yaml{3}
aurora:
  # *静态资源根路径
  resource: static
```
## 文件服务器
```yaml{4}
aurora:
  server:
    # 文件服务接口
    file: /resource
```

## 配置服务信息
```yaml{4,6}
aurora:
  server:
    # 服务名
    name: community
    # *主机地址信息 
    host: 127.0.0.1
```

## 更多...

# 配置项
配置项对 `Aurora` 整个实例提供了一些自定义选项的支持，目前主要是配置文件，日志，静态资源做了支持。

## 配置文件
`ConfigFilePath`可以指定服务器本地运行环境的具体位置，一般情况下一个项目存在一个配置文件，只要在项目路径下无论在哪里都可以查找到，提供的目的是切换本地环境的不同版本配置。
```go
func ConfigFilePath(configPath string) Option
```
`Config` 直接替换 `Aurora`的默认配置实例，执行后将不会初始化本地配置，适合去做远程配置中心的读取。
```go
func Config(config web.Config) Option
```
`LoadConfig` 只适用于 本地配置文件 embed 方式加载配置文件数据，初始化配置实例还是默认的,如果想要 第三方数据源 请使用 Config 方法替换掉 默认的配置实例

```go
func LoadConfig(cnf []byte) Option
```

通过 `Level` 可以指定一个级别的配置文件，配置文件通常需要以 `application` 作为前缀，通过参数L去匹配对应的结尾部分，
`aurora.Level(level.Dev) // dev` 两会匹配到  `application-dev.yml` 配置
```go
func Level(L any) Option
```
## 文件上传
```go
func MaxMultipartMemory(size int64) Option 
```
`MaxMultipartMemory` 用于设置全局web服务文件上传的大小，默认的全局文件上传大小为 `8 << 20`

## 静态资源
```go
func Static(fs embed.FS) Option
```
`Static` 用于配置静态资源打包

## 日志
```go
func Logger(log web.Log) Option
```
`Logger` 切换日志

# 日志
## 自定义日志替换
`web.Log`日志接口
```go
type Log interface {
	Info(...interface{})
	Error(...interface{})
	Debug(...interface{})
	Panic(...interface{})
	Warn(...interface{})
}
```

# 错误捕捉器
`aurora` 内部自带默认的错误捕捉器，其目的在于不让web服务遇到panic而停止服务，内置错误捕捉器不一定满足大多人的需要，因此提供一个自定义方式。
## 定义捕捉器
```go
func Recover() web.Recover {
	return func(w http.ResponseWriter) {
		if err := recover(); err != nil {
			fmt.Println(err)
		}
	}
}
```

## 使用自定义捕捉器
```go
func (server *Server) Server() {
	server.Use(Recover())
}
```

# 系统参数

系统参数是 `aurora` 服务器中提供的便捷机制，同时系统变量也提供到了用户级别注册，在 `aurora` 中有几个默认的系统变量，为以下几个。

## 参数列表

| 类型                  | 参数功能           | 是否系统自带 |
|:--------------------|:---------------|:-------|
| *http.Request       | 原生http请求体      | 是      |
| http.ResponseWritre | 原生http响应体      | 是      |
| web.Context         | aurora中间件上下文参数 | 是      |
| *web.MultipartFile  | Post请求解析文件参数   | 是      |

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

# 依赖管理
依赖管理功能是 为了解决 `aurora` 运行中组件与组件之间存在的依赖关系，编写代码中依赖初始化操作和业务层面完全隔离，
依赖加载专注把对应的组件存放到 Ioc 容器中。在服务运行期间，被容器管理的依赖会自动初始化并装配， `aurora`的Ioc
系统是服务于 `aurora` 也许并不适用于其他更复杂的功能，仅作为依赖装配。

## 组件
什么是组件? 在 `aurora` 中组件就是一个结构体变量，组件有唯一的id对应一个变量。组件主要分为2类，匿名组件和命名组件，前者并非没有名称，只是来源于注册方式不同采用的是结构体的全名来作为id。
## 加载组件
加载组件，就是把初始化好的变量，注册到 `aurora` 的内部容器中，在服务器启动期间，会初始化容器完成指定的依赖赋值，注册到容器中的组件，组件本身初始化号的属性不会被容器进行初始化。
#### 方式一 : 命名注册
```go
type Component map[string]interface{}
//通过 Use 方法注册 Component 
//注册了一个 id 为 xxx 的组件
a.Use(web.Component{"aaa":&{}})
```
#### 方式二 : 匿名注册
```go
//通过 Use 方法直接 指针类型的结构体
//注册了一个 id 为 Xxx 的组件
a.Use(new(Xxx))

```
#### 方式三 : 构造器
```go
type Constructor func() any
// NewEditor 构造器
func NewXxxx() web.Constructor {
	return func() interface{} {
		return new(Xxxx)
	}
}
// Server 全局加载
func (server *Server) Server() {
	server.Use(NewXxxx())
}
```
方式二和方式三的区别不大

## 使用组件
### 指针结构体组件
把组件注册到 `aurora` 的容器中，通过 golang `tag` 属性 `ref:""` 来对容器中的依赖进行使用
```go

// 通过命名方式注册了 3个组件
	a.Use(web.Component{
		"a": &Aaa{Name: "Aaa"},
		"b": &Bbb{Name: "Bbb"},
		"c": &Ccc{Name: "Caa"},
	})

type Aaa struct {
	Name  string
	DataB *Bbb `ref:"b"`
}

type Bbb struct {
	Name  string
	DataA *Aaa `ref:"a"`
}

type Ccc struct {
	Name string
}
```
示例中注册了3个命名组件分别是 a,b,c 。 a组件中的 `DataB` 属性通过 `ref:"b"` 引用了b组件，b组件的 `DataA` 也是一样的效果引用了b组件。
<br>
使用匿名注册组件，来自动初始化结构体控制器中的对应字段属性,能够达到和上面 ref tag 相同的效果
```go
// 定义一个 组件
type Aaa struct {
	Name string
}

// 注册一个匿名组件
a.Use(&Aaa{Name: "Aaa"})

type TestServerA struct {
	TestA *Aaa  
}

type TestServerB struct {
	TestA *Aaa
}

// GetName 获取 组件id为a的Name属性
func (s *TestServerB) GetName() string {
	return s.TestA.Name
}

// GetUpdate 修改组件id为 a的Name属性
func (s *TestServerA) Update() {
	fmt.Println(s.TestA.Name)
	s.TestA.Name = "Bbb"
}
```
### 接口组件
接口组件提供了接口字段的初始化赋值，若组件内部有接口变量，容器初始化期间默认通过字段名从容器中查找依赖，默认查找方式未找到则跳过初始化。如果接口字段指定了 tag `ref` 属性，找不到对应的依赖变量则返回错误信息。
```go
type A interface {
	Get() string
}

type Aaa struct {
	Name string
}

func (a *Aaa) Get() string {
	return a.Name
}

type Bbb struct {
	A
}
func main(){
    aaa := &serviceImp.Aaa{Name: "aaa"}
	bbb := &serviceImp.Bbb{}
	space := NewSpace()
	space.Put("A", aaa)
	space.Put("", bbb)
	err := space.Start()
	if err != nil {
		panic(err)
		return
	}
}
```

# 结构体控制器
结构体控制器，在有项目依赖的情况下主要配合Ioc来使用会非常便捷，结构体控制器需要将指定的结构体类型提前初始化到 Ioc中。
## 结构体方法注册
当前的结构体注册方式，首先定义一个结构体，提供一个结构体构造器，构造器类型如下所示，一个返回 接口的函数
```go
type Constructor func() any
```
定义结构体
```go
type Index struct {
	
}
// 定义一个 构造器
func NewIndex() web.Constructor {
	return func() any {
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