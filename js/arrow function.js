/*箭头函数*/
var f = () => 5;
// 等同于
var f = function() { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
    return num1 + num2;
};

//静态绑定this
/*es5*/
var name = "outer"
var obj = {
    name: 'inner',
    fun: function() {
        console.log(this.name) //this指向了所在的对象
    }
}
obj.fun() //inner

/*es6*/
var obj2 = {
    name: "inner",
    fun: () => {
        console.log(this.name); //this指向的是定义箭头函数的对象中的this, ==>window
    }
}
obj2.fun() //outer

//定时器this的妙用
/*es5*/
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

/*es6*/
const obj2 = {
    name: 'my name is obj',
    fn: function() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000)
    }
}

obj2.fn();