/**
 * http://usejsdoc.org/
 */

// query DOM , bind event listeners

//document.addEventListener('DOMContentLoaded',function(){
//	console.log('DOM ready..');
//	var box = document.querySelector('.jumbotron');
//	var hideBtn = document.querySelector('.btn-danger');
//	var showBtn = document.querySelector('.btn-primary');
//
//	hideBtn.addEventListener('click', function(e) {
//		box.style.display = 'none';
//	});
//
//	showBtn.addEventListener('click', function(e) {
//		box.style.display = 'block';
//	});
//});
//
//window.onload=function(){
//};

//-------------------------------------------


//using jQuery

/*
 *  how to use jQuery?
 *  
 *  jQuery('selector',context).action1().action();
 * 
 * 
 */

$(document).ready(function() {
	var $box = $('.jumbotron');
	$('.btn-danger').click(function(e) {
		$box.hide();
	});
	$('.btn-primary').click(function(e) {
		$box.show();
	});
	
	//-------------------------------
	
	var $uname=$('#uname');
	
});


