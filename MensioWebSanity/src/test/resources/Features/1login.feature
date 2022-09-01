@Sanity
Feature: Check the login feature of Mensio Web Application

  @login
  Scenario: To verify that user is able to login using valid credentials
    Given user is on the login screen
    When user enter email and password
    And user click on login button
    Then user is navigated to home screen

  