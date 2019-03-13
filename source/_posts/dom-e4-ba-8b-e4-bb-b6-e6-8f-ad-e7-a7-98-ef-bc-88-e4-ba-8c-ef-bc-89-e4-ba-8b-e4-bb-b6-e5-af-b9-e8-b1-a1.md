---
title: DOM事件揭秘（二）-事件对象
id: 160
categories:
  - JavaScript
date: 2016-05-30 22:09:05
tags:
---

###**事件对象**

什么是事件对象：在触发DOM上的事件时都会产生一个对象
<!--more-->
**事件对象event**

**1.DOM中的事件对象**

a.type属性，用于获取事件类型

b.target属性，用于获取事件目标（事件来自哪一个元素）

c.stopPropagation()方法 用于阻止事件冒泡

d.prevenrDefault()方法，阻止事件的默认行为
**2.IE中的事件对象**

a.type属性，用于获取事件类型
b.srcElement,用于获取事件目标event=event || window.eventvar ele=event.target || event.srcElement//解决IE兼容性c.cancelBubble 属性，用于阻止事件冒泡

true为阻止冒泡

fasle为不阻止冒泡

d.returnValue属性，阻止事件的默认行为  false为阻止
***
###**鼠标事件：**

鼠标事件都是在浏览器窗口中的特定位置上发生的。
这个位置信息保存在事件的clientX和clientY属性中。

所有浏览器都支持这两个属性，它们的值表示事件发生时鼠标指针在视口中的水平和垂直坐标。不包括页面滚动距离。
mousemove：当鼠标指针在元素内部移动时重复地触发

onmousedown：在用户按下鼠标任何按键时触发

mouseup：当用户释放鼠标按钮时触发