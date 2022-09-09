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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"home-main-scrollable-container\"]/div[1]/div/span\"}\n  (Session info: chrome\u003d105.0.5195.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-T2GEJTHI\u0027, ip: \u0027192.168.0.154\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\manus\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55885}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 71b2dd36994859412632a62301641a27\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"home-main-scrollable-container\"]/div[1]/div/span}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.Step.user_is_navigated_to_home_screen(Step.java:46)\r\n\tat ✽.user is navigated to home screen(file:///C:/Users/manus/git/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/1login.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "take screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.take_screenshot()"
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
  "location": "StepDefinition.Step.Television_by_Brand_card_is_visible()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"sponsorshipEarnedMedia\"]/div\"}\n  (Session info: chrome\u003d105.0.5195.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-T2GEJTHI\u0027, ip: \u0027192.168.0.154\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\manus\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55885}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 71b2dd36994859412632a62301641a27\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"sponsorshipEarnedMedia\"]/div}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.Step.Television_by_Brand_card_is_visible(Step.java:62)\r\n\tat ✽.Television by Brand card is visible(file:///C:/Users/manus/git/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/2homescreen.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Television by Team card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.Television_by_Team_card_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Television Team as Brands Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.Television_Team_as_Brands_Card_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Streaming Originals Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.streaming_Originals_Card_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Theatrical Releases Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.theatrical_Releases_Card_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Social Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.social_Card_is_visible()"
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
  "location": "StepDefinition.Step.creative_Explorer_Card_is_visible()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"7GvlkfOiFupy44CiETA8dw\"]/div\"}\n  (Session info: chrome\u003d105.0.5195.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-T2GEJTHI\u0027, ip: \u0027192.168.0.154\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\manus\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55885}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 71b2dd36994859412632a62301641a27\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"7GvlkfOiFupy44CiETA8dw\"]/div}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.Step.creative_Explorer_Card_is_visible(Step.java:107)\r\n\tat ✽.Creative Explorer Card is visible(file:///C:/Users/manus/git/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/2homescreen.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "National TV Ad Intelligence Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.national_TV_Ad_Intelligence_Card_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cross-Platform Ad-Intelligence Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.cross_Platform_Ad_Intelligence_Card_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "National TV eCPM Card is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.national_TV_eCPM_Card_is_visible()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div/div[2]/div/div/div[2]/div[2]/div/a[1]/div\"}\n  (Session info: chrome\u003d105.0.5195.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-T2GEJTHI\u0027, ip: \u0027192.168.0.154\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\manus\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55885}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 71b2dd36994859412632a62301641a27\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div[2]/div/div/div[2]/div[2]/div/a[1]/div}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.Step.user_click_on_Television_by_Brand_card(Step.java:139)\r\n\tat ✽.user click on Television by Brand card(file:///C:/Users/manus/git/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/3TelevisionByBrand.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user directs to the Summary Metrics chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Step.user_directs_to_the_Summary_Metrics_chart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "chart gets loaded and Number of Programs is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.chart_gets_loaded_and_Number_of_Programs_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of the Summary Metrics chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Step.take_screenshot_of_the_Summary_Metrics_chart()"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[5]/a/p\"}\n  (Session info: chrome\u003d105.0.5195.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-T2GEJTHI\u0027, ip: \u0027192.168.0.154\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\manus\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55885}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 71b2dd36994859412632a62301641a27\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[5]/a/p}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.Step.user_click_on_Share_of_Voice_sidemenu_option(Step.java:171)\r\n\tat ✽.user click on Share of Voice sidemenu option(file:///C:/Users/manus/git/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/3TelevisionByBrand.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "chart gets loaded and EMV data is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.chart_gets_loaded_and_EMV_data_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of the Share of Voice chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Step.take_screenshot_of_the_Share_of_Voice_chart()"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p\"}\n  (Session info: chrome\u003d105.0.5195.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-T2GEJTHI\u0027, ip: \u0027192.168.0.154\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\manus\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55885}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 71b2dd36994859412632a62301641a27\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/a/p}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.Step.user_click_on_Exposure_Trends_sidemenu_option(Step.java:189)\r\n\tat ✽.user click on Exposure Trends sidemenu option(file:///C:/Users/manus/git/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/3TelevisionByBrand.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "chart gets loaded and EMV is visible",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Step.chart_gets_loaded_and_EMV_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of the Exposure Trends charts",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Step.take_screenshot_of_the_Exposure_Trends_charts()"
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
  "location": "StepDefinition.Step.user_click_on_By_Brand_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[6]/a/p\"}\n  (Session info: chrome\u003d105.0.5195.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-T2GEJTHI\u0027, ip: \u0027192.168.0.154\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\manus\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55885}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 71b2dd36994859412632a62301641a27\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[6]/a/p}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.Step.user_click_on_By_Brand_sidemenu_option(Step.java:207)\r\n\tat ✽.user click on By Brand sidemenu option(file:///C:/Users/manus/git/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/3TelevisionByBrand.feature:29)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "By Brand data gets loaded and table is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.By_Brand_data_gets_loaded_and_table_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of By brand chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Step.take_screenshot_of_By_brand_chart()"
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
  "location": "StepDefinition.Step.user_click_on_By_Brand_Asset_Type_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[7]/a/p\"}\n  (Session info: chrome\u003d105.0.5195.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-T2GEJTHI\u0027, ip: \u0027192.168.0.154\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\manus\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55885}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 71b2dd36994859412632a62301641a27\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[7]/a/p}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.Step.user_click_on_By_Brand_Asset_Type_sidemenu_option(Step.java:225)\r\n\tat ✽.user click on By Brand Asset Type sidemenu option(file:///C:/Users/manus/git/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/3TelevisionByBrand.feature:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "By Brand Asset Type data gets loaded and table is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.By_Brand_Asset_Type_data_gets_loaded_and_table_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "take screenshot of By Brand Asset type chart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Step.take_screenshot_of_By_Brand_Asset_type_chart()"
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
  "location": "StepDefinition.Step.user_click_on_By_Program_sidemenu_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[8]/a/p\"}\n  (Session info: chrome\u003d105.0.5195.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-T2GEJTHI\u0027, ip: \u0027192.168.0.154\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\manus\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55885}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 71b2dd36994859412632a62301641a27\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div[2]/div/div/div[1]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[8]/a/p}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.Step.user_click_on_By_Program_sidemenu_option(Step.java:243)\r\n\tat ✽.user click on By Program sidemenu option(file:///C:/Users/manus/git/MensioWebAutomation/MensioWebSanity/src/test/resources/Features/3TelevisionByBrand.feature:43)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on Submit after choosing program and episode",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Step.user_click_on_Submit_after_choosing_program_and_episode()"
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
});