---
title: Laravel进阶笔记
date: 2018-03-18 16:49:06
categories:
- Laravel
tags:
- PHP
- Laravel
- 后端开发
---
> 虽然是进阶笔记，但记录的知识点还是相对基础的

### composer
#### composer安装
[windows下安装composer](http://blog.csdn.net/crazywoniu/article/details/73432291)
#### composer全局配置中国镜像
```
composer config -g repo.packagist composer https://packagist.phpcomposer.com
// 查看当前镜像地址
config -gl

```
<!--more-->
### composer安装laravel
#### Composer Create-Project
```
composer create-project --prefer-dist laravle/laravel [别名] [版本号]
// for exampe:
composer create-project --prefer-dist laravel/laravel blog "5.2.*"
```
#### Laravel 安装器
```
composer global require "laravel/installer"
laravel new project-name
```
> 需要配置环境变量： ~/.composer/vendor/bin

### Laravel Artisan
#### Artisan 简介
- artisan 是 laravel 中自带的命令行工具的名称
- 由强大的 Symfony Console 组件驱动
- 提供了一些对应用开发有帮助的指令
#### Artisan 使用帮助
- 查看所有可用的Artisan命令  
    `php artisan list`
- 查看命令帮助信息  
    `php artisan help migrate`
#### Artisan 常用命令
- 创建控制器  
    `php artisan make:controller StudentController`
- 创建模型  
    `php artisan make:Model Article`
- 创建中间件  
    `php artisan make:middleware Activity`

### Laravel Auth
#### Auth 简介
Auth可以方便快速的生成一个用户注册登录的模块
#### 创建Auth
```
php artisan make:auth
```
### Laravel 数据迁移
#### 新建迁移文件
```
// 方法一：
php artisan make:migration create_student_table --table=students
// create_student_table:迁移文件的名称
// --table=students: students 表示要新建一个students表
// 方法二：生成模型同时生成迁移文件
php artisan make:model Student -m
```
> 生成的迁移文件在`database/migration`下，我们在迁移文件中新建数据表

#### 执行数据迁移文件
```
php artisan migrate
// 即根据迁移文件生成了相应的数据表
```
### laravel 数据填充
#### 数据填充简介
数据迁移只是建立了数据表，还需要通过数据填充批量插入数据
#### 新建填充文件
```
php artisan make:seeder StudentTableSeeder[填充文件名]
```
> 生成的填充文件在`database/seeds`下，我们在填充文件中执行插入数据

#### 执行数据填充文件
```
// 执行单个填充文件
php artisan db:seed --class=StudentTableSeeder[填充文件名]

// 批量执行填充文件
// 需要先在在database/seeds/DatabaseSeeder.php 文件中输入需要批量填充的文件
$this->call(UsersTableSeeder::class);
// 在批量执行填充
php artisan db:seed
```
### Laravel 文件系统
#### 文件系统简介
- Laravel的文件系统是基于Frank de Jonge 的 Flysystem 扩展包
- 提供了简单的接口，可以操作本地端控件，Amazon S3，Rackspace Cloud Storage
- 可以非常简单的切换不同的保存方式，但仍使用相同的API操作

#### 文件系统配置文件位置
` config/fielsystems.php `
#### 新建一个文件上传目录
```
// config/filesystems/php
'uploads' => [
          'driver' => 'local', // 文件存储位置：本地/云服务器
          'root' => storage_path('app/uploads'), // 文件存储路径
             ],
```
#### 文件系统常用API
```
    // 原生PHP的API
    $_FILRS
    // 获取文件资源
    $file = $request->file('source');
    // 判断文件是否上传成功
    $file->isValid()
    // 原文件名
    $originalName = $file->getClientOriginalName();
    // 扩展名
    $ext = $file->getClientOriginalExtension();
    // MimeType
    $type = $file->getClientMimeType();
    // 绝对路径
    $realPath = $file->getRealPath();
    // 取文件名
    $filename = date('Y-m-d-H-i-s').'-'.uniqid().'.'.$ext;
    // 将文件存入指定目录
    $bool = Storage::disk('uploads')->put($filename, file_get_contents($realPath));
```

### Laravel 邮件(SwiftMailer)
#### Laravel邮件简介
- Laravel 的邮件功能基于热门的 SwiftMailer 函数库之上，提供了一个简洁的API
- Laravel为SMTP、Mailgun、Mandrill、Amazon SES、PHP的mail函数，以及sendmail提供了驱动从而允许你快速通过本地或云服务发送邮件

#### Laravel邮件配置文件
` config/mail.php `  
** 邮箱参数在`.env`文件中设置**
```
// 这里是腾讯企业邮箱的示例
MAIL_DRIVER=smtp
MAIL_HOST=smtp.exmail.qq.com
MAIL_PORT=465
MAIL_USERNAME=xx@xx.com
MAIL_PASSWORD=password
MAIL_ENCRYPTION=ssl
```
#### 发送邮件
##### Mail::raw() 发送纯文本邮件
```
Mail::raw('邮件内容', function($message) {
        // 发送人
        $message->from('admin@zohar.com.cn', 'zohar');
        // 邮件主题
        $message->subject("欢迎注册");
        // 收件人
        $message->to(['xx@qq.com', 'xxx@qq.com', 'xxx@qq.com']);    
      });
```
##### Mail::send() 发送html邮件
```
  Mail::send('students.mail',['name' => 'zohar'],  function($message) {});
  // 参数一：html模版文件
  // 参数二：要传给html的值
```
### Laravel 缓存
#### Larvael缓存简介
- Laravel为各种不同的缓存系统提供一致的API
- Laravel支持常见的后端缓存系统，File、Memcached、Redis

#### 缓存的主要方法
##### 设置缓存
```
  // put() 设置缓存
  Cache::put('key1', 'val1', 10);
  
  // add() 设置缓存，返回值为boolean
  $bool = Cache::add('key1', 'val2', 10);
  var_dump($bool);
  
  // forever() 设置永久保存的缓存
  Cache::forever('key2', 'val2');
```
##### 获取缓存
```
  // get() 获取缓存
  $val = Cache::get('key1');
  var_dump($val);
  
  // pull() 获取缓存并删除该缓存
  var_dump(Cache::pull('key1'));
```
##### 删除缓存
```
  // forget() 删除缓存 返回boolean
  $bool = Cache::forget('key1');
  var_dump($bool);
```
#### 查找缓存的key是否存在
```
  // has() 判断key存在
  if (Cache::has('key1')) {
    var_dump(Cache::get('key1'));
  } else {
    echo '不存在';
  }
```

### Laravel 异常错误
#### debug模式配置
```
// config/app.php
// .env
APP_DEBUG=true //上线环境，值永远为false
```
#### HTTP异常抛出异常页面
```
  $student = null;
  if ($student == null) {
    // 抛出异常页面
    abort('503'); //跳转至error下的503页面
  }
```

### Laravel 日志
#### 日志简介
- Laravel日志工具基于Monolog库，提供了single,daily,syslog,errorlog日志模式
- debug、info、notice、warning、error、critical、alert七个错误级别

#### 输出日志
```
  // 输出日志 single模式 daily模式（按日期输出日志文件）
  Log::info('info:日志');
  Log::warning('warning:日志');
  // 输出日志传参
  Log::error('error:日志', ['name' => 'zohar']);
```
> 输出的日志文件在 `storage/app/logs`下

### Laravel 队列
> 非常基础的一点笔记

#### 队列简介
- 队列服务为各种不同的后台队列提供了统一的API
- 允许推迟耗时任务的执行，从而大幅提高web请求速度

#### 队列配置文件
` config/queue.php`
```
// .env
QUEUE_DRIVER=database // 配置队列的存储位置
```
#### 队列的主要步骤
##### 迁移队列需要的数据表
```
php artisan queue:table
php artisan migrate
// 会自动生成队列迁移文件并建立队列任务数据表
```
##### 编写任务类
```
// 生成任务文件
php artisan make:job SendEmail
// app/Jobs/SendEmail.php 
class SendEmail extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;

    protected $email;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($email)
    {
        //
        $this->email = $email;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        //
        Mail::raw('队列测试', function($message) {
          $message->from('admin@zohar.com.cn', 'zohar');
          $message->subject("Study in Zohar's blog");
          $message->to($this->email);
        });
    }
}
```
##### 推送任务到队列
此时数据表中已经插入了队列任务
```
      use App\Jobs\SendEmail;
      dispatch(new SendEmail(['xxx@qq.com', 'xxx@qq.com', 'xxx@qq.com']));

```
##### 运行队列监听器
```
php artisan queue:listen
```
##### 处理失败任务
```
// 建立队列失败任务数据表
php artisan queue:failed-table
php artisan mirgate
// 显示失败的队列任务
php artisan queue:failed
// 重推失败任务
php artisan queue:retry 1[失败id]
// 删除失败任务
php artisan queue:forget 1[失败id]
// 删除所有失败任务
php artisan queue:flush



