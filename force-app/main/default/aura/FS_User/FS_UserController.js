({
	viewUser : function(component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get("v.user.Id"),
            "slideDevName": "related"
        });
        navEvt.fire();
	}
})