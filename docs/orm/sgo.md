# sgo
`sgo` 是参考 `mybatis` 编写的sql标签解析，`sgo`仅提供对 sql 的上下文数据解析填充，并不保证对 sql 语句的语法检查。
## 解析规则
`sgo` 解析 xml 文件中的sql语句，会严格检查上下文中的数据类型，字符串类型参数会自定添加 ` '' ` 单引号，其他基础数据类型不会添加，对于复杂数据结构(复合结构，泛型结构体等)会持续跟进
，目前仅支持基础数据类型。
### 上下文数据
上下文数据是由用户调用时候传递接，仅接受 map 或者结构体如下：
```go
ctx := map[string]any{
    "arr":  []int{1, 2, 3, 4},
    "name": "test",
}
sgo := sgo.NewSgo()
sgo.LoadXml("/")
sql, err := sgo.Sql("user.find", ctx)
if err != nil {
    fmt.Println(err.Error())
}
    fmt.Println(sql)
```

### 标签详情
|标签|描述|功能|
|:-|:-|:-|
|`<mapper>`|根节点||
|`<insert>`|insert语句|生成插入语句|
|`<select>`|select语句|生成查询语句|
|`<update>`|update语句|生成更新语句|
|`<delete>`|delete语句|生成删除语句|
|`<for>`|for迭代|生成IN语句，指定需要生成IN条件的字段，可以生成对应的IN条件|
|`<if>`|if条件|判断是否满足属性表达式的条件，满足条件就对标签内的sql进行解析|

## demo
```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE mapper SYSTEM "https://gitee.com/aurora-engine/sgo/blob/master/sgo.dtd">

<mapper namespace="user">
    <select id="find">
        select * from student where sss={name}
        <if expr="{arr}!=nil and {len(arr)}>0">
            and
            <for slice="{arr}" item="obj" column="id" open="("  separator="," close=")" >
                {obj}
            </for>
        </if>

        <if expr="{name}=='aaa'" >
            and abc = 1
            <if expr="1==1">
                and 1=1
                <if expr="1!=1">
                    or 1!=1
                </if>
            </if>
            or cba=1
        </if>
        or  name = {name} and 1=1
    </select>
</mapper>
```
### xml解析
#### 第一层
`<mapper>`标签是整个xml的根 `namespace` 属性定义了 xml的标识符，调用阶段 `namespace`的属性至关重要
#### 第二层
`<select>`标签定义了 `id` 属性， `id` 属性是唯一标识，结合 `namespace` 能够定位，标签内的所有 `{xx}` 数据都来自于上下文数据，`{xx}` 将被解析成为具体的值
#### 第三层
`<if>` 标签 定义了 `expr` 属性， `expr` 属性的值为一串表达式，表达式应返回一个 `true` 或者 `false`，表示 `<if>` 标签内的内容是否可以被解析，表达式中使用到上下文数据的位置一定要使用 `{}`包裹住
```go
package main

import (
	"fmt"
	"gitee.com/aurora-engine/sgo"
)
func main() {
	ctx := map[string]any{
		"arr":  []int{1, 2, 3, 4},
		"name": "test",
	}
	sgo := sgo.NewSgo()
	sgo.LoadXml("/")
	sql, err := sgo.Sql("user.find", ctx)
	if err != nil {
		fmt.Println(err.Error())
	}
	fmt.Println(sql)
}
```
代码创建了解析器，并加载了xml，通过 `user.find` 找到我们定义的 sql 标签，传递了一个上下文数据 `ctx`，标签解析期间的数据都来源于 `ctx`