doInit: function (component, event, helper) {
// get the fields API name and pass it to helper function  for 2 Dependent Picklist 
    var controllingFieldAPI = component.get("v.controllingFieldAPI");
    var dependingFieldAPI = component.get("v.dependingFieldAPI");
    var objDetails = component.get("v.Acc");
    var recordTypeName = component.get("v.recordTypeName");
    // call the helper function
    helper.fetchPicklistValues(component,objDetails,controllingFieldAPI, dependingFieldAPI, recordTypeName);
},

onControllerFieldChange: function(component, event, helper) {     
      var controllerValueKey = event.getSource().get("v.value"); // get selected controller field value
      var depnedentFieldMap = component.get("v.depnedentFieldMap");

       if (controllerValueKey != null  && controllerValueKey != '') {
           var ListOfDependentFields = depnedentFieldMap[controllerValueKey];

           if(ListOfDependentFields.length > 0){
               component.set("v.bDisabledDependentFld" , false);  
               helper.fetchDepValues(component, ListOfDependentFields);    
           }else{
               component.set("v.bDisabledDependentFld" , true); 
               // component.set("v.listDependingValues", '--None--');
           }  

       } else {
           component.set("v.listDependingValues", '--None--');
           component.set("v.bDisabledDependentFld" , true);
           component.set("v.PSO.Project_SubType__c", null);
       }
  },
