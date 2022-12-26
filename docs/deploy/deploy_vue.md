# Aurora + Vue 

## demo
### 创建 go mod 项目
```text
--root
  --go.mod
```

### 创建 vue 项目
在go项目根路径下创建一个vue项目创建后目录如下，web-view 为vue项目的根路径
```text
--root
  --web-view
  --go.mod
```
需要配置 vue 的打包构建输出路径以及静态资源前缀，路径需要输出到 aurora 项目中指定的静态资源，我们此处的静态资源根使用 static 
```js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'./vue',
  outputDir: '../static/vue'
})
```
配置输出到 static下的vue目录里面，这里不能直接输出到static，避免每次构建会把static中的其他资源清理掉。
### 创建 aurora 配置
创建 aurora 服务的配置文件，默认读取的配置文件是 application.yml，配置并写入基础配置如下
```yaml
aurora:
  application:
    name: demo
  server:
    port: 8000
  resource: static
```
创建静态资源目录 static 此时应该有以下目录结构
```text
--root
  --static
  --web-view
  --application.yml
  --go.mod
```
### server.go
实现aurora服务
```go
package server

import "gitee.com/aurora-engine/aurora"

type WebServer struct {
	*aurora.Engine
}
func (ws *WebServer) Server() {

}
func (ws *WebServer) Router() {
	ws.Get("/", func() string {
		return "vue/index.html"
	})
}
```
### 配置启动
创建 application.go
```go
package main

import (
	"administrator/server"
	"embed"
	"gitee.com/aurora-engine/aurora"
)

// 加载静态资源根目录下的所有内容
//
//go:embed static/*
var static embed.FS

// 加载配置文件
//
//go:embed application.yml
var cnf []byte

func main() {
	if err := aurora.Run(&server.WebServer{
		Engine: aurora.New(
			aurora.Debug(),
			aurora.LoadConfig(cnf),
			aurora.Static(static),
		),
	}); err != nil {
		panic(err)
	}
}
```
此刻你的demo应该拥有一下文件
```text
--root
  --server
    -- server.go
  --static
  --web-view
  --application.go
  --application.yml
  --app.go
  --go.mod
```
对照完成以上配置，构建好vue后，就可以直接 build 整个go项目进行打包并正常运行。