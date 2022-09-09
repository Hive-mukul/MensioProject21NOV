@Sanity
Feature: Check all the charts are loading properly in National TV 

@Sanity @TelevisionByBrand @SummaryMetrics
Scenario: Verify that Summary Metrics chart is loading properly

When user click on Television by Brand card 
And user directs to the Summary Metrics chart
Then chart gets loaded and Number of Programs is visible
And take screenshot of the Summary Metrics chart 

@Sanity @TelevisionByBrand @ShareOfVoice
Scenario: Verify that Share of Voice chart is loading properly

When user click on Share of Voice sidemenu option
Then chart gets loaded and EMV data is visible
And take screenshot of the Share of Voice chart

@Sanity @TelevisionByBrand @ExposureTrends
Scenario: Verify that Exposure Trends chart is loading properly

When user click on Exposure Trends sidemenu option
And chart gets loaded and EMV is visible
And take screenshot of the Exposure Trends charts

@Sanity @VisualExposure @ByBrand
Scenario: Verify that Visual Exposure - By Brand chart is loading properly

When user click on By Brand sidemenu option 
Then By Brand data gets loaded and table is visible
And take screenshot of By brand chart

@Sanity @VisualExposure @ByBrand&AssetType
Scenario: Verify that Visual Exposure By Brand Asset Type chart is loading properly

When user click on By Brand Asset Type sidemenu option
Then By Brand Asset Type data gets loaded and table is visible
And take screenshot of By Brand Asset type chart

@Sanity @ByProgram @VisualExposure
Scenario: Verify that Visual Exposure - By Program chart is loading properly

When user click on By Program sidemenu option
Then user click on Submit after choosing program and episode 
Then By Program data gets loaded and table is visible
And take screenshot of By Program chart
