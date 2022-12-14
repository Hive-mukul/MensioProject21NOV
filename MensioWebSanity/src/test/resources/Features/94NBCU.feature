@NBCU
Feature: Check all the charts in NBCU Custom Module

@NBCU
Scenario: Verify that NBCU Visual By Brand chart loads properly

When user click on NBCU card
Then Summary Reporting chart1
And take screenshot of the NBCU_Summary Metrics chart1
Then Summary Reporting chart2
And take screenshot of the NBCU_Summary Metrics chart2
Then user choose brand
Then user choose date
Then NBCU Visual By Brand Chart gets loaded
And take screenshot of NBCU Visual By Brand chart
When user click on By Brand and Asset type side menu option
Then user choose Brand in By Brand and Asset type
Then user choose Date in By Brand and Asset type
Then user click on Submit button
Then By Brand and Asset type chart gets loaded
And take screenshot of By Brand and Asset type chart
When user click on NBCU Visual By Program sidemenu option
Then user choose date range for By Program
Then user choose program and episode for By Program
Then user click on NBCU By Program Submit button
Then Visual By Program chart gets loaded
And take screenshot of NBCU Visual By Program chart
When user click on NBCU Visual By Program and Asset type chart
Then user choose date range for By Program and Asset type
Then user choose program and episode for By Program and Asset type chart
Then user click on By Program and Asset Submit button
Then NBCU By Program and Asset Type Chart gets loaded
And take screenshot of NBCU By Program and Asset type chart
When user click on NBCU Visual By Occurrence sidemenu option
Then user choose Brand for Visual By Occurrence
Then user choose date range for Visual By Occurrence
Then user choose program and episode for Visual By Occurrence
Then user click on Submit button for Visual By Occurrence
Then NBCU Visual By Occurrence chart gets loaded
And take screenshot of NBCU Visual By Occurrence chart
When NBCU Verbal bybrand chart
And take screenshot of the NBCU Verbal bybrand chart
When NBCU Verbal byprogram chart
And take screenshot of the NBCU Verbal byprogram chart
Then NBCU verbal occurrence chart
And take screenshot of the NBCU verbal occurrence chart