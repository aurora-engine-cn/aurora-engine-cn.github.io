# time utils

## DateTime
```go
// DateTime 获取当前时间
// format 指定时间格式，默认的时间格式为 2006-01-02 03:04:05
func DateTime(format ...string) string
```

## Date
```go
// Date 获取当前日期
// format 指定时间格式，默认时间格式为 2006-01-02
func Date(format ...string) string
```

## BeforeTime
```go
// BeforeTime 获取 day 天之前的时间
func BeforeTime(day int) string
```

## AfterTime
```go
// AfterTime 获取 day 天之后的时间
func AfterTime(day int) string
```

## AfterDate
```go
// BeforeDate 获取 day 天之前的日期
func BeforeDate(day int) string
```

## Time
```go
// Time 解析时间字符串
func Time(v string) time.Time
```

