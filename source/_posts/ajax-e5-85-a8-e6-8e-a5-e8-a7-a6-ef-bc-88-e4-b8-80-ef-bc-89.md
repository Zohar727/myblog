---
title: AJAX全接触（一）
id: 220
categories:
  - JavaScript
date: 2016-08-18 21:48:09
tags:
---

 ## 基本概念-同步与异步

![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/08/160b80e2b9c5ccba74a834a7fec0aa21.jpeg)
***
<!--more-->
## XMLHttpRequest对象的创建
![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/08/c48dcccdc2393ed4fd2c57c886269f3c.jpeg)
<span>
***
## XMLHttpRequest对象发送http请求

<span>基本方法：</span></span>

`open(method,url,async) method 方法 url 地址 async 是否异步处理
send(string)`

例：
`.open("send","create.php",true);
request.setRequestHeader("content-type","application/x-www-form-urlencoded");//必须写在open和send中间
requesr.send("name=张三&amp;sex=男");`

***
## XMLHttpRequest对象取得响应

###基本方法
![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/08/bcc2b4e6d1b9e1d339913f772445c8ea.jpeg)

![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/08/da9a34bcc1d7534f26c4202eafc9f187.jpeg)

### readyState属性变化监听：
** 使用onreadystatechange方法 **
***
## 基本概念-HTTP请求

![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/08/4737c3e209a7aae5428159195662d02a.jpeg)

## HTTP请求组成


![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/08/1e919865dc411a03d38fa1fe18efeeef.jpeg)

### GET/POST请求

<span>
GET（一般做查询，获取）：1.一般用于获取信息</span>

          2.使用URL传递参数</span>

          3.对所发送信息的数量有限时，一般在2000个字符</span>

          4.所有参数都在URL中，请求数据对所有人可见，不太安全</span>

          5.通常来说是安全的</span>

POST（一般做修改删除等）:
            1.一般用于修改服务器上的资源

            2.对所发送的信息其他人不可见，数量无限制</span>
***
## HTTP响应组成

![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/08/142c0200a4674b424b6ff39b14f7c3ac.jpeg)

## HTTP响应状态码（request.status)

![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/08/e039cd4225cc6614e2d457a66276869e.jpeg)