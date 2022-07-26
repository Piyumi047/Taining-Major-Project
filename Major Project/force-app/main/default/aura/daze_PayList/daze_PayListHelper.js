({
	getPayments : function(component, pno, helper) {
      
        //create a server side action
		var action= component.get("c.fetchPayment");
        //set the param to method
        action.setParams({
            "pageNumber":pno
        });
        
        //set call back
        action.setCallback(this,function(response){
           //store the response return value
          // var state = response.getState();
            
            var result= response.getReturnValue();
            console.log('result----->'+JSON.stringify(response.getReturnValue()));
            
            //set the component attribute with wrapper class
             component.set("v.paymentList", result.allPayments);
             component.set("v.pno", result.pno);
             component.set("v.total", result.total);
             component.set("v.pages",result.pages);
        });
        
        $A.enqueueAction(action);
	}
})