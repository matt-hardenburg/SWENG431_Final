function PublicBroadcast()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://sweng431final.rocket.chat/home");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textboxEmailOrUsername' control.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Click();
  //Enters 'mzh5947@psu.edu' in the 'textboxEmailOrUsername' object.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Keys("mzh5947@psu.edu");
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
  //Sets the text 'PublicBroadcast' in the 'textboxChannelName' text editor.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.textboxChannelName.SetText("PublicBroadcast");
  //Clicks the 'textnode3' control.
  Aliases.browser.pageHome.formEwmddb1k1lm.fieldsetChannelName.label2.textnode3.Click();
  //Clicks the 'textnode4' control.
  Aliases.browser.pageHome.formEwmddb1k1lm.fieldsetChannelName.label3.textnode4.Click();
  //Clicks the 'panel4' control.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.panel4.Click();
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.pageHome.textnodeDemoUser1.panelDemoUser1.Click();
  //Clicks the 'textbox' control.
  Aliases.browser.pageHome.formEwmddb1k1lm.fieldsetChannelName.textbox.Click();
  //Clicks the 'buttonCreate' button.
  Aliases.browser.pageHome.formEwmddb1k1lm.buttonCreate.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageSweng431final5.Wait();
  //Enters 'admin message[Enter]' in the 'textareaMessagePublicbroadcast' object.
  Aliases.browser.pageSweng431final5.sectionStartOfConversation.footerThisRoomIsReadOnly.label.textareaMessagePublicbroadcast.Keys("admin message[Enter]");
  //Clicks the 'buttonUserMenu4' button.
  Aliases.browser.pageHome.navNavigation.buttonUserMenu4.ClickButton();
  //Clicks the 'panelLogout' control.
  Aliases.browser.pageHome.navNavigation.buttonUserMenu4.panelLogout.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageHome.Wait();
  //Clicks the 'textboxEmailOrUsername' control.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Click();
  //Enters 'demo_user_1@email.com' in the 'textboxEmailOrUsername' object.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Keys("demo_user_1@email.com");
  //Clicks the 'passwordboxPassword' control.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.Click();
  //Sets the text Project.Variables.user_password in the 'passwordboxPassword' text editor.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.SetText(Project.Variables.user_password);
  //Enters '[Enter]' in the 'passwordboxPassword' object.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.Keys("[Enter]");
  //Clicks the 'panelPublicbroadcast' control.
  Aliases.browser.pageHome.navNavigation2.linkPublic.panelPublicbroadcast.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageSweng431final5.sectionStartOfConversation.footerThisRoomIsReadOnly2.panelThisRoomIsReadOnly object equals 'This room is read only'.
  aqObject.CheckProperty(Aliases.browser.pageSweng431final5.sectionStartOfConversation.footerThisRoomIsReadOnly2.panelThisRoomIsReadOnly, "contentText", cmpEqual, "This room is read only");
  //Checks whether the 'Enabled' property of the Aliases.browser.pageSweng431final5.sectionStartOfConversation.textnodeMessageList.buttonReply object equals True.
  aqObject.CheckProperty(Aliases.browser.pageSweng431final5.sectionStartOfConversation.textnodeMessageList.buttonReply, "Enabled", cmpEqual, true);
  //Checks whether the 'contentText' property of the Aliases.browser.pageSweng431final5.sectionStartOfConversation.textnodeMessageList.buttonReply object equals 'Reply'.
  aqObject.CheckProperty(Aliases.browser.pageSweng431final5.sectionStartOfConversation.textnodeMessageList.buttonReply, "contentText", cmpEqual, "Reply");
  //Clicks the 'buttonUserMenu4' button.
  Aliases.browser.pageHome.navNavigation.buttonUserMenu4.ClickButton();
  //Clicks the 'panelLogout' control.
  Aliases.browser.pageHome.navNavigation.buttonUserMenu4.panelLogout.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageHome.Wait();
  //Clicks the 'textboxEmailOrUsername' control.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Click();
  //Enters 'demo_user_2@email.com' in the 'textboxEmailOrUsername' object.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Keys("demo_user_2@email.com");
  //Clicks the 'passwordboxPassword' control.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.Click();
  //Sets the text Project.Variables.user_password in the 'passwordboxPassword' text editor.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.SetText(Project.Variables.user_password);
  //Enters '[Enter]' in the 'passwordboxPassword' object.
  Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.Keys("[Enter]");
  //Clicks the 'buttonOpenDirectory' button.
  Aliases.browser.pageHome.sectionHome.buttonOpenDirectory.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageDirectorySweng431final.Wait();
  //Clicks the 'panel2' control.
  Aliases.browser.pageDirectorySweng431final.sectionDirectory.panel2.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageSweng431final5.Wait();
  //Clicks the 'buttonJoin' button.
  Aliases.browser.pageSweng431final5.sectionStartOfConversation.footerThisRoomIsReadOnly.buttonJoin.ClickButton();
  //Checks whether the 'contentText' property of the Aliases.browser.pageSweng431final5.sectionStartOfConversation.footerThisRoomIsReadOnly2.panelThisRoomIsReadOnly object equals 'This room is read only'.
  aqObject.CheckProperty(Aliases.browser.pageSweng431final5.sectionStartOfConversation.footerThisRoomIsReadOnly2.panelThisRoomIsReadOnly, "contentText", cmpEqual, "This room is read only");
  //Checks whether the 'contentText' property of the Aliases.browser.pageSweng431final5.sectionStartOfConversation.textnodeMessageList.buttonReply object equals 'Reply'.
  aqObject.CheckProperty(Aliases.browser.pageSweng431final5.sectionStartOfConversation.textnodeMessageList.buttonReply, "contentText", cmpEqual, "Reply");
  //Checks whether the 'Enabled' property of the Aliases.browser.pageSweng431final5.sectionStartOfConversation.textnodeMessageList.buttonReply object equals True.
  aqObject.CheckProperty(Aliases.browser.pageSweng431final5.sectionStartOfConversation.textnodeMessageList.buttonReply, "Enabled", cmpEqual, true);
  //Clicks the 'buttonUserMenu4' button.
  Aliases.browser.pageHome.navNavigation.buttonUserMenu4.ClickButton();
  //Clicks the 'panel' control.
  Aliases.browser.pageHome.navNavigation.buttonUserMenu4.panel.Click();
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(258, 30);
}