 @Sanity @CR
Feature: Check all the creatives are loading properly in Creative Explorer

 @CreativeExplorer
Scenario: Verify that Creative Explorer is loading properly

When user click on Creative Explorer button on home screen
Then discover creatives screen gets loaded
Then user click on a Creative from the list
Then the video is played
And user takes screenshot
