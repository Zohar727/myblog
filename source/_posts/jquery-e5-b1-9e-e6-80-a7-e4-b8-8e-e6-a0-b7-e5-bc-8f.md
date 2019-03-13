---
title: jQuery属性与样式
id: 188
categories:
  - JavaScript
date: 2016-07-13 09:11:35
tags:
---

## 

## .attr()与.removeAttr()

**attr()有4个表达式**

1.  attr(传入属性名)：获取属性的值
2.  attr(属性名, 属性值)：设置属性的值
3.  attr(属性名,函数值)：设置属性的函数值  例： $('input:eq(2)').attr('value',function(i, val){
return '通过function设置' + val
})
4.  attr(attributes)：给指定元素设置多个属性值，即：{属性名一: “属性值一” , 属性名二: “属性值二” , … … }
**removeAttr()删除方法**
<!--more-->
.removeAttr( attributeName ) : 为匹配的元素集合中的每个元素中移除一个属性（attribute）

## html()及.text()

**.html()方法**

获取集合中第一个匹配元素的HTML内容 或 设置每一个匹配元素的html内容，具体有3种用法：

1.  .html() 不传入值，就是获取集合中第一个匹配元素的HTML内容
2.  .html( htmlString )  设置每一个匹配元素的html内容
3.  .html( function(index, oldhtml) ) 用来返回设置HTML内容的一个函数
**注意事项：**
<pre>.htm()方法内部使用的是DOM的innerHTML属性来处理的，所以在设置与获取上需要注意的一个最重要的问题，**这个操作是针对整个HTML内容（不仅仅只
是文本内容）**</pre>
**.text()方法**

得到匹配元素集合中每个元素的文本内容结合，包括他们的后代，或设置匹配元素集合中每个元素的文本内容为指定的文本内容。，具体有3种用法：

1.  .text() 得到匹配元素集合中每个元素的合并文本，包括他们的后代
2.  .text( textString ) 用于设置匹配元素内容的文本
**.html与.text的异同:**

1.  .html与.text的方法操作是一样，只是在具体针对处理对象不同
2.  .html处理的是元素内容，.text处理的是文本内容
3.  .html只能使用在HTML文档中，.text 在XML 和 HTML 文档中都能使用
4.  如果处理的对象只有一个子文本节点，那么html处理的结果与text是一样的
5.  火狐不支持innerText属性，用了类似的textContent属性，.text()方法综合了2个属性的支持，所以可以兼容所有浏览器
&nbsp;</li>
</ol>

## .val()方法

jQuery中有一个.val()方法主要是用于处理表单元素的值，比如 input, select 和 textarea。

**.val()方法**

1.  .val()无参数，获取匹配的元素集合中第一个元素的当前值
2.  .val( value )，设置匹配的元素集合中每个元素的值
3.  .val( function ) ，一个用来返回设置值的函数
**注意事项：**
<pre>.text()结果返回一个字符串，包含所有匹配元素的合并文本</pre>
**.html(),.text()和.val()的差异总结： **

1.  .html(),.text(),.val()三种方法都是用来读取选定元素的内容；只不过.html()是用来读取元素的html内容（包括html标签），.text()用来读取元素的纯文本内容，包括其后代元素，.val()是用来读取表单元素的"value"值。其中.html()和.text()方法不能使用在表单元素上,而.val()只能使用在表单元素上；另外.html()方法使用在多个元素上时，只读取第一个元素；.val()方法和.html()相同，如果其应用在多个元素上时，只能读取第一个表单元素的"value"值，但是.text()和他们不一样，如果.text()应用在多个元素上时，将会读取所有选中元素的文本内容。
2.  .html(htmlString),.text(textString)和.val(value)三种方法都是用来替换选中元素的内容，如果三个方法同时运用在多个元素上时，那么将会替换所有选中元素的内容。
3.  .html(),.text(),.val()都可以使用回调函数的返回值来动态的改变多个元素的内容。

## 增加样式.addClass()

**.addClass( className )方法**

1.  .addClass( className ) : 为每个匹配元素所要增加的一个或多个样式名
2.  .addClass( function(index, currentClass) ) : 这个函数返回一个或更多用空格隔开的要增加的样式名
示例代码：
<pre lang="javascript" line="1">
 $("div").addClass(function(index,className) {
//找到类名中包含了imooc的元素
if(-1 !== className.indexOf('imooc')){
//this指向匹配元素集合中的当前元素
$(this).addClass('imoocClass')
}
});
</pre>
&nbsp;

## 删除样式.removeClass()

**.removeClass( )方法**

