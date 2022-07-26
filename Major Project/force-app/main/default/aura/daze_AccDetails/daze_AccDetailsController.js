({
	gotoHome : function(component, event, helper) {
		component.set("v.nav","Home");
	},
    
    gotoAccountList : function(component, event, helper) {
		component.set("v.nav","AccList"); 
	},
    
    //create account
    saveAccount: function(component, event, helper) {
		helper.createAcchelper(component, event, helper); 
	}
})