//ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。
//ES6 模块之中，顶层的this指向undefined，即不应该在顶层代码使用this。


//浏览器加载 ES6 模块

//<script type="module" src="importdemo.js"></script>


/*ES6 模块与 CommonJS 模块的差异*/

//CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
//CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。