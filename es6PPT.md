title: ES6入门
speaker: 林建凯
url: https://github.com/ksky521/nodeppt
transition: vertical3d
theme: moon
highlightStyle: monokai_sublime

[slide style="background-image:url('/img/bg1.png')"]

# ES6 入门

[slide] 
## JavaScript的发展
----
* 1、1995：JavaScript诞生，它的初始名叫LiveScript。
* 2、1997：ECMAScript标准确立。
* 3、1999：ES3出现，与此同时IE5风靡一时。
* 4、2000–2005： XMLHttpRequest又名AJAX的出现。
* 5、2009：ES5出现，（就是我们大多数人现在使用的）例如foreach，Object.keys，Object.create和JSON标准。
* 6、2015：ES6出现，正式名称就是《ECMAScript 2015标准》（简称 ES2015）。

<img src="/ksky521/nodeppt/raw/master/girl.jpg">

[slide]

## 最佳的ES6特性
----
* Let与Const {:&.rollIn}
* 模板字符串
* 函数参数默认值
* 解构赋值
* 对象属性简写
* 箭头函数
* Promise
* 类
* 模块化	
	
[slide]
## Let与Const
----

<div class="columns-2">	
    <pre>
不使用ES6
	    <code class="javascript">
var a = "es6"
console.log(a) //es6
console.log(window.a) //es6 

var b = 2;
{
   var b = 3;
}
console.log(b); //3

//变量提升
{
	console.log(c); //undefined
	var c = 'up';
}
	    </code>
    </pre>
    <pre>
使用ES6
	    <code class="javascript">   
let a = "es6"
console.log(window.a)  //undefined

//let只能在块级作用域使用，const相同
{
   let b = 3;
   console.log(b) //3
}
console.log(b);//报错

//变量提升
{
	console.log(c); //报错
	let c = 'up';
}
	    </code>
    </pre>
</div>

####tips：大括号{}包起来的代码块基本都可以当做块级作用域。

[slide]
## Let与Const
----

<div class="columns-1">	
    <pre>
	    <code class="javascript">
//const 声明常量	    
//const一旦声明变量，就必须立即初始化,不可以后赋值。
const noChangeMe;
//const声明的变量一旦初始化，以后就不可以在进行赋值操作，但可以对其引用的对象进行更改、
const noChangeMe = [1,2,4]
noChangeMe = [2, 3]
noChangeMe[100] = 100	
	    </code>
	</pre>
</div>

####总结
 *	let和const声明的变量不能再重复声明，与var也不能重复声明。 {:&.rollIn}
 *	不要用window.xxx去调用let与const声明的变量。它们声明的全局变量不属于顶层对象的属性

[slide]
## 模板字符串
----
<style>
	.columns-2 pre{
		max-width: 100% !important
	}
</style>

<div class="columns-2" style="flex-direction: column;">	
    <pre>
不使用ES6
	    <code class="javascript">
var data = {
	name: 'hello',
	address: 'world'
}
var html = "i am "+ data.name +""
			 + ",live in  "+ data.address +"";
console.log(html)
	    </code>
    </pre>
    <pre>
使用ES6
	    <code class="javascript">   
var htmles6 = `i am ${data.name} ,live in ${data.address}`	    
	    </code>
    </pre>
</div>

[slide]
## 多行字符串
----

<style>
	.columns-2 pre{
		max-width: 100% !important
	}
</style>

<div class="columns-2" style="flex-direction: column;">	
    <pre>
不使用ES6
	    <code class="javascript">
var roadPoem = 'Then took the other, as just as fair,\n\t'
    + 'And having perhaps the better claim\n\t'
    + 'Because it was grassy and wanted wear,\n\t'
    + 'Though as for that the passing there\n\t'
    + 'Had worn them really about the same,\n\t'
	    </code>
    </pre>
    <pre>
使用ES6
	    <code class="javascript">   
var roadPoem = `Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear,
    Though as for that the passing there
    Had worn them really about the same,`    
	    </code>
    </pre>
</div>

[slide]
## 函数参数默认值
----

<div class="columns-2">	
    <pre>
不使用ES6
	    <code class="javascript">
//为函数的参数设置默认值：	    
function foo(height, color)
{
    var height = height || 50;
    var color = color || 'red';
    console.log(height, color)
}
foo(0, "")
	    </code>
    </pre>
    <pre>
使用ES6
	    <code class="javascript">   
function foo(height = 50, color = 'red')
{
    console.log(height,color)
}
	    </code>
    </pre>
</div>

[slide]
## 解构赋值
----

<div class="columns-2">	
    <pre>
不使用ES6
	    <code class="javascript">
var name = "joke"
var id = "12"
var obj = {name : name, id: id}
console.log(obj)
	    </code>
    </pre>
    <pre>
使用ES6
	    <code class="javascript">   
let name = "joke"
let id = "12"
let obj = {name, id}
console.log(obj)
//上述反过来可以这样写
let dog = {type: 'animal', name: 'black'}
let { type, name} = dog
console.log(type, name)   //animal black
	    </code>
    </pre>
