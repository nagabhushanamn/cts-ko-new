/**
 * http://usejsdoc.org/
 */

"use strict";

/*
 * 
 *  'this' keyword
 * 
 */

// why we need 'this' keyword ?

//var person={
//		name:'Nag',
//		sayName:function(){
//			console.log('im '+this.name);
//		}
//};
//
////person.sayName();  
//
//var p=person;
//person={name:'Ria'};
//p.sayName();


//----------------------------------------



//var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
//var p2={name:'Ria',sayName:function(){console.log('im '+this.name);}};

//function sayNameForAll(){
//	console.log('im '+this.name);
//}
//
//// static function-binding
//var p1={name:'Nag',sayName:sayNameForAll};
//var p2={name:'Ria',sayName:sayNameForAll};
//
//sayNameForAll(); // im ??  -> global- execution-context ( this --> global )  : function-invocation
//p1.sayName(); // im Nag    -> p1    - execution-context ( this --> p1     )  : method-invocation 
//p2.sayName(); // im Ria


//-------------------------------------------


var p1={name:'Nag'};
var p2={name:'Ria'};

//

var greetUtil={
		sayName:function(message,from){
			console.log(message + ' im '+this.name +": "+from);
		}
};

//greetUtil.sayName(); // method-invocation


// dynamic function binding:-

	// a. eager invocation
//greetUtil.sayName.call(p1,"Hello","BLR");
//greetUtil.sayName.call(p2,"Hi","CHN");
//
//greetUtil.sayName.apply(p1,["Hello","BLR"]);
//greetUtil.sayName.apply(p2,["Hi","CHN"]);

   //b. lazy ( on-event ) invocation

//var newF=greetUtil.sayName.bind(p1,"Hello","BLR");
//newF();


//--------------------------------------------------------


// i need 1000+ person objs...


// ES-5  --> constructor function

//function Person(name,age){
//	this.name=name;
//	this.age=age;
//	this.sayName=function(){
//		console.log('im '+this.name);
//	};
//}

// ES-6

//class Person{
//	constructor(name,age){
//		this.name=name;
//		this.age=age;
//	}
//	sayName(){
//		console.log('im '+this.name);
//	}
//}
//
//var p1=new Person('Nag', 32); // constructor-invocation  ( this --> new-obj )
//var p2=new Person('Ria', 1);
//
//p1.sayName();
//p2.sayName();

//---------------------------------



/*
 *  in JS , we can invoke func in 4 ways
 * 
 * 
 *  way-1 : function-invocation        ( this --> global-obj)
 *  way-2 : method-invocation          ( this --> invoker-obj)
 *  way-3 : call/apply/bind invocation ( this -- arg-obj  )
 *  way-4 : constructor invocation     ( this --> new-obj )
 * 
 */





























