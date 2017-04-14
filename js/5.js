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
Vue.component('child2', {
	props: ['my-message'],
	template: '<span>{{myMessage}}</span>'
})

var app6 = new Vue({
		el: '#app-6'
	})
	// 动态props
Vue.component('child3', {
	props: ['myMessage'],
	template: '<span>{{myMessage}}</span>'
})

var app7 = new Vue({
	el: '#app-7'
})