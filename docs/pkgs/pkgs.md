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

## 栈

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