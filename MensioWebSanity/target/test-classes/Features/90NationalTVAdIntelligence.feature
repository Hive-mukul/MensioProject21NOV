@Sanity 
Feature: Check all the charts are loading properly in National TV Ad Intelligence Chart

@Sanity @AdIntelligence @NationalTV @NationalTVSummaryMetrics 
Scenario: Verify that National TV Ad Intelligence Summary Metrics chart is loading properly

When user click on National TV Ad Intelligence card
Then user navigates to National TV Ad Intelligence screen
Then Share of voice by brand chart gets loaded
And take screenshot of Share of voice by brand chart
Then Share of TV Estimated Spend by Network
And take screenshot of Share of TV Estimated Spend by Network chart
Then Share of TV Estimated Spend by Program chart gets loaded
And take screenshot of TV Estimated Spend by Program chart

@Sanity @AdIntelligence @NationalTV @NationalTVDeliveryTrends 
Scenario: Verify that National TV Ad Intelligence Delivery Trends chart is loading properly

When user click on National TV Ad Intelligence Delivery Trends sidemenu option
Then Overall Delivery Trends chart gets loaded
And take screenshot of Overall delivery trends chart
Then Brand Delivery by Network chart gets loaded
And take screenshot of NationalTV Ad Intelligence Brand Delivery by Network chart

@Sanity @AdIntelligence @NationalTV @NationalTVMixBenchmarks 
Scenario: Verify that National TV Ad Intelligence Mix Benchmarks chart is loading properly

When user click on Mix Benchmarks sidemenu option
Then Distribution by TV Estimated Spend by Network Type chart gets loaded
And take screenshot of TV Estimated Spend by Network Type chart
