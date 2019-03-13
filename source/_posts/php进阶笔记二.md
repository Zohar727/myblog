---
title: php进阶笔记二
date: 2018-03-14 16:48:29
categories:
- PHP
tags:
- PHP
- 后端开发
---
### PHP字符串
#### 字符串定界符
- 单引号
- 双引号
> 双引号解析变量，单引号不解析变量(执行效率高)
- heredoc写法
```
// 相当于双引号的作用
$str = <<<EOF
// content
EOF;
```
<!--more-->
- nowdoc写法
```
// 相当于单引号的作用，不解析变量
$str = <<<'EOF'
// content
EOF;
```

#### 花括号的作用

> 用法一：用于包裹变量整体

```
$name = 'zohar';
echo 'my name is {$name}s';//my name is zohars;
```

> 用法二：对字符串的字符作增删改查的操作

```
$str = 'abcdef';
echo $str{0}; // a
// 只能用一个字符修改一个字符
$str{0} = 'z';
echo $str{0}; // z
// 删除
$str{1} = '';
echo $str; // zcdef;
// 添加
$str{6}= 'g';
echo $str; // zbcdefg
```

#### 字符串类型转换
##### 自动类型转换
- 数值转字符串  
数值型 -> 数值本身
- 布尔型转字符串
```
ture -> 1
false -> 空字符串
```
- null转字符串
```
null -> 空字符串
```
- 数组转字符串
```
数组 -> Array
```
- 资源转字符串
```
资源 -> Resource id #数字
```
- 对象不能直接转字符串

##### 临时转换
```
(string) strval()
$var = 23.3;
$res = (string)$var; // 不会改变变量本身的类型
var_dump($res,$var); // string(4) "23.3" float(23.3) 
```
##### 永久转换
```
// 设置变量类型
settpe()

$var = 12;
settype($var, 'string');
var_dump($var); //  string(2) "12"
```

##### 字符串转换为其他类型
- 取合法数字，如果不是合法数字开始，转化为0
```
  echo 1+'3zohar'; //4
  echo 1.2+'4zohar'; // 5.2
  echo 3 + '2e2'; // 203
  echo 2+ 'true' // 0
```
- 字符串转布尔类型规律：空字符串或者字符串是'0', "0.0",null，array() -> false，其他->true

#### 常用字符串函数
- 检测变量是否为字符串
```
is_string()
```
- 得到字符串长度
```
strlen($str)
```
- 字符串转大小写
```
strtolower()
strtoupper()
```
- ASCLL码
```
ord($str) // 返回字符的ASCLL码
chr($int) // 返回ASCLL码对应的字符
```
- 字符串截取
```
// 后两个参数为负数时代表位置
substr($str, $start , $length)
```
- 比较字符串大小
```
strcmp($str1,$str2) // 区分大小写
strcasecamp($str1,$str2) // 不区分大小写
// str1<str2 返回<0
// str1>str2 返回>0
// str1=str2 返回0

```
- 查找字符串出现的位置
```
strpos($str,$search,$offset) // 区分大小写
stripos($str,$search,$offset)// 忽略大小写
// 返回字符串首次出现的位置
strrops($str,$search,$offset)
strripos($str,$search,$offset)
// 返回字符串最后一次出现的位置
```
- 过滤字符串中的html标记
```
strip_tags($str[,$allowTags]);
```
- 过滤字符串空格
```
ltrim() // 左端空格
rtrim() // 右端空格
trim() // 两端空格
```
- 数组转字符串
```
join($glue,$array) // $glue指定的分隔符
impload($glue, $array)
```

***
### PHP函数
#### 函数参数的要求
- 以逗号为分隔符，从左向右求职
- 可以带有零个或多个参数
- 可以为任意数据类型
- 参数分为必选和可选参数(可选参数会设置默认值 `$param = 'defalut'`)

#### 变量作用域
##### 局部变量
**定义：** 函数体内声明的变量为局部变量
- 动态变量  
函数执行完毕之后立即释放
- 静态变量  
static关键字声明的变量为静态变量，当函数执行完毕之后静态变量不会释放，而是保存在静态内存中，当再次调用函数的时候首先从静态内存中取出变量的值接着执行。

