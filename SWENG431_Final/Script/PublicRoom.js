function Public()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://sweng431final.rocket.chat/home");
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
  //Enters '[Enter]' in the 'passwordboxPassword' object.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.Keys("[Enter]");
  //Clicks the 'FindElement("//button[@title='Create new']")' button.
  Aliases.browser.pageHome.FindElement("//button[@title='Create new']").ClickButton();
  //Clicks the 'panelChannel' control.
  Aliases.browser.pageHome.navNavigation.buttonReactAria17597759235.panelChannel.Click();
  //Sets the text 'Public' in the 'textboxChannelName' text editor.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.textboxChannelName.SetText("Public");
  //Clicks the 'labelPrivate' control.
  Aliases.browser.pageHome.formEwmddb1k1lm.fieldsetChannelName.labelPrivate.Click();
  //Clicks the 'panel4' control.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.panel4.Click();
  //Clicks the 'panelDemoUser1' control.
  Aliases.browser.pageHome.textnodeDemoUser1.panelDemoUser1.Click();
  //Clicks the 'panelAddMembers' control.
  Aliases.browser.pageHome.formEwmddb1k1lm.fieldsetChannelName.panelAddMembers.Click();
  //Clicks the 'panel4' control.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.panel4.Click();
  //Clicks the 'buttonCreate' button.
  Aliases.browser.pageHome.formEwmddb1k1lm.buttonCreate.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageSweng431final3.Wait();
  //Enters 'admin message[Enter]' in the 'textareaMessagePublic' object.
  Aliases.browser.pageSweng431final3.sectionStartOfConversation.footer.label.textareaMessagePublic.Keys("admin message[Enter]");
  //Clicks the 'buttonUserMenu3' button.
  Aliases.browser.pageHome.navNavigation.buttonUserMenu3.ClickButton();
  //Clicks the 'panelLogout' control.
  Aliases.browser.pageHome.navNavigation.buttonUserMenu3.panelLogout.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageHome.Wait();
  //Clicks the 'textboxEmailOrUsername' control.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Click();
  //Enters text in the text box.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.SetText(Project.Variables.user_email_1);
  //Clicks the 'panelPassword' control.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.panelPassword.Click();
  //Clicks the 'passwordboxPassword' control.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.Click();
  //Sets the text Project.Variables.user_password in the 'passwordboxPassword' text editor.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.SetText(Project.Variables.user_password);
  //Enters '[Enter]' in the 'passwordboxPassword' object.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.Keys("[Enter]");
  //Clicks the 'panelPublic' control.
  Aliases.browser.pageHome.navNavigation2.linkPublic.panelPublic.Click();
  //Enters 'user 1 message[Enter]' in the 'textareaMessagePublic' object.
  Aliases.browser.pageSweng431final3.sectionStartOfConversation.footer.label.textareaMessagePublic.Keys("user 1 message[Enter]");
  //Clicks the 'buttonUserMenu3' button.
  Aliases.browser.pageHome.navNavigation.buttonUserMenu3.ClickButton();
  //Clicks the 'panel' control.
  Aliases.browser.pageHome.navNavigation.buttonUserMenu3.panel.Click();
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
  //Checks whether the 'contentText' property of the Aliases.browser.pageDirectorySweng431final.sectionDirectory.panel object equals '
  //Public'.
  aqObject.CheckProperty(Aliases.browser.pageDirectorySweng431final.sectionDirectory.panel, "contentText", cmpEqual, "\nPublic");
  //Clicks the 'cell' control.
  Aliases.browser.pageDirectorySweng431final.sectionDirectory.cell.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageSweng431final3.Wait();
  //Clicks the 'buttonJoin' button.
  Aliases.browser.pageSweng431final3.sectionStartOfConversation.footer2.buttonJoin.ClickButton();
  //Clicks the 'textareaMessagePublic' control.
  Aliases.browser.pageSweng431final3.sectionStartOfConversation.footer.label.textareaMessagePublic.Click();
  //Enters 'user 2 message[Enter]' in the 'textareaMessagePublic' object.
  Aliases.browser.pageSweng431final3.sectionStartOfConversation.footer.label.textareaMessagePublic.Keys("user 2 message[Enter]");
  //Checks whether the 'contentText' property of the Aliases.browser.pageSweng431final3.sectionStartOfConversation.textnodeMessageList.panelUser2Message object equals 'user 2 message'.
  aqObject.CheckProperty(Aliases.browser.pageSweng431final3.sectionStartOfConversation.textnodeMessageList.panelUser2Message, "contentText", cmpEqual, "user 2 message");
  //Clicks the 'buttonUserMenu3' button.
  Aliases.browser.pageHome.navNavigation.buttonUserMenu3.ClickButton();
  //Clicks the 'labelMenuitemcheckbox' control.
  Aliases.browser.pageHome.navNavigation.buttonUserMenu3.labelMenuitemcheckbox.Click();
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(266, 29);
}