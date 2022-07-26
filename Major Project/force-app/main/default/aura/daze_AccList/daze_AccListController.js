({  
    //go to home
    gotoHome : function(component, event, helper) {
		component.set("v.nav","Home");
	},
    
    //go to acc Details Page
    gotoAccountDetails : function(component, event, helper) {
		component.set("v.nav","AccDetails");
	},
 
    //Load to account list 
	doinit: function(component, event, helper) {
        var pno=component.get("v.pno")|| 1;
        helper.getAccList(component, pno, helper);
	},
    
    //Navegate the pages
    navpage:function(component, event, helper) {
        //check the page number
        var pno= component.get("v.pno")|| 1;
        // console.log(pno);
        
        //get the  button label value
        var direction= event.getSource().get("v.value");
        //console.log(direction);
        
        //set the currernt page
        if(direction =="Prev"){
            pno=(pno-1);
            helper.getAccList(component,pno,helper);
        }
        else{
           pno=(pno+1);
           helper.getAccList(component,pno,helper);
          //console.log(pno);
        }
    },
    
    viewAccount:function(component, event, helper) {
        var id = event.currentTarget.id;
        console.log(id);
        
        
        var action = component.get("c.getAccount");
        action.setParams({ 
            Id:id          
        });
        console.log('event trigeer');
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var response=response.getReturnValue();
                //console.log(response); 
                //alert("succesfully inserted ");
                component.set('v.accVal',response);
                //set status
                var due =response[0].daze_Due__c;
                console.log(due);
                
                if(due>'0'){
                    var status="OutStanding";
                    var color ="slds-text-color_default";
                }
                else if(due=='0'){
                    var status="Paid in Full";
                    var color ="slds-text-color_success";     
                }
                else if(due<'0'){
                    var status="Overdue";
                    var color ="slds-text-color_error";
                }
                component.set("v.status",status);
                component.set("v.color",color);
                
            }
            else {
                component.set("v.responce",'Error');
            }
           
        });
        $A.enqueueAction(action);
        component.set("v.disp","AccountDetails");
         
	},
    movePage: function(component, event, helper) {
        var page=event.getParam('navPage');
        
        if(page=='Home'){
            component.set("v.nav","Home");
        }
        if(page=='AccList'){
            component.set("v.nav","PayList");
        }
		 
	}
})