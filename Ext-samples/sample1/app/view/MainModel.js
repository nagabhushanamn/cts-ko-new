/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('sample1.view.MainModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.main',
	requires : [ 'sample1.model.Person' ],

	data : {
		currenctPerson : null
	},
	
	formulas:{
		dirty:{
			bind:{
				bindTo:'{currentPerson}',
				deep:true
			},
			get:function(data){
				return data?data.dirty:false;
			}
		}
	},

	stores : {
		persons : {
			model : 'sample1.model.Person',
			autoLoad : true,
			proxy : {
				url : 'data/persons.json',
				type : 'ajax',
				reader : {
					type : 'json',
					rootProperty : 'rows'
				}
			}
		}
	}

});