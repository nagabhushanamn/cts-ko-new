/**
 * http://usejsdoc.org/
 */

function Trainer(name){
	this.tname=name;
	this.doTeach =function() {
		console.log(this.tname + " teaching JS");  // Nag teaching JS
		var self=this;
		function learn() {
			console.log(this.name+' learning js from ' + self.tname); // learning JS from ??
		}
		//learn(); // function-invocation
		var emp1={
				name:'emp1'
		};
		learn.call(emp1); //call invocation
	};
}

var trainer1=new Trainer('Nag'); // constructor invocation
//trainer1.doTeach();    // method invocation


var teachBtn=document.getElementById('teachBtn');
//teachBtn.addEventListener('click',trainer1.doTeach.bind(trainer1));
// or
teachBtn.addEventListener('click',function(){
	trainer1.doTeach();
});
