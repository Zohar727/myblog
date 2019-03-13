---
title: 我的CSS学习笔记-浮动与定位
id: 11
categories:
  - CSS相关
date: 2016-04-10 17:12:40
tags:
---

<span style="font-size: 18px;">float属性</span>
<pre lang="css" line="1">float: left;
float: right;
float: none;
/* Global values */
float: inherit;
float: initial;
float: unset;</pre>
</dd><dt>left</dt><dd>表明元素必须漂浮在其所在的块容器左侧的关键字。</dd><dt>right</dt><dd>表明元素必须漂浮在其所在的块容器右侧的关键字。</dd><dt>none</dt><dd>表明元素不得进行浮动的关键字。</dd></dl></div>
<div></div>
#### 浮动元素是如何定位的
<div>
<!--more-->
正如我们前面提到的那样，当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移到碰到了所处的容器的边框，或者碰到了<span style="color: #ff0000;">_另外一个浮动的元素_。</span>

**<span style="font-size: 18px;">清除浮动（两种方法）</span>**

</div>
<div>
<pre lang="css" line="1">h2.secondHeading { clear: both; }
p.withRedBoxes { overflow: hidden; height: auto; }</pre>
</div>
**<span style="line-height: 22px; color: #383838; font-family: Monaco, Courier, monospace; font-size: 18px; white-space: pre;">position属性</span>**
<pre lang="css" line="1">/* 关键字值 */
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;
/* 全局值 */
position: inherit;
position：initial;
position: unset;</pre>
<div>默认属性：static</div>
<div>相对定位：relative 没有脱离文档流，相对本来的位置偏移</div>
<div>绝对定位：absolute 脱离文档流，相对上一个非static属性的父级元素进行相对偏移</div>
<div>固定定位：fixed 脱离文档流，相对于整个网页的偏移</div>
<div>粘性定位：sticky（css3) 这个是relative与fixed的结合，当目标在用户屏幕内，则是relative，当脱离屏幕，便是fixed_<span style="color: #ff0000;">类似于网页顶栏总保持在最顶端</span>_</div>