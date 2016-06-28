/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */

Ext.Loader.setConfig({
	paths: {
		Ext    : '../ext/src',
		BizDash: 'app'
	}
});

Ext.define('BizDash.Application', {
	extend: 'Ext.app.Application',

	name: 'BizDash',

	requires: [
		'BizDash.config.Config',
		'BizDash.model.Product',
		'BizDash.model.Sale',
		'BizDash.model.User',
		'BizDash.model.WebSiteVisitor'
	],

	views: [
		// TODO: add views here
		'product.ProductGrid',
		'navigation.NavigationTree',
		'user.UsersView'
	],

	controllers: [
		'Main',
		'Root'
		// TODO: add controllers here
	],

	stores: [
		'Users',
		'Products',
		'Navigation',
		'users.Admins',
		'users.Customers',
		'users.Suppliers',
		'WebSiteVisitors'
	],

	launch: function() {
		// TODO - Launch the applicatio

		var panel = Ext.create('Ext.panel.Panel', {

			height: 500,
			width: 500,
			renderTo: Ext.getBody(),
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			items: [{
				xtype: 'tabpanel',
				//itemId: 'mainTabPanel',
				flex: 1,
				items: [{
					xtype: 'panel',
					title: 'Users',
					id: 'usersPanel',
					layout: {
						type: 'vbox',
						align: 'stretch'
					},
					tbar: [{
						xtype: 'button',
						text: 'Edit',
						itemId: 'editButton'
					}],
					items: [{
						xtype: 'form',
						border: 0,
						items: [{
							xtype: 'textfield',
							fieldLabel: 'Name',
							allowBlank: false
						}, {
							xtype: 'textfield',
							fieldLabel: 'Email',
							allowBlank: false
						}],
						buttons: [{
							xtype: 'button',
							text: 'Save',
							action: 'saveUser'
						}]
					}, {
						xtype: 'grid',
						flex: 1,
						border: 0,
						columns: [{
							header: 'Name',
							dataIndex: 'Name',
							flex: 1
						}, {
							header: 'Email',
							dataIndex: 'Email'
						}],
						store: Ext.create('Ext.data.Store', {
							fields: ['Name', 'Email'],
							data: [{
								Name: 'Joe Bloggs',
								Email: 'joe@example.com'
							}, {
								Name: 'Jane Doe',
								Email: 'jane@example.com'
							}]
						})
					}]
				}]
			}, {
				xtype: 'component',
				itemId: 'footerComponent',
				html: 'Footer Information',
				extraOptions: {
					option1: 'test',
					option2: 'test'
				},
				height: 40
			}]
		});



	}
});
