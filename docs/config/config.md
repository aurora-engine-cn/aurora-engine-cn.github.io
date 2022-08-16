# 配置文件
`aurora` 项目中会默认读取配置文件 `application.yaml` ，很多配置项都需要从中读取，主机信息，端口配置以及
[静态资源](/static/static)

## 配置实例
`aurora` 的配置处理采用的 `viper` 实现，仅支持 yml 格式的读取， 自带的 `ConfigCenter` 配置中心实现对 `viper` 的分装，提供了并发读写安全的操作。
### 默认配置文件
`aurora` 会加载项目跟目录下的`application.yml`配置文件，存在多个同名的配置文件加载顺序会优先查找最外层的配置。
### 读取配置文件
通过 `func (*Aurora) GetConfig() Config` 提供对配置的访问
### 自定义配置文件
实现 `aurora.Config` 接口，该接口是对 `viper` 中的一个抽取，以便用户自定义对 `viper` 中的功能进行扩展。
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
cnf.SetConfigFile("X:\\xx\\xx\\xx\\xx\\xx.yml")
err := cnf.ReadInConfig()
if err != nil {
	a.Panic(err)
}
a.Use(cnf)
```