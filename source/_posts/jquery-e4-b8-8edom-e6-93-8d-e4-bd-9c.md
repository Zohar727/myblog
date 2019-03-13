---
title: jQuery与DOM操作
id: 194
categories:
  - JavaScript
date: 2016-07-13 10:39:03
tags:
---

## jQuery节点创建与属性的处理

保留HTML的书写结构，简单方便如：
<pre>$("&lt;div id='test' class='aaron'&gt;我是文本节点&lt;/div&gt;")</pre>
<!--more-->
## 内部插入append()与appendTo()（父子节点之间的关系处理，在尾部追加）

![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/07/7b41ef3444fbcd0820e390f8e8f1723b.jpeg)

append：这个操作与对指定的元素执行原生的appendChild方法，将它们添加到文档中的情况类似。

appendTo：实际上，使用这个方法是颠倒了常规的$(A).append(B)的操作，即不是把B追加到A中，而是把A追加到B中。

简单的总结就是：

.append()和.appendTo()两种方法功能相同，主要的不同是语法——内容和目标的位置不同

<pre>append()前面是要选择的对象，后面是要在对象内插入的元素内容（对象，内容）
appendTo()前面是要插入的元素内容，而后面是要选择的对象（内容，对象）</pre>

## 内部插入prepend()与prependTo()（父子节点之间的关系处理，在前面追加）

用法与上面想似，只是追加在节点之前；

这里总结下内部操作四个方法的区别：

*   append()向每个匹配的元素内部追加内容
*   prepend()向每个匹配的元素内部前置内容
*   appendTo()把所有匹配的元素追加到另一个指定元素的集合中
*   prependTo()把所有匹配的元素前置到另一个指定的元素集合中

## 外部插入after()，insertAfter()与before()，insertBefore()（兄弟节点之间的关系处理）

![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/07/8e34dde335c37990286b239d23d4d6f3.jpeg)

注意点：

*   after向元素的后边添加html代码，如果元素后面有元素了，那将后面的元素后移，然后将html代码插入
*   before向元素的前边添加html代码，如果元素前面有元素了，那将前面的元素前移，然后将html代码插入
*   after，before 2个方法都支持多个参数传递after(div1,div2,....)
*   insertAfter,insertBefore不支持多参数
总结：采用**（对象，内容）**结构的方法：append()prepend()after()before()

采用**（内容，对象）**结构的方法：appendTo()prependTo()insertAfter()insertBefore()

## empty()的基本用法

移除匹配元素的子节点，包括**元素的文本**

## remove()的有参用法和无参用法

remove会移除包括本身的所有节点，**同时也会移除元素内部的一切，包括绑定的事件及与该元素相关的jQuery数据。（防止内存泄漏，绑定事件不用时，一定要删除）
**

**<strong><strong> **</strong></strong>

**<strong>remove表达式参数：**</strong>

**remove比empty好用的地方就是可以传递一个选择器表达式用来过滤将被移除的匹配元素集合，可以选择性的删除指定的节点**

**我们可以通过$()选择一组相同的元素，然后通过remove（）传递筛选的规则，从而这样处理**

**对比右边的代码区域，我们可以通过类似于这样处理**

<pre>**$("p").filter(":contains('3')").remove()**</pre>

## empty和remove区别

要用到移除指定元素的时候，jQuery提供了empty()与remove([expr])二个方法，两个都是删除元素，但是两者还是有区别

**empty****方法**

*   严格地讲，empty()方法并不是删除节点，而是清空节点，它能清空元素中的所有后代节点
*   empty不能删除自己本身这个节点

**remove****方法**

*   该节点与该节点所包含的所有后代节点将同时被删除
*   提供传递一个筛选的表达式，用来指定删除选中合集中的元素

## 保留数据的删除操作detach()

detach从字面上就很容易理解。让一个web元素托管。即从当前页面中移除该元素，但保留这个元素的内存模型对象。

## detach()和remove()区别

remove()和detach()可能就是其中的一个，可能remove()我们用得比较多，而detach()就可能会很少了

 通过一张对比表来解释2个方法之间的不同

<table border="1" width="562" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td colspan="1" rowspan="1">

方法名

</td>
<td colspan="1" rowspan="1">

参数

</td>
<td colspan="1" rowspan="1">

事件及数据是否也被移除

</td>
<td colspan="1" rowspan="1">

元素自身是否被移除

</td>
</tr>
<tr>
<td colspan="1" rowspan="1">

remove

