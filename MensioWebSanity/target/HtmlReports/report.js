$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/1login.feature");
formatter.feature({
  "name": "Check the login feature of Mensio Web Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
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
formatter.uri("file:src/test/resources/Features/2homescreen.feature");
formatter.feature({
  "name": "Check all items visibility on home screen",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify all the Branded Content Cards are visible",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@brandedcontent"
    }
  ]
});
formatter.step({
  "name": "Television by Brand card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.Television_by_Brand_card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Television by Team card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.Television_by_Team_card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Television Team as Brands Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.Television_Team_as_Brands_Card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Streaming Originals Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.streaming_Originals_Card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Theatrical Releases Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.theatrical_Releases_Card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Social Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.social_Card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify all the Ad Intelligence Cards are visible",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@adintelligence"
    }
  ]
});
formatter.step({
  "name": "Creative Explorer Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.creative_Explorer_Card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "National TV Ad Intelligence Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.national_TV_Ad_Intelligence_Card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cross-Platform Ad-Intelligence Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.cross_Platform_Ad_Intelligence_Card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "National TV eCPM Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.national_TV_eCPM_Card_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/3TelevisionByBrand.feature");
formatter.feature({
  "name": "Check all the charts are loading properly in National TV",
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
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.take_screenshot_of_the_Summary_Metrics_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Share of Voice chart is loading properly",
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
      "name": "@ShareOfVoice"
    }
  ]
});
formatter.step({
  "name": "user click on Share of Voice sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Step.user_click_on_Share_of_Voice_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user directs to Share of Voice chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Step.user_directs_to_Share_of_Voice_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "chart gets loaded and EMV data is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.chart_gets_loaded_and_EMV_data_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of the Share of Voice chart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.take_screenshot_of_the_Share_of_Voice_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Exposure Trends chart is loading properly",
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
      "name": "@ExposureTrends"
    }
  ]
});
formatter.step({
  "name": "user click on Exposure Trends sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Step.user_click_on_Exposure_Trends_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "chart gets loaded and EMV is visible",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Step.chart_gets_loaded_and_EMV_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of the Exposure Trends charts",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.take_screenshot_of_the_Exposure_Trends_charts()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Visual Exposure - By Brand chart is loading properly",
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
      "name": "@VisualExposure"
    },
    {
      "name": "@ByBrand"
    }
  ]
});
formatter.step({
  "name": "user click on By Brand sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Step.user_click_on_By_Brand_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "By Brand data gets loaded and table is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.By_Brand_data_gets_loaded_and_table_is_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of By brand chart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.take_screenshot_of_By_brand_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Visual Exposure By Brand Asset Type chart is loading properly",
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
      "name": "@VisualExposure"
    },
    {
      "name": "@ByBrand\u0026AssetType"
    }
  ]
});
formatter.step({
  "name": "user click on By Brand Asset Type sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Step.user_click_on_By_Brand_Asset_Type_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "By Brand \u0026 Asset Type data gets loaded and table is visible",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "take screenshot of By Brand \u0026 Asset tyoe chart",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});