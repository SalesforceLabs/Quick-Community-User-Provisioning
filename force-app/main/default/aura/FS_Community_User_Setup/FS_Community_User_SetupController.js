({
    handleSubmit : function(component, event, helper) {
        let userEditForm =  component.find("userEditForm") ; 
        let fields = event.getParam('fields');
        let profileId = component.get("v.profileId") ;     
        fields.ProfileId =  profileId ; 
        fields.Id =  (component.get("v.userId") != ''  ) ? component.get("v.userId")  : ''  ; 
        component.set("v.UserSObject", fields ); 
    },
    logError : function(component, event, helper) {
        helper.showToast("Error", "", "error" ); 

        console.log("Error occurred: " + event.getParam('detail')) ; 
    },
    contactLoaded : function(component, event, helper) {
        if(component.get("v.fieldList").length === 0){
            let fieldInputs = (component.get("v.userId")  ) ? helper.defaultFieldsDisplay(component)  :  helper.defaultNewUser(component)  ; 
            $A.createComponents(fieldInputs,
                                function(components, status, errorMessage){
                                    if (status === "SUCCESS") {
                                        component.set("v.fieldList", components)
                                    }
                                    else if (status === "INCOMPLETE") {
                                        console.log("No response from server or client is offline.")
                                        // Show offline error
                                    }
                                        else if (status === "ERROR") {
                                            console.log("Error: " + errorMessage);
                                        }
                                }  ) ;       
            
        }   
    },
    onSuccess: function(component,event,helper){
        component.set("v.userId",  event.getParam("response").id) ; 
        helper.showToast("Success", "User was created successfully", "success" ); 
        let navigate = component.get("v.navigateFlow");
        navigate("NEXT");
    },
    recordLoadError : function(component, event, helper) {
        console.log("Error occurred: " + JSON.parse(JSON.stringify(event.getParams() ))) ; 
    }
})