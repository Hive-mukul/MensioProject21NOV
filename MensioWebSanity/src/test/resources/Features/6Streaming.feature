@Sanity
Feature: Check all charts are loading properly in Streaming Originals

@Sanity @Streaming @SummaryInsights @SS
Scenario: Verify that charts in Streaming Summary Insights are loading properly

When user click on Streaming Originals card
Then user navigated to Streaming Originals screen
Then Brand level insights chart gets loaded 
And take screenshot of Brand Level Insights chart
Then Relative Exposure Summary chart gets loaded
And take screenshot of Relative Exposure Summary chart