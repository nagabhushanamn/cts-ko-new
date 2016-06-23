/**
 * http://usejsdoc.org/
 */

var trainer = {
	doTeach : function(sub) {
		console.log('teaching ' + sub);

		var notes = sub + " notes ";
		setTimeout(function() {
			try {
				console.log('after timeout....');
				//throw new Error("oops");
				console.log('learning with '+notes);
			} catch (e) {
				console.log('i caught ' + e.message);
			}
		}, 5000);
		console.log('teaching finished....');

	}
};

trainer.doTeach("JS");
