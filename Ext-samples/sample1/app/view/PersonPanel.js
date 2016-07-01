/**
 * http://usejsdoc.org/
 */

Ext.define('sample1.view.PersonPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.personpanel',
	bodyPadding : 10,
	bind : {
		data : {
			bindTo : '{currentPerson}',
			deep : true
		},
		title : '<b>{currentPerson.name}</b>'
	},
	tpl : [
	       '<table>',
	       '<tr><td>FirstName:</td><td>{fname}</td></tr>',
	       '<tr><td>Last Name:</td><td>{lname}</td></tr>',
	       '<tr><td>Age</td><td>{age}</td></tr>'
	       ].join('')
});
