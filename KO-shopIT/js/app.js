/**
 * http://usejsdoc.org/
 */

(function() {

	$(function() {

		// Model
		var items = [ {
			name : 'Laptop',
			price : 198000,
			description : 'New Model',
			buy : true,
			images : [ {
				source : 'images/Laptop.png',
				title : 'Laptop'
			} ],
			reviews : [ {
				stars : 5,
				author : 'nag@gmail.com',
				comment : 'Good....'
			}, {
				stars : 3,
				author : 'ria@gmail.com',
				comment : 'Bad....'
			} ]
		}, {
			name : 'Mobile',
			price : 18000,
			description : 'New Model',
			buy : true,
			images : [ {
				source : 'images/Mobile.png',
				title : 'Mobile'
			} ],
			reviews : [ {
				stars : 5,
				author : 'nag@gmail.com',
				comment : 'Good....'
			}, {
				stars : 3,
				author : 'ria@gmail.com',
				comment : 'Bad....'
			} ]
		} ];

		// View-Model
		function ViewModel(items) {
			var self = this;
			self.products = ko.observableArray(ko.utils.arrayMap(items, function(item) {
				item.tab = ko.observable(1);
				item.reviews=ko.observableArray(item.reviews);
				return item;
			}));
			self.changeTab = function(tabIndex) {
				this.tab(tabIndex);
			}
			self.newReview={stars:1,author:'nag@gmail.com',comment:'bla'};
			self.addNewReview=function(review){
				this.reviews.push(self.newReview);
				self.newReview={stars:1,author:'',comment:''};
			}
		}

		var vm = new ViewModel(items);
		ko.applyBindings(vm);

	});

})();