var example1 = new Vue({
	el: '#example-1',
	data: {
		items: [{
			message: 'Foo'
		}, {
			message: 'Bar'
		}]
	}
})

var app1 = new Vue({
	el: '#app-1',
	data: {
		numbers: [1, 2, 3, 4, 5]
	},
	methods: {
		even: function(numbers) {
			return numbers.filter(function(number) {
				return number % 2 === 0
			})
		}
	}
})