$('header div.header-left').append("<div class='dropdown-link'>Export</div>");



var Ext = new (function(){
	
	/**
	 *	Fixed parameters
	 */
	this.nav = 'header div.header-left';
	
	
	/**
	 *	Extension Init
	 *	Forecast loads rather slow.
	 *	Therefore, we add a delay, even after queuing the init trigger at the end of the run_loop
	 */
	 
	this.queue = function () 
	{	
		Ember.run._addQueue('emberEnd', 'afterRender');
		Ember.run.scheduleOnce('emberEnd', Ext, Ext.time);
	}
	
	this.time = function (){ Ember.run.later(this.init.bind(this), 1500); };
	
	this.init = function () {
		
		this.nav = $(this.nav);
		
		this.nav.append (Mustache.render(templates.nav_element, {name: 'Export'}));
	}
	
	/**
	 *	View Elements
	 */
	 

		
})();

/* load Extension */
Ext.queue ();