# SplunkDashboardLoadTimeApp
Splunk Dasbhoard Load Time App based on REST calls to the Job Manager. Includes IA, TA and SA

DEPENDENCIES:

Treemap - https://splunkbase.splunk.com/app/3118/
Status Indicator - https://splunkbase.splunk.com/app/3119/
infobutton app - https://splunkbase.splunk.com/app/3005/

INSTALL:

The app consists of 4 parts: 
  The IA goes on the Indexer and contains the index definitions
  The SA goes on the Search Head or Deployer and contains the visualizations
  The DMC-TA is to be installed on any Splunk machine with REST access to the Splunk Searchheads. It also needs to be able to write to the   indexers
  The SH-TA is to be installed on the Search Heads for which you want to monitor usage and load times
  
CONFIGURATION

IA: Modify index definitions as needed

SH-TA: Make sure you update the host information in the following files:

savedsearches.conf line 10

DMC-TA

Make sure you update the host information in the following files:

savedsearches.conf line 16 (needs to contain 
savedsearches.conf line 24 (needs to contain the DMC Server Group name)

SA: 

Please note there is a reference to an infobutton app which is inhouse built. For more info contact analytics@itility.nl app can be found here: https://splunkbase.splunk.com/app/3005/




