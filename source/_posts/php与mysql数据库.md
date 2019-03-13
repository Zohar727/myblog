---
title: php与mysql数据库
date: 2018-03-08 16:47:42
categories:
- PHP
tags:
- PHP
- MySql
- 后端开发
---
### 连接数据库
```
mysql_connect('host','user','pwd');
mysqli_connect('host','user','pwd');
```
返回值：返回mysql连接标识符/false

#### 关闭数据库连接
```
mysql_close()
```
<!--more-->
#### 选择操作数据库
```
mysql_select_db(db_name);
// 返回值：true/false

```
#### 执行mysql函数
```
mysql_query()
// 插入操作返回值：true/false

// 在mysql中，执行插入语句以后，可以得到自增的主键id,通过PHP的mysql_insert_id函数可以获取该id。
$uid = mysql_insert_id();

// 查询操作返回值：资源话柄（resource）
// 输出resource数据
mysql_fetch_array($res);
```

#### mysql错误提示
```
mysql_error()
```

#### 设置字符编码
```
mysql_query("set names 'utf8'");
```

#### 常用php内置mysql函数
- `mysql_fetch_row()`  
    依次在结果集里面取一条数据，以索引数组的形式返回
- `mysql_fetch_array()`  
    默认状态下返回一个索引数组和一个关联数组
    > 第二个参数：
    > 1. MYSQL_ASSOC 只返回关联数组
    > 2. MYSQL_NUM 只返回索引数组（数字数组）
    > 3. MYSQL_BOTH 默认
- `mysql_fetch_assoc()`  
    以关联数组的形式获取数据
- `mysql_fetch_object()`  
    返回一个对象
- `mysql_num_rows()`  
    返回结果集中行的数目
- `mysql_result($query,行号，字段名称/偏移)`  
    返回结果集中一个字段的值
- `mysql_affected_rows(连接标识符)`
    返回上一次受影响的行数


****
