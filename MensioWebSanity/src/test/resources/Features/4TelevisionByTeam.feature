@Sanity 
Feature: Check all charts are loading properly in TelevisionByTeam

@Sanity @TelevisionByTeam @VisualExposure @ByBrandandTeam
Scenario: Verify that By Brand and team chart is loading properly

When user click on Television by team card
Then user navigate to By Brand and team chart
And take screenshot of By Brand and team chart

@Sanity @TelevisionByTeam @VisualExposure @ByBrandandTeamAsset 
Scenario: Verify that By Brand Team Asset Type chart is loading properly

When user click on By Brand team asset type side menu option
Then By Brand team asset type chart get loaded
And take screenshot of By brand team asset type chart

@Sanity @TelevisionByTeam @VerbalExposure @VerbalByBrandandTeam 
Scenario: Verify that Verbal By Brand and Team chart is loading properly

When user click on By Brand and Team sidemenu option
Then By Brand and Team chart gets loaded 
And take screenshot of Verbal By Brand and Team chart

