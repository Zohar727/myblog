---
title: php进阶笔记一
date: 2018-03-12 16:48:12
categories:
- PHP
tags:
- PHP
- 后端开发
---
### PHP数组
#### 创建数组
```
$arr = array()
```
#### 索引数组与关联数组
##### 索引数组
索引数组是指数组的键是整数的数组，并且键的整数顺序是从0开始，依次类推。
```
$arr = array('0' => '苹果');
```
- 索引数组的三种赋值方式
```
    $arr[0] = '苹果';
    $arr = array('0' => '苹果');
    $arr = array('苹果');
```
- foreach循环取值
```
    foreach($arr as $k => $v) // 同时取下标和值
    foreach($arr as $v) // 只取值
```
<!--more-->
##### 关联数组
关联数组是指数组的键是字符串的数组。
```
$arr = array('apple' => '苹果')
```
- 关联数组的两种赋值方式
```
    $arr = array('apple' => '苹果');
    $arr['apple'] = '苹果';
```
***
### PHP类和对象
#### 类的定义与实例对象
##### 定义
```
//定义一个类
class Car {
    //定义属性
    public $name = '汽车';

    //定义方法
    public function getName() {
        //方法内部可以使用$this伪变量调用对象的属性或者方法
        return $this->name;
    }
}
```
##### 创建类的实例
```
$car = new Car();
//也可以采用变量来创建
$className = 'Car';
$car = new $className();
```
##### 类的静态方法与静态关键字
使用static修饰，不需要实例化可直接调用，操作符为::
```
class Car {
    private static $name = '汽车';
    public static function getName() {
        return self::$name;
    }
}
echo Car::getName(); // 汽车
```
静态方法中，$this伪变量不允许使用。可以使用self，parent，static在内部调用静态方法与属性。

##### 构造函数
使用`__construct`定义构造函数，构造函数一般在对象创建时调用，通常用来进行一些初始化工作;  
当子类定义了构造函数后，**不会调用父类的构造函数**，需要显式的调用`parent::__construct()`
```
class Car {
   function __construct() {
       print "父类构造函数被调用\n";
   }
}
class Truck extends Car {
   function __construct() {
       print "子类构造函数被调用\n";
       parent::__construct();
   }
}
$car = new Truck();
```
如果构造函数定义成了私有方法，则不允许直接实例化对象了，这时候一般通过静态方法进行实例化，在设计模式中会经常使用这样的方法来控制对象的创建，比如单例模式只允许有一个全局唯一的对象。
```
class Car {
    private function __construct() {
        echo 'object create';
    }

    private static $_object = null;
    public static function getInstance() {
        if (empty(self::$_object)) {
            self::$_object = new Car(); //内部方法可以调用私有方法，因此这里可以创建对象
        }
        return self::$_object;
    }
}
//$car = new Car(); //这里不允许直接实例化对象
$car = Car::getInstance(); //通过静态方法来获得一个实例
```

##### 析构函数
使用`__destruct`定义   
当创建的对象的所有引用被删除时，会自动调用析构函数
```
class Car {
   function __construct() {
       print "构造函数被调用 \n";
   }
   function __destruct() {
       print "析构函数被调用 \n";
   }
}
$car = new Car(); //实例化时会调用构造函数
echo '使用后，准备销毁car对象 \n';
unset($car); //销毁时会调用析构函数
```

