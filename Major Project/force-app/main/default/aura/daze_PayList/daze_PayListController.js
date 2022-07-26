({
	gotoHome : function(component, event, helper) {
		component.set("v.nav","Home");
	},
    
    gotoPaymentDetails : function(component, event, helper) {
		component.set("v.nav","PayDetails"); 
	},
     doinit: function(component, event, helper) {
        var pno=component.get("v.pno")|| 1;
        helper.getPayments(component, pno, helper);
	},
    
    navpage: function(component, event, helper) {
        //this funtion call on previous page button
        var pno= component.get("v.pno")|| 1;
         console.log(pno);
        //get the previous button label
        var direction= event.getSource().get("v.value");
        console.log(direction);
        //get the select option 
       // var recordToDisplay=component.find("recordSize").get("v.value");
        //set the currernt page
        if(direction =="Prev"){
            pno=(pno-1);
            helper.getPayments(component,pno,helper);
        }
        else{
           pno=(pno+1);
           helper.getPayments(component,pno,helper);
             console.log(pno);
        }
       
        
        //helper.getAccounts(component,pno,helper);
    },
    viewPayment:function(component, event, helper) {
        var id = event.currentTarget.id;
        console.log(id);
        var action = component.get("c.payment");
        action.setParams({ 
            Id:id          
        });
        //console.log('event trigeer');
        action.setCallback(this, function(response) {
            var state = response.getState();
            //if (state === "SUCCESS") {
                var response=response.getReturnValue();
                console.log(response); 
                //alert("succesfully inserted ");
                component.set('v.accVal',response.paydetails);
                component.set('v.ae',response.ae);
               
            //}
            //else {
            //    component.set("v.responce",'Error');
            //}
           
        });

        $A.enqueueAction(action);
        component.set("v.show","PaymentDetails");
         
	},
    
    movePage: function(component, event, helper) {
        var page=event.getParam('navPage');
        
        if(page=='Home'){
            component.set("v.nav","Home");
        }
        if(page=='PayList'){
            component.set("v.nav","PayList");
        }
		 
	}
})