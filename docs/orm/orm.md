# ORM

`aurora` 提供简单的 ORM 是基于泛型编版本编写的数据库单表结映射构体映射CRUD操作支持，支持对 `gorm` tag 的列名解析。

::: warning
当前的 ORM 是基于 MySQL 的操作编写，一般的标准sql也是可以使用的。
:::

## 定义SQL
```sql
create table comm_user
(
    user_id           varchar(50)   not null comment '主键'
        primary key,
    user_account      varchar(50)   null comment '账号',
    user_email        varchar(50)   null comment '邮箱',
    user_password     varchar(200)  null comment '密码',
    user_name         varchar(50)   not null comment '昵称',
    user_age          int default 0 null comment '年龄',
    user_birthday     datetime      null comment '生日',
    user_head_picture varchar(100)  null comment '头像',
    user_create_time  timestamp     null comment '建时间'
);
```

## 定义 Go 结构体映射
定义一个go 结构体 ，没有定义column tag 的默认情况下，是通过结构体字段名去对数据库表列名的映射，暂不支持驼峰转化，如果定义了column 开头的第一个字符串会解析为映射列名，
如果同时定义了 gorm 的tag 会优先按照 gorm 的列定义解析。结构体需要定义一个Table方法返回一个表名，绑定方式需要指针类型。
```go
type User struct {
	Id         string     `column:"user_id"`
	Account    string     `column:"user_account"`
	Name       string     `column:"user_name"`
	Email      string     `column:"user_email"`
	Password   string     `column:"user_password"`
	Age        int        `column:"user_age"`
	Birthday   *time.Time `column:"user_birthday"`
	Head       string     `column:"user_head_picture"`
	CreateTime string     `column:"user_create_time"`
}

// Table 指定映射 库表
func (s *User) Table() string {
    return "comm_user"
}
```

## 创建映射器操作 库表
### 插入数据
```go
func TestMapping_Insert(t *testing.T) {
	m := orm.CreateMapping[*User](open)
	uuid, err := ztool.IdUtils.SimpleUUID()
	if err != nil {
		t.Error(err.Error())
	}
	stu := &User{
		Id:         uuid,
		Account:    "12345678",
		Email:      "xxxxx@qq.com",
		Name:       "saber",
		Birthday:   ztool.DateUtils.Format(),
		CreateTime: ztool.DateUtils.Format(),
	}
	insert := m.Insert(stu)
	fmt.Println(insert)
}
func TestMapping_InsertMap(t *testing.T) {
	m := orm.CreateMapping[*User](open)
	uuid, err := ztool.IdUtils.SimpleUUID()
	if err != nil {
		t.Error(err.Error())
	}
	insert := m.InsertMap(map[string]any{
		"user_id":          uuid,
		"user_name":        "testMap",
		"user_account":     "123456789",
		"user_birthday":    ztool.DateUtils.Format(),
		"user_create_time": ztool.DateUtils.Format(),
	})
	fmt.Println(insert)
}
```
### 查询数据
```go
// 查询测试
func TestMapping_Selects(t *testing.T) {
	m := orm.CreateMapping[*User](open)
	stu := &User{
		Name: "awen",
	}
	l := list.ArrayList[*User]{}
	l = m.Selects(stu)
	for _, s := range l {
		fmt.Printf("%v\r\n", s)
	}
}

func TestMapping_SelectMap(t *testing.T) {
	m := orm.CreateMapping[*User](open)
	v := m.SelectMap(map[string]any{
		"user_name": "saber",
	})
	fmt.Printf("%v\n\r", v)
}

func TestMapping_SelectMaps(t *testing.T) {
	m := orm.CreateMapping[*User](open)
	l := list.ArrayList[*User]{}
	l = m.SelectMaps(map[string]any{
		"user_name": "saber",
	})
	for _, s := range l {
		fmt.Printf("%v\r\n", s)
	}
}
```

### 修改数据
```go
func TestMapping_Update(t *testing.T) {
	m := orm.CreateMapping[*User](open)
	stu := &User{
		Account: "12345678",
		Email:   "xxxxx@qq.com",
		Name:    "saber",
	}
	value := &User{
		Account: "111111",
		Name:    "awen",
	}
	update := m.Update(stu, value)
	fmt.Println(update)
}

func TestMapping_UpdateMap(t *testing.T) {
	m := orm.CreateMapping[*User](open)
	c := map[string]any{
		"user_name":    "testMap",
		"user_account": "123456789",
	}
	v := map[string]any{
		"user_name": "testMapUpdate",
	}
	update := m.UpdateMap(c, v)
	fmt.Println(update)
}
```
### 删除表数据
```go
func TestMapping_Delete(t *testing.T) {
	open, err := sql.Open("mysql", dbUrl)
	if err != nil {
		t.Error(err.Error())
		return
	}
	m := CreateMapping[*User](open)
	value := &User{
		Account: "111111",
		Name:    "awen",
	}
	d := m.Delete(value)
	fmt.Println(d)
}
```

### 启用零值
orm本身执行数据库操作是默认不处理零值，在一些必要情况下需要接受零值处理可以通过一下api完成，仅对最近一次处理支持零值
```go
func (mapping *Mapping[T]) Zero() *Mapping[T]
```