##### 重载
PHP中的重载指的是动态的创建属性与方法 
属性的重载通过__set，__get，__isset，__unset来分别实现对不存在属性的赋值、读取、判断属性是否设置、销毁属性。
```
class Car {
    private $ary = array();
    
    public function __set($key, $val) {
        $this->ary[$key] = $val;
    }
    
    public function __get($key) {
        if (isset($this->ary[$key])) {
            return $this->ary[$key];
        }
        return null;
    }
    
    public function __isset($key) {
        if (isset($this->ary[$key])) {
            return true;
        }
        return false;
    }
    
    public function __unset($key) {
        unset($this->ary[$key]);
    }
}
$car = new Car();
$car->name = '汽车';  //name属性动态创建并赋值
echo $car->name;
```
方法的重载通过`__call`来实现，当调用不存在的方法的时候，将会转为参数调用__call方法，当调用不存在的静态方法时会使用`__callStatic`重载。
```
class Car {
    public $speed = 0;
    
    public function __call($name, $args) {
        if ($name == 'speedUp') {
            $this->speed += 10;
        }
    }
}
$car = new Car();
$car->speedUp(); //调用不存在的方法会使用重载
echo $car->speed;
```
##### 类与对象的高级特性
- 对象比较  
`==`：判断两个实例的所有属性相等  
`===`：判断两个变量是否为同一个对象的引用
- 对象复制  
`clone`方法复制对象
- 对象序列化与反序列化  
`serialize()`序列化为字符串  
`unserialize()`反序列化为对象

***
### PHP正则函数
`preg_match( $pattern , $subject , $matches)`   
**参数 ：**
- pattern : 要搜索的模式，字符串类型(正则表达式)。
- subject : 输入的字符串。
- matches :（可有可无）如果提供了参数matches，它将被填充为搜索结果。$matches[0]将包含完整模式匹配到的文本， $matches[1]将包含第一个捕获子组匹配到的文本，以此类推。</br>

**返回值 ：**  
preg_match()返回 pattern 的匹配次数。 它的值将是0次（不匹配）或1次，因为preg_match()在第一次匹配后 将会停止搜索。preg_match_all()不同于此，它会一直搜索subject 直到到达结尾。 如果发生错误preg_match()返回 FALSE  

`preg_match_all()`  
preg_match_all可以循环获取一个列表的匹配结果数组。

##### 分割符
常用三种：`/  #   ~ `
```
/foo bar/
#^[^0-9]$#
~php~
```

##### 正则替换
```
preg_repalce($pattern,$replacement,$string)

// eg
$string = 'April 15, 2014';
$pattern = '/(\w+) (\d+), (\d+)/i';
$replacement = '$3, ${1} $2';
echo preg_replace($pattern, $replacement, $string); //结果为：2014, April 15
```
##### 正则常用案例
```
<?php
$user = array(
    'name' => 'spark1985',
    'email' => 'spark@imooc.com',
    'mobile' => '13312345678'
);
//进行一般性验证
if (empty($user)) {
    die('用户信息不能为空');
}
if (strlen($user['name']) < 6) {
    die('用户名长度最少为6位');
}
//用户名必须为字母、数字与下划线
if (!preg_match('/^\w+$/i', $user['name'])) {
    die('用户名不合法');
}
//验证邮箱格式是否正确
if (!preg_match('/^[\w\.]+@\w+\.\w+$/i', $user['email'])) {
    die('邮箱不合法');
}
//手机号必须为11位数字，且为1开头
if (!preg_match('/^1\d{10}$/i', $user['mobile'])) {
    die('手机号不合法');
}
echo '用户信息验证成功';
```

***
### PHP会话控制(cookie与session)
#### 设置cookie
- `setcookie`  
**五个常用参数：**
1. name（ Cookie名）可以通过$_COOKIE['name'] 进行访问
2. value（Cookie的值）
3. expire（过期时间）Unix时间戳格式，默认为0，表示浏览器关闭即失效
4. path（有效路径）如果路径设置为'/'，则整个网站都有效
5. domain（有效域）默认整个域名都有效，如果设置了'www.imooc.com',则只在www子域中有效
6. secure 设置cookie在https传输，默认false
7. httponly 是否只使用http访问cookie，默认false，如果为true，则js无法操作cookie，防止xss
- `setrawcookie`  
setrawcookie跟setcookie基本一样，唯一的不同就是value值不会自动的进行urlencode，因此在需要的时候要手动的进行urlencode。
```
setrawcookie('cookie_name', rawurlencode($value), time()+60*60*24*365); 
```
- `header("Set-Cookie:cookie_name=value");`  
因为Cookie是通过HTTP标头进行设置的，所以也可以直接使用header方法进行设置。

