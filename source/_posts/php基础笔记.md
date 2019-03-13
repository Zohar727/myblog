---
title: php基础笔记
date: 2018-02-24 19:46:10
categories:
- PHP
tags:
- PHP
- 后端开发
---
### php变量规范
- 字母或_开头
- 变量名只能由`字母`，`数字`，`下划线`组成
- 区分大小写
- 变量名不能有**空格**

### php变量数据类型
在PHP中，支持8种原始类型，其中包括四种标量类型、两种复合类型和两种特殊类型。
#### 四种标量类型
1. 布尔类型（boolean）
    > 只有`ture`和`false`两种值，echo 输出时`ture`为`1`，`false`不输出值
2. 整型（integer）
3. 浮点型（浮点数、双精度数或实数）
```
<?php
$num_float = 1.234;    //小数点  
$num_float = 1.2e3;    //科学计数法，小写e  
$num_float = 7.0E-10;     //科学计数法，大写E  
?>
```
<!--more-->
4. 字符串
   > 字符串型可以用三种方法定义：单引号形式、双引号形式和Heredoc结构形式。**字符串中包含变量时，需要使用双引号定义**
##### Heredoc结构形式定义
```
$str = <<<GOD   
'要定义的长串字符' 
GOD
```
#### 两种特殊类型
1. 资源（resource）
    > 由专门的函数建立使用，例如打开文件，连数据库，图形画布等。可以对资源进行创建、使用和释放。资源不用时要及时释放，否则系统也会启动垃圾回收机制
2. 空类型（NULL）
    > NULL类型只有一个取值，表示一个变量没有值，当被赋值为NULL，或者尚未被赋值，或者被unset()，这三种情况下变量被认为为NULL。
#### 两种复合类型
1. 自定义常量
    - 常量，即值预先定义好，不可改变
    - 定义方法：
        ```
        define($string contant_name, mixed $value[, $case_sensitive = true])
        ```
        参数解释：  
           contant_name: 常量名，必选  
           value: 常量值，必选  
           case_sensitive: 大小写敏感，可选，默认false 
    - 取值方法：  
        直接使用常量名；使用constant()函数，`mixed constant(string constant_name)`
    - 判断常量名是否已经定义：  
        `bool define($string contant_name)`  
        返回值为ture或false
        
2. 系统常量 <br/>
    常见系统常量：
    - `__FILE__`:php程序文件名。它可以帮助我们获取当前文件在服务器的物理位置。

    - `__LINE__`:PHP程序文件行数。它可以告诉我们，当前代码在第几行。
    
    - `PHP_VERSION`:当前解析器的版本号。它可以告诉我们当前PHP解析器的版本号，我们可以提前知道我们的PHP代码是否可被该PHP解析器解析。
    
    - `PHP_OS`：执行当前PHP版本的操作系统名称。它可以告诉我们服务器所用的操作系统名称，我们可以根据该操作系统优化我们的代码。
    
***
### PHP运算符
#### 算术运算符
![img](http://img.mukewang.com/5333bfdb0001a27a05300240.jpg)

#### 赋值运算符
- `=`：传值
- `&`：传地址

#### 比较运算符
![](http://img.mukewang.com/533a0af30001e75c06600409.jpg)

#### 三元运算符
`(“?:”)`三元运算符也是一个比较运算符，对于表达式`(expr1)?(expr2):(expr3)`，如果expr1的值为true，则此表达式的值为expr2，否则为expr3

#### 逻辑运算符
![](http://img.mukewang.com/533e0fbe0001c56f06080279.jpg)

#### 字符串连接运算符
- `.` : 字符串连接
- `.=` : 字符串连接并赋值

#### 错误控制运算符@
PHP中提供了一个错误控制运算符“@”，对于一些可能会在运行过程中出错的表达式时，我们不希望出错的时候给客户显示错误信息，这样对用户不友好。于是，可以将@放置在一个PHP表达式之前，该表达式可能产生的任何错误信息都被忽略掉；

如果激活了track_error（这个玩意在php.ini中设置）特性，表达式所产生的任何错误信息都被存放在变量$php_errormsg中，此变量在每次出错时都会被覆盖，所以如果想用它的话必须尽早检查。

需要注意的是：错误控制前缀“@”不会屏蔽解析错误的信息，不能把它放在函数或类的定义之前，也不能用于条件结构例如if和foreach等。

***
### PHP语言结构语句
- 顺序结构
- if...else
- if...else if...else
- switch...case...default
- while
- do...while
- for(...;...;...)
- foreach  
    `foreach`一般用于遍历数组，语法格式有两种：  
    ```
    foreach(array as value) // 只取值不取下标
    foreach(array as index => value) // 同时取值和下标
    ```
