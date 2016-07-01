
Ext.define('sample1.view.MainController', {
	
	extend : 'Ext.app.ViewController',

	requires : [ 'Ext.window.MessageBox' ],

	alias : 'controller.main',

	onFormButton : function(btn) {
		var person = this.getViewModel().get('currentPerson');
		var action = btn.getItemId();

		if (person && person.isModel) {
			if ('reject' === action) {
				person.reject();
			}
			if ('commit' === action) {
				person.commit();

				person.reject();
			}
		}

	},
	onGridButton : function(btn) {

		var vm = this.getViewModel();
		var action = btn.getItemId();
		var store = vm.getStore('persons');
		var record;

		if ('add' === action) {
			record = store.insert(0, {})[0];
			vm.set('currentPerson', record);
		}
		if ('reject' === action) {
			store.rejectChanges();
		}
		if ('commit' === action) {
			store.commitChanges();

			record = vm.set('currentPerson');
			record.commit();
			record.reject();
		}

	}

});
