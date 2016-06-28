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
//	var mod = {
//		doWork : function() {
//			console.log('C work...');
//		}
//	};
//
//	myApp.c = mod;
//
//})();


define('js/c', [], function() {
	var mod = {
		doWork : function() {
			console.log('C work...');
		}
	};
	return mod;
});