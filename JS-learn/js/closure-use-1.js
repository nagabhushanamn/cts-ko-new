/**
 * http://usejsdoc.org/
 */

// e.g counter module

//var count = 0; // global var

//function doCount() {
//	//var count = 0;
//	count++;
//}
//function getCount() {
//	return count;
//}

//------------------------------

//function init(){
//	var count=0;  // private
//	// public
//	return {
//		doCount:function(){
//			count++;
//		},
//		getCount:function(){
//			return count;
//		}
//	};
//}
//
//
//var counter=init();

//-----------------------------



// pattern : IIFE of self executable func

var counter=(function(){
	var count=0;  // private
	// public
	return {
		doCount:function(){
			count++;
		},
		getCount:function(){
			return count;
		}
	};
})();

//-----------------------------









