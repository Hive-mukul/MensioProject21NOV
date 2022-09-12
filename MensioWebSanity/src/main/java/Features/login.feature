
@Sanity
Feature: Verify the login feature
 

  @login
  Scenario: verify user is able to login with valid credentials
    Given user is on the login screen of mensio web 
    When title of the page is 
    Then user enters username and password
    Then user clicks on Signin button
    And user directs to Home screen

  