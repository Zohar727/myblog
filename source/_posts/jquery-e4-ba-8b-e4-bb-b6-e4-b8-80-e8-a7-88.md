---
title: jQuery事件一览
id: 203
categories:
  - JavaScript
date: 2016-07-14 16:08:12
tags:
---

## 鼠标事件

## **click与dbclick事件**

**<strong><strong>方法一：$ele.click()**
</strong></strong>
<!--more-->
绑定$ele元素，不带任何参数一般是用来指定触发一个事件，用的比较少
<pre>&lt;div id="test"&gt;点击触发&lt;div&gt;
$("ele").click(function(){
    alert('触发指定事件')
})
$("#text").click(function(){
     $("ele").click()  //手动指定触发事件 
});</pre>
**<strong><strong><strong>方法二：$ele.click( handler(eventObject) )**
</strong></strong></strong>
<pre>&lt;div id="test"&gt;点击触发&lt;div&gt;
$("#text").click(function() {
    //this指向 div元素
});</pre>
**<strong><strong><strong><strong>方法三：$ele.click( [eventData ], handler(eventObject) )**
</strong></strong></strong></strong>

使用与方法二一致，不过可以接受一个数据参数，这样的处理是为了解决不同作用域下数据传递的问题
<pre>&lt;div id="test"&gt;点击触发&lt;div&gt;
$("#text").click(11111,function(e) {
    //this指向 div元素
    //e.date  =&gt; 11111 传递数据
});</pre>
&nbsp;

## **<strong><strong><strong><strong><strong><strong>dbclick事件**</strong></strong></strong></strong></strong></strong>

**<strong><strong><strong><strong><strong>与click类似，只是它是双击**</strong></strong></strong></strong></strong>

## **<strong><strong><strong><strong><strong><strong>mousedown与mouseup事件**</strong></strong></strong></strong></strong></strong>

**<strong><strong><strong><strong><strong><strong>用法同上**</strong></strong></strong></strong></strong></strong>注意：该事件event对象有个which值，敲击鼠标左键which的值是1，敲击鼠标中键which的值是2，敲击鼠标右键which的值是3

*   mousedown强调是按下触发
mouseup强调是松手触发

## mousemove事件

鼠标移动时触发用法同上注意：该事件event对象附带pageX，pageY值，表示移动的坐标

## mouseover与mouseout事件

鼠标移入移出时触发用法同上

## mouseenter与mouseleave事件（相当于在封装的时候对onmouseover进行阻止冒泡）

鼠标移入移出时触发**mouseenter事件和mouseover的区别：**
<pre>mouseenter，mouseover事件只会在绑定它的元素上被调用，而不会在后代节点上被触发
mouseover，mouseout事件会冒泡至祖先</pre>

## focusin事件

用法同上
类似于鼠标点击事件

## focusout事件

用法同上
鼠标失去焦点时触发

## hover事件（移入移出都触发）

<pre>$(selector).hover(handlerIn, handlerOut)</pre>

*   handlerIn(eventObject)：当鼠标指针进入元素时触发执行的事件函数
*   handlerOut(eventObject)：当鼠标指针离开元素时触发执行的事件函数
&nbsp;

## blur与foucus事件

不支持冒泡处理！focusin，focusout事件支持冒泡！

## change事件

**input元素**
<pre>监听value值的变化，当有改变时，失去焦点后触发change事件</pre>
**select元素**
<pre>对于下拉选择框，复选框和单选按钮，当用户用鼠标作出选择，该事件立即触发</pre>
**textarea元素**
<pre>多行文本输入框，当用户用鼠标点击时，该事件立即触发</pre>

## select事件

当 textarea 或文本类型的 input 元素中的文本被选择时，会发生 select 事件。
用法同click事件

## submit事件

提交表单时触发用法同上

通过在&lt;form&gt;元素上绑定submit事件，开发者可以监听到用户的提交表单的的行为

具体能触发submit事件的行为：

*   &lt;input type="submit"&gt;
*   &lt;input type="image"&gt;
*   &lt;button type="submit"&gt;
*   当某些表单元素获取焦点时，敲击Enter（回车键）
上述这些操作下，都可以截获submit事件。

