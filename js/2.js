// var data = {
// 	a: 1
// }
// var vm = new Vue({
// 	el: '#example',
// 	data: data
// })

// vm.$watch('a',function(newVal,oldVal){

// })
var vm = new Vue({
	el: '#app',
	data: {
		message: 3,
		rawHtml: "<em>hello world!</em>",
		dynamicId: true,
		someDynamicCondition: false,
		seen: false,
		url: "www.baidu.com"
	},
	methods: {
		doSomething: function() {
			alert("hello world!")
		}
	}

})