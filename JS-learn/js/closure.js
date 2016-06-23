/**
 * http://usejsdoc.org/
 */

/*
 * 	A closure is a function having access to the parent scope, 
 *  even after the parent function has closed.
 *  
 *  why we need closure ?
 *  
 *  1. to abstract public behav of any module to other.
 *  2. while executing any func async , can able to acess parent-context data.
 *  
 * 
 */

var trainer = {
	name : 'Nag',
	doTeach : function(sub) {
		console.log(this.name + " teaching "+sub);
		var notes = sub+" Notes";  // will get moved to 'HEAP' before context will get destroy
		function learn(){
			console.log(this.name+" leearn with "+notes);
		}
		console.log('teaching finised...');
		return learn;
	} // context destroyed..
};


var learnFunc=trainer.doTeach('JS'); // execution-context created...

var emp1={name:'emp1'};
var emp2={name:'emp2'};

learnFunc.call(emp1);
learnFunc.call(emp2);
