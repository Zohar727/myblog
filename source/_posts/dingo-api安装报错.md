---
title: dingo-api安装报错的解决办法
date: 2018-03-25 16:49:40
categories:
- Laravel
tags:
- PHP
- Laravel
- 后端开发
---
根据文档，使用composer命令安装
```
composer require dingo/api:1.0.x@dev
```
<!--more-->
然后报错是这样的：
```

  Problem 1
    - Conclusion: don't install dingo/api v1.0.0-beta8
    - Conclusion: don't install dingo/api v1.0.0-beta7
    - Conclusion: don't install dingo/api v1.0.0-beta6
    - Conclusion: don't install dingo/api v1.0.0-beta5
    - Conclusion: don't install dingo/api v1.0.0-beta4
    - Conclusion: don't install dingo/api v1.0.0-beta3
    - Conclusion: remove laravel/framework v5.2.45
    - Installation request for phpdocumentor/reflection-docblock (locked at 4.3.0) -> satisfiable by phpdocumentor/reflecti              on-docblock[4.3.0].
    - Conclusion: don't install laravel/framework v5.2.45
    - dingo/api v1.0.0-beta1 requires illuminate/support 5.1.* -> satisfiable by illuminate/support[v5.1.1, v5.1.13, v5.1.1              6, v5.1.2, v5.1.20, v5.1.22, v5.1.25, v5.1.28, v5.1.30, v5.1.31, v5.1.41, v5.1.6, v5.1.8].
    - dingo/api v1.0.0-beta2 requires illuminate/support 5.1.* -> satisfiable by illuminate/support[v5.1.1, v5.1.13, v5.1.1              6, v5.1.2, v5.1.20, v5.1.22, v5.1.25, v5.1.28, v5.1.30, v5.1.31, v5.1.41, v5.1.6, v5.1.8].
    - don't install illuminate/support v5.1.1|don't install laravel/framework v5.2.45
    - don't install illuminate/support v5.1.13|don't install laravel/framework v5.2.45
    - don't install illuminate/support v5.1.16|don't install laravel/framework v5.2.45
    - don't install illuminate/support v5.1.2|don't install laravel/framework v5.2.45
    - don't install illuminate/support v5.1.20|don't install laravel/framework v5.2.45
    - don't install illuminate/support v5.1.22|don't install laravel/framework v5.2.45
    - don't install illuminate/support v5.1.25|don't install laravel/framework v5.2.45
    - don't install illuminate/support v5.1.28|don't install laravel/framework v5.2.45
    - don't install illuminate/support v5.1.30|don't install laravel/framework v5.2.45
    - don't install illuminate/support v5.1.31|don't install laravel/framework v5.2.45
    - don't install illuminate/support v5.1.41|don't install laravel/framework v5.2.45
    - don't install illuminate/support v5.1.6|don't install laravel/framework v5.2.45
    - don't install illuminate/support v5.1.8|don't install laravel/framework v5.2.45
    - Installation request for laravel/framework (locked at v5.2.45, required as 5.2.*) -> satisfiable by laravel/framework              [v5.2.45].
    - Installation request for dingo/api 1.0.x@dev -> satisfiable by dingo/api[v1.0.0-beta1, v1.0.0-beta2, v1.0.0-beta3, v1              .0.0-beta4, v1.0.0-beta5, v1.0.0-beta6, v1.0.0-beta7, v1.0.0-beta8].
```
一脸懵逼的我百度了一下，发现和我出现同样问题的人也不少，但只查到了一种解决方法，修改composer镜像源。
```
现在把它改了就可以了，这个在网上找到的其他镜像
【composer config -g repo.packagist composer https://packagist.phpcomposer.com 】

具体方法你可以看这里https://pkg.phpcomposer.com
```
但是我的镜像本来就是这个啊= =  
**另一种方法**是直接修改`composer.json`文件，再执行命令`compsoer update`。但是还是无效。  
最后在stackoverflow里搜了下找到了答案
```
// 现在composer.json文件里添加这个
phpdocumentor/reflection": "3.x@dev
// 然后
composer update
// 最后
composer require dingo/api:1.0.x@dev
```
**安装成功！**

