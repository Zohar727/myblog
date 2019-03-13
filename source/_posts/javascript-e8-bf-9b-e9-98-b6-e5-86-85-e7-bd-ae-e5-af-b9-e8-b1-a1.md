---
title: JavaScript进阶-内置对象
tags:
  - post
id: 137
categories:
  - JavaScript
date: 2016-05-25 23:02:06
---

## 什么是对象

JavaScript 中的所有事物都是对象，如:字符串、数值、数组、函数等，每个对象带有**属性**和**方法**。

**访问对象属性的语法:**
<pre>objectName.propertyName

</pre>
<!--more-->
**访问对象的方法：**
<pre><span>objectName.methodName()

</span></pre>

## Date 日期对象

日期对象可以储存任意一个日期，并且可以精确到毫秒数（1/1000 秒）。
Date对象定义初始值：<pre>var d = new Date(2012, 10, 1);  <span>//2012年10月1日</span>
var d = new Date('Oct 1, 2012'); <span>//2012年10月1日

</span></pre>

Date对象中处理时间和日期的常用方法：

[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/ae7b4d650a537539bfa1b13aaf6d51b3.jpeg)](http://img.mukewang.com/555c650d0001ae7b04180297.jpg)
返回星期方法：getDay() 0~6 星期日~星期六

## String 字符串对象

## 返回指定位置的字符

**语法:**
<pre>stringObject.charAt(index)</pre>

**参数说明：**

<span>[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/cf1e3a0e2cf56a6fce6668504ba0067c.jpeg)](http://img.mukewang.com/53251a310001cf1e03370092.jpg)</span>
**注意****：**<span>1.字符串中第一个字符的下标是 0。最后一个字符的下标为字符串长度减一（string.length-1）。</span>

## 返回指定的字符串首次出现的位置

**语法**
<pre>stringObject.indexOf(substring, startpos)</pre>

<span>**参数说明：**</span>

[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/9febe7efbdd5d9918dd329d5a8a4a64e.jpeg)](http://img.mukewang.com/53853d4200019feb04920149.jpg)

## 字符串分割split()

split() 方法将字符串分割为字符串数组，并返回此数组。

### **语法：**
<pre>stringObject.split(separator,limit)</pre>

### **参数说明:**

**[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/4c040ed2e282f4337b5e774c02aa28b5.jpeg)](http://img.mukewang.com/532bee4800014c0404230108.jpg)**

**注意：**如果把空字符串 (&quot;&quot;) 用作 separator，那么 stringObject 中的每个字符之间都会被分割。

## 提取字符串substring()

substring() 方法用于提取字符串中介于两个指定下标之间的字符。

**语法:**
<pre>stringObject.substring(starPos,stopPos) </pre>

**参数说明:**

![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/51afc9eeef7fa60934634e4159f63ea4.jpeg)

**注意：**

1\. 返回的内容是star~stop-1，其长度为 stop 减start。

## 提取指定数目的字符substr()

<span>substr() 方法从字符串中提取从 startPos位置开始的指定数目的字符串。</span>

**语法:**
<pre>stringObject.substr(startPos,length)
</pre>

**参数说明:**

[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/105310b2d7b18d2b98a1b4367fa4a317.jpeg)](http://img.mukewang.com/532bf2e00001105305100098.jpg)

**注意：**如果参数startPos是负数，从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。

如果startPos为负数且绝对值大于字符串长度，startPos为0。

## Math对象

Math对象，提供对数据的数学计算。

Math 对象属性

<span><span lang="EN-US">[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/e7b59023562b18650bbe786b2c3b984f.jpeg)](http://img.mukewang.com/532fe7cf0001e7b505170269.jpg)</span></span>

Math 对象方法

[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/74db37145ec175a1c35eaf6598e20628.jpeg)](http://img.mukewang.com/532fe841000174db05160622.jpg)

## Array 数组对象

数组对象是一个对象的集合，里边的对象可以是不同类型的。数组的每一个成员对象都有一个“下标”，用来表示它在数组中的位置，是从零开始的

**数组方法：**

[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/deade660484daa0657e18562d6b09d93.jpeg)](http://img.mukewang.com/533295ab0001dead05190599.jpg)
几个重要的数组对象：

## 数组连接concat()

concat() 方法用于连接两个或多个数组。此方法返回一个新数组，不改变原来的数组。

**语法**
<pre>arrayObject.concat(array1,array2,...,arrayN)</pre><span>**注意:  **该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
</span>

## <span>指定分隔符连接数组元素join()</span>

<span>join()方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。</span>

<span>**语法：**</span>
<pre><span>arrayObject.join(分隔符) <span>分隔符为空则加入逗号连接数组元素
<span>
</span></span></span></pre>

## 颠倒数组元素顺序reverse()

reverse() 方法用于颠倒数组中元素的顺序。

**语法：**
<pre>arrayObject.reverse()</pre>

**注意：**该方法会改变原来的数组，而不会创建新的数组。
<span><span><span></span></span></span>

## 选定元素slice()  [类似于sbustring()]

slice() 方法可从已有的数组中返回选定的元素。

**语法**
<pre>arrayObject.slice(start,end) <span>start~end-1
<span>**注意：**该方法并不会修改数组，而是返回一个子数组。

</span></span></pre>

## <span>数组排序sort()  <span>important</span></span>

<span>sort()方法使数组中的元素按照一定的顺序排列。</span>

<span>语法:</span>
<pre><span>arrayObject.sort(方法函数)
注意：如果不写方法函数，默认按照unicode码进行排序
     如果指定方法函数，则按&lt;方法函数&gt;所指定的排序方法排序。</span></pre><pre>     myArray.sort(sortMethod);</pre>

  该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：<span> </span>

  若返回值&lt;=-1，则表示 A 在排序后的序列中出现在 B 之前。
  若返回值&gt;-1 &amp;&amp; &lt;1，则表示 A 和 B 具有相同的排序顺序。
  若返回值&gt;=1，则表示 A 在排序后的序列中出现在 B 之后。

function sortNum(a,b){

<span><span><span><span><span><span><span><span>return a-b;//升序</span></span></span></span></span></span></span></span>

<span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>return b-a;//降序</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>

<span><span><span><span><span><span><span><span>}</span></span></span></span></span></span></span></span>