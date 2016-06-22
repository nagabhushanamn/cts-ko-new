/**
 * http://usejsdoc.org/
 */


function Person(name, age) {
	this.pname = name;
	this.age = age;
	var self=this;
	setInterval(function() {
		self.age++;
		console.log(self.pname+"-->"+self.age);
	},1000);
}

var p=new Person('Ria', 1);