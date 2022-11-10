@Sanity 
Feature: Check all charts are loading properly in Television - Team as Brand 

@Sanity @TeamAsBrand @TeamSummaryBeta 
Scenario: Verify that Team Summary Beta chart is loading properly

When user click on Television Team as Brands card
Then user navigated to Television Team as Brand screen
Then Team Summary Beta chart gets loaded
And take screenshot of Team Summary Beta
Then Team Value Mix chart is loaded 
And take screenshot of Team Value Mix chart

@Sanity @TeamAsBrand @LeagueSummaryBeta 
Scenario: Verify that League Summary Beta chart is loading properly

When user click on League Summary Beta Sidemenu option
Then League Summary Beta chart gets loaded 
And take screenshot of League Summary Beta

@Sanity @TeamAsBrand @LeagueSummaryBeta 
Scenario: Verify that Team Deep Dive Chart is loading properly

When user click on Team Deep Dive sidemenu option
Then Team Deep Dive chart gets loaded
And take screenshot of Team Deep Dive Chart