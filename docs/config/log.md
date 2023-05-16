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