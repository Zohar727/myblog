---
title: JavaScript进阶-DOM对象
id: 153
categories:
  - JavaScript
date: 2016-05-29 19:21:19
tags:
---

## 认识DOM

文档对象模型DOM（Document Object Model）定义访问和处理HTML文档的标准方法。DOM 将HTML文档呈现为带有元素、属性和文本的树结构（节点树）。

**HTML**文档可以说由节点构成的集合，DOM节点有:

**1\. ***元素节点：*上图中&lt;html&gt;、&lt;body&gt;、&lt;p&gt;等都是元素节点，即标签。

**2\. ***文本节点:*向用户展示的内容，如&lt;li&gt;...&lt;/li&gt;中的JavaScript、DOM、CSS等文本。

**3\. ***属性节点:*元素属性，如&lt;a&gt;标签的链接属性href=&quot;http://www.imooc.com&quot;。
<!--more-->
**节点属性:**

[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/17ee1393d605d81e41dd21336b62d6cc.jpeg)](http://img.mukewang.com/5375c953000117ee05240129.jpg)

**遍历节点树:**

[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/7d29261ad338dbe42f3369c1dd01e499.jpeg)](http://img.mukewang.com/53f17a6400017d2905230219.jpg)

**以上图ul为例，它的父级节点body,它的子节点3个li,它的兄弟结点h2、P。**

**DOM操作:**

[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/52db4838f205d5073ad63d1d88a23008.jpeg)](http://img.mukewang.com/538d29da000152db05360278.jpg)

**注意:**前两个是document方法。

## getElementsByName()方法

返回带有指定名称的节点对象的集合。

**语法：**
<pre>document.getElementsByName(name)</pre>

与getElementById() 方法不同的是，通过元素的 name 属性查询元素，而不是通过 id 属性。

## getElementsByTagName()方法

返回带有指定标签名的节点对象的集合。返回元素的顺序是它们在文档中的顺序。

**语法:**
<pre>getElementsByTagName(Tagname)</pre>

**注意:**

1. 因为文档中的 name 属性可能不唯一，所有 getElementsByName() 方法返回的是元素的数组，而不是一个元素。

2.Tagname是标签的名称，如p、a、img等标签名。

3\. 和数组类似也有length属性，可以和访问数组一样的方法来访问，从0开始。

## 区别getElementByID,getElementsByName,getElementsByTagName

input标签就像人的类别。

name属性就像人的姓名。

id属性就像人的身份证。

<span>后两种方法返回的都是数组！</span>

**方法总结如下:**

[![](http://www.zohar.com.cn/wordpress/wp-content/uploads/2016/05/8bcfffd7eb3e321f1830cbb49f359586.jpeg)](http://img.mukewang.com/5405263300018bcf05760129.jpg)

## getAttribute()方法

通过元素节点的属性名称获取属性的值。

**语法：**
<pre>elementNode.getAttribute(name)</pre>

**说明:**

1\. elementNode：使用getElementById()、getElementsByTagName()等方法，获取到的元素节点。

2\. name：要想查询的元素节点的属性名字

## setAttribute()方法

setAttribute() 方法增加一个指定名称和值的新属性，或者把一个现有的属性设定为指定的值。

**语法：**
<pre>elementNode.setAttribute(name,value)</pre>

**<span>注意：</span>**

1.把指定的属性设置为指定的值。如果不存在具有指定名称的属性，该方法将创建一个新属性。

2.类似于getAttribute()方法，setAttribute()方法只能通过元素节点对象调用的函数。

## 节点属性

在文档对象模型 (DOM) 中，每个节点都是一个对象。DOM 节点有三个重要的属性 ：

1\. nodeName : 节点的名称

2\. nodeValue ：节点的值

3\. nodeType ：节点的类型

**一、nodeName 属性: **节点的名称，是只读的。

1. 元素节点的 nodeName 与标签名相同
 2. 属性节点的 nodeName 是属性的名称
 3. 文本节点的 nodeName 永远是 #text
 4. 文档节点的 nodeName 永远是 #document

**二、nodeValue 属性：**<span>节点的值</span>

1\. 元素节点的 nodeValue 是 undefined 或 null
 2\. 文本节点的 nodeValue 是文本自身
 3\. 属性节点的 nodeValue 是属性的值

**三、nodeType 属性: **节点的类型，是只读的。以下常用的几种结点类型:

**元素类型    节点类型**
   元素          1
   属性          2
   文本          3
   注释          8
   文档          9

## 访问子结点childNodes

访问选定元素节点下的所有子节点的列表，返回的值可以看作是一个数组，他具有length属性。<span>(返回数组）</span>

**语法：**
<pre>elementNode.childNodes</pre>

<pre>node.firstChild   //返回第一个子节点，若无则返回null
</pre><pre>node.lastChild    //返回最后一个子节点</pre>
<span>注意：节点之间的空白符，在firefox、chrome、opera、safari浏览器是文本节点，在IE中不算子节点

</span>

## 访问父节点parentNode

获取指定节点的父节点

**语法：** elementNode.parentNode

**注意:父节点只能有一个。**
<pre>nodeObject.nextSibling       //返回下一个兄弟节点</pre><pre>nodeObject.previousSibling   //返回上一个兄弟节点</pre><span>注意: 两<span>个属性获取的是节点。Internet Explorer 会忽略节点间生成的空白文本节点（例如，换行符号），而其它浏览器不</span>会忽略<span>。
</span></span>

## 插入节点appendChild()

在指定节点的最后一个子节点列表之后添加一个新的子节点。

**语法:**
<pre>appendChild(newnode)
</pre>

## 插入节点insertBefore()

insertBefore() 方法可在已有的子节点前插入一个新的子节点。

**语法:** insertBefore(newnode,node);

**参数:** newnode: 要插入的新节点。 node: 指定此节点前插入节点。

## 删除节点removeChild()

removeChild() 方法从子节点列表中删除某个节点。如删除成功，此方法可返回被删除的节点，如失败，则返回 NULL。

**语法:** nodeObject.removeChild(node)
<span>注意：删除后节点只是不在DOM树中，仍然在内存中。</span>

## 替换元素节点replaceChild()

replaceChild 实现子节点(对象)的替换。<span>返回被替换对象的引用。 <span>!注意是替换子节点</span></span>

**语法：**
<pre>node.replaceChild (newnode,oldnew ) 
</pre>

<span>1. 当 oldnode 被替换时，所有与之相关的属性内容都将被移除。 </span>

2\. newnode 必须先被建立。 

## 创建元素节点createElement

createElement()<span>方法</span><span>可创建元素节点。</span><span>此方法可返回一个 Element 对象。</span>

**<span>语法：</span>**
<pre>document.createElement(tagName)</pre>

**参数:**

tagName：字符串值，这个字符串用来指明创建元素的类型。

**注意：**要与appendChild() 或 insertBefore()方法联合使用，将元素显示在页面中。

## 创建文本节点createTextNode

createTextNode() 方法创建新的文本节点，返回新创建的 Text 节点。

**<span>语法：</span>**
<pre>document.createTextNode(data)</pre>

**参数：**

<span>data :</span><span> 字符串值，可规定此节点的文本。</span>

## 浏览器窗口可视区域大小

获得浏览器窗口的尺寸（浏览器的视口，不包括工具栏和滚动条）的方法:

**一、对于IE9+、Chrome、Firefox、Opera 以及 Safari：**

•  window.innerHeight - 浏览器窗口的内部高度

•  window.innerWidth - 浏览器窗口的内部宽度

**二、对于 Internet Explorer 8、7、6、5：**

•  document.documentElement.clientHeight表示HTML文档所在窗口的当前高度。

•  document.documentElement.clientWidth表示HTML文档所在窗口的当前宽度。

或者

Document对象的body属性对应HTML文档的&lt;body&gt;标签

•  document.body.clientHeight

•  document.body.clientWidth

**在不同浏览器都实用的 JavaScript 方案：**
<pre>var w= document.documentElement.clientWidth
      || document.body.clientWidth;
var h= document.documentElement.clientHeight
      || document.body.clientHeight;</pre>

## 网页尺寸scrollHeight   

scrollHeight和scrollWidth，获取网页内容高度和宽度。<span>（网页内容尺寸）</span>

**一、针对IE、Opera:**

scrollHeight 是网页内容实际高度，可以小于 clientHeight。

**二、针对NS、FF:**

scrollHeight 是网页内容高度，不过最小值是 clientHeight。也就是说网页内容实际高度小于 clientHeight 时，scrollHeight 返回 clientHeight 。

**三、浏览器兼容性**
<pre>var w=document.documentElement.scrollWidth
   || document.body.scrollWidth;
var h=document.documentElement.scrollHeight
   || document.body.scrollHeight;</pre>

**注意:区分大小写**

scrollHeight和scrollWidth还可获取Dom元素中内容实际占用的高度和宽度。

## 网页尺寸offsetHeight

offsetHeight和offsetWidth，获取网页内容高度和宽度(包括滚动条等边线，会随窗口的显示大小改变)。

**一、值**

offsetHeight = clientHeight + 滚动条 + 边框。

**二、浏览器兼容性**
<pre>var w= document.documentElement.offsetWidth
    || document.body.offsetWidth;
var h= document.documentElement.offsetHeight
    || document.body.offsetHeight;

</pre>

## 网页卷去的距离与偏移量

**我们先来看看下面的图：**

[![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/05/e1a3a0efbd39f7c36991b1741c44fe43.jpeg)](http://img.mukewang.com/5347b2b10001e1a307520686.jpg)

<span>**scrollLeft:**设置或获取位于给定对象左边界与窗口中目前可见内容的最左端之间的距离 ，即左边灰色的内容。</span>

**scrollTop:**设置或获取位于对象最顶端与窗口中可见内容的最顶端之间的距离 ，即上边灰色的内容。

<span>**offsetLeft:**获取指定对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置 。</span>

**offsetTop:**获取指定对象相对于版面或由 <span>offsetParent</span> 属性指定的父坐标的计算顶端位置 。

**注意:**

**1\. 区分大小写**

**2. <span>offsetParent：布局中设置postion属性(</span>Relative、Absolute、fixed<span>)的父容器，从最近的父节点开始，一层层向上找，直到HTML的body。</span>**