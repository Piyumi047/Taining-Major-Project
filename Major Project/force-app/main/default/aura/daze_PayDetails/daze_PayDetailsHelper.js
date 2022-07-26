({
	createpayhelper : function(component, event, helper) {
        var action = component.get("c.savePaymentMethod");
        var fId=component.get("v.faccount.Id");
        var tId=component.get("v.taccount.Id");
        var amount=component.get("v.payAmount");
        var date=new Date();
        
        if(fId!=tId && amount>'0'){
            action.setParams({ 
                faccName :component.get("v.faccount.Name"),
                faccId :fId,
                taccName :component.get("v.taccount.Name"),
                taccId:tId,
                amount:amount,
                D:date
            });
                    
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    //console.log('succesfully inserted ::: '  + response.getReturnValue()); 
                    //alert("succesfully inserted ");
                    //component.set("v.responce",'succesfully inserted');
                    alert('Succesfully Inserted');                   
		            component.set("v.nav","PayDetails"); 
                     
                }
                else {
                    component.set("v.responce",'Error');
                }
               
            });
    
            $A.enqueueAction(action);
    
        }
    }
})