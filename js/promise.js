/*promise对象*/
/*es5*/
//1.运行一些代码
//2.等一下
//3.运行一些更多的代码
//4.再等一下
//5.然后再运行一些更多的代码

run(0);
setTimeout(function() {
    run(1);    
    setTimeout(function() {
        run(2);
    }, 1000);
}, 1000);
//假如你有10个这样的步骤，很可怕，把它叫做回调地狱

/*es6*/
//promise定义
//简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
//从语法上说，Promise 是一个对象，从它可以获取异步操作的消息

//resolve
var p = new Promise(function(resolve, reject){
    //做一些异步操作
    setTimeout(function(){
        console.log('执行完成');
        resolve('随便什么数据');
    }, 2000);
 });

p.then(function(data){
    console.log(data);
    //后面可以用传过来的数据做些其他操作
    //.......
});


//reject
var p = new Promise(function(resolve, reject){
    setTimeout(function(){
        var num = Math.ceil(Math.random()*10);
        if(num > 5){
        	resolve(num);
        }else{
        	reject("数字太小")
        }
    }, 2000);
 });

p.then(function (data){
		console.log('resolved');
		console.log(data)
	})
 .catch(function(reason){
        console.log('rejected');
        console.log(reason);
   })

//.then, .catch .all .race

/*实例*/
//1.洗菜做饭。
//2.坐下来吃饭。
//3.收拾桌子洗碗。
let state = 1;

function step1(resolve,reject){
    console.log('1.开始-洗菜做饭');
    if(state==1){
        resolve('洗菜做饭--完成');
    }else{
        reject('洗菜做饭--出错');
    }
}


function step2(resolve,reject){
    console.log('2.开始-坐下来吃饭');
    if(state==1){
        resolve('坐下来吃饭--完成');
    }else{
        reject('坐下来吃饭--出错');
    }
}


function step3(resolve,reject){
    console.log('3.开始-收拾桌子洗完');
     if(state==1){
        resolve('收拾桌子洗完--完成');
    }else{
        reject('收拾桌子洗完--出错');
    }
}

new Promise(step1).then(function(val){
    console.log(val);
    return new Promise(step2);

}).then(function(val){
    console.log(val);
    return new Promise(step3);

}).then(function(val){
    console.log(val);
    return val;
});

/**/
var http = {
    get: function(url) {
        var promise = new Promise(function(resolve, reject) {
            $.ajax({
                url: url,
                method: 'get',
                success: function(data) {
                    resolve(data);
                },
                error: function(xhr, statusText) {
                    reject(statusText);
                }
            });
        });
        return promise;
    }
};
http.get('data.php').then(function(data) {
    document.write(data);
}, function(err) {
    document.write(err);
});