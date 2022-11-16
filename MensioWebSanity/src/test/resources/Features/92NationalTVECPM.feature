@Sanity
Feature: Check all the charts are loading properly in National TV ecpm Chart

@Sanity @AdIntelligence @ecpm @marketbenchmark 
Scenario: Verify that all charts in National TV eCPM market benchmark are loading properly

When user click on National TV eCPM card
Then user navigated to National TV eCPM screen
Then eCPM by Network Type chart gets loaded 
And user take screenshot of eCPM by Network Type chart
Then scroll to eCPM Trends by Network Type
Then eCPM Trends by Network Type chart gets loaded
And take screenshot of eCPM Trends by Network Type
Then scroll to eCPM YoY Trends by Network Type
Then eCPM YoY Trends by Network Type chart gets loaded
And take screenshot of eCPM YoY Trends by Network Type chart
Then scroll to eCPM Percentage Change by Network Type
Then eCPM Percentage Change by Network Type chart gets loaded
And take screenshot of eCPM Percentage Change by Network Type chart

@Sanity @AdIntelligence @eCPM @NetworkBenchmark 
Scenario: Verify that all charts in National TV eCPM Network Benchmark are loading properly

When user click on Network Benchmark sidemenu option
Then eCPM by Network chart gets loaded
And take screenshot of eCPM by Network
Then scroll down to eCPM by Network and Daypart
Then eCPM by Network and Daypart chart gets loaded
And take screenshot of eCPM by Network and Daypart chart
Then scroll down to eCPM by Network and Genre 
Then eCPM by Network and Genre chart gets loaded
And take screenshot of eCPM by Network and Genre chart

@Sanity @AdIntelligence @eCPM @AudienceBenchmark 
Scenario: Verify that all charts in National TV eCPM Audience Benchmark are loading properly

When user click on Audience Benchmark sidemenu option
Then Network eCPM vs Audience Index chart gets loaded
And take screenshot of Network eCPM vs Audience Index chart
Then scroll down to eCPM by Network and Audience 
Then eCPM by Network and Audience chart gets loaded
And take screenshot of eCPM by Network and Audience chart

@Sanity @AdIntelligence @eCPM @AudienceEfficiency 
Scenario: Verify that all charts in National TV eCPM Audience Efficiency are loading properly

When user click on Audience Efficiency sidemenu option 
Then Audience Index by Network chart gets loaded
And take screenshot of Audience Index by Network chart
