# Packages
golang 1.19版本泛型库，涵盖了常用数据结构，队列，栈，线性表，哈希表，协程池

## 列表
```go
type ArrayList[T any] []T
func TestList(t *testing.T) {
	l := list.ArrayList[int]{1, 2, 3}
	for _, v := range l {
		fmt.Println(v)
	}
	l.Remove(0)
	t.Log(l)
}
```
## 队列
```go
func TestQueue(t *testing.T) {
	q := queue.Queue[int]{}
	q.EnQueue(1)
	q.EnQueue(2)
	fmt.Println(q.Size())
	fmt.Println(q.DeQueue(), " ", q.Size())
	fmt.Println(q.DeQueue(), " ", q.Size())
	fmt.Println(q.DeQueue(), " ", q.Size())
}
```

## 栈
```go
func TestStack(t *testing.T) {
	s := stack.New[any]()
	s.Push(1)
	s.Push(2)
	s.Push(3)
	s.Push(4)
	t.Log(s.Size())
	t.Log(s.IsEmpty())
	for !s.IsEmpty() {
		t.Log(s.Popup())
	}
	t.Log(s.Size())
	t.Log(s.IsEmpty())
}
```
## 哈希表
```go
type Map[K comparable, V any] map[K]V
func TestMaps(t *testing.T) {
	m := maps.New[string, string]()
	m.Put("1", "a")
	for k, v := range m {
		fmt.Println("key:", k, " value:", v)
	}
	m.Delete("1")
	for k, v := range m {
		fmt.Println("key:", k, " value:", v)
	}
}
```
## 协程池
协程任务接口,实现 `Goroutine` 接口就是一个协程任务。
```go
type Goroutine interface {
	Run(ctx context.Context)
}
```

定义一个结构体实现 `Run(ctx context.Context)` 方法，创建协程池，向其中添加任务执行。
```go
type Task struct {
	Id int
}

func (receiver Task) Run(ctx context.Context) {
	fmt.Printf("Task %d \n", receiver.Id)
}

func TestPool(t *testing.T) {
	newPool := pool.NewPool[Task](10, 10, context.TODO())
	newPool.Start()
	for i := 4; i < 100; i++ {
		//time.Sleep(50 * time.Millisecond)
		go func(id int) {
			newPool.Execute(Task{id})
		}(i)
	}
	time.Sleep(10000 * time.Millisecond)
}
```

## ArrayList[T any] 泛型支持
`aurora` 当前的请求处理器对泛型参数的支持相对较弱，能支持的一部分也是go语言默认支持的操作，现在可以用的泛型参数有3中情况
### 参数定义
```go
type A[T any] struct {
	Value T
}
// 请求体接收参数
type TestArgs[T any] struct {
	Queue list.ArrayList[A[T]]
}
```
### 解析基础类型

```go
server.Post("/test", func(args list.ArrayList[int]) string {
    for _, v := range args {
        fmt.Println(v)
    }
    return "hello world"
})
```
请求体对应为:
```json
[1,2,3,4]
```
### 解析结构体泛型类型

```go
server.Post("/test", func(args list.ArrayList[A[int]]) string {
    for _, v := range args {
        fmt.Println(v)
    }
    return "hello world"
})
```
请求体对应为:
```json
[{"value": 99}, {"value": 92}, {"value": 48}]
```
### 嵌套泛型
接收请求的参数是一个泛型的结构体，内部使用了第二种情况
```go
// 接口定义
server.Post("/test",func(args TestArgs[int]) string {
    for _, v := range args.Queue {
        fmt.Println(v)
        }
    return "hello world"
})
```
请求体对应为:
```json
{"queue": [{"value": 99}, {"value": 92}, {"value": 48}]}
```
## Map[K comparable, V any] 泛型支持
### 解析基础类型
```go
server.Post("/test", func(args args maps.Map[string, int]) string {
    for _, v := range args {
        fmt.Println(v)
    }
    return "hello world"
})
```
请求体对应为:
```json
{
  "11":1,
  "12":2
}
```
### 泛型结构体解析
```go
server.Post("/test", func(args args maps.Map[string, A[int]]) string {
    for _, v := range args {
        fmt.Println(v)
    }
    return "hello world"
})
```
请求体对应为:
```json
{
  "11":{"value":1},
  "12":{"value":2}
}
```
## 当前泛型支持情况
`aurora` 现阶段仅支持 大部分自定义的泛型，需要正常解析就需要字段导出。对于第三方库的自定义数据类型需要 `aurora` 手动库进行适配。