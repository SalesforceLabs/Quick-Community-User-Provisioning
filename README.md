<a href="https://githubsfdeploy.herokuapp.com?owner=SalesforceLabs&repo=https://github.com/SalesforceLabs/Quick-Community-User-Provisioning&ref=master">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

# Quick Community User Provisioning

Appexchange Listing ->
https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000G0o0sUAB

A flow template driven from custom metadata which can enable provisioning contacts right from the contact detail page. 

Declarative setup can be performed using custom metadata, to outline what profile and permission set a user will need


Enable your end users to quickly provision contacts without needing to be redirected.


Customize the flow/screens for  additional fields and logic specific to your companies needs. 
We just give you a head start.


Enables the possibility of not needing to be redirected, to a setup page and utilizing a declarative setup using custom metadata


## Description

When your end users are in need of provisioning contacts to community users, sometimes it can be confusing being redirected to a user setup page, remembering which profile and license to give the user. 

With this functionality this takes the confusion away enabling quick and easy setup. 

Even if we dont quite get it right for your companies needs you can customize to fit your needs.

## Setup 

All you need to do is navigate to custom metadata 

### Community Setup

![Community Setup](/screenshots/Custom-metadata-Community-Setup.PNG)

Confirgure your site information
>Label = Label for custom metadata

>Community Setup Name = Name for custom Metadata

>Community Profile Name/Id = 	Either Profile Name/Id for the community  

>Permission Set Name/Id(Optional)


You can then include the community user provisiong flow on the contact flexipage to enable quick provisioning. 

![Flexipage Setup](/screenshots/flexipage-setup.PNG)


Ex.

### Desktop 
![Screenshot1](/screenshots/Contact-Ex-Flexipage-1.PNG)

![Screenshot2](/screenshots/Contact-Ex-Flexipage-2.PNG)


### Mobile

For mobile you can create a action like so 

![Setup](/screenshots/mobile-setup.PNG)



![Mobile1](/screenshots/Mobile-1.PNG)


![Mobile2](/screenshots/mobile-2.PNG)
