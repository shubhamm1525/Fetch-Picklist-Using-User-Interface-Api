# Fetch-Picklist-Using-User-Interface-Api

I have been working on Aura (Lightning) components for last 6 months and the common issue with the Dependent picklist which I found while developing an Aura (lightning( component is how to render them on the basis of the record’s recordType.
Salesforce has provided an amazing User Interface API, which Lightning Experience uses to get data and metadata from Salesforce in a single response.
We can also leverage UI API to solve the dependent pick list problem.

We can use the User Interface Api to fetch the picklist values of an object based on its record types.
We can fetch picklist(Dependent & Not Dependent)/Multiselect picklist.

Link for : User Interface API Developer Guide ( https://developer.salesforce.com/docs/atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values.htm )

Syntax Used : /ui-api/object-info/{objectApiName}/picklist-values/{recordTypeId}/{fieldApiName}

objectApiName—The API name of a supported object.
recordTypeId—The ID of the record type.
fieldApiName—The API name of the picklist field on the object.

Using this code you can fetch Dependent picklist values of an object.

Example : Account have two dependent picklist. Project type and Project Subtype.

Project Subtype field values are dependent on Project Type picklist values.

So we will pass the API name of "Project Subtype" field which will return the data containing  Project type and Project Subtype field values.

Prerequisites :

Note: Make sure you have proper field level / object level / Profile level permission.

1) Create remote site settings with your org endpoint.
     String host = System.Url.getSalesforceBaseURL().toExternalForm();
     system.debug(host);
     Run the above statement in execute anonymous window and copy the result in Remote Site Setting.
     
2) Create a custom lable to store the same endpoint.

3) Create the component and apex class as mentioned.

