function ValidUser()
{
  Project.Variables.test_users.Iterator.Reset();
  for(; !Project.Variables.test_users.Iterator.IsEOF();)
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
    //Sets the text KeywordTests.ValidUser.Variables.test_users("Name") in the 'textboxName' text editor.
    Aliases.browser.usersPage.sectionUsers.fieldsetName.textboxName.SetText(Project.Variables.test_users.Iterator.Value("Name"));
    //Clicks the 'textboxUsername' control.
    Aliases.browser.usersPage.sectionUsers.fieldsetName.label.textboxUsername.Click();
    //Sets the text KeywordTests.ValidUser.Variables.test_users("Username") in the 'textboxUsername' text editor.
    Aliases.browser.usersPage.sectionUsers.fieldsetName.label.textboxUsername.SetText(Project.Variables.test_users.Iterator.Value("Username"));
    //Clicks the 'textboxEmail' control.
    Aliases.browser.usersPage.sectionUsers.fieldsetName.label2.textboxEmail.Click();
    //Sets the text KeywordTests.ValidUser.Variables.test_users("Email") in the 'textboxEmail' text editor.
    Aliases.browser.usersPage.sectionUsers.fieldsetName.label2.textboxEmail.SetText(Project.Variables.test_users.Iterator.Value("Email"));
    //Clicks the 'passwordboxPassword' control.
    Aliases.browser.usersPage.sectionUsers.fieldsetPassword.label3.passwordboxPassword.Click();
    //Sets the text KeywordTests.ValidUser.Variables.test_users("Password") in the 'passwordboxPassword' text editor.
    Aliases.browser.usersPage.sectionUsers.fieldsetPassword.label3.passwordboxPassword.SetText(Project.Variables.test_users.Iterator.Value("Password"));
    //Clicks the 'buttonSave' button.
    Aliases.browser.usersPage.sectionUsers.buttonSave.ClickButton();
    //Opens the specified URL in a running instance of the specified browser.
    Browsers.Item(btChrome).Navigate("https://sweng431final.rocket.chat/admin/users/");
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.usersPage.sectionUsers.sectionUsers2.label2.Click();
    //Enters text in the text box.
    Aliases.browser.usersPage.sectionUsers.sectionUsers2.label2.textbox.SetText(Project.Variables.test_users.Iterator.Value("Username"));
    //Checks whether the 'contentText' property of the Aliases.browser.usersPage.sectionUsers.sectionUsers2.panelDemoUserX2 object equals KeywordTests.ValidUser.Variables.test_users("Name").
    aqObject.CheckProperty(Aliases.browser.usersPage.sectionUsers.sectionUsers2.panelDemoUserX2, "contentText", cmpEqual, Project.Variables.test_users.Iterator.Value("Name"));
    //Checks whether the 'contentText' property of the Aliases.browser.usersPage.sectionUsers.sectionUsers2.panelDemox object equals KeywordTests.ValidUser.Variables.test_users("Username").
    aqObject.CheckProperty(Aliases.browser.usersPage.sectionUsers.sectionUsers2.panelDemox, "contentText", cmpEqual, Project.Variables.test_users.Iterator.Value("Username"));
    //Checks whether the 'contentText' property of the Aliases.browser.usersPage.sectionUsers.sectionUsers2.cell2 object equals KeywordTests.ValidUser.Variables.test_users("Email").
    aqObject.CheckProperty(Aliases.browser.usersPage.sectionUsers.sectionUsers2.cell2, "contentText", cmpEqual, Project.Variables.test_users.Iterator.Value("Email"));
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.usersPage.buttonClose.Click();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageHome.Wait();
    //Clicks the 'buttonUserMenu' button.
    Aliases.browser.pageHome.navNavigation.buttonUserMenu.ClickButton();
    //Clicks the 'panelLogout' control.
    Aliases.browser.pageHome.navNavigation.buttonUserMenu.panelLogout.Click();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageHome.Wait();
    //Clicks the 'textboxEmailOrUsername' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Click();
    //Sets the text KeywordTests.ValidUser.Variables.test_users("Username") in the 'textboxEmailOrUsername' text editor.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.SetText(Project.Variables.test_users.Iterator.Value("Username"));
    //Enters '[Tab]' in the 'textboxEmailOrUsername' object.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Keys("[Tab]");
    //Sets the text KeywordTests.ValidUser.Variables.test_users("password") in the 'passwordboxPassword' text editor.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.SetText(Project.Variables.test_users.Iterator.Value("password"));
    //Clicks the 'buttonLogin' button.
    Aliases.browser.pageHome.formLogin.footerLogin.buttonLogin.ClickButton();
    //Checks whether the 'contentText' property of the Aliases.browser.pageHome.sectionHome.textnodeWelcomeToSweng431final object equals 'Welcome to sweng431final'.
    aqObject.CheckProperty(Aliases.browser.pageHome.sectionHome.textnodeWelcomeToSweng431final, "contentText", cmpEqual, "Welcome to sweng431final");
    //Clicks the 'buttonUserMenu' button.
    Aliases.browser.pageHome.navNavigation.buttonUserMenu.ClickButton();
    //Clicks the 'panelLogout' control.
    Aliases.browser.pageHome.navNavigation.buttonUserMenu.panelLogout.Click();
    //Clicks the 'BrowserWindow' object.
    Aliases.browser.BrowserWindow.Click(259, 23);
    Project.Variables.test_users.Iterator.Next();
  }
}