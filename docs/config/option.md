# 配置项
配置项对 `Aurora` 整个实例提供了一些自定义选项的支持，目前主要是配置文件，日志，静态资源做了支持。
## Debug 日志

通过开启Debug配置项可以查看启动过程中的接口注册细节等信息。

## 配置文件
```go
func ConfigFilePath(configPath string) Option
```
`ConfigFilePath`可以指定服务器本地运行环境的具体位置，一般情况下一个项目存在一个配置文件，只要在项目路径下无论在哪里都可以查找到，提供的目的是切换本地环境的不同版本配置。
```go
func Config(config web.Config) Option
```
`Config` 直接替换 `Aurora`的默认配置实例，执行后将不会初始化本地配置，适合去做远程配置中心的读取。
```go
func LoadConfig(cnf []byte) Option
```
`LoadConfig` 只适用于 本地配置文件 embed 方式加载配置文件数据，初始化配置实例还是默认的,如果想要 第三方数据源 请使用 Config 方法替换掉 默认的配置实例
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