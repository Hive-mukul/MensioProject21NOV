@Sanity
Feature: Check all charts are loading properly in Social

@Sanity @Social @SocialSummaryInsights 
Scenario: Verify that charts in Social Summary Insights are loading properly

When user click on Social Card
Then user navigates to Social Screen
Then Social Brand Level Insights chart gets loaded
And take screenshot of Social Brand Level Insights chart
Then Sponsorship Trends chart gets loaded
And take screenshot of Sponsorship Trends chart
Then Social Relative Exposure Summary chart gets loaded 
And take screenshot of Social Relative Exposure Summary chart

@Sanity @Social @SocialBrandDeepDive 
Scenario: Verify that charts in Social Brand Deep Dive are loading properly

When user click on Social Brand Deep Dive sidemenu option
Then Social Brand Deep Dive Chart gets loaded 
And take screenshot of Brand Deep Dive Chart

@Sanity @Social @SocialPlatformWideInsights 
Scenario: Verify that charts in Social Platform Wide Insights are loading properly

When user click on Social Platform Wide Insights sidemenu option
Then Social Platform Wide Insights chart gets loaded 
And take screenshot of Social Platform Wide Insights chart