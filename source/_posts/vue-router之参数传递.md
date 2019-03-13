layout: '[post]'
title: vue-router之参数传递
date: 2017-07-16 21:43:31
categories:
- JavaScript
---
### vue-router 参数传递相关
***
#### 使用`query`传递参数
**首先新建两个vue文件，它们可以是父子组件关系也可以不是**
`hello.vue`
```
<div class="hello">
 <router-link :to="{path: '/child', query: {id: '123'}}">query传递参数</router-link>
 </div>
```
`child.vue`
子页面通过`$route.query.id`获取传过来的参数
```
<div id="child">
    <p>query传过来的参数{{$route.query.id}}</p>
  </div>
```
<!--more-->
**配置路由**
```
{
    path: '/',
    name: 'Hello',
    component: Hello,
},    
{
    path: '/child',
    name: 'child',
    component: child
}
```
**传递的参数会显示在url中**
![Alt text](http://odadt2jgx.bkt.clouddn.com/1.png)
![Alt text](http://odadt2jgx.bkt.clouddn.com/2.png)
***
#### 使用`params`传递参数
使用`params`传参有两种方法，一种会将参数显示在url中，另一种则不会显示在url中
	**同上新建两个vue文件**
`hello.vue`
```
<div class="hello">
	    <router-link :to="{path: '/helloChild/123'}">params传递参数（url中显示）</router-link>
	<router-view></router-view>
	</div>
```
`helloChild.vue`

```
<div id="helloChild">
    <p>params传过来的参数：{{$route.params.id}}</p>
  </div>
```
**配置路由**

```
  {
    path: '/',
    name: 'Hello',
    component: Hello,
    children: [{
	  // 参数显示在url中
      path: '/helloChild/:id',
      name: 'helloChild',
      component: helloChild
    }, {
      // 参数不显示在url中
      path: '/helloChild/id',
      name: 'helloChild2',
      component: helloChild
    }]
  }
```

- `params`传参（显示在url中）
	传递参数时直接将参数加在url中，如上：
	`path: '/helloChild/123'`
![Alt text](http://odadt2jgx.bkt.clouddn.com/3.png)
![Alt text](http://odadt2jgx.bkt.clouddn.com/4.png)
- `parmas`传参（不显示在url中）
    传递参数时采用`params: {参数名: 参数值}`这种方式传递，如上：
   `{name: 'helloChild2', params: {id: '456'}}`
   ![Alt text](http://odadt2jgx.bkt.clouddn.com/5.png)
![Alt text](http://odadt2jgx.bkt.clouddn.com/6.png)
