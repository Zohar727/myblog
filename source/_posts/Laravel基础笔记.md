---
title: Laravel基础笔记
date: 2018-03-17 16:48:49
categories:
- Laravel
tags:
- PHP
- Laravel
- 后端开发
---
> laravel中最基础的部分笔记

### laravel 路由
#### 路由简介
- 将用户的请求转发给相应的程序进行处理
- 建立url和程序之间的映射
- 请求类型：get,post,put,patch,delete
<!--more-->
#### 基本路由
```
// 多请求路由
Route::match(['get', 'post'], 'multy1', function() {
  return 'multy1';
});
// 非指定多请求路由
Route::any('multy2', function() {
  return 'multy2';
});

// 路由参数
Route::get('user/{id}', function($id) {
  return 'user-id'.$id;
});
// 设置路由可选参数
Route::get('user/{name?}', function($name) {
  return 'user-name'.$name;
});
// 设置路由默认参数
Route::get('username/{name?}', function($name = '0') {
  return 'user-name:'.$name;
})->where('name','[A-Za-z]+');
```
#### 路由别名
```
// 路由别名
Route::get('user/member-center', ['as' => 'center', function() {
  return route('center');
}]);
```
#### 路由群组
```
// 路由群组
Route::group(['prefix' => 'member'], function() {
  Route::get('user/member-center', ['as' => 'center', function() {
    return route('center');
  }]);
  Route::get('user/{id}', function($id) {
  return 'user-id'.$id;
  });
});
```
#### 路由输出视图
```
// 路由中输出视图
Route::get('/view', function() {
  return view('welcome');
});
```
***
### laravel 控制器
#### 控制器基本写法
```
class MemberController extends Controller
{
  public function info()
  {
    return 'member-info';
  }
  public function info2($id)
  {
    return 'member-info: '.$id;
  }
}
```
#### 路由关联控制器
```
// 路由关联控制器
Route::get('member/info', 'MemberController@info');

// 路由关联控制器并起别名
Route::get('member/info2', ['uses' => 'MemberController@info','as' => 'memberinfo']);

// 路由管理控制器传递参数
Route::get('member/{id}', 'MemberController@info2');

```

***
### laravel 视图
略...
### laravel 模型
#### 新建Model
```
namespace App;
use Illuminate\Database\Eloquent\Model;
class Member extends Model
{
  public static function getMember()
  {
    return 'member name is zohar';
  }
}
```
#### 在控制器中调用Model
```
// MemberContriller.php
// 控制器里调用模型
  public function info3()
  {
    return Member::getMember();
  }
```
***
### laravel 数据库操作
#### 连接数据库
`config/database.php`文件中配置即可  
`env`文件里有默认配置，进行修改
#### 原生sql语句操作数据库
##### 插入操作
```
    $bool = DB::insert('insert into article(title, author,description,content,dateline) value(?,?,?,?,?)',
              ['ailpay', 'zohar', 'alipay tent', 'alipay aplipay in japan', time()]);
    var_dump($bool);
```
##### 更新操作
```
    $update = DB::update('update article set author = ? where id = ?', ['francis', 1]);
    var_dump($update);
```
##### 查询操作
```
    $update = DB::update('update article set author = ? where id = ?', ['francis', 1]);
    var_dump($update);
```
#### 删除操作
```
    $delete = DB::delete('delete from article where id = ?', [3]);
    var_dump($delete);
```
#### 查询构造器操作数据库
##### 查询构造器-添加数据
```
    $bool = DB::table('article')->insert(
      ['author' => 'zohar', 'title' => 'laravel']
    );
    var_dump($bool);
    // 获取自增ID
    $id = DB::table('article')->insertGetId(
      ['author' => 'zohar', 'title' => 'laravel2']
    );
    var_dump($id);
    // 插入多条数据
    $bool2 = DB::table('article')->insert([
      ['author' => 'zohar', 'title' => 'laravel3'],
      ['author' => 'zohar', 'title' => 'laravel4']
    ]);
    var_dump($bool2);
```
##### 查询构造器-更新数据
```
    // 返回值为影响行数
    $num = DB::table('article')
        ->where('id', 12)
        ->update(['author' => 'francis']);
    var_dump($num);
    // 自增的方式更新
    $num2 = DB::table('article')->increment('age', '1'); // 自增数默认为1
    // 自减的方式更新
    $num3 = DB::table('article')->decrement('age', '1');
    // 在自增或自减的条件下同时更新其他数据
    $num4 = DB::table('article')->decrement('age', '2', ['author' => 'francis']);
```
##### 查询构造器-删除数据
```
    // 返回值为影响的行数
    $num = DB::table('article')
        ->where('id', 15) // where('id', '>=', 15)  大于小于的条件这样写
        ->delete();

    // 方法二 很危险
    DB::table('article')->truncate(); // 删除表的所有值
```
##### 查询构造器-查询数据
```
    // get()方法 获取所有数据
    $data = DB::table('article')
      ->whereRaw('id >= ? and age >= ?', [5, 20]) // 多个条件筛选的写法
      ->get();
    dd($data);

    // first()方法 获取结果集第一条数据
    $data2 = DB::table('article')
      ->orderBy('id','desc')
      ->first();
    dd($data2);

    // pluck方法 返回结果集的指定字段
    $data3 = DB::table('article')
      ->pluck('title');
    dd($data3);

    // lists方法 返回结果集的指定字段，并可指定字段为下标
    $data4 = DB::table('article')
      ->lists('title', 'id'); // 第二个参数为指定的字段作为下标

    // select 返回结果集多个指定字段
    $data5 = DB::table('article')
      ->select('id', 'title', 'author')
      ->get();

    // chunk()方法 查询大数据时分段查询返回结果
    DB::table('article')->chunk(5, function($data6) { // 第一个参数为每段的数量
      var_dump($data6);
      return false; // 在条件下停止查询
    });
```
##### 查询构造器-聚合函数
```
    // count() 返回表的记录数
    $num = DB::table('article') -> count();
    // max() 返回最大值
    $max = DB::table('article') -> max('age');
    // min() 返回最小值
    $min = DB::table('article') -> min('age');
    // avg() 返回平均值
    $avg = DB::table('article') -> avg('age');
    // sum() 返回总数
    $sum = DB::table('article') -> sum('age');
```
#### 使用Eloquent ORM操作数据库
#### ORM 简介
- ORM 是一个优美、简洁的 ActiveRecord 实现，用来实现数据库操作
- 每个数据表都有一个与之相对于的模型Model用于和数据表数据交互

