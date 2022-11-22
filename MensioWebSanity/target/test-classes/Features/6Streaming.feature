@Sanity 
Feature: Check all charts are loading properly in Streaming Originals

@Sanity @Streaming @SummaryInsights 
Scenario: Verify that charts in Streaming Summary Insights are loading properly

When user click on Streaming Originals card
Then user navigated to Streaming Originals screen
Then Brand level insights chart gets loaded 
And take screenshot of Brand Level Insights chart
Then Relative Exposure Summary chart gets loaded
And take screenshot of Relative Exposure Summary chart

@Sanity @Streaming @STRMBrandDeepDive 
Scenario: Verify that charts in Streaming Brand Deep Dive are loading properly

When user click on Brand Deep Dive sidemenu option
Then Brand Deep Dive chart gets loaded
And take screenshot of Brand Deep Dive chart

@Sanity @Streaming @PlatformWideInsight 
Scenario: Verify that charts in Platform-Wide Insight are loading properly

When user click on Platform Wide Insight sidemenu option
Then Platform Incidence chart gets loaded
And take screenshot of Platform Incidence chart
Then Distribution of Segmentation by Platform chart gets loaded
And take screenshot of Distribution of Segmentation by Platform chart
Then Production Company Insight chart gets loaded
And take screenshot of Production Company Insight chart