</td>
<td colspan="1" rowspan="1">

支持选择器表达

</td>
<td colspan="1" rowspan="1">

是

</td>
<td colspan="1" rowspan="1">

是（无参数时），有参数时要根据参数所涉及的范围

</td>
</tr>
<tr>
<td colspan="1" rowspan="1">

detach

</td>
<td colspan="1" rowspan="1">

参数同remove

</td>
<td colspan="1" rowspan="1">

否

</td>
<td colspan="1" rowspan="1">

情况同remove

</td>
</tr>
</tbody>
</table>

**remove****：**移除节点

*   无参数，移除自身整个节点以及该节点的内部的所有节点，包括节点上事件与数据
*   有参数，移除筛选出的节点以及该节点的内部的所有节点，包括节点上事件与数据

**detach****：**移除节点

*   移除的处理与remove一致
*   与remove()不同的是，所有绑定的事件、附加的数据等都会保留下来
*   例如：$("p").detach()这一句会移除对象，仅仅是显示效果没有了。但是内存中还是存在的。当你append之后，又重新回到了文档流中。就又显示出来了。

## DOM拷贝clone()

clone（） 克隆结构
clone(true) 结构，数据，事件都保留

## DOM替换replaceWith()和replaceAll()

**.replaceWith( newContent )**：用提供的内容替换集合中所有匹配的元素并且返回被删除元素的集合

简单来说：用$()选择节点A，调用replaceWith方法，传入一个新的内容B（HTML字符串，DOM元素，或者jQuery对象）用来替换选中的节点A

**.replaceAll( target ) ****：**用集合的匹配元素替换每个目标元素

.replaceAll()和.replaceWith()功能类似，但是目标和源相反，用上述的HTML结构，我们用replaceAll处理

**replaceWith（对象，内容）**
**<strong>replaceAll （内容，对象）**
</strong>**<strong>
**</strong>

## **<strong>DOM包裹wrap()方法,wrapAll()方法，wrapInner()方法 （给节点添加父元素）**</strong>

## **<strong>如果要将元素用其他元素包裹起来，也就是给它增加一个父元素，针对这样的处理，JQuery提供了一个wrap方法**</strong>

**.wrap( wrappingElement )**：在集合中匹配的每个元素周围包裹一个HTML结构
<pre>$('p').wrap('&lt;div&gt;&lt;/div&gt;')</pre>
**.wrap( function ) ****：**一个回调函数，返回用于包裹匹配元素的 HTML 内容或 jQuery 对象
<pre>$('p').wrap(function() {
    return '&lt;div&gt;&lt;div/&gt;';   //与第一种类似，只是写法不一样
})</pre>
wrap是针对单个dom元素处理，如果要将**集****合中**的元素用其他元素包裹起来，也就是给他们增加一个父元素，针对这样的处理，JQuery提供了一个**wrapAll方法**
<pre>如果要将合集中的元素内部所有的子元素用其他元素包裹起来，并当作指定元素的子元素，针对这样的处理，JQuery提供了一个**wrapInner方法**</pre>
&nbsp;

## **<strong><strong>wrap()方法,wrapAll()方法，wrapInner()方法**</strong></strong>**三者区别详解：**

<pre lang="html" line="1">

*   苹果
*   橘子
*   菠萝

1、$("li").wrap("<div></div>");
每一个选择器都添加

  <div>*   苹果
</div>
  <div>*   橘子
</div>
  <div>*   菠萝

2、$("li").wrapAll("<div></div>");
在所有选中的选择器最外面添加

  <div>*   苹果
*   橘子
*   菠萝

3、$("li").wrapInner("<div></div>");
为选择器的内容添加

*   <div>苹果</div>
*   ><div>橘子</div>
*   ><div>菠萝</div>
</pre>

## DOM包裹unwrap()方法（删除父元素）

用法与wrap（）类似

## DOM包裹wrapAll()方法（给所有匹配元素分别添加父元素）

wrap是针对单个dom元素处理，如果要将**集****合中**的元素用其他元素包裹起来，也就是给他们增加一个父元素，针对这样的处理，JQuery提供了一个wrapAll方法

用法与wrap（）类似

## DOM包裹wrapInner()方法

如果要将合集中的元素内部所有的子元素用其他元素包裹起来，并当作指定元素的子元素，针对这样的处理，JQuery提供了一个wrapInner方法
<pre>用法与wrap（）类似</pre>
**<strong>![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/07/3f676016f6bdaafa874603013ebff68f.jpeg)
**</strong>