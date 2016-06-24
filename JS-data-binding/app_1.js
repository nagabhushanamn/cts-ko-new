/**
 * http://usejsdoc.org/
 */

// ---------------------------------------------------------------------------
// Model ( usually , this data loaded from server-side programs with XHR)
var person = {
	name : 'Nag'
};

// ---------------------------------------------------------------------------

// way-1 : plain-JS


var vm={
		name:person.name
};

var spanNameEle = document.querySelector('#spanNameEle');
var inpNameEle = document.querySelector('#inpNameEle');
var resetBtn = document.querySelector('#resetBtn');
var sayNameBtn=document.querySelector('#sayNameBtn');

inpNameEle.addEventListener('keyup',function(e){
	vm.name=this.value;
	applyBindings();
});
resetBtn.addEventListener('click',function(e){
	vm.name=person.name;
	applyBindings();
});
sayNameBtn.addEventListener('click',function(e){
	console.log('im '+vm.name);
});

function applyBindings() {
	spanNameEle.innerHTML = vm.name;
	inpNameEle.value = vm.name;
}

applyBindings();

//-----------------------------------------------------
