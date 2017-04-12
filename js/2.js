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
	//计算属性
var app2 = new Vue({
	el: '#app-2',
	data: {
		message: "hello"
	}
})

var app3 = new Vue({
	el: '#app-3',
	data: {
		message: "hello",
		isActive: true,
		hasError: false
	},
	computed: {
		reversedMessage: function() {


			return this.message.split('').reverse().join('')
		}
	}
})
var app4 = new Vue({
		el: '#app-4',
		// //返回绑定对象的属性
		// data: {
		// 	classObject: {
		// 		active: true,
		// 		'text-danger': false
		// 	}
		// }

		//返回绑定对象的计算属性
		data: {
			isActive: true,
			error: null
		},
		computed: {
			classObject: function() {
				return {
					active: this.isActive && !this.error,
					'text-danger': this.error && this.error.type === 'fatal',
				}
			}
		}
	})
	//数组语法
var app5 = new Vue({
	el: '#app-5',
	data: {
		activeClass: 'active',
		errorClass: 'text-danger'
	}
})

//组件
Vue.component('my-component', {
	template: '<p class="foo bar">Hi</p>'
})
var app6 = new Vue({
		el: '#app-6',
		data: {

		}
	})
	//绑定内联语法
var app7 = new Vue({
	el: '#app-7',
	data: {
		activeColor: 'red',
		fontSize: 30,
		styleObject: {
			color: 'red',
			fontSize: '50px'
		},
		baseStyles: {
			background: 'pink'
		}
	}
})