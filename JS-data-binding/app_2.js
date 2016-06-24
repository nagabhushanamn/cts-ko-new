/**
 * http://usejsdoc.org/
 */

// ---------------------------------------------------------------------------
// Model ( usually , this data loaded from server-side programs with XHR)
var person = {
	name : 'Nag'
};

// ---------------------------------------------------------------------------

// way-2 : jQuery

var vm = {
	name : person.name
};

$(document).ready(function() {

	var $spanNameEle = $('#spanNameEle');
	var $inpNameEle = $('#inpNameEle');
	var $resetBtn = $('#resetBtn');
	var $sayNameBtn = $('#sayNameBtn');

	function applyBindings() {
		$spanNameEle.text(vm.name);
		$inpNameEle.val(vm.name);
	}
	$inpNameEle.on('keyup blur', function(e) {
		vm.name=$inpNameEle.val();
		applyBindings();
	});
	$resetBtn.click(function(e) {
		vm.name=person.name;
		applyBindings();
	});
	$sayNameBtn.click(function(e) {
		console.log('im '+vm.name);
	});
	

	applyBindings();

});

// -----------------------------------------------------