1.  .removeClass( [className ] )：每个匹配元素移除的一个或多个用空格隔开的样式名
2.  .removeClass( function(index, class) ) ： 一个函数，返回一个或多个将要被移除的样式名
<pre lang="javascript" line="1">
<script type="text/javascript">
//.removeClass() 方法允许我们指定一个函数作为参数，返回将要被删除的样式
$('.right &gt; div:first').removeClass(function(index,className){

//className = aa bb imoocClass
//把div的className赋给下一个兄弟元素div上作为它的class
$(this).next().addClass(className)

//删除自己本身的imoocClass
return 'imoocClass'
})

</script>
</pre>
&nbsp;

## 切换样式.toggleClass()

在做某些效果的时候，可能会针对同一节点的某一个样式不断的切换，也就是addClass与removeClass的互斥切换，比如隔行换色效果

jQuery提供一个toggleClass方法用于简化这种互斥的逻辑，通过toggleClass方法动态添加删除Class，一次执行相当于addClass，再次执行相当于removeClass

**.toggleClass( )方法：**在匹配的元素集合中的每个元素上添加或删除一个或多个样式类,取决于这个样式类是否存在或值切换属性。即：如果存在（不存在）就删除（添加）一个类

1.  .toggleClass( className )：在匹配的元素集合中的每个元素上用来切换的一个或多个（用空格隔开）样式类名
2.  .toggleClass( className, switch )：一个布尔值，用于判断样式是否应该被添加或移除
3.  .toggleClass( [switch ] )：一个用来判断样式类添加还是移除的 布尔值
4.  .toggleClass( function(index, class, switch) [, switch ] )：用来返回在匹配的元素集合中的每个元素上用来切换的样式类名的一个函数。接收元素的索引位置和元素旧的样式类作为参数
**注意事项：**

1.  toggleClass是一个互斥的逻辑，也就是通过判断对应的元素上是否存在指定的Class名，如果有就删除，如果没有就增加
2.  toggleClass会保留原有的Class名后新增，通过空格隔开

## 样式操作.css()

**获取方法：**
1\.     .css(propertyName):获取匹配元素集合中的第一个元素的单个样式属性的计算值
2\.     .css(propertyNames):可以获取一组属性值，传递一组数组，返回一个对象
示例代码：
<pre lang="javascript">
 var value  =  $('div').css(['width','height']);    
    $('p).text('width:'+value[0]+'height:'+value[1]);
</pre>
**设置方法：** 
1\.  .css(propertyName, value )：设置CSS
2   .css( propertyName, function )：可以传入一个回调函数，返回取到对应的值进行处理例： //获取到指定元素的宽度，在回调返回宽度值
示例代码：
<pre lang="javascript">
//通过处理这个value，重新设置新的宽度
$('.sixth').css("width",function(index,value){
value=value.split('px');
return (Number(value[0]+50)+value[1])})
3    .css( properties )：可以传一个对象，同时设置多个样式
例： //合并设置,通过对象传设置多个样式
$('.seventh').css({
'font-size' :'15px',
"backgroundColor" :"#40E0DO",
"border" :"1px solid red"
})
</pre>
&nbsp;

## 元素的数据存储

jQuery提供的存储接口
<pre lang="javascript">jQuery.data( element, key, value )   //静态接口,存数据
jQuery.data( element, key )  //静态接口,取数据   
.data( key, value ) //实例接口,存数据
.data( key ) //实例接口,存数据</pre>
同样的也提供2个对应的删除接口，使用上与data方法其实是一致的，只不过是一个是增加一个是删除罢了
<pre lang="javascript">jQuery.removeData( element [, name ] )
.removeData( [name ] )</pre>
示例代码：
<pre lang="javascript" line="1">
$('.left').click(function() {
var ele = $(this);
//通过$.data方式设置数据
$.data(ele, "a", "data test")
$.data(ele, "b", {
name : "慕课网"
})
//通过$.data方式取出数据
var reset = $.data(ele, "a") + "&lt;/br&gt;" + $.data(ele, "b").name
ele.find('span').append(reset)
})
&lt;/script&gt;
&lt;script type="text/javascript"&gt;
$('.right').click(function() {
var ele = $(this);
//通过.data方式设置数据
ele.data("a", "data test")
ele.data("b", {
name: "慕课网"
})
//通过.data方式取出数据
var reset = ele.data("a") + "&lt;/br&gt;" + ele.data("b").name
ele.find('span').append(reset)
})
</pre>
![](http://e.zohar.com.cn/wordpress/wp-content/uploads/2016/07/ea2c3a0bd85e8471008c9f42e764e622.jpeg)

&nbsp;