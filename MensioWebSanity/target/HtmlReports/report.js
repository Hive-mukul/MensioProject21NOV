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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".jss121\"}\n  (Session info: chrome\u003d104.0.5112.101)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Manus-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:ccc:bc18:522:bc2d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.5\u0027, java.version: \u002717.0.3\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.101, chrome: {chromedriverVersion: 104.0.5112.79 (3cf3e8c8a07d..., userDataDir: /var/folders/5d/gq1pyt791nn...}, goog:chromeOptions: {debuggerAddress: localhost:56447}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 87fec6f34428e4bec2511e05f0856d68\n*** Element info: {Using\u003dclass name, value\u003djss121}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.Step.user_is_navigated_to_home_screen(Step.java:48)\n\tat ✽.user is navigated to home screen(file:///Users/Manu/eclipse-workspace/MensioWebSanity/src/test/resources/Features/1login.feature:9)\n",
  "status": "failed"
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
  "name": "take screenshot of the chart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.take_screenshot_of_the_chart()"
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
  "name": "take screenshot of the chart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.take_screenshot_of_the_chart()"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "take screenshot of the charts",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});