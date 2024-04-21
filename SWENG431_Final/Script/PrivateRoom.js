function Private()
{
  var admin_email, admin_password, user_1_email, user_2_email, user_password, BrowserItems, i;
  admin_email = "mzh5947@psu.edu";
  //The password cannot be converted to a script. Use Project Variables to save the password.
  admin_password = "<input password here>";
  user_1_email = "demo_user_1@email.com";
  user_2_email = "demo_user_2@email.com";
  //The password cannot be converted to a script. Use Project Variables to save the password.
  user_password = "<input password here>";
  //Iterates through the specified browsers.
  BrowserItems = new Array(1);
  BrowserItems[0] = Browsers.Item("chrome");
  for(i = 0; i < BrowserItems.length; i++)
  {
    BrowserItems[i].Run("https://sweng431final.rocket.chat/home");
    //Maximizes the specified Window object.
    Aliases.browser.BrowserWindow.Maximize();
    //Clicks the 'textboxEmailOrUsername' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Click();
    //Enters text in the text box.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.SetText(Project.Variables.admin_email);
    //Clicks the 'passwordboxPassword' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.Click();
    //Sets the text Project.Variables.admin_password in the 'passwordboxPassword' text editor.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.SetText(Project.Variables.admin_password);
    //Clicks the 'buttonLogin' button.
    Aliases.browser.pageHome.formLogin.footerLogin.buttonLogin.ClickButton();
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.pageHome.FindElement("//button[@title='Create new']").Click();
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.pageHome.FindElement("//label[contains(., 'Channel')]").Click();
    //Clicks the 'textboxChannelName' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.textboxChannelName.Click();
    //Sets the text 'Private' in the 'textboxChannelName' text editor.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.textboxChannelName.SetText("Private");
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textnode.Click();
    //Clicks the 'panelDemoUser1' control.
    Aliases.browser.pageHome.textnodeDemoUser1.panelDemoUser1.Click();
    //Clicks the 'buttonCreate' button.
    Aliases.browser.pageHome.formEwmddb1k1lm.buttonCreate.ClickButton();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageSweng431final.Wait();
    //Clicks the 'textareaMessagePrivate' control.
    Aliases.browser.pageSweng431final.sectionStartOfConversation.footer.label.textareaMessagePrivate.Click();
    //Enters 'Admin message[Enter]' in the 'textareaMessagePrivate' object.
    Aliases.browser.pageSweng431final.sectionStartOfConversation.footer.label.textareaMessagePrivate.Keys("Admin message[Enter]");
    //Clicks the 'buttonUserMenu2' button.
    Aliases.browser.pageHome.navNavigation.buttonUserMenu2.ClickButton();
    //Clicks the 'panelLogout' control.
    Aliases.browser.pageHome.navNavigation.buttonUserMenu2.panelLogout.Click();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageHome.Wait();
    //Clicks the 'textboxEmailOrUsername' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Click();
    //Sets the text Project.Variables.user_email_1 in the 'textboxEmailOrUsername' text editor.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.SetText(Project.Variables.user_email_1);
    //Enters '[Tab]' in the 'textboxEmailOrUsername' object.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Keys("[Tab]");
    //Sets the text Project.Variables.user_password in the 'passwordboxPassword' text editor.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.SetText(Project.Variables.user_password);
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.pageHome.formLogin.footerLogin.buttonLogin.Click(33, 14);
    //Checks whether the 'ObjectLabel' property of the Aliases.browser.pageHome.navNavigation2.linkPrivate object equals 'Private'.
    aqObject.CheckProperty(Aliases.browser.pageHome.navNavigation2.linkPrivate, "ObjectLabel", cmpEqual, "Private");
    //Clicks the 'panelPrivate' control.
    Aliases.browser.pageHome.navNavigation2.linkPrivate.panelPrivate.Click();
    //Clicks the 'label' control.
    Aliases.browser.pageSweng431final.sectionStartOfConversation.footer.label.Click();
    //Clicks the 'textareaMessagePrivate' control.
    Aliases.browser.pageSweng431final.sectionStartOfConversation.footer.label.textareaMessagePrivate.Click();
    //Enters 'user message[Enter]' in the 'textareaMessagePrivate' object.
    Aliases.browser.pageSweng431final.sectionStartOfConversation.footer.label.textareaMessagePrivate.Keys("user message[Enter]");
    //Clicks the 'buttonUserMenu2' button.
    Aliases.browser.pageHome.navNavigation.buttonUserMenu2.ClickButton();
    //Clicks the 'panelLogout' control.
    Aliases.browser.pageHome.navNavigation.buttonUserMenu2.panelLogout.Click();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageHome.Wait();
    //Clicks the 'textboxEmailOrUsername' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Click();
    //Clicks the 'textboxEmailOrUsername' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Click();
    //Sets the text Project.Variables.user_email_2 in the 'textboxEmailOrUsername' text editor.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.SetText(Project.Variables.user_email_2);
    //Clicks the 'passwordboxPassword' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.Click();
    //Sets the text Project.Variables.user_password in the 'passwordboxPassword' text editor.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.SetText(Project.Variables.user_password);
    //Enters '[Enter]' in the 'passwordboxPassword' object.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.Keys("[Enter]");
    //Empty Room List
    aqObject.CheckProperty(Aliases.browser.pageHome.navNavigation3.panel2, "ObjectLabel", cmpEqual, "");
    //Clicks the 'buttonReactAria8425474832144' button.
    Aliases.browser.pageHome.navNavigation3.buttonReactAria8425474832144.ClickButton();
    //Clicks the 'labelMenuitemcheckbox' control.
    Aliases.browser.pageHome.navNavigation3.buttonReactAria8425474832144.labelMenuitemcheckbox.Click();
    //Closes the 'BrowserWindow' window.
    Aliases.browser.BrowserWindow.Close();
  }
}