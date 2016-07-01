/**
 * The main application class. An instance of this class is created by app.js
 * when it calls Ext.application(). This is the ideal place to handle
 * application launch and initialization details.
 */
Ext.define('sample1.Application', {
	extend : 'Ext.app.Application',
	name : 'sample1',

	requires:[
	          'sample1.view.Main'
	          ],

	stores : [
	// TODO: add global / shared stores here
	],
	
	views:['Main'],

	launch : function() {
		// TODO - Launch the application
		Ext.widget({
			xtype : 'main',
			renderTo : Ext.getBody(),
			height : 480,
			width : 740,
			frame : true,
			title : 'MVVM - data-binding ',
			glyph : 0xf0eb
		});

	}
});
