# 依赖管理
依赖管理功能是 为了解决 `aurora` 运行中组件与组件之间存在的依赖关系，编写代码中依赖初始化操作和业务层面完全隔离，
依赖加载专注把对应的组件存放到 Ioc 容器中。在服务运行期间，被容器管理的依赖会自动初始化并装配， `aurora`的Ioc
系统是服务于 `aurora` 也许并不适用于其他更复杂的功能，仅作为依赖装配。

## 组件
什么是组件? 在 `aurora` 中组件就是一个结构体变量，组件有唯一的id对应一个变量。组件主要分为2类，匿名组件和命名组件，前者并非没有名称，只是来源于注册方式不同采用的是结构体的全名来作为id。
## 加载组件
加载组件，就是把初始化好的变量，注册到 `aurora` 的内部容器中，在服务器启动期间，会初始化容器完成指定的依赖赋值
#### 方式一 : 命名注册
```go
type Component map[string]interface{}
//通过 Use 方法注册 Component 
//注册了一个 id 为 xxx 的组件
a.Use(aurora.Component{"aaa":&{}})
```
#### 方式二 : 匿名注册
```go
//通过 Use 方法直接 指针类型的结构体
//注册了一个 id 为 Xxx 的组件
a.Use(new(Xxx))
```

## 使用组件
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