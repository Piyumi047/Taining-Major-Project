({
	doHandleSearchEvent : function(component, event, helper) {
		var searchParam = event.getParam('searchText');
        var action = component.get('c.getRecordList');
        action.setParams({
            sreachText : searchParam   
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            //alert(state);
            if(state === 'SUCCESS'|| state=='DRAFT'){
                var responseValue = response.getReturnValue();
                //console.log('responseValue ', responseValue);
                component.set('v.recordList', responseValue ) ;
                
            }
        });
        $A.enqueueAction(action);
	},
    
   doHandleSelectEvent :function(component, event, helper) {
        //get data from event
        var record =event.getParam('record');
        component.set('v.selectedRecord',record);
       
        //check the label
        var label=component.get('v.labelName');
        //console.log('record ',record.Id);
        //console.log('label',label);
        if(label=='From Account'){
           var sendEvnt=component.getEvent('fAccEvent');
            sendEvnt.setParams({
                faccData:record
            });
            sendEvnt.fire();
        }
        if(label=='To Account'){
           helper.getaehelper(component,record, helper);
           var abc =component.get('v.ae.daze_Amount_Entitled__c');
           console.log('returnnew',abc);
           var toaccEvnt=component.getEvent('toAccEvent');   
        //var a = component.get('v.AmountEntitled.daze_Amount_Entitled__c');
       // console.log('returnnew',a);
          toaccEvnt.setParams({
                   taccData:record,
                   amountE:1000000
                   
                 });
          toaccEvnt.fire();      
        }

        console.log('sendEvnt ',record.Id);
        //var fieldAPIName = component.get('v.fieldName');
        //alert(record[fieldAPIName]);
        //component.set('v.recordValue', record[fieldAPIName]);
        component.set('v.recordList', null);
    },
    
 
    handleRemove: function(component, event, helper){
        event.preventDefault();
        component.set('v.selectedRecord', null);
       // component.set('v.recordValue', null);
    },
    
    dosendEvent :function(component, event, helper) {
        var srecord =omponent.set('v.selectedRecord');
        var sendEvnt=component.getEvent('sendEvent');
        sendEvnt.setParams({
            selectedR:selectRecord
        });
        sendEvnt.fire();
    }

    
})