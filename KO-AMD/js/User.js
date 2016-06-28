/**
 * http://usejsdoc.org/
 */

define('js/User', [ 'bower_components/knockout/dist/knockout' ], function(ko) {

	var User = function(params) {
		this.name = ko.observable('Nag');
		this.contact={mobile:'9945674228',email:'nagabhushanamn@gmail.com'}
	};

	return User;

});