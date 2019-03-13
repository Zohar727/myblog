---
title: JavaScript进阶-浏览器对象
id: 147
categories:
  - JavaScript
date: 2016-05-26 09:39:27
tags:
---

## window对象

window对象是BOM的核心，window对象指当前的浏览器窗口。

**window对象方法:**

**[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/a545f1f2042df7cc2ffe556206013bb7.jpeg)](http://img.mukewang.com/535483720001a54506670563.jpg)**

## JavaScript 计时器

在JavaScript中，我们可以在设定的时间间隔之后来执行代码，而不是在函数被调用后立即执行。
**计时器类型：**
一次性计时器：仅在指定的延迟时间之后触发一次。
间隔性触发计时器：每隔一定的时间间隔就触发一次。
**计时器方法：**
<!--more-->
[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/4fc5978040aeed8c71a9c36c75870951.jpeg)](http://img.mukewang.com/56976e1700014fc504090143.jpg)

## 计时器setInterval()

在执行时,从载入页面后每隔指定的时间执行代码。

**语法:**
<pre>setInterval(代码,交互时间);</pre>更新时间：

<span>var </span><span>time</span><span>=</span><span>new </span><span>Date</span><span>();</span>
<pre></pre><pre><span>var i</span><span>=</span><span>setInterval</span><span>(</span><span>&quot;</span><span>clock</span><span>()&quot;</span><span>,</span><span>5000</span><span>);

</span></pre>

## 取消计时器clearInterval()

clearInterval() 方法可取消由 setInterval() 设置的交互时间。

**语法：**
<pre>clearInterval(id_of_setInterval)</pre>
<span>setTimeout,clearTimeout用法与上相同

<span></span></span>

## History 对象

history对象记录了用户曾经浏览过的页面(URL)，并可以实现浏览器前进与后退相似导航的功能。

<span>注意:从窗口被打开的那一刻开始记录，每个浏览器窗口、每个标签页乃至每个框架，都有自己的history对象与特定的window对象关联。</span>

语法：
<pre>window.history.[属性|方法]</pre>

**注意：**window可以省略。

**History 对象属性**

[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/759ef6263cede6dee23082d27630dae0.jpeg)](http://img.mukewang.com/53548c030001759e05840068.jpg)

**History 对象方法**

**[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/2282862424405d891e27e43ffb7ff7d3.jpeg)](http://img.mukewang.com/53548c200001228206210123.jpg)**

back()相当于go(-1),**代码如下:**
<pre>window.history.go(-1);</pre>

## Location对象

location用于获取或设置窗体的URL，并且可以用于解析URL。

**语法:**
<pre>location.[属性|方法]</pre>

**location对象属性图示:**

[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/b269a216fb828af9d4fe51e00b08ed61.jpeg)](http://img.mukewang.com/53605c5a0001b26909900216.jpg)

**<span>location 对象属性：</span>**

**[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/c4ec1efdc1ad944f75c178a21035be37.jpeg)](http://img.mukewang.com/5354b1d00001c4ec06220271.jpg)**

**location 对象方法:**

**[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/6a2471631020a01ddd71345198c65967.jpeg)](http://img.mukewang.com/5354b1eb00016a2405170126.jpg)**

## Navigator对象

<span>Navigator 对象包含有关浏览器的信息，</span><span>通常用于检测浏览器与操作系统的版本。</span>

**对象属性:**

[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/428be259a99d39bcbc088da74b70ecaf.jpeg)](http://img.mukewang.com/5354cff70001428b06880190.jpg)

## screen对象

screen对象用于获取用户的屏幕信息。

**语法：**
<pre>window.screen.属性</pre>

**对象属性:**

**[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/a477008313ca9e559b80286f1aeee319.jpeg)](http://img.mukewang.com/5354d2810001a47706210213.jpg)**