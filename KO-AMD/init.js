/**
 * http://usejsdoc.org/
 */

require([ 'bower_components/knockout/dist/knockout',
          'js/User'],
function(ko,User) {

	var rootViewModel={course:'Knockout'};
	
	ko.components.register('my-component', {
	    template: { require: 'text!/js/user.html' },
	    viewModel: User
	});
	
	ko.applyBindings(rootViewModel);
	
});