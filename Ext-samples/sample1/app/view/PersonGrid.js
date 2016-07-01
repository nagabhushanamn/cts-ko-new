/**
 * http://usejsdoc.org/
 */

Ext.define('sample1.view.PersonGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.persongrid',
	uses : [ 'Ext.form.field.Number',
	         'Ext.form.field.Text' ],
	requires : [ 'Ext.grid.plugin.CellEditing' ],
	config : {
		currentPerson : null
	},
	publishes : [ 'currentPerson' ],
	bind : {
		currentPerson : '{currentPerson}',
		store : '{persons}',
		title : '<b>{currentPerson.name}</b>'
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
		//select : 'onPersonSelect'
		select:function(grid,person){
			this.setCurrentPerson(person);
		}
	},
	onPersonSelect : function(grid, person) {
		this.setCurrrentPerson(person);
	},
	plugins : [ {
		ptype : 'cellediting',
		clicksToEdit : 2,
		pluginId : 'cellediting'
	} ],
	header : {
		title : 'Person Grid',
		padding : '4 9 5 9',
		items : [ {
			text : 'New',
			xtype : 'button',
			itemId : 'add',
			glyph : 0xf067,
			handler : 'onGridButton'
		}, {
			tooltip : 'Reject All',
			xtype : 'button',
			itemId : 'reject',
			handler : 'onGridButton',
			disabled : true,
			bind : {
				disabled : '{!storeDirty}'
			},
			glyph : 0xf0e2,
			margin : '0 0 0 5'
		}, {
			tooltip : 'Commit All',
			xtype : 'button',
			itemId : 'commit',
			handler : 'onGridButton',
			disabled : true,
			bind : {
				disabled : '{!storeDirty}'
			},
			glyph : 0xf00c,
			margin : '0 0 0 5'
		} ]
	},
	columns : [ {
		text : 'First Name',
		dataIndex : 'fname',
		editor : {
			xtype : 'textfield',
			bind : '{currentPerson.fname}'
		}
	}, {
		text : 'Last Name',
		flex : 1,
		dataIndex : 'lname',
		editor : {
			xtype : 'textfield',
			bind : '{currentPerson.lname}'
		}
	}, {
		text : 'Age',
		dataIndex : 'age',
		editor : {
			xtype : 'textfield',
			bind : '{currentPerson.age}'
		}
	}

	]

});
