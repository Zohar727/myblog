---
title: 认识DOM
id: 77
categories:
  - JavaScript
date: 2016-04-11 12:44:21
tags:
---

文档对象模型**DOM（Document Object Model）**定义访问和处理HTML文档的标准方法。DOM 将HTML文档呈现为带有元素、属性和文本的树结构（节点树）。![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/04/dd8df12cedee93e3f4553d0e3c92bae5.jpeg)

![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/04/064c74e3cd376aefecc46bdab02763c4.jpeg)

### 改变 HTML 样式

HTML DOM 允许 JavaScript 改变 HTML 元素的样式。如何改变 HTML 元素的样式呢？
<!--more-->
**语法:**

<pre>**Object.style.property=new style;**</pre>
**注意:**Object是获取的元素对象，如通过document.getElementById("id")获取的元素。

**基本属性表（property）:**

**[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/04/dd6c673f1eadfb69797fed123d644e2c.jpeg)](http://img.mukewang.com/52e4d4240001dd6c04850229.jpg)**

**注意:**该表只是一小部分CSS样式属性，其它样式也可以通过该方法设置和修改。

### 显示和隐藏（display属性）

网页中经常会看到显示和隐藏的效果，可通过display属性来设置。

**语法：**

<pre>Object.style.**display** = value</pre>

**value取值:**

**[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/04/79da77cd3e18a810267c1d61a80a4ebb.jpeg)](http://img.mukewang.com/52e4dba5000179da04110095.jpg)**

### 控制类名（className 属性）

className 属性设置或返回元素的class 属性。

**语法：**

<pre>object.className = classname**</pre>

**作用:**

1.获取元素的class 属性

2\. 为网页内的某个元素指定一个css样式来更改该元素的外观