#### 为数据表建立对应模型用于数据交互
```
  // 指定绑定的表名
  protected $table = 'article';
  // 指定主键
  protected $primaryKey = 'id';
  // 指定允许批量赋值的字段
  protected $fillable = ['title','author','description','content','dateline'];
  // 指定不允许批量赋值的字段
  protected $guarded = [];
  // 时间戳设置
  public $timestamps = false; // true为记录时间戳，false则相反
  // 重写格式化时间戳函数
  protected function getDateFormat()
  {
    return time();
  }
  // 取消自动格式化时间戳
  protected function asDateTime($val)
  {
    return $val;
  }
```
#### orm 查询数据
##### orm all() 查询所有数据
```
    // all()方法 查询所有数据
    $article1 = Article::all();
    dd($article1);
```
##### orm find() 根据主键查询一条数据
```
    // find()方法 根据主键查询一条数据
    $article2 = Article::find(1);
    dd($article2);
```
##### orm 使用查询构造器查询
```
    // 使用查询构造器操作
    $article3 = Article::where('id','>','1')
      ->orderBy('dateline','desc')
      ->first();
    dd($article3);
```
##### orm 使用chunk()查询
```
    // 使用chunk操作
    Article::chunk(2, function($article4) {
      dd($article4);
    });
```
#### orm 添加数据
##### 使用模型添加数据
```
    // 使用模型添加数据 返回创建结果的布尔值
    $article5 = new Article();
    $article5->title = '霍金昨日去世';
    $article5->author = '路透社';
    $article5->description = '霍金于昨日去世';
    $article5->content = '据英国天空新闻等多家媒体，史蒂芬·霍金去世，享年76岁。';
    $bool = $article5->save();
    dd($bool);
```
##### 使用模型的create方法添加数据
```
    // 使用模型的create方法添加数据,要在模型中提前指定批量赋值的字段,返回刚刚添加的数据
    $article6 = Article::create(
      ['title' => 'test', 'author' => 'zohar', 'description' => 'testtest', 'content' => 'test-test',
      'dateline' => time()]
    );
    dd($article6);
```
##### firstOrCreate()
```
    // firstOrCreate() 以属性查找数据，若无则新增
    $article7 = Article::firstOrCreate(
      ['author' => 'zohar']
    );
    dd($article7);
```
##### firstOrNew()
```
    // firstOrNew() 以属性查找数据，若无则新增，但要手动save()
    $article8 = Article::firstOrNew(
      ['author' => 'francis']
    );
    $bool = $article8->save();
    dd($bool);
```
#### orm 更新数据
##### 使用模型更新数据
```
    // 使用模型更新数据
    $article9 = Article::find(6);
    $article9->title='王俊凯发微致霍金';
    $bool = $article9->save();
    var_dump($bool);
```
##### 结合查询操作器批量更新数据
```
    // 结合查询操作器批量更新数据 返回受影响的行数
    $article10 = Article::where('id', '=', 6)->update(
      ['content'=>'王俊凯昨日发微博致霍金', 'dateline'=>time()]
    );
```
#### orm 删除数据
##### 通过模型删除
```
    // 通过模型删除
    $article11 = Article::find(6);
    $bool = $article11->delete();
    var_dump($article11);
```
##### 通过模型指定条件删除
```
    // 通过模型指定条件删除
    $num = Article::where('id', '>', 2)->delete();
    var_dump($num);
```
##### 通过主键删除
```
    // 通过主键删除
    $article12 = Article::destory(6);
    var_dump($article12);
```
##### 通过主键删除多条数据
```
    // 通过主键删除多条数据
    $article13 = Article::destory([5,6]);
    var_dump($article13);
```

