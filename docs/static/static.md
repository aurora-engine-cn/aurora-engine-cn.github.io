# 静态资源
## 视图资源
`aurora` 默认静态资源解析目录是项目根目录，推荐单独创建一个静态资源目录存放  html , js ,css 等静态资源，
在 `aurora` 项目中所有的html中引入的静态资源都必须以静态资源根路径为基础。通过`application.yaml`配置文件设置:
```yaml
aurora:
    resource: static
```
配置文件中设置 `aurora.resource` 的值是项目根路径下面的一个目录 static ，此刻 static 目录为 所有静态资源的根路径。
## 文件资源
`aurora` 基于go原生的api提供服务器文件系统支持，需要做出以下配置。
```yaml
aurora:
  server:
    # 文件服务接口
    file: /resource
```
配置中的 `aurora.server.file` 选项配置的是当前web 服务中提供文件访问的接口名，随后在程序中添加相关处理接口如下：
```go
a.Get("/resource", 
    http.StripPrefix("/resource/", 
    http.FileServer(http.Dir("W:\\xxx\\xxx\\static"))))
```
注册一个处理文件访问的接口 `/resource` , `http.StripPrefix` 中的前缀设置一定要和 服务接口保持一致。
