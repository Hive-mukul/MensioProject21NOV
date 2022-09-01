@Sanity
Feature: Check all the charts are loading properly in National TV 

@Sanity @TelevisionByBrand @SummaryMetrics
Scenario: Verify that Summary Metrics chart is loading properly

When user click on Television by Brand card 
And user directs to the Summary Metrics chart
Then chart gets loaded and Number of Programs is visible
Then take screenshot of the chart 

@Sanity @TelevisionByBrand @ShareOfVoice
Scenario: Verify that Share of Voice chart is loading properly

When user click on Share of Voice sidemenu option
And user directs to Share of Voice chart
Then chart gets loaded and EMV data is visible
Then take screenshot of the chart

@Sanity @TelevisionByBrand @ExposureTrends
Scenario: Verify that Exposure Trends chart is loading properly

When user click on Exposure Trends sidemenu option
And chart gets loaded and EMV is visible
Then take screenshot of the charts
