/**
 * http://usejsdoc.org/
 */

Ext.define('Overrides.config.Config', {
	override : 'BizDash.config.Config',
	getBuildNumber : function() {
		return "Buid Number - " + this.version.split('-')[1];
	}
});