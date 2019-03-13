---
title: mysql基础笔记
date: 2018-03-05 16:47:23
categories:
- MySql
tags:
- MySql
- 后端开发
---
### mysql目录结构
- `bin`：存储可执行文件
- `data`：存储数据文件
- `docs`：文档
- `include`：存储包含的头文件
- `lib`：存储库文件
- `share`：错误消息和字符集文件

### mysql相关配置
- 修改编码方式
```
default-character-set=utf-8
default-set-server = utf-8
```
<!--more-->
### mysql相关指令
- 启动mysql服务
```
net start mysql
```
- mysql 登录参数
```
mysql -D -h -P -p -u -v --prompt
```
![img](https://img.mukewang.com/5a94c6830001911d12800720.jpg)

- mysql退出
```
mysql > exit;
mysql > quit;
mysql > \q;
```

- 修改mysql提示符
``` 
prompt 提示符
/*提示符参数*/
-D // 完整日期
-d // 当前数据库
-u // 当前用户
-h //当前服务器
```

- 常用命令
```
SELECT VERSION() //显示服务器版本
SELECT NOW()   // 显示当前时间
SELECT USER()  // 显示当前用户
```
### mysql指令
#### 数据库操作
- 创建数据库
```
CREATE DATABASE {IF NOT EXISTS} db_name [DEFAULT] CHARACTER SET {=} charset_name
```
- 查看数据库列表
```
SHOW DATABASES
```
- 修改数据库
```
ALTER DATABASE [db_name] [DEFAULT] CHARACTER SET {=} charset_name
```
- 删除数据库
```
DROP DATABASE {IF EXIST} db_name
```
- 打开数据库
```
USE db_name
```

#### 数据表操作
- 查看数据表
```
SHOW TABLES [FROM db_name]
```
- 查看数据表结构
```
SHOW COLUMNS FROM tb_name
```
- 创建数据表
```
CREATE TABLE [IF NOT EXISTS] table_name (
    column_name date_type,
    ...
)
```
> 创建数据表的几个参数可选项  
    - 主键 : PRIMARY KEY  
    - 空值 : NULL /  NOT NULL  
    - 自动编号 : AUTO_INCREMENT  
    
- 插入记录
```
// 方式一
INSERT [INTO] tb_name [(col_name)] VALUES(val,...)
// 方式二,与前者区别在于此方法可以使用子查询
INSERT [INTO] tb_name SET col_name={expr | DEFAULT},...
// 方式三，此方式可以将查询结果插入到指定数据表
INSERT [INTO] tb_name [(col_name,...)] SELECT...
```
- 查找记录
```
SELECT expr.. FROM tb_name
```
- 单表更新记录
```
UPDATE table_name SET col_name1={expr1|DEFAULT}... {WHERE where_condition}
```
- 单表删除记录
```
DELETE FROM tb_name [WHERE where_condition]
```

- 编辑数据表的默认存储引擎
```
default-storage-engine=INNODB //在配置文件中
```
- 修改数据表-添加单列
```
ALTER TABLE tb_name ADD [COLUMN] col_name column_definition [FIRST|AFTER col_name]
```
- 修改数据表-删除列
```
ALTER TABLE tb_name DROP [COLUMN] col_name
```
- 修改数据表-添加主键约束
```
ALTER TABLE tb_name ADD [CONSTRAINT [symbol]] PRIMARY KEY [index_type] (index_col_name,...)
```
- 修改数据表-添加外键约束
```
ALTER TABLE tb_name [CONSTRAINT [symbol]] FOREIGN KEY [index_name] (index_col_name,...) reference_definition
```
- 修改数据表-添加/删除默认约束
```
ALTER TABLE tb_name ALTER [COLUMN] col_name {SET DEFAULT literal | DROP DEFAULT}
```
- 修改数据表-删除主键约束
```
ALTER TABLE tb_name DROP PRIMARY KEY
```
- 修改数据表-删除外键约束
```
ALTER TABLE tb_name DROP FOREIGN KEY fk_symbol
```
- 修改数据表-删除唯一约束
```
ALTER TABLE tb_name DROP {INDEX|KEY} index_name
```
- 修改数据表-列定义
```
ALTER TABLE tb_name MODIFY [COLUMN] col_name column_definition {FIRST|AFTER col_name}
```
- 修改数据表-列名称
```
ALTER TABLE tb_name CHANGE [COLUMN] old_col_name new_col_name column_definition {FIRST|AFTER col_name}
```
- 数据表更名
```
ALTER TABLE tb_name RENAME [TO | AS] new_tb_name;
ALTER TABLE tb_name TO new_tb_name
```
#### 数据表查找操作
![img](https://img.mukewang.com/5a9d5d0f0001605512800720.jpg)
- 查询表达式书写规范
![img](https://img.mukewang.com/5a9d5d4c00014f4512800720.jpg)
- WHERE 条件查询
```
[WHERE where_condition]
```
- GROUP BY 查询结果分组
```
[GROUP BY {col_name | position} [ASC | DESC]]
```
- HAVING 设置分组条件
```
[HAVING where_condition]
```
- ORDER BY 查询排序
```
[ORDER BY {col_name | expr | position} [ASC | DESC]]
```
- LIMIT 限制查询数量
```
[LIMIT [起始偏移位置，偏移长度]]
```

### mysql语句规范
- 必须以分号结尾
- 关键字、函数大写（小写也没有影响）
- 各种名称小写

### mysql数据类型
- 整型
![整型](https://img.mukewang.com/5a94cf94000144ff12800720.jpg)
- 浮点型
![浮点型](https://img.mukewang.com/5a94d02c0001ae3012800720.jpg)
- 字符型
![字符型](https://img.mukewang.com/5a94d1710001a6b112800720.jpg)
- 日期时间型
![日期时间](https://img.mukewang.com/5a94d0e60001aec512800720.jpg)

### mysql约束
#### 约束类型
- 默认约束 DEFAULT  
为字段设置默认值，如果没有明确为字段赋值，则自动赋予默认值
- 唯一约束 UNIQUE KEY  
保证记录的唯一性，可以为空
- 外键约束 FOREIGN KEY  
实现一对一或一对多的关系
> ##### 外键约束的要求
> ![img](https://img1.sycdn.imooc.com/5a960f35000133a912800720.jpg)
> ##### 外键约束的参照操作
> ![img](https://img1.sycdn.imooc.com/5a9612780001597712800720.jpg)
- 主键约束 PRIMARY KEY
- 非空约束 NOT NULL

#### 表级约束与列级约束
![img](https://img1.sycdn.imooc.com/5a9614320001f6df12800720.jpg)