***
### laravel-控制器（2）
#### controller-request
##### request简介
- Laravel中请求使用的是symfony/http-foundation组件
- 请求里面存放了$_GET,$_POST,$_COOKIE,$FILES,$_SERVER等数据
- 基础写法
```
  use Illuminate\Http\Request;
  public function request1(Request $request){}
```

##### request input() 取值
```
    echo $request->input('name','undefined'); // 第二个参数为默认值
```
##### request has() 判断是否有该值
```
    // 判断是否有值
    if ($request->has('name')) {
      echo $request->input('name');
    } else {
      echo '无该参数';
    }
```
##### request all()  取所有参数
```
    // 取所有参数
    $res = $request->all();
    echo $res;
```
##### request method()/isMethod() 判断请求类型
```
    // 2.判断请求类型
    echo $request->method();
    if ($request->isMethod('POST')) {
      echo 'yes';
    } else {
      echo 'no';
    }
```
##### request ajax() 判断请求为ajax
```
    $res = $request->ajax();
    var_dump($res);
```
##### request is()/url() 判断/获取请求路径
```
    $res = $request->is('student/*');
    var_dump($res);
    // 获取当前请求路径
    $url = $request->url();
```
#### controller-session
#### HTTP request session()
##### put()赋值
```
    $request->session()->put('key1', 'value1');
```
##### get()取值
```
    echo $request->session()->get('key1');
```

#### session 辅助函数
##### session()->put()赋值
```
    session()->put('key2', 'value2');
```
##### session()-get()取值
```
    echo session()->get('key2');
```
#### Session 静态方法
##### put()赋值
```
    // 3. Session 静态方法
    Session::put('key3', 'value3');
    // session存入数组值
    Session::put(['key4' => 'value4', 'key5' => 'value5']);
```
##### get()取值
```
    echo Session::get('key4', 'default'); // 第二个参数为默认值
```
##### push() 存入数组
```
    // 把数据放到Session数组中
    Session::push('student', 'sean');
    Session::push('student', 'imooc');
    $res = Session::get('student');
    var_dump($res);
```
##### pull() 取值后并删除session中的该值
```
    // pull() 从session中取出数据，取完则删除
    $res2 = Session::pull('student', 'default');
    var_dump($res2);
```
##### all() 取出所有值
```
    $res = Session::all();
    dd($res);
```
##### has()  判断某个值是否存在
```
    if (Session::has('key11')) {
      $res = Session::all();
      dd($res);
    } else {
      echo 'key11不存在';
    }
```
##### flash() 暂存数据，只能访问/获得一次
```
    Session::flash('flashkey', 'flash-value');
```
##### forget() 删除某个值
```
    Session::forget('key1');
    $bool = Session::has('key1');
    var_dump($bool);
```
##### flush() 删除所有值
```
    Session::flush();
```
#### controller-middleware
##### 中间件的作用
Laravel中间件提供一个方便的机制来过滤进入应用程序的HTTP请求
##### 新建中间件
```
// Activity.php
namespace App\Http\Middleware;
use Closure;

class Activity
{
  // 活动页面的中间件
  public function handle($request, Closure $next)
  {
    // 前置操作
    if (time() < strtotime('2018-03-20')) {
      return redirect('activity0');
    }
    return $next($request);
  }
}
```
##### 在路由中使用中间件
```
// routes.php
// 中间件讲解路由
// 使用Activity中间件
Route::any('activity0', ['uses' => 'StudentController@activity0']);
Route::group(['middleware' => ['activity']], function() { // 这里使用中间件activity拦截路由
  Route::any('activity1', ['uses' => 'StudentController@activity1']);
  Route::any('activity2', ['uses' => 'StudentController@activity2']);
});
```
##### 注册中间件
**在kernel.php 文件中配置
```
    protected $routeMiddleware = [
        // 注册刚刚写的中间件
        'activity' => \App\Http\Middleware\Activity::class,      
    ];
```
***
### laravel 表单验证
#### 控制器验证
```
$this->validate($request, [
    'Student.name' => 'required|min:2|max:8',
    'Student.age' => 'required|integer',
    'Student.sex' => 'required|integer'
], [
    'required' => ':attribute 为必填项',
    'min' => ':attribute 长度不符合要求',
    'integer' => ':attribute 必须为整数'
], [
    'Student.name' => '姓名',
    'Student.age' => '年龄',
    'Student.sex' => '性别'
]);
```
#### Validator类验证
```
$validator = \Validator::make($request->input(), [
    'Student.name' => 'required|min:2|max:8',
    'Student.age' => 'required|integer',
    'Student.sex' => 'required|integer'
], [
    'required' => ':attribute 为必填项',
    'min' => ':attribute 长度不符合要求',
    'integer' => ':attribute 必须为整数'
], [
    'Student.name' => '姓名',
    'Student.age' => '年龄',
    'Student.sex' => '性别'
]);
if ($validator->fails()) {
    return redirect()->back()->withErrors($validator);
}
```