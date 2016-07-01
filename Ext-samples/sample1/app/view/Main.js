/**
 * This class is the main view for the application. It is specified in app.js as
 * the "autoCreateViewport" property. That setting automatically applies the
 * "viewport" plugin to promote that instance of this class to the body element.
 * 
 * TODO - Replace this content of this view to suite the needs of your
 * application.
 */

Ext.define('sample1.view.Main', {
	extend : 'Ext.panel.Panel',
	requires : [ 
	             'sample1.view.MainController',
	             'sample1.view.MainModel',
	             'sample1.view.PersonGrid',
	             'sample1.view.PersonForm', 
	             'sample1.view.PersonPanel',
	             'sample1.view.PersonView',
	             'Ext.layout.container.Fit' ],

	alias:'widget.main',             
	controller : 'main',
	viewModel : {
		type : 'main'
	},

	layout : {
		type : 'hbox',
		align : 'stretch'
	},
	defaults:{
		flex:1,
	},
	items : [ {
		xtype : 'container',
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		defaults : {
			flex : 1,
			margin : 5,
			border : true
		},
		items : [ {
			xtype : 'persongrid',
			glyph : 0xf0ce
		}, 
		{
			title : 'DataView',
			glyph : 0xf099,
			autoScroll : true,
			bind : {
				title : '<b>{currentPerson.name}</b>'
			},
			items : [ {
				xtype : 'personview'
			}]
		}]
	},
	{
		xtype : 'container',
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		defaults : {
			flex : 1,
			margin : 5,
			border : true
		},
		items : [ {
			xtype : 'personform',
			glyph : 0xf044
		},
		{
			title:'Data Panel',
			xtype : 'personpanel',
			glyph : 0xf044
		}]
	}]
});
