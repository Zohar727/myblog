---
title: JavaScript进阶-事件
id: 127
categories:
  - JavaScript
date: 2016-05-25 23:02:01
tags:
---

## 什么是事件

JavaScript 创建动态页面。事件是可以被 JavaScript 侦测到的行为。 网页中的每个元素都可以产生某些可以触发 JavaScript 函数或程序的事件。

比如说，当用户单击按钮或者提交表单数据时，就发生一个鼠标单击（onclick）事件，需要浏览器做出处理，返回给用户一个结果。

**主要事件表:**
<!--more-->
[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/b6641a67f5ce6fc8c5926a089f14ffac.jpeg)](http://img.mukewang.com/53e198540001b66404860353.jpg)
<span>**几个需要注意的事件：**</span><span></span>

## **光标聚焦事件（onfocus）**

**<span>当网页中的对象获得聚点时，执行onfocus调用的程序就会被执行。</span>**

**如下代码, 当将光标移到文本框内时，即焦点在文本框内，触发onfocus 事件，并调用函数message()。**

**[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/13d1d3bac7d2d059ebefc8feb8ac611a.jpeg)](http://img.mukewang.com/53e19337000113d108390338.jpg)**

## **失焦事件（onblur）**

**onblur事件与onfocus是相对事件，当光标离开当前获得聚焦对象的时候，触发onblur事件，同时执行被调用的程序。**

**<span>如下代码, 网页中有用户和密码两个文本框。当前光标在用户文本框内时（即焦点在文本框），在光标离开该文本框后（即失焦时），触发onblur事件，并调用函数message()。</span>**

**[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/dfe5c920dc83abd7cd62469347197890.jpeg)](http://img.mukewang.com/53e191d00001dfe508560326.jpg)**
**
**