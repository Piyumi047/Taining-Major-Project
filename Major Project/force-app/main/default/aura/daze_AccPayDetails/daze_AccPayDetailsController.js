({  
    
	doinit: function(component, event,helper) {
        var pno=component.get("v.pno")|| 1;
        //var recordToDisplay=component.find("recordSize").get("v.label");
        //helper.getRecordhelper(component, pno,recordToDisplay);
        helper.getRecordhelper(component, pno,helper);
	},
    
    navpage: function(component, event, helper) {
        //this funtion call on previous page button
        var pno= component.get("v.pno")|| 1;
        console.log(pno);
        //get the previous button label
        var direction= event.getSource().get("v.value");
        console.log(direction);
        //get the select option 
        //var recordToDisplay=component.find("recordSize").get("v.label");
        //set the currernt page
        if(direction =="Prev"){
            pno=(pno-1);
            //helper.getRecordhelper(component,pno,recordToDisplay);
            helper.getRecordhelper(component, pno,helper);
        }
        else{
           pno=(pno+1);
           //helper.getRecordhelper(component,pno,recordToDisplay);
           helper.getRecordhelper(component, pno,helper);
             console.log(pno);
        }
       
        
        //helper.getAccounts(component,pno,helper);
    },
    
    onselectChange: function(Component, event, helper){
        var pno=1;
        //get the select option 
        //var recordToDisplay=component.find("recordSize").get("v.label");
       // helper.getRecordhelper(component,pno,recordToDisplay);
        helper.getRecordhelper(component, pno,helper);
    },
    getid:function(Component, event, helper){
        var id = event.getParam('Aid');
        componet.set('aId',id);
    }
})