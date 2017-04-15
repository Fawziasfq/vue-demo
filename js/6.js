Vue.component('child-component', {
	//有效，因为是在正确的作用域内
	template: '<div v-show="someChildProperty">Child</div>',
	data: function() {
		return {
			someChildProperty: true
		}
	}
})
var app1 = new Vue({
	el: '#app-1'
})