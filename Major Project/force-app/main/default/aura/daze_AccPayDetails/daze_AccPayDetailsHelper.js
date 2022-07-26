({
	getRecordhelper : function(component, pno, helper){
      
        //create a server side action
		var action= component.get('c.fetchPayRecord');
        //var field=component.get('v.fieldLabel');
        //var accid=component.get('v.AccountId');
        //console.log('accountidview',accid)
        //set the param to method
        console.log(component.get('v.fieldLabel'));
        
        var s=component.get('v.aId');
        console.log('aa',s);
        action.setParams({
            "pageNumber":pno,
            "field":component.get('v.fieldLabel'),
            "Id":'0015j00000Dw9U7AAJ'
            //"recordsize":recordToDisplay
        });
        
        //set call back
        action.setCallback(this,function(response){
           //store the response return value
          // var state = response.getState();
            
            var result= response.getReturnValue();
            
            console.log('result----->'+JSON.stringify(response.getReturnValue()));
            
            //set the component attribute with wrapper class
             component.set("v.reList", result.allPayments);
             //component.set("v.pno", result.pno);
             //component.set("v.total", result.total);
             //component.set("v.pages",result.pages);
        });
        
        $A.enqueueAction(action);
	}
    
})