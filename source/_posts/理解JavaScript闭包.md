---
title: 理解JavaScript闭包
date: 2020-04-28 19:22:07
banner: https://images.unsplash.com/photo-1587924316340-7a6d9d43d2db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
thumbnail: https://images.unsplash.com/photo-1587924316340-7a6d9d43d2db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
tags:
- JavaScript
categories:
- JavaScript
toc: true
---
### 什么是闭包
闭包就是有权访问另一个函数作用域内变量的函数。  
<!-- more -->
**MDN的解释：** 闭包是一种特殊的对象。它由两部分构成：函数，以及创建该函数的环境。环境由闭包创建时在作用域中的任何局部变量组成。
### 创建一个闭包
简单的例子，在函数内部再创建一个函数，并将内部这个函数做完外部函数的返回值，这样便形成了一个闭包。
```javascript
function a(x) {
    function closure() {
        return x+y;
    }
    return closure;
}
```
### 闭包的用途
- 创建私有变量，不能被外部直接访问
- 读取函数内部的变量
- 让一个变量永远保存在内存中，不会被销毁

### 闭包的注意事项
- 通常函数的作用域及其变量都会在函数执行结束后被销毁，但是，在创建了一个闭包后，这个函数的作用域会一直保存到闭包不存在为止。
```javascript
function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7;
console.log(add10(2)); // 10 + 2 = 12

// 释放对闭包的引用
add5 = null;
add10 = null;
```
add5 和 add10 都是闭包。它们共享相同的函数定义，但是保存了不同的环境。在 add5 的环境中，x 为 5。而在 add10 中，x 则为 10。最后通过 null 释放了 add5 和 add10 对闭包的引用。
> **在javascript中，如果一个对象不再被引用，那么这个对象就会被垃圾回收机制回收；  
如果两个对象互相引用，而不再被第3者所引用，那么这两个互相引用的对象也会被回收。**

- 闭包只能取得函数中任何变量的最后一个值，这是因为闭包是保存的整个变量对象，而不是某个特殊的变量。
```javascript
function test() {
    var arr = [];
    for(var i = 0;i < 10;i++) {
        arr[i] = function () {
            return i;
        };
    }
    for(var a = 0;a < 10;a++) {
        console.log(arr[a]());
    }
}

test(); // 连续打印10个10
```
对于上面的情况，如果我们改变代码如下：
```javascript
function test(){
  var arr = [];
  for(let i = 0;i < 10;i++){  // 仅在这里作出了改动
    arr[i] = function(){
      return i;
    };
  }
  for(var a = 0;a < 10;a++){
    console.log(arr[a]());
  }
}
test(); // 打印 0 到 9
```
- 闭包中的this对象
```javascript
var name = "The Window";

var obj = {
  name: "My Object",
  
  getName: function(){
    return function(){
      return this.name;
    };
  }
};

console.log(obj.getName()());  // The Window
```
obj.getName()()实际上是在全局作用域中调用了匿名函数，this指向了window。这里要理解函数名与函数功能（或者称函数值）是分割开的，不要认为函数在哪里，其内部的this就指向哪里。匿名函数的执行环境具有全局性，因此其 this 对象通常指向 window。

```javascript
var name = "The Window";

var obj = {
  name: "My Object",
  
  getName: function(){
    var that = this;
    return function(){
      return that.name;
    };
  }
};

console.log(obj.getName()());  // My Object
```

### 闭包的缺点
- 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
- 闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

### 最后看一道闭包相关的题
```javascript
function fun(n,o){
  console.log(o);
  return {
    fun: function(m){
      return fun(m,n);
    }
  };
}

var a = fun(0);  // ?
a.fun(1);        // ?        
a.fun(2);        // ?
a.fun(3);        // ?

var b = fun(0).fun(1).fun(2).fun(3);  // ?

var c = fun(0).fun(1);  // ?
c.fun(2);        // ?
c.fun(3);        // ?
```

### 参考文献
[学习Javascript闭包（Closure）](!http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)  
[JavaScript 闭包](!https://segmentfault.com/a/1190000006875662)
