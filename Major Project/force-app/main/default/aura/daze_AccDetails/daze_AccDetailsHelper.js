({
	createAcchelper : function(component, event, helper) {
        var action = component.get("c.createAcc");
        
        action.setParams({ 
            name :  component.get("v.name"),
            email :  component.get("v.email"),
            amounte :  component.get("v.ae"),
               
        });
        
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                //console.log('succesfully inserted'  + response.getReturnValue()); 
                //alert("succesfully inserted ");
                alert('Your Data succesfully inserted');
                component.set('v.name','');
                component.set('v.email','');
                component.set('v.ae','');
               // component.set("v.page","AccountDetails");
            }
            else {
                component.set("v.responce",'Error');
            }
           
        });

        $A.enqueueAction(action);

	}
})