##### 全局变量
**定义：** 在函数外声明或在函数内使用`global`关键字修饰的变量为全局变量  
**如何在函数体内使用全局变量：** 
- 通过`global`关键字
- 通过`$GBLOBALS`超全局变量
```
    $i=1;
    $j=2;
    function test1(){
        global $i;
        global $j; // 通过global使用
        $j = 10; // 修改值
    }
    
    // 通过$GBLOBALS超全局变量
    $username = 'zohar';
    $age = 10;
    $email = 'asd@qq.com';
    function test2(){
        echo '用户名为:'.$GLOBALS['username'];
        $GLOBALS['age'] = 20; // 修改值
    }
```

#### 函数传值与引用的区别
- 传值
> 默认情况下，函数通过值传递，即使在函数内部改变参数的值也不会改变函数外部的值
```
  function test($m){
    $m+=10;
    return $m;
  }
  $m = 2;
  echo test($m); // 12
  echo '</br>';
  echo $m; // 2
```
- 传引用
> 在参数前添加`&`符号，即通过引用（传递参数地址）传递参数，在函数内部对其所操作影响变量本身
```
  function test2(&$n){
    $n+=10;
    return $n;
  }
  $n = 2;
  echo test2($n); // 12
  echo '</br>';
  echo $n; // 12
```

#### 特殊形式的函数
##### 可变函数
相当于等量代换，将函数名称赋给字符串变量，在使用该变量是，如果带小括号，则会解析函数
```
$funcName = 'md5';
echo $funcName('zohar'); //md5('zohar')
// get_defined_functions  得到所有内置函数
```
> 可变函数不能用于像echo,print,unset类似的语言结构

##### 回调函数
- 定义：  
回调函数就是调用函数的时候将另外一个函数的名称作为参数传递进去，并在函数体中调用
- 如何调用：  
    1. 通过可变函数的形式调用；  
    2. 通过`call_user_func()`和`call_user_func_array()`调用
```
function study($username){
  echo $username.' is study..</br>';
}
function eat($username){
  echo $username.' is eat..</nr>';
}
// 可变函数形式
function doWhat($funcName,$param){
  $funcName($param);
}
doWhat('study', 'zohar'); // zohar is study..
// call_user_func形式
call_user_func('study','zohar'); // zohar is study..
call_user_func_array('study', array('king')); // king is study..
echo call_user_func('md5', 'zohar'); // 5c1a2ff12e5e462fddfb05b09d94ae96
```

##### 匿名函数
- 定义：  
也叫**闭包**函数，允许临时创建一个没有指定名称的函数，常用作回调函数的参数值，也可做变量的值来使用
- 创建方式：
    1. function(){}
    2. create_function()
```
  // 匿名函数的形式
  $func = function(){
    return 'this is a clouse';
  };
  echo $func(); // this is a clouse
  $func = create_function('', 'echo "this is a test";');
  echo $func(); // this is a test
  // 匿名函数在当做回调使用
  call_user_func(function($username){echo "hello {$username}";}, 'zohar'); // hello zohar
```
##### 递归函数
函数体自己调用自己
**用处：**
- 实现目录的遍历，复制，删除非空目录
- 无限极分类

*** 
### PHP日期时间函数
#### 设置时区
- 通过php配置文件`date.timezone`设置时区
```
date.timezone = PRC
```
- `date_default_timezone_set()`设置
```
date_default_timezone_set('Asia/Shanghai');
date_default_timezone_get(); // Asia/Shanghai
```
- `ini_set` 脚本运行时配置
```
ini_set('date.timezone', 'Asia/Shanghai');
```

#### 格式化本地时间
```
date(format[, timestamp]) // 格式，时间戳
```
![常用参数](https://img1.sycdn.imooc.com/5aa615fe00018b7e12800800.jpg)
#### 时间戳
- 获取时间戳
```
time()
```
- 日期转时间戳
```
mktime(h,i,s,n,j,Y)
mktime(0,0,0,8,3,2018);
```
- 时间戳转日期
```
date('Y-m-d H:i:s', timestamp)
```
- 英文文本日期转时间戳
```
strtotime()
echo strtotime('now') // 显示当前时间戳
echo strtotime('next monday') 
```

#### 微秒的使用
```
// 返回值：程序执行时间，当前时间戳
microtime() // 0.08223700 1520835438
```

#### 其他常用日期函数
```
// 返回时间数组
print_r(getdate());
// 验证日期合法
var_dump(checkdate(29,2,2018)); // bool(false)
```


