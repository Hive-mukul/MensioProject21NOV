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
      "name": "@NBCU"
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
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "user is on the login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.login.user_is_on_the_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.login.user_enter_email_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.login.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to home screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.login.user_is_navigated_to_home_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.login.take_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/94NBCU.feature");
formatter.feature({
  "name": "Check all the charts in NBCU Custom Module",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.scenario({
  "name": "Verify that NBCU Visual By Brand chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "user click on NBCU card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_NBCU_card()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Visual By Rest of the chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "Summary Reporting chart1",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.Summary_Reporting_chart1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of the NBCU_Summary Metrics chart1",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_the_NBCU_Summary_Metrics_chart1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Summary Reporting chart2",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.Summary_Reporting_chart2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of the NBCU_Summary Metrics chart2",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_the_NBCU_Summary_Metrics_chart2()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Visual Exposure By Brand chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "user choose brand",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_brand()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose date",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "NBCU Visual By Brand Chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.NBCU_Visual_By_Brand_Chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of NBCU Visual By Brand chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_NBCU_Visual_By_Brand_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Visual Exposure By Brand \u0026 Asset Type chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "user click on By Brand and Asset type side menu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_By_Brand_and_Asset_type_side_menu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose Brand in By Brand and Asset type",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_Brand_in_By_Brand_and_Asset_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose Date in By Brand and Asset type",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_Date_in_By_Brand_and_Asset_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "By Brand and Asset type chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.By_Brand_and_Asset_type_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of By Brand and Asset type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_By_Brand_and_Asset_type_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Visual Exposure By Program chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "user click on NBCU Visual By Program sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_NBCU_Visual_By_Program_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose date range for By Program",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_date_range_for_By_Program()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose program and episode for By Program",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_program_and_episode_for_By_Program()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on NBCU By Program Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_NBCU_By_Program_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Visual By Program chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.Visual_By_Program_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of NBCU Visual By Program chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_NBCU_Visual_By_Program_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Visual Exposure By Program \u0026 Asset Type chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "user click on NBCU Visual By Program and Asset type chart",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_NBCU_Visual_By_Program_and_Asset_type_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose date range for By Program and Asset type",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_date_range_for_By_Program_and_Asset_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose program and episode for By Program and Asset type chart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_program_and_episode_for_By_Program_and_Asset_type_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on By Program and Asset Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_By_Program_and_Asset_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "NBCU By Program and Asset Type Chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.NBCU_By_Program_and_Asset_Type_Chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of NBCU By Program and Asset type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_NBCU_By_Program_and_Asset_type_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Visual Exposure By Occurrence chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "user click on NBCU Visual By Occurrence sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_NBCU_Visual_By_Occurrence_sidemenu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose Brand for Visual By Occurrence",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_Brand_for_Visual_By_Occurrence()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose date range for Visual By Occurrence",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_date_range_for_Visual_By_Occurrence()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose program and episode for Visual By Occurrence",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_choose_program_and_episode_for_Visual_By_Occurrence()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Submit button for Visual By Occurrence",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.user_click_on_Submit_button_for_Visual_By_Occurrence()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "NBCU Visual By Occurrence chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.NBCU_Visual_By_Occurrence_chart_gets_loaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of NBCU Visual By Occurrence chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_NBCU_Visual_By_Occurrence_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Verbal Exposure By Brand chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "NBCU Verbal bybrand chart",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NBCU.NBCU_Verbal_bybrand_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of the NBCU Verbal bybrand chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_the_NBCU_Verbal_bybrand_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Verbal Exposure By Program chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "NBCU Verbal byprogram chart",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NBCU.NBCU_Verbal_byprogram_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of the NBCU Verbal byprogram chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_the_NBCU_Verbal_byprogram_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that NBCU Verbal Exposure By Occurrence chart loads properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@NBCU"
    }
  ]
});
formatter.step({
  "name": "NBCU verbal occurrence chart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NBCU.NBCU_verbal_occurrence_chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "take screenshot of the NBCU verbal occurrence chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NBCU.take_screenshot_of_the_NBCU_verbal_occurrence_chart()"
});
formatter.result({
  "status": "passed"
});
});