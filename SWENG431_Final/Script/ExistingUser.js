function ExistingUser()
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
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.newUserPage.Wait();
  //Clicks the 'textboxName' control.
  Aliases.browser.usersPage.sectionUsers.fieldsetName.textboxName.Click();
  //Sets the text 'mzh5947' in the 'textboxName' text editor.
  Aliases.browser.usersPage.sectionUsers.fieldsetName.textboxName.SetText("mzh5947");
  //Clicks the 'textboxUsername' control.
  Aliases.browser.usersPage.sectionUsers.fieldsetName.label.textboxUsername.Click();
  //Sets the text 'mzh5947' in the 'textboxUsername' text editor.
  Aliases.browser.usersPage.sectionUsers.fieldsetName.label.textboxUsername.SetText("mzh5947");
  //Clicks the 'textboxEmail' control.
  Aliases.browser.usersPage.sectionUsers.fieldsetName.label2.textboxEmail.Click();
  //Sets the text Project.Variables.admin_email in the 'textboxEmail' text editor.
  Aliases.browser.usersPage.sectionUsers.fieldsetName.label2.textboxEmail.SetText(Project.Variables.admin_email);
  //Clicks the 'passwordboxPassword' control.
  Aliases.browser.usersPage.sectionUsers.fieldsetPassword.label3.passwordboxPassword.Click();
  //Sets the text Project.Variables.admin_email in the 'passwordboxPassword' text editor.
  Aliases.browser.usersPage.sectionUsers.fieldsetPassword.label3.passwordboxPassword.SetText(Project.Variables.admin_email);
  //Clicks the 'buttonSave' button.
  Aliases.browser.usersPage.sectionUsers.buttonSave.ClickButton();
  //Checks whether the 'Enabled' property of the Aliases.browser.newUserPage.panelAlert object equals True.
  aqObject.CheckProperty(Aliases.browser.newUserPage.panelAlert, "Enabled", cmpEqual, true);
  //Clicks the 'textboxUsername' control.
  Aliases.browser.usersPage.sectionUsers.fieldsetName.label.textboxUsername.Click();
  //Sets the text 'mzh' in the 'textboxUsername' text editor.
  Aliases.browser.usersPage.sectionUsers.fieldsetName.label.textboxUsername.SetText("mzh");
  //Clicks the 'buttonSave' button.
  Aliases.browser.usersPage.sectionUsers.buttonSave.ClickButton();
  //Checks whether the 'Enabled' property of the Aliases.browser.newUserPage.panelAlert object equals True.
  aqObject.CheckProperty(Aliases.browser.newUserPage.panelAlert, "Enabled", cmpEqual, true);
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