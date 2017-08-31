/*let const*/
/*es5*/
/*var声明*/
var a = "es6"
console.log(a) //es6
console.log(window.a) //es6 

var a = 2;
{
   var a = 3;
}
console.log(a); //3
/*es6*/
//ES6新增了块级作用域，总结一句话大致就是：大括号{}包起来的代码块基本都可以当做块级作用域。
//块级作用域变量let与const

/*let 局部声明*/
/*与var的区别*/
//(1)
//var会出现变量提升，
var v='Hello World';
(function(){ 
    console.log(v); //undefined 
    var v='js hoisting'; 
})();
//但是let不存在变量提升，会出现“暂时性死区”
//暂时性死区: 在当前作用域，某变量已经被let const声明，那声明前，该变量都不可使用。
{
    a = 'abc';//报错
    let a;
}

//(2)
//var for循环变量会变成全局变量
for(var i = 0; i < 5; i++){
    // console.log(i)
}
console.log(i) //5
//let只能在块级作用域使用，const相同
{
   let b = 3;
   console.log(b) //3
}
console.log(b);//报错


/*const 声明常量*/
//const一旦声明变量，就必须立即初始化,不可以后赋值。
const noChangeMe;
//const声明的变量一旦初始化，以后就不可以在进行赋值操作，但可以对其引用的对象进行更改、
const noChangeMe = [1,2,4]
noChangeMe = [2, 3]
noChangeMe[100] = 100
//const也会出现“暂时性死区”


/*总结*/
//let和const声明的变量不能再重复声明，与var也不能重复声明。
//不要用window.xxx去调用let与const声明的变量。它们声明的全局变量不属于顶层对象的属性



/*经典案例*/
var btn=document.getElementsByTagName('button');
for(var i=0;i<btn.length;i++){ 
    btn[i].onclick=function(){ 
        console.log(i);
    }
}
//es5 解决方法的一种
for(var i=0;i<btn.length;i++){ 
    (function(i){
    	btn[i].onclick = function () {
    		console.log(i)
    	}
    })(i)
}

for(var i=0;i<btn.length;i++){ 
    btn[i].onclick = (function (i) {
    	return function(){
    		console.log(i)
    	}
    })(i);
}

//es6 解决方法
var btn=document.getElementsByTagName('button');
for(let i=0;i<btn.length;i++){ 
	btn[i].onclick=function(){ 
    	console.log(i);
    }	
}