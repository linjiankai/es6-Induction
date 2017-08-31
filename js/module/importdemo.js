

// import { name, add , subtract} from './exportdemo.js';
// console.log(name)
// console.log(add(1,2))
// console.log(subtract(2, 1))


//导入全部
import * as exportdemo from './exportdemo.js'
console.log(exportdemo)

//导入时重命名模板
import { subtract as minus } from './exportdemo.js';
console.log(minus)

//如果要导入默认值的话，就不能加中括号了：
import value from './exportdemo.js';
console.log(value())



/*注意：export import语句不允许出现在 if 语句中*/
f(isTrue) {
    export add; // 这样写会报错
}
function importSomething() {
    import { add } from './example.js'; // 这样写会报错
}