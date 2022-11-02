# 跨域中间件
`aurora` 源码中内置了对跨域中间件的支持，位置在 `aurora/middleware/cors/cors.go` 中基本使用方式如下
```go
// Server 全局加载
func (server *Server) Server() {
	cors := cors.New()
	cors.Domain(http.MethodPost, "/*")
	cors.Domain(http.MethodGet, "/*")
	// 注册中间件
	server.Use(cors.Cors())
}
```