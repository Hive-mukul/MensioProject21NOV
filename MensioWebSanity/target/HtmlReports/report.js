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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom target frame detached\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\n\tat StepDefinition.CommonUtilities.Chrome(CommonUtilities.java:42)\n\tat StepDefinition.login.user_is_on_the_login_screen(login.java:20)\n\tat ✽.user is on the login screen(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/1login.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter email and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.login.user_enter_email_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.login.user_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to home screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.login.user_is_navigated_to_home_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.login.take_screenshot()"
});
formatter.result({
  "status": "skipped"
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
  "location": "StepDefinition.Home.Television_by_Brand_card_is_visible()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//*[@id\u003d\"sponsorshipEarnedMedia\"]/div\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.Home.Television_by_Brand_card_is_visible(Home.java:15)\n\tat ✽.Television by Brand card is visible(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/2homescreen.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "Television by Team card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.Television_by_Team_card_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Television Team as Brands Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.Television_Team_as_Brands_Card_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Streaming Originals Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.streaming_Originals_Card_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Theatrical Releases Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.theatrical_Releases_Card_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Social Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.social_Card_is_visible()"
});
formatter.result({
  "status": "skipped"
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
  "location": "StepDefinition.Home.creative_Explorer_Card_is_visible()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"7GvlkfOiFupy44CiETA8dw\"]/div}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.Home.creative_Explorer_Card_is_visible(Home.java:60)\n\tat ✽.Creative Explorer Card is visible(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/2homescreen.feature:15)\n",
  "status": "failed"
});
formatter.step({
  "name": "National TV Ad Intelligence Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.national_TV_Ad_Intelligence_Card_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cross-Platform Ad-Intelligence Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.cross_Platform_Ad_Intelligence_Card_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "National TV eCPM Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Home.national_TV_eCPM_Card_is_visible()"
});
formatter.result({
  "status": "skipped"
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
      "name": "@Dry"
    }
  ]
});
formatter.step({
  "name": "user click on Television by Brand card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_click_on_Television_by_Brand_card()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div[2]/div/div/div[2]/div[2]/div/a[1]/div}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.TelevisionByBrand.user_click_on_Television_by_Brand_card(TelevisionByBrand.java:20)\n\tat ✽.user click on Television by Brand card(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/3TelevisionByBrand.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on Summary Metrics sidemenu icon",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_click_on_Summary_Metrics_sidemenu_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user directs to the Summary Metrics chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_directs_to_the_Summary_Metrics_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "chart gets loaded and Number of Programs is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.chart_gets_loaded_and_Number_of_Programs_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of the Summary Metrics chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.take_screenshot_of_the_Summary_Metrics_chart()"
});
formatter.result({
  "status": "skipped"
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
    },
    {
      "name": "@Dry"
    }
  ]
});
formatter.step({
  "name": "user click on Share of Voice sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_click_on_Share_of_Voice_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[5]/a/p}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.TelevisionByBrand.user_click_on_Share_of_Voice_sidemenu_option(TelevisionByBrand.java:58)\n\tat ✽.user click on Share of Voice sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/3TelevisionByBrand.feature:16)\n",
  "status": "failed"
});
formatter.step({
  "name": "chart gets loaded and EMV data is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.chart_gets_loaded_and_EMV_data_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of the Share of Voice chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.take_screenshot_of_the_Share_of_Voice_chart()"
});
formatter.result({
  "status": "skipped"
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
    },
    {
      "name": "@Dry"
    }
  ]
});
formatter.step({
  "name": "user click on Exposure Trends sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_click_on_Exposure_Trends_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.TelevisionByBrand.user_click_on_Exposure_Trends_sidemenu_option(TelevisionByBrand.java:77)\n\tat ✽.user click on Exposure Trends sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/3TelevisionByBrand.feature:23)\n",
  "status": "failed"
});
formatter.step({
  "name": "chart gets loaded and EMV is visible",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.chart_gets_loaded_and_EMV_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of the Exposure Trends charts",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.take_screenshot_of_the_Exposure_Trends_charts()"
});
formatter.result({
  "status": "skipped"
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
  "location": "StepDefinition.TelevisionByBrand.user_click_on_By_Brand_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[6]/a/p}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.TelevisionByBrand.user_click_on_By_Brand_sidemenu_option(TelevisionByBrand.java:96)\n\tat ✽.user click on By Brand sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/3TelevisionByBrand.feature:30)\n",
  "status": "failed"
});
formatter.step({
  "name": "By Brand data gets loaded and table is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.By_Brand_data_gets_loaded_and_table_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of By brand chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.take_screenshot_of_By_brand_chart()"
});
formatter.result({
  "status": "skipped"
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
  "location": "StepDefinition.TelevisionByBrand.user_click_on_By_Brand_Asset_Type_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[7]/a/p}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.TelevisionByBrand.user_click_on_By_Brand_Asset_Type_sidemenu_option(TelevisionByBrand.java:114)\n\tat ✽.user click on By Brand Asset Type sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/3TelevisionByBrand.feature:37)\n",
  "status": "failed"
});
formatter.step({
  "name": "By Brand Asset Type data gets loaded and table is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.By_Brand_Asset_Type_data_gets_loaded_and_table_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of By Brand Asset type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.take_screenshot_of_By_Brand_Asset_type_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that Visual Exposure - By Program chart is loading properly",
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
      "name": "@ByProgram"
    },
    {
      "name": "@VisualExposure"
    }
  ]
});
formatter.step({
  "name": "user click on By Program sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_click_on_By_Program_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[8]/a/p}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.TelevisionByBrand.user_click_on_By_Program_sidemenu_option(TelevisionByBrand.java:132)\n\tat ✽.user click on By Program sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/3TelevisionByBrand.feature:44)\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on Submit after choosing program and episode",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_click_on_Submit_after_choosing_program_and_episode()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "By Program data gets loaded and table is visible",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "take screenshot of By Program chart",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verify that Verbal Exposure - By Brand chart is loading properly",
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
      "name": "@VerbalExposure"
    },
    {
      "name": "@VerbalByBrand"
    }
  ]
});
formatter.step({
  "name": "user click on Verbal Exposure By Brand sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.user_click_on_Verbal_Exposure_By_Brand_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[11]/a/p}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.TelevisionByBrand.user_click_on_Verbal_Exposure_By_Brand_sidemenu_option(TelevisionByBrand.java:150)\n\tat ✽.user click on Verbal Exposure By Brand sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/3TelevisionByBrand.feature:52)\n",
  "status": "failed"
});
formatter.step({
  "name": "Verbal Exposure by program data gets loaded and table in visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.Verbal_Exposure_by_program_data_gets_loaded_and_table_in_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Verbal Exposure by Brand chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByBrand.take_screenshot_of_Verbal_Exposure_by_Brand_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/4TelevisionByTeam.feature");
formatter.feature({
  "name": "Check all charts are loading properly in TelevisionByTeam",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify that By Brand and team chart is loading properly",
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
      "name": "@TelevisionByTeam"
    },
    {
      "name": "@VisualExposure"
    },
    {
      "name": "@ByBrandandTeam"
    }
  ]
});
formatter.step({
  "name": "user click on Television by team card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.user_click_on_Television_by_team_card()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"root\"]/div[1]/div[1]/div/a[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.CommonUtilities.Home(CommonUtilities.java:49)\n\tat StepDefinition.TelevisionByTeam.user_click_on_Television_by_team_card(TelevisionByTeam.java:17)\n\tat ✽.user click on Television by team card(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/4TelevisionByTeam.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "user navigate to By Brand and team chart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.user_navigate_to_By_Brand_and_team_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of By Brand and team chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.take_screenshot_of_By_Brand_and_team_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that By Brand Team Asset Type chart is loading properly",
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
      "name": "@TelevisionByTeam"
    },
    {
      "name": "@VisualExposure"
    },
    {
      "name": "@ByBrandandTeamAsset"
    }
  ]
});
formatter.step({
  "name": "user click on By Brand team asset type side menu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.user_click_on_By_Brand_team_asset_type_side_menu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/a/p}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.TelevisionByTeam.user_click_on_By_Brand_team_asset_type_side_menu_option(TelevisionByTeam.java:39)\n\tat ✽.user click on By Brand team asset type side menu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/4TelevisionByTeam.feature:14)\n",
  "status": "failed"
});
formatter.step({
  "name": "By Brand team asset type chart get loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.By_Brand_team_asset_type_chart_get_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of By brand team asset type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.take_screenshot_of_By_brand_team_asset_type_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that Verbal By Brand and Team chart is loading properly",
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
      "name": "@TelevisionByTeam"
    },
    {
      "name": "@VerbalExposure"
    },
    {
      "name": "@VerbalByBrandandTeam"
    }
  ]
});
formatter.step({
  "name": "user click on By Brand and Team sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.user_click_on_By_Brand_and_Team_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[7]/a/p}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.TelevisionByTeam.user_click_on_By_Brand_and_Team_sidemenu_option(TelevisionByTeam.java:57)\n\tat ✽.user click on By Brand and Team sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/4TelevisionByTeam.feature:21)\n",
  "status": "failed"
});
formatter.step({
  "name": "By Brand and Team chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.By_Brand_and_Team_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Verbal By Brand and Team chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TelevisionByTeam.take_screenshot_of_Verbal_By_Brand_and_Team_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/5TelevisionTeamasBrand.feature");
formatter.feature({
  "name": "Check all charts are loading properly in Television - Team as Brand",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify that Team Summary Beta chart is loading properly",
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
      "name": "@TeamAsBrand"
    },
    {
      "name": "@TeamSummaryBeta"
    }
  ]
});
formatter.step({
  "name": "user click on Television Team as Brands card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.user_click_on_Television_Team_as_Brands_card()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"root\"]/div[1]/div[1]/div/a[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.CommonUtilities.Home(CommonUtilities.java:49)\n\tat StepDefinition.TeamAsBrand.user_click_on_Television_Team_as_Brands_card(TeamAsBrand.java:20)\n\tat ✽.user click on Television Team as Brands card(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/5TelevisionTeamasBrand.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "user navigated to Television Team as Brand screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.user_navigated_to_Television_Team_as_Brand_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Team Summary Beta chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.Team_Summary_Beta_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Team Summary Beta",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.take_screenshot_of_Team_Summary_Beta()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Team Value Mix chart is loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.Team_Value_Mix_chart_is_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Team Value Mix chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.take_screenshot_of_Team_Value_Mix_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that League Summary Beta chart is loading properly",
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
      "name": "@TeamAsBrand"
    },
    {
      "name": "@LeagueSummaryBeta"
    }
  ]
});
formatter.step({
  "name": "user click on League Summary Beta Sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.user_click_on_League_Summary_Beta_Sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/a/p}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.TeamAsBrand.user_click_on_League_Summary_Beta_Sidemenu_option(TeamAsBrand.java:60)\n\tat ✽.user click on League Summary Beta Sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/5TelevisionTeamasBrand.feature:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "League Summary Beta chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.League_Summary_Beta_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of League Summary Beta",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.take_screenshot_of_League_Summary_Beta()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that Team Deep Dive Chart is loading properly",
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
      "name": "@TeamAsBrand"
    },
    {
      "name": "@LeagueSummaryBeta"
    }
  ]
});
formatter.step({
  "name": "user click on Team Deep Dive sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.user_click_on_Team_Deep_Dive_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.TeamAsBrand.user_click_on_Team_Deep_Dive_sidemenu_option(TeamAsBrand.java:79)\n\tat ✽.user click on Team Deep Dive sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/5TelevisionTeamasBrand.feature:24)\n",
  "status": "failed"
});
formatter.step({
  "name": "Team Deep Dive chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.Team_Deep_Dive_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Team Deep Dive Chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.TeamAsBrand.take_screenshot_of_Team_Deep_Dive_Chart()"
});
formatter.result({
  "status": "skipped"
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
  "name": "Verify that charts in Streaming Summary Insights are loading properly",
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
    }
  ]
});
formatter.step({
  "name": "user click on Streaming Originals card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.user_click_on_Streaming_Originals_card()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"root\"]/div[1]/div[1]/div/a[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.CommonUtilities.Home(CommonUtilities.java:49)\n\tat StepDefinition.StreamingOriginals.user_click_on_Streaming_Originals_card(StreamingOriginals.java:20)\n\tat ✽.user click on Streaming Originals card(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/6Streaming.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "user navigated to Streaming Originals screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.user_navigated_to_Streaming_Originals_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Brand level insights chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.Brand_level_insights_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Brand Level Insights chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.take_screenshot_of_Brand_Level_Insights_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Relative Exposure Summary chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.Relative_Exposure_Summary_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Relative Exposure Summary chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.take_screenshot_of_Relative_Exposure_Summary_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that charts in Streaming Brand Deep Dive are loading properly",
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
      "name": "@STRMBrandDeepDive"
    }
  ]
});
formatter.step({
  "name": "user click on Brand Deep Dive sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.user_click_on_Brand_Deep_Dive_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.StreamingOriginals.user_click_on_Brand_Deep_Dive_sidemenu_option(StreamingOriginals.java:61)\n\tat ✽.user click on Brand Deep Dive sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/6Streaming.feature:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "Brand Deep Dive chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.Brand_Deep_Dive_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Brand Deep Dive chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.take_screenshot_of_Brand_Deep_Dive_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that charts in Platform-Wide Insight are loading properly",
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
      "name": "@PlatformWideInsight"
    }
  ]
});
formatter.step({
  "name": "user click on Platform Wide Insight sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.user_click_on_Platform_Wide_Insight_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[6]/a/p}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.StreamingOriginals.user_click_on_Platform_Wide_Insight_sidemenu_option(StreamingOriginals.java:80)\n\tat ✽.user click on Platform Wide Insight sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/6Streaming.feature:24)\n",
  "status": "failed"
});
formatter.step({
  "name": "Platform Incidence chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.Platform_Incidence_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Platform Incidence chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.take_screenshot_of_Platform_Incidence_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Distribution of Segmentation by Platform chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.Distribution_of_Segmentation_by_Platform_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Distribution of Segmentation by Platform chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.take_screenshot_of_Distribution_of_Segmentation_by_Platform_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Production Company Insight chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.Production_Company_Insight_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Production Company Insight chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.StreamingOriginals.take_screenshot_of_Production_Company_Insight_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/7TheatricalReleases.feature");
formatter.feature({
  "name": "Check all charts are loading properly in Theatrical Releases",
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
      "name": "@TheatricalReleases"
    },
    {
      "name": "@TRSummaryInsights"
    }
  ]
});
formatter.step({
  "name": "user click on Theatrical Releases card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Theatrical.user_click_on_Theatrical_Releases_card()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"root\"]/div[1]/div[1]/div/a[1]}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.CommonUtilities.Home(CommonUtilities.java:49)\n\tat StepDefinition.Theatrical.user_click_on_Theatrical_Releases_card(Theatrical.java:19)\n\tat ✽.user click on Theatrical Releases card(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/7TheatricalReleases.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "user navigated to Theatrical Releases screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Theatrical.user_navigated_to_Theatrical_Releases_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Theatrical Brand Level Insights chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Theatrical.Theatrical_Brand_Level_Insights_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Theatrical Brand Level Insights chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Theatrical.take_screenshot_of_Theatrical_Brand_Level_Insights_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "TH Relative Exposure Summary chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Theatrical.TH_Relative_Exposure_Summary_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of TH Relative Exposure Summary chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Theatrical.take_screenshot_of_TH_Relative_Exposure_Summary_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that charts in Brand Deep Dive are loading properly",
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
      "name": "@TheatricalReleases"
    },
    {
      "name": "@THBrandDeepDive"
    }
  ]
});
formatter.step({
  "name": "user click on TH Brand Deep Dive sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Theatrical.user_click_on_TH_Brand_Deep_Dive_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/a/p}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.Theatrical.user_click_on_TH_Brand_Deep_Dive_sidemenu_option(Theatrical.java:56)\n\tat ✽.user click on TH Brand Deep Dive sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/7TheatricalReleases.feature:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "TH Brand Summary chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Theatrical.TH_Brand_Summary_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of TH Brand Summary chart",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verify that charts in Theatrical Insights are loading properly",
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
      "name": "@TheatricalReleases"
    },
    {
      "name": "@TheatricalInsights"
    }
  ]
});
formatter.step({
  "name": "user click on Theatrical Insights sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Theatrical.user_click_on_Theatrical_Insights_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[6]/a/p}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.Theatrical.user_click_on_Theatrical_Insights_sidemenu_option(Theatrical.java:70)\n\tat ✽.user click on Theatrical Insights sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/7TheatricalReleases.feature:24)\n",
  "status": "failed"
});
formatter.step({
  "name": "Genre Incidence chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Theatrical.Genre_Incidence_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Genre Incidence chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Theatrical.take_screenshot_of_Genre_Incidence_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Distribution of Segmentation by Genre Chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Theatrical.Distribution_of_Segmentation_by_Genre_Chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Distribution of Segmentation by Genre chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Theatrical.take_screenshot_of_Distribution_of_Segmentation_by_Genre_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Production Company Insights chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Theatrical.Production_Company_Insights_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Production Company Insights",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Theatrical.take_screenshot_of_Production_Company_Insights()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/8Social.feature");
formatter.feature({
  "name": "Check all charts are loading properly in Social",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify that charts in Social Summary Insights are loading properly",
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
      "name": "@Social"
    },
    {
      "name": "@SocialSummaryInsights"
    }
  ]
});
formatter.step({
  "name": "user click on Social Card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Social.user_click_on_Social_Card()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"root\"]/div[1]/div[1]/div/a[1]}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.CommonUtilities.Home(CommonUtilities.java:49)\n\tat StepDefinition.Social.user_click_on_Social_Card(Social.java:19)\n\tat ✽.user click on Social Card(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/8Social.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "user navigates to Social Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Social.user_navigates_to_Social_Screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Social Brand Level Insights chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Social.Social_Brand_Level_Insights_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Social Brand Level Insights chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Social.take_screenshot_of_Social_Brand_Level_Insights_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Sponsorship Trends chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Social.Sponsorship_Trends_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Sponsorship Trends chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Social.take_screenshot_of_Sponsorship_Trends_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Social Relative Exposure Summary chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Social.Social_Relative_Exposure_Summary_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Social Relative Exposure Summary chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Social.take_screenshot_of_Social_Relative_Exposure_Summary_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that charts in Social Brand Deep Dive are loading properly",
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
      "name": "@Social"
    },
    {
      "name": "@SocialBrandDeepDive"
    }
  ]
});
formatter.step({
  "name": "user click on Social Brand Deep Dive sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Social.user_click_on_Social_Brand_Deep_Dive_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.Social.user_click_on_Social_Brand_Deep_Dive_sidemenu_option(Social.java:73)\n\tat ✽.user click on Social Brand Deep Dive sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/8Social.feature:19)\n",
  "status": "failed"
});
formatter.step({
  "name": "Social Brand Deep Dive Chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Social.Social_Brand_Deep_Dive_Chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Brand Deep Dive Chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Social.take_screenshot_of_Brand_Deep_Dive_Chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that charts in Social Platform Wide Insights are loading properly",
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
      "name": "@Social"
    },
    {
      "name": "@SocialPlatformWideInsights"
    }
  ]
});
formatter.step({
  "name": "user click on Social Platform Wide Insights sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Social.user_click_on_Social_Platform_Wide_Insights_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[6]/a/p}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.Social.user_click_on_Social_Platform_Wide_Insights_sidemenu_option(Social.java:92)\n\tat ✽.user click on Social Platform Wide Insights sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/8Social.feature:26)\n",
  "status": "failed"
});
formatter.step({
  "name": "Social Platform Wide Insights chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Social.Social_Platform_Wide_Insights_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Social Platform Wide Insights chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Social.take_screenshot_of_Social_Platform_Wide_Insights_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/90NationalTVAdIntelligence.feature");
formatter.feature({
  "name": "Check all the charts are loading properly in National TV Ad Intelligence Chart",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify that National TV Ad Intelligence Summary Metrics chart is loading properly",
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
      "name": "@AdIntelligence"
    },
    {
      "name": "@NationalTV"
    },
    {
      "name": "@NationalTVSummaryMetrics"
    }
  ]
});
formatter.step({
  "name": "user click on National TV Ad Intelligence card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.user_click_on_National_TV_Ad_Intelligence_card()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"root\"]/div[1]/div[1]/div/a[1]}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.CommonUtilities.Home(CommonUtilities.java:49)\n\tat StepDefinition.NationalTVAdIntelligence.user_click_on_National_TV_Ad_Intelligence_card(NationalTVAdIntelligence.java:19)\n\tat ✽.user click on National TV Ad Intelligence card(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/90NationalTVAdIntelligence.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "user navigates to National TV Ad Intelligence screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.user_navigates_to_National_TV_Ad_Intelligence_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Share of voice by brand chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.Share_of_voice_by_brand_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Share of voice by brand chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.take_screenshot_of_Share_of_voice_by_brand_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Share of TV Estimated Spend by Network",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.Share_of_TV_Estimated_Spend_by_Network()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Share of TV Estimated Spend by Network chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.take_screenshot_of_Share_of_TV_Estimated_Spend_by_Network_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Share of TV Estimated Spend by Program chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.Share_of_TV_Estimated_Spend_by_Program_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of TV Estimated Spend by Program chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.take_screenshot_of_TV_Estimated_Spend_by_Program_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that National TV Ad Intelligence Delivery Trends chart is loading properly",
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
      "name": "@AdIntelligence"
    },
    {
      "name": "@NationalTV"
    },
    {
      "name": "@NationalTVDeliveryTrends"
    }
  ]
});
formatter.step({
  "name": "user click on National TV Ad Intelligence Delivery Trends sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.user_click_on_National_TV_Ad_Intelligence_Delivery_Trends_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/a/p}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.NationalTVAdIntelligence.user_click_on_National_TV_Ad_Intelligence_Delivery_Trends_sidemenu_option(NationalTVAdIntelligence.java:73)\n\tat ✽.user click on National TV Ad Intelligence Delivery Trends sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/90NationalTVAdIntelligence.feature:19)\n",
  "status": "failed"
});
formatter.step({
  "name": "Overall Delivery Trends chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.Overall_Delivery_Trends_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Overall delivery trends chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.take_screenshot_of_Overall_delivery_trends_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Brand Delivery by Network chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.Brand_Delivery_by_Network_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of NationalTV Ad Intelligence Brand Delivery by Network chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.take_screenshot_of_NationalTV_Ad_Intelligence_Brand_Delivery_by_Network_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that National TV Ad Intelligence Mix Benchmarks chart is loading properly",
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
      "name": "@AdIntelligence"
    },
    {
      "name": "@NationalTV"
    },
    {
      "name": "@NationalTVMixBenchmarks"
    }
  ]
});
formatter.step({
  "name": "user click on Mix Benchmarks sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.user_click_on_Mix_Benchmarks_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.NationalTVAdIntelligence.user_click_on_Mix_Benchmarks_sidemenu_option(NationalTVAdIntelligence.java:106)\n\tat ✽.user click on Mix Benchmarks sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/90NationalTVAdIntelligence.feature:28)\n",
  "status": "failed"
});
formatter.step({
  "name": "Distribution by TV Estimated Spend by Network Type chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.Distribution_by_TV_Estimated_Spend_by_Network_Type_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of TV Estimated Spend by Network Type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NationalTVAdIntelligence.take_screenshot_of_TV_Estimated_Spend_by_Network_Type_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/91CrossPlatformAdIntelligence.feature");
formatter.feature({
  "name": "Check all the charts are loading properly in Cross Platform Ad Intelligence Chart",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify that Cross Platform Share of Voice by Brand chart is loading properly",
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
      "name": "@AdIntelligence"
    },
    {
      "name": "@CrossPlatform"
    },
    {
      "name": "@CrossShareOfVoiceByBrand"
    }
  ]
});
formatter.step({
  "name": "user click on Cross Platform Ad Intelligence Card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Cross_Platform_Ad_Intelligence_Card()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"root\"]/div[1]/div[1]/div/a[1]}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.CommonUtilities.Home(CommonUtilities.java:49)\n\tat StepDefinition.CrossPlatformAdIntelligence.user_click_on_Cross_Platform_Ad_Intelligence_Card(CrossPlatformAdIntelligence.java:20)\n\tat ✽.user click on Cross Platform Ad Intelligence Card(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/91CrossPlatformAdIntelligence.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "user navigates to Cross Platform Ad Intelligence Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_navigates_to_Cross_Platform_Ad_Intelligence_Screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Share of Voice by Brand chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Share_of_Voice_by_Brand_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Share of Voice by Brand chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Share_of_Voice_by_Brand_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on Share of Voice by Brand Owner",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Share_of_Voice_by_Brand_Owner()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Share of Voice by Brand Owner chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Share_of_Voice_by_Brand_Owner_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Share of Voice by Brand Owner chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Share_of_Voice_by_Brand_Owner_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that Cross Platform Indexed Spend by Channel chart is loading is properly",
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
      "name": "@AdIntelligence"
    },
    {
      "name": "@CrossPlatform"
    },
    {
      "name": "@CrossIndexedbyChannel"
    }
  ]
});
formatter.step({
  "name": "user scroll down to Indexed Spend by Channel section",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_scroll_down_to_Indexed_Spend_by_Channel_section()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[2]/div[2]/div[2]/div[3]/span}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.CrossPlatformAdIntelligence.user_scroll_down_to_Indexed_Spend_by_Channel_section(CrossPlatformAdIntelligence.java:63)\n\tat ✽.user scroll down to Indexed Spend by Channel section(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/91CrossPlatformAdIntelligence.feature:18)\n",
  "status": "failed"
});
formatter.step({
  "name": "Indexed Spend by Channel chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Indexed_Spend_by_Channel_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Indexed Spend by Channel chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Indexed_Spend_by_Channel_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on Indexed Spend by Brand Owner",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Indexed_Spend_by_Brand_Owner()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Indexed Spend by Brand Owner chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Indexed_Spend_by_Brand_Owner_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Indexed Spend by Brand Owner chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Indexed_Spend_by_Brand_Owner_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that Cross Platform Indexed Spend Matrix by Channel chart is loading properly",
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
      "name": "@AdIntelligence"
    },
    {
      "name": "@CrossPlatform"
    },
    {
      "name": "@CrossIndexedSpendMatrixbyChannel"
    }
  ]
});
formatter.step({
  "name": "user scroll down to Indexed Spend Matrix by Channel section",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_scroll_down_to_Indexed_Spend_Matrix_by_Channel_section()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[2]/div[3]/div[2]/div[3]/div/div[1]/div[1]}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.CrossPlatformAdIntelligence.user_scroll_down_to_Indexed_Spend_Matrix_by_Channel_section(CrossPlatformAdIntelligence.java:100)\n\tat ✽.user scroll down to Indexed Spend Matrix by Channel section(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/91CrossPlatformAdIntelligence.feature:28)\n",
  "status": "failed"
});
formatter.step({
  "name": "Indexed Spend Matrix by Channel chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Indexed_Spend_Matrix_by_Channel_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Indexed Spend Matrix by Channel chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Indexed_Spend_Matrix_by_Channel_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on Indexed Spend Matrix by Brand Owner",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Indexed_Spend_Matrix_by_Brand_Owner()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Indexed Spend Matrix by Brand Owner chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Indexed_Spend_Matrix_by_Brand_Owner_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Indexed Spend Matrix by Brand Onwer chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Indexed_Spend_Matrix_by_Brand_Onwer_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that Cross Platform Commercial Mix chart is loading properly",
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
      "name": "@AdIntelligence"
    },
    {
      "name": "@CrossPlatform"
    },
    {
      "name": "@CrossCommercialMix"
    }
  ]
});
formatter.step({
  "name": "user click on Commercial Mix sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Commercial_Mix_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/a/p}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.CrossPlatformAdIntelligence.user_click_on_Commercial_Mix_sidemenu_option(CrossPlatformAdIntelligence.java:136)\n\tat ✽.user click on Commercial Mix sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/91CrossPlatformAdIntelligence.feature:38)\n",
  "status": "failed"
});
formatter.step({
  "name": "Distribution of Estimated Spend by CrossPlatform Ad Format chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Distribution_of_Estimated_Spend_by_CrossPlatform_Ad_Format_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Distribution of Estimated Spend by CrossPlatform Ad Format chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Distribution_of_Estimated_Spend_by_CrossPlatform_Ad_Format_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on Distribution of Estimated Spend by CrossPlatform Ad Format Brand Owner",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Distribution_of_Estimated_Spend_by_CrossPlatform_Ad_Format_Brand_Owner()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Distribution of Estimated Spend by CrossPlatform Ad Format Brand Owner chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Distribution_of_Estimated_Spend_by_CrossPlatform_Ad_Format_Brand_Owner_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Distribution of Estimated Spend by CrossPlatform Ad Format Brand Owner chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Distribution_of_Estimated_Spend_by_CrossPlatform_Ad_Format_Brand_Owner_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that Cross Platform Delivery Trend Charts are loading properly",
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
      "name": "@AdIntelligence"
    },
    {
      "name": "@CrossPlatform"
    },
    {
      "name": "@CrossDeliveryTrends"
    }
  ]
});
formatter.step({
  "name": "user click on Cross Delivery Trends sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Cross_Delivery_Trends_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.CrossPlatformAdIntelligence.user_click_on_Cross_Delivery_Trends_sidemenu_option(CrossPlatformAdIntelligence.java:172)\n\tat ✽.user click on Cross Delivery Trends sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/91CrossPlatformAdIntelligence.feature:48)\n",
  "status": "failed"
});
formatter.step({
  "name": "Indexed Delivery Trends by Media Channel chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Indexed_Delivery_Trends_by_Media_Channel_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Indexed Delivery Trends by Media Channel chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Indexed_Delivery_Trends_by_Media_Channel_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on Indexed Delivery Trends by Media Channel Brand Owner",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Indexed_Delivery_Trends_by_Media_Channel_Brand_Owner()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Indexed Delivery Trends by Media Channel Brand Owner chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Indexed_Delivery_Trends_by_Media_Channel_Brand_Owner_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Indexed Delivery Trends by Media Channel Brand Owner chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Indexed_Delivery_Trends_by_Media_Channel_Brand_Owner_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user scroll down to Cross Share of Daily TV Spend chart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_scroll_down_to_Cross_Share_of_Daily_TV_Spend_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cross Share of Daily TV Spend chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Cross_Share_of_Daily_TV_Spend_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Cross Share of Daily TV Spend chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Cross_Share_of_Daily_TV_Spend_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on Daily TV Spend Brand Owner",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Daily_TV_Spend_Brand_Owner()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Daily TV Spend Brand Owner chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Daily_TV_Spend_Brand_Owner_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Daily TV Spend Brand Owner chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Daily_TV_Spend_Brand_Owner_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user scroll down to Cross Segment Delivery Trends chart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_scroll_down_to_Cross_Segment_Delivery_Trends_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cross Segment Delivery Trends chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Cross_Segment_Delivery_Trends_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Cross Segment Delivery Trends chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Cross_Segment_Delivery_Trends_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on Cross Segment Delivery Trends Brand Owner",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.user_click_on_Cross_Segment_Delivery_Trends_Brand_Owner()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cross Segment Delivery Trends Brand Owner chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.Cross_Segment_Delivery_Trends_Brand_Owner_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Cross Segment Delivery Trends Brand Owner chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CrossPlatformAdIntelligence.take_screenshot_of_Cross_Segment_Delivery_Trends_Brand_Owner_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/92NationalTVECPM.feature");
formatter.feature({
  "name": "Check all the charts are loading properly in National TV ecpm Chart",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Verify that all charts in National TV eCPM market benchmark are loading properly",
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
      "name": "@AdIntelligence"
    },
    {
      "name": "@ecpm"
    },
    {
      "name": "@marketbenchmark"
    }
  ]
});
formatter.step({
  "name": "user click on National TV eCPM card",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.eCPM.user_click_on_National_TV_eCPM_card()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"root\"]/div[1]/div[1]/div/a[1]}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.CommonUtilities.Home(CommonUtilities.java:49)\n\tat StepDefinition.eCPM.user_click_on_National_TV_eCPM_card(eCPM.java:18)\n\tat ✽.user click on National TV eCPM card(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/92NationalTVECPM.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "user navigated to National TV eCPM screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.user_navigated_to_National_TV_eCPM_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eCPM by Network Type chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.eCPM_by_Network_Type_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user take screenshot of eCPM by Network Type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.user_take_screenshot_of_eCPM_by_Network_Type_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "scroll to eCPM Trends by Network Type",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.scroll_to_eCPM_Trends_by_Network_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eCPM Trends by Network Type chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.eCPM_Trends_by_Network_Type_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of eCPM Trends by Network Type",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_eCPM_Trends_by_Network_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "scroll to eCPM YoY Trends by Network Type",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.scroll_to_eCPM_YoY_Trends_by_Network_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eCPM YoY Trends by Network Type chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.eCPM_YoY_Trends_by_Network_Type_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of eCPM YoY Trends by Network Type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_eCPM_YoY_Trends_by_Network_Type_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "scroll to eCPM Percentage Change by Network Type",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.scroll_to_eCPM_Percentage_Change_by_Network_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eCPM Percentage Change by Network Type chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.eCPM_Percentage_Change_by_Network_Type_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of eCPM Percentage Change by Network Type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_eCPM_Percentage_Change_by_Network_Type_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that all charts in National TV eCPM Network Benchmark are loading properly",
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
      "name": "@AdIntelligence"
    },
    {
      "name": "@eCPM"
    },
    {
      "name": "@NetworkBenchmark"
    }
  ]
});
formatter.step({
  "name": "user click on Network Benchmark sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.eCPM.user_click_on_Network_Benchmark_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[3]/a/p}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.eCPM.user_click_on_Network_Benchmark_sidemenu_option(eCPM.java:99)\n\tat ✽.user click on Network Benchmark sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/92NationalTVECPM.feature:24)\n",
  "status": "failed"
});
formatter.step({
  "name": "eCPM by Network chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.eCPM_by_Network_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of eCPM by Network",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_eCPM_by_Network()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "scroll down to eCPM by Network and Daypart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.scroll_down_to_eCPM_by_Network_and_Daypart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eCPM by Network and Daypart chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.eCPM_by_Network_and_Daypart_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of eCPM by Network and Daypart chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_eCPM_by_Network_and_Daypart_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "scroll down to eCPM by Network and Genre",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.scroll_down_to_eCPM_by_Network_and_Genre()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eCPM by Network and Genre chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.eCPM_by_Network_and_Genre_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of eCPM by Network and Genre chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_eCPM_by_Network_and_Genre_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that all charts in National TV eCPM Audience Benchmark are loading properly",
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
      "name": "@AdIntelligence"
    },
    {
      "name": "@eCPM"
    },
    {
      "name": "@AudienceBenchmark"
    }
  ]
});
formatter.step({
  "name": "user click on Audience Benchmark sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.eCPM.user_click_on_Audience_Benchmark_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[5]/a/p}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.eCPM.user_click_on_Audience_Benchmark_sidemenu_option(eCPM.java:157)\n\tat ✽.user click on Audience Benchmark sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/92NationalTVECPM.feature:37)\n",
  "status": "failed"
});
formatter.step({
  "name": "Network eCPM vs Audience Index chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.Network_eCPM_vs_Audience_Index_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Network eCPM vs Audience Index chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_Network_eCPM_vs_Audience_Index_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "scroll down to eCPM by Network and Audience",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.scroll_down_to_eCPM_by_Network_and_Audience()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eCPM by Network and Audience chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.eCPM_by_Network_and_Audience_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of eCPM by Network and Audience chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_eCPM_by_Network_and_Audience_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify that all charts in National TV eCPM Audience Efficiency are loading properly",
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
      "name": "@AdIntelligence"
    },
    {
      "name": "@eCPM"
    },
    {
      "name": "@AudienceEfficiency"
    }
  ]
});
formatter.step({
  "name": "user click on Audience Efficiency sidemenu option",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.eCPM.user_click_on_Audience_Efficiency_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"contents-container\"]/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[6]/a/p}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.eCPM.user_click_on_Audience_Efficiency_sidemenu_option(eCPM.java:194)\n\tat ✽.user click on Audience Efficiency sidemenu option(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/92NationalTVECPM.feature:47)\n",
  "status": "failed"
});
formatter.step({
  "name": "Audience Index by Network chart gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.eCPM.Audience_Index_by_Network_chart_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of Audience Index by Network chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.eCPM.take_screenshot_of_Audience_Index_by_Network_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/93CreativeExplorer.feature");
formatter.feature({
  "name": "Check all the creatives are loading properly in Creative Explorer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@CR"
    }
  ]
});
formatter.scenario({
  "name": "Verify that Creative Explorer is loading properly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@CR"
    },
    {
      "name": "@CreativeExplorer"
    }
  ]
});
formatter.step({
  "name": "user click on Creative Explorer button on home screen",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Step.user_click_on_Creative_Explorer_button_on_home_screen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.110)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c7:5a6e:4d2e:2889%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.110, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/19/s8rc4zln5q7...}, goog:chromeOptions: {debuggerAddress: localhost:51876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: edb904f66b9b8d125e392430ff0f109e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"root\"]/div[1]/div[1]/div/a[1]}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat StepDefinition.CommonUtilities.Home(CommonUtilities.java:49)\n\tat StepDefinition.Step.user_click_on_Creative_Explorer_button_on_home_screen(Step.java:25)\n\tat ✽.user click on Creative Explorer button on home screen(file:///Users/mukulkumar/eclipse-workspace/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/93CreativeExplorer.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "discover creatives screen gets loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.discover_creatives_screen_gets_loaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on a Creative from the list",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.user_click_on_a_Creative_from_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the video is played",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.the_video_is_played()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user takes screenshot",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Step.user_takes_screenshot()"
});
formatter.result({
  "status": "skipped"
});
});