/**
 * http://usejsdoc.org/
 */

Ext.define('sample1.view.PersonView', {
	extend : 'Ext.view.View',
	alias : 'widget.personview',
	publishes : [ 'currentPerson' ],
	bind : {
		store : '{persons}',
		currentPerson : '{currentPerson}'
	},
	config : {
		currentPerson : null
	},
	updateCurrentPerson : function(current, previous) {
		var sm = this.getSelectionModel();
		if (current) {
			sm.select(current);
		}
		if (previous) {
			sm.deselect(previous);
		}
	},
	listeners : {
		//scope : this,
		select:function(view,person){
			this.setCurrentPerson(person);
		},
		beforecontainerclick : function() {
			return false;
		}
	},
	onPersonSelect : function(view, person) {
		this.setCurrentPerson(person);
	},
	itemSelector : 'div.person-item',
	selectedItemCls:'selected',
	itemTpl:[
	         '<div class="person-item">',
	         '<strong>{fname}-{lname}</strong> {age}',
	         '</div>'
	         ].join('')

});
