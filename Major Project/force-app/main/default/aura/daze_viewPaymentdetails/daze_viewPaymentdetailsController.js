({
	navigatehome : function(component, event, helper) {
		var navEvnt=component.getEvent('navEvent');
        navEvnt.setParams({
                navPage:'Home'
            });
        navEvnt.fire();
        
	},
    navigateplist : function(component, event, helper) {
		var navEvnt=component.getEvent('navEvent');
        navEvnt.setParams({
                navPage:'PayList'
            });
        navEvnt.fire();
        
	}
})