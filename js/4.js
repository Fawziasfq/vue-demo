//监听事件
var app1 = new Vue({
		el: '#app-1',
		data: {
			counter: 0
		}
	})
	//方法事件处理器
var app2 = new Vue({
		el: '#app-2',
		data: {
			name: 'Vue.js'
		},
		methods: {
			greet: function(event) {
				alert('Hello' + this.name + '!')
				alert(event.target.tagName)
			}
		}
	})
	//内联处理器方法
var app3 = new Vue({
		el: '#app-3',
		methods: {
			say: function(message) {
				alert(message)
			}
		}
	})
	//内联语句处理器中访问原生DOM事件
var app4 = new Vue({
		el: '#app-4',
		methods: {
			warn: function(message, event) {
				//现在可以访问原生DOM事件
				if (event) event.preventDefault()
				alert(message)
			}
		}
	})
	//按键修饰符

//表单控件绑定
var app6 = new Vue({
		el: '#app-6',
		data: {
			message: ''
		}
	})
	//多行文本
var app7 = new Vue({
		el: '#app-7',
		data: {
			message: ''
		}
	})
	//单选框
var checkbox = new Vue({
	el: 'checkbox',
	data: {
		checked: ''
	}
})