</div>

[slide]
## 解构赋值
----

<div class="columns-2">	
    <pre>
不使用ES6
	    <code class="javascript">
//数组	    
let a = 1;
let b = 2;
let c = 3;
// 交换变量
var x = 10;  
var y = 20;  
var temp = x;  
x = y;  
y = x; 
	   	</code>
    </pre>
    <pre>
使用ES6
	    <code class="javascript">   
//数组
let [a, b, c] = [1, 2, 3];
// 交换变量
let [x, y] = [10, 20]
[x, y] = [y, x] 
/*字符串解构*/
let [a,b,c,d,f] = 'hello' //类数组的对象
let {length : len} = 'hello';
	    </code>
    </pre>
</div>

[slide]
## 对象属性简写
----

<div class="columns-2">	
    <pre>
不使用ES6
	    <code class="javascript"> 
var birth = '2000/01/01';
var Person = {
  	name: '张三',
  	birth: birth，
  	hello: function () { 
  		console.log(this.name);
  	}
};
	   	</code>
    </pre>
    <pre>
使用ES6
	    <code class="javascript">
var birth = '2000/01/01';
var Person = {
  	name: '张三',
  	birth,
  	hello() { 
  		console.log( this.name); 
  	}
};
	    </code>
    </pre>
</div>

[slide]
## 箭头函数
----

<div class="columns-2">	
    <pre>
不使用ES6
	    <code class="javascript"> 
var sum = function(num1, num2) {
    return num1 + num2;
};

[1,2,3].map(function (x) {
  return x * x;
});
	   	</code>
    </pre>
    <pre>
使用ES6
	    <code class="javascript">
var sum = (num1, num2) => num1 + num2;

[1,2,3].map(x => x * x);
	    </code>
    </pre>
</div>

[slide]
## 箭头函数
----

<div class="columns-2">	
    <pre>
不使用ES6
	    <code class="javascript"> 
function foo() 
{
    console.log(this.id);//指向调用时所在的对象。
}
var id = 1;
foo(); 
foo.call({ id: 2 }); 
	   	</code>
    </pre>
    <pre>
使用ES6
	    <code class="javascript">
var foo = () => {
  console.log(this.id);//指向的是定义箭头函数的对象,
}
var id = 1;
foo();
foo.call({ id: 2 });
	    </code>
    </pre>
</div>

[slide]
## 箭头函数
----

<div class="columns-2">	
    <pre>
不使用ES6
	    <code class="javascript"> 
var name = 'my name is window';
var obj = {
    name: 'my name is obj',
    fn: function() {
    	// var that = this;
        setTimeout(function() {
            console.log(this.name); //my name is window
            // console.log(that.name)
        }, 1000)
    }
}
obj.fn();
	   	</code>
    </pre>
    <pre>
使用ES6
	    <code class="javascript">
const obj2 = {
    name: 'my name is obj',
    fn: function() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000)
    }
}
obj2.fn();
	    </code>
    </pre>
</div>

[slide]
## Promise
----

<div class="columns-2">	
    <pre>
不使用ES6
	    <code class="javascript"> 
//嵌套两个setTimeout回调函数	    
setTimeout(function()
{
    console.log('Hello'); 
    setTimeout(function()
    {
        console.log('World'); 
    }, 1000);
}, 1000);
	   	</code>
    </pre>
    <pre>
使用ES6
	    <code class="javascript">
var wait1000 = () => new Promise((resolve, reject)=> {setTimeout(resolve, 1000)});
wait1000()
    .then(function() {
        console.log('Hello')
        return wait1000()
    })
    .then(function() {
        console.log('World')
    });
	    </code>
    </pre>
</div>

[slide]
## 类Class
----

<div class="columns-2">	
    <pre>
不使用ES6
	    <code class="javascript"> 
//使用构造函数创建对象：
function Point(x, y)
{
    this.x = x;
    this.y = y;
    this.add = function()
    {
        return this.x + this.y;
    };
}

var p = new Point(1, 2);

console.log(p.add()); // 3
	   	</code>
    </pre>
    <pre>
使用ES6
	    <code class="javascript">
class Point
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
    add()
    {
        return this.x + this.y;
    }
}
var p = new Point(1, 2);
console.log(p.add()); // 3
	    </code>
    </pre>
</div>

[slide]
## 模块化Module
----

<div class="columns-2">	
    <pre>
不使用ES6
	    <code class="javascript"> 
//CommenJS
module.exports = {
  name: 'model',
  get: function() {
    	return 'abc' 
  }
}

var data = require('module.js')
	   	</code>
    </pre>
    <pre>
使用ES6
	    <code class="javascript">
//Module	    
let name = 'model'
function fn(){
	return "abc"
}
export {
	name, fn
}

import {name, fn} from 'module'

	    </code>
    </pre>
</div>

[slide]
#Thanks!
<style>
	.img{
		width: 350px;
		height: 350px;
	}
</style>
<div>
	<img src="/img/2.jpg" class="img">
</div>

