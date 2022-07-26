({
	gotoHome : function(component, event, helper) {
		component.set("v.nav","Home");
	},
    
    gotoAccountList : function(component, event, helper) {
		component.set("v.nav","AccList"); 
	},
    navigatehome : function(component, event, helper) {
		var navEvnt=component.getEvent('navEvent');
        navEvnt.setParams({
                navPage:'Home'
            });
        navEvnt.fire();
        
	},
    navigateAcclist : function(component, event, helper) {
		var navEvnt=component.getEvent('navEvent');
        navEvnt.setParams({
                navPage:'AccList'
            });
        navEvnt.fire();
        
	}
})