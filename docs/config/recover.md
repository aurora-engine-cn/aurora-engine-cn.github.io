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