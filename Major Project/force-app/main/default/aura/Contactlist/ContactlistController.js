({
	//go to home
    goConlist : function(component, event, helper) {
		component.set("v.nav","ConList");
	},
    
    showContactlist : function(component, event, helper){
        var action =component.get("c.getConList");
        action.setCallback(this,function(data){
            component.set('v.contactList',data.getReturnValue())
        });    
        $A.enqueueAction(action);
    }
})