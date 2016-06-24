/**
 * http://usejsdoc.org/
 */

// ---------------------------------------------------------------------------
// Model ( usually , this data loaded from server-side programs with XHR)
var person = {
	name : 'Nag'
};

// ---------------------------------------------------------------------------

// way-23 : KO

var vm = {
	name : person.name,
	resetName:function(){
		this.name=person.name;
	},
	sayName:function(){
		console.log('im '+this.name);
	}
};

$(document).ready(function() {
	ko.applyBindings(vm);
});

// -----------------------------------------------------
