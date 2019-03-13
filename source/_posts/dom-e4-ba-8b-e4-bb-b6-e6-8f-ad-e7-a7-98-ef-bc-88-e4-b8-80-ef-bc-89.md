---
title: DOM事件揭秘（一）
id: 157
categories:
  - JavaScript
date: 2016-05-30 11:20:08
tags:
---
##三个基本概念
###事件流：![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/49592637d5a91e5f29ce2d503da33a81.jpeg)
###事件冒泡：![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/381d8f294ba403fb47ec14fe346bb2fc.jpeg)
###事件捕获：![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/536931176ba70a3ace2d6b18f6b07ce7.jpeg)
***
**添加事件的方法：**
<!--more-->
1.HTML事件处理程序：js事件内嵌在html代码中

2.DOM0级处理程序：把一个函数赋值给一个事件的处理程序的属性（较传统的方式）（常用，简单，跨浏览器）3.DOM2级事件处理程序
***
**HTML事件的缺点：**
HTML代码和JS代码紧密的耦合在一起
***
**DMO2级事件处理程序：**

定义了两个方法：用于处理指定和删除事件处理程序的操作addEventListener()和removeEventListener()（必须把on去掉）

接受三个参数：要处理的事件名，作为事件处理程序的函数和布尔值

true表示在捕获阶段处理事件程序

false表示在冒泡阶段处理事件程序（常用，兼容性好）

**DOM0/DOM2级事件处理程序优点：**可以为一个按钮添加多个事件处理程序
***
**IE事件处理程序**（IE和opera支持）**：**

attachEvent()添加事件
detachEvent()删除事件（on要加上）

接受两个参数：要处理的事件名，作为事件处理程序的函数
***
**跨浏览器的事件处理程序：**最好封装在一个对象内！

示例程序：
<pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;dom事件处理程序&lt;/title&gt;
    &lt;script type="text/javascript"&gt;
        //HTML事件
        function showMes() {
            alert('这是HTML事件')
        }
        window.onload=function () {
            //DOM0级事件处理程序
            var btn2=document.getElementById('btn2');
            btn2.onclick=function () {
                alert('这是DOM0级事件处理程序！')
            }
            btn2.onclick=null;//删除事件
            //DOM2级事件处理程序
            function showMes2() {
                alert('这是DOM2级事件处理程序！')
            }
            var btn3=document.getElementById('btn3');
            btn3.addEventListener('click',showMes2,false);
            btn3.removeEventListener('click',showMes2,false);//删除事件
            //跨浏览器兼容
            var eventUtil={
                //添加句柄
                addHandler:function(element,type,handler) {    //type参数不带on
                    if(element.addEventListener){
                        element.addEventListener(type,handler,false);
                    }
                    else if(element.attachEvent){
                        element.attachEvent('on'+type,handler);//IE浏览器处理事件
                    }
                    else{
                        element['on'+type]=handler;
                    }
                }
                //删除句柄
                removeHandler:function(element,type,handler){
                    if(element.removeEventListener){
                        element.removeEventListener(type,handler,false);
                    }else if(element.detachEvent){
                        element.detachEvent('on'+type,handler);
                    }else{
                        element['on'+type]=null;
                    }
                }
            }
            eventUtil.addHandler(btn3,'clock',showMes2());

        }
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;input type="button" value="按钮1" onclick="showMes()"&gt;
&lt;input type="button" value="按钮2" id="btn2"&gt;
&lt;input type="button" value="按钮3" id="btn3"&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
**
**