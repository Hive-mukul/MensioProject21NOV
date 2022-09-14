$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/1login.feature");
formatter.feature({
  "name": "Check the login feature of Mensio Web Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@login"
    },
    {
      "name": "@SS"
    }
  ]
});
formatter.scenario({
  "name": "To verify that user is able to login using valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@login"
    },
    {
      "name": "@SS"
    }
  ]
});
formatter.step({
  "name": "user is on the login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.Step.user_is_on_the_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Step.user_enter_email_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Step.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to home screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.user_is_navigated_to_home_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.take_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/3TelevisionByBrand.feature");
formatter.feature({
  "name": "Check all the charts are loading properly in TelevisionByBrand",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify that Summary Metrics chart is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@TelevisionByBrand"
    },
    {
      "name": "@SummaryMetrics"
    },
    {
      "name": "@SS"
    }
  ]
});
formatter.step({
  "name": "user click on Television by Brand card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Step.user_click_on_Television_by_Brand_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user directs to the Summary Metrics chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Step.user_directs_to_the_Summary_Metrics_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "chart gets loaded and Number of Programs is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.chart_gets_loaded_and_Number_of_Programs_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of the Summary Metrics chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Step.take_screenshot_of_the_Summary_Metrics_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/6Streaming.feature");
formatter.feature({
  "name": "Check all charts are loading properly in Streaming Originals",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify that charts in Summary Insights are loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Streaming"
    },
    {
      "name": "@SummaryInsights"
    },
    {
      "name": "@SS"
    }
  ]
});
formatter.step({
  "name": "user click on Streaming Originals card",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user navigated to Streaming Originals screen",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Brand level insights chart gets loaded",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "take screenshot of Brand Level Insights chart",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Relative Exposure Summary chart gets loaded",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "take screenshot of Relative Exposure Summary chart",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});