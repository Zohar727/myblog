---
title: jQuery遍历
id: 202
categories:
  - JavaScript
date: 2016-07-14 16:08:10
tags:
---

## children()方法（只匹配儿子）
<span>jQuery是一个合集对象，如果想快速查找合集里面的第一级子元素，此时可以用children()方法。这里需要注意：.children(selector) 方法是返回匹配元素集合中每个元素的所有子元素（</span><span>仅儿子辈</span><span>，</span><span>这里可以理解为就是父亲-儿子的关系</span><span>）</span>

**children()****无参数**

允许我们通过在DOM树中对这些元素的直接子元素进行搜索，并且构造一个新的匹配元素的jQuery对象
<pre>**注意：jQuery是一个合集对象，所以通过children是匹配合集中每一给元素的第一级子元素**</pre>

.**children()****方法选择性地接受同一类型选择器表达式**
<pre>$(&quot;div&quot;).children(&quot;.selected&quot;)</pre>

同样的也是因为jQuery是合集对象，可能需要对这个合集对象进行一定的筛选，找出目标元素，所以允许传一个选择器的表达式
<!--more-->
## find()方法
查找所有后代必须带参数

**find()方法要注意的知识点：**

*   find是遍历当前元素集合中每个元素的后代。只要符合，不管是儿子辈，孙子辈都可以。
*   与其他的树遍历方法不同，选择器表达式对于 .find() 是必需的参数。如果我们需要实现对所有后代元素的取回，可以传递通配选择器 '*'。
*   find只在后代中遍历，不包括自己。
*   选择器 context 是由 .find() 方法实现的；因此，$('li.item-ii').find('li') 等价于 $('li', 'li.item-ii')。

**注意重点：**
<pre>.find()和.children()方法是相似的
1.children只查找第一级的子节点
2.find查找范围包括子节点的所有后代节点</pre>

## parent()方法
查找父级，只往上查找一级用法与childern（）类似

## parents()方法
查找所有父级，一直查到祖先节点用法与children()类似

## closest()方法
向上匹配元素，匹配成功即停止
**parent，parents，closest区别：**

**parent是找当前元素的第一个父节点，不管匹不匹配都不继续往下找**

**parents是找当前元素的所有父节点 **

**closest() 是找当前元素的所有父节点 ，直到找到第一个匹配的父节点**

**
**

## **next()方法**
**<strong>往下查找兄弟节点**</strong>**<strong><strong>
**</strong></strong>

## **<strong><strong><strong>prev()方法**</strong></strong></strong>
**<strong><strong><strong>往上查找兄弟节点**</strong></strong></strong>**<strong><strong><strong><strong>
**</strong></strong></strong></strong>

## **<strong><strong><strong><strong><strong>siblings()**</strong></strong></strong></strong></strong>
**双向同时查找兄弟节点****<strong>
**</strong>

## **<strong><strong>add()方法**</strong></strong>

**<strong><strong>jQuery是一个合集对象，通过$()方法找到指定的元素合集后可以进行一系列的操作。$()之后就意味着这个合集对象已经是确定的，如果后期需要再往这个合集中添加一新的元素要如何处理？jQuery为此提供add方法，用来创建一个新的jQuery对象 ，元素添加到匹配的元素集合中**</strong></strong>
<pre>**<strong><strong>.add()的参数可以几乎接受任何的$()，包括一个jQuery选择器表达式，DOM元素，或HTML片段引用。**</strong></strong></pre>

**<strong><strong>简单的看一个案例：**</strong></strong>

**<strong><strong>操作：选择所有的li元素，之后需要把p元素也加入到li的合集中**</strong></strong>
<pre>**<strong><strong>&lt;ul&gt;
    &lt;li&gt;list item 1&lt;/li&gt;
    &lt;li&gt;list item 3&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;新的p元素&lt;/p&gt;**</strong></strong></pre>

**<strong><strong>处理一：传递选择器**</strong></strong>
<pre>**<strong><strong>$('li').add('p')**</strong></strong></pre>

**<strong><strong>处理二：传递dom元素**</strong></strong>
<pre>**<strong><strong>$('li').add(document.getElementsByTagName('p')[0])**</strong></strong></pre>

**<strong><strong>还有一种方式，就是动态创建P标签加入到合集，然后插入到指定的位置，但是这样就改变元素的本身的排列了**</strong></strong>
<pre>**<strong><strong> $('li').add('&lt;p&gt;新的p元素&lt;/p&gt;').appendTo(目标位置)**</strong></strong></pre>**<strong><strong>
**</strong></strong>

## **<strong><strong><strong>each()(常用于条件遍历）**</strong></strong></strong>

**<strong><strong><strong>jQuery是一个合集对象，通过$()方法找到指定的元素合集后可以进行一系列的操作。比如我们操作$(&quot;li&quot;).css('') 给所有的li设置style值，因为jQuery是一个合集对象，所以css方法内部就必须封装一个遍历的方法，被称为隐式迭代的过程。要一个一个给合集中每一个li设置颜色，这里方法就是each**</strong></strong></strong>

**<strong><strong><strong>.each() 方法就是一个for循环的迭代器，它会迭代jQuery对象合集中的每一个DOM元素。每次回调函数执行时，会传递当前循环次数作为参数(从0开始计数**</strong></strong></strong>

**<strong><strong><strong>所以大体上了解3个重点：**</strong></strong></strong>
<pre>**<strong><strong><strong>each是一个for循环的包装迭代器
each通过回调的方式处理，并且会有2个固定的实参，索引与元素
each回调方法中的this指向当前迭代的dom元素**</strong></strong></strong></pre>**<strong><strong><strong>
**</strong></strong></strong>**<strong><strong><strong><strong>示例代码：**</strong></strong></strong></strong>**<strong><strong><strong><strong><strong>$(&quot;button:last&quot;).click(function() {
        //遍历所有的li
        //修改偶数li内的字体颜色
        $(&quot;li&quot;).each(function(index, element) {
            if (index % 2) {
                $(this).css('color','blue')
            }
        })
    })
**</strong></strong></strong></strong></strong>**<strong><strong><strong><strong><strong><strong>![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/07/710f7697e1e9fda1e3aadb15de717338.jpeg)
**</strong></strong></strong></strong></strong></strong>**
**