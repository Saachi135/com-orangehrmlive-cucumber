$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logintest.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to verify different login functions.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-different-login-functions.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14192984600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UsersTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 3022885500,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "I should login successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-different-login-functions.;i-should-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I see Welcome message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iSeeWelcomeMessage()"
});
formatter.result({
  "duration": 2598745700,
  "status": "passed"
});
formatter.after({
  "duration": 1727239900,
  "status": "passed"
});
formatter.before({
  "duration": 7192380300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UsersTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 2285135200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I should see Logo",
  "description": "",
  "id": "as-a-user-i-want-to-verify-different-login-functions.;i-should-see-logo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I see the Orange HRM Logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iSeeTheOrangeHRMLogo()"
});
formatter.result({
  "duration": 620088400,
  "status": "passed"
});
formatter.after({
  "duration": 1224038000,
  "status": "passed"
});
formatter.before({
  "duration": 6768157200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UsersTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 2256015100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "I should log out successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-different-login-functions.;i-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I click on user profile logo",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I mouse hover and click on logout",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I am logged out and see text Login Panel",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iClickOnUserProfileLogo()"
});
formatter.result({
  "duration": 1306350800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iMouseHoverAndClickOnLogout()"
});
formatter.result({
  "duration": 1415173000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iAmLoggedOutAndSeeTextLoginPanel()"
});
formatter.result({
  "duration": 383838700,
  "status": "passed"
});
formatter.after({
  "duration": 1121896500,
  "status": "passed"
});
formatter.uri("userstest.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to verify admin can execute different actions on users.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7003621300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UsersTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 2547221400,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Admin should be able to add users",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.;admin-should-be-able-to-add-users",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click On Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click On Add button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I Verify Add User Text",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I Select User Role Admin",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter Employee Name Ananya Dash",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter User name",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select status Disable",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Confirm Password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click On Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify message Successfully Saved",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2207550400,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 500554900,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 916809800,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iVerifyAddUserText()"
});
formatter.result({
  "duration": 437656600,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iSelectUserRoleAdmin()"
});
formatter.result({
  "duration": 32857395700,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iEnterEmployeeNameAnanyaDash()"
});
formatter.result({
  "duration": 31963185700,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iEnterUserName()"
});
formatter.result({
  "duration": 750458300,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iSelectStatusDisable()"
});
formatter.result({
  "duration": 32886631100,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iEnterPassword()"
});
formatter.result({
  "duration": 269913800,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iEnterConfirmPassword()"
});
formatter.result({
  "duration": 242925400,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 125306500,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iVerifyMessageSuccessfullySaved()"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.after({
  "duration": 1306900900,
  "status": "passed"
});
formatter.before({
  "duration": 8364696600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UsersTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 1402101100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Admin should be able to search the user created and verify it.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.;admin-should-be-able-to-search-the-user-created-and-verify-it.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@smoke"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I click On Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I Enter username",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I Select user role",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select status",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on search",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the user in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 4205072700,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 592947100,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iEnterUsername()"
});
formatter.result({
  "duration": 755725300,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iSelectUserRole()"
});
formatter.result({
  "duration": 1761880400,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iSelectStatus()"
});
formatter.result({
  "duration": 31911483400,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iClickOnSearch()"
});
formatter.result({
  "duration": 284158500,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iShouldSeeTheUserInTheList()"
});
formatter.result({
  "duration": 243992200,
  "status": "passed"
});
formatter.after({
  "duration": 982101700,
  "status": "passed"
});
formatter.before({
  "duration": 7696597000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UsersTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 1181649500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Admin should be able to delete the user record.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.;admin-should-be-able-to-delete-the-user-record.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I click On Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I click On Add button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I Verify Add User Text",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I Select User Role Admin",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I enter Employee Name Ananya Dash",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter User name",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select status enable",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Confirm Password",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click On Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I search for user",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select user role",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select the status",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on check box",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click delete",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click ok on pop up",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I should see message Successfully Deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2774071800,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 608019100,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 762647400,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iVerifyAddUserText()"
});
formatter.result({
  "duration": 440705500,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iSelectUserRoleAdmin()"
});
formatter.result({
  "duration": 32818864400,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iEnterEmployeeNameAnanyaDash()"
});
formatter.result({
  "duration": 33230298000,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iEnterUserName()"
});
formatter.result({
  "duration": 1187054300,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iSelectStatusEnable()"
});
formatter.result({
  "duration": 32954151900,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iEnterPassword()"
});
formatter.result({
  "duration": 240740300,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iEnterConfirmPassword()"
});
formatter.result({
  "duration": 710402700,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 478660000,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iSearchForUser()"
});
formatter.result({
  "duration": 60129358600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027oxd-form-row\u0027]/div[1]/div[1]/div[1]/div[2]/input[1]\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [414817c1f8f51d669436180fd2514661, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027oxd-form-row\u0027]/div[1]/div[1]/div[1]/div[2]/input[1]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\gp_14\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62099}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62099/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 414817c1f8f51d669436180fd2514661\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.sendTextToElement(Utility.java:73)\r\n\tat com.orangehrmlive.demo.pages.AddUserPage.enterUser(AddUserPage.java:63)\r\n\tat com.orangehrmlive.demo.steps.UsersTestSteps.iSearchForUser(UsersTestSteps.java:117)\r\n\tat ✽.And I search for user(userstest.feature:45)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UsersTestSteps.iSelectUserRole2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersTestSteps.iSelectTheStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersTestSteps.iClickOnSearch2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersTestSteps.iClickOnCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersTestSteps.iClickDelete()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersTestSteps.iClickOkOnPopUp()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersTestSteps.iShouldSeeMessageSuccessfullyDeleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1622235300,
  "status": "passed"
});
formatter.before({
  "duration": 8891967200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UsersTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 1606021100,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "I want to search for deleted record to ensure it is not found.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.;i-want-to-search-for-deleted-record-to-ensure-it-is-not-found.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 54,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "I click On Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "I search for user",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I select user role",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I select its status",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click search",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I see message No Record Found",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 3553271800,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 579939900,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iSearchForUser()"
});
formatter.result({
  "duration": 1014629300,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iSelectUserRole2()"
});
formatter.result({
  "duration": 1769744300,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iSelectItsStatus()"
});
formatter.result({
  "duration": 31856016100,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iClickSearch()"
});
formatter.result({
  "duration": 202522200,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iSeeMessageNoRecordFound()"
});
formatter.result({
  "duration": 324907300,
  "status": "passed"
});
formatter.after({
  "duration": 1537034100,
  "status": "passed"
});
});