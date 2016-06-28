/**
 * http://usejsdoc.org/
 */
//
// var mod = {
// doWork : function() {
// console.log('A work...');
// }
// };


//(function() {
//	
//	myApp.b.doWork();
//	myApp.c.doWork();
//
//	var mod = {
//		doWork : function() {
//			console.log('A work...');
//		}
//	};
//
//	//
//	myApp.a = mod;
//
//})();


define('js/a', ['js/b','js/c'], function(b,c) {
	
	b.doWork();
	c.doWork();
	
	var mod = {
		doWork : function() {
			console.log('A work...');
		}
	};
	return mod;
});
