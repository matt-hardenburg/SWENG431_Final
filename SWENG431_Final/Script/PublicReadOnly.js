function PublicReadOnly()
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
    //Sets the text 'PublicReadOnly' in the 'textboxChannelName' text editor.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.textboxChannelName.SetText("PublicReadOnly");
    //Clicks the 'labelPrivate' control.
    Aliases.browser.pageHome.formEwmddb1k1lm.fieldsetChannelName.labelPrivate.Click();
    //Clicks the 'labelReadOnly' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.labelReadOnly.Click();
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.panel4.Click();
    //Clicks the 'panelDemoUser1' control.
    Aliases.browser.pageHome.textnodeDemoUser1.panelDemoUser1.Click();
    //Clicks the 'panel4' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.panel4.Click();
    //Clicks the 'buttonCreate' button.
    Aliases.browser.pageHome.formEwmddb1k1lm.buttonCreate.ClickButton();
    //Enters 'Admin message[Enter]' in the 'textareaMessagePublicreadonly' object.
    Aliases.browser.pageSweng431final4.sectionStartOfConversation.footerThisRoomIsReadOnly.label.textareaMessagePublicreadonly.Keys("Admin message[Enter]");
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.pageSweng431final4.navNavigation.buttonUserMenu.Click();
    //Clicks the 'FindElement("//div[.='Logout']")' control.
    Aliases.browser.pageSweng431final4.FindElement("//div[.='Logout']").Click();
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
    //Clicks the 'panelPublicreadonly' control.
    Aliases.browser.pageHome.navNavigation2.linkPublic.panelPublicreadonly.Click();
    //Checks whether the 'Enabled' property of the Aliases.browser.pageSweng431final4.sectionStartOfConversation.footerThisRoomIsReadOnly.panelThisRoomIsReadOnly object equals True.
    aqObject.CheckProperty(Aliases.browser.pageSweng431final4.sectionStartOfConversation.footerThisRoomIsReadOnly.panelThisRoomIsReadOnly, "Enabled", cmpEqual, true);
    //Checks whether the 'contentText' property of the Aliases.browser.pageSweng431final4.sectionStartOfConversation.footerThisRoomIsReadOnly.panelThisRoomIsReadOnly object equals 'This room is read only'.
    aqObject.CheckProperty(Aliases.browser.pageSweng431final4.sectionStartOfConversation.footerThisRoomIsReadOnly.panelThisRoomIsReadOnly, "contentText", cmpEqual, "This room is read only");
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.pageHome.navNavigation.buttonUserMenu.Click();
    //Clicks the 'panelLogout' control.
    Aliases.browser.pageHome.navNavigation.buttonUserMenu.panelLogout.Click();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageHome.Wait();
    //Clicks the 'textboxEmailOrUsername' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Click();
    //Enters text in the text box.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.SetText(Project.Variables.user_email_2);
    //Sets the text Project.Variables.user_password in the 'passwordboxPassword' text editor.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.SetText(Project.Variables.user_password);
    //Enters '[Enter]' in the 'passwordboxPassword' object.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.Keys("[Enter]");
    //Clicks the 'buttonOpenDirectory' button.
    Aliases.browser.pageHome.sectionHome.buttonOpenDirectory.ClickButton();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageDirectorySweng431final.Wait();
    //Checks whether the 'Enabled' property of the Aliases.browser.pageDirectorySweng431final.sectionDirectory.panel2 object equals True.
    aqObject.CheckProperty(Aliases.browser.pageDirectorySweng431final.sectionDirectory.panel2, "Enabled", cmpEqual, true);
    //Checks whether the 'contentText' property of the Aliases.browser.pageDirectorySweng431final.sectionDirectory.panel2 object equals '
    //PublicReadOnly'.
    aqObject.CheckProperty(Aliases.browser.pageDirectorySweng431final.sectionDirectory.panel2, "contentText", cmpEqual, "\nPublicReadOnly");
    //Clicks the 'panel2' control.
    Aliases.browser.pageDirectorySweng431final.sectionDirectory.panel2.Click();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageSweng431final4.Wait();
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.pageSweng431final4.sectionStartOfConversation.footerThisRoomIsReadOnly.buttonJoin.Click();
    //Checks whether the 'Enabled' property of the Aliases.browser.pageSweng431final4.sectionStartOfConversation.footerThisRoomIsReadOnly.panelThisRoomIsReadOnly object equals True.
    aqObject.CheckProperty(Aliases.browser.pageSweng431final4.sectionStartOfConversation.footerThisRoomIsReadOnly.panelThisRoomIsReadOnly, "Enabled", cmpEqual, true);
    //Checks whether the 'contentText' property of the Aliases.browser.pageSweng431final4.sectionStartOfConversation.footerThisRoomIsReadOnly.panelThisRoomIsReadOnly object equals 'This room is read only'.
    aqObject.CheckProperty(Aliases.browser.pageSweng431final4.sectionStartOfConversation.footerThisRoomIsReadOnly.panelThisRoomIsReadOnly, "contentText", cmpEqual, "This room is read only");
    //Clicks the 'buttonUserMenu' button.
    Aliases.browser.pageSweng431final4.navNavigation.buttonUserMenu.ClickButton();
    //Clicks the 'panelLogout' control.
    Aliases.browser.pageSweng431final4.navNavigation.buttonUserMenu.panelLogout.Click();
    //Closes the 'BrowserWindow' window.
    Aliases.browser.BrowserWindow.Close();
  }
}