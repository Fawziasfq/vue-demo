//注册组件
Vue.component('my-component', {
	template: '<div>A custom component!</div>'
})

//创建根实例
var app1 = new Vue({
	el: '#app-1'
})

//局部注册
var Child = {
	template: '<div>A custom component!</div>'
}
new Vue({
		el: '#app-2',
		components: {
			'my-component2': Child
		}
	})
	// DOM模板解析说明
Vue.component('my-row', {
	template: '<div>is属性变通使用组件</div>'
})
var app3 = new Vue({
		el: '#app-3'
	})
	// data必须是函数
var data = {
	counter: 0
}

Vue.component('simple-counter', {
	template: '<button v-on:click="counter += 1">{{counter}}</button>',
	//技术上data确实是一个函数，因此Vue不会警告，
	//但是返回给每个组件的实例的确引用了同一个data对象
	data: function() {
		return data
	}
})

var app4 = new Vue({
	el: '#app-4'
})

// 通过prop传递数据
Vue.component('child', {
	//声明props
	props: ['message'],

	template: '<span>{{message}}</span>'
})
var app5 = new Vue({
	el: '#app-5'
})

//HTML不区分大小写，所以HTML中用短横线隔开，js中使用驼峰式
// Vue.component('child2', {
// 	props: ['my-message'],
// 	template: '<span>{{myMessage}}</span>'
// })

// var app6 = new Vue({
// 		el: '#app-6'
// 	})
// prop验证

// Vue.component('example', {
// 	props: {
// 		propA: Number,
// 		propB: [String, Number],
// 		propC: {
// 			type: String,
// 			required: true
// 		},
// 		propD: {
// 			type: Number,
// 			default: 100
// 		},
// 		propE: {
// 			type: Object,
// 			default: function() {
// 				return {
// 					message: 'hello'
// 				}
// 			},
// 			propF: {
// 				validator: function(value) {
// 					return value > 10
// 				}
// 			}
// 		}
// 	}
// })

Vue.component('button-counter', {
	template: '<button v-on:click="increment">{{counter}}</button>',
	data: function() {
		return {
			counter: 0
		}
	},
	methods: {
		increment: function() {
			this.counter += 1
			this.$emit('increment')
		}
	},
})

var app7 = new Vue({
	el: '#app-7',
	data: {
		total: 0
	},
	methods: {
		incrementTotal: function() {
			this.total += 1
		}
	}
})

// 使用自定义事件的表单输入组件
// Vue.component('currency-input', {
// 	template: '\
// 	<span>\
// 	$\
// 	<input\
// 	ref="input"\
// 	v-bind:value="value"\
// 	v-on:input="updateValue($event.target.value)"\
// 	>\
// 	</span>\
// 	',
// 	props: ['value'],
// 	methods: {
// 		//不是直接更新值，而是直接使用此方法来对输入值进行格式化和位数限制
// 		updateValue: function(value) {
// 			var formattedValue = value
// 				//删除两侧的空格符
// 				.trim()
// 				//保留2位小数位
// 				.slice(0, value.indexOf('.') + 3)
// 				//如果值不同意，手动覆盖以保持一致
// 			if (formattedValue !== value) {
// 				this.$refs.input.value = formattedValue
// 			}
// 			//通过input事件发出数值
// 			this.$emit('input', Number(formattedValue))
// 		}
// 	}
// })
// var app9 = new Vue({
// 	el: '#app-9'
// })