#### 删除cookie
- `setcookie('test', '', time()-1);`
- `header("Set-Cookie:test=1393832059; expires=".gmdate('D, d M Y H:i:s \G\M\T', time()-1));`
> 更新和删除时要保证$path和$domain和之前保持一致

#### session工作流程
1. 准备会话的时候，PHP会先查看请求中是否包含session_id，如果没有服务器会生成一个session_id
2. 服务器会把这个session_id发送到浏览器保存， 一般浏览器会把id存在cookie中
3. 之后每次浏览器再去范文服务器时，都会携带cookie中存储的session_id，这样服务器就认识这个浏览器
4. 服务器端这个session_id可以存放任意的会话数据，这些数据时经历过序列化存放进去的
5. 每次浏览器访问服务器，都可以凭借自己的session_id到服务器的这个变量中认领自己的信息
6. 如果想销毁会话，可以删除会话中的数据，销毁会话文件

#### 使用session
1. 执行`session_start()`开启seesion
2. `$_SESSION`进行session读写
> session会自动的对要设置的值进行encode与decode，因此session可以支持任意数据类型，包括数据与对象等。
```
session_start();
$_SESSION['ary'] = array('name' => 'jobs');
$_SESSION['obj'] = new stdClass();
var_dump($_SESSION);
```

#### 删除销毁session
- 将`$_SESSION 清空
```
$_SESSION = [];
```

- 删除单个session  
使用`unset()`方法
```
session_start();
$_SESSION['name'] = 'jobs';
unset($_SESSION['name']);
echo $_SESSION['name']; //提示name不存在
```
- 删除所有session  
使用`session_destory()`方法
```
session_start();
$_SESSION['name'] = 'jobs';
$_SESSION['time'] = time();
session_destroy();
```
> 注意：值得注意的是，session_destroy并不会立即的销毁全局变量$_SESSION中的值，只有当下次再访问的时候，$_SESSION才为空，因此如果需要立即销毁$_SESSION，可以使用unset函数。

- 常用session方法
```
// 获取session的名字
session_name() 
// 获取session_id
session_id()
```

***
#### PHP文件系统
##### 读取文件
```
file_get_contents()
// 返回字符串
```
##### 判断文件
- 是否存在
```
// is_file是确切的判断给定的路径是否是一个文件
is_file()
// file_exists不仅可以判断文件是否存在，同时也可以判断目录是否存在
file_exists()
```
- 是否可读
```
is_readable()
```
- 是否可写
```
is_writeable()
```
##### 获得文件属性
- 文件所有者
```
fileowner()
```
- 文件创建时间
```
filectime()
```
- 文件修改时间
```
filemtime()
```
- 文件访问时间
```
fileatime()
```
- 文件大小
```
filesize()
```
##### 写入内容至文件
```
file_put_contents($filename, $data)
```
##### 删除文件
- 删除单个文件
```
unlink($filename)
```
- 删除文件夹
```
rmdir($dir) // 文件夹必须为空

// 文件夹不为空时，可以循环删除文件再删除文件夹
foreach (glob("*") as $filename) {
   unlink($filename);
}
rmdir($dir);
```

***
### PHP异常处理
#### Exception异常处理类
Exception具有几个基本属性与方法，其中包括了：

- message 异常消息内容
- code 异常代码
- file 抛出异常的文件名
- line 抛出异常在该文件的行数

其中常用的方法有：

- getTrace 获取异常追踪信息
- getTraceAsString 获取异常追踪信息的字符串
- getMessage 获取出错信息
- getLine 获取异常行号
- getFile 获取异常文件