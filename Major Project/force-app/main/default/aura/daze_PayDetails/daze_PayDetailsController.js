({
	gotoHome : function(component, event, helper) {
		component.set("v.nav","Home");
	},
    
    gotoPaymentList : function(component, event, helper) {
		component.set("v.nav","PayList"); 
	},
    
    savePayment: function(component, event, helper) {
		helper.createpayhelper(component, event, helper); 
	},
    
    doHandledataEvent :function(component, event, helper) {
        var frecord =event.getParam('faccData');
        //console.log('data ',frecord.Id);
        component.set('v.faccount', frecord);
    },
    doSendToaccEvent: function(component, event, helper) {
        var trecord =event.getParam('taccData');
        var amountE=event.getParam('amountE');
        //console.log('data ',trecord.Id);
        component.set('v.taccount', trecord);
        component.set('v.amount',amountE);
    }
    
})