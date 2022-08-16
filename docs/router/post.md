# Post 请求
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
`Report` 并不是一定要用 `map` 接收，您也可以换成对应的结构体。
## struct，pointer 以及 map
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
<b style="color=red;">注意</b> : 在处理器的函数参为结构体或结构体指针解析请求，必须使用可导出的字段，否则无法解析参数 , `map[string]string` 在Get中适用而在Post中并不适用于复杂结构体 。
:::