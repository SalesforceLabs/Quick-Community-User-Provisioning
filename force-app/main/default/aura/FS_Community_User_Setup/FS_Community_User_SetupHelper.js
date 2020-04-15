({
    /**
     * Change Log: 
     * 3 April 2020
     * Updateting defaultFieldsDisplay to remove contact id, if we already have the community user created no need to include 
     * This seems to throw an error when included 
     * [ "lightning:inputField" , 
             {"fieldName": 'ContactId',  "disabled":false, "value":  component.get("v.contactId") , "aura:id": "input_ContactId"}
            ], 
     * 
     */
    defaultNewUser:function(component,event,helper) {
        let fieldInputs = [ 
            [ "lightning:inputField" , 
             {"fieldName": 'FirstName', "disabled":false, "value":  component.get("v.contactRecord.FirstName") , "aura:id": "input_FirstName"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'LastName', "disabled":false, "value": component.get("v.contactRecord.LastName") , "aura:id": "input_LastName"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'Email', "disabled":false, "value":  component.get("v.contactRecord.Email") , "aura:id": "input_Email"}
            ],
            [ "lightning:inputField" , 
             {"fieldName": 'Username',  "value":  component.get("v.contactRecord.Email") , "aura:id": "input_Username"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'Phone', "disabled":false, "value":  component.get("v.contactRecord.Phone") , "aura:id": "input_Phone"}
            ], 
            
            [ "lightning:inputField" , 
             {"fieldName": 'CommunityNickname', "disabled":false, "value": component.get("v.contactRecord.FirstName") + " " + component.get("v.contactRecord.LastName"), "aura:id": "input_CommunityNickname"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'TimeZoneSidKey', "disabled":false, "aura:id": "input_TimeZoneSidKey"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'LocaleSidKey', "disabled":false,  "aura:id": "input_LocaleSidKey"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'EmailEncodingKey', "disabled":false, "aura:id": "input_EmailEncodingKey"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'ProfilLanguageLocaleKeyId', "disabled":false,  "aura:id": "input_ProfilLanguageLocaleKeyId"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'Alias', "disabled":false, "value":  ( component.get("v.contactRecord.FirstName").substring(0, 1) + component.get("v.contactRecord.LastName")).substr(0,8)  , "aura:id": "input_alias"}
            ]
            , 
            [ "lightning:inputField" , 
             {"fieldName": 'LanguageLocaleKey', "disabled":false,  "aura:id": "input_LanguageLocaleKey"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'ContactId', "disabled":false, "value":  component.get("v.contactId") , "aura:id": "input_ContactId"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'IsActive', "disabled":false, "value":  true , "aura:id": "input_isActive"}
            ]
            , 
            [ "lightning:inputField" , 
             {"fieldName": 'NeedsNewPassword', "disabled":false, "value":  true , "aura:id": "input_NeedsNewPassword"}
            ]
            
        ];
        return fieldInputs ;
    },
    defaultFieldsDisplay:function(component,event,helper){
        let fieldInputs = [ 
            [ "lightning:inputField" , 
             {"fieldName": 'FirstName',  "aura:id": "input_FirstName"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'LastName',  "aura:id": "input_LastName"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'Email',  "aura:id": "input_Email"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'Username', "aura:id": "input_Username"}
            ],            
            [ "lightning:inputField" , 
             {"fieldName": 'Phone', "aura:id": "input_Phone"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'CommunityNickname',   "aura:id": "input_CommunityNickname"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'TimeZoneSidKey', "aura:id": "input_TimeZoneSidKey"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'LocaleSidKey',  "aura:id": "input_LocaleSidKey"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'EmailEncodingKey', "aura:id": "input_EmailEncodingKey"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'ProfilLanguageLocaleKeyId',  "aura:id": "input_ProfilLanguageLocaleKeyId"}
            ], 
            [ "lightning:inputField" , 
             {"fieldName": 'Alias',  "aura:id": "input_alias"}
            ]
            , 
            [ "lightning:inputField" , 
             {"fieldName": 'LanguageLocaleKey',   "aura:id": "input_LanguageLocaleKey"}
            ], 
            
            [ "lightning:inputField" , 
             {"fieldName": 'IsActive', "aura:id": "input_isActive"}
            ]
            , 
            [ "lightning:inputField" , 
             {"fieldName": 'NeedsNewPassword',  "aura:id": "input_NeedsNewPassword"}
            ]
            
        ];
        return fieldInputs ;    
    }, 
    showToast: function(title,message,type){
        var toastMessage = $A.get("e.force:showToast");
        toastMessage.setParams({
            "title": title,
            "message": message, 
            "type": type 
        });
        toastMessage.fire();
        
    }
})