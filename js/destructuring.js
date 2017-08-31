/*变量的解构赋值*/
/*对象解构*/
/*es5*/
var name = "joke"
var id = "12"
var obj = {name : name, id: id}
console.log(obj)

/*es6*/
let name = "joke"
let id = "12"
let obj = {name, id}
console.log(obj)

//上述反过来可以这样写
let dog = {type: 'animal', name: 'black'}
let { type, name} = dog
console.log(type, name)   //animal black

/*实战使用*/
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;//避免了为这些属性创建临时变量或对象
console.log(id, status, number);


/*数组解构*/
/*es5*/
let a = 1;
let b = 2;
let c = 3;

/*es6*/
let [a, b, c] = [1, 2, 3];
//这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值

//解构不成功
let [foo] = []; //undefined
let [bar, foo] = [1];
//不完全解构
let [x, y] = [1, 2, 3];
//默认值
let [x, y = 'b'] = ['a']; //y = "b"



/*实战使用*/
let [x, y] = [1, 2]
[x, y] = [y, x] // 交换变量


/*字符串解构*/
let [a,b,c,d,f] = 'hello' //类数组的对象
let {length : len} = 'hello';



