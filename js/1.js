var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello world!'
	}
})

var app2 = new Vue({
		el: '#app-2',
		data: {
			message: '页面加载于' + new Date()
		}
	})
	//条件
var app3 = new Vue({
		el: '#app-3',
		data: {
			seen: false
		}
	})
	//渲染项目列表
var app4 = new Vue({
		el: '#app-4',
		data: {
			todos: [{
					text: '学习javascript'
				}, {
					text: '学习Vue'
				}, {
					text: '整个牛项目'
				}

			]
		}
	})
	//处理用户输入
var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello Vue.js!'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
})

var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'Hello Vue!'
	}
})

Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList: [{
			text: '蔬菜'
		}, {
			text: '奶酪'
		}, {
			text: '随便其他什么人吃的东西'
		}]
	}
})