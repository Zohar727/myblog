layout: '[post]'
title: 用友前端实习笔试题
date: 2017-05-29 15:33:06
categories:
- 求职
tags:
- 求职
---
>前几天参加了用友前端实习招聘笔试，不得不说，用友的题量真多，这里把主要的大题目记录下来了。
<!--more-->

### 用你熟悉的方法实现javascript继承
```
//原型链继承
function parnet() {
    this.property = true;
}
parnet.prototype.getParentValue = function () {
    return this.property;
};
function child() {
    this.childProperty = false;
}
//将父类实例赋给子类原型链实现原型链继承
child.prototype = new parnet();
child.prototype.getChildValue = function () {
    return this.childProperty;
};
var instance = new child();
console.log(instance.getParentValue());
```
<!--more-->
### 写一个ajax程序，向服务端发送"hello world"
```
//ajax发送hello world
document.getElementById("test").onclick = function(){
	var request = new XMLHttpRequest();
	request.open("post","server.php");
	request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var data = "hello world";
	request.send(data);
	request.onreadystatechange =  function(){
		if(request.readyState == 4){
			if (request.status == 200) {
				console.log("发送成功");
			}else{
				console.log("发送出错"+request.status);
			}
		}
	}
}
```
### 实现Object对象的clone()方法
```
function clone(obj) {
    var buf;
    if(obj instanceof Array){
        var temp = [];
        temp = obj.slice(0);
        return temp;
    }else if(obj instanceof Object){
        buf = {};
        for(var k in obj){
            buf[k] = clone(obj[k]);
        }
        return buf;
    }else {
        return obj;
    }
}
var arr = [1,2,3];
console.log(clone(arr));
var ob = {  a:1,
            b:2};
console.log(clone(ob));
```
### 用JavaScript实现trim()方法
```
function trim(str) {
    while(str.indexOf(" ") == 0){
        str = str.slice(1);
    }
    while(str.lastIndexOf(" ") == str.length-1){
        str = str.slice(0,-1);
    }
    return str;
}
console.log(trim(" as sd "));
```
### 找出字符串中连续出现次数最多的字符以及次数
```
function maxChar(str) {
    var length = str.length;
    var index,max,maxchar;
    max=0;
    for(var i=0;i<length;){
        index = 0;
        for(var j=i+1;j<length;j++){
            if(str[i] == str[j]){
                index++;
            }else {
                break;
            }
        }
        if(index>max){
            max = index+1;
            maxchar = str[i];
        }
        i = j;
    }
    return max+maxchar;
}
console.log(maxChar("aabbbbbccssaa"));
```
### 将字符串中所有的 ABC 替换成 batman
```
function re(str) {
    str = str.replace(/ABC/g,"batman");
    return str;
}
console.log(re("hello ABC is DEF ABC"));
```
### 实现一个布局，头部底部固定，中部自适应
```
.top{
    width:100%;
    height:80px;
    position:absolute;
    top:0;
    left:0
}
.bottom{
    width:100%;
    height:80px;
    position:absolute;
    bottom:0;
    left:0;
}
.middle{
    width:100%;
    position:absolute;
    top:80px;
    bottom:80px;
}
```
### 增加一个div(宽度400像素，高度400像素，背景颜色为蓝色，边框颜色为红色，在页面居中)
```
div{
    width:400px;
    height:400px;
    background-color:blue;
    border:1px solid red;
    margin:0 auto;
}
```
### 简述css的盒模型