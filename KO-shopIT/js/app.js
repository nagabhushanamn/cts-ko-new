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
			} ]
		}, {
			name : 'Mobile',
			price : 18000,
			description : 'New Model',
			buy : true,
			images : [ {
				source : 'images/Mobile.png',
				title : 'Mobile'
			} ]
		} ];
		
		

		// View-Model
		function ViewModel(items) {
			var self=this;
			self.items = ko.observableArray(ko.utils.arrayMap(items, function(item) {
				item.tab=ko.observable(1);
				return item;
			}));
			self.products = items;
			self.changeTab=function(tabIndex){
				this.tab(tabIndex);
			}
		}

		var vm = new ViewModel(items);
		ko.applyBindings(vm);

	});

})();