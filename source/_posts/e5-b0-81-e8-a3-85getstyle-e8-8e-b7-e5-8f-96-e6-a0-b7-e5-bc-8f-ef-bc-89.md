---
title: 封装getStyle(获取样式）
id: 165
categories:
  - JavaScript
date: 2016-06-01 16:39:58
tags:
---

<span>当offset出现某些bug时，可使用getStyle函数调用获取样式！</span>
<!--more-->
<pre><span>script type=&quot;text/javascript&quot;&gt;</span>
<span>//哪个元素</span>
<span>//哪个样式</span>

<span>function getStyle(obj, attr)</span>
<span>{</span>
<span> if(obj.currentStyle)</span>
<span> {</span>
<span>  return obj.currentStyle[attr];//IE兼容处理</span>
<span> }</span>
<span> else</span>
<span> {</span>
<span>  return getComputedStyle(obj, false)[attr];</span>
<span> }</span>
<span>}</span>

<span>window.onload=function ()</span>
<span>{</span>
<span> var oDiv=document.getElementById('div1');</span>
<span> </span>
<span> alert(getStyle(oDiv, 'backgroundColor'));</span>
<span>}</span>
<span>&lt;/script&gt;</span>
<span>&lt;div id=&quot;div1&quot;&gt;&lt;/div&gt;</span></pre>

<span>
</span>
<pre><span>//opacity 设置透明度
function setOpacity(elem, value) {
	elem.filters ? elem.style.filter = 'alpha(opacity=' + value + ')' : elem.style.opacity = value / 100;
}</span></pre>