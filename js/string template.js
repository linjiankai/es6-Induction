/*字符串模板*/
/*es5*/
var data = {
	name: 'hello',
	address: 'world'
}
var html = "i am "+ data.name +"" + 
			",live in  "+ data.address +"";
console.log(html)

/*es6*/
var htmles6 = `i am ${data.name} ,live in ${data.address}`

// 属性
var span = `<span data-name= "${data.name}" id="span"></span>`;

//多行
var multi = `Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear,
    Though as for that the passing there
    Had worn them really about the same`
console.log(multi)