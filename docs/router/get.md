# Get 请求
`aurora` 的Get请求支持3种方式的参数解析，分别是 基础变量，`map`以及`struct`。
::: tip
需要了解到的一点， `aurora` 中任何请求的参数解析规则，都是按照传递参数的顺序自动对应解析的，就如同函数调用一般，这会在下面的例子中体现出来。
:::

## 基础类型
```go
// Get请求参数的获取，和参数名无关
//只与处理器的如参顺序和类型有关 
// GET http://localhost:8080/get?age=20&name=saber
a.Get("/get", func(age int, name string) {
    fmt.Printf("age: %d, name: %s", age, name)
})
```

## map 解析
通过map可以 k/v 形式的参数，使用map解析请求需要注意的一点，如上述的参数类型存在多种则只能通过 `map[string]interface{}` 或者 `map[string]string` 这样的形式来处理否则参数解析将失败。
```go
// GET http://localhost:8080/get?age=20&name=saber
a.Get("/get", func(data map[string]string) {
    fmt.Println(data)
}) 
```
## struct 解析
Get也可以通过自定义结构体来接收参数，结构体的字段必须为可导出，即大写字母开头
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