这里需要特别注意：
<pre>form元素是有默认提交表单的行为，如果通过submit处理的话，需要禁止浏览器的这个**默认行为(页面跳转）**
传统的方式是调用事件对象  e.preventDefault() 来处理， jQuery中可以直接在函数中最后结尾return false即可</pre>
jQuery处理如下：
<pre>$("#target").submit(function(data) { 
   return false; //阻止默认行为，提交表单
});</pre>
&nbsp;

## keydown()与keyup()事件

用法同上e.target.value 获取输入值

**注意：**

*   keydown是在键盘按下就会触发
*   keyup是在键盘松手就会触发

## keypress()事件

用法同上用来解决keydown事件每次捕获的值是上一次的值这个缺点

keypress事件与keydown和keyup的主要区别

*   对中文输入法支持不好，无法响应中文输入
*   无法响应系统功能键（如delete，backspace）
*   **由于前面两个限制，keyCode与keydown和keyup不是很一致**
总而言之，

KeyPress主要用来接收字母、数字等ANSI字符，而 KeyDown 和 KeyUP 事件过程可以处理任何不被 KeyPress 识别的击键。诸如：功能键（F1-F12）、编辑键、定位键以及任何这些键和键盘换档键的组合等。

&nbsp;
&nbsp;

## on()的多事件绑定

jQuery on()方法是官方推荐的绑定事件的一个方法。

**基本用法：****.on( events [, selector ] [, data ] )**

**最常见的给元素绑定一个点击事件，对比下一下快捷方式与on方式的不同**
<pre>**$("#elem").click(function(){})  //快捷方式
$("#elem").on('click',function(){}) //on方式**</pre>
**<strong>多个事件绑定同一个函数**</strong>
<pre>** $("#elem").on("mouseover mouseout",function(){ });**</pre>
**通过空格分离，传递不同的事件名，可以同时绑定多个事件**

**<strong>多个事件绑定不同函数**</strong>
<pre>**$("#elem").on({
    mouseover:function(){},  
    mouseout:function(){},
});**</pre>
**通过逗号分离，传递不同的事件名，可以同时绑定多个事件，每一个事件执行自己的回调方法**

**<strong>将数据传递到处理程序**</strong>
<pre>**function greet( event ) {
  alert( "Hello " + event.data.name ); //Hello 慕课网
}
$( "button" ).on( "click", {
  name: "慕课网"
}, greet );**</pre>
**可以通过第二参数（对象），当一个事件被触发时，要传递给事件处理函数的**

**
**

## on()的高级用法

针对自己处理机制中，不仅有on方法，还有根据on演变出来的live方法(1.7后去掉了)，delegate方法等等。这些方法的底层实现部分 还是on方法，这是利用了on的另一个事件机制委托的机制衍变而来的

**委托机制**
<pre>.on( events [, selector ] [, data ], handler(eventObject) )</pre>
在on的第二参数中提供了一个selector选择器，简单的来描述下

参考下面3层结构
<pre>&lt;div class="left"&gt;
    &lt;p class="aaron"&gt;
        &lt;a&gt;目标节点&lt;/a&gt; //点击在这个元素上
    &lt;/p&gt;
&lt;/div&gt;</pre>
给出如下代码：
<pre>$("div").on("click","p",fn)</pre>
**事件绑定在最上层div元素上，当用户触发在a元素上，事件将往上冒泡，一直会冒泡在div元素上。如果提供了第二参数，那么事件在往上冒泡的过程中遇到了选择器匹配的元素，将会触发事件回调函数**

## 卸载事件off()方法

用法与on相同，可卸载一个，可同时卸载多个，并可以有回调函数特殊用法：快捷删除所有事件，这里不需要传递事件名了，节点上绑定的所有事件讲全部销毁
<pre>$("elem").off()</pre>
&nbsp;

## jQuery事件对象的作用

事件对象是用来记录一些事件发生时的相关信息的对象。事件对象只有事件发生时才会产生，并且只能是事件处理函数内部访问，在所有事件处理函数运行结束后，事件对象就被销毁

**event.target
**
target 属性可以是注册事件时的元素，或者它的子元素。通常用于比较 event.target 和 this 来确定事件是不是由于冒泡而触发的。经常用于事件冒泡时处理事件委托

简单来说：event.target代表当前触发事件的元素，可以通过当前元素对象的一系列属性来判断是不是我们想要的元素**event.type：获取事件的类型****event.pageX 和 event.pageY：获取鼠标当前相对于页面的坐标****event.preventDefault() 方法：阻止默认行为****event.stopPropagation() 方法：阻止事件冒泡****event.which：获取在鼠标单击时，单击的是鼠标的哪个键****event.currentTarget : 在事件冒泡过程中的当前DOM元素****
**

**this和event.target的区别：**

js中事件是会冒泡的，所以this是可以变化的，但event.target不会变化，它永远是直接接受事件的目标DOM元素；

**.this和event.target都是dom对象**

**
****自定义事件****trigger事件****我的理解就是在on事件里再叠加执行一个事件**
<pre>**简单来讲就是：根据绑定到匹配元素的给定的事件类型执行所有的处理程序和行为**</pre>
trigger除了能够触发浏览器事件，同时还支持自定义事件，并且自定义时间还支持传递参数$('#elem').on('Aaron', function(event,arg1,arg2) {  alert("自触自定义时间") });$('#elem').trigger('Aaron',['参数1','参数2'])
**triggerHandler事件
（不会冒泡）**

triggerHandler与trigger的用法是一样的，重点看不同之处：

*   triggerHandler不会触发浏览器的默认行为，.triggerHandler( "submit" )将不会调用表单上的.submit()
*   .trigger() 会影响所有与 jQuery 对象相匹配的元素，而 .triggerHandler() 仅影响第一个匹配到的元素
*   使用 .triggerHandler() 触发的事件，并不会在 DOM 树中向上冒泡。 如果它们不是由目标元素直接触发的，那么它就不会进行任何处理
*   与普通的方法返回 jQuery 对象(这样就能够使用链式用法)相反，.triggerHandler() 返回最后一个处理的事件的返回值。如果没有触发任何事件，会返回 undefined
**
**![](http://www.hubwiz.com/course/54f3ba65e564e50cfccbad4b/img/0001.png)
[player autoplay="1"]