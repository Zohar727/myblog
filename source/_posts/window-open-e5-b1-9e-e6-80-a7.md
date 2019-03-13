---
title: window.open属性
id: 74
categories:
  - JavaScript
date: 2016-04-11 12:44:19
tags:
---

## 打开新窗口（window.open）

open() <span>方法可以查找一个已经存在或者新建的浏览器窗口</span>。

**语法：**
<pre>window.open([URL], [窗口名称], [参数字符串])</pre>
<!--more-->
**参数说明:**
<pre>**URL：**可选参数，在窗口中要显示网页的网址或路径。如果省略这个参数，或者它的值是空字符串，那么窗口就不显示任何文档。
**窗口名称：**<span>可选参数，被打开窗口的名称。
    </span>1.该名称由字母、数字和下划线字符组成。
    2.&quot;_top&quot;、&quot;_blank&quot;、&quot;_selft&quot;具有特殊意义的名称。
       _blank：在新窗口显示目标网页
       _self：在当前窗口显示目标网页
       _top：框架网页中在上部窗口中显示目标网页
    3.<span>相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。
    </span><span>4.</span><span>name 不能包含有空格。
</span>**参数字符串：**<span>可选参数，</span><span>设置窗口参数，各参数用逗号隔开。
参数表：
</span></pre>![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/04/3d6afa3bde25b2083c680cc5784fc9f6.jpeg)

**<span>window.open('http://www.imooc.com','_blank','width=600,height=200,top=100,left=0')</span>**