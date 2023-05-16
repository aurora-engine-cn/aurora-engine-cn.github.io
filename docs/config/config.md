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