@Sanity 
Feature: Check all the charts are loading properly in Cross Platform Ad Intelligence Chart

@Sanity @AdIntelligence @CrossPlatform @CrossShareOfVoiceByBrand
Scenario: Verify that Cross Platform Share of Voice by Brand chart is loading properly

When user click on Cross Platform Ad Intelligence Card
Then user navigates to Cross Platform Ad Intelligence Screen
Then Share of Voice by Brand chart gets loaded
And take screenshot of Share of Voice by Brand chart
Then user click on Share of Voice by Brand Owner
Then Share of Voice by Brand Owner chart gets loaded
And take screenshot of Share of Voice by Brand Owner chart

@Sanity @AdIntelligence @CrossPlatform @CrossIndexedbyChannel 
Scenario: Verify that Cross Platform Indexed Spend by Channel chart is loading is properly

When user scroll down to Indexed Spend by Channel section
Then Indexed Spend by Channel chart gets loaded
And take screenshot of Indexed Spend by Channel chart
Then user click on Indexed Spend by Brand Owner 
Then Indexed Spend by Brand Owner chart gets loaded
And take screenshot of Indexed Spend by Brand Owner chart

@Sanity @AdIntelligence @CrossPlatform @CrossIndexedSpendMatrixbyChannel 
Scenario: Verify that Cross Platform Indexed Spend Matrix by Channel chart is loading properly

When user scroll down to Indexed Spend Matrix by Channel section
Then Indexed Spend Matrix by Channel chart gets loaded
And take screenshot of Indexed Spend Matrix by Channel chart
Then user click on Indexed Spend Matrix by Brand Owner
Then Indexed Spend Matrix by Brand Owner chart gets loaded
And take screenshot of Indexed Spend Matrix by Brand Onwer chart

@Sanity @AdIntelligence @CrossPlatform @CrossCommercialMix 
Scenario: Verify that Cross Platform Commercial Mix chart is loading properly

When user click on Commercial Mix sidemenu option
Then Distribution of Estimated Spend by CrossPlatform Ad Format chart gets loaded
And take screenshot of Distribution of Estimated Spend by CrossPlatform Ad Format chart
Then user click on Distribution of Estimated Spend by CrossPlatform Ad Format Brand Owner 
Then Distribution of Estimated Spend by CrossPlatform Ad Format Brand Owner chart gets loaded
And take screenshot of Distribution of Estimated Spend by CrossPlatform Ad Format Brand Owner chart

@Sanity @AdIntelligence @CrossPlatform @CrossDeliveryTrends 
Scenario: Verify that Cross Platform Delivery Trend Charts are loading properly

When user click on Cross Delivery Trends sidemenu option
Then Indexed Delivery Trends by Media Channel chart gets loaded
And take screenshot of Indexed Delivery Trends by Media Channel chart
Then user click on Indexed Delivery Trends by Media Channel Brand Owner 
Then Indexed Delivery Trends by Media Channel Brand Owner chart gets loaded
And take screenshot of Indexed Delivery Trends by Media Channel Brand Owner chart
Then user scroll down to Cross Share of Daily TV Spend chart
Then Cross Share of Daily TV Spend chart gets loaded
And take screenshot of Cross Share of Daily TV Spend chart
Then user click on Daily TV Spend Brand Owner
Then Daily TV Spend Brand Owner chart gets loaded
And take screenshot of Daily TV Spend Brand Owner chart
Then user scroll down to Cross Segment Delivery Trends chart
Then Cross Segment Delivery Trends chart gets loaded
And take screenshot of Cross Segment Delivery Trends chart
Then user click on Cross Segment Delivery Trends Brand Owner
Then Cross Segment Delivery Trends Brand Owner chart gets loaded
And take screenshot of Cross Segment Delivery Trends Brand Owner chart


