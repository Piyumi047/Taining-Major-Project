({
	doSelect : function(component, event, helper) {
		var Index=event.currentTarget.id;
        var selectRecord=component.get('v.rlist')[Index];  
        var selectEvnt=component.getEvent('selectEvent');
        
        selectEvnt.setParams({
            record:selectRecord
        });
        selectEvnt.fire();
	}
})