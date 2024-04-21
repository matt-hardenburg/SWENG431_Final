function PrivateReadOnly()
{
  //Iterates through the specified browsers.
  var BrowserItems, i;
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
    //Sets the text 'PrivateReadOnly' in the 'textboxChannelName' text editor.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.textboxChannelName.SetText("PrivateReadOnly");
    //Clicks the 'labelReadOnly' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.labelReadOnly.Click();
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.panel4.Click();
    //Clicks the 'panelDemoUser1' control.
    Aliases.browser.pageHome.textnodeDemoUser1.panelDemoUser1.Click();
    //Clicks the 'buttonCreate' button.
    Aliases.browser.pageHome.formEwmddb1k1lm.buttonCreate.ClickButton();
    //Enters 'Admin message[Enter]' in the 'textareaMessagePrivatereadonly' object.
    Aliases.browser.pagePrivatereadonlySweng431final.sectionStartOfConversation.footerThisRoomIsReadOnly.label.textareaMessagePrivatereadonly.Keys("Admin message[Enter]");
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.pagePrivatereadonlySweng431final.navNavigation.buttonUserMenu.Click();
    //Clicks the 'FindElement("//div[.='Logout']")' control.
    Aliases.browser.pagePrivatereadonlySweng431final.FindElement("//div[.='Logout']").Click();
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
    //Checks whether the 'ObjectLabel' property of the Aliases.browser.pageHome.navNavigation2.linkPrivate object equals 'PrivateBroadcast'.
    aqObject.CheckProperty(Aliases.browser.pageHome.navNavigation2.linkPrivate, "ObjectLabel", cmpEqual, "PrivateReadOnly");
    //Clicks the 'panelPrivatereadonly' control.
    Aliases.browser.pageHome.navNavigation2.linkPrivate.panelPrivatereadonly.Click();
    //Checks whether the 'Enabled' property of the Aliases.browser.pagePrivatereadonlySweng431final.sectionStartOfConversation.footerThisRoomIsReadOnly.panelThisRoomIsReadOnly object equals True.
    aqObject.CheckProperty(Aliases.browser.pagePrivatereadonlySweng431final.sectionStartOfConversation.footerThisRoomIsReadOnly.panelThisRoomIsReadOnly, "Enabled", cmpEqual, true);
    //Checks whether the 'contentText' property of the Aliases.browser.pagePrivatereadonlySweng431final.sectionStartOfConversation.footerThisRoomIsReadOnly.panelThisRoomIsReadOnly object equals 'This room is read only'.
    aqObject.CheckProperty(Aliases.browser.pagePrivatereadonlySweng431final.sectionStartOfConversation.footerThisRoomIsReadOnly.panelThisRoomIsReadOnly, "contentText", cmpEqual, "This room is read only");
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.pageHome.navNavigation.buttonUserMenu.Click();
    //Clicks the 'panelLogout' control.
    Aliases.browser.pageHome.navNavigation.buttonUserMenu.panelLogout.Click();
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
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.pageHome.navNavigation.buttonUserMenu.Click();
    //Clicks the 'panelLogout' control.
    Aliases.browser.pageHome.navNavigation.buttonUserMenu.panelLogout.Click();
    //Opens the specified URL in a running instance of the specified browser.
    Browsers.Item(btChrome).Navigate("https://sweng431final.rocket.chat/home");
    //Closes the 'BrowserWindow' window.
    Aliases.browser.BrowserWindow.Close();
  }
}