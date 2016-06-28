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
//			console.log('B work...');
//		}
//	};
//	
//	myApp.b = mod;
//
//})();


define('js/b', [], function() {
	var mod = {
		doWork : function() {
			console.log('B work...');
		}
	};
	return mod;
});