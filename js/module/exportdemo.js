//模块是自动运行在严格模式下并且没有办法退出运行的 JavaScript 代码。

//export几种导出方式 
//直接导出数据
export const name = "hello world"

//直接导出函数
export function add(a, b){
	return a + b; 
}

//导出引用
function subtract(a, b) {
    return a - b
}

export {subtract};

//重命名：关键字as

export {add as sum} // 这里 add 是本地名称，sum 是导出时使用的名称


//默认导出
export default function () {
	return "默认"
}

//相当于
function value() {
	return "默认"
}
export default value;


//多个引用导出
let def = '1'
function fn(){
	return "1"
}
export {
	def, fn
}




