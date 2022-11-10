@Sanity 
Feature: Check all charts are loading properly in Theatrical Releases

@Sanity @TheatricalReleases @TRSummaryInsights 
Scenario: Verify that charts in Summary Insights are loading properly

When user click on Theatrical Releases card
Then user navigated to Theatrical Releases screen
Then Theatrical Brand Level Insights chart gets loaded
And take screenshot of Theatrical Brand Level Insights chart
Then TH Relative Exposure Summary chart gets loaded
And take screenshot of TH Relative Exposure Summary chart

@Sanity @TheatricalReleases @THBrandDeepDive
Scenario: Verify that charts in Brand Deep Dive are loading properly

When user click on TH Brand Deep Dive sidemenu option
Then TH Brand Summary chart gets loaded
And take screenshot of TH Brand Summary chart

@Sanity @TheatricalReleases @TheatricalInsights 
Scenario: Verify that charts in Theatrical Insights are loading properly

When user click on Theatrical Insights sidemenu option
Then Genre Incidence chart gets loaded
And take screenshot of Genre Incidence chart
Then Distribution of Segmentation by Genre Chart gets loaded
And take screenshot of Distribution of Segmentation by Genre chart
Then Production Company Insights chart gets loaded
And take screenshot of Production Company Insights
