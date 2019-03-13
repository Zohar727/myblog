---
title: jQuery动画
id: 211
categories:
  - JavaScript
date: 2016-07-27 21:54:15
tags:
---

**

## 隐藏元素的hide方法
**
$elem.hide()提供参数：

.hide( options ) 当提供hide方法一个参数时，.hide()成为一个动画方法。.hide()方法将为匹配元素的宽度，高度，以及不透明度，同时进行动画操作
<!--more-->
快捷参数：

.hide(fast / slow) 这是一个动画设置的快捷方式，'fast' 和 'slow' 分别代表200和600毫秒的延时，就是元素会执行200/600毫秒的动画后在隐藏默认400ms

**

## 显示元素的show方法
**css中有display:none属性，同时也有display:block，所以jQuery同样提供了与hide相反的show方法

方法的使用几乎与hide是一致的，hide是让元素显示到隐藏，show则是相反，让元素从隐藏到显示

看一段代码：使用上一致，结果相反

$('elem').hide(3000).show(3000) 让元素执行3秒的隐藏动画，然后执行3秒的显示动画。

show与hide方法是非常常用的，但是一般很少会基于这2个属性执行动画，大多情况下还是直接操作元素的显示与隐藏为主

**

## 显示与隐藏切换toggle方法
**基本的操作：toggle(); 这是最基本的操作，处理元素显示或者隐藏，因为不带参数，所以没有动画。通过改变CSS的display属性，匹配的元素将被立即显示或隐藏，没有动画。

提供参数：.toggle( [duration ] [, complete ] ) 同样的提供了时间、还有动画结束的回调。在参数对应的时间内，元素会发生显示/隐藏的改变，在改变的过程中会把元素的高、宽、不透明度进行一系列动画。这个元素其实就是show与hide的方法

直接定位：.toggle(display) 直接提供一个参数，指定要改变的元素的最终效果

<span>

## 下拉动画slideDown

</span>.slideDown( [duration ] [, complete ] )

<span>

## 上卷动画slideUp

</span>用法同上

<span>

## 上卷下拉切换slideToggle

</span>用法同上
<span>
  **

**</span>
<span>

## 淡出动画fadeOut

</span>
<span>用法同上</span>

<span>

## 淡入动画fadeIn

</span>
<span>用法同上</span>
<span>
  **

**
</span>
<span>

## 淡入淡出切换fadeToggle

</span>
<span>用法同上</span>
<span>
  **

**
</span>
<span>

## 淡入效果fadeTo（可设置透明度变化区间）

</span>.fadeTo( duration, opacity [, complete ] )

<span>

## toggle与slideToggle以及fadeToggle的比较

</span>toggle、sildeToggle以及fadeToggle的区别： toggle：切换显示与隐藏效果 sildeToggle：切换上下拉卷滚效果 fadeToggle：切换淡入淡出效果

<span>

## 复杂动画使用animate实现

</span>
语法：
<pre lang="javascript" > .animate( properties [, duration ] [, easing ] [, complete ] ) .animate( properties, options )</pre>

参数分解：
**

**
**properties：**一个或多个css属性的键值对所构成的Object对象。要特别注意所有用于动画的属性必须是数字的，除非另有说明；这些属性如果不是数字的将不能使用基本的jQuery功能。比如常见的，border、margin、padding、width、height、font、left、top、right、bottom、wordSpacing等等这些都是能产生动画效果的。background-color很明显不可以，因为参数是red或者GBG这样的值，非常用插件，否则正常情况下是不能只能动画效果的。注意，CSS 样式使用 DOM 名称（比如 "fontSize"）来设置，而非 CSS 名称（比如 "font-size"）。

特别注意单位，属性值的单位像素（px）,除非另有说明。单位em 和 %需要指定使

<pre lang="javascript"> .animate({   left: 50,   width: '50px'   opacity: 'show',   fontSize: "10em", }, 500);</pre> 除了定义数值，每个属性能使用'show', 'hide', 和 'toggle'。这些快捷方式允许定制隐藏和显示动画用来控制元素的显示或隐藏

<pre lang="javascript">.animate({   width: "toggle" });</pre> 如果提供一个以+= 或 -=开始的值，那么目标值就是以这个属性的当前值加上或者减去给定的数字来计算的 .animate({   left: '+50px' }, "slow");

**duration时间**

动画执行的时间，持续时间是以毫秒为单位的；值越大表示动画执行的越慢，不是越快。还可以提供'fast' 和 'slow'字符串，分别表示持续时间为200 和 600毫秒。

**easing动画运动的算法**

jQuery库中是默认的时调用 swing。在一个恒定的速度进行动画，如果需要其他的动画算法，请查找相关的插件

**complete回调**

动画完成时执行的函数，这个可以保证当前动画确定完成后发会触发

<span>
  **<pre lang="javascript">.animate( properties, options )</pre>**
</span>animate在执行动画中，如果需要观察动画的一些执行情况，或者在动画进行中的某一时刻进行一些其他处理，我们可以通过animate的提供第二种设置语法，传递一个对象参数，可以拿到动画执行状态一些通知

<pre lang="javascript">.animate( properties, options )</pre>

**options参数**

duration - 设置动画执行的时间

easing - 规定要使用的 easing 函数，过渡使用哪种缓动函数

step：规定每个动画的每一步完成之后要执行的函数

progress：每一次动画调用的时候会执行这个回调，就是一个进度的概念

complete：动画完成回调

其中最关键的一点就是：

**如果多个元素执行动画，回调将在每个匹配的元素上执行一次，不是作为整个动画执行一次**

<span>

## 停止动画stop

</span>语法：<pre lang="javascript"> .stop( [clearQueue ] [, jumpToEnd ] ) .stop( [queue ] [, clearQueue ] [, jumpToEnd ] )</pre>

<span>1\. stop() 停止当前动画</span>

<span>2\. stop(true) 停止当前执行动画元素的所有动画行为</span>
<span>
  <span>
    <span>3. stop(true,true)  停止当前执行动画元素的所有动画行为，并且直接到达当前动画最后一帧</span></span>
</span>