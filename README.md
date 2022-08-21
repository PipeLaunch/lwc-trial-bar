# LWC Trial Bar (ALPHA)

![sample](sample.png "sample")

## About

SLDS Trial Bar Generic Component Developed because Salesforce doesn't provide a standard component.

## Features
- Native SLDS Style: https://www.lightningdesignsystem.com/components/trial-bar/
- Support all the SLDS variants
- Integrated on a single component (easy to copy to multiple projects)
- Supports function execution when clicking on a button
- Slot support


## Instructions

### Use on your project
Everything was developed in a single LWC, so you just need a new single component on your project.

- Copy the following files to your project:
    - force-app/main/default/lwc/lwcTrialBar/**
- Call the component and pass the options
```
<c-lwc-trial-bar
```
- See the component `lwcTrialBarLicenseInfo` to see a wrapper example how to use with license management

### Testing and learn how to use it

- Run the `createorg.sh` to create a scratch org
- Open the `LWC Trial Bar` lightning app
- Explore the code on the `samples` component
- Edit the page to preview on mobile devices or login with your mobile device (check the `password.env` file)



## References

https://www.lightningdesignsystem.com/components/trial-bar/#site-main-content

