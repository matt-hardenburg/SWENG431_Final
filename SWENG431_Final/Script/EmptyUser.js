function EmptyUser()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://sweng431final.rocket.chat/home");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageHome.Wait();
  //Clicks the 'textboxEmailOrUsername' control.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Click();
  //Enters text in the text box.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.SetText(Project.Variables.admin_email);
  //Clicks the 'passwordboxPassword' control.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.Click();
  //Sets the text Project.Variables.admin_password in the 'passwordboxPassword' text editor.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.SetText(Project.Variables.admin_password);
  //Enters '[Enter]' in the 'passwordboxPassword' object.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.Keys("[Enter]");
  //Clicks the 'buttonAdministration' button.
  Aliases.browser.pageHome.navNavigation.buttonAdministration.ClickButton();
  //Clicks the 'panelWorkspace' control.
  Aliases.browser.pageHome.navNavigation.buttonReactAria82023770587.panelWorkspace.Click();
  //Clicks the 'panelUsers' control.
  Aliases.browser.adminPage.linkUsers.panelUsers.Click();
  //Clicks the new user 'button' button.
  Aliases.browser.pageUsersSweng431final.sectionUsers.sectionUsers2.headerUsers.button.Click();
  //Clicks the 'textboxName' control.
  Aliases.browser.usersPage.sectionUsers.fieldsetName.textboxName.Click();
  //Sets the text '' in the 'textboxName' text editor.
  Aliases.browser.usersPage.sectionUsers.fieldsetName.textboxName.SetText("");
  //Clicks the 'textboxUsername' control.
  Aliases.browser.usersPage.sectionUsers.fieldsetName.label.textboxUsername.Click();
  //Checks whether the 'Enabled' property of the Aliases.browser.usersPage.sectionUsers.fieldsetName.textnodeOcrtwl59iaError object equals True.
  aqObject.CheckProperty(Aliases.browser.usersPage.sectionUsers.fieldsetName.textnodeOcrtwl59iaError, "Enabled", cmpEqual, true);
  //Checks whether the 'contentText' property of the Aliases.browser.usersPage.sectionUsers.fieldsetName.textnodeOcrtwl59iaError object equals 'The field Name is required.'.
  aqObject.CheckProperty(Aliases.browser.usersPage.sectionUsers.fieldsetName.textnodeOcrtwl59iaError, "contentText", cmpEqual, "The field Name is required.");
  //Sets the text '' in the 'textboxUsername' text editor.
  Aliases.browser.usersPage.sectionUsers.fieldsetName.label.textboxUsername.SetText("");
  //Clicks the 'textboxEmail' control.
  Aliases.browser.usersPage.sectionUsers.fieldsetName.label2.textboxEmail.Click();
  //Checks whether the 'Enabled' property of the Aliases.browser.usersPage.sectionUsers.fieldsetName.textnodeYyc9w41dyf9Error object equals True.
  aqObject.CheckProperty(Aliases.browser.usersPage.sectionUsers.fieldsetName.textnodeYyc9w41dyf9Error, "Enabled", cmpEqual, true);
  //Checks whether the 'contentText' property of the Aliases.browser.usersPage.sectionUsers.fieldsetName.textnodeYyc9w41dyf9Error object equals 'The field Username is required.'.
  aqObject.CheckProperty(Aliases.browser.usersPage.sectionUsers.fieldsetName.textnodeYyc9w41dyf9Error, "contentText", cmpEqual, "The field Username is required.");
  //Sets the text '' in the 'textboxEmail' text editor.
  Aliases.browser.usersPage.sectionUsers.fieldsetName.label2.textboxEmail.SetText("");
  //Clicks the 'passwordboxPassword' control.
  Aliases.browser.usersPage.sectionUsers.fieldsetPassword.label3.passwordboxPassword.Click();
  //Checks whether the 'Enabled' property of the Aliases.browser.usersPage.sectionUsers.fieldsetName.textnodeQvxmu905cohError object equals True.
  aqObject.CheckProperty(Aliases.browser.usersPage.sectionUsers.fieldsetName.textnodeQvxmu905cohError, "Enabled", cmpEqual, true);
  //Checks whether the 'contentText' property of the Aliases.browser.usersPage.sectionUsers.fieldsetName.textnodeQvxmu905cohError object equals 'The field Email is required.'.
  aqObject.CheckProperty(Aliases.browser.usersPage.sectionUsers.fieldsetName.textnodeQvxmu905cohError, "contentText", cmpEqual, "The field Email is required.");
  //Sets the text '' in the 'passwordboxPassword' text editor.
  Aliases.browser.usersPage.sectionUsers.fieldsetPassword.label3.passwordboxPassword.SetText("");
  //Clicks the 'textboxEmail' control.
  Aliases.browser.usersPage.sectionUsers.fieldsetName.label2.textboxEmail.Click();
  //Checks whether the 'Enabled' property of the Aliases.browser.usersPage.sectionUsers.fieldsetPassword.textnodeMowvv3hk29Error object equals True.
  aqObject.CheckProperty(Aliases.browser.usersPage.sectionUsers.fieldsetPassword.textnodeMowvv3hk29Error, "Enabled", cmpEqual, true);
  //Checks whether the 'contentText' property of the Aliases.browser.usersPage.sectionUsers.fieldsetPassword.textnodeMowvv3hk29Error object equals 'The field Password is required.'.
  aqObject.CheckProperty(Aliases.browser.usersPage.sectionUsers.fieldsetPassword.textnodeMowvv3hk29Error, "contentText", cmpEqual, "The field Password is required.");
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://sweng431final.rocket.chat/home");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageHome.Wait();
  //Clicks the 'buttonUserMenu' button.
  Aliases.browser.pageHome.navNavigation.buttonUserMenu.ClickButton();
  //Clicks the 'panelLogout' control.
  Aliases.browser.pageHome.navNavigation.buttonUserMenu.panelLogout.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageHome.Wait();
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(259, 23);
}