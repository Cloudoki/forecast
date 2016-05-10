$('header div.header-left').append("<div class='dropdown-link'>Export</div>");



var Ext = new (function(){
	
	/**
	 *	Fixed parameters
	 */
	this.nav = 'header div.header-left';
	this.account_id = null;
	
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
	
	this.time = function (){ Ember.run.later(this.init.bind(this), 1800); };
	
	this.init = function () {
		
		defineRoutes();
		
		this.nav = $(this.nav);
		this.account_id = window.localStorage.getItem ('account_id');
		
		// Add navigation
		nav_element = Mustache.render(templates.nav_element, {name: 'Export', url: '/' + this.account_id + '/schedule/projects/extension/show'});
		
		this.nav.append (nav_element);
		
		console.log(typeof App.Router.keys());
		
		App.Router.map(function() {
		    
		    console.log('profit 0');
		    
		    this.route('extension', { path: '/:account_id/schedule/projects/extension', resetNamespace: true }, function(){
			    this.route('show');
			    assignmentRoutes.call(this);
			    
			    console.log('profit 1');
		    });
		    
		});
		
		
		
		//class .wide-modal
		
		//nav_element.on('click', this.modal)
	}

	/**
	 *	View Elements
	 */
	this.modal = function ()
	{
		//this.nav
		$('body').append(Mustache.render(templates.modal, {name: 'Export options'}));
	}	 

		
})();

/* load Extension */
Ext.queue ();

/**
 *	Extension Routes
 */
defineRoutes = function ()
{
	console.log("define 0");
	
	define("forecast/routes/extension/show", ["forecast/mixin/project_modal"], function(ProjectModal) 
	{
		console.log('define 1');
		
		var ExtensionRoute = Ember.Route.extend(ProjectModal, {
	      actions: {
	        closeModal: function(project) {
	          this.transitionTo('projects.index');
	        },
	        goToArchiveRoute: function(project) {
	          this.transitionTo('project.archive', project);
	        },
	        goToDeleteRoute: function(project) {
	          this.transitionTo('project.delete', project);
	        }
	      },
	
	      projectWasSaved: function(project) {
	        log('updated project', project.getProperties('id', 'nameWithCode'));
	        this.send('notify', {
	          text: project.get('nameWithCode') + ' has been updated.',
	          type: 'success'
	        });
	      },
	
	      projectWasRejected: function(project) {
	        log('failed to update project', project.getProperties('id', 'name'));
	        project.rollbackAttributes();
	      },
	
	      dismissDestroyRoute: 'projects.index',
	
	      canAccess: function(model) {
	        return !model.get('isTimeOff');
	      },
	
	      denyAccess: function(model) {
	        this.transitionTo('project', model);
	      }
	    });
	
		return ExtensionRoute;
	});
}

