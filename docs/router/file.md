# 文件上传
## MultipartFile
通过系统参数 `` 可以获取到上传的文件信息
```go
server.Post("/upload", func(file *web.MultipartFile) {
    for _, headers := range file.File {
        err := file.SaveUploadedFile(headers[0],path+headers[0].Filename)
        if err != nil {
            panic(err)
        }
    }
})
```

## Body & File
文件混合请求体上传方式
```go
server.Post("/upload", func(data any, file *web.MultipartFile) {
    for _, headers := range file.File {
        err := file.SaveUploadedFile(headers[0], path+headers[0].Filename)
        if err != nil {
            panic(err)
        }
    }
})
```